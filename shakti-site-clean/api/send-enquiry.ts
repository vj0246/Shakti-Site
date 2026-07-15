import type { VercelRequest, VercelResponse } from "@vercel/node";

// ── Server-side enquiry handler ──────────────────────────────────────────────
// Sends enquiry emails via Resend (https://resend.com). The API key lives ONLY
// in Vercel environment variables - it is never exposed to the browser.
//
// Required env vars (set in Vercel dashboard → Project → Settings → Environment Variables):
//   RESEND_API_KEY  - from https://resend.com/api-keys
// Optional:
//   ENQUIRY_TO         - destination inbox   (default: shaktialloys123@gmail.com)
//   ENQUIRY_FROM       - verified sender     (default: enquiry@shaktialloys.in - domain must be verified in Resend)
//   SHEETS_WEBHOOK_URL - Google Apps Script web-app URL; every enquiry is appended
//                        as a row to the linked Google Sheet. Unset = logging skipped.

const MAX_LENGTHS: Record<string, number> = {
  name: 100,
  company: 150,
  email: 200,
  phone: 30,
  product: 50,
  qty: 100,
  message: 3000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = (req.body ?? {}) as Record<string, unknown>;

  // Honeypot - hidden field real users never fill. Bots do. Pretend success.
  // Logged so a false positive (e.g. browser autofill) is recoverable from Vercel logs.
  if (typeof body.refcode === "string" && body.refcode.trim() !== "") {
    console.warn("Honeypot triggered, enquiry dropped:", JSON.stringify({
      name: typeof body.name === "string" ? body.name : "",
      email: typeof body.email === "string" ? body.email : "",
    }));
    return res.status(200).json({ ok: true });
  }

  // Coerce + trim + cap lengths
  const f: Record<string, string> = {};
  for (const key of Object.keys(MAX_LENGTHS)) {
    const v = body[key];
    f[key] = typeof v === "string" ? v.trim().slice(0, MAX_LENGTHS[key]) : "";
  }

  if (!f.name) return res.status(400).json({ error: "Name is required" });
  if (!f.email || !EMAIL_RE.test(f.email)) {
    return res.status(400).json({ error: "A valid email is required" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return res.status(500).json({ error: "Email service not configured" });
  }

  const to = process.env.ENQUIRY_TO || "shaktialloys123@gmail.com";
  const from = process.env.ENQUIRY_FROM || "Shakti Alloys Website <enquiry@shaktialloys.in>";

  // Sheet log runs in parallel with the email send; both are awaited before
  // responding, so the enquiry is recorded even when one of them fails.
  const sheetUrl = process.env.SHEETS_WEBHOOK_URL;
  const sheetLog = sheetUrl
    ? fetch(sheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
        signal: AbortSignal.timeout(5000),
      }).catch((err) => console.error("Sheet log failed:", err))
    : Promise.resolve();

  const rows = [
    ["Name", f.name],
    ["Company", f.company || "Not provided"],
    ["Email", f.email],
    ["Phone", f.phone || "Not provided"],
    ["Product / Grade", f.product || "Not specified"],
    ["Quantity", f.qty || "Not specified"],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;color:#9A7B3C;font-size:12px;text-transform:uppercase;letter-spacing:1px;">${k}</td><td style="padding:6px 12px;color:#1C2B3A;font-size:14px;">${esc(v)}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;border:1px solid #E2DDD3;">
      <div style="background:#1C2B3A;padding:18px 24px;">
        <span style="color:#C4A35A;font-size:16px;font-weight:bold;">New Enquiry - shaktialloys.in</span>
      </div>
      <table style="width:100%;border-collapse:collapse;background:#F4F1EC;">${rows}</table>
      <div style="padding:16px 24px;background:#fff;">
        <div style="color:#9A7B3C;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Message</div>
        <div style="color:#1C2B3A;font-size:14px;line-height:1.7;white-space:pre-wrap;">${esc(f.message || "—")}</div>
      </div>
    </div>`;

  try {
    const [resp] = await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: f.email,
          subject: `Enquiry: ${f.product || "General"} - ${f.name}${f.company ? ` (${f.company})` : ""}`,
          html,
        }),
        signal: AbortSignal.timeout(8000),
      }),
      sheetLog,
    ]);

    if (!resp.ok) {
      const detail = await resp.text();
      console.error("Resend API error:", resp.status, detail);
      return res.status(502).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Enquiry send failed:", err);
    await sheetLog;
    return res.status(500).json({ error: "Failed to send email" });
  }
}

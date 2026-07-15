# Deployment - Shakti Alloys Site

Live at https://shaktialloys.in. Vercel project is Git-connected to https://github.com/vj0246/Shakti-Site (production branch `main`, root directory `shakti-site-clean`). Every push to `main` auto-deploys.

## Environment variables (Vercel dashboard > Settings > Environment Variables)

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | yes | Resend API key; form returns 500 without it |
| `ENQUIRY_TO` | no | Destination inbox (default: shaktialloys123@gmail.com) |
| `ENQUIRY_FROM` | no | Sender (default: `Shakti Alloys Website <enquiry@shaktialloys.in>`; the shaktialloys.in domain is verified in Resend - if that verification is ever removed, sends fail with 502 until this is set to a verified sender) |
| `SHEETS_WEBHOOK_URL` | no | Google Apps Script web-app URL; each enquiry appends a row to the "Enquiries" Google Sheet. Unset = sheet logging skipped, email still sends |

Changing an env var requires a redeploy to take effect.

## Enquiry form pipeline

Form POSTs to `/api/send-enquiry` (Vercel serverless function):
honeypot check > validate/trim/cap fields > log row to Google Sheet and send email via Resend in parallel > respond. Sheet write is awaited even when email fails, so enquiries survive a Resend outage. Honeypot hits are logged (`Honeypot triggered`) in Vercel function logs.

## Analytics

- Vercel Analytics: wired in `src/main.tsx`; enable via dashboard > Analytics tab if not already on.
- GA4: live with Measurement ID `G-CTQ1M0DS80`, initialised in `src/lib/analytics.ts` (`initAnalytics`). All `trackEvent` calls (form submits, phone clicks, brochure downloads) flow automatically. To change the ID, edit `GA_ID` in that file.

## EmailJS cleanup (old service)

The old bundle publicly shipped an EmailJS public key. That key is burned: log into the EmailJS dashboard and delete the API key / email service. (The key value is intentionally not repeated here.)

## Post-deploy checks

- Security headers: https://securityheaders.com/?q=shaktialloys.in (CSP has no 'unsafe-inline' for scripts)
- Google Search Console: add property `shaktialloys.in`, submit `https://shaktialloys.in/sitemap.xml`
- UptimeRobot: HTTPS monitor on https://shaktialloys.in, 5-minute interval
- OG previews: WhatsApp self-send, https://www.linkedin.com/post-inspector/

## Local development

```
npm install
npm run dev        # site at http://localhost:5173 (form API needs `npx vercel dev`)
npm run typecheck  # must stay clean
npm run build      # production build to dist/
```

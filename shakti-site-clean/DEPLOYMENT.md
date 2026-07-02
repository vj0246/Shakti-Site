# Deployment Checklist — Production Hardening

Branch `production-hardening` contains all changes. `main` holds the pre-hardening snapshot of the deployed site.

## 1. Required before deploying this branch

### Resend (enquiry form backend)
The contact form now POSTs to `/api/send-enquiry` (Vercel serverless function). EmailJS is fully removed.

1. Create free account at https://resend.com (3,000 emails/month free).
2. Create an API key: https://resend.com/api-keys
3. In Vercel dashboard → Project → **Settings → Environment Variables**, add:
   - `RESEND_API_KEY` = the key (all environments)
4. **Sender address:** by default the function sends from `onboarding@resend.dev`, which Resend only delivers to the email address that owns the Resend account. Two options:
   - **Quick:** sign up for Resend using `shaktialloys123@gmail.com` — works immediately.
   - **Proper:** verify the `shaktialloys.in` domain in Resend (Settings → Domains, add the DNS records they show), then set env var `ENQUIRY_FROM` = `Shakti Alloys <enquiry@shaktialloys.in>`. Removes all delivery restrictions and improves deliverability.
5. Optional env vars: `ENQUIRY_TO` (default `shaktialloys123@gmail.com`), `ENQUIRY_FROM`.

### EmailJS cleanup (old service)
The exposed public key `o1rNlis8Nij1IKM_1` shipped in the old bundle. After this branch deploys:
- Log into EmailJS dashboard and **delete the API key / service**, or at minimum enable domain restriction. The key is in the wild (old deploys, caches) — treat it as burned.

## 2. Analytics

### Vercel Analytics
`@vercel/analytics` is wired in `src/main.tsx`. Enable it: Vercel dashboard → Project → **Analytics** tab → Enable. Free tier included.

### Google Analytics 4
Loader in `index.html` is inert until you paste a real ID:
1. Create GA4 property at https://analytics.google.com → get Measurement ID (`G-...`).
2. In `index.html`, replace `G-XXXXXXXXXX` in the line `var GA_ID = "G-XXXXXXXXXX";`.
3. Redeploy. All existing `trackEvent` calls (form submits, phone clicks, brochure downloads, nav) start flowing automatically.

## 3. After deploy

### Google Search Console
1. https://search.google.com/search-console → Add property `shaktialloys.in` (domain property, verify via DNS TXT record).
2. Submit sitemap: `https://shaktialloys.in/sitemap.xml`.
3. Request indexing for the homepage.

### UptimeRobot (free monitoring)
1. https://uptimerobot.com → free account.
2. Add HTTP(S) monitor for `https://shaktialloys.in`, 5-minute interval, email alerts.

### Verify security headers
After deploy, check https://securityheaders.com/?q=shaktialloys.in — should score A.

### Verify OG previews
- WhatsApp: send yourself the link.
- LinkedIn: https://www.linkedin.com/post-inspector/
- Facebook: https://developers.facebook.com/tools/debug/

## 4. Known remaining items (optional)

- **Brochure PDF is 13 MB** — consider compressing (e.g. https://www.ilovepdf.com/compress_pdf or Adobe) to ~2-3 MB. Big win for mobile users on Indian networks.
- **Deploy via GitHub** — push this repo to GitHub and connect the repo in Vercel for automatic deploys per commit (currently CLI/manual deploys).
- Six unused component files were deleted on this branch (never imported); they remain recoverable on `main`.

## 5. Local development

```
npm install
npm run dev        # site at http://localhost:5173 (form API won't run — use `vercel dev` for that)
npm run typecheck  # must stay clean
npm run build      # production build to dist/
```

To test the serverless function locally: `npx vercel dev` (requires `vercel login` + link once).

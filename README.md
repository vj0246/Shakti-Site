# ⚙️ Shakti Alloys Private Limited — Corporate Website

<div align="center">

**🌐 Live Site → [www.shaktialloys.in](https://www.shaktialloys.in)**

![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-4.4-646CFF?style=for-the-badge&logo=vite)

</div>

---

## 📋 Executive Summary

Corporate website for **Shakti Alloys Private Limited** — a Mumbai-based ISO 9001:2015 certified aluminium alloy ingot manufacturer with 14+ years of experience, supplying foundries across **52+ nations on 6 continents**.

Built ground-up with a bespoke editorial design system — no templates, no UI kits. Features animated counters, scroll-reveal sections, an 18-grade interactive alloy catalogue, region-based global presence cards, and a contact form backed by a **serverless API** (Vercel Functions + Resend) — no email credentials ever ship to the browser.

| Property | Value |
|---|---|
| **Live URL** | https://www.shaktialloys.in |
| **Stack** | React 18 + TypeScript + Vite |
| **Hosting** | Vercel (Production) |
| **Domain Registrar** | GoDaddy |
| **Form Backend** | Vercel Serverless Function + Resend API |
| **Analytics** | Vercel Analytics + Google Analytics 4 |
| **Fonts** | Outfit · Lora · IBM Plex Mono |

---

## 🏗️ Architecture

```
Browser
  │
  ├── Static site (Vercel Edge CDN)
  │     dist/ built by Vite · security headers via vercel.json
  │     CSP · HSTS · X-Frame-Options · nosniff · Referrer-Policy
  │
  ├── POST /api/send-enquiry  (Vercel Serverless Function)
  │     input validation · honeypot anti-spam · HTML escaping
  │     → Resend API (RESEND_API_KEY server-side env var only)
  │     → shaktialloys123@gmail.com
  │
  └── Analytics
        Vercel Analytics (built-in) + GA4 (conditional loader)
```

**Deploy pipeline:** push to `main` → Vercel CI builds (`vite build`) → Edge CDN. DNS via GoDaddy (`A @ → Vercel`, `CNAME www → vercel-dns`).

---

## 🔐 Production Hardening

- **No secrets in the client bundle.** The enquiry form posts to `/api/send-enquiry`; the Resend API key lives only in Vercel environment variables.
- **Anti-spam:** hidden honeypot field, silently dropped server-side; server-side validation and length caps on all fields; HTML escaping before email render.
- **Security headers** (see `shakti-site-clean/vercel.json`): Content-Security-Policy, Strict-Transport-Security (2y, preload), X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy, Permissions-Policy.
- **SEO:** OpenGraph + Twitter cards, canonical URL, Organization + LocalBusiness JSON-LD structured data, `sitemap.xml`, `robots.txt`.
- **Performance:** hero image preload + `fetchPriority`, lazy-loaded below-fold images, font preconnect, immutable caching for hashed assets. 66 KB gzipped JS.
- **Reliability:** custom 404 page, full favicon set + webmanifest.

Setup steps for env vars, Resend, GA4, Search Console: **[`shakti-site-clean/DEPLOYMENT.md`](shakti-site-clean/DEPLOYMENT.md)**

---

## 📁 Project Structure

```
shakti-site-clean/
│
├── api/
│   └── send-enquiry.ts          # Serverless form handler (Resend)
│
├── public/                       # Static assets served at root
│   ├── foundry-hero.png          # Hero image
│   ├── og-image.jpg              # Social share preview (1200×630)
│   ├── favicon-*.png, icon-*.png # Favicon set
│   ├── 404.html                  # Custom not-found page
│   ├── sitemap.xml · robots.txt · site.webmanifest
│   └── shakti-alloys-brochure.pdf
│
├── src/
│   ├── main.tsx                  # Entry + Vercel Analytics
│   ├── lib/analytics.ts          # GA4 event helper (trackEvent)
│   ├── app/
│   │   ├── App.tsx               # Root + scroll-reveal observer
│   │   └── components/
│   │       ├── header.tsx        # Sticky nav + mobile menu
│   │       ├── hero.tsx          # Full-screen hero + animated counters
│   │       ├── about-section.tsx # Company story + certifications
│   │       ├── products-section.tsx  # 4-tab, 18-grade catalogue
│   │       ├── facilities-section.tsx# Plant specs + process + USPs
│   │       ├── global-presence.tsx   # 6-region export network
│   │       └── footer.tsx        # Contact form → /api/send-enquiry
│   └── styles/                   # Global CSS + design tokens
│
├── index.html                    # SEO meta, JSON-LD, GA4 loader
├── vercel.json                   # Build config + security headers
├── DEPLOYMENT.md                 # Ops checklist (env vars, DNS, SEO)
└── .env.example                  # Documented env vars (no secrets)
```

---

## 🎨 Design System

Warm editorial palette — aged parchment + brass metalwork:

```css
--paper: #F4F1EC;   /* warm off-white background */
--ink:   #1C2B3A;   /* deep navy text */
--brass: #9A7B3C;   /* brand accent */
--brass-light: #C4A35A;
```

| Font | Role |
|---|---|
| **Outfit** 700–900 | Display headings, labels, numbers |
| **Lora** 400–600 italic | Body, editorial copy |
| **IBM Plex Mono** | Section numbers, stats, metadata |

Scroll-reveal is progressive-enhancement safe: content is visible by default, animates only after `js-loaded` is set.

---

## 🏢 Company Reference

| Field | Value |
|---|---|
| **Company** | Shakti Alloys Private Limited |
| **Directors** | Vinay Jain · Vikram Jain |
| **Mumbai Office** | A103 Ramji House, Kalbadevi Road, Mumbai 400 002 |
| **Factory** | H No 813, Mama Compound, Saravali, Bhiwandi, Dist Thane – 421302 |
| **Capacity** | 12,000 MT/year · 8 rotary furnaces · 24×7 |
| **Certifications** | ISO 9001:2015 · BIS · Make in India · Startup India |
| **Memberships** | BNMA · MRAI · ALEMAI |

---

## 🚀 Local Development

```bash
git clone https://github.com/vj0246/Shakti-Site.git
cd Shakti-Site/shakti-site-clean
npm install
npm run dev          # → http://localhost:5173
npm run typecheck    # tsc — must stay clean
npm run build        # → dist/
npx vercel dev       # run site + serverless API locally
```

Environment variables: see `.env.example`. Set real values in Vercel dashboard, never in git.

---

## 🛣️ Roadmap

- [x] Serverless form backend (secrets out of client bundle)
- [x] `sitemap.xml`, `robots.txt`, structured data, OG tags
- [x] Security headers (CSP, HSTS, etc.)
- [x] GA4 + Vercel Analytics wiring
- [x] Favicon set + custom 404
- [ ] Google Search Console verification + sitemap submission
- [ ] Compress brochure PDF (13 MB → ~3 MB)
- [ ] WhatsApp floating CTA button
- [ ] Replace placeholder images with real factory photography

---

<div align="center">

**🌐 [www.shaktialloys.in](https://www.shaktialloys.in)**

*ISO 9001:2015 Certified · BIS Certified · 12,000 MT Annual Capacity · 52+ Nations*

</div>

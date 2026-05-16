# ⚙️ Shakti Alloys Private Limited — Corporate Website

<div align="center">

**🌐 Live Site → [www.shaktialloys.in](https://www.shaktialloys.in)**

![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-4.4-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3-06B6D4?style=for-the-badge&logo=tailwindcss)

</div>

---

## 📋 Executive Summary

This is the **full-stack corporate website** for **Shakti Alloys Private Limited** — a Mumbai-based ISO 9001:2015 certified aluminium alloy ingot manufacturer with 14+ years of experience, supplying foundries across **52+ nations on 6 continents**.

The site was built ground-up with a **bespoke editorial design system** — no templates, no UI kits. It features animated counters, scroll-reveal sections, a fully searchable 18-grade alloy catalogue, interactive global presence cards, and a live contact form powered by EmailJS. Deployed on Vercel with a custom `.in` domain routed through GoDaddy DNS.

| Property | Value |
|---|---|
| **Live URL** | https://www.shaktialloys.in |
| **Backup URL** | https://shakti-alloys-site.vercel.app |
| **Stack** | React 18 + TypeScript + Vite + Tailwind CSS v3 |
| **Hosting** | Vercel (Production) |
| **Domain Registrar** | GoDaddy |
| **Email Service** | EmailJS |
| **Fonts** | Outfit · Lora · IBM Plex Mono |
| **Build Time** | ~8 seconds |

---

## 🏗️ Architecture Pipeline

```
┌─────────────────────────────────────────────────────────────────┐
│                        DEVELOPMENT                              │
│                                                                 │
│   Source (.tsx/.css)  →  Vite Dev Server  →  localhost:5173     │
│   Hot Module Reload        Esbuild                              │
└─────────────────────┬───────────────────────────────────────────┘
                      │ git push origin main
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                    GITHUB (vj0246/Shakti-Site)                  │
│                                                                 │
│   main branch  →  Webhook trigger  →  Vercel CI/CD             │
└─────────────────────┬───────────────────────────────────────────┘
                      │ Auto-deploy on push
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                    VERCEL BUILD PIPELINE                        │
│                                                                 │
│   npm install                                                   │
│   → node ./node_modules/vite/bin/vite.js build                  │
│   → Esbuild transpiles TSX → JS                                 │
│   → Rollup bundles → /dist                                      │
│   → Static assets deployed to Vercel Edge Network (CDN)        │
└─────────────────────┬───────────────────────────────────────────┘
                      │ Edge CDN serves globally
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                    DNS ROUTING (GoDaddy)                        │
│                                                                 │
│   A Record:     @ → 216.198.79.1 (Vercel IP)                   │
│   CNAME Record: www → 8b00ae45ec0db1b5.vercel-dns-017.com      │
│                                                                 │
│   shaktialloys.in ──redirects──▶ www.shaktialloys.in           │
└─────────────────────┬───────────────────────────────────────────┘
                      │ Contact form submissions
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                    EMAILJS PIPELINE                             │
│                                                                 │
│   Browser Form Submit                                           │
│   → emailjs.send() [client-side, zero backend]                 │
│   → EmailJS API (service_shaktialloys)                          │
│   → SMTP Relay → shaktialloys123@gmail.com                      │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
shakti-site-clean/
│
├── public/                          # Static assets served at root
│   ├── foundry-hero.png             # Hero — AI foundry illustration
│   ├── about-metal.png              # About — metal rods/sections photo
│   ├── spectro-lab.png              # Facilities — OES spectrometry lab
│   ├── logo.png                     # SA logo (black, bold SA lettering)
│   └── shakti-alloys-brochure.pdf   # Downloadable company brochure
│
├── src/
│   ├── main.tsx                     # React DOM entry point
│   ├── app/
│   │   ├── App.tsx                  # Root component + scroll observer
│   │   └── components/
│   │       ├── header.tsx           # Sticky nav + mobile hamburger
│   │       ├── hero.tsx             # Full-screen hero + animated counters
│   │       ├── about-section.tsx    # Company story + directors
│   │       ├── products-section.tsx # 4-tab catalogue + search (18 grades)
│   │       ├── facilities-section.tsx  # Plant specs + spectrometry lab
│   │       ├── global-presence.tsx  # Interactive 6-region world cards
│   │       ├── quality-section.tsx  # ISO/BIS/certifications
│   │       ├── quality-methodology.tsx # QC process breakdown
│   │       ├── process-grid.tsx     # Manufacturing process steps
│   │       ├── company-timeline.tsx # Milestones since 2012
│   │       ├── metric-bar.tsx       # Key stats strip
│   │       ├── logistics-map.tsx    # Export logistics section
│   │       └── footer.tsx           # Contact form (EmailJS) + links
│   │
│   └── styles/
│       ├── index.css                # Tailwind + globals + reveal animation
│       └── theme.css                # CSS custom properties / design tokens
│
├── index.html                       # HTML shell + font imports + meta tags
├── vite.config.ts                   # Vite config with React plugin
├── tailwind.config.js               # Tailwind content paths
├── postcss.config.mjs               # PostCSS + Autoprefixer
├── tsconfig.json                    # TypeScript compiler config
├── vercel.json                      # Vercel build overrides
└── package.json                     # Dependencies + npm scripts
```

---

## 🎨 Design System

### Color Palette

Warm editorial palette inspired by aged parchment and brass metalwork. All values are CSS custom properties.

```css
:root {
  /* Paper tones — backgrounds */
  --paper:   #F4F1EC;   /* Primary background — warm off-white */
  --paper-2: #EDE9E1;   /* Section alternates */
  --paper-3: #E2DDD3;   /* Deep section backgrounds */

  /* Ink tones — typography */
  --ink:   #1C2B3A;     /* Primary text — deep navy */
  --ink-3: #4A5A6B;     /* Secondary text */
  --ink-4: #7A8A9B;     /* Tertiary / captions */

  /* Brand accent — brass */
  --brass:       #9A7B3C;   /* Primary brand accent */
  --brass-light: #C4A35A;   /* Highlights, hover states */
}
```

### Typography

Three-font system with distinct roles:

| Font | Weight | Role |
|---|---|---|
| **Outfit** | 700–900 | Display headings, labels, numbers |
| **Lora** | 400–600 italic | Body text, descriptions, editorial copy |
| **IBM Plex Mono** | 400–500 | Section numbers, stats, tags, metadata |

### Scroll Reveal System

Content is **visible by default** (prevents flash of invisible content on slow connections), then animates in after JS confirms it loaded:

```css
.reveal { opacity: 1; transform: none; transition: opacity 0.6s ease, transform 0.6s ease; }
.js-loaded .reveal { opacity: 0; transform: translateY(20px); }
.js-loaded .reveal.visible { opacity: 1; transform: none; }
```

```tsx
// App.tsx — marks JS as loaded and starts IntersectionObserver
useEffect(() => {
  document.body.classList.add('js-loaded');
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}, []);
```

---

## 🧩 Component Deep Dive

### `hero.tsx` — Cubic Ease-Out Animated Counters

Counters fire once on scroll entry using `IntersectionObserver` + `setInterval` with a cubic ease-out curve for a natural deceleration effect:

```tsx
function Counter({ to, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const frames = 72; let frame = 0;
        const t = setInterval(() => {
          frame++;
          const p = 1 - Math.pow(1 - frame / frames, 3); // cubic ease-out
          setVal(Math.floor(p * to));
          if (frame >= frames) { setVal(to); clearInterval(t); }
        }, 18); // ~60fps
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);

  return <div ref={ref}>{val}{suffix}</div>;
}
```

**Stats:** `12,000+ MT` capacity · `52+` nations · `14+` years · `8` furnaces

---

### `products-section.tsx` — Live Search Across 18 Alloy Grades

Real-time search filters across all alloy metadata simultaneously:

```tsx
const filtered = alloys.filter(a =>
  [a.grade, a.standard, a.spec, a.desc, ...a.industries]
    .join(' ')
    .toLowerCase()
    .includes(search.toLowerCase())
);
```

**4 tabs:** Alloy Ingots · Master Alloys · Trading · Scrap Purchase

**Grades include:** ADC12, LM2, LM4, LM6, LM9, LM12, LM13, LM24, LM25, LM26, A380, A413, 6061, 6063 and more — each with chemical composition, industries, and international standards (IS / JIS / ASTM / BS).

---

### `global-presence.tsx` — Stateful Region Cards

Six colour-coded region cards that expand on click revealing country tags and export context. Each region has a unique brand colour:

| Region | Nations | Colour |
|---|---|---|
| Middle East | 7 | `#C4A35A` Brass |
| Europe | 8 | `#B47FFF` Violet |
| Africa | 8 | `#50E3A4` Emerald |
| South & SE Asia | 7 | `#4DB8FF` Sky |
| Americas | 7 | `#FF7F7F` Coral |
| Oceania | 2 | `#FFB347` Amber |

---

### `footer.tsx` — Zero-Backend Contact Form via EmailJS

```tsx
const EMAILJS_SERVICE  = "service_shaktialloys";
const EMAILJS_TEMPLATE = "template_shaktialloys";
const EMAILJS_KEY      = "o1rNlis8Nij1IKM_1";

// States: idle → sending → sent | error
await emailjs.send(SERVICE, TEMPLATE, {
  from_name, company, reply_to, phone, product, qty, message
}, KEY);
```

Submissions go directly to `shaktialloys123@gmail.com` with no server required.

---

## 🏢 Company Reference Data

| Field | Value |
|---|---|
| **Company** | Shakti Alloys Private Limited |
| **Directors** | Vinay Jain (+91 93222 24565) · Vikram Jain (+91 98212 06611) |
| **Email** | shaktialloys123@gmail.com |
| **Mumbai Office** | A103 Ramji House, Kalbadevi Road, Mumbai 400 002 |
| **Office Tel** | 022 22003237 / 40113237 |
| **Factory** | H No 813, S No 41/2/2, Mama Compound, Thane Nasik Bypass, Village Saravali, Bhiwandi, Dist Thane – 421302 |
| **Established** | 2012 |
| **Annual Capacity** | 12,000 MT |
| **Rotary Furnaces** | 8 Units |
| **Daily Output** | ~35 MT |
| **Plant Area** | 20,000 sq.ft · Total Land: 1,10,000 sq.ft+ |
| **Operations** | 24×7 |
| **Certifications** | ISO 9001:2015 · BIS · Make in India · Startup India |
| **Memberships** | BNMA · MRAI · ALEMAI |

---

## ⚙️ Tech Stack

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@emailjs/browser": "^4.3.3",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.4.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.2",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24"
  }
}
```

**Why Vite:** Esbuild transpilation is 10–100× faster than Babel. Cold start in 236ms. Rollup production bundling with superior tree-shaking.

**Why TypeScript with Vite:** Vite handles TSX natively via Esbuild — `tsc` is NOT in the build pipeline. Zero type-check overhead at build time; TypeScript is used purely for editor intelligence and prop safety.

**Build command:** `node ./node_modules/vite/bin/vite.js build` — calls Vite through Node directly to bypass Linux binary permission restrictions on Vercel (exit code 126 issue).

---

## 🚀 Local Development

```bash
git clone https://github.com/vj0246/Shakti-Site.git
cd Shakti-Site/shakti-site-clean
npm install
npm run dev        # → http://localhost:5173
npm run build      # → /dist
npm run preview    # Preview production build
```

---

## 🌍 Deployment & DNS

### Vercel Config (`vercel.json`)
```json
{
  "buildCommand": "node ./node_modules/vite/bin/vite.js build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

### GoDaddy DNS Records
| Type | Name | Value | TTL |
|---|---|---|---|
| A | `@` | `216.198.79.1` | 600s |
| CNAME | `www` | `8b00ae45ec0db1b5.vercel-dns-017.com` | 1 Hour |

---

## 🔍 SEO & Google Indexing

**To get indexed on Google:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → `shaktialloys.in`
3. Verify via DNS TXT record in GoDaddy
4. Generate sitemap at [xml-sitemaps.com](https://xml-sitemaps.com) and submit
5. Use **URL Inspection → Request Indexing**

---

## 🛣️ Roadmap

- [ ] Move EmailJS credentials to Vercel environment variables (`.env`)
- [ ] Add `sitemap.xml` and `robots.txt`
- [ ] Google Search Console verification + sitemap submission
- [ ] WhatsApp floating CTA button
- [ ] Replace placeholder images with real factory photography
- [ ] Google Analytics GA4 integration
- [ ] Lighthouse performance audit (target: 90+ score)

---

<div align="center">

**🌐 [www.shaktialloys.in](https://www.shaktialloys.in)**

*ISO 9001:2015 Certified · BIS Certified · Make in India · Startup India*

*12,000 MT Annual Capacity · 52+ Nations · 6 Continents · Mumbai, India*

</div>

# Meridian — Owner's Briefing BI Dashboard Template

> A single-screen, owner-facing business briefing. The dashboard a CFO would happily open every Monday morning. Built with editorial taste, not enterprise sludge.

By Dev Rajput · Soul in Motion

---

## What This Template Contains

Just one file:

- **`Meridian-BI-Dashboard.html`** — A complete, standalone single-page BI dashboard (~51 KB). All HTML, CSS, JavaScript, and chart logic live in one file. No build step. No dependencies. Open it in a browser and it just works.

That's the entire product.

---

## What's on the Dashboard

The page renders a fictional kitchen-essentials brand "Meridian Goods" — Q2 FY26 owner's briefing. You'll replace this with your own brand and numbers.

- **Top nav tabs:** Overview · Revenue · Acquisition · Catalog · Cohorts
- **Hero KPI:** Total revenue ($487,234) over 30 days with comparison to prior period and plan
- **KPI row:** Orders · AOV · Repeat Rate · Gross Margin — each with delta vs. prior period
- **Daily revenue chart:** bar chart with weekend highlighting, prior-period overlay, plan line, event annotation
- **Customer acquisition row:** CAC, ROAS, Marketing Spend, LTV:CAC
- **Top SKUs table:** ranked by revenue with inline progress bars
- **ROAS by channel:** ranked bar chart with target band
- **CAC by source:** 12-week trend
- **Founder's read insight panel** + **Cash & runway summary**
- **Date range filter strip:** 7D · 30D · 90D · QTD · YTD + custom picker

The aesthetic: warm-paper background, slate ink, single burnt-amber accent. Type is Instrument Serif for display, Geist for UI, JetBrains Mono with tabular numerals for every figure. All fonts loaded from Google Fonts.

---

## Who This Is For

Three buyer types:

1. **Founders** with an e-commerce / SaaS / agency business who want a beautiful internal dashboard their team and investors can read at a glance.
2. **Freelance data analysts** running monthly reports for SMB clients — drop in their numbers, screenshot, ship.
3. **Agencies** who want to brand a "monthly business review" deliverable that looks like a $5K consulting product.

---

## How to Customize (15 Minutes per Brand)

1. Open `Meridian-BI-Dashboard.html` in a text editor.
2. Find-and-replace these strings:
   - `Meridian Goods` → your brand name
   - `OWNER'S BRIEFING · Q2 FY26` → your reporting label
   - `For April 14 – May 14, 2026` → your date range
3. Replace the placeholder numbers in the `<script>` data block near the bottom of the file. Look for `const DATA = { ... }` (or similar pattern) — every chart is fed from there.
4. Change the burnt-amber accent color: search for `#C8732A` and `#E8A04A`; replace with your accent.
5. Save. Open in a browser. Done.

---

## How to Use This as a Recurring Deliverable

Every month, fork the HTML, drop in the new month's numbers, save as `Acme-Briefing-2026-05.html`, deliver as a single attachment.

Even better: pair this with the AI Content Automation Kit (Product 1 in this store) to auto-generate the underlying numbers from a Google Sheet of revenue, then just paste the output JSON into the data block.

For client work: this is the visual artifact behind a $500-$2,000 monthly retainer. Sell the dashboard as the deliverable, sell yourself as the analyst. (See the SMB Dashboard Starter Kit — Product 3 — for the playbook around pricing and pitching this kind of service.)

---

## How to Deploy / Share

It's just a static HTML file. Three easiest paths:

1. **Email it directly** — attach the `.html` file. The recipient opens it in their browser. Done.
2. **Print to PDF** — open in Chrome → Cmd/Ctrl-P → Save as PDF. Beautiful PDF report in 5 seconds.
3. **Host on Vercel / Netlify / Cloudflare Pages** — drag the file onto their dashboard, get a URL.

---

## Tech Notes

- **Stack:** vanilla HTML + CSS + JS. No framework. No build step.
- **Fonts:** Instrument Serif (display) + Geist (UI) + JetBrains Mono (numerals). Loaded from Google Fonts.
- **Charts:** drawn with inline SVG — fully editable, no Chart.js or similar dependency.
- **Browser support:** anything from the last 4 years.
- **Responsive:** designed primarily for desktop / large tablet (this is an exec briefing, not a mobile app). Degrades reasonably to ~768px.
- **License:** Use in unlimited personal and commercial projects (and client deliverables). Don't resell the template itself.

---

## Contact

Questions? **rajputdev77.gumroad.com** or DM **@soulmotion.studio** on Instagram.

— Dev Rajput
Soul in Motion

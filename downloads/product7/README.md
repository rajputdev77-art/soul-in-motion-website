# Console Kit — AI API Dashboard Template (5 Screens)

> An AI API console template that doesn't look like a Tailwind UI clone. Five fully-built screens. Hand-tuned dark and light modes. Real interactivity. Drop in your brand and ship by Friday.

By Dev Rajput · Soul in Motion

---

## What's Inside

```
console-kit/
├── index.html         ← Buyer-facing demo / landing page (links to every screen)
├── 01-Console.html    ← Main dashboard — KPIs, request chart with tooltip, API keys, billing
├── 02-Logs.html       ← Live request inspector — live-tail, filters, request/response viewer
├── 03-Empty.html      ← Day-0 onboarding — 4-step getting-started checklist with code preview
├── 04-SignIn.html     ← Sign-in screen — SSO, email/password, split layout with testimonial
├── 05-Pricing.html    ← 3-tier pricing — billing toggle, featured ribbon, full feature table, FAQ
├── tokens.css         ← Every color, type, spacing, motion variable. Edit here to rebrand.
├── kit.css            ← Shared chrome — topbar, footer, cards, buttons, pills, tables
├── README.md          ← The included readme (covers re-branding, deployment, support)
├── PROMPT.md          ← The original Claude prompt that generated this kit (use to extend)
└── LICENSE.md         ← MIT-for-product license
```

That's it. **No build. No npm. No node_modules. No deps.** Just HTML, CSS, and a sprinkle of vanilla JS.

---

## What This Is For

You're building an AI API product (Stripe-style developer console). You need:
- A dashboard with KPIs and a request chart
- A live logs viewer that feels like Vercel / Datadog
- A sign-in page that doesn't look generic
- A day-0 empty state with a code snippet your devs will actually copy
- A pricing page with a billing toggle and a feature compare table

This template is all five screens, designed by Claude Design, hand-tuned for taste and detail. Drop in your brand color and your wordmark, and you've shipped a marketing-and-app combo that looks like a Series B company in one evening.

---

## Re-branding in 60 Seconds

Open `console-kit/tokens.css`. The first 60 lines are the entire palette. Change these:

```css
:root {
  --accent: #5AA9FF;          /* primary brand color */
  --accent-strong: #7DBDFF;   /* hover variant */
  --fg-0: #F2F5F9;            /* near-white ink */
  --bg-0: #07090C;            /* near-black surface */
}
```

Then open any `.html` file and find this block:

```html
<div class="brand">
  <div class="logo-mark">⟁</div>
  <div class="wordmark">axon<span class="slash">/</span><span class="sub">api</span></div>
</div>
```

Replace the glyph and wordmark. Done across all five screens — they all use the same brand structure.

The light theme lives in `kit.css` under `:root[data-theme="light"]` — same six tokens. If you only want dark, delete that block.

---

## Tech Notes

- **Fonts:** Inter + JetBrains Mono via Google Fonts CDN (loaded in `tokens.css`).
- **Icons:** ~100 inline SVGs, lucide-style, stroke-based. No icon-font dependency.
- **JS:** Each screen has a single inline `<script>` block at the bottom. ~50–400 lines per file. No external scripts.
- **Browser support:** any browser from the last 4 years. Uses CSS Grid, custom properties, `text-wrap: pretty`.
- **Responsive:** all screens degrade cleanly down to 320px width.
- **Theme toggle:** persists in `localStorage` under the key `axon_theme`. Rename to your brand if you like.

---

## How to Deploy

Same deal as any static HTML site:

**Vercel (recommended):** drag the `console-kit/` folder onto the dashboard, get a URL.

**Netlify:** drop the folder onto netlify.com (drag-and-drop deploy), get a URL.

**Cloudflare Pages:** zip the folder, upload to pages.cloudflare.com, get a URL.

For staging your demos, point each `.html` file at a separate route — e.g. `/console`, `/logs`, `/pricing`, etc.

---

## Roadmap (Free Upgrades for Buyers)

**v1.1** (~30 days from launch)
- Settings screen (profile, billing details, security)
- Team / roles screen
- Webhook configuration screen

**v2.0** (~60 days from launch — free upgrade)
- Next.js 15 + Tailwind + shadcn/ui port
- Same designs, componentized
- Mock data in `lib/mock.ts`

If you're a buyer, you get every update for free. Just re-download from your Gumroad library.

---

## License

See `console-kit/LICENSE.md` in the package. TL;DR:
- Use in unlimited personal and commercial projects.
- Modify any way you want.
- Don't resell the kit itself.
- Don't use it to build a competing template kit.

---

## Contact

Questions? **rajputdev77.gumroad.com** or DM **@soulmotion.studio** on Instagram.

— Dev Rajput
Soul in Motion

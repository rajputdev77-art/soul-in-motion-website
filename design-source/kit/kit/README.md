# Console Kit — AI API Dashboard Template

**Five screens. Dark + light. No build step. No framework lock-in.**

A drop-in HTML/CSS template for AI API console products — the dashboard, logs, sign-in, empty state, and pricing page you'd build for a Stripe-grade developer product.

---

## 📁 What's in the box

| File | What it is |
|---|---|
| `index.html` | The buyer-facing demo / landing page. Links to every screen. |
| `01-Console.html` | Main dashboard — KPIs, request chart with tooltip, API keys table, docs panel, billing summary. |
| `02-Logs.html` | Live request inspector — live-tail rows, filter chips, row select, request/response waterfall + body. |
| `03-Empty.html` | Day-0 onboarding — four-step getting-started checklist with code preview. |
| `04-SignIn.html` | Sign-in screen — SSO, email/password, split layout with testimonial + spend receipt. |
| `05-Pricing.html` | 3-tier pricing — billing toggle, featured ribbon, full feature compare table, FAQ. |
| `tokens.css` | Every color, type, spacing, motion variable. Edit here to rebrand. |
| `kit.css` | Shared chrome — topbar, footer, cards, buttons, pills, tables. |

---

## 🚀 Quick start

1. Unzip the folder anywhere.
2. Open `index.html` in any browser. That's it.
3. To edit, open the `.html` files in your editor of choice. Each screen is self-contained.

No npm, no build, no node_modules. Just HTML, CSS, and a sprinkle of vanilla JS.

---

## 🎨 Re-branding in 60 seconds

Open `tokens.css`. The first 60 lines are the entire palette. Change these:

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

Replace the glyph and wordmark. Done.

The light theme lives in `kit.css` under `:root[data-theme="light"]` — same six tokens. If you only want dark, delete that block.

---

## 🔧 Tech notes

- **Fonts:** Inter + JetBrains Mono via Google Fonts CDN (loaded in `tokens.css`).
- **Icons:** ~100 inline SVGs, lucide-style, stroke-based. No icon-font dependency.
- **JS:** Each screen has a single inline `<script>` block at the bottom. ~50–400 lines per file. No external scripts.
- **Browser support:** any browser shipped in the last 4 years. Uses CSS grid, custom properties, `text-wrap: pretty`.
- **Responsive:** all screens degrade cleanly down to 320px width.
- **Theme toggle:** persists in `localStorage` under the key `axon_theme`. Rename to your brand if you like.

---

## 📜 License

Bundled in `LICENSE.md`. TL;DR:

- ✅ Use in unlimited personal projects
- ✅ Use in unlimited commercial projects
- ✅ Modify any way you want
- ❌ Don't resell the kit itself
- ❌ Don't use it to build a competing template kit

---

## 🆘 Support

- Bugs / issues: `support@yourdomain.com`
- Feature requests for v1.x: same address, prefix subject with `[feature]`
- v2 roadmap: Next.js + Tailwind port, settings/team screens, webhook config screen

---

## 🗺️ Roadmap

**v1.1** (free upgrade, ~30 days)
- Settings screen (profile, billing details, security)
- Team / roles screen
- Webhook configuration screen

**v2.0** (free upgrade for v1 buyers, ~60 days)
- Next.js 15 + Tailwind + shadcn/ui port
- Same designs, componentized
- Mock data in `lib/mock.ts`

---

Built with care. Ship it well. 🛠️

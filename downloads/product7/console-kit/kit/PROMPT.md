# 🧠 PromptBase Listing — "AI API Console Dashboard Generator"

This is the second product. Sell **this prompt** on PromptBase. Buyers paste it into Claude / ChatGPT and get a Console-Kit-style dashboard tailored to their brand.

---

## 📝 Listing fields (paste these into PromptBase)

**Title:**
> Production-Grade AI API Console Dashboard — Full HTML/CSS Template Generator

**Subtitle / one-liner:**
> One prompt → a complete, single-file dashboard for any AI / API / SaaS product. Dark + light mode, KPI row, live chart, keys table, docs panel, billing — in the visual language of Linear / Stripe / Vercel.

**Category:** ChatGPT · Claude (HTML/Code)

**Tags:** `dashboard`, `admin-ui`, `template`, `SaaS`, `API`, `console`, `landing-page`, `Stripe-style`, `dev-tool`, `HTML`, `CSS`

**Suggested price:** $9.99 (PromptBase sweet spot for code-output prompts)

**Cover image:** screenshot of `01-Console.html` on a colored backdrop.

---

## 🎯 What the buyer gets

A single, battle-tested prompt that produces a **complete, working dashboard HTML file** when pasted into a frontier LLM. Includes:

- The master prompt itself (`PROMPT.md`)
- 4 worked example variations (`fintech`, `AI-API`, `analytics`, `e-commerce`)
- Instructions for swapping brand tokens, fonts, accent colors
- Tips on follow-up prompts to add new screens (logs, settings, pricing, etc.)

---

## ✂️ THE PROMPT (this is what buyers paid for)

> **You are a senior product designer at a YC-backed dev-tool startup.** Build a single, self-contained HTML file for a production-grade admin dashboard. The visual target is *Linear × Stripe × Vercel* — calm, dense, monospaced numbers, hairline borders, zero AI-slop gradients.
>
> **Product:** `{{PRODUCT_NAME}}` — `{{ONE_LINE_DESCRIPTION}}`.
> Example: *axon/api — an AI inference gateway with per-customer billing and usage caps.*
>
> **Constraints — non-negotiable:**
>
> 1. **One file**, inline `<style>` and `<script>`. Self-contained. Opens in any modern browser.
> 2. **Design tokens** at the top in `:root { ... }` — colors, type, spacing, radii, motion easing. Light theme override under `:root[data-theme="light"]`.
> 3. **Type:** Inter (UI) + JetBrains Mono (numbers/timestamps). Inter for sentences, Mono for *every* number, ID, hash, timestamp, code snippet.
> 4. **Color palette:** near-black surface (`#07090C`), near-white ink (`#F2F5F9`), one accent (a saturated blue or sand-yellow — pick one and stick to it), plus semantic profit-green and loss-red used **only** for status (never decoration). No gradients. No drop shadows except a single popover shadow token.
> 5. **Numbers** must be `font-feature-settings: "tnum" 1` and `font-variant-numeric: tabular-nums`. Always.
> 6. **Spacing** is on a 4px base. **Radii** are 4 / 8 / 12 / 16. **No rounded-pill cards.**
>
> **Required sections (in this order):**
>
> 1. **Top bar:** logo glyph + wordmark, org switcher, top nav (5–6 links), env switch (live/test with a pulsing green dot when live), search trigger with `⌘K` chip, theme toggle, notifications, avatar.
> 2. **Optional banner:** thin sand-yellow strip with a "test mode" warning. Hidden when env=live.
> 3. **Page head:** breadcrumb + H1 on the left, ticker-dot + meta on the right (last-request latency, region, build version).
> 4. **KPI row** (4 cards in a single bordered grid): main metric (with denominator), cost accrued, burn rate, rate-limit. Each has a label, a giant mono number, a tiny progress bar, and a delta vs prior period in green/red.
> 5. **Usage chart card:** 14-day bar chart, SVG, generated in inline JS from synthetic data (`Math.sin` waveform). Mouse-move shows a vertical crosshair + a floating popover with date · total · 2xx · errors · cost. Range tabs (1D / 7D / 14D / 30D / 90D) and a CSV button.
> 6. **Plan panel** beside the chart: tier, included volume, overage rate, renewal date, budget alert, "manage →" link.
> 7. **API keys table** (5–6 rows): name + creator subtitle, masked token with reveal + copy icons, env pill (live/test), permission pills (read/write/admin), 24h call count, last-used relative time, created date, row actions (rotate / edit / revoke).
> 8. **Endpoints / docs panel:** left rail of grouped endpoints with HTTP-method badges; right pane shows one endpoint with method + URL, description, params table, request code block with curl/node/python/go tabs, response code block with status pill, error list, links to full reference.
> 9. **Billing summary:** hero with open-balance number, projection bar (current → budget → projected total), per-endpoint usage breakdown table.
> 10. **Payment method + next invoice + webhook status** in a right column.
> 11. **Footer:** mono, dim, with version · status · changelog · region · live UTC clock.
>
> **Interactivity (real, not faked):**
>
> - Theme toggle persists in `localStorage`.
> - Env switch toggles the test-mode banner live.
> - Reveal/copy on each key token.
> - Range tabs and code-language tabs swap content.
> - Chart tooltip follows the cursor.
> - Footer clock ticks every second.
> - Subtle bar-entry animation on load (`scaleY` from 0).
>
> **Copy voice:**
>
> - Lowercase mono section labels (`api keys`, `last request 312 ms ago`).
> - Title-case UI labels (`Rate limit`, `Burn rate`).
> - Concrete numbers everywhere — never `1,234,567` for show. Make them plausible: 2.8M requests, $284.72 cost, 412ms p99, 0.03% errors.
>
> **Anti-patterns — refuse these:**
>
> - Gradient hero backgrounds
> - Rounded-pill containers with left-border accent stripes
> - Emoji used as iconography
> - Hand-drawn or pictorial SVG illustrations
> - More than 2 accent colors
> - Lorem ipsum
> - Centered-everything marketing copy
>
> Output the complete HTML file in a single fenced ```html block. ~1500–2000 lines is normal. Don't truncate.

---

## 🔁 Follow-up prompts (sell these as bundle add-ons)

**For Logs screen:**
> Now create `02-Logs.html` in the same design system. It's a request-inspector page: left column is a filter bar + a live-tail table of 32+ rows (status pill, verb, endpoint, latency, tokens, key, cost, time, req-id). New rows fade in at the top every ~1.4s when "live tail" is on. Right column is a sticky 460px detail pane: status + method + endpoint, request meta KVs, a 4-segment waterfall bar, request JSON, response JSON. Reuse `tokens.css` and the top bar exactly.

**For Sign-in screen:**
> Build `04-SignIn.html` — split layout. Left half: brand + form (GitHub / Google / SAML SSO, email + password with show/hide, "keep me signed in" + forgot password, primary submit, secure-with-2FA footer, legal footer). Right half: subtle radial-gradient background with three big stats (requests/mo, uptime, SOC2), a customer testimonial with avatar, and a "live spend · last 24h" receipt card at the bottom. Reuse the same tokens.

**For Pricing screen:**
> Build `05-Pricing.html`. Centered hero with monthly/annual pill toggle. Three pricing tiers (Builder $0, Team $79 featured with ribbon, Scale Custom). Each has a price, blurb, CTA button, and ~6 feature bullets with green check icons. Below: a full feature compare matrix grouped by section (Usage, Observability, Security, Support) with check icons and `em-dash` for missing. Below that: a 6-question FAQ accordion. Reuse the same tokens.

---

## 📦 What to put in the buyer download (Gumroad listing for the prompt bundle)

```
prompt-kit.zip
├── PROMPT.md             ← the full master prompt above
├── followups/
│   ├── 02-logs.md
│   ├── 04-signin.md
│   └── 05-pricing.md
├── examples/             ← screenshots of 4 variations
│   ├── ai-api.png
│   ├── analytics.png
│   ├── fintech.png
│   └── ecommerce.png
└── tips.md               ← "how to swap brand / fonts / accents"
```

---

## 💰 Pricing & positioning

| Where | What | Price | Why |
|---|---|---|---|
| **Gumroad** | The full HTML/CSS Kit (5 screens + assets) | **$49** launch / $79 list | Designers want the files. |
| **PromptBase** | The prompt that generates the kit | **$9.99** | Devs want the recipe. |
| **Gumroad** | Prompt-only bundle (cheaper) | **$19** | Cross-sell from PromptBase buyers. |

**Cross-promotion:**

- PromptBase listing → footer link "want the polished files instead? get the kit on Gumroad for $49"
- Gumroad listing → footer link "want to generate variations yourself? get the prompt on PromptBase for $9.99"

Both products feed each other.

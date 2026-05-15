# Soul in Motion — Website

The personal brand and digital product site for **Dev Rajput** — AI automation builder, building in public from India.

Live store: [rajputdev77.gumroad.com](https://rajputdev77.gumroad.com)
Instagram: [@soulmotion.studio](https://www.instagram.com/soulmotion.studio)

---

## What This Is

A fast, static, multi-page website built with plain HTML, CSS, and vanilla JavaScript. No frameworks, no build step, no dependencies to install. Just upload and go.

```
soul-in-motion-website/
├── index.html              ← Homepage (hero, products, about, contact)
├── style.css               ← All styles
├── script.js               ← Sticky nav, mobile menu, scroll reveal
├── products/
│   ├── product1.html       ← AI Content Automation Kit
│   ├── product2.html       ← Micro-SaaS API Blueprint
│   ├── product3.html       ← SMB Dashboard Starter Kit
│   ├── product4.html       ← Client Portal HTML Template
│   └── product5.html       ← FinOps Audit and Savings Kit
└── README.md
```

---

## Deploy in 5 Steps (Vercel)

You do not need to know how to code. Just follow these steps.

### Step 1 — Upload this folder to GitHub

1. Go to [github.com](https://github.com) and sign in (create an account if you don't have one).
2. Click the **+** button in the top right → **New repository**.
3. Name it something like `soul-in-motion-website` and click **Create repository**.
4. On the new repository page, click **uploading an existing file**.
5. Drag the entire `soul-in-motion-website` folder contents into the upload area.
6. Scroll down and click **Commit changes**.

### Step 2 — Connect Vercel to GitHub

1. Go to [vercel.com](https://vercel.com) and sign up using your GitHub account.
2. When prompted, give Vercel permission to access your GitHub repositories.

### Step 3 — Import the repository

1. On the Vercel dashboard, click **Add New → Project**.
2. Find your `soul-in-motion-website` repository and click **Import**.

### Step 4 — Deploy

1. Leave all settings on default. Vercel auto-detects static sites.
2. Click **Deploy**.
3. Vercel will give you a live URL in under 60 seconds — something like `soul-in-motion-website.vercel.app`.

### Step 5 — Replace the placeholder links

The five product "Buy Now" buttons currently link to placeholders named:

- `GUMROAD_PRODUCT_1`
- `GUMROAD_PRODUCT_2`
- `GUMROAD_PRODUCT_3`
- `GUMROAD_PRODUCT_4`
- `GUMROAD_PRODUCT_5`

Once you create each product listing on Gumroad, copy its public URL and replace the corresponding placeholder.

Files that contain the placeholders:
- `index.html` — homepage product cards (all 5)
- `products/product1.html` — links to `GUMROAD_PRODUCT_1`
- `products/product2.html` — links to `GUMROAD_PRODUCT_2`
- `products/product3.html` — links to `GUMROAD_PRODUCT_3`
- `products/product4.html` — links to `GUMROAD_PRODUCT_4`
- `products/product5.html` — links to `GUMROAD_PRODUCT_5`

**How to replace them:**
1. On GitHub, open each file and click the pencil icon to edit.
2. Use **Find & Replace** (or just Ctrl+F) to find `GUMROAD_PRODUCT_1` and paste your real Gumroad URL in its place.
3. Repeat for products 2, 3, 4, and 5.
4. Click **Commit changes** at the bottom.

Vercel will automatically redeploy in under a minute. Your live URL stays the same.

---

## Connecting a Custom Domain (Optional)

If you have your own domain (e.g. `soulinmotion.com`):

1. In Vercel, open your project → **Settings → Domains**.
2. Type in your domain and follow the on-screen DNS instructions.
3. Update the DNS records at your domain registrar.
4. Vercel handles SSL automatically.

---

## Editing Content Later

Anything you want to change — text, prices, headlines — lives in the HTML files. Open the file on GitHub, click the pencil icon, edit, and commit. Vercel redeploys automatically.

Common edits:
- **Change a price** → search the file for the old price (e.g. `$39`) and replace.
- **Change a product name** → search for the existing name and replace.
- **Add a new social link** → look for the `<div class="socials">` block in `index.html` and the product pages.

---

## Design System

- Background: `#0a0a0a`
- Accent: `#e8c547` (gold)
- Text: `#f0f0f0`
- Secondary text: `#888888`
- Headings: Syne (Google Fonts)
- Body: DM Sans (Google Fonts)

All colors and fonts are defined as CSS variables at the top of `style.css` — change them there once and they update across every page.

---

Built by Dev Rajput · Soul in Motion © 2025

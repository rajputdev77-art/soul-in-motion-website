# Thumbnails Folder — Where to Drop the Canva Exports

This folder is the home for the product cover images that will be uploaded to Gumroad and Prompt.base.

## What goes here

Drop your **Canva PNG exports** in this folder, one per product, named exactly as below:

```
downloads/thumbnails/
├── product1.png   ← AI Content Automation Kit
├── product2.png   ← Micro-SaaS API Blueprint
├── product3.png   ← SMB Dashboard Starter Kit
├── product4.png   ← Client Portal HTML Template
├── product5.png   ← FinOps Audit & Savings Kit
├── product6.png   ← Relay (AI Document → CRM Landing)
├── product7.png   ← Console Kit (5-screen AI API Dashboard)
└── product8.png   ← Meridian (Owner's Briefing BI Dashboard)
```

**Pro tip for products 6, 7, 8:** the source design HTML files are sitting in `design-source/relay/`, `design-source/kit/`, and `design-source/meridian/` — the simplest thumbnail is a screenshot of those rendered HTML pages. Open them in Chrome → Cmd+Shift+P → "Capture full size screenshot" → crop to 1280×720 in Canva.

## Recommended specs

| Spec | Value |
|---|---|
| Format | PNG (or JPG if file size matters) |
| Dimensions | **1280 × 720 px** (16:9) — this is what Gumroad shows in the marketplace card |
| Color space | sRGB |
| Max file size | Under 2 MB per image (Gumroad accepts up to 10 MB but smaller loads faster) |
| Background | Dark, on-brand (`#0b0b0c` works well) |
| Text on image | Product name + 1-line value prop (kept under 12 words) |

## Visual style guide (matches the Soul in Motion site)

- **Background:** `#0b0b0c` (deep black) with a faint accent grid or gradient.
- **Headline font:** Syne, 700 weight, large.
- **Accent color:** `#b08d57` (the warm gold from the live site).
- **Secondary text:** `#9a9aa0`.
- **Avoid:** generic stock photos, gradients dominated by purple/pink, busy collages.

## Quick template idea (for Canva)

1. Open Canva → Custom size → 1280 × 720.
2. Set background to `#0b0b0c`.
3. Add a 1px grid overlay at 8% opacity in `#b08d57`.
4. Add product name (Syne Bold, 72pt, color `#f5f5f7`) centered.
5. Below it, add the one-line value prop (DM Sans Regular, 26pt, color `#9a9aa0`).
6. Add a small "Soul in Motion" wordmark in the bottom-left at 14pt.
7. Add a small price chip top-right ("$39", "$29", etc.) in `#b08d57`.

Export as PNG. Drop here. Done.

---

Questions? **rajputdev77.gumroad.com** or DM **@soulmotion.studio** on Instagram.

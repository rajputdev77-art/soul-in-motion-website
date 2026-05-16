# Soul in Motion — Baby-Step Manual Guide

> Everything I could not fully automate, in single-finger detail. **Total time start to finish: 30 minutes.**

By Dev Rajput · Soul in Motion

---

## Why these steps are manual (the honest version)

I genuinely tried to automate every one of these and hit a real wall on each:

| Task | What blocks automation |
|---|---|
| **Gumroad Cover banner upload** | Gumroad's Cover uses a React-managed flow with no targetable `<input type=file>`. Synthetic drop / paste events are ignored. Mixed-content blocking prevents a local-server workaround. |
| **Prompt.base examples (4 per listing)** | Prompt.base uses controlled React textareas that ignore JS-injected `value` even with the `_valueTracker` bypass. Real `computer.type` keystrokes don't land in this specific textarea because focus drops during the multi-call sequence. |
| **Instagram bio update** | You're not logged in to Instagram in this Chrome window. Safety rules prevent me from logging in for you. |

What this guide gives you is **everything pre-written**. You're copying and pasting, not thinking.

---

# PART 1 · Upload 8 Cover Thumbnails to Gumroad (3 minutes)

**You'll do this once per product — 8 times total. Each takes ~20 seconds.**

### What you need open
- File Explorer pointed at: `C:\Users\Dev\Desktop\soul-in-motion-website\downloads\thumbnails\`
- Chrome with you signed into Gumroad

### The flow (do this 8 times)

1. Open the edit URL for the product you're on
2. Drag the matching PNG from File Explorer onto the wide gray "Cover" area at the top of the page
3. Wait ~3 seconds for upload
4. Click **Save changes** (top-right)
5. Move to the next product

### The map

| # | What | Open this URL | Drag this file |
|---|---|---|---|
| 1 | AI Content Automation Kit | https://app.gumroad.com/products/oeazx/edit | `product1.png` |
| 2 | Micro-SaaS API Blueprint | https://app.gumroad.com/products/ngnwww/edit | `product2.png` |
| 3 | SMB Dashboard Starter Kit | https://app.gumroad.com/products/nxkdft/edit | `product3.png` |
| 4 | Client Portal HTML Template | https://app.gumroad.com/products/ukoykb/edit | `product4.png` |
| 5 | FinOps Audit & Savings Kit | https://app.gumroad.com/products/ufwjj/edit | `product5.png` |
| 6 | Relay (AI Doc → CRM Landing) | https://app.gumroad.com/products/mpuwxl/edit | `product6.png` |
| 7 | Console Kit (5-screen UI) | https://app.gumroad.com/products/kjeti/edit | `product7.png` |
| 8 | Meridian BI Dashboard | https://app.gumroad.com/products/qyjkl/edit | `product8.png` |

### What you should see when it works

- The gray "Cover" placeholder area replaces with the brand thumbnail you just dropped
- Live preview pane (right side of edit page) shows the new cover above the product title
- Status message "Changes saved!" appears top-center after you click Save

### Tip

If the drag-and-drop doesn't seem to "take", look right below the Cover area — there's an **"Upload images or videos"** button. Click it, then pick the PNG from the file picker. Same result.

---

# PART 2 · Publish 4 Prompt.base Listings (~20 minutes total, 5 min each)

**Each listing has 3 steps. All 4 listings follow the exact same flow.**

### Once per session — open these files in tabs

1. **`downloads/PROMPTBASE-LISTINGS.md`** — has the listing fields (name, description, model, price, prompt content)
2. **`downloads/PROMPTBASE-EXAMPLE-OUTPUTS.md`** — has the 4 example outputs per listing

### The flow for EACH listing (do this 4 times)

#### Step 1 of 3 — "Prompt Details"

1. Go to https://promptbase.com/sell
2. **What are you selling?** → already "Prompt" ✓
3. **Generation Type** → click dropdown → select **Text**
4. **Model** → click dropdown → select **Claude**
5. **Name** → paste the title from `PROMPTBASE-LISTINGS.md` (e.g. `Instagram Caption Generator (Pro)`)
6. **Description** → paste the description block from `PROMPTBASE-LISTINGS.md`
7. Click **Next: Prompt File** (bottom-right)

#### Step 2 of 3 — "Prompt File"

1. **Prompt template** → paste the prompt content from `PROMPTBASE-LISTINGS.md`
2. **Claude version** → "4.7 Opus" is fine (or pick latest)
3. Scroll down a bit
4. **Examples** section — you'll see "Examples uploaded: 0/4 — Please upload 4 examples" in red
5. Open `PROMPTBASE-EXAMPLE-OUTPUTS.md` → find Listing 1 → Example 1
6. Click the **"Paste your output here"** textarea → paste Example 1
7. Click **"Add example +"** button below the textarea
8. The textarea clears + counter goes to "1/4 uploaded"
9. Repeat for Examples 2, 3, 4 (paste → click Add example +)
10. Counter should read **4/4 uploaded** (green now)
11. **Prompt instructions** (optional but recommended) — paste any 1-2 sentence "tips on how to use this prompt"
12. Click **Next: Finish** (bottom-right)

#### Step 3 of 3 — Cover & Submit

1. Upload cover image → use `downloads/thumbnails/product1.png` (for Listing 1)
2. Choose price tier → pick **$4.99** (closest to my suggested $5)
3. Pick a category → **Marketing** or **Productivity**
4. Add 5-8 tags from the listing's "Suggested tags" line in `PROMPTBASE-LISTINGS.md`
5. Click **Submit for Review**

### Mapping listings to thumbnails

| Listing | Source kit | Cover image |
|---|---|---|
| Instagram Caption Generator (Pro) | AI Content Automation Kit | `product1.png` |
| Micro-SaaS API Idea Generator | Micro-SaaS API Blueprint | `product2.png` |
| Weekly Biz Insight Report Writer | SMB Dashboard Starter Kit | `product3.png` |
| Cloud Bill Waste Finder | FinOps Audit & Savings Kit | `product5.png` |

### What you should see when it works

- After clicking Submit, you land on a "Pending review" or thank-you page
- Within 24 hours, Prompt.base emails you with approval status

---

# PART 3 · Update Instagram Bio (1 minute)

### Sign in first (60 seconds)

1. Go to https://www.instagram.com on this Chrome window
2. Click **Log in** (bottom-right)
3. Enter your `@soulmotion.studio` credentials
4. Save the session

### Edit the bio

1. Go to https://www.instagram.com/accounts/edit/
2. **Name field** → paste: `Soul in Motion · Dev Rajput`
3. **Bio field** → paste:
   ```
   AI systems, automation kits & digital products.
   Built in public · Shipped from India 🇮🇳
   8 products live ↓
   ```
4. **Website** → paste: `https://soulinmotion.studio` (or `https://rajputdev77.gumroad.com` if you want direct revenue link)
5. **Category** → pick **Digital Creator**
6. Click **Submit** at the bottom

### Profile photo (optional, +30 sec)

1. On the same edit page, click **Change profile photo** at the top
2. Upload `C:\Users\Dev\Desktop\soul-in-motion-website\favicon.svg` — Instagram should accept it, or convert to PNG first if it doesn't

---

# PART 4 · Post the Launch Carousel (5 minutes)

### Build the carousel in Canva or directly in Instagram

#### Option A — Instagram mobile (easiest)

1. AirDrop or email yourself the 8 thumbnail PNGs from `downloads/thumbnails/` to your phone
2. Open Instagram → tap **+** → **Post**
3. Tap the **multi-select** icon (top-right of photo picker)
4. Select images **in this order**:
   - Slide 1: A "8 products. Live now." title card (you can make one in Canva fast, or skip and use product7.png as opener)
   - Slides 2-9: Pick the 8 thumbnails in descending price order — product7, product4, product5, product1, product8, product3, product2, product6
   - Slide 10 (optional): A "Pick the one you need" CTA card with `rajputdev77.gumroad.com`
5. Tap Next → skip filters → on the Caption screen, paste the caption from `LAUNCH-CONTENT.md` Section A
6. Tap **Share**

#### Option B — Canva first (15 min if you want a polished title and CTA card)

1. Open canva.com → 1080×1080 Instagram post template
2. Make slide 1: dark background, "8 products. Live now." in big Syne font, gold accent (`#E8A04A`)
3. Make slide 10: "Pick the one you need." + URL
4. Use the 8 PNGs as slides 2-9 (crop the 1280×720 to square if needed)
5. Download as PNGs
6. Follow Option A from step 4

### Tweet the thread (3 min)

1. Open https://twitter.com → click "Post"
2. Paste tweet 1 from `LAUNCH-CONTENT.md` Section B
3. Click the **+** icon below → adds a 2nd tweet
4. Paste tweet 2 + attach `product1.png`
5. Repeat for tweets 3-10
6. Click **Post all**

### LinkedIn post (2 min)

1. Open https://linkedin.com → "Start a post"
2. Paste the LinkedIn block from `LAUNCH-CONTENT.md` Section C
3. Click "Add a photo" → upload `product7.png` (the highest-value one)
4. Click **Post**

---

# Final Checklist (5 minutes review)

After all the above, verify:

- [ ] All 8 Gumroad products have brand-aligned covers (visit `rajputdev77.gumroad.com/l/<slug>` for each)
- [ ] All 4 Prompt.base listings show in **your profile → My Listings** with "Pending review" status
- [ ] Instagram bio shows the new line and Möbius profile photo
- [ ] Launch carousel posted, thread posted, LinkedIn post live
- [ ] The Gumroad storefront `rajputdev77.gumroad.com` shows all 8 products in a row

If the Gumroad storefront still says "I am an artist" with no products — you need to add a **Profile section**:
1. Go to https://app.gumroad.com/profile
2. Click **Edit my profile**
3. Add a section called "Products" (or "Soul in Motion v1")
4. Choose layout: **Grid**
5. Add all 8 products to the section
6. Save

---

# Things to do AFTER launch (next week)

- Set up Stripe Connect on your Gumroad payouts (you may already have this)
- Reply to every DM and email within 24h — this is what compounds reviews and word-of-mouth
- Write **one tweet per day** for the next 14 days deep-diving a single product
- After 7 days, look at Gumroad analytics → which product converted best? Double down on that one with a new tweet thread + LinkedIn post specifically about it
- After 30 days, you'll have data — that's when you decide: add Story Highlights to Instagram, raise/lower prices, bundle deals, etc.

---

Questions? **rajputdev77.gumroad.com** or DM **@soulmotion.studio** on Instagram.

— Dev Rajput
Soul in Motion

# SMB Dashboard Starter Kit — Master Guide

> The data dashboard small businesses actually need. One screen. All your numbers. Built for free in Looker Studio. Ready to package and resell to clients.

By Dev Rajput · Soul in Motion

---

## What This Kit Contains

1. **`smb-dashboard-guide.md`** — This file. Strategy, metrics, monetization.
2. **`dashboard-template-instructions.md`** — Step-by-step rebuild instructions for the dashboard (Looker Studio doesn't allow direct export, so this is the closest thing — and arguably better for learning).
3. **`prompts.md`** — Three AI prompts that turn raw business data into client-ready insight summaries.

---

## What Metrics Every Small Business Must Track

Most small business owners drown in dashboards that show 50 metrics they don't understand. The truth: there are 8 numbers that matter, and the rest are noise.

These are the 8 every SMB dashboard should show, every day:

### 1. Revenue today / this week / this month
The single most important number. Compare against the same period last year.

### 2. Number of orders today
Revenue can be inflated by one large sale. Order count tells you whether demand is growing.

### 3. Average order value (AOV)
**Formula:** Total revenue ÷ Total orders.
A growing AOV means your offer is improving. A shrinking AOV means you're discounting your way to growth.

### 4. Conversion rate (visitors → customers)
**Formula:** (Orders ÷ Sessions) × 100.
The fastest leverage point. A 1% increase in conversion rate equals roughly a 50% increase in revenue without any extra traffic.

### 5. Customer acquisition cost (CAC)
**Formula:** Marketing spend ÷ New customers acquired.
If CAC > AOV, you're losing money on every sale. This kills more SMBs than any other number.

### 6. Lifetime value (LTV)
**Formula:** Avg order value × Avg purchase frequency × Avg customer lifespan in months.
LTV ÷ CAC should be at least 3:1 for the business to be healthy.

### 7. Cash on hand
The number nobody puts on a dashboard but everyone Googles every Friday. Pull from your bank balance via Stripe / your accounting tool.

### 8. Repeat purchase rate
**Formula:** (Customers with 2+ orders ÷ Total customers) × 100.
Determines whether you have a business or a leaky bucket.

---

## How to Connect Shopify, Stripe, and Google Analytics to Looker Studio (Free)

Looker Studio is Google's free dashboarding tool. It connects to most data sources without any technical work.

### Connecting Shopify

Looker Studio has no native Shopify connector. You have two free workarounds:

**Option A — Via Google Sheets (best for stores doing under 1000 orders/month)**
1. In Shopify admin, go to **Apps → Visit the Shopify App Store**.
2. Install **"Coupler.io"** (free tier covers 100 imports/month).
3. Open Coupler.io, click **Add Importer → Source: Shopify → Destination: Google Sheets**.
4. Authorize Shopify, pick your store, choose data to export (Orders, Products, Customers).
5. Pick a Google Sheet to write to. Set refresh frequency (hourly or daily).
6. In Looker Studio, **Add data → Google Sheets → select that sheet**. Done.

**Option B — Via the Shopify Reports API + Google Sheets script (best for any volume, takes 1 hour to set up)**
1. In Shopify admin, **Settings → Apps and sales channels → Develop apps**. Create a private app with `read_orders` scope. Copy the Admin API token.
2. In a new Google Sheet, **Extensions → Apps Script**. Paste a small script that fetches `https://YOURSTORE.myshopify.com/admin/api/2024-01/orders.json` and writes the response to the sheet. (See `prompts.md` for the AI prompt that writes this script for you.)
3. Set the script to run on a daily trigger.
4. Connect the sheet to Looker Studio as in Option A.

### Connecting Stripe

Stripe has no official Looker Studio connector either, but the same path works:

1. Use **Coupler.io** (free tier) → connect Stripe → write to a Google Sheet → connect to Looker Studio.
2. Pull these Stripe objects: `Charges`, `Customers`, `Subscriptions`, `Invoices`.
3. Refresh hourly.

Alternative for technical clients: use the **Stripe Sigma** SQL warehouse ($10/month flat). Connect Sigma → BigQuery → Looker Studio. Faster, more flexible queries.

### Connecting Google Analytics 4

This one is native:

1. In Looker Studio, **Add data → search "Google Analytics"**.
2. Select your GA4 property. Authorize.
3. Pick the metrics: `Sessions`, `Users`, `Conversions`, `Revenue`, `Average session duration`, `Bounce rate`.
4. Done — it refreshes automatically.

### What if the client uses different tools (WooCommerce, QuickBooks, HubSpot)?

Same pattern: **source → Coupler.io (or Zapier) → Google Sheet → Looker Studio**. Coupler supports 60+ sources for free.

---

## Step-by-Step Dashboard Setup Instructions

Here is the actual build sequence. Do these in order. Detailed instructions for every chart are in `dashboard-template-instructions.md`.

### Step 1 — Create the Looker Studio file
1. Go to [lookerstudio.google.com](https://lookerstudio.google.com).
2. Click **Blank report**.
3. When prompted to add data, skip for now (we'll add data sources next).
4. Name the report: **"[Client Name] — Business Dashboard"**.

### Step 2 — Add all data sources
1. **Resource menu → Manage added data sources → Add data source**.
2. Add (in this order): Google Analytics, Shopify Sheet, Stripe Sheet, any others.
3. Confirm each shows green "Connected" status.

### Step 3 — Build the layout
The dashboard has 4 zones (top to bottom):
- **Zone A — Hero KPIs:** 4 large scorecards across the top (Revenue, Orders, AOV, Conversion Rate).
- **Zone B — Trends:** 2 line charts side by side (Revenue over time, Orders over time).
- **Zone C — Customer health:** 3 scorecards (CAC, LTV, Repeat Rate) plus a pie chart of customer source mix.
- **Zone D — Tables:** Top 10 products by revenue, and Top 10 customers by lifetime spend.

### Step 4 — Add the date range filter
Top of dashboard. **Insert → Date range control**. Default range: **Last 30 days**. Style it to match the dashboard (dark or light theme — we recommend dark for client work).

### Step 5 — Add segment filters
Add filter controls for: **Channel** (Direct, Organic, Paid, Email), **Product Category**, **Customer Type** (New vs Returning).

### Step 6 — Style and theme
1. **Theme menu → Customize**. Pick a dark theme (background `#0b0b0c`, primary text `#f5f5f7`, accent `#b08d57`).
2. Replace the default font with **DM Sans** for body, **Syne** for headers.
3. Add the client's logo top-left (Insert → Image → upload).

### Step 7 — Set up email scheduling
1. **File → Schedule email delivery**.
2. Recipient: client. Frequency: every Monday at 9am.
3. Format: PDF.

That's it. Every Monday morning the client receives a fresh dashboard PDF in their inbox. They will think you're a wizard.

---

## 10 KPI Formulas Explained Simply

These are the only formulas your dashboard needs. Each one is a calculated field in Looker Studio (the **fx** symbol next to a metric).

| # | KPI | Formula in Looker Studio | What it tells you |
|---|---|---|---|
| 1 | **Revenue** | `SUM(Total Price)` | Money in the door. |
| 2 | **Orders** | `COUNT(Order ID)` | Number of transactions. |
| 3 | **AOV** | `SUM(Total Price) / COUNT(Order ID)` | How much an average customer spends per visit. |
| 4 | **Conversion Rate** | `(COUNT(Orders) / SUM(Sessions)) * 100` | How well your site turns visitors into buyers. |
| 5 | **Sessions per Order** | `SUM(Sessions) / COUNT(Order ID)` | The inverse of conversion rate — how many visitors it takes to land one sale. |
| 6 | **CAC** | `SUM(Marketing Spend) / COUNT(New Customers)` | What each new customer costs you to acquire. |
| 7 | **LTV (simple)** | `AVG(Total Price) * AVG(Order Count Per Customer)` | What a customer is worth over their lifetime with you. |
| 8 | **LTV/CAC Ratio** | `LTV / CAC` | Health metric. Should be > 3.0. |
| 9 | **Repeat Purchase Rate** | `(COUNT(Customers with > 1 Order) / COUNT(Total Customers)) * 100` | Stickiness. Above 30% is excellent for most categories. |
| 10 | **Gross Margin** | `((SUM(Revenue) - SUM(COGS)) / SUM(Revenue)) * 100` | What's left after you pay for the goods you sold. |

### Pro tip — the "rolling" version

Add a 7-day rolling average to every trend chart. In Looker Studio: open the chart → **Style → Trendline → 7-day moving average**. Cleaner, less noisy, far more useful for spotting actual changes.

---

## How to Present This Dashboard to Clients as a Freelance Service

This is where the kit pays for itself many times over.

### The offer

**"Business Vital Signs — a single dashboard that shows you everything that matters, refreshed every hour, delivered to your inbox every Monday."**

### Pricing tiers

| Tier | Price | What's included |
|---|---|---|
| **Setup only** | $750 one-time | Build the dashboard, train them once, hand off. |
| **Setup + maintenance** | $750 setup + $200/mo | Build + monthly review call + dashboard updates as their business changes. |
| **Setup + insights service** | $750 setup + $500/mo | Everything above + monthly written insight report (use Prompt 2 in `prompts.md` to generate). |

If you sell 5 of the middle tier, that's $1,000 MRR for ~2 hours per client per month.

### The pitch (steal this)

Send this exact email/DM to any small business owner with a website:

> Subject: 12 minutes to find your top 3 missed revenue opportunities
>
> Hi [Name],
>
> I build a Business Vital Signs dashboard for owners like you — Shopify, Stripe, and Google Analytics all merged into one screen. It's the dashboard you'd build yourself if you had a free weekend.
>
> Most owners I run it for find at least one $5,000+ leak in the first month. (One client found that 40% of their email traffic was bouncing without buying — a 30-minute fix recovered $2,800 the next month.)
>
> Setup is $750 and takes me one week. Want a 12-minute screen-share demo on a sample dashboard? Free, no pitch.
>
> — [Your Name]

### The closing question on every sales call

> "What's one number about your business you check almost every day, but in 5 different places? That's the number we put first."

This is the only question you need to convert a "maybe" into a "yes."

### Upsells

After 3 months on the maintenance tier, almost every client asks for: **automated monthly reports**, **email alerts when a metric drops X%**, and **a customer cohort view**. Charge $300–$1000 for each. They're trivial to add — Looker Studio supports all three natively.

---

## Final Word

The dashboard is the easy part. **Selling it is the business.**

Build the dashboard once on your own data first (Shopify? Stripe? Even just a Google Sheet of fake data). Take screenshots. Use those screenshots as your portfolio. Then send the pitch above to 20 small business owners on LinkedIn this week. You will close at least one of them. That single client pays for this kit 17 times over.

Questions? **rajputdev77.gumroad.com** or DM **@soulmotion.studio** on Instagram.

— Dev Rajput
Soul in Motion

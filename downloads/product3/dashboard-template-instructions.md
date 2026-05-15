# Dashboard Template — Step-by-Step Rebuild Instructions

> Looker Studio doesn't allow direct file export. This guide is the next best thing: a chart-by-chart blueprint for rebuilding the exact "Business Vital Signs" dashboard in under 90 minutes.

Follow this top to bottom. Every chart, every setting, every formula.

---

## Before You Start

You will need:
- A Google account.
- At least one connected data source (Google Analytics 4, a Google Sheet of Shopify orders, or a Google Sheet of Stripe charges — see the main guide for connection instructions).
- 90 minutes of uninterrupted time.

Open Looker Studio: [lookerstudio.google.com](https://lookerstudio.google.com).

Create a new blank report. Name it: **"[Client Name] — Business Vital Signs"**.

---

## Data Sources to Add

In the top menu: **Resource → Manage added data sources → Add a data source**.

Add these in order:

| # | Source | Connector to use | Required fields |
|---|---|---|---|
| 1 | **Google Analytics 4** | Native GA4 connector | `Date`, `Sessions`, `Users`, `Conversions`, `Total revenue`, `Source / Medium` |
| 2 | **Shopify (via Google Sheet)** | Google Sheets connector | `Order ID`, `Created at`, `Total Price`, `Customer ID`, `Source`, `Product Name`, `Quantity` |
| 3 | **Stripe (via Google Sheet)** | Google Sheets connector | `Charge ID`, `Created`, `Amount`, `Customer ID`, `Status` |
| 4 | **Marketing Spend (via Google Sheet)** | Google Sheets connector | `Date`, `Channel`, `Spend`, `New Customers Acquired` |

After each is added, click **Edit fields** and confirm the data types are correct (dates are dates, money is numeric, IDs are text).

---

## Calculated Fields to Create

Open each data source (Resource → Manage data sources → click the source name → ADD A FIELD).

### Inside the Shopify data source

| Field name | Formula |
|---|---|
| `Order Count` | `COUNT(Order ID)` |
| `Revenue` | `SUM(Total Price)` |
| `AOV` | `Revenue / Order Count` |
| `Unique Customers` | `COUNT_DISTINCT(Customer ID)` |
| `Repeat Customers` | `COUNT_DISTINCT(CASE WHEN Order Count > 1 THEN Customer ID END)` |
| `Repeat Purchase Rate` | `(Repeat Customers / Unique Customers) * 100` |

### Inside the Marketing Spend data source

| Field name | Formula |
|---|---|
| `Total Spend` | `SUM(Spend)` |
| `Total New Customers` | `SUM(New Customers Acquired)` |
| `CAC` | `Total Spend / Total New Customers` |

### Cross-source blended fields (LTV/CAC ratio)

To create a blend: **Resource → Manage blends → Add a blend**. Join Shopify and Marketing Spend on `Date`.

| Blended field | Formula |
|---|---|
| `LTV` | `AOV * 2.4` (use 2.4 as starter avg orders per customer; recalculate later) |
| `LTV / CAC` | `LTV / CAC` |

---

## Page Layout — 4 Zones, Top to Bottom

The dashboard is one long scroll page. Set the page size: **Page → Current page settings → Custom: 1280 × 1800 px**.

Background color: `#0b0b0c` (deep black). Click the page → Style tab → Background color.

### Page header strip (very top — 80 px tall)

| Element | Position | Setting |
|---|---|---|
| Client logo | Top-left, 60×60 px | Insert → Image → upload PNG |
| Dashboard title text | Center, large | "Business Vital Signs" — Syne, 28 px, color `#f5f5f7` |
| Date range control | Top-right | Insert → Date range control. Default: Last 30 days. Style: dark, accent `#b08d57` |

---

## ZONE A — Hero KPI Row (4 scorecards across the top)

Insert → Scorecard. Repeat 4 times. Place them side by side, each 280 px wide × 140 px tall. Top edge at y=120 px.

### Scorecard 1 — Revenue
- **Data source:** Shopify
- **Metric:** `Revenue`
- **Default date range:** Auto (uses page filter)
- **Comparison date range:** Previous period
- **Style:** Number color `#f5f5f7` · Label color `#9a9aa0` · Comparison badge color: green for positive, red for negative · Background `#141417` · Border 1px solid `#2a2a2e` · Corner radius 8 px
- **Number format:** Currency, no decimals, prefix `$`

### Scorecard 2 — Orders
- **Data source:** Shopify
- **Metric:** `Order Count`
- Same comparison + style as above
- **Number format:** Integer with thousands separator

### Scorecard 3 — Average Order Value
- **Data source:** Shopify
- **Metric:** `AOV`
- Same style
- **Number format:** Currency with 2 decimals

### Scorecard 4 — Conversion Rate
- **Data source:** Blend of Shopify + GA4 (join on Date)
- **Metric:** `(Order Count / Sessions) * 100`
- Same style
- **Number format:** Percentage, 2 decimals

---

## ZONE B — Trend Charts (2 line charts side by side)

Top edge at y=290 px. Each chart 620 px wide × 320 px tall.

### Chart 1 — Revenue over time (left)
- **Type:** Time series chart
- **Data source:** Shopify
- **Date dimension:** `Created at`
- **Metric:** `Revenue`
- **Breakdown:** none
- **Style:**
  - Line color: `#b08d57`
  - Line thickness: 2 px
  - Show points: ON, size 4
  - Background: `#141417`, corner radius 8 px
  - Title: "Revenue — Last 30 Days" (Syne, 16 px, `#f5f5f7`)
  - Trendline: 7-day moving average, dashed, color `#9a9aa0`

### Chart 2 — Orders over time (right)
- **Type:** Time series chart
- **Data source:** Shopify
- **Date dimension:** `Created at`
- **Metric:** `Order Count`
- Same style as Chart 1
- Title: "Orders — Last 30 Days"

---

## ZONE C — Customer Health (3 scorecards + 1 pie chart)

Top edge at y=640 px. Three scorecards on the left (each 280 × 120 px stacked vertically) and one pie chart on the right (640 × 380 px).

### Scorecard 5 — CAC
- **Data source:** Marketing Spend
- **Metric:** `CAC`
- **Number format:** Currency 2 decimals
- Style same as Zone A scorecards

### Scorecard 6 — LTV
- **Data source:** Blend (Shopify + Marketing Spend)
- **Metric:** `LTV`
- Same style

### Scorecard 7 — LTV / CAC Ratio
- **Data source:** Blend
- **Metric:** `LTV / CAC`
- **Number format:** Decimal, 1 place, suffix `x`
- **Conditional formatting:** if value < 3, text color `#d97757` (warning red); if value ≥ 3, text color `#7ec77a` (healthy green)
- Same style otherwise

### Pie chart — Customer source mix (right)
- **Type:** Pie chart (donut style)
- **Data source:** Shopify
- **Dimension:** `Source` (e.g., direct, organic, paid, email)
- **Metric:** `Unique Customers`
- **Style:**
  - Show legend on right
  - Show data labels: percentage
  - Colors palette: `#b08d57`, `#9a9aa0`, `#7ec77a`, `#d97757`, `#5a8dd1`, `#c2c2c8`
  - Background `#141417`, corner radius 8 px
  - Title: "Customer Source Mix"

---

## ZONE D — Tables (2 tables side by side)

Top edge at y=1060 px. Each table 620 px wide × 380 px tall.

### Table 1 — Top 10 Products by Revenue (left)
- **Type:** Table with bars
- **Data source:** Shopify
- **Dimension:** `Product Name`
- **Metrics:** `Revenue` (with bar), `Order Count`
- **Sort:** Revenue descending
- **Rows per page:** 10
- **Style:**
  - Header background `#1c1c1f`, text `#b08d57`, font Syne
  - Row alternating colors: `#141417` and `#181819`
  - Bar color: `#b08d57`
  - Title: "Top 10 Products by Revenue"

### Table 2 — Top 10 Customers by Lifetime Spend (right)
- **Type:** Table
- **Data source:** Shopify
- **Dimension:** `Customer ID` (or Customer Email if available)
- **Metrics:** `Revenue`, `Order Count`, `AOV`
- **Sort:** Revenue descending
- **Rows per page:** 10
- Same style as Table 1
- Title: "Top 10 Customers"

---

## Filter Controls (above ZONE B, left side)

Insert → Drop-down list. Add 3 controls in a row:

| Control | Field | Style |
|---|---|---|
| Channel filter | Source/Medium (GA4) | Dark theme, accent `#b08d57` |
| Product Category filter | Product Name (Shopify) | Same |
| Customer Type filter | Returning user (GA4) | Same |

---

## Final Polish

1. **Theme menu → Theme and layout → Customize.**
2. Set:
   - Background: `#0b0b0c`
   - Text primary: `#f5f5f7`
   - Text secondary: `#9a9aa0`
   - Accent: `#b08d57`
   - Component background: `#141417`
   - Component border: `#2a2a2e`
3. Set fonts: **Headings → Syne**, **Body → DM Sans**.
4. Save the theme as a custom theme called "Soul in Motion Dark" so you can reuse it on every client dashboard.

---

## Schedule the Email Delivery

1. **File → Schedule email delivery → Add schedule.**
2. Recipient(s): your client.
3. Frequency: Weekly · Monday · 09:00.
4. Format: PDF.
5. Subject: "Your Weekly Business Vital Signs · [Date]"
6. Save.

The client gets a PDF in their inbox every Monday morning. They love it. You don't have to lift a finger after setup.

---

## Reusing This for the Next Client

Once you've built it once:

1. **File → Make a copy.**
2. Re-link the data sources to the new client's accounts.
3. Replace the logo and the title text.
4. Re-schedule the email to the new recipient.

Total time per new client: 25 minutes.

---

Questions? **rajputdev77.gumroad.com** or DM **@soulmotion.studio** on Instagram.

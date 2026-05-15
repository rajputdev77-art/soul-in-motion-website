# FinOps Audit Kit — Prompt Bundle

Four production-grade prompts that turn raw cloud billing data into client-ready deliverables. Paste each into Claude (claude.ai), ChatGPT, or your IDE chat.

Replace anything in `[SQUARE_BRACKETS]` with your specifics before sending.

---

## Prompt 1 — Analyze a Cloud Billing Export and Find Waste

**When to use:** First day of an engagement. You have a CSV of the last 30–90 days of AWS Cost & Usage Report (or GCP BigQuery billing export). You want a fast, structured first pass.

**How to use:** Trim the CSV to the most relevant columns first (`UsageStartDate`, `UsageType`, `ResourceId`, `UnblendedCost`, `LineItem/ProductCode`, `Tag` columns). Paste the first 200 lines (or attach the file). Claude returns a ranked waste analysis.

```
You are a senior FinOps consultant who has audited 200+ cloud accounts and recovered eight figures of waste in the last decade.

Below is a sample of [AWS / GCP] billing data. Your job:

1. Identify the top 10 sources of likely waste, ranked by estimated monthly dollar value.

2. For each source, output:
   - Resource type / service category
   - Specific resource IDs or usage types in the data that triggered the flag
   - Why this is suspicious (in plain English a CFO understands)
   - Estimated monthly cost being wasted
   - Recommended specific action (e.g., "downsize 14 m5.4xlarge instances to m5.xlarge")
   - Estimated annual savings if action is taken
   - Implementation effort in engineering hours
   - Confidence level (High / Medium / Low) and what would raise it

3. Identify any patterns across the data (e.g., "most spend is in us-east-1 but most resources have low utilization on weekends — strongly suggests dev/staging running 24×7").

4. Identify the 3 things you cannot determine from this data and would need access to in order to confirm — e.g., "I'd need 14 days of CloudWatch CPU metrics to confirm the idle EC2 finding."

Format the output as a markdown report with clear section headings. Sort the top-10 list by estimated annual savings, descending.

Billing data sample:
[PASTE FIRST 200 ROWS OF CSV HERE — INCLUDE THE HEADER ROW]
```

---

## Prompt 2 — Write a Professional Cost Remediation Report

**When to use:** End of week 1 of the engagement. You have your raw findings (notes from running the 25-point checklist). You need a polished PDF-ready document for the client.

**How to use:** Paste your findings notes into the placeholder. Claude returns the full client-facing report, formatted in markdown — paste into Google Docs → File → Download → PDF.

```
You are the founder of a boutique FinOps consultancy. You write client reports the client's CEO and CFO read end to end.

Below are my raw findings from a 5-day FinOps audit of a [INDUSTRY] company spending approximately $[MONTHLY_SPEND]/month on [AWS / GCP].

Write a complete remediation report using this exact structure:

**1. Executive Summary** (one page)
- One paragraph naming the company's biggest cost story.
- Total identified waste: $[X]/mo and $[X*12]/year.
- Top 3 highest-ROI recommendations as one-liners.
- Estimated implementation effort across all recommendations (engineering days).
- One sentence on what we expect the bill to look like 90 days post-implementation.

**2. Audit Scorecard** (one page)
A markdown table of all 25 audit categories with three columns: Category, Status (Pass / Caution / Fail), Annual Savings Opportunity ($).

**3. Findings, ranked by ROI** (one page per finding, ordered by annualized_savings divided by implementation_hours, descending)
For each finding, include:
- Finding title (specific and quantified, e.g., "14 idle EC2 instances costing $2,450/month")
- Where we found it (specific console paths and resource IDs)
- Why it's costing you (one short paragraph in plain English)
- Monthly waste in dollars
- Annual savings if remediated
- Recommended action (specific commands, console steps, or architectural change)
- Implementation effort (engineering hours)
- Risk level (Low / Medium / High) with a one-sentence explanation
- Confidence level (High / Medium / Low) with what would raise it

**4. 30 / 60 / 90 day implementation plan**
Three buckets. For each bucket:
- The findings that go in this window (titles only)
- Total annual savings unlocked
- Total engineering effort
- One sentence on the expected risk and how to mitigate it

**5. Recommended Next Steps**
- Specific kickoff actions for the client this week.
- The 3 follow-up engagements we recommend (with one-line value propositions and price ranges).

Tone: serious, fact-based, slightly warm. Speak as a trusted advisor would. No buzzwords ("leverage", "optimize", "synergies"). No vague recommendations ("consider reviewing your architecture") — every recommendation is specific and actionable.

Constraints:
- Round all dollar figures to the nearest $50.
- Annualize every monthly figure.
- For every finding, the action must be implementable by a working engineer within the stated hours without additional research.

Findings notes:
[PASTE YOUR RAW FINDINGS NOTES — bullet points are fine, Claude will polish]

Output the complete report in clean markdown. No preamble.
```

---

## Prompt 3 — Generate a Personalized Cold Pitch Email

**When to use:** You're prospecting. You have a target company's name, industry, approximate cloud spend, and one or two public signals (e.g., job posts, engineering blog).

**How to use:** Fill in the placeholders. Claude returns a personalized cold email and two follow-ups.

```
You are a sales copywriter who writes cold emails for a boutique FinOps consultancy. Your emails get opened because the subject line names a specific signal, and they get replied to because the body shows you've done your homework.

Write a 3-email cold sequence to a target prospect.

Target details:
- Company: [COMPANY_NAME]
- Industry: [INDUSTRY — e.g., "B2B SaaS", "fintech", "edtech"]
- Approximate monthly cloud spend: [$X / month]
- Cloud provider: [AWS / GCP / both]
- One public signal we can reference: [e.g., "they recently announced multi-region expansion in their engineering blog", or "they have 4 open Senior SRE roles on their careers page"]
- Their likely pain point given the signal: [WHAT_YOU_INFER — e.g., "multi-region NAT Gateway costs", "rapid hiring usually means cost discipline lags"]
- Recipient role: [Head of Engineering / VP Eng / CTO / CFO]
- Recipient first name (if known): [NAME]

For each email, output:
- Subject line (under 60 characters, references the signal, no marketing tone)
- Email body (under 110 words, plain text, no images, no fancy formatting)

Email 1 — Initial outreach
- Open with the signal we observed.
- Name the specific cost pattern that signal suggests.
- State the size of the typical waste in that pattern (in dollars/month for an account their size).
- Offer a free 30-minute "diagnostic" with one specific deliverable they get even if they don't hire us.
- Close with a calendar link placeholder: [CALENDAR_LINK]

Email 2 — Follow-up sent 4 days later
- Reference the prior email briefly.
- Add one new credibility signal: a one-line case study (a specific dollar finding from a similar engagement — make it realistic and conservative).
- Re-offer the diagnostic.

Email 3 — Final follow-up sent 10 days after Email 1
- Acknowledge timing might be wrong.
- Offer to revisit next quarter.
- Leave the calendar link. Make it easy to say "yes" or "later".

Constraints:
- No buzzwords ("leverage", "synergize", "unlock potential").
- No fake urgency.
- Sound like a thoughtful peer, not a vendor.
- Every claim must be specific and verifiable.

Output the three emails in order, clearly labeled with subjects. No preamble.
```

---

## Prompt 4 — Create a Client-Facing ROI Projection

**When to use:** Right after delivering the audit report. The client asks "what would year 1 actually look like financially?" You hand them this projection.

**How to use:** Fill in the placeholders with the numbers from your report. Claude returns a clean 1-page ROI summary you can paste into Google Sheets or a slide.

```
You are a fractional CFO advising a [INDUSTRY] company on the financial impact of a FinOps remediation program.

Build a 12-month ROI projection from these inputs.

Inputs:
- Current monthly cloud spend (baseline): $[BASELINE]
- Total identified monthly waste: $[WASTE_PER_MONTH]
- Implementation cost (one-time engineering effort, valued at $150/hr): [TOTAL_IMPLEMENTATION_HOURS] hours
- Audit fee paid to consultancy: $[AUDIT_FEE]
- Implementation retainer fee (if any): $[RETAINER_PER_MONTH] per month for [RETAINER_MONTHS] months
- Realistic capture rate (% of identified waste actually realized in practice): 70% — many recommendations get partially implemented or take longer.

Output:

**1. Headline**
A 1-sentence summary stating year 1 net savings and payback period.

**2. Monthly forecast table** (12 months — month 0 through month 12)
For each month, show:
- Cloud spend baseline (flat $[BASELINE])
- Realized monthly savings (assume 0% in month 0, ramping linearly to 70% capture by month 4, then steady)
- Effective monthly cloud spend (baseline minus realized savings)
- Cumulative savings since month 0
- Cumulative consultancy fees paid (audit + retainers)
- Net cumulative benefit (cumulative savings minus cumulative fees)

**3. Summary table**
- Total year 1 gross savings: $[X]
- Total year 1 fees paid: $[X]
- Year 1 net savings: $[X]
- Payback period (months to break even): [X]
- ROI multiple in year 1: [X]x

**4. Sensitivity analysis** (3 lines)
- What net savings looks like if capture rate is 50% (pessimistic)
- What it looks like at 70% (base case — same as above)
- What it looks like at 90% (optimistic, if implementation is well-resourced)

**5. Closing recommendation** (one short paragraph)
Speak directly to the CFO. State the case for proceeding in plain language.

Format: clean markdown tables. Round all numbers to the nearest $100.

Output the projection only. No preamble.
```

---

## Suggested Workflow (the full 5-day audit, prompt-assisted)

| Day | Activity | Prompt to use |
|---|---|---|
| **Day 1** | Get billing access, pull CSV, run first-pass analysis | Prompt 1 |
| **Day 2–3** | Run the 25-point checklist deeply (`audit-checklist.md`) | (Manual + spot-checks with Prompt 1) |
| **Day 4** | Write the report from raw notes | Prompt 2 |
| **Day 5** | Build the ROI projection, prep client review call | Prompt 4 |
| **Ongoing** | Cold outreach for next engagement | Prompt 3 |

---

Questions? **rajputdev77.gumroad.com** or DM **@soulmotion.studio** on Instagram.

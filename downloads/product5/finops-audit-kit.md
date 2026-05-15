# FinOps Audit and Savings Kit

> A repeatable, week-long cloud cost audit you can run on any AWS or GCP account — and a productized service you can sell to small and mid-sized companies for $3,000 – $25,000 per engagement.

By Dev Rajput · Soul in Motion

---

## What This Kit Contains

1. **`finops-audit-kit.md`** — This file. The full playbook: methodology, pricing, sales, and reporting.
2. **`audit-checklist.md`** — A standalone 25-point checklist file you can hand to a junior or use yourself on the next engagement.
3. **`prompts.md`** — Four AI prompts that automate the bulk of the work: parsing billing exports, writing the report, drafting the pitch email, projecting the ROI.

---

## What FinOps Is and Why Companies Pay for It

**FinOps** (short for *Cloud Financial Operations*) is the practice of making cloud spend visible, accountable, and efficient. In English: it's about finding the wasted dollars in a company's AWS or GCP bill and helping them stop the bleed.

### Why companies pay you to do this

1. **Their bill is opaque.** AWS Cost Explorer is a maze. CFOs can see the number; nobody can explain it.
2. **The waste is real and large.** Public benchmarks (Flexera, CloudZero) consistently report **30–35% of cloud spend is wasted** — idle resources, oversized instances, forgotten dev environments, missing reserved capacity.
3. **It has clear ROI.** A $200K/year cloud bill with 30% waste = $60K/year in savings. A $5K audit fee that produces $30K+ in year-one savings is a **6x return in month one** — the easiest "yes" any CFO ever signs.
4. **It is recurring.** New waste appears as fast as engineering teams ship new services. A one-time audit becomes a quarterly retainer.

### Who buys

- **Series A–C startups** with $50K–$500K monthly cloud bills and no dedicated FinOps person.
- **Mid-market SaaS companies** ($10M–$100M revenue) where engineering owns the bill but finance is asking questions.
- **Indian and SE Asian SaaS companies** scaling on AWS — almost universally underserved by FinOps consultancies, which are expensive and US-centric.

You do **not** need to compete with Apptio or CloudHealth. You compete with the company's status quo: nobody is doing this at all.

---

## The 25-Point Audit Checklist (Summary)

Full version with exact AWS/GCP console paths is in `audit-checklist.md`. Here is the structure:

### Compute (8 items)
1. Idle EC2 / Compute Engine instances (CPU < 5% for 14 days)
2. Oversized instances (CPU < 40% sustained)
3. Underutilized Auto Scaling groups
4. Old generation instance types (still running m4 / n1)
5. On-demand instances that should be Reserved or Savings Plan
6. Spot opportunity for stateless workloads
7. Forgotten dev / staging environments running 24×7
8. Unattached Elastic IPs / static IPs

### Storage (5 items)
9. Unattached EBS / persistent disks
10. Old snapshots (> 90 days, no policy)
11. S3 / Cloud Storage classes (Standard for cold data)
12. Logs without lifecycle rules (CloudWatch / Stackdriver retention)
13. Cross-region replication actually used?

### Networking (4 items)
14. Cross-AZ data transfer overuse
15. NAT Gateway costs (hourly + per-GB add up fast)
16. CloudFront / CDN missing where it would cut egress
17. VPC endpoints not used for in-VPC AWS service calls

### Database (4 items)
18. Idle RDS / Cloud SQL instances
19. Oversized DB instances
20. Missing Reserved Instances on production DBs
21. Old RDS snapshots / unused read replicas

### Visibility & Governance (4 items)
22. No tagging strategy → no per-team allocation
23. Cost anomaly alerts not enabled
24. Budgets not set per environment / team
25. Reserved / Savings Plan utilization < 95%

---

## How to Identify Wasted Spend in Each Category

The general method, applied to every category:

1. **Find the resource** (using the console path or CLI command in `audit-checklist.md`).
2. **Measure the utilization** (CPU%, IOPS, age, rate of access).
3. **Compute the monthly cost** of the wasted slice.
4. **Suggest the action** (resize, terminate, move tier, add a Savings Plan).
5. **Estimate the saving** in dollars per month and tag with confidence (High / Medium / Low).

### Example — finding idle EC2 instances (the single highest-ROI item)

1. Open **AWS Cost Explorer → Reports → New Report**. Group by `Instance ID`.
2. Cross-reference with **CloudWatch → Metrics → EC2 → CPUUtilization**, last 14 days.
3. Any instance with **average CPU < 5% AND max CPU < 20%** for 14 days is idle.
4. Run `aws ec2 describe-instances --instance-ids i-xxx --query 'Reservations[].Instances[].LaunchTime'` to confirm it's been alive that long.
5. Recommend: terminate (if forgotten), schedule (if dev/staging), or downsize 4 generations (if test).

For each idle m5.xlarge ($140/mo) you spot, that is **$1,680/year recovered** — and there are typically 5–20 of them in any company over $50K/mo cloud spend.

### Quick wins by category (typical findings)

| Category | Hours to find | Typical recovery in a $200K/mo account |
|---|---|---|
| Idle EC2 | 1–2 | $4K–$15K/mo |
| Oversized instances | 2–4 | $5K–$20K/mo |
| Unattached EBS / snapshots | 0.5 | $500–$3K/mo |
| Missing Savings Plan | 0.5 | $5K–$30K/mo |
| Logs / data egress / NAT | 2–3 | $1K–$8K/mo |
| Dev environments 24×7 | 0.5 | $2K–$12K/mo |

A single week of focused audit on a $200K/mo account routinely uncovers **$15K–$60K/mo in actionable savings**.

---

## How to Write the Client Remediation Report

The deliverable is a single PDF. Structure it like this — every successful FinOps consultant uses some version of it.

### Section 1 — Executive Summary (1 page)
- Total cloud spend over the audit period.
- Total **identified waste** in dollars and percentage of total bill.
- Top 3 highest-impact recommendations.
- Estimated annual savings if all recommendations are implemented.
- Estimated effort to implement (in engineering days).

### Section 2 — Scorecard (1 page)
A simple table showing the 25-point checklist with a Pass / Caution / Fail status and savings opportunity per row.

### Section 3 — Findings, sorted by ROI (5–15 pages)
For each finding, one page with this structure:
- **Finding title** (e.g., "Idle EC2 instances: 14 instances running at <5% CPU for 30+ days")
- **Where found** (the exact resource IDs / console URLs)
- **Why it costs you** (one paragraph of plain English)
- **Monthly cost of the waste**
- **Recommended action** (specific, executable)
- **Effort** (in engineering hours)
- **Savings (annualized)** + **confidence level**

Sort the findings by *Savings ÷ Effort*. Always lead with the highest-ROI items.

### Section 4 — 30 / 60 / 90 day implementation plan
Bucket the recommendations into:
- **Quick wins (do this week)** — high savings, low effort, low risk.
- **30 days** — medium effort, requires a planning conversation.
- **90 days** — architectural changes, Reserved Instance commitments, tagging rollout.

### Section 5 — Appendix
- The raw billing CSV (linked, not pasted).
- The methodology used.
- Definitions of any FinOps terms used.

(Use **Prompt 2** in `prompts.md` to generate this entire report from your raw findings notes.)

---

## How to Price Your Service

Two pricing models work. Pick based on the client's size and your appetite for risk.

### Model 1 — Percentage of savings (high ceiling, slower close)

Charge **15–25% of the first 12 months of identified savings**, billed in three installments (audit delivery, +30 days, +90 days).

**Example:** You find $40K/mo in waste at a client. 12-month savings = $480K. Your 20% fee = **$96K**.

**Pros:** Massive upside, alignment with client's win.
**Cons:** Longer sales cycle, harder to close (legal / procurement need to bless the model), you bear the risk if implementation never happens.

### Model 2 — Fixed fee (faster close, predictable cash)

Tier the audit by monthly cloud spend:

| Client's monthly cloud spend | Audit fee | Delivery time |
|---|---|---|
| $10K – $50K / month | **$3,000** | 5 working days |
| $50K – $200K / month | **$7,500** | 10 working days |
| $200K – $500K / month | **$15,000** | 15 working days |
| $500K + / month | **$25,000+** | 20+ working days |

**Pros:** Closes in days, no procurement drama, you can run multiple in parallel.
**Cons:** Caps your upside; the $25K engagement might find $80K/mo waste worth $960K to them.

### Hybrid (recommended)

Charge a **fixed fee for the audit + a 12-month implementation retainer at 15% of savings actually realized** (verified by month-over-month bill comparison). Best of both worlds: cash up front, upside on the back.

---

## Email Templates to Pitch FinOps Cold

Three templates, ranked by what works best in 2026.

### Template 1 — The "Free Diagnostic" hook (highest reply rate)

> **Subject:** A 30-minute look at your AWS bill — no charge
>
> Hi [Name],
>
> Most companies your size are leaving 25–35% of their cloud bill on the table — idle instances, missing Savings Plans, forgotten dev environments running 24×7. I've helped [TYPE OF COMPANY] uncover ~$15K–$60K per month in recoverable spend in a single week of audit.
>
> I'm offering 5 free 30-minute "cloud bill diagnostics" this month for [INDUSTRY] companies. I'll look at your last month's AWS Cost & Usage Report and flag the top 3 areas of waste, no commitment.
>
> If you're game, reply with a 30-minute slot this week and I'll send a one-page NDA + the data export instructions.
>
> [Your name]
> Soul in Motion · [link]

### Template 2 — The "specific finding" hook (for warm intros / referrals)

> **Subject:** Quick note on [Company]'s NAT Gateway costs
>
> Hi [Name],
>
> I noticed (from public job posts / engineering blog) that you're running a multi-region setup on AWS. NAT Gateway hourly + per-GB charges are the silent killer in that pattern — for accounts your size, $4K–$12K/month is typical waste, and 90% of it is fixable in a day with VPC endpoints.
>
> I run cloud cost audits as a productized service. Our typical client recovers 10–30% of their bill within 60 days. Engagements start at $7,500 and finish in two weeks.
>
> Worth a 20-minute call? Here's my calendar: [link]
>
> [Your name]

### Template 3 — The "second-touch" follow-up (for non-replies)

> **Subject:** Re: [previous subject]
>
> Hi [Name],
>
> Bumping this in case it got buried. To make this concrete: the last engagement we ran (a [SIZE] [INDUSTRY] company) found $32K/month in recoverable spend in 9 working days. The audit fee was $7,500 — paid back inside the first month and counting.
>
> If FinOps isn't on the priority list right now, no problem — happy to revisit in Q[NEXT QUARTER]. If it is, here's my calendar: [link]
>
> [Your name]

### Outreach math

- 50 cold emails → ~5 replies → ~2 calls → ~1 closed engagement. (For warm / referral, it's roughly 10x better.)
- One closed $7,500 engagement covers 30 hours of audit work at $250/hr equivalent — and produces the case study that closes the next 5.

(Prompt 3 in `prompts.md` generates personalized variants of these templates from a target's public information.)

---

## Productizing This Into a Repeatable Business

The path from "first $3K audit" to "$30K MRR practice" is concrete:

1. **Run 3 audits at fixed fee** ($3K each = $9K). Document everything obsessively. These are case studies #1–3.
2. **Publish the case studies** (anonymized if needed) on a one-page Carrd / Notion site. Title: "Cloud cost audits for $50K–$500K/month AWS bills."
3. **Send the cold email above** to 50 targets per week. Convert ~1 per week.
4. **Add a $1,500/month "FinOps Pulse" retainer** as the implementation layer. Aim for 60% conversion of audit clients into retainer.
5. By month 6: 6–8 active retainer clients = $9K–$12K MRR, plus 2–3 new audits per month at $7.5K–$15K.
6. Hire a junior to run the data collection and the AI prompts. You stay on findings, recommendations, and client conversations.

Realistic 12-month earning trajectory for a solo operator following this kit: **$80K – $200K** in year 1. Not a side income — a real practice.

---

Questions? **rajputdev77.gumroad.com** or DM **@soulmotion.studio** on Instagram.

— Dev Rajput
Soul in Motion

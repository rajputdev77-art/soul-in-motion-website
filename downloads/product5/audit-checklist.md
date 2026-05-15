# FinOps Audit — The 25-Point Checklist

> A standalone checklist for cloud cost audits on AWS or GCP. Use this on every engagement. Run top to bottom. Tag every finding with: **Monthly waste ($)**, **Effort to fix (hours)**, **Risk (Low/Med/High)**, **Confidence (High/Med/Low)**.

By Dev Rajput · Soul in Motion

---

## How to Use This Checklist

1. Get **read-only billing access** to the client account. (AWS: `Billing` + `CostExplorerReadOnly` + `ViewBilling` policies. GCP: `Billing Account Viewer` + `Project Viewer`.)
2. Pull the **last 90 days of billing data** as a CSV (AWS: Cost & Usage Report → S3 export. GCP: Billing Export to BigQuery).
3. Open this checklist and work top to bottom. Spend ~30 minutes per item — most will be quick.
4. For each finding, fill in the standard columns (waste, effort, risk, confidence).
5. Use the matching **AI prompt** from `prompts.md` whenever you have raw data and need a fast first pass.

---

## COMPUTE (8 items)

### Item 1 — Idle EC2 / Compute Engine instances
- **What to check:** Instances with avg CPU < 5% AND max CPU < 20% over the last 14 days.
- **Where to find it (AWS):** CloudWatch → Metrics → EC2 → CPUUtilization → group by InstanceId → 14-day average.
- **Where to find it (GCP):** Compute Engine → VM Instances → Monitoring tab → CPU utilization, 14d.
- **What waste looks like:** A `m5.xlarge` running for months at 2% CPU = $140/mo wasted.
- **Recommended action:** Terminate if forgotten; schedule on/off if dev/staging; downsize 4 generations if test workload.

### Item 2 — Oversized instances
- **What to check:** Instances with sustained CPU < 40% AND memory < 50% (use CloudWatch Agent for memory on AWS).
- **Where to find it:** AWS Compute Optimizer (free) gives sized-down recommendations directly. GCP: Recommender API → Rightsizing recommendations.
- **What waste looks like:** A `m5.4xlarge` ($560/mo) actually fits on `m5.xlarge` ($140/mo) → $420/mo saved.
- **Recommended action:** Resize during the next maintenance window. Test on staging first.

### Item 3 — Underutilized Auto Scaling groups
- **What to check:** ASGs where the minimum capacity is set higher than actual demand needs.
- **Where to find it:** AWS Auto Scaling Console → for each ASG, check if `min` ≥ average request capacity.
- **What waste looks like:** ASG has `min=4` but traffic actually only requires 2 instances 80% of the time.
- **Recommended action:** Lower `min` capacity. Tighten target tracking thresholds.

### Item 4 — Old generation instance types
- **What to check:** Any running instance of generation older than the current default (m5/c5/r5 still common; m4/c4/r4 should be gone; m3/c3 are obsolete).
- **Where to find it:** AWS CLI: `aws ec2 describe-instances --query 'Reservations[].Instances[].[InstanceId, InstanceType]' --output table`.
- **What waste looks like:** Same vCPU/RAM as current gen but 10–30% more expensive.
- **Recommended action:** Move to current generation in next deploy cycle. Often a one-line change.

### Item 5 — On-demand instances eligible for Reserved Instances or Savings Plans
- **What to check:** Steady-state production workloads still on on-demand pricing.
- **Where to find it:** AWS Cost Explorer → Reservations → Recommendations. GCP: Committed Use Discount recommendations in the Billing console.
- **What waste looks like:** $50K/mo of stable production workload on on-demand vs. 1-year all-upfront RI = ~30% savings = $15K/mo.
- **Recommended action:** Buy Compute Savings Plans (more flexible than RIs) at the recommended commitment level. Layer 1-year and 3-year terms.

### Item 6 — Spot opportunity for stateless workloads
- **What to check:** Stateless / fault-tolerant batch jobs, CI runners, dev workloads still running on on-demand.
- **Where to find it:** Talk to engineering; review CI configurations.
- **What waste looks like:** A nightly ML training job that runs on `g4dn.xlarge` on-demand ($0.526/hr) vs. spot ($0.16/hr) = 70% savings.
- **Recommended action:** Move workload to Spot Fleet / GCP preemptible VMs with a spot interruption handler.

### Item 7 — Forgotten dev / staging environments running 24×7
- **What to check:** Non-production accounts / projects with compute usage between 7pm and 7am local time, weekends, or holidays.
- **Where to find it:** Cost Explorer → filter by `Environment` tag (if tagging exists) or by account/project ID.
- **What waste looks like:** A staging cluster identical to prod, running 168 hours/week when it only needs ~50.
- **Recommended action:** Schedule shutdown via Lambda/Cloud Scheduler. Saves ~70% on those resources.

### Item 8 — Unattached Elastic IPs / static IPs
- **What to check:** Allocated IPs not attached to a running instance.
- **Where to find it (AWS):** EC2 Console → Elastic IPs → filter "Not associated".
- **What waste looks like:** Each unattached EIP = $3.60/mo. Stack up 30–50 of them and it adds up.
- **Recommended action:** Release. Cheap to recreate if needed.

---

## STORAGE (5 items)

### Item 9 — Unattached EBS / persistent disks
- **What to check:** Volumes in `available` (unattached) state.
- **Where to find it (AWS):** EC2 → Volumes → filter State = available.
- **Where to find it (GCP):** Compute Engine → Disks → filter "In use by" empty.
- **What waste looks like:** A 500GB gp3 volume costs ~$40/mo. 20 stranded ones = $800/mo silent burn.
- **Recommended action:** Snapshot then delete after a grace period (or just delete if recent snapshot exists).

### Item 10 — Old snapshots without lifecycle policy
- **What to check:** Snapshots older than 90 days with no lifecycle / retention rule.
- **Where to find it (AWS):** EC2 → Snapshots → sort by Started date.
- **What waste looks like:** Snapshots cost ~$0.05/GB/mo. 5 TB of orphan snapshots = $250/mo, growing forever.
- **Recommended action:** Set up a Data Lifecycle Manager policy: keep last 7 daily, 4 weekly, 3 monthly. Delete orphans manually after audit.

### Item 11 — S3 / Cloud Storage buckets in wrong storage class
- **What to check:** Standard-tier buckets where last-access date is > 30 days for most objects.
- **Where to find it (AWS):** S3 → Bucket → Storage class analysis (free, takes 30+ days to populate). Or run S3 Inventory.
- **What waste looks like:** 10 TB in S3 Standard ($230/mo) vs. Glacier Instant Retrieval ($40/mo) = $190/mo saved per bucket.
- **Recommended action:** Add lifecycle rules to transition objects to Standard-IA after 30 days, Glacier IR after 90 days.

### Item 12 — Logs without retention
- **What to check:** CloudWatch / Cloud Logging log groups with retention = "Never expire".
- **Where to find it (AWS):** CloudWatch → Log groups → look at Retention column.
- **What waste looks like:** A high-volume log group ingesting 100GB/day = $50/mo just to ingest. Multiply by years of retention.
- **Recommended action:** Set retention to 30 days for app logs, 90 days for audit logs, 7 days for debug logs. Export longer retention to S3 Glacier.

### Item 13 — Cross-region replication not actually used
- **What to check:** S3 buckets with cross-region replication enabled where the destination is rarely accessed.
- **Where to find it:** S3 → bucket → Management → Replication rules.
- **What waste looks like:** Doubles storage cost AND adds cross-region transfer cost. 10 TB replicated = $230/mo + transfer.
- **Recommended action:** Confirm DR strategy actually relies on it. If not, disable.

---

## NETWORKING (4 items)

### Item 14 — Cross-AZ data transfer overuse
- **What to check:** Heavy chatter between services in different Availability Zones.
- **Where to find it:** Cost Explorer → group by Usage Type → look for `DataTransfer-Regional-Bytes`.
- **What waste looks like:** $0.01/GB each way = $20/TB. A chatty microservice setup can rack up $5K/mo.
- **Recommended action:** Co-locate services that talk a lot in the same AZ. Use service mesh awareness.

### Item 15 — NAT Gateway costs
- **What to check:** NAT Gateway hourly cost ($32.40/mo each) + per-GB processed cost ($0.045/GB).
- **Where to find it:** Cost Explorer → filter by service "EC2 - Other" → look at Data Processed line.
- **What waste looks like:** Pulling images / packages through NAT instead of through VPC endpoints. $5K–$15K/mo wasted at scale.
- **Recommended action:** Add VPC endpoints for S3, DynamoDB, ECR (free). Add Interface Endpoints for other AWS services (cheaper than NAT for high-volume).

### Item 16 — Missing CloudFront / CDN
- **What to check:** Public-facing static content served directly from S3 or origin servers, generating egress charges.
- **Where to find it:** Cost Explorer → look at Data Transfer Out from S3 / EC2 to internet.
- **What waste looks like:** $0.09/GB egress from S3 vs. $0.085/GB from CloudFront — and CloudFront caches, dramatically cutting origin requests.
- **Recommended action:** Put CloudFront in front of any public bucket / endpoint serving > 1TB/mo.

### Item 17 — VPC endpoints not used for AWS service calls
- **What to check:** Services calling DynamoDB, S3, Secrets Manager, ECR — do they go through NAT, or through a VPC endpoint?
- **Where to find it:** VPC → Endpoints. Cross-reference with NAT Data Processed costs.
- **What waste looks like:** Every GB of S3 data flowing through NAT costs $0.045 + bandwidth. A VPC Gateway Endpoint is free.
- **Recommended action:** Add S3 + DynamoDB Gateway Endpoints (free, takes 5 minutes). Add Interface Endpoints for high-volume services.

---

## DATABASE (4 items)

### Item 18 — Idle RDS / Cloud SQL instances
- **What to check:** RDS instances with avg CPU < 5% AND active connections < 5 over 14 days.
- **Where to find it (AWS):** RDS → DB Instances → click each → Monitoring → CPU + DB Connections.
- **What waste looks like:** A `db.r5.large` ($175/mo) running for an old project nobody uses anymore.
- **Recommended action:** Final snapshot then delete. Or downsize to `db.t3.micro` if it might be needed.

### Item 19 — Oversized DB instances
- **What to check:** RDS instances with sustained CPU < 40%, freeable memory > 50% of total.
- **Where to find it:** RDS Performance Insights or CloudWatch.
- **What waste looks like:** `db.r5.4xlarge` ($1,400/mo) easily fits on `db.r5.xlarge` ($350/mo).
- **Recommended action:** Plan a maintenance window, snapshot, modify instance class, validate.

### Item 20 — Missing Reserved Instances on production DBs
- **What to check:** Production RDS / Cloud SQL instances on on-demand pricing for > 6 months.
- **Where to find it:** Cost Explorer → Reservations → Recommendations → RDS.
- **What waste looks like:** A `db.r5.2xlarge` is ~$700/mo on-demand, ~$420/mo with 1-year all-upfront RI = $280/mo per instance.
- **Recommended action:** Buy 1-year all-upfront RIs at recommended commitment. 3-year only for absolutely steady workloads.

### Item 21 — Old RDS snapshots / unused read replicas
- **What to check:** RDS snapshots older than retention policy. Read replicas with consistently 0 reads.
- **Where to find it:** RDS → Snapshots and RDS → DB Instances (filter Read Replica role).
- **What waste looks like:** Each snapshot beyond free tier = $0.095/GB/mo. A 500GB read replica nobody queries = the cost of a primary again.
- **Recommended action:** Set snapshot retention to 7–14 days for prod, 1 day for dev. Delete unused read replicas.

---

## VISIBILITY & GOVERNANCE (4 items)

### Item 22 — No tagging strategy → no per-team allocation
- **What to check:** % of resources missing required cost-allocation tags (`Environment`, `Team`, `Project`, `CostCenter`).
- **Where to find it (AWS):** Cost Allocation Tags console + Tag Editor (search untagged resources by region).
- **What waste looks like:** Without tags, nobody knows whose service is causing a bill spike → nothing gets fixed.
- **Recommended action:** Define 4 mandatory tags. Enforce via Service Control Policies / GCP Org Policies. Backfill via Tag Editor.

### Item 23 — Cost anomaly alerts not enabled
- **What to check:** Are AWS Cost Anomaly Detection monitors set up? Are GCP Budget alerts configured?
- **Where to find it:** AWS Cost Management → Cost Anomaly Detection. GCP: Billing → Budgets & alerts.
- **What waste looks like:** A misconfigured Lambda loops for 6 days adding $8K to the bill before anyone notices.
- **Recommended action:** Enable AWS Cost Anomaly Detection (free). Add a GCP budget per project at 50/80/100% of expected spend with email alerts.

### Item 24 — Budgets not set per environment / team
- **What to check:** Do prod, staging, dev each have a budget? Do team-owned services have a budget?
- **Where to find it:** AWS Budgets / GCP Budgets.
- **What waste looks like:** Without budget visibility, teams can't self-correct. Cost grows linearly with engineering hires.
- **Recommended action:** Set monthly budgets per environment + per major service. Send Slack alerts at 50/75/90/100%.

### Item 25 — Reserved / Savings Plan utilization < 95%
- **What to check:** Existing RIs / Savings Plans utilization rate.
- **Where to find it (AWS):** Cost Explorer → Reservations → Utilization Report.
- **What waste looks like:** A Savings Plan you're paying for at 65% utilization = paying for unused commitment.
- **Recommended action:** Adjust the commitment level on the next Savings Plan purchase. For RIs, modify or sell on the Reserved Instance Marketplace.

---

## After You Finish the 25 Items

1. Tally **monthly waste** across all findings → annualize.
2. Sort findings by **Savings ÷ Effort** (highest first).
3. Bucket into Quick Wins / 30-day / 90-day implementation plans.
4. Generate the report (use **Prompt 2** in `prompts.md` to do this in one shot).
5. Schedule the report-review call with the client.
6. Quote the **Implementation Retainer** — this is where the real revenue comes from.

---

Questions? **rajputdev77.gumroad.com** or DM **@soulmotion.studio** on Instagram.

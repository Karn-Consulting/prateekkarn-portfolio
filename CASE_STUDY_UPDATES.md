# Case Study Update System

This document explains how to request updates to the **Luxury Real Estate Marketing** case study.

## Quick Update Methods

### Method 1: GitHub Issue (Recommended)
1. Go to [GitHub Issues](https://github.com/Karn-Consulting/prateekkarn-portfolio/issues)
2. Click "New Issue"
3. Select "Case Study Update Request" template
4. Fill in the details and submit

### Method 2: Direct Chat with Manus
Simply message with your update request. Example prompts:

```
Update the Meta Ads CPL from ₹250-300 to ₹200-250
```

```
Change MagicBricks budget from ₹90K to ₹1.2L per month
```

```
Add a new channel: Housing.com at ₹75K/month
```

```
Update revenue target from ₹30 Cr to ₹35 Cr per month
```

---

## Current Configuration

### Budget Structure (Monthly)

| Channel | Budget | % | Notes |
|---------|--------|---|-------|
| Meta Ads (FB + IG) | ₹6,00,000 | 19.4% | CPL ₹250-300, ~2,000 leads |
| Radio Jingles | ₹4,50,000 | 14.5% | My FM + Big FM |
| Hoardings | ₹4,00,000 | 12.9% | 14 strategic locations |
| Newspaper | ₹4,00,000 | 12.9% | Dainik Bhaskar + Patrika |
| Google Ads | ₹2,50,000 | 8.1% | CPL ₹1,000-1,500, ~200 leads |
| PR (ET Realty) | ₹2,50,000 | 8.1% | Advertorials |
| MagicBricks | ₹90,000 | 2.9% | 3-mo package (₹2.7L upfront) |
| 99 Acres | ₹90,000 | 2.9% | 3-mo package (₹2.7L upfront) |
| WhatsApp Marketing | ₹15,000 | 0.5% | Automated sequences |
| Email Marketing | ₹17,500 | 0.6% | Drip campaigns |
| Database Purchase | ₹20,000 | 0.6% | HNI contacts |
| Contingency (20%) | ₹5,16,500 | 16.7% | Buffer fund |
| **Total** | **₹30,99,000** | **100%** | |

### Revenue Model (Progressive)

| Month | Revenue | Units | Cash Outflow | ROI |
|-------|---------|-------|--------------|-----|
| M1 (Launch) | ₹15 Cr | 15 | ₹34.6 L* | 43x |
| M2 (Optimize) | ₹22.5 Cr | 23 | ₹31 L | 73x |
| M3 (Full Capacity) | ₹30 Cr | 30 | ₹31 L | 97x |
| M4 (+10%) | ₹33 Cr | 33 | ₹34.6 L* | 95x |
| M5 (+10%) | ₹36.3 Cr | 36 | ₹31 L | 117x |
| M6 (+10%) | ₹39.9 Cr | 40 | ₹31 L | 129x |
| **6-Mo Total** | **₹176.7 Cr** | **177** | **₹1.93 Cr** | **~92x** |

*Includes ₹5.4L quarterly portal payment

### Key Metrics

- **Meta CPL:** ₹250-300
- **Google CPL:** ₹1,000-1,500
- **Projected ROI:** ~92x
- **Marketing Load:** ~1%
- **Avg. Unit Price:** ₹1 Cr

---

## File Locations

### PPT/Slides (Chordia Branding)
- Location: `/home/ubuntu/gulmohar_marketing_plan_slides/`
- Key files:
  - `slide_7_monthly_budget.html` - Budget breakdown
  - `slide_21_roi_projection.html` - ROI projections
  - `slide_9_digital_strategy.html` - Digital channels
  - `slide_14_property_portals.html` - Portal strategy

### Website (Anonymized)
- Location: `/home/ubuntu/prateekkarn-portfolio/src/pages/`
- Key files:
  - `GulmoharHeights.tsx` - Full case study page
  - `MyWork.tsx` - Card on My Work page (line 123-135)

### Assets
- PDF: `/public/case-studies/gulmohar-heights/Gulmohar_Heights_360_Marketing_Plan.pdf`
- Images: `/public/case-studies/gulmohar-heights/`

---

## Branding Rules

| Element | PPT/Slides | Website |
|---------|------------|---------|
| Project Name | "Gulmohar Heights" | "Luxury Real Estate" |
| Developer | "Chordia Group" | "Premium Real Estate Developer" |
| Logo | Chordia's logo | None (use abstract image) |
| Location | Jaipur | Jaipur |

---

## After Updates

1. **PPT Changes:** Re-export to PDF and upload to website
2. **Website Changes:** Commit and push to GitHub (auto-deploys to Vercel)

```bash
cd /home/ubuntu/prateekkarn-portfolio
git add .
git commit -m "Update case study: [description]"
git push origin main
```

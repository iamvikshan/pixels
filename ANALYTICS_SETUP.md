<!-- @format -->

# Analytics Setup Guide

Partytown has been installed and configured to run analytics scripts in a web worker, keeping your
main thread fast and responsive.

## Option 1: Google Analytics 4 (GA4)

1. Create a GA4 property at https://analytics.google.com
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Open `/src/layouts/Layout.astro`
4. Uncomment the Google Analytics section (lines ~63-70)
5. Replace `G-XXXXXXXXXX` with your actual Measurement ID

**Pros:**

- Comprehensive analytics and reporting
- Integration with Google Ads
- Free

**Cons:**

- Privacy concerns (requires cookie consent in EU)
- Bloated scripts
- Data owned by Google

## Option 2: Plausible Analytics (Recommended for Privacy)

1. Create an account at https://plausible.io
2. Add your domain (`vikshanpixels.com`)
3. Open `/src/layouts/Layout.astro`
4. Uncomment the Plausible section (line ~73-76)
5. Verify the domain matches your site

**Pros:**

- Privacy-friendly (no cookies, GDPR compliant)
- Lightweight script (< 1KB)
- Simple, beautiful dashboard
- No consent banner needed

**Cons:**

- Paid service after 30-day trial (~$9/month)
- Less detailed than GA4

## Option 3: Fathom Analytics

Another privacy-focused alternative similar to Plausible.

```html
<script
  src="https://cdn.usefathom.com/script.js"
  data-site="XXXXXXXX"
  defer
  type="text/partytown"
></script>
```

## How Partytown Works

Partytown runs third-party scripts in a web worker, moving them off the main thread. This keeps your
site fast while still tracking analytics.

Scripts with `type="text/partytown"` are automatically moved to the worker.

## Testing Analytics

After enabling:

1. Visit your site in incognito mode
2. Check the analytics dashboard (may take a few minutes to show data)
3. Verify page views are being tracked

## Current Status

✅ Partytown installed and configured ⚠️ Analytics scripts commented out (waiting for you to choose
and configure)

Choose one option above, uncomment the relevant section, and add your tracking ID!

# How to Connect a Custom Domain to Your Netlify Site

Here are the steps to point your custom domain (e.g., `workhorseworkshops.com`) to your new website.

## Prerequisites
- You must own the domain name. If you haven't purchased one yet, you can do so from a registrar like **Namecheap**, **GoDaddy**, **Google Domains** (now Squarespace), or directly through **Netlify**.

---

## Step 1: Add the Domain to Netlify

1. Log in to your **Netlify Dashboard**.
2. Select your site (`workhorse-workshops`).
3. Go to **Domain management** (in the left sidebar) > **Domains**.
4. Click **"Add a domain"**.
5. Enter your domain name (e.g., `workhorseworkshops.com`) and click **Verify**.
6. Click **"Add domain"**.

---

## Step 2: Configure DNS Settings

You have two options. **Option A** is recommended because it allows Netlify to automatically manage your DNS records and makes features like branch subdomains easier.

### Option A: Use Netlify DNS (Recommended)
*Best if you don't have existing complex email/hosting records you're afraid to touch.*

1. After adding your domain, click **"Set up Netlify DNS"** next to your domain in the Netlify dashboard.
2. Netlify will provide you with **4 Nameservers** (e.g., `dns1.p01.nsone.net`, `dns2...`, etc.).
3. **Log in to your Domain Registrar** (where you bought the domain).
4. Find the **Nameservers** or **DNS Management** section for your domain.
5. **Replace** your registrar's default nameservers with the 4 nameservers provided by Netlify.
6. Save changes.
   * *Note: Propagation can take up to 24-48 hours, but usually happens within minutes.*

### Option B: Use External DNS (A Record & CNAME)
*Best if you want to keep managing your DNS at your current registrar (e.g., to keep existing email setup intact).*

1. Log in to your **Domain Registrar**.
2. Go to **DNS Records** or **DNS Management**.
3. **Create an A Record** for your root domain (`@` or blank):
   - **Host/Name**: `@`
   - **Value/Target**: `75.2.60.5` (Netlify's Load Balancer IP)
   - **TTL**: Default (usually 3600 or Automatic)
4. **Create a CNAME Record** for the `www` subdomain:
   - **Host/Name**: `www`
   - **Value/Target**: `workhorse-workshops.netlify.app` (Your Netlify site URL)

---

## Step 3: Verify SSL (HTTPS)

Netlify automatically provisions a free SSL certificate (Let's Encrypt) for your custom domain.

1. Go back to **Netlify > Domain management > HTTPS**.
2. You might see a status of "Waiting on DNS propagation".
3. Once DNS propagates, Netlify will automatically provision the certificate.
4. If it takes longer than 24 hours, you can click **"Verify DNS configuration"** to force a check.

## Step 4: Troubleshooting

- **"Not Secure" Warning**: This means the SSL certificate hasn't issued yet. Wait for DNS propagation.
- **Site not loading**: Double-check your Nameservers (Option A) or A/CNAME records (Option B). Ensure there are no conflicting records (e.g., other A records pointing elsewhere).

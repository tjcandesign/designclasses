# How to Connect Netlify Forms to Google Sheets via Zapier

Since the direct webhook approach had CORS issues, here's the better way to connect your form to Google Sheets:

## Step 1: Verify Netlify Forms is Working

1. Go to your Netlify dashboard: https://app.netlify.com
2. Select your site: **helpful-mousse-49ce68**
3. Go to **Forms** in the left sidebar
4. You should see a form called **"contact"**
5. Submit a test on your live site: https://helpful-mousse-49ce68.netlify.app/course
6. Refresh the Netlify Forms page - you should see the submission appear

## Step 2: Delete Your Current Zap (with the webhook)

1. Go to https://zapier.com/app/zaps
2. Find the Zap that uses the webhook trigger
3. Delete it (we'll create a new one)

## Step 3: Create a New Zap with Netlify Forms

1. Go to https://zapier.com/app/zaps
2. Click **"Create Zap"**
3. **Trigger:**
   - Search for and select **"Netlify"**
   - Choose trigger event: **"New Form Submission"**
   - Click **Continue**
   - Connect your Netlify account (you'll need to authorize Zapier)
   - Select your site: **helpful-mousse-49ce68**
   - Select form: **contact**
   - Click **Continue**
   - Click **Test trigger** (it should find your recent test submission)

4. **Action:**
   - Search for and select **"Google Sheets"**
   - Choose action: **"Create Spreadsheet Row"**
   - Click **Continue**
   - Connect your Google account
   - Select your spreadsheet
   - Select the worksheet/tab
   - Map the fields:
     - **Name** → Column A (or wherever your Name column is)
     - **Email** → Column B (or wherever your Email column is)
     - **Phone** → Column C (or wherever your Phone column is)
   - Click **Continue**
   - Click **Test action** to verify it works
   - Click **Publish**

## Step 4: Test the Complete Flow

1. Go to https://helpful-mousse-49ce68.netlify.app/course
2. Fill out and submit the contact form
3. Check your Google Sheet - the data should appear within 1-2 minutes

## Troubleshooting

- **Form not showing in Netlify:** Make sure you've submitted at least one test form first
- **Zapier can't find submissions:** Try submitting another test form, then refresh the Zapier test
- **Data not mapping correctly:** Double-check that you're mapping the correct Netlify form fields to the correct Google Sheets columns

## Why This Works Better

- ✅ No CORS issues (Netlify → Zapier happens server-side)
- ✅ More reliable (Netlify Forms is designed for this)
- ✅ You can see all submissions in Netlify dashboard as backup
- ✅ Zapier's native Netlify integration is well-maintained

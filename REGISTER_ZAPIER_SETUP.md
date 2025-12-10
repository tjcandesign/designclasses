# Zapier Setup: Workshop Registration

Follow these steps to connect the new **Workshop Registration** form to your Google Sheet.

## 1. Prepare Google Sheet
1.  Open your **Workhorse Workshops** Google Sheet.
2.  Create a **new tab/sheet** at the bottom named `Registered Attendees`.
3.  Add the following headers in the first row:
    *   `Name`
    *   `Email`
    *   `Phone`
    *   `Registration Date`

## 2. Create the Zap
1.  Log in to **Zapier**.
2.  Click **Create Zap**.

### Trigger: New Form Submission
1.  **App**: Select **Netlify**.
2.  **Event**: Select **New Form Submission**.
3.  **Account**: Connect/Select your Netlify account.
4.  **Site**: Select your site (`helpful-mousse-49ce68`).
5.  **Form**: Select `register` (This is important! Do not select 'contact').
6.  **Test**: Click "Test Trigger". Zapier should find a recent submission (if you haven't submitted one yet, go to `/register` on your site and submit a test registration first).

### Action: Create Spreadsheet Row
1.  **App**: Select **Google Sheets**.
2.  **Event**: Select **Create Spreadsheet Row**.
3.  **Account**: Connect your Google account.
4.  **Drive**: Select your drive.
5.  **Spreadsheet**: Select **Workhorse Workshops**.
6.  **Worksheet**: Select `Registered Attendees` (the new tab you created).
7.  **Map Fields**:
    *   **Name**: Select `Data Name` from Netlify.
    *   **Email**: Select `Data Email` from Netlify.
    *   **Phone**: Select `Data Phone` from Netlify.
    *   **Registration Date**: Select `Created At` from Netlify.
8.  **Test**: Click "Test Step" to verify the row is added to your sheet.
9.  **Publish**: Click **Publish** to turn the Zap on.

---

**Success!**
Every time someone registers via `/register`, their details will automatically appear in the "Registered Attendees" tab.

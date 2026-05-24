OPTI-WORK SOLUTIONS ATTENDANCE SYSTEM - FINAL TEST PACKAGE

FILES FOR GITHUB PAGES:
- index.html
- style.css
- script.js
- logo.png
- manifest.json
- service-worker.js

FILE FOR GOOGLE APPS SCRIPT ONLY:
- code.gs

IMPORTANT:
Do NOT rely on code.gs from GitHub as your backend. Open Google Apps Script, paste code.gs there, then deploy as Web App.

GOOGLE SHEETS TABS REQUIRED:
- AGENTS
- ATTENDANCE
- HISTORY

Apps Script settings:
Execute as: Me
Who has access: Anyone

Backend test:
Open your Web App URL ending in /exec. It should show:
{"success":true,"message":"Opti-work Solutions attendance backend is running."}

If GitHub still shows old behavior:
1. Hard refresh browser using Ctrl + F5.
2. Clear site data/cache for your domain.
3. Make sure script.js has the latest GOOGLE_SCRIPT_URL.


=== TOTAL HOURS UTC/EPOCH FIX ===
This version fixes the 12-13 hour Total Hours bug by storing hidden UTC-safe epoch milliseconds in ATTENDANCE columns K and L:
- Check In Epoch
- Check Out Epoch

IMPORTANT AFTER UPLOAD:
1. Replace GitHub files with these files.
2. Paste the new code.gs into Apps Script.
3. Deploy > Manage deployments > Edit > New version > Deploy.
4. Test using a brand-new check-in/check-out row. Old rows created before this fix may still show old bad totals.


UPDATE NOTE:
- This version displays all database timestamps in US Eastern Time / America/New_York.
- Total Hours is calculated using hidden epoch milliseconds, not displayed date strings.
- After pasting code.gs into Apps Script, deploy a NEW VERSION.
- Test with a fresh Check In / Check Out. Old open rows created before this fix may still calculate wrong because they do not have epoch values.

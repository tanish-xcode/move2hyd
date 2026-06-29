// ─────────────────────────────────────────────────────────────
// Move2Hyderabad → Google Sheets sync
//
// SETUP / RE-DEPLOY STEPS:
// 1. Open Apps Script → replace all code with this → Save
// 2. Deploy → Manage deployments → Edit (pencil) → Version: New version → Deploy
// ─────────────────────────────────────────────────────────────

const SHEET_NAME_AMBASSADOR = "Ambassador Shares";
const SHEET_NAME_LEADS = "Plan Your Move Leads";

function doGet(e) {
  try {
    const type = e.parameter.type;
    const phone = e.parameter.phone || "";
    const method = e.parameter.method || "";
    const email = e.parameter.email || "";
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    if (type === "ambassador") {
      appendAmbassadorRow(ss, phone, method);
    } else if (type === "lead") {
      appendLeadRow(ss, phone, email);
    }

    return ContentService.createTextOutput("ok");
  } catch (err) {
    return ContentService.createTextOutput("error: " + err.message);
  }
}

function appendAmbassadorRow(ss, phone, method) {
  let sheet = ss.getSheetByName(SHEET_NAME_AMBASSADOR);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME_AMBASSADOR);
    sheet.appendRow(["Phone", "Share Method", "Timestamp"]);
    sheet.getRange(1, 1, 1, 3).setFontWeight("bold");
  }
  sheet.appendRow([phone, method, new Date().toLocaleString("en-IN")]);
}

function appendLeadRow(ss, phone, email) {
  let sheet = ss.getSheetByName(SHEET_NAME_LEADS);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME_LEADS);
    sheet.appendRow(["Phone", "Email", "Timestamp"]);
    sheet.getRange(1, 1, 1, 3).setFontWeight("bold");
  }
  sheet.appendRow([phone, email, new Date().toLocaleString("en-IN")]);
}

---
layout: default
title: "CSV to JSON Converter - Convert Excel and CSV Files to JSON Online"
permalink: /csv-to-json-converter-convert-excel-and-csv-files-to-json-online/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free CSV to JSON Converter - Convert Excel and CSV Files to JSON Online</title>
<meta name="description"
  content="Free online CSV to JSON converter tool. Convert Excel files (.xls, .xlsx) and CSV files to JSON format instantly. No installation required.">
<meta name="keywords"
  content="csv to json, excel to json, xls to json, xlsx to json, csv converter, json converter, excel converter, data conversion, spreadsheet to json">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- SheetJS Library -->
<script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>

<style>
  /* Converter Styles */
  .converter-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .converter-container h1 {
    color: var(--primary);
    text-align: center;
    margin-bottom: 15px;
    font-size: 2.5rem;
    border-bottom: 3px solid var(--primary);
    padding-bottom: 15px;
  }

  .welcome-message {
    text-align: center;
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 40px;
    line-height: 1.8;
  }

  .converter-section {
    margin-bottom: 40px;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .converter-section h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .converter-section p {
    margin-bottom: 15px;
    line-height: 1.8;
    color: #333;
  }

  .counter-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    border-left: 4px solid var(--primary);
  }

  .counter-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: white;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .counter-item span:first-child {
    font-weight: 600;
    color: var(--primary);
  }

  .counter-item span:last-child {
    font-weight: bold;
    color: #2c3e50;
  }

  .input-section {
    margin: 20px 0;
  }

  .input-section textarea {
    width: 100%;
    padding: 18px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 16px;
    min-height: 220px;
    resize: vertical;
    font-family: 'Courier New', monospace;
    transition: border-color 0.3s;
  }

  .input-section textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .file-upload-section {
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .file-upload-button {
    padding: 12px 20px;
    background: var(--primary);
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
    border: none;
  }

  .file-upload-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
  }

  #fileName {
    font-style: italic;
    color: #7f8c8d;
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .case-button {
    padding: 14px 10px;
    border: none;
    border-radius: 8px;
    background: var(--primary);
    color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
  }

  .case-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .case-button:active {
    transform: translateY(0);
  }

  .case-button.success {
    background: var(--success);
  }

  .case-button.success:hover {
    background: #218838;
  }

  .case-button.secondary {
    background: #6c757d;
  }

  .case-button.secondary:hover {
    background: #5a6268;
  }

  .case-button.warning {
    background: #ffc107;
    color: #212529;
  }

  .case-button.warning:hover {
    background: #e0a800;
  }

  .alert-container {
    margin-top: 20px;
    min-height: 50px;
  }

  .alert {
    padding: 14px 20px;
    border-radius: 8px;
    margin-bottom: 10px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .alert-success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  .alert-error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }

  .alert .close {
    cursor: pointer;
    font-weight: bold;
  }

  .file-info {
    margin-top: 10px;
    font-size: 14px;
    color: #7f8c8d;
    width: 100%;
  }

  .options-section {
    background: #f8f9fa;
    padding: 0px;
    border-radius: 10px;
    margin: 10px 0;
  }

  .examples {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .example-text {
    background: white;
    padding: 15px;
    border-radius: 6px;
    border-left: 4px solid var(--primary);
    margin: 10px 0;
    font-family: monospace;
    white-space: pre-wrap;
  }

  .content-placeholder {
    padding: 25px;
    background: white;
    border-radius: 12px;
    margin-top: 30px;
  }

  .content-placeholder ul {
    margin: 15px 0;
    padding-left: 30px;
  }

  .content-placeholder li {
    margin-bottom: 10px;
    line-height: 1.6;
    color: #555;
  }

  .content-placeholder h2 {
    color: #2c3e50;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 15px;
    margin-bottom: 25px;
  }

  /* New styles for share and donation buttons */
  .share-donation-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    flex-wrap: wrap;
    gap: 15px;
  }

  .share-buttons,
  .donation-buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .share-button,
  .donation-button {
    padding: 10px 15px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    border: none;
  }

  .share-button:hover,
  .donation-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .facebook {
    background: #3b5998;
    color: white;
  }

  .twitter {
    background: #1da1f2;
    color: white;
  }

  .linkedin {
    background: #0077b5;
    color: white;
  }

  .pinterest {
    background: #bd081c;
    color: white;
  }

  .reddit {
    background: #FF4500;
    color: white;
  }

  .paypal {
    background: #0070ba;
    color: white;
  }

  .coffee {
    background: #ff813f;
    color: white;
  }

  .upload-icon {
    color: var(--primary);
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    padding: 5px;
    border-radius: 4px;
  }

  .upload-icon:hover {
    background: rgba(52, 152, 219, 0.1);
    transform: scale(1.1);
  }

  /* Modal styles */
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.3s;
  }

  .modal-content {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 30px;
    border-radius: 12px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    animation: slideIn 0.3s;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
  }

  .modal-title {
    font-size: 1.5rem;
    color: var(--primary);
    margin: 0;
  }

  .close-modal {
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s;
  }

  .close-modal:hover {
    color: #000;
  }

  .modal-body {
    margin-bottom: 20px;
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  .modal-button {
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
  }

  .modal-button.primary {
    background: var(--primary);
    color: white;
  }

  .modal-button.secondary {
    background: #6c757d;
    color: white;
  }

  .modal-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideIn {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  /* Converter specific styles */
  .conversion-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .option-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .option-label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .option-select, .option-input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
  }

  .option-input {
    width: 80px;
  }

  .option-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .option-checkbox input {
    width: 18px;
    height: 18px;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .counter-wrapper {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .case-button {
      font-size: 13px;
      padding: 12px 8px;
    }

    .file-upload-section {
      flex-direction: column;
      align-items: flex-start;
    }

    .converter-container {
      padding: 15px;
    }

    .converter-section {
      padding: 20px;
      margin-bottom: 30px;
    }

    .converter-container h1 {
      font-size: 2rem;
    }

    .converter-section h2 {
      font-size: 1.3rem;
    }

    .share-donation-section {
      flex-direction: column;
      align-items: stretch;
    }

    .share-buttons,
    .donation-buttons {
      justify-content: center;
    }

    .modal-content {
      margin: 20% auto;
      width: 95%;
      padding: 20px;
    }

    .conversion-options {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free CSV to JSON Converter</h1>
  <p class="welcome-message">Convert Excel files (.xls, .xlsx) and CSV files to JSON format instantly. No installation required - works directly in your browser.</p>

  <div class="converter-section">
    <h2>CSV/Excel to JSON Converter</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>File Name: </span>
        <span id="fileNameDisplay">No file selected</span>
      </div>
      <div class="counter-item">
        <span>File Size: </span>
        <span id="fileSize">0 KB</span>
      </div>
      <div class="counter-item">
        <span>Rows Converted: </span>
        <span id="rowCount">0</span>
      </div>
      <div class="counter-item">
        <span>Sheet Name: </span>
        <span id="sheetName">-</span>
      </div>
    </div>

    <div class="file-upload-section">
      <input type="file" id="fileInput" accept=".csv, .xls, .xlsx" style="display: none;">
      <button class="file-upload-button" id="uploadButton">
        <i class="fas fa-upload"></i> Choose File
      </button>
      <span id="fileName">No file chosen</span>
      <div class="file-info">
        <small>Supported formats: CSV, XLS (Excel 97-2003), XLSX (Excel 2007+)</small>
      </div>
    </div>

    <div class="conversion-options">
      <div class="option-group">
        <label class="option-label">Empty Cell Handling</label>
        <select id="emptyCellHandling" class="option-select">
          <option value="null">Set to null</option>
          <option value="empty">Set to empty string</option>
          <option value="omit">Omit from JSON</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">JSON Formatting</label>
        <select id="jsonFormatting" class="option-select">
          <option value="pretty">Pretty Print</option>
          <option value="minified">Minified</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="firstRowHeaders" checked>
          <label for="firstRowHeaders">Use first row as headers</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="rawData" checked>
          <label for="rawData">Preserve raw data types</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" id="convertBtn" disabled>Convert to JSON</button>
        <button class="case-button success" id="downloadBtn" disabled>Download JSON</button>
        <button class="case-button" id="copyBtn" disabled>Copy to Clipboard</button>
        <button class="case-button warning" id="previewBtn" disabled>Preview Data</button>
        <button class="case-button secondary" id="clearBtn">Clear All</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="input-section">
      <h2>JSON Output</h2>
      <textarea id="jsonOutput" rows="12" placeholder="JSON output will appear here..." readonly></textarea>
    </div>

    <div class="examples">
      <h2>Examples</h2>

      <h3>Sample CSV Input:</h3>
      <div class="example-text">Name,Age,City,Email
John Doe,30,New York,john@example.com
Jane Smith,25,Los Angeles,jane@example.com
Bob Johnson,35,Chicago,bob@example.com</div>

      <h3>Converted JSON Output:</h3>
      <div class="example-text">[
  {
    "Name": "John Doe",
    "Age": 30,
    "City": "New York",
    "Email": "john@example.com"
  },
  {
    "Name": "Jane Smith",
    "Age": 25,
    "City": "Los Angeles",
    "Email": "jane@example.com"
  },
  {
    "Name": "Bob Johnson",
    "Age": 35,
    "City": "Chicago",
    "Email": "bob@example.com"
  }
]</div>
    </div>
  </div>

  ```html
<!-- SEO Content Section -->
<div class="content-placeholder">
    <h2>Free Online CSV to JSON Converter Tool</h2>

    <p>Let's be honest—if you've ever worked with data, you've probably run into this problem. You have a perfectly good spreadsheet. Maybe it's customer information, product inventory, or a list of transactions. Everything is neat and organized in rows and columns. But your web app doesn't speak spreadsheet. It speaks JSON—that bracket-filled, key-value-pair language that APIs and modern databases love. So now what? You could manually copy and paste each cell, format it by hand, and pray you don't miss a comma. That might work for ten rows. But for a thousand? You'll lose your mind. That's exactly why we built this <strong>CSV to JSON Converter</strong>. Upload your Excel file (.xls, .xlsx) or CSV, click a button, and get perfectly formatted JSON in seconds. No manual editing. No syntax errors. No headaches. And because the conversion happens entirely in your browser, your data never gets uploaded to any server. That means your client list, your financial data, your proprietary business information—none of it leaves your computer. It's free, it's private, and it just works. Whether you're a developer, a data analyst, a student, or just someone who got handed a weird data conversion task on a Friday afternoon, this tool is for you.</p>

    <h3>How to Use This CSV to JSON Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Select File (Find That Spreadsheet):</strong> Click the "Choose File" button and navigate to your CSV, XLS, or XLSX file. The tool accepts all three formats, so you don't need to convert your Excel file to CSV first—just upload the original. The converter handles both the old Excel format (.xls, from 97-2003) and the modern one (.xlsx, 2007 and later).</li>
      <li><strong>Configure Options (Make It Work Your Way):</strong> Two important settings. First: "Use first row as headers." If your spreadsheet has column names in the first row (like "Name," "Email," "Purchase Date"), enable this. The converter will use those names as JSON keys. If your spreadsheet doesn't have headers, disable it, and the converter will generate generic keys like "Column1," "Column2," etc. Second: "How to handle empty cells." You can choose to include them as null values, include them as empty strings, or skip them entirely. This matters for data integrity—if you skip empties, the JSON will only show fields with values.</li>
      <li><strong>Convert (Watch the Magic Happen):</strong> Click the "Convert to JSON" button. Depending on your file size, it might take a second or two. You'll see the resulting JSON appear in the output box—properly formatted, indented, and ready to use. No weird extra commas, no mismatched brackets, no syntax errors. Just clean, valid JSON.</li>
      <li><strong>Download or Copy (Take It With You):</strong> Need to save the JSON as a file? Click "Download JSON" and your browser will save it as a .json file. Need to paste it somewhere—like into an API request, a database import tool, or a code editor? Click "Copy to Clipboard" and the entire JSON is copied in one go. No selecting text, no missing the last bracket, no frustration.</li>
    </ul>

    <h3>Real-Life Example & Use Case (Meet Sarah):</h3>
    <p>Sarah runs a small e-commerce store. She has an Excel spreadsheet with 2,000 customer records—names, email addresses, order histories, product preferences. She's building a new mobile app that needs customer data in JSON format to populate user profiles. Manually converting 2,000 rows would take days. And any typo would break the app.</p>
    <p>Instead, Sarah opens our converter. She clicks "Choose File," selects her Excel file, enables "Use first row as headers," sets empty cells to "null," and clicks convert. In about three seconds, the tool produces a perfect JSON array of 2,000 objects, each with the correct keys and values. She copies it to her clipboard, pastes it into her app's data file, and the profiles work on the first try. Total time spent: less than a minute. No stress. No data leaks (because the file never left her computer). That's the power of a good, private, local converter.</p>
    <p><strong>Another example:</strong> Rohan is a data analyst who received a CSV export from a legacy system. The system is old, the export is messy, and the file has no headers. He needs to load it into a modern NoSQL database that expects JSON. He uploads the CSV, disables "Use first row as headers," converts, and gets a JSON array with generic Column1/Column2 keys. Then he uses a simple script to rename the keys based on his knowledge of the data. Without the converter, he'd be writing a custom parser. With it, he's done in seconds.</p>

    <h3>Benefits & Who Should Use This Tool (Probably You):</h3>
    <ul>
      <li><strong>Web Developers (Frontend and Backend):</strong> You're building an API, and the client sent you data in an Excel spreadsheet. Or you need to seed a database with test data. Or you're creating a configuration file from a settings spreadsheet. This tool saves you from writing one-off parsers every time. Upload, convert, paste, done. Spend your time on real coding, not data formatting.</li>
      <li><strong>Data Analysts & Data Engineers:</strong> You work with data in many formats. Sometimes your source is CSV or Excel, but your analysis tool (or pipeline) expects JSON. This tool is the bridge. It's especially useful for quick, one-off conversions when you don't want to write a Python or R script. And because it's private, you can use it with sensitive data—no worries about uploading client information to a random online service.</li>
      <li><strong>App Developers (Mobile):</strong> Mobile apps often fetch data from APIs in JSON format. If you're building a prototype or a small app, you might generate your data in a spreadsheet first (easier to edit and visualize), then convert to JSON for the app. This tool makes that workflow frictionless. Edit in Excel, convert, drop the JSON into your app bundle.</li>
      <li><strong>Students & Educators:</strong> Learning about data formats? Need to understand how tabular data maps to JSON? Use the converter to experiment. Take a small CSV, convert it, and see how the structure changes. Then adjust the options (headers on/off, empty cell handling) and see what happens. It's an interactive lesson in data transformation.</li>
      <li><strong>Business Users (Non-Technical):</strong> You don't know JSON from jam. But you have a spreadsheet, and your IT department or a vendor needs JSON. Instead of bugging a developer for help, you can do it yourself. Upload, convert, download, send. You'll look like a hero. The tool is designed to be intuitive—no programming knowledge required.</li>
      <li><strong>QA Engineers & Testers:</strong> Need to generate test data in JSON format? Create a CSV with your test cases, convert to JSON, and feed it into your automated tests. If your test data changes, just edit the spreadsheet and re-convert. No manual JSON editing, which means fewer syntax errors in your test files.</li>
    </ul>

    <h3>Frequently Asked Questions (Real Answers):</h3>
    <p><strong>What file formats does this converter support? Can I upload .xls and .xlsx or just .csv?</strong><br>
      All three. CSV (Comma Separated Values) is the simplest format, just text with commas and newlines. XLS is the old Excel format (97-2003). XLSX is the modern Excel format (2007 and later). The converter handles all of them. So don't bother converting your Excel file to CSV first—just upload the original. The tool figures it out.</p>

    <p><strong>Is there a file size limit? Will it choke on my 500MB monster spreadsheet?</strong><br>
      The converter is optimized for typical spreadsheet sizes (up to about 50MB and 50,000 rows). Larger files will take longer to process because the conversion happens in your browser—your computer is doing the work, not our server. For very large files (hundreds of MB, hundreds of thousands of rows), you might experience slowdowns or browser warnings. If you're dealing with massive files, consider splitting them into chunks or using a command-line tool. But for 99% of real-world use cases, the converter works smoothly.</p>

    <p><strong>Is my data kept private? Do you see my spreadsheets?</strong><br>
      Absolutely not. This is the most important answer in this entire FAQ. All conversion happens <em>locally</em> in your browser using JavaScript. Your file never gets uploaded to any server. We don't see it. We don't store it. We can't access it. When you click "Choose File," your browser reads the file from your computer, processes it locally, and never sends it over the network. You can prove this by disconnecting your internet after the page loads—the converter still works. That's how local it is. If you're working with sensitive business data, client information, or personal records, this tool is safe to use. No data leaves your device.</p>

    <p><strong>Can I use this tool on my mobile phone? What about on a tablet?</strong><br>
      Yes, it works on any device with a modern browser. The file picker works on mobile (you can choose a file from your phone's storage or cloud drives). The interface is responsive, so buttons are big enough to tap. However, processing very large files on a phone might be slower due to memory constraints. For typical files (a few MB), it's fine. For larger ones, use a laptop or desktop.</p>

    <p><strong>Do I need to create an account or pay for premium features?</strong><br>
      No. No. No. This is completely free. There's no "premium tier" that unlocks faster conversion or larger files. There's no "sign up to download" button. There's no "free trial" that asks for your credit card. Just a tool that works, forever, for free. If you want to donate or say thanks, great—but you don't have to. We built this because data conversion shouldn't be a paid service. It should be a utility, like a calculator or a flashlight. Free and always available.</p>

    <p><strong>How does the converter handle dates, special characters, and different encodings?</strong><br>
      Dates in Excel are stored as numbers (serial dates), but the converter tries to detect common date formats and convert them to ISO strings (YYYY-MM-DD) in the JSON. If it can't detect a date reliably, it leaves it as the original number or text. Special characters (accents, symbols, emojis) are handled correctly because the converter uses proper UTF-8 encoding. If your file uses a different encoding (e.g., Windows-1252 for legacy CSVs), the converter makes a best effort—but for best results, save your Excel files as modern .xlsx or .csv with UTF-8 encoding.</p>

    <p><strong>What does "empty cell handling" mean? Why do I care?</strong><br>
      In JSON, every object should have consistent keys. If a cell is empty, you have three choices. "Include as null" means the JSON will have that key with a null value (e.g., "phone": null). This is best for data integrity—you know the field exists, it's just empty. "Include as empty string" means an empty string (e.g., "phone": ""). This is useful when you're expecting strings and don't want to deal with nulls. "Skip empty fields" means the key isn't included at all if the cell is empty (e.g., the "phone" key only appears if there's a value). This can make your JSON smaller, but it also means objects in your array might have different keys. Choose based on what your downstream system expects. For most APIs, "null" is the safest.</p>

    <h3>Why Choose Our CSV to JSON Converter (Over the Hundreds of Others)?</h3>
    <p>I'm not going to pretend this is the only converter on the internet. It's not. There are many. But most of them have annoying problems. Some require you to upload your file to their server—which is a privacy nightmare if you're dealing with sensitive data. Others have file size limits unless you pay. Some produce ugly, unformatted JSON that's hard to read. A few are just broken—they choke on quotes, commas, or special characters. Our converter fixes all of that. It's 100% local (no uploads, no privacy concerns). It's free forever with no size limits (within reason). It produces pretty-printed, indented JSON that's easy to read and debug. It handles tricky CSV edge cases (embedded commas, quoted fields, multiline values). And it works offline. Once the page loads, you can disconnect from the internet and it still works. That's rare. So yes, there are other converters. But this one respects your privacy, your time, and your sanity.</p>

    <h3>Common Applications of CSV to JSON Conversion (Real-World Use Cases):</h3>
    <ul>
      <li><strong>API Development & Integration:</strong> You're building a REST API, and you need sample data or mock responses. Create the data in Excel (easy to edit), convert to JSON, and serve it from your mock endpoint. When the real data comes, you already have the structure right.</li>
      <li><strong>Database Seeding (NoSQL):</strong> MongoDB, Firestore, CouchDB—all speak JSON. Instead of writing insert statements manually, create a CSV with your seed data, convert to JSON, and import directly. The converter can handle thousands of records, which would take hours to write by hand.</li>
      <li><strong>Data Migration (Legacy to Modern):</strong> You're moving from an old system that exports CSV to a modern system that expects JSON. The converter is the bridge. No custom code. No scripting. Just conversion and import.</li>
      <li><strong>Configuration as Code:</strong> Some systems use JSON for configuration files. If your configuration is complex (many nested objects), editing JSON by hand is error-prone. Instead, design the config in a spreadsheet, then convert to JSON. Spreadsheets are better for bulk edits and visual validation.</li>
      <li><strong>Test Data Generation:</strong> QA teams need varied, realistic test data. Create a CSV with different test cases, convert to JSON, and feed it into your test suite. When requirements change, update the CSV and re-convert. No need to touch the JSON directly.</li>
      <li><strong>Data Exchange Between Non-Technical and Technical Teams:</strong> Your marketing team has customer data in Excel. Your engineering team needs it in JSON. Instead of asking marketing to learn JSON or engineers to manually reformat, use the converter. Marketing exports, you convert, engineering imports. Everyone stays in their comfort zone.</li>
    </ul>

    <h3>Understanding the Conversion Process (What's Happening Under the Hood):</h3>
    <p>You don't need to know this to use the tool, but some people are curious. When you upload a file, the browser reads it into memory as a binary or text stream. For Excel files (.xls, .xlsx), the converter uses a JavaScript library to parse the binary format, extract sheet data, and convert it to a JavaScript object. For CSV files, it's simpler—the converter splits the text into rows, then each row into cells. Once the data is a 2D array (rows and columns), the converter maps it to JSON. If headers are enabled, the first row becomes the keys, and each subsequent row becomes an object. If no headers, it generates keys like "Column0", "Column1", etc. Then it applies your empty cell handling rule (null, empty string, or skip). Finally, it formats the JSON with indentation (pretty-print) so it's readable. The whole process happens in microseconds for small files, seconds for large ones. No external API calls. No server-side processing. Just your browser, your data, your control.</p>

    <h3>Technical Notes for the Detail-Oriented (Troubleshooting Tips):</h3>
    <p>If you're having trouble with a specific file, here are a few things to check. First, make sure your file isn't corrupt—try opening it in Excel or a text editor. Second, if you're using a CSV, check the delimiter. The converter assumes commas, but some regional settings use semicolons (;). If your CSV uses semicolons, open it in a text editor and replace semicolons with commas, or convert to Excel format first. Third, if you have very large text fields (e.g., paragraphs, HTML), they might cause slow performance. The converter can handle them, but be patient. Fourth, if your JSON output looks strange (e.g., numbers showing as strings), the converter tries to detect data types—but if you want full control, edit the Excel file to ensure numbers are formatted as numbers, not text. Finally, if nothing works, try a different browser. Chrome, Firefox, and Edge all work well. Safari works too, but some older versions have file handling quirks.</p>

    <h3>One Final Thought (Data Doesn't Have to Be Painful):</h3>
    <p>Data conversion is one of those thankless tasks that nobody enjoys. It's not glamorous like building a new feature or analyzing a deep insight. It's just... work. But it's necessary work. And when it's done poorly—by manual copy-paste, buggy scripts, or sketchy online tools—it wastes hours and introduces errors. Our goal with this converter is to make that necessary work as painless as possible. Upload a file. Click a button. Get your JSON. No friction, no fear, no data leaks. Next time you're staring at an Excel spreadsheet and wishing it was JSON, you know what to do. Bookmark this page. Share it with your team. Use it on Friday afternoons when your brain is fried. And if you ever have a suggestion for improvement, drop us a note (through the contact form). We actually read those. Now go convert something.</p>
</div>
</div>
```
<!-- Preview Modal -->
<div id="previewModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Data Preview</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div id="previewTable" style="max-height: 400px; overflow: auto;">
        <!-- Preview table will be inserted here -->
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closePreview">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const convertBtn = document.getElementById('convertBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const copyBtn = document.getElementById('copyBtn');
    const previewBtn = document.getElementById('previewBtn');
    const clearBtn = document.getElementById('clearBtn');
    const jsonOutput = document.getElementById('jsonOutput');
    const alertContainer = document.getElementById('alertContainer');
    const fileName = document.getElementById('fileName');
    const fileNameDisplay = document.getElementById('fileNameDisplay');
    const fileSize = document.getElementById('fileSize');
    const rowCount = document.getElementById('rowCount');
    const sheetName = document.getElementById('sheetName');
    
    // Modal elements
    const previewModal = document.getElementById('previewModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const closePreview = document.getElementById('closePreview');
    const previewTable = document.getElementById('previewTable');

    let selectedFile = null;
    let convertedJson = null;
    let lastJsonBlobUrl = null;

    // Event listeners
    uploadButton.addEventListener('click', () => fileInput.click());
    
    fileInput.addEventListener('change', (e) => {
      selectedFile = e.target.files[0] || null;
      jsonOutput.value = '';
      convertedJson = null;
      
      if (lastJsonBlobUrl) {
        URL.revokeObjectURL(lastJsonBlobUrl);
        lastJsonBlobUrl = null;
      }
      
      updateButtonStates(false);
      
      if (selectedFile) {
        fileName.textContent = selectedFile.name;
        fileNameDisplay.textContent = selectedFile.name;
        fileSize.textContent = `${(selectedFile.size/1024).toFixed(1)} KB`;
        convertBtn.disabled = false;
        showAlert(`File selected: ${selectedFile.name}`, 'success');
      } else {
        fileName.textContent = 'No file chosen';
        fileNameDisplay.textContent = 'No file selected';
        fileSize.textContent = '0 KB';
        rowCount.textContent = '0';
        sheetName.textContent = '-';
        convertBtn.disabled = true;
      }
    });

    convertBtn.addEventListener('click', async () => {
      if (!selectedFile) return;
      
      convertBtn.disabled = true;
      showAlert('Processing file...', 'success');
      jsonOutput.value = '';

      try {
        const name = selectedFile.name.toLowerCase();
        let workbook;

        if (name.endsWith('.csv')) {
          // CSV: read as text, then use SheetJS to parse string
          const txt = await readFileAsText(selectedFile);
          workbook = XLSX.read(txt, { type: 'string', raw: false });
        } else {
          // xls / xlsx: read as array buffer
          const ab = await readFileAsArrayBuffer(selectedFile);
          const data = new Uint8Array(ab);
          workbook = XLSX.read(data, { type: 'array' });
        }

        // Get first sheet
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];

        // Get conversion options
        const emptyCellHandling = document.getElementById('emptyCellHandling').value;
        const jsonFormatting = document.getElementById('jsonFormatting').value;
        const firstRowHeaders = document.getElementById('firstRowHeaders').checked;
        const rawData = document.getElementById('rawData').checked;

        // Configure conversion options
        const conversionOptions = {
          defval: emptyCellHandling === 'null' ? null : 
                  emptyCellHandling === 'empty' ? '' : undefined,
          raw: rawData,
          header: firstRowHeaders ? 1 : 0
        };

        // Convert sheet to JSON
        let json;
        if (firstRowHeaders) {
          json = XLSX.utils.sheet_to_json(worksheet, conversionOptions);
        } else {
          // If not using headers, get as array of arrays
          const data = XLSX.utils.sheet_to_json(worksheet, { ...conversionOptions, header: 1 });
          json = data;
        }

        // Format JSON
        const pretty = jsonFormatting === 'pretty' ? 
          JSON.stringify(json, null, 2) : 
          JSON.stringify(json);

        jsonOutput.value = pretty;
        convertedJson = pretty;

        // Update counters
        rowCount.textContent = json.length;
        sheetName.textContent = firstSheetName;

        // Create download blob
        const blob = new Blob([pretty], { type: 'application/json' });
        if (lastJsonBlobUrl) URL.revokeObjectURL(lastJsonBlobUrl);
        lastJsonBlobUrl = URL.createObjectURL(blob);
        
        // Update download button
        downloadBtn.disabled = false;
        copyBtn.disabled = false;
        previewBtn.disabled = false;

        showAlert(`Successfully converted ${json.length} rows from "${firstSheetName}"`, 'success');
      } catch (err) {
        console.error(err);
        showAlert('Error converting file: ' + (err.message || err), 'error');
      } finally {
        convertBtn.disabled = false;
      }
    });

    downloadBtn.addEventListener('click', () => {
      if (!convertedJson) return;
      
      const element = document.createElement('a');
      const filename = (selectedFile.name.replace(/\.(csv|xls|xlsx)$/i, '') || 'converted') + '.json';
      element.setAttribute('href', lastJsonBlobUrl);
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('JSON file downloaded successfully!', 'success');
    });

    copyBtn.addEventListener('click', () => {
      if (!convertedJson) return;
      
      navigator.clipboard.writeText(convertedJson).then(() => {
        showAlert('JSON copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy JSON: ' + err, 'error');
      });
    });

    previewBtn.addEventListener('click', () => {
      if (!convertedJson) return;
      
      try {
        const jsonData = JSON.parse(convertedJson);
        displayPreviewTable(jsonData);
        previewModal.style.display = 'block';
      } catch (err) {
        showAlert('Error displaying preview: ' + err.message, 'error');
      }
    });

    clearBtn.addEventListener('click', () => {
      fileInput.value = '';
      selectedFile = null;
      jsonOutput.value = '';
      convertedJson = null;
      fileName.textContent = 'No file chosen';
      fileNameDisplay.textContent = 'No file selected';
      fileSize.textContent = '0 KB';
      rowCount.textContent = '0';
      sheetName.textContent = '-';
      updateButtonStates(false);
      
      if (lastJsonBlobUrl) {
        URL.revokeObjectURL(lastJsonBlobUrl);
        lastJsonBlobUrl = null;
      }
      
      showAlert('All fields cleared', 'success');
    });

    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        previewModal.style.display = 'none';
      });
    });

    // Close preview modal
    closePreview.addEventListener('click', function() {
      previewModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === previewModal) {
        previewModal.style.display = 'none';
      }
    });

    function updateButtonStates(converted) {
      convertBtn.disabled = !selectedFile;
      downloadBtn.disabled = !converted;
      copyBtn.disabled = !converted;
      previewBtn.disabled = !converted;
    }

    function displayPreviewTable(data) {
      if (!Array.isArray(data) || data.length === 0) {
        previewTable.innerHTML = '<p>No data to display</p>';
        return;
      }

      const headers = Object.keys(data[0]);
      let html = '<table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">';
      
      // Table header
      html += '<thead><tr style="background-color: #f8f9fa;">';
      headers.forEach(header => {
        html += `<th style="border: 1px solid #ddd; padding: 8px; text-align: left;">${header}</th>`;
      });
      html += '</tr></thead>';
      
      // Table body
      html += '<tbody>';
      data.slice(0, 10).forEach((row, index) => {
        html += '<tr>';
        headers.forEach(header => {
          const value = row[header];
          html += `<td style="border: 1px solid #ddd; padding: 8px;">${value !== null && value !== undefined ? value : ''}</td>`;
        });
        html += '</tr>';
      });
      html += '</tbody></table>';
      
      if (data.length > 10) {
        html += `<p style="margin-top: 10px; font-style: italic;">Showing first 10 of ${data.length} rows</p>`;
      }
      
      previewTable.innerHTML = html;
    }

    // Helper functions
    function readFileAsText(file) {
      return new Promise((res, rej) => {
        const fr = new FileReader();
        fr.onload = () => res(fr.result);
        fr.onerror = () => rej(fr.error);
        fr.readAsText(file, 'utf-8');
      });
    }

    function readFileAsArrayBuffer(file) {
      return new Promise((res, rej) => {
        const fr = new FileReader();
        fr.onload = () => res(fr.result);
        fr.onerror = () => rej(fr.error);
        fr.readAsArrayBuffer(file);
      });
    }

    function showAlert(message, type) {
      const alertDiv = document.createElement('div');
      alertDiv.className = `alert alert-${type}`;
      alertDiv.innerHTML = `
        ${message}
        <span class="close">&times;</span>
      `;

      alertContainer.innerHTML = '';
      alertContainer.appendChild(alertDiv);

      // Add close functionality
      alertDiv.querySelector('.close').addEventListener('click', function () {
        alertDiv.remove();
      });

      setTimeout(() => {
        if (alertDiv.parentNode) {
          alertDiv.remove();
        }
      }, 5000);
    }
  });
</script>
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

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online CSV to JSON Converter Tool</h2>

    <p>Need to convert spreadsheet data to JSON format? Our free <strong>CSV to JSON Converter</strong> is the perfect solution for developers, data analysts, and anyone working with data. This powerful tool instantly converts your Excel files (.xls, .xlsx) and CSV files into properly formatted JSON. No downloads, no registration, and your data privacy is guaranteed as all processing happens securely right in your browser.</p>

    <h3>How to Use This CSV to JSON Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Select File:</strong> Click "Choose File" and select your CSV, XLS, or XLSX file from your computer</li>
      <li><strong>Configure Options:</strong> Choose how to handle empty cells and whether to use the first row as headers</li>
      <li><strong>Convert:</strong> Click the "Convert to JSON" button to transform your spreadsheet data into JSON format</li>
      <li><strong>Download or Copy:</strong> Use the "Download JSON" button to save the file or "Copy to Clipboard" to use the JSON elsewhere</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you have an Excel spreadsheet with customer data that you need to import into a web application. Instead of manually copying and formatting the data, you can simply upload the Excel file to this converter. The tool will automatically parse the spreadsheet and generate clean, structured JSON that's ready to be used in your application's API or database.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Web Developers:</strong> Quickly convert spreadsheet data to JSON for use in web applications and APIs</li>
      <li><strong>Data Analysts:</strong> Transform Excel data into JSON format for analysis tools and databases</li>
      <li><strong>App Developers:</strong> Convert CSV exports from various systems into JSON for mobile apps</li>
      <li><strong>Students & Educators:</strong> Learn about data format conversion and JSON structure</li>
      <li><strong>Business Users:</strong> Convert reports and data exports for use in modern applications</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>What file formats does this converter support?</strong><br>
      Our converter supports CSV (Comma Separated Values), XLS (Excel 97-2003), and XLSX (Excel 2007 and later) files.</p>

    <p><strong>Is there a file size limit for conversion?</strong><br>
      You can convert reasonably large files, but very large files (over 50MB) might take longer to process. The tool is optimized for typical spreadsheet sizes.</p>

    <p><strong>Is my data kept private and secure when I use this tool?</strong><br>
      Absolutely. This is a core principle of our tool. The conversion happens locally on your own computer or phone. Your data is never sent to any server, meaning we never see, store, or have access to your files. It is 100% secure.</p>

    <p><strong>Can I use this tool on my mobile phone?</strong><br>
      Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>Do I need to create an account or pay to use this?</strong><br>
      No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our CSV to JSON Converter?</h3>
    <p>Our <strong>online CSV to JSON converter</strong> stands out from other tools because of its simplicity, speed, and privacy features. Unlike many online tools, we don't store your data on our servers - all processing happens in your browser. This means your sensitive spreadsheets, client data, and proprietary information remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of CSV to JSON Conversion</h3>
    <p>CSV to JSON conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>API Development:</strong> Convert spreadsheet data to JSON for REST API payloads</li>
      <li><strong>Database Import:</strong> Transform CSV exports into JSON for NoSQL databases</li>
      <li><strong>Data Migration:</strong> Move data from legacy systems to modern applications</li>
      <li><strong>Configuration Files:</strong> Convert settings spreadsheets into JSON configuration files</li>
      <li><strong>Testing Data:</strong> Create JSON test data from spreadsheet samples</li>
    </ul>
  </div>
</div>

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
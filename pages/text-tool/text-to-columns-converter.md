---
layout: default
title: "Text to Columns Converter - Split Text by Separators"
permalink: /text-to-columns-converter/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Text to Columns Converter - Split Text by Separators</title>
<meta name="description"
  content="Free online text to columns converter tool. Split your text into columns based on commas, semicolons, hashtags, or custom separators. Organize and analyze your data easily.">
<meta name="keywords"
  content="text to columns, split text, text separator, csv converter, text organizer, data analysis, text splitter, column converter, text formatter">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Text to Columns Styles */
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
    min-height: 200px;
    resize: vertical;
    font-family: 'Courier New', monospace;
    transition: border-color 0.3s;
  }

  .input-section textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .output-section {
    margin: 20px 0;
  }

  .output-container {
    width: 100%;
    padding: 18px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 16px;
    min-height: 200px;
    background: white;
    font-family: 'Courier New', monospace;
    overflow-x: auto;
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

  /* Text to Columns specific styles */
  .separator-options {
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
    width: 100%;
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

  .separator-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px 0;
  }

  .separator-button {
    padding: 8px 16px;
    border: 2px solid var(--primary);
    border-radius: 6px;
    background: white;
    color: var(--primary);
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
  }

  .separator-button:hover, .separator-button.active {
    background: var(--primary);
    color: white;
  }

  /* Table styles for output */
  .output-table {
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0;
  }

  .output-table th,
  .output-table td {
    border: 1px solid #ddd;
    padding: 8px 12px;
    text-align: left;
  }

  .output-table th {
    background-color: #f8f9fa;
    font-weight: 600;
    color: var(--primary);
  }

  .output-table tr:nth-child(even) {
    background-color: #f8f9fa;
  }

  .column-count {
    margin: 10px 0;
    font-weight: 600;
    color: var(--primary);
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

    .separator-options {
      grid-template-columns: 1fr;
    }

    .separator-buttons {
      justify-content: center;
    }

    .output-container {
      overflow-x: auto;
    }
  }
</style>

<div class="converter-container">
  <h1>Text to Columns Converter</h1>
  <p class="welcome-message">Split your text into columns based on various separators such as commas, semi-colons, hashtags, or any custom special characters. Organize your data into neatly separated columns for analysis, editing, or presentation.</p>

  <div class="converter-section">
    <h2>Text to Columns Converter</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Character Count: </span>
        <span id="charCount">0</span>
      </div>
      <div class="counter-item">
        <span>Line Count: </span>
        <span id="lineCount">0</span>
      </div>
      <div class="counter-item">
        <span>Word Count: </span>
        <span id="wordCount">0</span>
      </div>
      <div class="counter-item">
        <span>Column Count: </span>
        <span id="columnCount">0</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input Text <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="textInput" rows="6" placeholder="Paste your text here... Example: apple,banana,orange or name;age;city"></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".txt,.csv,.tsv" style="display: none;">

    <div class="separator-options">
      <div class="option-group">
        <label class="option-label">Separator Type</label>
        <div class="separator-buttons">
          <button class="separator-button active" data-separator=",">Comma (,)</button>
          <button class="separator-button" data-separator=";">Semicolon (;)</button>
          <button class="separator-button" data-separator="|">Pipe (|)</button>
          <button class="separator-button" data-separator="\t">Tab</button>
          <button class="separator-button" data-separator="\n">New Line</button>
          <button class="separator-button" data-separator="#">Hashtag (#)</button>
        </div>
      </div>
      
      <div class="option-group">
        <label class="option-label">Custom Separator</label>
        <input type="text" id="customSeparator" class="option-input" placeholder="Enter custom separator">
        <div class="option-checkbox">
          <input type="checkbox" id="regexSeparator">
          <label for="regexSeparator">Treat as Regular Expression</label>
        </div>
      </div>
      
      <div class="option-group">
        <label class="option-label">Output Options</label>
        <div class="option-checkbox">
          <input type="checkbox" id="trimSpaces" checked>
          <label for="trimSpaces">Trim spaces around values</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="removeEmpty" checked>
          <label for="removeEmpty">Remove empty columns</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="addHeaders">
          <label for="addHeaders">Add column headers</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="split">Split to Columns</button>
        <button class="case-button" data-action="preview">Preview</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button success" data-action="download">Download CSV</button>
        <button class="case-button warning" data-action="transpose">Transpose</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="output-section">
      <h2>Output Columns</h2>
      <div class="column-count" id="columnCountDisplay">Columns: 0</div>
      <div class="output-container" id="outputContainer">
        <!-- Output will be displayed here -->
        <div style="text-align: center; color: #666; padding: 40px;">
          <i class="fas fa-table" style="font-size: 3rem; margin-bottom: 15px;"></i>
          <p>Your converted columns will appear here</p>
        </div>
      </div>
    </div>

   {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Comma Separated Example:</h3>
      <div class="example-text">Input: apple,banana,orange,mango,grape
Output: 
┌─────────┬─────────┬─────────┬─────────┬─────────┐
│ apple   │ banana  │ orange  │ mango   │ grape   │
└─────────┴─────────┴─────────┴─────────┴─────────┘</div>

      <h3>Semicolon Separated Example:</h3>
      <div class="example-text">Input: John;25;New York;Engineer
Input: Sarah;30;London;Designer
Input: Mike;35;Tokyo;Developer

Output:
┌────────┬─────┬──────────┬────────────┐
│ John   │ 25  │ New York │ Engineer   │
│ Sarah  │ 30  │ London   │ Designer   │
│ Mike   │ 35  │ Tokyo    │ Developer  │
└────────┴─────┴──────────┴────────────┘</div>

      <h3>Hashtag Separated Example:</h3>
      <div class="example-text">Input: #programming #webdevelopment #javascript #css #html
Output:
┌───────────────┬─────────────────┬─────────────┬────────┬────────┐
│ programming   │ webdevelopment  │ javascript  │ css    │ html   │
└───────────────┴─────────────────┴─────────────┴────────┴────────┘</div>
    </div>
  </div>

<!-- SEO Content Section -->
<div class="content-placeholder">

    <h2>Free Online Text to Columns Converter Tool</h2>

    <p>
        Working with long lists of data separated by commas, semicolons, tabs, hashtags, or other special characters?
        Our <strong>Text to Columns Converter</strong> helps you quickly transform unorganized text into neatly
        structured columns. Whether you're managing contact lists, analyzing CSV files, organizing survey results, or
        preparing data for spreadsheets, this tool makes the process simple and efficient.
    </p>

    <p>
        Many text files and exported datasets contain information separated by delimiters rather than arranged into
        clear columns. Manually splitting this data can be time-consuming, especially when dealing with hundreds or
        thousands of entries. This tool automates the process by identifying separators and placing each value into its
        own column instantly.
    </p>

    <p>
        The converter supports common separators such as commas, semicolons, tabs, pipes, hashtags, and custom
        characters. With additional options for trimming spaces, removing empty fields, and exporting results, it
        becomes a valuable solution for professionals, students, researchers, and anyone working with structured text.
    </p>

    <p>
        Best of all, everything runs directly in your browser. No software installation, registration, or technical
        expertise is required. Simply paste your text, choose a separator, and generate organized columns within
        seconds.
    </p>

    <h3>How to Use This Text to Columns Converter (Step-by-Step)</h3>

    <ul>
        <li>
            <strong>Paste Your Text:</strong>
            Copy text from a spreadsheet export, CSV file, database report, website, social media platform, or any
            other source and paste it into the input area.
        </li>

        <li>
            <strong>Select a Separator:</strong>
            Choose a predefined separator such as a comma, semicolon, tab, pipe, or enter a custom character used in
            your data.
        </li>

        <li>
            <strong>Customize Conversion Settings:</strong>
            Adjust options such as trimming whitespace, removing empty columns, adding headers, or handling duplicate
            values.
        </li>

        <li>
            <strong>Split the Data:</strong>
            Click the conversion button to instantly separate the text into organized columns.
        </li>

        <li>
            <strong>Review the Results:</strong>
            Check the generated output to ensure the data has been separated correctly.
        </li>

        <li>
            <strong>Copy or Download:</strong>
            Copy the formatted data directly to your clipboard or download it as a CSV file for use in spreadsheet
            software and databases.
        </li>
    </ul>

    <h3>What Is Text to Columns Conversion?</h3>

    <p>
        Text to columns conversion is the process of splitting a block of text into separate columns based on specific
        separators known as delimiters. A delimiter is simply a character that divides pieces of information within a
        text string.
    </p>

    <p>
        Common delimiters include commas, semicolons, tabs, pipes, colons, hashtags, and spaces. For example, a CSV
        (Comma-Separated Values) file stores information by placing commas between values. Converting this data into
        columns makes it much easier to read, analyze, sort, and edit.
    </p>

    <p>
        Instead of manually copying and separating each value, a text-to-columns tool performs the task automatically,
        saving significant time and reducing errors.
    </p>

    <h3>Real-Life Example & Use Case</h3>

    <p>
        Imagine you receive a contact list from a client containing names and email addresses separated by semicolons:
    </p>

    <pre>
john@example.com; sarah@test.com; mike@sample.org; emma@company.com
    </pre>

    <p>
        While the information is technically organized, it is difficult to work with in this format. By pasting the
        text into the converter and selecting the semicolon separator, the tool instantly creates individual column
        entries for each email address.
    </p>

    <p>
        The resulting output is much easier to import into spreadsheets, CRM systems, email marketing platforms, and
        databases. What could take several minutes or even hours manually can be completed in seconds.
    </p>

    <h3>Benefits & Who Should Use This Tool?</h3>

    <ul>
        <li>
            <strong>Data Analysts:</strong>
            Convert CSV, TSV, and delimited datasets into structured columns for easier analysis.
        </li>

        <li>
            <strong>Digital Marketers:</strong>
            Organize email lists, campaign data, keywords, hashtags, and customer information.
        </li>

        <li>
            <strong>Researchers:</strong>
            Process survey responses, experimental data, and research records efficiently.
        </li>

        <li>
            <strong>Developers:</strong>
            Format exported data, configuration files, log files, and database records.
        </li>

        <li>
            <strong>Students & Educators:</strong>
            Organize academic information, survey data, and classroom records.
        </li>

        <li>
            <strong>Business Professionals:</strong>
            Prepare reports, inventory lists, client databases, and operational documents.
        </li>

        <li>
            <strong>Content Managers:</strong>
            Structure content and metadata for websites, applications, and publishing platforms.
        </li>
    </ul>

    <h3>Frequently Asked Questions</h3>

    <p>
        <strong>What separators can I use with this tool?</strong><br>
        You can use commas, semicolons, tabs, spaces, pipes, hashtags, colons, slashes, and virtually any custom
        character. Some versions may also support regular expression patterns for advanced splitting.
    </p>

    <p>
        <strong>Can I process large datasets?</strong><br>
        Yes. The tool is designed to handle large amounts of text, including thousands of rows and columns, depending
        on your device and browser capabilities.
    </p>

    <p>
        <strong>Is my data secure?</strong><br>
        Absolutely. All processing occurs locally in your browser. Your data never leaves your device, ensuring maximum
        privacy and security.
    </p>

    <p>
        <strong>Can I use the converter on mobile devices?</strong><br>
        Yes. The tool works smoothly on smartphones, tablets, laptops, and desktop computers.
    </p>

    <p>
        <strong>Do I need an account?</strong><br>
        No. The converter is completely free to use and requires no registration or subscription.
    </p>

    <p>
        <strong>Can I export the results?</strong><br>
        Yes. After conversion, you can typically copy the results directly or download them as CSV files for use in
        spreadsheet software such as Excel, Google Sheets, and LibreOffice Calc.
    </p>

    <h3>Why Choose Our Text to Columns Converter?</h3>

    <p>
        There are many data processing tools available online, but our Text to Columns Converter focuses on simplicity,
        speed, privacy, and flexibility. Whether you're splitting a simple contact list or processing a large dataset,
        the tool provides reliable results without requiring technical expertise.
    </p>

    <p>
        Unlike many online services, your information is never uploaded to external servers. Everything happens within
        your browser, ensuring complete confidentiality for sensitive business, customer, or research data.
    </p>

    <p>
        The intuitive interface makes it accessible to beginners while still offering advanced options for experienced
        users who work with structured data regularly.
    </p>

    <h3>Common Applications of Text to Columns Conversion</h3>

    <p>
        Text-to-columns functionality is useful across a wide range of industries and professional activities:
    </p>

    <ul>
        <li>
            <strong>Data Analysis:</strong>
            Prepare CSV and delimited files for spreadsheet analysis and reporting.
        </li>

        <li>
            <strong>Social Media Management:</strong>
            Separate hashtags, mentions, usernames, and campaign keywords into individual columns.
        </li>

        <li>
            <strong>Email Marketing:</strong>
            Organize subscriber lists and contact databases for marketing campaigns.
        </li>

        <li>
            <strong>Database Administration:</strong>
            Prepare data imports and exports between systems.
        </li>

        <li>
            <strong>Academic Research:</strong>
            Structure survey responses, questionnaires, and experimental results.
        </li>

        <li>
            <strong>Inventory Management:</strong>
            Organize product information, stock records, and supplier data.
        </li>

        <li>
            <strong>Customer Relationship Management:</strong>
            Format customer lists and contact details for CRM systems.
        </li>
    </ul>

    <h3>Supported Delimiters & Separators</h3>

    <p>
        Different types of data use different separators. Our converter can work with many common delimiters,
        including:
    </p>

    <ul>
        <li><strong>Comma (,):</strong> Commonly used in CSV files.</li>
        <li><strong>Semicolon (;):</strong> Frequently used in contact lists and exported reports.</li>
        <li><strong>Tab:</strong> Often found in spreadsheet exports and TSV files.</li>
        <li><strong>Pipe (|):</strong> Used in log files and technical data formats.</li>
        <li><strong>Colon (:):</strong> Common in configuration files and structured text.</li>
        <li><strong>Hashtag (#):</strong> Useful for social media and tagging systems.</li>
        <li><strong>Custom Characters:</strong> Define your own delimiter based on your specific data format.</li>
    </ul>

    <h3>Tips for Better Results</h3>

    <ul>
        <li>
            Verify which separator is used in your source data before conversion.
        </li>

        <li>
            Enable trimming options to remove unwanted spaces around values.
        </li>

        <li>
            Remove empty columns if your dataset contains repeated delimiters.
        </li>

        <li>
            Review the output before importing it into databases or spreadsheets.
        </li>

        <li>
            Export the results as CSV for maximum compatibility with other applications.
        </li>

        <li>
            Keep a backup of the original dataset when working with important information.
        </li>
    </ul>

    <h3>Advantages of Structured Data</h3>

    <p>
        Converting text into columns significantly improves readability and usability. Structured data is easier to
        sort, filter, search, analyze, and share. It also reduces the risk of errors when importing information into
        spreadsheets, databases, and reporting tools.
    </p>

    <p>
        For businesses and researchers, organized data leads to faster decision-making, improved accuracy, and more
        efficient workflows. Even for everyday users, converting unstructured text into columns can save considerable
        time and effort.
    </p>

    <h3>Conclusion</h3>

    <p>
        The Text to Columns Converter is a simple yet powerful tool for transforming delimited text into organized,
        easy-to-manage columns. Whether you're working with CSV files, email lists, social media data, research
        results, or business records, the tool helps streamline your workflow and improve productivity.
    </p>

    <p>
        With support for multiple separators, customizable options, secure browser-based processing, and fast
        conversion speeds, it provides an efficient solution for anyone who needs to structure text data quickly and
        accurately. Paste your text, choose a delimiter, and turn messy information into organized columns within
        seconds.
    </p>

</div>


<!-- File Upload Modal -->
<div id="uploadModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Upload Text File</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Select a text file (.txt, .csv, .tsv) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".txt,.csv,.tsv">
      <p id="fileInfo" class="file-info"></p>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelUpload">Cancel</button>
      <button class="modal-button primary" id="confirmUpload">Upload</button>
    </div>
  </div>
</div>

<!-- Preview Modal -->
<div id="previewModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Preview Columns</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div id="previewContent" style="max-height: 400px; overflow: auto;">
        <!-- Preview content will be displayed here -->
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closePreview">Close</button>
      <button class="modal-button primary" id="confirmPreview">Use This Format</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const outputContainer = document.getElementById('outputContainer');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    
    // Separator options
    const separatorButtons = document.querySelectorAll('.separator-button');
    const customSeparator = document.getElementById('customSeparator');
    const regexSeparator = document.getElementById('regexSeparator');
    const trimSpaces = document.getElementById('trimSpaces');
    const removeEmpty = document.getElementById('removeEmpty');
    const addHeaders = document.getElementById('addHeaders');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const previewModal = document.getElementById('previewModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');
    const closePreview = document.getElementById('closePreview');
    const confirmPreview = document.getElementById('confirmPreview');
    const previewContent = document.getElementById('previewContent');

    // Current separator
    let currentSeparator = ',';
    let originalText = '';

    // Initialize counters
    updateCounts();

    // Event listeners
    textInput.addEventListener('input', updateCounts);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleTextAction(action);
      });
    });

    // Separator button click handlers
    separatorButtons.forEach(button => {
      button.addEventListener('click', function() {
        separatorButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        currentSeparator = this.getAttribute('data-separator');
        customSeparator.value = '';
      });
    });

    // Custom separator input
    customSeparator.addEventListener('input', function() {
      if (this.value) {
        separatorButtons.forEach(btn => btn.classList.remove('active'));
        currentSeparator = this.value;
      }
    });

    // Upload icon click handler - opens modal
    uploadIcon.addEventListener('click', function () {
      uploadModal.style.display = 'block';
    });

    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        uploadModal.style.display = 'none';
        previewModal.style.display = 'none';
        modalFileUpload.value = '';
        fileInfo.textContent = '';
      });
    });

    // Close modal when clicking cancel
    cancelUpload.addEventListener('click', function() {
      uploadModal.style.display = 'none';
      modalFileUpload.value = '';
      fileInfo.textContent = '';
    });

    // Close preview modal
    closePreview.addEventListener('click', function() {
      previewModal.style.display = 'none';
    });

    // Confirm preview
    confirmPreview.addEventListener('click', function() {
      previewModal.style.display = 'none';
      splitToColumns();
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === uploadModal || event.target === previewModal) {
        uploadModal.style.display = 'none';
        previewModal.style.display = 'none';
        modalFileUpload.value = '';
        fileInfo.textContent = '';
      }
    });

    // Handle file selection in modal
    modalFileUpload.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        fileInfo.textContent = `Selected file: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
      } else {
        fileInfo.textContent = '';
      }
    });

    // Confirm upload button
    confirmUpload.addEventListener('click', function() {
      const file = modalFileUpload.files[0];
      if (!file) {
        showAlert('Please select a file first.', 'error');
        return;
      }

      // Check file type
      if (file.type === 'text/plain' || file.name.endsWith('.txt') || 
          file.name.endsWith('.csv') || file.name.endsWith('.tsv')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          textInput.value = e.target.result;
          updateCounts();
          showAlert('Text file uploaded successfully!', 'success');
          uploadModal.style.display = 'none';
          modalFileUpload.value = '';
          fileInfo.textContent = '';
        };
        reader.onerror = function () {
          showAlert('Error reading the text file.', 'error');
        };
        reader.readAsText(file);
      } else {
        showAlert('Unsupported file format. Please upload a TXT, CSV, or TSV file.', 'error');
      }
    });

    function updateCounts() {
      const text = textInput.value;

      // Character count
      document.getElementById('charCount').textContent = text.length;

      // Line count
      const lineCount = text ? text.split(/\r\n|\r|\n/).length : 0;
      document.getElementById('lineCount').textContent = lineCount;

      // Word count (approximate)
      const wordCount = text ? text.trim().split(/\s+/).length : 0;
      document.getElementById('wordCount').textContent = wordCount;

      // Column count (approximate)
      if (text) {
        const firstLine = text.split('\n')[0];
        const columnCount = firstLine ? firstLine.split(getSeparator()).length : 0;
        document.getElementById('columnCount').textContent = columnCount;
      } else {
        document.getElementById('columnCount').textContent = 0;
      }
    }

    function getSeparator() {
      if (currentSeparator === '\\t') return '\t';
      if (currentSeparator === '\\n') return '\n';
      if (regexSeparator.checked) {
        try {
          return new RegExp(currentSeparator);
        } catch (e) {
          return currentSeparator;
        }
      }
      return currentSeparator;
    }

    function handleTextAction(action) {
      const text = textInput.value;
      originalText = text;
      
      switch (action) {
        case 'split':
          splitToColumns();
          break;

        case 'preview':
          previewColumns();
          break;

        case 'copy':
          copyToClipboard();
          break;

        case 'download':
          downloadCsv();
          break;

        case 'transpose':
          transposeColumns();
          break;

        case 'clear':
          textInput.value = '';
          outputContainer.innerHTML = '<div style="text-align: center; color: #666; padding: 40px;"><i class="fas fa-table" style="font-size: 3rem; margin-bottom: 15px;"></i><p>Your converted columns will appear here</p></div>';
          updateCounts();
          break;
      }
    }

    function splitToColumns() {
      const text = textInput.value;
      if (!text.trim()) {
        showAlert('Please enter some text to convert.', 'error');
        return;
      }

      const separator = getSeparator();
      const lines = text.split(/\r\n|\r|\n/).filter(line => line.trim());
      const columnsData = [];

      // Process each line
      lines.forEach(line => {
        let columns;
        if (separator instanceof RegExp) {
          columns = line.split(separator);
        } else {
          columns = line.split(separator);
        }
        
        if (trimSpaces.checked) {
          columns = columns.map(col => col.trim());
        }
        
        if (removeEmpty.checked) {
          columns = columns.filter(col => col !== '');
        }
        
        columnsData.push(columns);
      });

      // Find maximum number of columns
      const maxColumns = Math.max(...columnsData.map(cols => cols.length));
      
      // Create table
      let tableHTML = '<table class="output-table">';
      
      // Add headers if enabled
      if (addHeaders.checked) {
        tableHTML += '<thead><tr>';
        for (let i = 0; i < maxColumns; i++) {
          tableHTML += `<th>Column ${i + 1}</th>`;
        }
        tableHTML += '</tr></thead>';
      }
      
      // Add data rows
      tableHTML += '<tbody>';
      columnsData.forEach(columns => {
        tableHTML += '<tr>';
        for (let i = 0; i < maxColumns; i++) {
          const value = columns[i] || '';
          tableHTML += `<td>${escapeHtml(value)}</td>`;
        }
        tableHTML += '</tr>';
      });
      tableHTML += '</tbody></table>';
      
      // Update output
      outputContainer.innerHTML = tableHTML;
      document.getElementById('columnCountDisplay').textContent = `Columns: ${maxColumns}`;
      
      showAlert('Text successfully split into columns!', 'success');
    }

    function previewColumns() {
      const text = textInput.value;
      if (!text.trim()) {
        showAlert('Please enter some text to preview.', 'error');
        return;
      }

      const separator = getSeparator();
      const lines = text.split(/\r\n|\r|\n/).slice(0, 10); // Preview first 10 lines
      let previewHTML = '<p><strong>Preview (first 10 lines):</strong></p>';
      previewHTML += '<div style="background: #f8f9fa; padding: 15px; border-radius: 6px; font-family: monospace;">';
      
      lines.forEach((line, index) => {
        let columns;
        if (separator instanceof RegExp) {
          columns = line.split(separator);
        } else {
          columns = line.split(separator);
        }
        
        if (trimSpaces.checked) {
          columns = columns.map(col => col.trim());
        }
        
        if (removeEmpty.checked) {
          columns = columns.filter(col => col !== '');
        }
        
        previewHTML += `<div style="margin-bottom: 8px;"><strong>Line ${index + 1}:</strong> [${columns.map(col => `"${escapeHtml(col)}"`).join(', ')}]</div>`;
      });
      
      previewHTML += '</div>';
      previewHTML += `<p><strong>Total columns in first line:</strong> ${lines[0] ? lines[0].split(separator).length : 0}</p>`;
      
      previewContent.innerHTML = previewHTML;
      previewModal.style.display = 'block';
    }

    function transposeColumns() {
      const text = textInput.value;
      if (!text.trim()) {
        showAlert('Please enter some text to transpose.', 'error');
        return;
      }

      const separator = getSeparator();
      const lines = text.split(/\r\n|\r|\n/).filter(line => line.trim());
      const columnsData = [];

      // Process each line
      lines.forEach(line => {
        let columns;
        if (separator instanceof RegExp) {
          columns = line.split(separator);
        } else {
          columns = line.split(separator);
        }
        
        if (trimSpaces.checked) {
          columns = columns.map(col => col.trim());
        }
        
        if (removeEmpty.checked) {
          columns = columns.filter(col => col !== '');
        }
        
        columnsData.push(columns);
      });

      // Transpose the data
      const transposedData = [];
      const maxColumns = Math.max(...columnsData.map(cols => cols.length));
      
      for (let i = 0; i < maxColumns; i++) {
        transposedData.push(columnsData.map(row => row[i] || ''));
      }

      // Convert back to text
      const transposedText = transposedData.map(row => row.join(separator === '\t' ? '\t' : currentSeparator)).join('\n');
      textInput.value = transposedText;
      updateCounts();
      showAlert('Columns transposed successfully!', 'success');
    }

    function copyToClipboard() {
      const text = outputContainer.innerText;
      if (!text || text.includes('Your converted columns will appear here')) {
        showAlert('No columns to copy. Please split text first.', 'error');
        return;
      }
      
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Columns copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy columns: ' + err, 'error');
      });
    }

    function downloadCsv() {
      const text = textInput.value;
      if (!text.trim()) {
        showAlert('Please enter some text to download.', 'error');
        return;
      }

      const separator = getSeparator();
      const lines = text.split(/\r\n|\r|\n/).filter(line => line.trim());
      let csvContent = '';

      // Process each line
      lines.forEach(line => {
        let columns;
        if (separator instanceof RegExp) {
          columns = line.split(separator);
        } else {
          columns = line.split(separator);
        }
        
        if (trimSpaces.checked) {
          columns = columns.map(col => col.trim());
        }
        
        if (removeEmpty.checked) {
          columns = columns.filter(col => col !== '');
        }
        
        // Escape CSV values
        const escapedColumns = columns.map(col => {
          if (col.includes(',') || col.includes('"') || col.includes('\n')) {
            return '"' + col.replace(/"/g, '""') + '"';
          }
          return col;
        });
        
        csvContent += escapedColumns.join(',') + '\n';
      });

      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent));
      element.setAttribute('download', 'converted_data.csv');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('CSV file downloaded successfully!', 'success');
    }

    function escapeHtml(unsafe) {
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
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
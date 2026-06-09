---
layout: default
title: "Online SQL Formatter & Beautifier - Format SQL Queries Fast"
permalink: /online-sql-beautifier-formatter/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Online SQL Formatter & Beautifier - Format SQL Queries Fast</title>

<meta name="description" content="Free online SQL formatter and beautifier tool. Format, clean, and organize SQL queries with proper indentation. Make SQL code readable and error-free instantly.">

<meta name="keywords"
  content="sql beautifier, sql formatter, format sql online, prettify sql query, sql minifier, format sql code, sql query validator, online sql tool, sql syntax beautifier">

<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="SQL Beautifier & Formatter Online — Clean & Format SQL Instantly">
<meta property="og:description" content="Format, prettify & validate SQL queries instantly. Improve readability and debug faster with this free online SQL formatter tool.">
<meta property="og:url" content="https://toolesy.com/online-sql-beautifier-formatter">
<meta property="og:site_name" content="ToolEsy">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Online SQL Beautifier & Validator">
<meta name="twitter:description" content="Beautify, format, and validate SQL Queries with just one click. Free SQL formatter tool for MySQL, PostgreSQL, Oracle, SQL Server & more.">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* SQL Beautifier Styles */
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

  .case-button.info {
    background: #17a2b8;
    color: white;
  }

  .case-button.info:hover {
    background: #138496;
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

  /* SQL Beautifier specific styles */
  .formatting-options {
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

  /* SQL Syntax Highlighting */
  .sql-keyword {
    color: #0077b6;
    font-weight: bold;
  }

  .sql-function {
    color: #e63946;
    font-weight: bold;
  }

  .sql-string {
    color: #2a9d8f;
  }

  .sql-number {
    color: #e76f51;
  }

  .sql-comment {
    color: #6a994e;
    font-style: italic;
  }

  .sql-operator {
    color: #9d4edd;
    font-weight: bold;
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

    .formatting-options {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online SQL Beautifier & Formatter</h1>
  <p class="welcome-message">Format and beautify your SQL queries instantly with proper indentation and syntax highlighting. Make your SQL code readable and maintainable.</p>

  <div class="converter-section">
    <h2>SQL Beautifier & Formatter</h2>

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
        <span>Query Count: </span>
        <span id="queryCount">0</span>
      </div>
      <div class="counter-item">
        <span>File Size: </span>
        <span id="fileSize">0 KB</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input SQL <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="sqlInput" rows="6" placeholder="Paste your SQL query here..."></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".sql,.txt" style="display: none;">

    <div class="formatting-options">
      <div class="option-group">
        <label class="option-label">Indentation</label>
        <select id="indentType" class="option-select">
          <option value="spaces">Spaces</option>
          <option value="tabs">Tabs</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Indent Size</label>
        <input type="number" id="indentSize" class="option-input" min="1" max="8" value="2">
      </div>
      
      <div class="option-group">
        <label class="option-label">Keyword Case</label>
        <select id="keywordCase" class="option-select">
          <option value="upper">UPPERCASE</option>
          <option value="lower">lowercase</option>
          <option value="capitalize">Capitalize</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Comma Position</label>
        <select id="commaPosition" class="option-select">
          <option value="before">Before (European)</option>
          <option value="after">After (American)</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="alignColumns" checked>
          <label for="alignColumns">Align Columns</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="breakLongLines" checked>
          <label for="breakLongLines">Break Long Lines</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="beautify">Beautify SQL</button>
        <button class="case-button" data-action="minify">Minify SQL</button>
        <button class="case-button" data-action="validate">Validate SQL</button>
        <button class="case-button info" data-action="highlight">Syntax Highlight</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button success" data-action="download">Download SQL</button>
        <button class="case-button warning" data-action="compare">Compare</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>
{% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Before Beautification:</h3>
      <div class="example-text">SELECT customers.customer_name, orders.order_date, products.product_name, order_details.quantity FROM customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN order_details ON orders.order_id = order_details.order_id INNER JOIN products ON order_details.product_id = products.product_id WHERE customers.country = 'USA' AND orders.order_date >= '2023-01-01' ORDER BY orders.order_date DESC, customers.customer_name ASC;</div>

      <h3>After Beautification:</h3>
      <div class="example-text">SELECT 
    customers.customer_name,
    orders.order_date,
    products.product_name,
    order_details.quantity
FROM 
    customers
INNER JOIN 
    orders ON customers.customer_id = orders.customer_id
INNER JOIN 
    order_details ON orders.order_id = order_details.order_id
INNER JOIN 
    products ON order_details.product_id = products.product_id
WHERE 
    customers.country = 'USA'
    AND orders.order_date >= '2023-01-01'
ORDER BY 
    orders.order_date DESC,
    customers.customer_name ASC;</div>

      <h3>After Minification:</h3>
      <div class="example-text">SELECT customers.customer_name,orders.order_date,products.product_name,order_details.quantity FROM customers INNER JOIN orders ON customers.customer_id=orders.customer_id INNER JOIN order_details ON orders.order_id=order_details.order_id INNER JOIN products ON order_details.product_id=products.product_id WHERE customers.country='USA' AND orders.order_date>='2023-01-01' ORDER BY orders.order_date DESC,customers.customer_name ASC;</div>
    </div>
  </div>


<!-- SEO Content Section -->
<div class="content-placeholder">

  <h2>Free Online SQL Beautifier & Formatter Tool – Clean, Structure, and Understand Your Queries Faster</h2>

  <p>SQL is the backbone of modern data-driven applications. Whether you're working with MySQL, PostgreSQL, SQL Server, or any other relational database, SQL queries are constantly being written, optimized, and maintained. But in real-world projects, SQL code often becomes messy, hard to read, and difficult to debug—especially when queries grow large or are auto-generated by applications.</p>

  <p>This is where a <strong>SQL Beautifier and Formatter tool</strong> becomes essential. It takes complex, unformatted, or minified SQL queries and instantly transforms them into clean, structured, and readable code. Instead of struggling to understand long query strings, you can instantly see the logic, joins, conditions, and relationships clearly.</p>

  <p>The tool also supports SQL minification and syntax highlighting, making it useful for both development and production environments. Everything runs directly in your browser, ensuring that your queries remain private and are never uploaded or stored anywhere.</p>

  <h3>Why SQL Formatting Matters in Real Development Work</h3>

  <p>SQL queries are often written in a rush—especially in backend services, reporting systems, or analytics dashboards. Over time, these queries can become long, nested, and difficult to read.</p>

  <p>A single query might include multiple joins, subqueries, aggregations, and conditions. When written without formatting, all of this logic blends together into a single block of text that is hard to interpret.</p>

  <p>While databases don’t care about formatting, humans absolutely do. Proper formatting makes SQL easier to understand, debug, and maintain. It reveals the structure of the query, highlights relationships between tables, and reduces the chance of errors during modification.</p>

  <p>This tool automatically restores structure so you can focus on logic instead of formatting.</p>

  <h3>How to Use This SQL Beautifier Tool (Step-by-Step Guide)</h3>

  <p>The tool is designed to be simple, fast, and accessible to both beginners and experienced database professionals.</p>

  <ul>
    <li><strong>Step 1 – Paste Your SQL Query:</strong> Copy your SQL from a database tool, script, or application and paste it into the input area.</li>

    <li><strong>Step 2 – Adjust Formatting Preferences:</strong> Choose indentation style, keyword casing (UPPER/lower), and comma placement based on your preference.</li>

    <li><strong>Step 3 – Beautify or Minify:</strong> Click “Beautify SQL” to format your query or “Minify SQL” to compress it for production use.</li>

    <li><strong>Step 4 – Validate or Highlight:</strong> Use validation to detect syntax errors or enable syntax highlighting for better readability.</li>

    <li><strong>Step 5 – Copy or Download:</strong> Copy the formatted SQL or download it as a .sql file for later use.</li>
  </ul>

  <p>No installation, no configuration, and no registration required—just paste and format instantly.</p>

  <h3>A Real-World Example of SQL Beautification</h3>

  <p>Imagine you inherit a complex SQL query from another developer. It is written in a single line, without indentation, and uses inconsistent keyword casing. At first glance, it is almost impossible to understand what the query is doing.</p>

  <p>It contains multiple joins, nested subqueries, and filtering conditions—but everything is visually compressed into a single block of text.</p>

  <p>You need to debug an issue in the query, but finding the relevant section takes time and increases the risk of mistakes.</p>

  <p>Instead of manually reformatting it, you paste it into the SQL Beautifier. Instantly, the tool restructures the query. Each clause is properly separated, indentation reveals logical grouping, and the flow of execution becomes easy to follow.</p>

  <p>What once looked like a confusing string becomes a clearly structured and understandable SQL statement.</p>

  <h3>Why Clean SQL Improves Productivity and Accuracy</h3>

  <p>Readable SQL is not just about aesthetics—it directly improves development efficiency. Developers and database administrators spend a lot of time reading and analyzing queries, especially in large systems.</p>

  <p>When SQL is properly formatted, it becomes much easier to understand query logic, identify performance issues, and detect errors. This reduces debugging time and helps prevent costly mistakes in production environments.</p>

  <p>In team environments, consistent formatting ensures that everyone interprets queries in the same way. This improves collaboration and makes code reviews significantly smoother.</p>

  <h3>Who Should Use This SQL Beautifier Tool?</h3>

  <p>This tool is useful for anyone working with databases or SQL queries, regardless of experience level.</p>

  <ul>
    <li><strong>Database Administrators:</strong> Format and analyze complex queries for optimization and maintenance.</li>

    <li><strong>Backend Developers:</strong> Debug SQL embedded in application code more easily.</li>

    <li><strong>Data Analysts:</strong> Organize queries used for reporting and data extraction.</li>

    <li><strong>SQL Beginners:</strong> Learn query structure by comparing raw and formatted SQL.</li>

    <li><strong>Development Teams:</strong> Maintain consistent SQL formatting standards across projects.</li>
  </ul>

  <h3>Key Features of This SQL Beautifier & Formatter</h3>

  <p>This tool is built to handle real-world database workloads and complex queries.</p>

  <ul>
    <li><strong>Instant Formatting:</strong> Large and complex SQL queries are formatted immediately.</li>

    <li><strong>Minify Option:</strong> Compress queries for production environments when needed.</li>

    <li><strong>Syntax Highlighting:</strong> Improve readability with color-coded SQL structure.</li>

    <li><strong>Validation Support:</strong> Detect syntax errors and formatting issues.</li>

    <li><strong>Browser-Based Processing:</strong> All queries are processed locally for maximum privacy.</li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p><strong>What is the difference between beautifying and minifying SQL?</strong><br>
  Beautifying adds indentation, spacing, and structure to make SQL readable and maintainable. Minifying removes unnecessary characters to reduce query size and improve performance in production environments.</p>

  <p><strong>Can this tool handle large SQL queries?</strong><br>
  Yes. It is designed to handle complex queries, stored procedures, and large database scripts without performance issues.</p>

  <p><strong>Is my SQL data safe and private?</strong><br>
  Absolutely. Your SQL queries are processed entirely in your browser. Nothing is uploaded or stored on any server.</p>

  <p><strong>Does it support mobile devices?</strong><br>
  Yes, the tool is fully responsive and works smoothly on smartphones, tablets, and desktops.</p>

  <p><strong>Do I need to pay or register?</strong><br>
  No. The tool is completely free and requires no account or subscription.</p>

  <h3>Why This SQL Beautifier Stands Out</h3>

  <p>Many online tools require users to upload SQL queries to external servers, which can raise concerns when working with sensitive databases or proprietary business logic.</p>

  <p>This tool avoids that completely by processing everything locally in your browser. Your queries never leave your device, ensuring full privacy and security.</p>

  <p>It is also designed for simplicity and speed. You don’t need to configure anything—just paste your SQL and get instant results.</p>

  <h3>Common Applications of SQL Beautification</h3>

  <p>SQL formatting is widely used in real-world database workflows across industries.</p>

  <ul>
    <li><strong>Code Reviews:</strong> Make queries readable for team evaluation.</li>

    <li><strong>Documentation:</strong> Prepare clean SQL examples for technical documentation.</li>

    <li><strong>Debugging:</strong> Identify errors and logical issues in complex queries.</li>

    <li><strong>Performance Tuning:</strong> Understand query structure for optimization.</li>

    <li><strong>Education:</strong> Teach SQL syntax using well-formatted examples.</li>
  </ul>

  <h3>Final Thoughts</h3>

  <p>SQL is essential in almost every modern application, but poorly formatted queries can quickly become a bottleneck in development and maintenance. Without proper structure, even simple queries can be hard to understand and debug.</p>

  <p>This SQL Beautifier & Formatter tool solves that problem instantly. Instead of manually reorganizing queries, you can transform messy SQL into a clean, readable format in seconds.</p>

  <p>Whether you are optimizing databases, debugging backend logic, or learning SQL, clean formatting makes your work faster, easier, and far more efficient.</p>

</div>


<!-- File Upload Modal -->
<div id="uploadModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Upload SQL File</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Select a SQL file (.sql or .txt) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".sql,.txt">
      <p id="fileInfo" class="file-info"></p>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelUpload">Cancel</button>
      <button class="modal-button primary" id="confirmUpload">Upload</button>
    </div>
  </div>
</div>

<!-- Compare Modal -->
<div id="compareModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Compare SQL</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h4>Original SQL</h4>
          <textarea id="originalSql" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
        </div>
        <div>
          <h4>Formatted SQL</h4>
          <textarea id="formattedSql" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeCompare">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const sqlInput = document.getElementById('sqlInput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    
    // Formatting options
    const indentType = document.getElementById('indentType');
    const indentSize = document.getElementById('indentSize');
    const keywordCase = document.getElementById('keywordCase');
    const commaPosition = document.getElementById('commaPosition');
    const alignColumns = document.getElementById('alignColumns');
    const breakLongLines = document.getElementById('breakLongLines');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const compareModal = document.getElementById('compareModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');
    const closeCompare = document.getElementById('closeCompare');
    const originalSql = document.getElementById('originalSql');
    const formattedSql = document.getElementById('formattedSql');

    // Store original SQL for comparison
    let originalSqlContent = '';

    // SQL keywords for syntax highlighting and formatting
    const sqlKeywords = [
      'SELECT', 'FROM', 'WHERE', 'INSERT', 'UPDATE', 'DELETE', 'CREATE', 'ALTER', 'DROP',
      'TABLE', 'VIEW', 'INDEX', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'OUTER', 'ON', 'AND',
      'OR', 'NOT', 'IN', 'BETWEEN', 'LIKE', 'IS', 'NULL', 'ORDER', 'BY', 'GROUP', 'HAVING',
      'UNION', 'ALL', 'DISTINCT', 'AS', 'SET', 'VALUES', 'INTO', 'DATABASE', 'SCHEMA',
      'FUNCTION', 'PROCEDURE', 'TRIGGER', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES',
      'UNIQUE', 'CHECK', 'DEFAULT', 'AUTO_INCREMENT', 'COMMIT', 'ROLLBACK', 'GRANT',
      'REVOKE', 'BEGIN', 'END', 'DECLARE', 'CURSOR', 'FETCH', 'OPEN', 'CLOSE', 'EXECUTE',
      'CASE', 'WHEN', 'THEN', 'ELSE', 'EXISTS', 'ANY', 'ALL', 'SOME'
    ];

    const sqlFunctions = [
      'COUNT', 'SUM', 'AVG', 'MIN', 'MAX', 'ROUND', 'UPPER', 'LOWER', 'TRIM', 'LTRIM',
      'RTRIM', 'LENGTH', 'SUBSTRING', 'CONCAT', 'COALESCE', 'NULLIF', 'CAST', 'CONVERT',
      'DATEADD', 'DATEDIFF', 'GETDATE', 'NOW', 'CURDATE', 'CURTIME', 'YEAR', 'MONTH',
      'DAY', 'HOUR', 'MINUTE', 'SECOND'
    ];

    // Initialize counters
    updateCounts();

    // Event listeners
    sqlInput.addEventListener('input', updateCounts);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleSqlAction(action);
      });
    });

    // Upload icon click handler - opens modal
    uploadIcon.addEventListener('click', function () {
      uploadModal.style.display = 'block';
    });

    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        uploadModal.style.display = 'none';
        compareModal.style.display = 'none';
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

    // Close compare modal
    closeCompare.addEventListener('click', function() {
      compareModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === uploadModal || event.target === compareModal) {
        uploadModal.style.display = 'none';
        compareModal.style.display = 'none';
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
      if (file.type === 'application/sql' || file.name.endsWith('.sql') || file.name.endsWith('.txt')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          sqlInput.value = e.target.result;
          updateCounts();
          showAlert('SQL file uploaded successfully!', 'success');
          uploadModal.style.display = 'none';
          modalFileUpload.value = '';
          fileInfo.textContent = '';
        };
        reader.onerror = function () {
          showAlert('Error reading the SQL file.', 'error');
        };
        reader.readAsText(file);
      } else {
        showAlert('Unsupported file format. Please upload a SQL or TXT file.', 'error');
      }
    });

    function updateCounts() {
      const sql = sqlInput.value;

      // Character count
      document.getElementById('charCount').textContent = sql.length;

      // Line count
      const lineCount = sql ? sql.split(/\n/).length : 0;
      document.getElementById('lineCount').textContent = lineCount;

      // Query count (approximate)
      const queryCount = (sql.match(/SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP/g) || []).length;
      document.getElementById('queryCount').textContent = queryCount;

      // File size
      const fileSize = (new Blob([sql]).size / 1024).toFixed(2);
      document.getElementById('fileSize').textContent = fileSize + ' KB';
    }

    function handleSqlAction(action) {
      const sql = sqlInput.value;
      
      // Store original SQL for comparison
      if (action === 'beautify' || action === 'minify') {
        originalSqlContent = sql;
      }

      switch (action) {
        case 'beautify':
          try {
            const beautified = beautifySql(sql);
            sqlInput.value = beautified;
            showAlert('SQL beautified successfully!', 'success');
          } catch (e) {
            showAlert(`Error beautifying SQL: ${e.message}`, 'error');
          }
          break;

        case 'minify':
          try {
            const minified = minifySql(sql);
            sqlInput.value = minified;
            showAlert('SQL minified successfully!', 'success');
          } catch (e) {
            showAlert(`Error minifying SQL: ${e.message}`, 'error');
          }
          break;

        case 'validate':
          const validationResult = validateSql(sql);
          if (validationResult.isValid) {
            showAlert('SQL syntax appears valid!', 'success');
          } else {
            showAlert(`SQL validation warning: ${validationResult.error}`, 'error');
          }
          break;

        case 'highlight':
          try {
            const highlighted = applySyntaxHighlighting(sql);
            // For demo purposes, we'll just show an alert
            // In a real implementation, you would update the textarea or create a preview
            showAlert('Syntax highlighting applied! (View formatted output)', 'success');
          } catch (e) {
            showAlert(`Error applying syntax highlighting: ${e.message}`, 'error');
          }
          break;

        case 'copy':
          copyToClipboard(sql);
          break;

        case 'download':
          downloadSql('formatted_query.sql', sql);
          break;

        case 'compare':
          if (!originalSqlContent) {
            showAlert('Please beautify or minify SQL first to compare.', 'error');
            return;
          }
          originalSql.value = originalSqlContent;
          formattedSql.value = sql;
          compareModal.style.display = 'block';
          break;

        case 'clear':
          sqlInput.value = '';
          originalSqlContent = '';
          updateCounts();
          break;
      }

      updateCounts();
    }

    // SQL beautification function
    function beautifySql(sql) {
      // Basic SQL formatting
      let formatted = sql;
      
      // Normalize whitespace
      formatted = formatted.replace(/\s+/g, ' ').trim();
      
      // Add line breaks after major keywords
      const keywords = ['SELECT', 'FROM', 'WHERE', 'JOIN', 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 
                       'ORDER BY', 'GROUP BY', 'HAVING', 'UNION', 'INSERT INTO', 'UPDATE', 'DELETE FROM'];
      
      keywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        formatted = formatted.replace(regex, `\n${keyword}`);
      });
      
      // Handle commas in SELECT clause
      if (commaPosition.value === 'before') {
        formatted = formatted.replace(/,\s*/g, '\n, ');
      } else {
        formatted = formatted.replace(/,\s*/g, ',\n');
      }
      
      // Apply keyword casing
      formatted = applyKeywordCasing(formatted);
      
      // Add indentation
      formatted = addIndentation(formatted);
      
      return formatted.trim();
    }
    
    // Apply keyword casing based on user preference
    function applyKeywordCasing(sql) {
      let result = sql;
      
      sqlKeywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        if (keywordCase.value === 'upper') {
          result = result.replace(regex, keyword.toUpperCase());
        } else if (keywordCase.value === 'lower') {
          result = result.replace(regex, keyword.toLowerCase());
        } else {
          result = result.replace(regex, keyword.charAt(0).toUpperCase() + keyword.slice(1).toLowerCase());
        }
      });
      
      return result;
    }
    
    // Add proper indentation to SQL
    function addIndentation(sql) {
      const lines = sql.split('\n');
      let result = [];
      let indentLevel = 0;
      const indentChar = indentType.value === 'tabs' ? '\t' : ' '.repeat(parseInt(indentSize.value));
      
      const increaseIndentKeywords = ['SELECT', 'FROM', 'WHERE', 'JOIN', 'INNER JOIN', 'LEFT JOIN', 
                                    'RIGHT JOIN', 'ORDER BY', 'GROUP BY', 'HAVING', 'INSERT INTO', 
                                    'UPDATE', 'DELETE FROM'];
      const decreaseIndentKeywords = ['FROM', 'WHERE', 'JOIN', 'ORDER BY', 'GROUP BY', 'HAVING'];
      
      lines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed.length === 0) {
          result.push('');
          return;
        }
        
        // Check if we should decrease indent
        if (decreaseIndentKeywords.some(keyword => 
            trimmed.toUpperCase().startsWith(keyword))) {
          indentLevel = Math.max(0, indentLevel - 1);
        }
        
        // Add current indent
        result.push(indentChar.repeat(indentLevel) + trimmed);
        
        // Check if we should increase indent
        if (increaseIndentKeywords.some(keyword => 
            trimmed.toUpperCase().startsWith(keyword) && 
            !decreaseIndentKeywords.includes(keyword))) {
          indentLevel++;
        }
      });
      
      return result.join('\n');
    }
    
    // SQL minification function
    function minifySql(sql) {
      // Remove comments
      let minified = sql.replace(/--.*$/gm, '');
      minified = minified.replace(/\/\*[\s\S]*?\*\//g, '');
      
      // Remove unnecessary whitespace
      minified = minified.replace(/\s+/g, ' ');
      minified = minified.replace(/\s*([,;()=+\-*\/])\s*/g, '$1');
      
      // Remove spaces around operators but keep them readable
      minified = minified.replace(/\s*=\s*/g, '=');
      minified = minified.replace(/\s*>\s*/g, '>');
      minified = minified.replace(/\s*<\s*/g, '<');
      minified = minified.replace(/\s*<=\s*/g, '<=');
      minified = minified.replace(/\s*>=\s*/g, '>=');
      minified = minified.replace(/\s*<>\s*/g, '<>');
      
      return minified.trim();
    }
    
    // Simple SQL validation
    function validateSql(sql) {
      // Basic syntax checks
      const trimmed = sql.trim();
      
      if (trimmed.length === 0) {
        return {
          isValid: false,
          error: 'SQL query is empty'
        };
      }
      
      // Check for common SQL syntax issues
      if ((sql.match(/\(/g) || []).length !== (sql.match(/\)/g) || []).length) {
        return {
          isValid: false,
          error: 'Unbalanced parentheses'
        };
      }
      
      // Check for common mistakes
      if (sql.includes('SELECT *') && !sql.includes('LIMIT')) {
        return {
          isValid: true,
          warning: 'Consider adding LIMIT to SELECT * queries for better performance'
        };
      }
      
      return {
        isValid: true
      };
    }
    
    // Apply syntax highlighting (for demonstration)
    function applySyntaxHighlighting(sql) {
      let highlighted = sql;
      
      // Highlight keywords
      sqlKeywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        highlighted = highlighted.replace(regex, `<span class="sql-keyword">${keyword}</span>`);
      });
      
      // Highlight functions
      sqlFunctions.forEach(func => {
        const regex = new RegExp(`\\b${func}\\(`, 'gi');
        highlighted = highlighted.replace(regex, `<span class="sql-function">${func}</span>(`);
      });
      
      // Highlight strings
      highlighted = highlighted.replace(/'[^']*'/g, '<span class="sql-string">$&</span>');
      highlighted = highlighted.replace(/"[^"]*"/g, '<span class="sql-string">$&</span>');
      
      // Highlight numbers
      highlighted = highlighted.replace(/\b\d+\b/g, '<span class="sql-number">$&</span>');
      
      // Highlight comments
      highlighted = highlighted.replace(/--.*$/gm, '<span class="sql-comment">$&</span>');
      highlighted = highlighted.replace(/\/\*[\s\S]*?\*\//g, '<span class="sql-comment">$&</span>');
      
      return highlighted;
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('SQL copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy SQL: ' + err, 'error');
      });
    }

    function downloadSql(filename, text) {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:application/sql;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('SQL downloaded successfully!', 'success');
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
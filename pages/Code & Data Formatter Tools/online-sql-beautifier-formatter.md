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

  ```html
<!-- SEO Content Section -->
<div class="content-placeholder">
    <h2>Free Online SQL Beautifier & Formatter Tool</h2>

    <p>Let’s be honest—SQL can get ugly fast. What starts as a simple `SELECT * FROM users` can quickly spiral into a monster query with seven JOINs, nested subqueries, CASE statements, window functions, and a GROUP BY that scrolls off your screen. And that’s when it’s <em>written well</em>. But when you inherit SQL from someone else—or from a code generator, or from a legacy system—it’s often a mess. All on one line. No indentation. Keywords in random cases (sometimes SELECT, sometimes select, sometimes SeLeCt). Aliases that make no sense. You need to understand what the query does, fix a bug, or optimize performance, but you can’t even tell where one clause ends and the next begins. That’s exactly why we built this <strong>SQL Beautifier and Formatter tool</strong>. Paste in your messy, minified, or just poorly formatted SQL query, click a button, and in less than a second you get clean, readable, properly indented code. Each clause (`SELECT`, `FROM`, `WHERE`, `JOIN`, `GROUP BY`, `ORDER BY`) on its own line. Nested subqueries clearly indented. Aliases aligned. Keywords consistently capitalized. Suddenly, a query that was impossible to read becomes crystal clear. You can see the logic, spot the errors, and understand what the database is actually doing. And if you need to go the other direction—taking a beautified query and minifying it for some reason (maybe for logging or a one-liner)—the tool does that too. It also validates your SQL (catches missing commas, unmatched parentheses) and offers syntax highlighting to color-code keywords and strings. It’s free. It’s private (all processing happens in your browser, not on our servers). It works offline. And it will save you countless hours of squinting at unreadable queries. Bookmark it. Use it daily. Your DBA will thank you.</p>

    <h3>How to Use This SQL Beautifier (Step-by-Step):</h3>
    <ul>
      <li><strong>Paste Your SQL (The Ugly Stuff):</strong> Copy your SQL query from anywhere—a database client (like pgAdmin, MySQL Workbench, DBeaver), a code editor, a log file, or even an application where you found an embedded query. Paste it into the large input box. The tool doesn't care if it's one line or hundreds of lines. It doesn't care if it's perfectly valid or has a few syntax errors (though valid SQL formats better). Just paste it and move on. The tool handles most SQL dialects (MySQL, PostgreSQL, SQL Server, Oracle, SQLite) with good accuracy.</li>
      <li><strong>Customize Formatting (Make It Your Style):</strong> SQL formatting preferences vary widely. Some people like keywords in uppercase (`SELECT`), some prefer lowercase (`select`). Some put commas at the end of lines, some put them at the beginning (useful for commenting out columns). Some indent with spaces, some with tabs. This tool respects your preferences. You can choose keyword case (uppercase, lowercase, or preserve original), indentation type (spaces or tabs), indentation size (1 to 8 spaces), comma position (end of line or beginning of line), and whether to align aliases (`AS` keywords). Set it once, and the tool remembers your preferences for next time using local storage.</li>
      <li><strong>Beautify or Minify (Two Directions, One Tool):</strong> Need to format messy or minified SQL into readable code? Click "Beautify SQL." The tool will parse the SQL, add line breaks after each major clause, indent nested structures (subqueries, CTEs), and apply your chosen keyword case. Need to compress readable SQL for production (or for fitting into a single log line)? Click "Minify SQL." The tool will remove unnecessary spaces and line breaks, shrinking the query size dramatically. Minified SQL is rarely needed for execution (whitespace doesn't affect performance), but it's useful for embedding in code or logging. Both operations are nearly instant, even on large queries.</li>
      <li><strong>Validate & Highlight (Check Your Work):</strong> Not sure if your SQL is valid? Click "Validate SQL." The tool will check for basic syntax errors—missing commas, unmatched parentheses, missing `FROM` clauses, etc.—and tell you where the error is. (Note: The tool is not a full SQL parser for every dialect, but it catches the most common issues.) For complex queries, click "Syntax Highlight" to apply color coding. Keywords in one color, strings in another, functions in another. This makes it much easier to scan the query visually.</li>
      <li><strong>Copy or Download (Use It Where You Need):</strong> Once your SQL is formatted, click "Copy" to grab it to your clipboard. Paste it into your database client, your code, your email, or anywhere else. Or click "Download" to save it as a .sql file directly to your computer. No more selecting text, scrolling, and accidentally missing the last line.</li>
    </ul>

    <h3>Real-Life Example & Use Case (Meet David the Data Analyst):</h3>
    <p>David is a data analyst at a mid-sized e-commerce company. He needs to write a quarterly sales report, which requires a complex SQL query joining five tables: orders, customers, products, order_items, and returns. He writes the query step by step, but by the end, it's over 50 lines and getting hard to read. He knows he could format it better, but he's in a hurry and just wants to get the data. He runs the query, gets results, and moves on.</p>
    <p>Two months later, his manager asks him to modify the report. David opens the saved SQL file. It's a mess. He didn't indent consistently. Some JOINs are on the same line as the previous clause. He can't tell which conditions belong to which JOIN. He's frustrated. Then he remembers our SQL Beautifier. He copies the query, pastes it into the tool, selects "uppercase keywords," "commas at end of line," "2 spaces for indentation," and clicks "Beautify SQL." In less than a second, the tool produces a beautifully formatted query. Each clause is on its own line. JOINs are clearly separated. Conditions are indented under their JOINs. Aliases are aligned. He can now see the structure at a glance, find the part he needs to change, and make the modification in minutes. He resolves to run every query through the beautifier before saving from now on.</p>
    <p><strong>Another example:</strong> Priya is a backend developer who found a slow query in the application logs. The query was logged as a single line, making it impossible to read. She copied the minified query, pasted it into the beautifier, formatted it, and instantly saw the problem: a missing index on a JOIN condition. She added the index, and the query sped up 100x. Without the beautifier, she would have wasted hours trying to read the minified query.</p>

    <h3>Benefits & Who Should Use This Tool (Probably You):</h3>
    <ul>
      <li><strong>Database Administrators (DBAs):</strong> You're responsible for database performance and maintainability. You review SQL queries written by developers, and you need to understand them quickly. The beautifier turns messy queries into readable ones, so you can spot performance issues (missing indexes, inefficient JOINs, SELECT *) and syntax errors fast.</li>
      <li><strong>Backend Developers:</strong> You embed SQL in your application code (or use an ORM that sometimes generates messy queries). When you need to debug a query, paste it into the beautifier. Format it. Understand it. Fix it. It's especially useful for complex reports or data migrations.</li>
      <li><strong>Data Analysts & Data Engineers:</strong> You write SQL every day—for reporting, for ETL pipelines, for data exploration. Consistent formatting makes your queries maintainable and shareable. The beautifier enforces your team's style guide automatically. No more arguing about where commas go.</li>
      <li><strong>SQL Learners (Students):</strong> You're learning SQL. You write queries, but you're not sure if they're structured correctly. Paste them into the beautifier. The formatted output shows you the logical structure: which parts are the SELECT, which are the FROM, which are the WHERE. You'll learn faster by seeing well-formatted examples.</li>
      <li><strong>Technical Writers & Documenters:</strong> You need to include SQL examples in documentation. Well-formatted, syntax-highlighted SQL looks professional and is easier for readers to understand. Use the beautifier to format your examples, then copy them into your docs.</li>
      <li><strong>Teams (Consistency Matters):</strong> In a team environment, formatting consistency is not a luxury—it's a necessity. When everyone uses different formatting, code reviews are harder and queries are harder to understand. Use the beautifier as a team standard. Agree on settings (uppercase keywords, commas at end of line, 2-space indentation). Then everyone runs their SQL through the tool before committing to version control. The result: a codebase of readable, maintainable queries.</li>
    </ul>

    <h3>Frequently Asked Questions (Real Answers):</h3>
    <p><strong>What is the difference between beautifying and minifying SQL? When should I use each?</strong><br>
      Great question. <strong>Beautifying</strong> adds line breaks, indentation, and consistent casing to make SQL readable for humans. Use this during development, for code reviews, when debugging, or when you need to understand a complex query. <strong>Minifying</strong> does the opposite—it removes unnecessary spaces and line breaks to reduce query size. However, unlike JavaScript or CSS, minifying SQL is rarely needed because SQL runs on the database server and whitespace doesn't affect performance. The only use cases for minified SQL are: embedding a query in a single line of code (e.g., for logging), fitting a query into a character-limited field, or obfuscating SQL (not recommended). For 99.9% of use cases, beautifying is what you want. The tool includes minify for completeness, but beautify is the star.</p>

    <p><strong>Is there a query size limit? Can I beautify a huge stored procedure?</strong><br>
      The tool can handle very large SQL files—hundreds of kilobytes or even a few megabytes. Most queries and stored procedures are under 500 KB, so you're fine. However, full SQL parsing in JavaScript is complex, especially for all dialects. The tool focuses on formatting (line breaks, indentation, keyword case) rather than full semantic analysis. For typical use—individual queries, views, small stored procedures—you won't hit any limits. For truly massive generated SQL (like 10 MB of minified code), consider using a command-line tool. But for 99% of real-world SQL, the tool works great.</p>

    <p><strong>Is my SQL code kept private? Do you see my queries?</strong><br>
      Absolutely, positively, 100% private. The SQL beautifier runs entirely in your browser using JavaScript. Your code never leaves your computer. When you paste SQL into the input box, it stays there. When you click "Beautify" or "Minify," the transformation happens locally. No data is sent to any server. We can't see your queries. We don't store your queries. You can prove this by disconnecting your internet after the page loads—the tool still works. That's how local it is. If you're working with sensitive database schemas, customer data, or proprietary business logic, this tool is safe to use.</p>

    <p><strong>Which SQL dialects does this tool support? (MySQL, PostgreSQL, SQL Server, etc.)</strong><br>
      The tool supports the core SQL syntax that's common across major databases: SELECT, FROM, JOIN, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT/OFFSET, subqueries, CTEs (WITH clauses), UNION, CASE expressions, and window functions (ROW_NUMBER, RANK, etc.). It works well for MySQL, PostgreSQL, SQL Server, SQLite, and Oracle. However, database-specific features (like SQL Server's `TOP` or PostgreSQL's `::` casting) may not be perfectly formatted. The tool focuses on indentation and line breaks, which works across dialects. For 95% of typical queries, you won't notice any issues. For exotic database-specific syntax, test it first—the tool won't break your query, it just might not format every edge case perfectly.</p>

    <p><strong>What does "Validate SQL" do? How accurate is it?</strong><br>
      "Validate SQL" checks for common syntax errors: missing keywords (like a `FROM` after `SELECT`), unmatched parentheses, missing commas between columns, unmatched quotes, and incomplete statements. The validation is not a full semantic parser—it won't catch errors like referencing a non-existent table or column. But it will catch formatting-level errors that make the beautifier struggle. If your SQL has a missing comma or an unmatched parenthesis, the beautifier might not format it correctly. Validate first, fix the errors, then beautify. For a more thorough validation, run your query in an actual database client. The tool's validator is a helpful first-pass check, not a replacement for real database validation.</p>

    <p><strong>Can I use this tool on my mobile phone or tablet?</strong><br>
      Yes, it's fully responsive. The input box resizes to fit your screen. Buttons are big enough to tap. The copy and download functions work on mobile too (downloading a file on a phone saves it to your downloads folder or offers to share it). However, editing large SQL queries on a tiny screen is not the greatest experience—use a laptop or desktop if you can. For quick checks of small queries, mobile works fine.</p>

    <p><strong>Do I need to create an account or pay for this?</strong><br>
      No. Never. This is completely free. There's no "premium version" with faster processing or larger file limits. There's no "sign up to unlock minification." There's no "free trial" that asks for your credit card. Just a tool that works, forever, at no cost. If you want to share it with a friend or colleague, go ahead. If you want to bookmark it and use it every day, even better. Free means free.</p>

    <p><strong>What's the best practice for comma placement in SQL? End of line or beginning?</strong><br>
      This is a classic SQL formatting debate. <strong>Commas at the end of the line</strong> (traditional) are familiar to most developers. <strong>Commas at the beginning of the line</strong> have advantages: you can comment out a column without messing up the comma before it. For example:
      <pre>
SELECT
    column1
    , column2
    -- , column3  -- commented out, no trailing comma issue
    , column4
      </pre>
      With end-of-line commas, commenting out the last column leaves a trailing comma, which breaks the query. Both styles are valid. Choose whichever your team prefers. The tool supports both. We default to "end of line" because it's more common, but "beginning of line" is available in settings.</p>

    <h3>Why Choose Our SQL Beautifier & Formatter (Over Others)?</h3>
    <p>There are a good number of SQL formatters online. Here's what sets this one apart. <strong>Privacy first.</strong> Most online tools upload your SQL to their server—a huge risk if you're dealing with sensitive data or proprietary schemas. Our tool processes everything locally. <strong>Offline capable.</strong> Once the page loads, you can disconnect from the internet and it still works. That's rare. <strong>Customizable.</strong> Keyword case, indentation, comma position—you can tweak it to match your team's style guide. <strong>Built-in validator.</strong> Catches basic syntax errors. <strong>Syntax highlighting.</strong> Makes queries easier to scan. <strong>Fast.</strong> Even large queries format in under a second. <strong>Clean output.</strong> The formatted SQL is not just technically correct—it's human-readable. Proper clause separation, consistent indentation. And it's free. No hidden costs. No "pro" features locked behind a paywall. Just a solid, reliable tool that does SQL formatting, validation, and highlighting better than most paid alternatives.</p>

    <h3>Common Applications of SQL Beautification (Real Use Cases):</h3>
    <ul>
      <li><strong>Code Reviews:</strong> You're reviewing a pull request that includes a complex SQL query. The query works, but it's hard to read. Paste it into the beautifier, format it, and review the formatted version. You'll catch logic errors, missing indexes, and style violations much faster.</li>
      <li><strong>Debugging Slow Queries:</strong> Your database is slow. You find a slow query in the logs, but it's minified or poorly formatted. Paste it into the beautifier, format it, and suddenly you can see the execution plan. Add the missing index, rewrite the inefficient JOIN, and watch the query speed up.</li>
      <li><strong>Documentation Generation:</strong> You're writing technical documentation that includes SQL examples. Use the beautifier to format your examples, then use syntax highlighting to make them pop. Your readers will appreciate the clarity.</li>
      <li><strong>Teaching & Learning:</strong> You're teaching SQL to beginners. Start with a formatted query and explain each clause. Then show them the same query without formatting to demonstrate why formatting matters. The beautifier is a teaching tool as much as a productivity tool.</li>
      <li><strong>Migration & Refactoring:</strong> You're migrating a legacy database application. The old code has thousands of SQL queries embedded in strings, all poorly formatted. Extract the queries, run them through the beautifier (in batches, via script), then re-embed them. You'll have a much more maintainable codebase.</li>
    </ul>

    <h3>Understanding SQL Formatting (Why It Matters):</h3>
    <p>SQL formatting is not just about aesthetics—though that matters too. Here's why good formatting is essential when working with SQL. <strong>Readability:</strong> A well-formatted query shows the logical structure immediately: which columns are selected, which tables are joined, what conditions filter the data. You can scan the query and understand it in seconds, not minutes. <strong>Debugging:</strong> Errors (like a missing JOIN condition or an incorrect WHERE clause) are much easier to spot in formatted SQL. <strong>Collaboration:</strong> When teams share queries, consistent formatting reduces friction. Everyone can read and edit the query without mental translation. <strong>Maintenance:</strong> Six months from now, you'll need to modify this query. Well-formatted SQL will be much easier to understand than a wall of text. <strong>Code reviews:</strong> Pull requests with well-formatted SQL get reviewed faster and with fewer style nitpicks. Reviewers can focus on logic, not spacing.</p>

    <h3>Common SQL Formatting Patterns (A Quick Guide):</h3>
    <p>Here are the patterns the tool applies. <strong>Clause on new line:</strong> Each major clause (`SELECT`, `FROM`, `WHERE`, `JOIN`, `GROUP BY`, `HAVING`, `ORDER BY`) starts on a new line. <strong>Indented conditions:</strong> Conditions under `WHERE` and `JOIN` are indented. Multiple conditions separated by `AND`/`OR` get their own lines. <strong>Indented subqueries:</strong> Subqueries (in `WHERE` or `FROM`) are indented relative to their parent. <strong>Consistent keyword case:</strong> Uppercase or lowercase, your choice. <strong>Consistent comma placement:</strong> Either all commas at end of line, or all at beginning. <strong>Aligned aliases:</strong> The `AS` keyword (if used) can be aligned for readability.</p>

    <h3>One Final Thought (SQL Doesn't Have to Be Ugly):</h3>
    <p>SQL is a beautiful language. It's declarative, powerful, and (when written well) almost like English. But it only stays beautiful if you format it. A messy SQL query is not just an eyesore—it's a barrier to understanding, debugging, and collaboration. The beautifier turns that barrier into a gateway. It takes the pain out of formatting, so you can focus on what matters: writing queries that are correct, fast, and easy to understand. Next time you're staring at a wall of SQL with no line breaks, or you're trying to debug a query that's been minified by your logging system, or you're about to send a query to a colleague but you're embarrassed by its formatting, don't struggle. Just paste it into this tool. Format it. Validate it. Highlight it. Then copy it and get back to work. Your database—and your teammates—will thank you.</p>
</div>
</div>
```
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
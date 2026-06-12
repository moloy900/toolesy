---
layout: default
title: "Remove Extra Spaces – Online Whitespace Remover Tool"
permalink: /remove-extra-spaces-whitespace-online-whitespace-remover-tool/
---

<!-- ✅ Basic Meta Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Remove Extra Spaces – Online Whitespace Remover Tool</title>
<meta name="description" content="Free tool to remove extra spaces and whitespace from text. Clean messy formatting by deleting multiple spaces, tabs, and line breaks instantly. No installation required.">
<meta name="keywords" content="remove extra spaces, whitespace remover, space remover, clean text, remove multiple spaces, trim spaces, text formatter, space cleaner, text cleaner, remove tabs, remove line breaks, fix text formatting">
<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph Tags -->
<meta property="og:title" content="Free Extra Spaces & Whitespace Remover - Clean Text Instantly">
<meta property="og:description" content="Remove extra spaces, tabs, and line breaks from your text instantly. Clean and format your content in one click.">
<meta property="og:url" content="https://toolesy.com/remove-extra-spaces-whitespace-online-whitespace-remover-tool">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Extra Spaces Remover - Clean Your Text Online">
<meta name="twitter:description" content="Clean messy formatting and remove unnecessary whitespace from your content instantly. 100% Free Tool.">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Whitespace Remover Styles */
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

  /* Whitespace Remover specific styles */
  .whitespace-options {
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

    .whitespace-options {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Extra Spaces & Whitespace Remover</h1>
  <p class="welcome-message">Clean up your text by removing extra spaces, tabs, and unnecessary whitespace. Format your text perfectly for websites, documents, and code.</p>

  <div class="converter-section">
    <h2>Whitespace Remover Tool</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Character Count: </span>
        <span id="charCount">0</span>
      </div>
      <div class="counter-item">
        <span>Word Count: </span>
        <span id="wordCount">0</span>
      </div>
      <div class="counter-item">
        <span>Line Count: </span>
        <span id="lineCount">0</span>
      </div>
      <div class="counter-item">
        <span>Space Count: </span>
        <span id="spaceCount">0</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input Text <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="textInput" rows="6" placeholder="Paste your text with extra spaces here..."></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".txt,.csv,.html,.xml,.json" style="display: none;">

    <div class="whitespace-options">
      <div class="option-group">
        <label class="option-label">Remove Options</label>
        <select id="removeOption" class="option-select">
          <option value="all">All Extra Spaces</option>
          <option value="multiple">Multiple Spaces Only</option>
          <option value="trailing">Trailing Spaces Only</option>
          <option value="leading">Leading Spaces Only</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Line Break Handling</label>
        <select id="lineBreakOption" class="option-select">
          <option value="preserve">Preserve Line Breaks</option>
          <option value="single">Single Line Breaks</option>
          <option value="remove">Remove All Line Breaks</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Tab Handling</label>
        <select id="tabOption" class="option-select">
          <option value="keep">Keep Tabs</option>
          <option value="spaces">Convert to Spaces</option>
          <option value="remove">Remove Tabs</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="trimLines" checked>
          <label for="trimLines">Trim Individual Lines</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="removeEmptyLines">
          <label for="removeEmptyLines">Remove Empty Lines</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="remove">Remove Extra Spaces</button>
        <button class="case-button" data-action="minify">Minify Text</button>
        <button class="case-button" data-action="normalize">Normalize Spaces</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button success" data-action="download">Download Text</button>
        <button class="case-button warning" data-action="compare">Compare</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Before Cleaning:</h3>
      <div class="example-text">This    text    has    many    extra    spaces.
    
    There are   multiple   spaces   between   words.

Also   trailing spaces here:        
And   leading   spaces   here.</div>

      <h3>After Cleaning (All Extra Spaces):</h3>
      <div class="example-text">This text has many extra spaces.

There are multiple spaces between words.

Also trailing spaces here:
And leading spaces here.</div>

      <h3>After Minification:</h3>
      <div class="example-text">This text has many extra spaces. There are multiple spaces between words. Also trailing spaces here: And leading spaces here.</div>
    </div>
  </div>

<!-- SEO Content Section -->
<div class="content-placeholder">
    <h2>Free Online Extra Spaces & Whitespace Remover Tool – Clean Text in Seconds</h2>

    <p>
        Have you ever copied text from a website, PDF, Word document, spreadsheet, or email only to discover that it
        contains strange spacing issues? Multiple spaces between words, unnecessary tabs, inconsistent line breaks, and
        trailing whitespace can make content look unprofessional and difficult to work with. Our
        <strong>Extra Spaces & Whitespace Remover Tool</strong> is designed to solve these problems instantly.
    </p>

    <p>
        Whether you're a writer preparing content for publication, a developer optimizing source code, a student
        formatting an assignment, or a data analyst cleaning large datasets, this tool helps transform messy text into
        clean, organized, and professional content. Instead of manually searching for unwanted spaces and formatting
        errors, you can automate the process with just a few clicks.
    </p>

    <p>
        The tool works directly in your browser, meaning there's nothing to install and no account required. Simply
        paste your text, choose your preferred cleaning options, and generate perfectly formatted content in seconds.
        Your data remains private because all processing happens locally on your device.
    </p>

    <p>
        From simple whitespace cleanup to advanced text minification, this tool provides everything needed to improve
        readability, consistency, and efficiency when working with text.
    </p>

    <h3>How to Use This Whitespace Remover (Step-by-Step)</h3>

    <ul>
        <li>
            <strong>Paste Your Text:</strong>
            Copy content from documents, websites, PDFs, spreadsheets, emails, or code editors and paste it into the
            input field.
        </li>

        <li>
            <strong>Select Cleaning Preferences:</strong>
            Choose which whitespace elements you want to remove. Options may include multiple spaces, tabs, empty
            lines, trailing spaces, and more.
        </li>

        <li>
            <strong>Process the Content:</strong>
            Click the cleaning button to automatically remove unwanted whitespace and normalize the formatting.
        </li>

        <li>
            <strong>Review the Output:</strong>
            Compare the cleaned text with the original version to ensure it matches your requirements.
        </li>

        <li>
            <strong>Copy, Export, or Download:</strong>
            Use the cleaned text immediately or save it as a file for future use.
        </li>
    </ul>

    <h3>Why Removing Extra Whitespace Matters</h3>

    <p>
        At first glance, extra spaces may seem harmless. However, inconsistent whitespace can create problems in many
        situations. In professional documents, excessive spacing can make content appear poorly formatted. In software
        development, unnecessary whitespace can increase file sizes and complicate code maintenance. In data analysis,
        irregular spacing may cause import errors, sorting issues, and inaccurate results.
    </p>

    <p>
        Clean and consistent text improves readability, ensures compatibility across different platforms, and helps
        maintain professional standards. By removing unwanted whitespace, you create content that is easier to read,
        share, analyze, and manage.
    </p>

    <p>
        Whether you're handling a short paragraph or thousands of lines of text, proper whitespace management can save
        significant time and effort.
    </p>

    <h3>Real-Life Example & Use Case</h3>

    <p>
        Imagine you've copied a lengthy article from a PDF file for editing. The text contains random line breaks,
        multiple spaces between words, empty lines scattered throughout the document, and tabs that disrupt the layout.
        Cleaning everything manually could take a considerable amount of time.
    </p>

    <p>
        By pasting the content into this whitespace remover and selecting the appropriate cleaning options, the tool can
        instantly normalize spacing, remove unnecessary gaps, and create a clean, readable version of the text. What
        might have taken an hour manually can be completed in seconds.
    </p>

    <p>
        The same principle applies to developers cleaning source code, researchers organizing datasets, and office
        professionals preparing reports or presentations.
    </p>

    <h3>Benefits & Who Should Use This Tool?</h3>

    <ul>
        <li>
            <strong>Content Writers:</strong>
            Clean copied text before publishing articles, blog posts, newsletters, and web content.
        </li>

        <li>
            <strong>Web Developers:</strong>
            Optimize HTML, CSS, JavaScript, and configuration files by removing unnecessary whitespace.
        </li>

        <li>
            <strong>Data Analysts:</strong>
            Standardize data exports, CSV files, and spreadsheets before processing.
        </li>

        <li>
            <strong>Students & Researchers:</strong>
            Improve the formatting of assignments, dissertations, reports, and academic papers.
        </li>

        <li>
            <strong>Business Professionals:</strong>
            Create cleaner documents, proposals, presentations, and email communications.
        </li>

        <li>
            <strong>Editors & Proofreaders:</strong>
            Quickly remove formatting inconsistencies from manuscripts and editorial content.
        </li>

        <li>
            <strong>Database Administrators:</strong>
            Clean imported records and maintain consistent text formatting across datasets.
        </li>
    </ul>

    <h3>Types of Whitespace This Tool Can Remove</h3>

    <ul>
        <li>
            <strong>Multiple Consecutive Spaces:</strong>
            Converts repeated spaces into a single space for cleaner formatting.
        </li>

        <li>
            <strong>Leading Spaces:</strong>
            Removes unnecessary spaces that appear at the beginning of lines.
        </li>

        <li>
            <strong>Trailing Spaces:</strong>
            Deletes spaces that appear at the end of lines and paragraphs.
        </li>

        <li>
            <strong>Tab Characters:</strong>
            Removes tabs or converts them into standard spaces.
        </li>

        <li>
            <strong>Blank Lines:</strong>
            Eliminates unnecessary empty lines while preserving readability.
        </li>

        <li>
            <strong>Extra Line Breaks:</strong>
            Reduces excessive paragraph spacing and normalizes line endings.
        </li>

        <li>
            <strong>Mixed Formatting Whitespace:</strong>
            Cleans inconsistencies caused by copying content between different applications.
        </li>
    </ul>

    <h3>Frequently Asked Questions (FAQ)</h3>

    <p>
        <strong>Q: What types of whitespace can this tool remove?</strong><br>
        A: The tool can remove multiple spaces, leading spaces, trailing spaces, tabs, extra line breaks, and empty
        lines depending on your selected settings.
    </p>

    <p>
        <strong>Q: Is there a limit on text size?</strong><br>
        A: Most modern browsers can process very large text files, including lengthy documents and datasets containing
        thousands of lines.
    </p>

    <p>
        <strong>Q: Is my content secure?</strong><br>
        A: Yes. The processing takes place locally within your browser. Your content is not uploaded to external
        servers, helping maintain complete privacy.
    </p>

    <p>
        <strong>Q: Can I use the tool on mobile devices?</strong><br>
        A: Absolutely. The tool is responsive and works smoothly on smartphones, tablets, laptops, and desktop
        computers.
    </p>

    <p>
        <strong>Q: Does the tool cost anything?</strong><br>
        A: No. The whitespace remover is completely free to use without registration, subscriptions, or hidden fees.
    </p>

    <p>
        <strong>Q: Can I clean code files with this tool?</strong><br>
        A: Yes. Many developers use whitespace removers to clean and optimize code, configuration files, and markup
        documents.
    </p>

    <h3>Why Choose Our Extra Spaces & Whitespace Remover?</h3>

    <p>
        There are many text-cleaning tools available online, but not all provide the same balance of simplicity,
        flexibility, and privacy. Our tool focuses on delivering accurate whitespace cleanup while remaining easy for
        anyone to use.
    </p>

    <p>
        Unlike some online services that require uploading documents to remote servers, our solution performs
        processing directly within your browser. This approach improves privacy and often delivers faster results.
    </p>

    <p>
        The tool also offers customizable cleaning options, allowing users to decide exactly how whitespace should be
        handled. Whether you need basic space removal or advanced text optimization, the tool adapts to your workflow.
    </p>

    <p>
        Fast processing speeds, user-friendly controls, and reliable performance make it an excellent choice for
        professionals, students, and everyday users alike.
    </p>

    <h3>Common Applications of Whitespace Removal</h3>

    <p>
        Cleaning whitespace is useful in many industries and everyday situations. Here are some of the most common
        applications:
    </p>

    <ul>
        <li>
            <strong>Content Preparation:</strong>
            Prepare articles, blog posts, and marketing content before publishing online.
        </li>

        <li>
            <strong>Code Optimization:</strong>
            Remove unnecessary spaces from HTML, CSS, JavaScript, and other source files.
        </li>

        <li>
            <strong>Data Cleaning:</strong>
            Normalize imported datasets and CSV files before analysis.
        </li>

        <li>
            <strong>Document Formatting:</strong>
            Create professional reports, contracts, proposals, and presentations.
        </li>

        <li>
            <strong>Email Editing:</strong>
            Improve readability and consistency in email communications.
        </li>

        <li>
            <strong>Database Management:</strong>
            Ensure text fields remain standardized and error-free.
        </li>

        <li>
            <strong>Academic Writing:</strong>
            Format essays, dissertations, research papers, and study materials.
        </li>
    </ul>

    <h3>Advantages of Clean Text Formatting</h3>

    <p>
        Clean text is easier to read, edit, and share. Removing excess whitespace helps maintain a professional
        appearance while improving consistency across documents and platforms.
    </p>

    <p>
        For developers, smaller and cleaner files can improve efficiency and simplify maintenance. For businesses,
        consistent formatting helps create polished communications and professional documentation.
    </p>

    <p>
        In data-driven environments, properly formatted text reduces processing errors and improves overall data
        quality. Small formatting improvements often have a significant impact on productivity and accuracy.
    </p>

    <h3>Tips for Best Results</h3>

    <ul>
        <li>Review your text before processing to identify the specific whitespace issues.</li>
        <li>Select only the cleaning options you actually need.</li>
        <li>Keep a copy of the original content when working with important documents.</li>
        <li>Preview the output before replacing existing text.</li>
        <li>Use text minification carefully when readability is not required.</li>
    </ul>

    <h3>Conclusion</h3>

    <p>
        The Extra Spaces & Whitespace Remover is a simple yet powerful tool for cleaning and optimizing text. Whether
        you're formatting documents, preparing content for publication, cleaning datasets, or optimizing code, it helps
        eliminate unnecessary whitespace quickly and accurately.
    </p>

    <p>
        With customizable cleaning options, privacy-focused processing, fast performance, and support for large text
        files, it provides a reliable solution for anyone who works with digital content. Save time, improve
        consistency, and create cleaner text with just a few clicks using our free online whitespace remover.
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
      <p>Select a text file (.txt, .csv, .html, .xml, .json) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".txt,.csv,.html,.xml,.json">
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
      <h3 class="modal-title">Compare Text</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h4>Original Text</h4>
          <textarea id="originalText" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
        </div>
        <div>
          <h4>Cleaned Text</h4>
          <textarea id="cleanedText" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
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
    const textInput = document.getElementById('textInput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    
    // Whitespace options
    const removeOption = document.getElementById('removeOption');
    const lineBreakOption = document.getElementById('lineBreakOption');
    const tabOption = document.getElementById('tabOption');
    const trimLines = document.getElementById('trimLines');
    const removeEmptyLines = document.getElementById('removeEmptyLines');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const compareModal = document.getElementById('compareModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');
    const closeCompare = document.getElementById('closeCompare');
    const originalText = document.getElementById('originalText');
    const cleanedText = document.getElementById('cleanedText');
    

    // Store original text for comparison
    let originalTextContent = '';

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
      if (file.type === 'text/plain' || 
          file.name.endsWith('.txt') || 
          file.name.endsWith('.csv') || 
          file.name.endsWith('.html') || 
          file.name.endsWith('.xml') || 
          file.name.endsWith('.json')) {
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
        showAlert('Unsupported file format. Please upload a text file (TXT, CSV, HTML, XML, JSON).', 'error');
      }
    });

    function updateCounts() {
      const text = textInput.value;

      // Character count
      document.getElementById('charCount').textContent = text.length;

      // Word count (approximate)
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      document.getElementById('wordCount').textContent = words;

      // Line count
      const lineCount = text ? text.split(/\n/).length : 0;
      document.getElementById('lineCount').textContent = lineCount;

      // Space count
      const spaceCount = (text.match(/ /g) || []).length;
      document.getElementById('spaceCount').textContent = spaceCount;
    }

    function handleTextAction(action) {
      const text = textInput.value;
      
      // Store original text for comparison
      if (action === 'remove' || action === 'minify' || action === 'normalize') {
        originalTextContent = text;
      }

      switch (action) {
        case 'remove':
          textInput.value = removeExtraSpaces(text);
          showAlert('Extra spaces removed successfully!', 'success');
          break;

        case 'minify':
          textInput.value = minifyText(text);
          showAlert('Text minified successfully!', 'success');
          break;

        case 'normalize':
          textInput.value = normalizeSpaces(text);
          showAlert('Spaces normalized successfully!', 'success');
          break;

        case 'copy':
          copyToClipboard(text);
          break;

        case 'download':
          downloadText('cleaned_text.txt', text);
          break;

        case 'compare':
          if (!originalTextContent) {
            showAlert('Please clean or process text first to compare.', 'error');
            return;
          }
          originalText.value = originalTextContent;
          cleanedText.value = text;
          compareModal.style.display = 'block';
          break;

        case 'clear':
          textInput.value = '';
          originalTextContent = '';
          updateCounts();
          break;
      }

      updateCounts();
    }

    // Remove extra spaces function
    function removeExtraSpaces(text) {
      let processed = text;
      
      // Handle tabs first
      if (tabOption.value === 'spaces') {
        processed = processed.replace(/\t/g, '    '); // Convert tabs to 4 spaces
      } else if (tabOption.value === 'remove') {
        processed = processed.replace(/\t/g, ' '); // Replace tabs with single space
      }
      
      // Handle line breaks
      if (lineBreakOption.value === 'single') {
        processed = processed.replace(/\n\s*\n/g, '\n'); // Multiple line breaks to single
      } else if (lineBreakOption.value === 'remove') {
        processed = processed.replace(/\n/g, ' '); // Remove all line breaks
      }
      
      // Remove spaces based on selected option
      switch (removeOption.value) {
        case 'all':
          // Remove multiple spaces, trim lines, and handle all extra spaces
          processed = processed.split('\n').map(line => {
            if (trimLines.checked) {
              line = line.trim();
            }
            return line.replace(/\s+/g, ' ');
          }).join('\n');
          break;
          
        case 'multiple':
          // Only remove multiple consecutive spaces
          processed = processed.replace(/ {2,}/g, ' ');
          break;
          
        case 'trailing':
          // Only remove trailing spaces
          processed = processed.split('\n').map(line => line.replace(/\s+$/, '')).join('\n');
          break;
          
        case 'leading':
          // Only remove leading spaces
          processed = processed.split('\n').map(line => line.replace(/^\s+/, '')).join('\n');
          break;
      }
      
      // Remove empty lines if enabled
      if (removeEmptyLines.checked) {
        processed = processed.split('\n').filter(line => line.trim() !== '').join('\n');
      }
      
      return processed;
    }
    
    // Minify text function
    function minifyText(text) {
      // Remove all extra whitespace including line breaks
      return text.replace(/\s+/g, ' ').trim();
    }
    
    // Normalize spaces function
    function normalizeSpaces(text) {
      // Replace all whitespace (spaces, tabs, line breaks) with single spaces
      // but preserve paragraph breaks (multiple line breaks)
      let normalized = text.replace(/[ \t\r]+/g, ' '); // Replace spaces and tabs with single space
      normalized = normalized.replace(/\n /g, '\n'); // Remove spaces after line breaks
      normalized = normalized.replace(/ \n/g, '\n'); // Remove spaces before line breaks
      normalized = normalized.replace(/\n{3,}/g, '\n\n'); // Limit consecutive line breaks to 2
      
      return normalized.trim();
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Text copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy text: ' + err, 'error');
      });
    }

    function downloadText(filename, text) {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('Text downloaded successfully!', 'success');
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
---
layout: default
title: "Online XML Formatter - Format, Validate & Beautify XML"
permalink: /online-xml-formatter-format-validate-beautify/
---


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>XML Formatter Online — Format, Validate & Beautify XML Free</title>

<meta name="description"
  content="Format and validate XML instantly with our free XML Formatter tool. Fix XML syntax errors, improve indentation, and make your XML clean and readable — no signup needed.">

<meta name="keywords"
  content="xml formatter, xml beautifier, online xml validator, xml prettifier, format xml online, xml editor tool, xml syntax checker, xml parser online, xml code formatter">

<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="XML Formatter & Validator Online — Format XML Instantly">
<meta property="og:description" content="Beautify and validate XML code in one click. Easy-to-use online XML formatter with syntax highlighting and indentation.">
<meta property="og:url" content="https://toolesy.com/online-xml-formatter-format-validate-beautify">
<meta property="og:site_name" content="ToolEsy">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Online XML Formatter & Checker">
<meta name="twitter:description" content="Instant XML beautifier and validator. Format unreadable XML into clean and structured code for better readability.">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* XML Formatter Styles */
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
    font-family: monospace;
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

  /* XML specific styles */
  .xml-tag {
    color: #905;
  }

  .xml-attr-name {
    color: #07a;
  }

  .xml-attr-value {
    color: #690;
  }

  .xml-comment {
    color: #999;
  }

  .xml-content {
    color: #333;
  }

  .format-options {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 15px 0;
    padding: 15px;
    background: white;
    border-radius: 8px;
  }

  .format-option {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .format-option label {
    font-weight: 500;
    color: #555;
  }

  .format-option input[type="number"] {
    width: 60px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
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
  }
</style>

<div class="converter-container">
  <h1>Free Online XML Formatter & Validator</h1>
  <p class="welcome-message">Format, validate and beautify your XML code instantly. Make your XML readable with proper indentation and syntax highlighting. No signup required.</p>

  <div class="converter-section">
    <h2>XML Formatter & Validator</h2>

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
        <span>Element Count: </span>
        <span id="elementCount">0</span>
      </div>
      <div class="counter-item">
        <span>Attribute Count: </span>
        <span id="attributeCount">0</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input XML <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="xmlInput" rows="6" placeholder="Paste your XML code here...">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;catalog&gt;
&lt;book id="bk101"&gt;&lt;author&gt;Gambardella, Matthew&lt;/author&gt;&lt;title&gt;XML Developer's Guide&lt;/title&gt;&lt;genre&gt;Computer&lt;/genre&gt;&lt;price&gt;44.95&lt;/price&gt;&lt;publish_date&gt;2000-10-01&lt;/publish_date&gt;&lt;description&gt;An in-depth look at creating applications with XML.&lt;/description&gt;&lt;/book&gt;
&lt;book id="bk102"&gt;&lt;author&gt;Ralls, Kim&lt;/author&gt;&lt;title&gt;Midnight Rain&lt;/title&gt;&lt;genre&gt;Fantasy&lt;/genre&gt;&lt;price&gt;5.95&lt;/price&gt;&lt;publish_date&gt;2000-12-16&lt;/publish_date&gt;&lt;description&gt;A former architect battles corporate zombies, an evil sorceress, and her own childhood to become queen of the world.&lt;/description&gt;&lt;/book&gt;
&lt;/catalog&gt;</textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".xml,.txt" style="display: none;">

    <div class="format-options">
      <div class="format-option">
        <label for="indentSize">Indent Size:</label>
        <input type="number" id="indentSize" min="1" max="8" value="2">
      </div>
      <div class="format-option">
        <input type="checkbox" id="collapseEmpty" checked>
        <label for="collapseEmpty">Collapse empty elements</label>
      </div>
      <div class="format-option">
        <input type="checkbox" id="preserveComments" checked>
        <label for="preserveComments">Preserve comments</label>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="format">Format XML</button>
        <button class="case-button" data-action="minify">Minify XML</button>
        <button class="case-button" data-action="validate">Validate XML</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button" data-action="download">Download XML</button>
        <button class="case-button secondary" data-action="clear">Clear XML</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

      {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Before Formatting:</h3>
      <div class="example-text">&lt;?xml version="1.0" encoding="UTF-8"?&gt;&lt;catalog&gt;&lt;book id="bk101"&gt;&lt;author&gt;Gambardella, Matthew&lt;/author&gt;&lt;title&gt;XML Developer's Guide&lt;/title&gt;&lt;genre&gt;Computer&lt;/genre&gt;&lt;price&gt;44.95&lt;/price&gt;&lt;publish_date&gt;2000-10-01&lt;/publish_date&gt;&lt;description&gt;An in-depth look at creating applications with XML.&lt;/description&gt;&lt;/book&gt;&lt;/catalog&gt;</div>

      <h3>After Formatting:</h3>
      <div class="example-text">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;catalog&gt;
  &lt;book id="bk101"&gt;
    &lt;author&gt;Gambardella, Matthew&lt;/author&gt;
    &lt;title&gt;XML Developer's Guide&lt;/title&gt;
    &lt;genre&gt;Computer&lt;/genre&gt;
    &lt;price&gt;44.95&lt;/price&gt;
    &lt;publish_date&gt;2000-10-01&lt;/publish_date&gt;
    &lt;description&gt;An in-depth look at creating applications with XML.&lt;/description&gt;
  &lt;/book&gt;
&lt;/catalog&gt;</div>
    </div>
  </div>

  <!-- SEO Content Section -->
<div class="content-placeholder">
    <h2>Free Online XML Formatter Tool</h2>

    <p>Let’s be real—XML is everywhere, even in 2025. It might not be as trendy as JSON, but it powers SOAP APIs, RSS feeds, Android app configurations, Microsoft Office files (docx, xlsx), SVG graphics, and countless enterprise systems. But here's the thing: XML can get ugly fast. A perfectly valid XML document can look like a complete disaster. No indentation. No line breaks. Everything squished together in a massive string of angle brackets and text. You try to read it, but your eyes glaze over. You need to find a specific element, but you can't tell where one tag ends and the next begins. Maybe it's an API response, a configuration file, or a data export from a legacy system. Maybe you generated it yourself from code that doesn't bother with pretty-printing. Either way, you need to work with it, and working with unformatted XML is a special kind of torture. That's exactly why we built this <strong>XML Formatter tool</strong>. Paste in your messy, minified, or just poorly formatted XML, click a button, and in less than a second you get clean, readable, properly indented XML. Each element on its own line. Nested elements clearly indented. Attributes neatly aligned. Suddenly, a document that was impossible to read becomes crystal clear. You can see the hierarchy, spot missing closing tags, find the data you need, and fix errors in minutes. The tool also validates your XML—checking for well-formedness (matching tags, correct syntax) and pointing you to exactly where errors are. It's free. It's private (all processing happens in your browser, not on our servers). It works offline. And it will save you hours of squinting at unreadable angle brackets. Bookmark it. Use it daily. Your eyes—and your sanity—will thank you.</p>

    <h3>How to Use This XML Formatter (Step-by-Step):</h3>
    <ul>
      <li><strong>Paste Your XML (The Ugly Stuff):</strong> Copy your XML code from anywhere—an API response, a configuration file (like web.config or pom.xml), a database export, an RSS feed, or even an Android manifest. Paste it into the large input box. The tool doesn't care if it's one line or thousands of lines. It doesn't care if it's perfectly valid or has a few errors (though valid XML formats better). Just paste it and move on. The tool handles namespaces, CDATA sections, processing instructions, and all the other quirks of XML.</li>
      <li><strong>Format Options (Make It Your Style):</strong> XML formatting has a few common variations. You can choose the indentation size (1 to 8 spaces, or tabs). Most developers prefer 2 or 4 spaces. You can also choose whether to collapse empty elements. For example, `<element></element>` can become `<element />` (self-closing). Some people prefer the explicit opening and closing tags for clarity, while others prefer the shorter self-closing form. The tool lets you choose. Set it once, and the tool remembers your preferences for next time using local storage.</li>
      <li><strong>Format (Instant Cleanup):</strong> Click the "Format XML" button. The tool will parse your XML (in your browser, no server), add line breaks after each element, and indent nested elements consistently. Output appears instantly in the output box. What was once a wall of brackets is now a beautifully structured document. You can see the parent-child relationships, the attributes, the text content—everything.</li>
      <li><strong>Validate (Find the Bugs):</strong> Not sure if your XML is well-formed? Click "Validate XML." The tool checks for common syntax errors: unmatched opening/closing tags, incorrectly nested elements, missing quotes around attributes, invalid characters, and more. If there's an error, the tool will tell you the line number (approximately) and describe the problem. This is incredibly useful when you're debugging an API response or a configuration file that's failing to parse.</li>
      <li><strong>Copy or Download (Use It Where You Need):</strong> Once your XML is formatted, click "Copy" to grab it to your clipboard. Paste it into your code editor, your email, your documentation, your ticket system, or anywhere else. Or click "Download" to save it as a .xml file directly to your computer. No more selecting text, scrolling, and accidentally missing a closing tag.</li>
    </ul>

    <h3>Real-Life Example & Use Case (Meet Alex the API Integrator):</h3>
    <p>Alex is a software engineer integrating with a third-party SOAP API. The API returns XML responses that are minified—no line breaks, no indentation, just one long string. The API documentation is sparse, and Alex needs to understand the structure of the response to extract specific data fields. He runs a test request, copies the XML response from the API client, and looks at it. It's a nightmare. Hundreds of characters, no visual structure. He can't tell where the `<Customer>` element ends or where the `<Order>` elements begin.</p>
    <p>Alex opens our XML Formatter. He pastes the minified XML into the input box, sets indentation to 2 spaces, chooses to expand empty elements (keep `</element>` instead of `/>`), and clicks "Format XML." In less than a second, the tool produces a beautifully formatted XML document. He can now see the hierarchy clearly: the root `<Response>` element, the `<Customer>` child with its nested `<Name>` and `<Email>` elements, the list of `<Order>` elements, each with `<OrderID>` and `<Amount>`. He finds the data he needs, writes his extraction code, and moves on. What would have taken 20 minutes of squinting and guessing took 2 minutes with the formatter.</p>
    <p><strong>Another example:</strong> Maria is a DevOps engineer managing Kubernetes configurations. Her team uses a configuration management tool that outputs XML. One of the XML files is failing to parse, but the error message is vague. She pastes the config into the validator. The validator tells her: "Line 42: Unclosed tag `<server>`." She looks at line 42, finds the missing closing tag, fixes it, and the configuration works. Without the validator, she would have spent an hour manually scanning the file.</p>

    <h3>Benefits & Who Should Use This Tool (Probably You):</h3>
    <ul>
      <li><strong>Software Developers (All Stacks):</strong> You work with XML in many contexts: SOAP APIs, configuration files (Maven `pom.xml`, `.NET `app.config`, Spring XML configs), data serialization, and more. The formatter makes XML readable so you can debug faster. The validator catches syntax errors before they break your build or your application.</li>
      <li><strong>Data Analysts & ETL Developers:</strong> You receive XML data from various sources. You need to understand its structure before writing transformations. The formatter reveals the hierarchy of elements and attributes instantly. You can also validate that incoming XML is well-formed before processing it, catching errors early.</li>
      <li><strong>QA & Test Engineers:</strong> You're testing APIs that return XML. You need to verify that the response structure matches expectations. Formatting the response makes it easy to compare against expected output. The validator helps you ensure that malformed XML doesn't slip through to production.</li>
      <li><strong>DevOps & System Administrators:</strong> You manage configuration files for web servers (IIS), application servers (Tomcat), build tools (Maven, Ant), and many other systems. These are often XML. Keeping them formatted makes them easier to read, audit, and version control. The validator catches missing closing tags that could take down a server.</li>
      <li><strong>Students Learning XML:</strong> You're taking a course on XML, web services, or data formats. You write XML by hand, but you're not always sure if it's properly structured. Paste it into the formatter to see how it <em>should</em> look. Use the validator to catch errors and learn from your mistakes.</li>
      <li><strong>Technical Writers:</strong> You document APIs, configurations, or data formats that use XML. You need to include XML examples in your documentation. Well-formatted, syntax-highlighted XML looks professional and is easier for readers to understand. Use the formatter to clean up your examples before pasting them into your docs.</li>
      <li><strong>Android Developers:</strong> You work with `AndroidManifest.xml`, layout files, and resource files. These need to be well-structured. The formatter helps you maintain consistent indentation across your XML files, making them easier to navigate in your IDE.</li>
    </ul>

    <h3>Frequently Asked Questions (Real Answers):</h3>
    <p><strong>What is the difference between formatting and validating XML? When should I do each?</strong><br>
      <strong>Formatting</strong> improves readability by adding line breaks and indentation. It doesn't check for errors. Use formatting when you need to understand the structure of an XML document or make it presentable. <strong>Validating</strong> checks whether your XML is well-formed (follows XML syntax rules) and optionally valid against a schema (XSD). Use validation when your XML is failing to parse in your application and you need to find the syntax error. The tool's validator checks for well-formedness: matching tags, correct nesting, proper attribute syntax, and no illegal characters. It does not currently validate against an XSD schema (that would require uploading your XSD, which we don't do for privacy reasons). For 95% of use cases, well-formedness checking is what you need.</p>

    <p><strong>Is there a size limit? Can I format a huge XML file (like a 50MB data export)?</strong><br>
      The tool can handle very large XML documents—megabytes of data, tens of thousands of lines. However, if you paste a massive file (like 50 MB of XML), your browser might slow down or freeze because all the processing happens locally. For typical use—API responses, configuration files, modest data exports—you won't hit any limits. If you're working with truly enormous files, consider using a command-line tool like `xmllint --format`. But for 99% of real-world XML, the tool works perfectly.</p>

    <p><strong>Is my XML data kept private? Do you see my data?</strong><br>
      Absolutely, positively, 100% private. The XML formatter runs entirely in your browser using JavaScript. Your data never leaves your computer. When you paste XML into the input box, it stays there. When you click "Format" or "Validate," the processing happens locally. No data is sent to any server. We can't see your data. We don't store your data. You can prove this by disconnecting your internet after the page loads—the tool still works. That's how local it is. If you're working with sensitive configuration files, proprietary API responses, or customer data, this tool is safe to use.</p>

    <p><strong>What does "collapse empty elements" mean? Should I use it?</strong><br>
      In XML, an empty element (one with no content) can be written in two ways: `<element></element>` (explicit opening and closing tags) or `<element />` (self-closing). The self-closing form is shorter and often preferred for purely structural elements. "Collapse empty elements" converts the explicit form to the self-closing form. For example, `<name></name>` becomes `<name />`. This is purely a style choice. Some teams prefer explicit tags because they're easier to spot in a text editor. Others prefer self-closing because they're more compact. Choose whichever your team uses. The tool defaults to not collapsing (keeping explicit tags) because that's safer—you can always collapse later, but you can't easily expand self-closing tags back to explicit ones automatically.</p>

    <p><strong>How accurate is the XML validator?</strong><br>
      The validator is quite accurate for well-formedness checking. It detects: mismatched opening and closing tags (e.g., `<name>Alex</age>`), incorrectly nested tags (e.g., `<a><b></a></b>`), missing quotes around attribute values (e.g., `<element attr=value>`), unclosed tags (e.g., `<name>Alex` without closing `</name>`), and invalid characters (e.g., control characters not allowed in XML). It does NOT check: that the XML follows a specific schema (XSD), that attribute values are of the correct type, or that required elements are present. For those checks, you need a schema validator. The tool's validator is a first-pass check to catch syntax errors. If the validator says your XML is well-formed, it's syntactically correct—but it might still be semantically wrong for your application.</p>

    <p><strong>Can I use this tool on my mobile phone or tablet?</strong><br>
      Yes, it's fully responsive. The input box resizes to fit your screen. Buttons are big enough to tap. The copy and download functions work on mobile too (downloading a file on a phone saves it to your downloads folder or offers to share it). However, editing large XML files on a tiny screen is not the greatest experience—use a laptop or desktop if you can. For quick checks of small XML snippets, mobile works fine.</p>

    <p><strong>Do I need to create an account or pay for this?</strong><br>
      No. Never. This is completely free. There's no "premium version" with faster processing or larger file limits. There's no "sign up to unlock validation." There's no "free trial" that asks for your credit card. Just a tool that works, forever, at no cost. If you want to share it with a friend or colleague, go ahead. If you want to bookmark it and use it every day, even better. Free means free.</p>

    <h3>Why Choose Our XML Formatter (Over Others)?</h3>
    <p>There are many XML formatters online. I've used several. Here's what sets this one apart. <strong>Privacy first.</strong> Most online tools upload your XML to their server—a huge security risk for sensitive configuration files or proprietary data. Our tool processes everything locally. <strong>Offline capable.</strong> Once the page loads, you can disconnect from the internet and it still works. That's rare. <strong>Format + validate in one tool.</strong> Many tools only format. This one does both. <strong>Customizable.</strong> Indentation size, tabs vs spaces, collapsing empty elements. <strong>Fast.</strong> Even large files format in under a second. <strong>Clean output.</strong> The formatted XML is not just technically correct—it's human-readable. Proper nesting, consistent indentation, clear hierarchy. And it's free. No hidden costs. No "pro" features locked behind a paywall. Just a solid, reliable tool that does XML formatting and validation better than most paid alternatives.</p>

    <h3>Common Applications of XML Formatting (Real Use Cases):</h3>
    <ul>
      <li><strong>API Response Debugging:</strong> You call a SOAP or REST API that returns XML. The response is minified for performance. Copy it from the network tab, paste it into the formatter, and instantly understand the data structure. Find the field you need, check for error messages, verify the response matches the documentation.</li>
      <li><strong>Configuration File Management:</strong> You maintain `web.config` (IIS), `app.config` (.NET), `pom.xml` (Maven), `settings.xml` (various tools), or Android manifest files. These need to be readable for team members. Run them through the formatter periodically to keep them clean. Use the validator to catch syntax errors before they break the build.</li>
      <li><strong>Data Integration & ETL:</strong> You receive XML data from partners or legacy systems. Before writing transformations, format the XML to understand its structure. Identify the root element, the repeating elements, the attributes, and the text content. Document the structure for your team.</li>
      <li><strong>RSS Feed Consumption:</strong> You're building an RSS reader or analyzing feed data. RSS feeds are XML. Formatting a feed makes it easy to see the channel, items, titles, links, and descriptions. You can debug why a feed isn't parsing correctly by validating it and looking for syntax errors.</li>
      <li><strong>Technical Documentation:</strong> You're writing documentation for an API that returns XML, or a configuration format that uses XML. You need to include examples. Use the formatter to clean up your examples, then copy them into your docs. Well-formatted XML looks professional and reduces support questions.</li>
      <li><strong>Education & Training:</strong> You're teaching XML to students. Start with a poorly formatted XML document and ask them to fix it using the formatter. Then explain why indentation and structure matter. The validator helps students learn from their syntax mistakes.</li>
    </ul>

    <h3>Understanding XML Formatting (Why It Matters):</h3>
    <p>XML is a hierarchical data format. The structure is defined by nesting: parent elements contain child elements. But that hierarchy is invisible when the XML is unformatted. Here's why formatting matters. <strong>Readability:</strong> Properly indented XML reveals the parent-child relationships at a glance. You can see which elements are siblings, which are nested, where attributes belong. <strong>Debugging:</strong> Missing closing tags, incorrect nesting, and misplaced attributes are obvious in formatted XML. In unformatted XML, they're hidden in a wall of text. <strong>Collaboration:</strong> When teams share XML configuration or data files, consistent formatting reduces friction. Everyone can read and edit the file without mental translation. <strong>Version control:</strong> In Git, formatting changes show up as line differences. If the file is already formatted, diffs are limited to actual content changes. If it's unformatted, every commit might reformat the whole file, making history noisy. <strong>Professionalism:</strong> If you're sharing XML with clients, partners, or in open source, well-formatted XML signals that you care about quality.</p>

    <h3>Common XML Errors (And How the Validator Helps):</h3>
    <p>The validator catches these common mistakes. <strong>Unmatched tags:</strong> Every opening tag (`<element>`) must have a matching closing tag (`</element>`). The validator checks counts and nesting order. <strong>Case sensitivity:</strong> XML is case-sensitive. `<Name>` and `<name>` are different tags. The validator doesn't enforce case rules (it can't know what you intended), but it will catch mismatches where an opening tag uses one case and the closing tag uses another. <strong>Missing quotes:</strong> Attribute values must be in quotes (single or double). `<element attr=value>` is invalid; `<element attr="value">` is valid. The validator catches missing quotes. <strong>Invalid characters:</strong> XML has restrictions on characters (e.g., `&` must be escaped as `&amp;`). The validator will flag unescaped characters. <strong>Incorrect nesting:</strong> Elements must be properly nested—no overlapping. `<a><b></a></b>` is invalid because `<b>` closes after `<a>` closes. The validator catches this.</p>

    <h3>One Final Thought (XML Deserves Better):</h3>
    <p>XML gets a lot of hate these days. People say it's too verbose, too rigid, too old-fashioned. And sure, for some use cases, JSON is simpler. But XML is still a powerful, expressive, and widely used format. It handles mixed content (text plus elements), namespaces, comments, processing instructions, and more—things JSON can't do. And like any data format, it deserves to be written well. Readable XML is not a luxury. It's a necessity for maintenance, debugging, and collaboration. The formatter takes the pain out of formatting. It turns a wall of brackets into something you can actually work with. Next time you're staring at an XML response that looks like a cat walked across a keyboard, don't spend 20 minutes manually adding line breaks. Just paste it into the tool, click format, and get back to building things. Your eyes will thank you. Your teammates will thank you. And XML itself might just forgive you for all the times you've called it ugly.</p>
</div>
</div>

<!-- File Upload Modal -->
<div id="uploadModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Upload XML File</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Select an XML file (.xml or .txt) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".xml,.txt">
      <p id="fileInfo" class="file-info"></p>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelUpload">Cancel</button>
      <button class="modal-button primary" id="confirmUpload">Upload</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const xmlInput = document.getElementById('xmlInput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    
    // Format options
    const indentSize = document.getElementById('indentSize');
    const collapseEmpty = document.getElementById('collapseEmpty');
    const preserveComments = document.getElementById('preserveComments');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelector('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');
    

    // Initialize counters
    updateCounts();

    // Event listeners
    xmlInput.addEventListener('input', updateCounts);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleXmlAction(action);
      });
    });

    // Upload icon click handler - opens modal
    uploadIcon.addEventListener('click', function () {
      uploadModal.style.display = 'block';
    });

    // Close modal when clicking X
    closeModal.addEventListener('click', function() {
      uploadModal.style.display = 'none';
      modalFileUpload.value = '';
      fileInfo.textContent = '';
    });

    // Close modal when clicking cancel
    cancelUpload.addEventListener('click', function() {
      uploadModal.style.display = 'none';
      modalFileUpload.value = '';
      fileInfo.textContent = '';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === uploadModal) {
        uploadModal.style.display = 'none';
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
      if (file.type === 'text/xml' || file.type === 'text/plain' || 
          file.name.endsWith('.xml') || file.name.endsWith('.txt')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          xmlInput.value = e.target.result;
          updateCounts();
          showAlert('XML file uploaded successfully!', 'success');
          uploadModal.style.display = 'none';
          modalFileUpload.value = '';
          fileInfo.textContent = '';
        };
        reader.onerror = function () {
          showAlert('Error reading the XML file.', 'error');
        };
        reader.readAsText(file);
      } else {
        showAlert('Unsupported file format. Please upload an XML or TXT file.', 'error');
      }
    });

    function updateCounts() {
      const text = xmlInput.value;

      // Character count
      document.getElementById('charCount').textContent = text.length;

      // Line count
      const lineCount = text ? text.split(/\n/).length : 0;
      document.getElementById('lineCount').textContent = lineCount;

      // Element count (rough estimate)
      const elementCount = (text.match(/<[^!][^>]*>/g) || []).length;
      document.getElementById('elementCount').textContent = elementCount;

      // Attribute count (rough estimate)
      const attributeCount = (text.match(/\s+\w+\s*=/g) || []).length;
      document.getElementById('attributeCount').textContent = attributeCount;
    }

    function handleXmlAction(action) {
      const xml = xmlInput.value;

      switch (action) {
        case 'format':
          formatXml();
          break;

        case 'minify':
          minifyXml();
          break;

        case 'validate':
          validateXml();
          break;

        case 'copy':
          copyToClipboard(xml);
          break;

        case 'download':
          downloadXml('formatted_xml.xml', xml);
          break;

        case 'clear':
          xmlInput.value = '';
          updateCounts();
          break;
      }

      updateCounts();
    }

    // XML formatting functions
    function formatXml() {
      try {
        const xml = xmlInput.value;
        if (!xml.trim()) {
          showAlert('Please enter some XML to format.', 'error');
          return;
        }

        const formatted = formatXmlString(xml, parseInt(indentSize.value), collapseEmpty.checked, preserveComments.checked);
        xmlInput.value = formatted;
        showAlert('XML formatted successfully!', 'success');
      } catch (error) {
        showAlert('Error formatting XML: ' + error.message, 'error');
      }
    }

    function minifyXml() {
      try {
        const xml = xmlInput.value;
        if (!xml.trim()) {
          showAlert('Please enter some XML to minify.', 'error');
          return;
        }

        const minified = minifyXmlString(xml);
        xmlInput.value = minified;
        showAlert('XML minified successfully!', 'success');
      } catch (error) {
        showAlert('Error minifying XML: ' + error.message, 'error');
      }
    }

    function validateXml() {
      try {
        const xml = xmlInput.value;
        if (!xml.trim()) {
          showAlert('Please enter some XML to validate.', 'error');
          return;
        }

        // Basic XML validation
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xml, "text/xml");
        
        if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
          const error = xmlDoc.getElementsByTagName("parsererror")[0].textContent;
          showAlert('XML validation failed: ' + error, 'error');
        } else {
          showAlert('XML is well-formed and valid!', 'success');
        }
      } catch (error) {
        showAlert('Error validating XML: ' + error.message, 'error');
      }
    }

    function formatXmlString(xml, indentSize, collapseEmptyElements, preserveComments) {
      let formatted = '';
      let indent = 0;
      const tab = ' '.repeat(indentSize);
      
      // Split by tags but preserve comments and CDATA
      const tagRegex = /(<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>|<[^>]+>|[^<]+)/g;
      const tokens = xml.match(tagRegex) || [];
      
      for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        
        // Handle comments
        if (token.startsWith('<!--')) {
          if (preserveComments) {
            formatted += '\n' + tab.repeat(indent) + token;
          }
          continue;
        }
        
        // Handle CDATA
        if (token.startsWith('<![CDATA[')) {
          formatted += '\n' + tab.repeat(indent) + token;
          continue;
        }
        
        // Handle closing tags
        if (token.startsWith('</')) {
          indent--;
          formatted += '\n' + tab.repeat(indent) + token;
        } 
        // Handle self-closing tags
        else if (token.endsWith('/>') && collapseEmptyElements) {
          formatted += '\n' + tab.repeat(indent) + token;
        }
        // Handle opening tags
        else if (token.startsWith('<') && !token.startsWith('<?xml')) {
          formatted += '\n' + tab.repeat(indent) + token;
          if (!token.endsWith('/>') && !token.startsWith('<!')) {
            indent++;
          }
        }
        // Handle XML declaration
        else if (token.startsWith('<?xml')) {
          formatted += token;
        }
        // Handle text content
        else {
          const trimmed = token.trim();
          if (trimmed) {
            formatted += trimmed;
          }
        }
      }
      
      return formatted.trim();
    }

    function minifyXmlString(xml) {
      // Remove comments
      let minified = xml.replace(/<!--[\s\S]*?-->/g, '');
      
      // Remove unnecessary whitespace between tags
      minified = minified.replace(/>\s+</g, '><');
      
      // Trim whitespace
      minified = minified.trim();
      
      return minified;
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('XML copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy XML: ' + err, 'error');
      });
    }

    function downloadXml(filename, text) {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('XML downloaded successfully!', 'success');
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
---
layout: default
title: "Online Notepad - Free Text Editor for Notes"
permalink: /online-notepad-free-text-editor-for-notes/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Online Notepad - Free Text Editor for Notes</title>

<meta name="description" content="Free Online Notepad with Microsoft Word style editor. Create, edit, and format documents instantly. Supports bold, italic, font styles, downloadable files & auto-save. No login required!">

<meta name="keywords" content="online notepad, word style editor, rich text editor, format text online, document editor free, notepad online, online writing tool, web based text editor, edit text online, create documents online">

<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph Tags for Social Sharing -->
<meta property="og:title" content="Free Online Notepad | Word Style Writing Tool">
<meta property="og:description" content="Write and format documents online like MS Word. Bold, italic, lists, export & auto save. 100% free.">
<meta property="og:url" content="https://toolesy.com/online-notepad-free-text-editor-for-notes">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Online Notepad - Rich Text Editor">
<meta name="twitter:description" content="MS Word-like free editor. Write, edit, format & download text online.">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Notepad Styles */
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

  /* Toolbar Styles */
  .toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    padding: 10px;
    background: #f1f3f4;
    border: 1px solid #dadce0;
    border-radius: 4px;
    margin-bottom: 15px;
  }

  .toolbar-group {
    display: flex;
    border-right: 1px solid #dadce0;
    padding-right: 10px;
    margin-right: 10px;
  }

  .toolbar-group:last-child {
    border-right: none;
    margin-right: 0;
  }

  .toolbar-button {
    background: white;
    border: 1px solid #dadce0;
    border-radius: 4px;
    padding: 6px 10px;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    height: 36px;
    transition: all 0.2s;
  }

  .toolbar-button:hover {
    background: #f8f9fa;
    border-color: #c4c7c5;
  }

  .toolbar-button.active {
    background: #e8f0fe;
    border-color: #1a73e8;
  }

  .toolbar-select {
    padding: 6px 8px;
    border: 1px solid #dadce0;
    border-radius: 4px;
    background: white;
    font-size: 14px;
    height: 36px;
  }

  .color-picker {
    width: 36px;
    height: 36px;
    padding: 2px;
    border: 1px solid #dadce0;
    border-radius: 4px;
    cursor: pointer;
  }

  /* Editor Styles */
  .editor-container {
    border: 1px solid #dadce0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    background: white;
  }

  #notepadEditor {
    width: 100%;
    min-height: 500px;
    padding: 20px;
    border: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    resize: vertical;
    outline: none;
  }

  #notepadEditor:focus {
    outline: none;
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

    .toolbar {
      flex-direction: column;
      align-items: flex-start;
    }

    .toolbar-group {
      border-right: none;
      margin-right: 0;
      margin-bottom: 10px;
      padding-right: 0;
      flex-wrap: wrap;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Notepad - Microsoft Word Style</h1>
  <p class="welcome-message">Create, edit, and format documents with our free online notepad. Features a familiar Microsoft Word-like interface with all essential formatting tools.</p>

  <div class="converter-section">
    <h2>Online Notepad</h2>

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
        <span>Paragraph Count: </span>
        <span id="paragraphCount">0</span>
      </div>
    </div>

    <!-- Toolbar -->
    <div class="toolbar">
      <div class="toolbar-group">
        <select class="toolbar-select" id="fontFamily">
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Verdana">Verdana</option>
          <option value="Tahoma">Tahoma</option>
        </select>
        
        <select class="toolbar-select" id="fontSize">
          <option value="1">8pt</option>
          <option value="2">10pt</option>
          <option value="3">12pt</option>
          <option value="4">14pt</option>
          <option value="5">18pt</option>
          <option value="6">24pt</option>
          <option value="7">36pt</option>
        </select>
      </div>
      
      <div class="toolbar-group">
        <button class="toolbar-button" data-command="bold" title="Bold"><i class="fas fa-bold"></i></button>
        <button class="toolbar-button" data-command="italic" title="Italic"><i class="fas fa-italic"></i></button>
        <button class="toolbar-button" data-command="underline" title="Underline"><i class="fas fa-underline"></i></button>
        <button class="toolbar-button" data-command="strikeThrough" title="Strikethrough"><i class="fas fa-strikethrough"></i></button>
      </div>
      
      <div class="toolbar-group">
        <button class="toolbar-button" data-command="justifyLeft" title="Align Left"><i class="fas fa-align-left"></i></button>
        <button class="toolbar-button" data-command="justifyCenter" title="Align Center"><i class="fas fa-align-center"></i></button>
        <button class="toolbar-button" data-command="justifyRight" title="Align Right"><i class="fas fa-align-right"></i></button>
        <button class="toolbar-button" data-command="justifyFull" title="Justify"><i class="fas fa-align-justify"></i></button>
      </div>
      
      <div class="toolbar-group">
        <button class="toolbar-button" data-command="insertUnorderedList" title="Bullet List"><i class="fas fa-list-ul"></i></button>
        <button class="toolbar-button" data-command="insertOrderedList" title="Numbered List"><i class="fas fa-list-ol"></i></button>
        <button class="toolbar-button" data-command="outdent" title="Decrease Indent"><i class="fas fa-outdent"></i></button>
        <button class="toolbar-button" data-command="indent" title="Increase Indent"><i class="fas fa-indent"></i></button>
      </div>
      
      <div class="toolbar-group">
        <input type="color" class="color-picker" id="textColor" title="Text Color">
        <input type="color" class="color-picker" id="highlightColor" title="Highlight Color">
        <button class="toolbar-button" data-command="removeFormat" title="Clear Formatting"><i class="fas fa-eraser"></i></button>
      </div>
    </div>

    <!-- Editor -->
    <div class="editor-container">
      <div id="notepadEditor" contenteditable="true">
        <p>Start typing your document here...</p>
      </div>
    </div>

    <div class="file-upload-section">
      <div class="file-upload-button" id="uploadButton">
        <i class="fas fa-upload"></i> Upload Document
      </div>
      <span id="fileName">No file selected</span>
      
      <!-- Hidden file input -->
      <input type="file" id="fileUpload" accept=".txt,.doc,.docx,.rtf" style="display: none;">
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="new">New Document</button>
        <button class="case-button" data-action="save">Save as TXT</button>
        <button class="case-button" data-action="saveDoc">Save as DOC</button>
        <button class="case-button" data-action="print">Print</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button success" data-action="download">Download</button>
        <button class="case-button secondary" data-action="clear">Clear All</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="examples">
      <h2>Notepad Features</h2>

      <h3>Text Formatting:</h3>
      <div class="example-text">• Bold, Italic, Underline, Strikethrough
• Font family and size selection
• Text and highlight colors
• Paragraph alignment (left, center, right, justify)</div>

      <h3>Document Structure:</h3>
      <div class="example-text">• Bullet points and numbered lists
• Indentation controls
• Word, character, line, and paragraph counting
• Full document editing with rich text support</div>

      <h3>File Operations:</h3>
      <div class="example-text">• Upload existing documents
• Save in multiple formats (TXT, DOC)
• Print directly from browser
• Copy content to clipboard</div>
    </div>
  </div>

 
<!-- SEO Content Section -->
<div class="content-placeholder">

  <h2>Free Online Notepad – Write, Edit & Format Documents Directly in Your Browser</h2>

  <p>
    Need a simple yet powerful place to write notes, draft documents, or edit text without installing software? Our
    <strong>Free Online Notepad</strong> gives you a clean and familiar writing environment that works directly inside
    your browser. Whether you're creating a quick note, preparing a business document, drafting a blog post, or working
    on a school assignment, this online editor provides the tools you need to write efficiently from any device.
  </p>

  <p>
    Unlike traditional notepad applications that offer only basic text editing, our browser-based editor includes
    formatting options similar to those found in popular word processors. You can make text bold, italicize important
    sections, adjust font sizes, create lists, align paragraphs, and organize your content professionally without
    downloading any software.
  </p>

  <p>
    The best part is that everything happens locally within your browser. Your content remains private, secure, and
    under your control. There are no accounts to create, no subscriptions to purchase, and no complicated setup
    process. Simply open the page and start writing immediately.
  </p>

  <h3>What Is an Online Notepad?</h3>

  <p>
    An online notepad is a web-based text editor that allows users to write, edit, and format documents directly from a
    browser. It provides many of the features found in desktop word-processing applications while eliminating the need
    for installation or software updates.
  </p>

  <p>
    Because it runs online, you can access the editor from virtually any device, including desktop computers, laptops,
    tablets, and smartphones. This flexibility makes it ideal for students, professionals, writers, and anyone who
    needs a convenient place to create or edit text documents.
  </p>

  <p>
    Whether you're taking meeting notes, drafting an article, preparing a letter, or organizing research, an online
    notepad provides a simple and accessible solution.
  </p>

  <h3>How to Use This Online Notepad</h3>

  <p>
    Using the editor is straightforward, even if you've never worked with an online document editor before.
  </p>

  <ul>
    <li>
      <strong>Start Writing</strong><br>
      Click anywhere inside the editor area and begin typing. The writing experience feels familiar and intuitive,
      similar to common word-processing applications.
    </li>

    <li>
      <strong>Apply Formatting</strong><br>
      Use the toolbar to make text bold, italic, underlined, change font styles, adjust text sizes, and customize the
      appearance of your document.
    </li>

    <li>
      <strong>Organize Your Content</strong><br>
      Create numbered lists, bullet points, headings, and aligned paragraphs to structure your document clearly.
    </li>

    <li>
      <strong>Review Your Work</strong><br>
      Check document statistics such as word count, character count, and overall content length.
    </li>

    <li>
      <strong>Save or Export</strong><br>
      Download your document, print it directly, or copy the content for use in other applications.
    </li>
  </ul>

  <h3>Real-Life Example</h3>

  <p>
    Imagine you're traveling and suddenly need to prepare an important business proposal before a meeting. You don't
    have access to your regular office computer or installed word-processing software. Instead of searching for
    applications to install, you can open this online notepad in your browser and start working immediately.
  </p>

  <p>
    You can create headings, format key points, insert bullet lists, and prepare a professional-looking document within
    minutes. Once finished, simply download, print, or share the content as needed.
  </p>

  <p>
    This convenience makes online editors invaluable for modern work, study, and communication.
  </p>

  <h3>Benefits of Using an Online Notepad</h3>

  <ul>
    <li>
      <strong>No Installation Required</strong><br>
      Access the editor instantly without downloading software or managing updates.
    </li>

    <li>
      <strong>Works Everywhere</strong><br>
      Use the editor on Windows, Mac, Linux, Android, and iOS devices.
    </li>

    <li>
      <strong>Fast and Lightweight</strong><br>
      Start writing immediately without waiting for large applications to load.
    </li>

    <li>
      <strong>Privacy Focused</strong><br>
      Your content remains on your device because processing happens locally in the browser.
    </li>

    <li>
      <strong>Professional Formatting Tools</strong><br>
      Create polished documents with formatting options typically found in premium software.
    </li>

    <li>
      <strong>Accessible Anywhere</strong><br>
      All you need is a web browser to begin writing and editing.
    </li>
  </ul>

  <h3>Who Should Use This Online Notepad?</h3>

  <ul>
    <li>
      <strong>Students</strong><br>
      Write essays, prepare assignments, create study notes, and organize research materials.
    </li>

    <li>
      <strong>Professionals</strong><br>
      Draft reports, proposals, meeting notes, and business communications.
    </li>

    <li>
      <strong>Writers & Bloggers</strong><br>
      Create articles, stories, scripts, and web content with ease.
    </li>

    <li>
      <strong>Teachers & Educators</strong><br>
      Prepare lesson plans, worksheets, classroom notes, and educational resources.
    </li>

    <li>
      <strong>Remote Workers</strong><br>
      Access a reliable writing tool from any location without depending on installed software.
    </li>

    <li>
      <strong>Everyday Users</strong><br>
      Keep personal notes, reminders, to-do lists, and important information organized.
    </li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p>
    <strong>Is this online notepad completely free?</strong><br>
    Yes. You can use all core editing features without paying any fees or creating an account.
  </p>

  <p>
    <strong>Do I need to register before using the editor?</strong><br>
    No. Simply open the page and start writing immediately.
  </p>

  <p>
    <strong>Can I use this notepad on mobile devices?</strong><br>
    Absolutely. The editor is optimized for smartphones, tablets, laptops, and desktop computers.
  </p>

  <p>
    <strong>Are my documents private?</strong><br>
    Yes. Your content is processed locally within your browser and is not uploaded to external servers.
  </p>

  <p>
    <strong>Can I save my documents?</strong><br>
    Yes. You can download, print, or copy your content whenever needed.
  </p>

  <p>
    <strong>Does it support formatting?</strong><br>
    Yes. The editor supports text formatting such as bold, italic, underline, alignment, lists, headings, and more.
  </p>

  <p>
    <strong>Can I edit long documents?</strong><br>
    Yes. The editor can comfortably handle articles, reports, essays, and lengthy documents.
  </p>

  <h3>Why Choose Our Online Notepad?</h3>

  <p>
    There are many text editors available online, but not all provide the right balance of simplicity, functionality,
    and privacy. Our online notepad is designed for users who want a familiar writing experience without unnecessary
    complexity.
  </p>

  <p>
    The interface is clean and easy to understand, making it suitable for beginners while still offering enough
    features for professional document creation. Because everything works directly in the browser, you avoid software
    installations, compatibility issues, and system requirements.
  </p>

  <p>
    Most importantly, your privacy remains protected. Unlike cloud-based editors that require accounts and store files
    remotely, this tool keeps your content under your control.
  </p>

  <h3>Common Uses of an Online Notepad</h3>

  <ul>
    <li><strong>Note Taking:</strong> Capture ideas, reminders, and meeting notes quickly.</li>
    <li><strong>Essay Writing:</strong> Draft school assignments and academic papers.</li>
    <li><strong>Business Documents:</strong> Prepare reports, proposals, and professional correspondence.</li>
    <li><strong>Blog Content:</strong> Write and edit articles before publishing.</li>
    <li><strong>Personal Journals:</strong> Maintain daily notes and personal records.</li>
    <li><strong>Research Projects:</strong> Organize information and references efficiently.</li>
    <li><strong>Task Management:</strong> Create to-do lists and project plans.</li>
    <li><strong>Content Drafting:</strong> Prepare social media posts, newsletters, and marketing copy.</li>
  </ul>

  <h3>Features That Improve Productivity</h3>

  <p>
    Productivity matters whether you're writing a simple note or a detailed report. Our online notepad includes several
    features that help streamline the writing process.
  </p>

  <ul>
    <li>Easy-to-use formatting toolbar</li>
    <li>Word and character counting tools</li>
    <li>Document structure support with headings and lists</li>
    <li>Quick copy and export options</li>
    <li>Responsive design for mobile and desktop users</li>
    <li>Fast performance with minimal loading time</li>
  </ul>

  <h3>Final Thoughts</h3>

  <p>
    A reliable online notepad is one of the most useful tools for modern writing and document creation. Whether you're
    taking notes, drafting articles, preparing business documents, or simply organizing your thoughts, having instant
    access to a browser-based editor can save valuable time and effort.
  </p>

  <p>
    Our Free Online Notepad combines ease of use, professional formatting tools, strong privacy protection, and
    cross-device compatibility in a single convenient solution. Open the editor, start writing, and experience a faster
    and more flexible way to create documents online.
  </p>

</div>



<!-- File Upload Modal -->
<div id="uploadModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Upload Document</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Select a document file (.txt, .doc, .docx) to upload its content to the editor.</p>
      <input type="file" id="modalFileUpload" accept=".txt,.doc,.docx,.rtf">
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
    const notepadEditor = document.getElementById('notepadEditor');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadButton = document.getElementById('uploadButton');
    const fileName = document.getElementById('fileName');
    
    // Toolbar elements
    const toolbarButtons = document.querySelectorAll('.toolbar-button');
    const fontFamily = document.getElementById('fontFamily');
    const fontSize = document.getElementById('fontSize');
    const textColor = document.getElementById('textColor');
    const highlightColor = document.getElementById('highlightColor');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');

    // Initialize counters
    updateCounts();

    // Event listeners
    notepadEditor.addEventListener('input', updateCounts);
    notepadEditor.addEventListener('paste', function(e) {
      // Allow paste but clean up formatting if needed
      setTimeout(updateCounts, 10);
    });

    // Toolbar button events
    toolbarButtons.forEach(button => {
      button.addEventListener('click', function() {
        const command = this.getAttribute('data-command');
        document.execCommand(command, false, null);
        notepadEditor.focus();
        updateCounts();
      });
    });

    // Font family change
    fontFamily.addEventListener('change', function() {
      document.execCommand('fontName', false, this.value);
      notepadEditor.focus();
    });

    // Font size change
    fontSize.addEventListener('change', function() {
      document.execCommand('fontSize', false, this.value);
      notepadEditor.focus();
    });

    // Text color change
    textColor.addEventListener('change', function() {
      document.execCommand('foreColor', false, this.value);
      notepadEditor.focus();
    });

    // Highlight color change
    highlightColor.addEventListener('change', function() {
      document.execCommand('hiliteColor', false, this.value);
      notepadEditor.focus();
    });

    // Case button events
    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleNotepadAction(action);
      });
    });

    // Upload button click handler - opens modal
    uploadButton.addEventListener('click', function () {
      uploadModal.style.display = 'block';
    });

    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        uploadModal.style.display = 'none';
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
      if (file.type.includes('text') || 
          file.name.endsWith('.txt') || 
          file.name.endsWith('.doc') || 
          file.name.endsWith('.docx') ||
          file.name.endsWith('.rtf')) {
        
        const reader = new FileReader();
        reader.onload = function (e) {
          // For simple text files, just set the content
          if (file.type.includes('text') || file.name.endsWith('.txt')) {
            notepadEditor.innerHTML = e.target.result.replace(/\n/g, '<br>');
          } else {
            // For other formats, we'll just show the text content
            // In a real application, you would use a library to parse DOC/DOCX files
            notepadEditor.innerHTML = `<p>File uploaded: ${file.name}</p><p>Note: For full DOC/DOCX support, please convert to text format first.</p>`;
          }
          updateCounts();
          showAlert('Document uploaded successfully!', 'success');
          uploadModal.style.display = 'none';
          modalFileUpload.value = '';
          fileInfo.textContent = '';
          fileName.textContent = file.name;
        };
        reader.onerror = function () {
          showAlert('Error reading the document file.', 'error');
        };
        reader.readAsText(file);
      } else {
        showAlert('Unsupported file format. Please upload a text, DOC, or DOCX file.', 'error');
      }
    });

    function updateCounts() {
      const text = notepadEditor.innerText || notepadEditor.textContent;
      
      // Character count
      document.getElementById('charCount').textContent = text.length;
      
      // Word count (approximate)
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      document.getElementById('wordCount').textContent = words;
      
      // Line count
      const lines = text ? text.split(/\n/).length : 0;
      document.getElementById('lineCount').textContent = lines;
      
      // Paragraph count
      const paragraphs = notepadEditor.querySelectorAll('p').length;
      document.getElementById('paragraphCount').textContent = paragraphs;
    }

    function handleNotepadAction(action) {
      switch (action) {
        case 'new':
          notepadEditor.innerHTML = '<p>Start typing your document here...</p>';
          fileName.textContent = 'No file selected';
          showAlert('New document created!', 'success');
          break;

        case 'save':
          downloadDocument('document.txt', notepadEditor.innerText, 'text/plain');
          break;

        case 'saveDoc':
          downloadDocument('document.doc', notepadEditor.innerHTML, 'application/msword');
          break;

        case 'print':
          window.print();
          break;

        case 'copy':
          copyToClipboard(notepadEditor.innerText);
          break;

        case 'download':
          downloadDocument('document.html', notepadEditor.innerHTML, 'text/html');
          break;

        case 'clear':
          notepadEditor.innerHTML = '';
          fileName.textContent = 'No file selected';
          updateCounts();
          showAlert('Document cleared!', 'success');
          break;
      }

      updateCounts();
    }

    function downloadDocument(filename, text, mimeType) {
      const element = document.createElement('a');
      
      // For DOC files, we need to create a specific structure
      if (mimeType === 'application/msword') {
        const docContent = `
<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="utf-8">
<title>Document</title>
<!--[if gte mso 9]>
<xml>
<w:WordDocument>
<w:View>Print</w:View>
<w:Zoom>100</w:Zoom>
<w:DoNotOptimizeForBrowser/>
</w:WordDocument>
</xml>
<![endif]-->
<style>
body {
  font-family: Arial, sans-serif;
  font-size: 12pt;
}
</style>
</head>
<body>
${notepadEditor.innerHTML}
</body>
</html>`;
        element.setAttribute('href', 'data:application/msword;charset=utf-8,' + encodeURIComponent(docContent));
      } else {
        element.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(text));
      }
      
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('Document downloaded successfully!', 'success');
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Document copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy document: ' + err, 'error');
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
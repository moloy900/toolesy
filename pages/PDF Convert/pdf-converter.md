---
layout: default
title: "Online PDF Converter - Convert PDF to Image Formats"
permalink: /online-pdf-converter-convert-pdf-to-image-formats/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online PDF Converter - Convert PDF to JPG, PNG, TIFF</title>
<meta name="description"
  content="Free online PDF converter tool. Convert PDF files to JPG, PNG, TIFF, HTML, ODT, EPUB formats. Extract images from PDFs. No registration required.">
<meta name="keywords"
  content="pdf converter, convert pdf, pdf to jpg, pdf to png, pdf to tiff, pdf to images, extract images from pdf, pdf tools">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<!-- PDF Libraries -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>

<style>
  /* PDF Converter Styles */
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

  .upload-section {
    margin: 20px 0;
    padding: 30px;
    background: white;
    border: 3px dashed #e0e6ed;
    border-radius: 15px;
    text-align: center;
    transition: all 0.3s ease;
  }

  .upload-section:hover {
    border-color: var(--primary);
    background: #f8f9fa;
  }

  .upload-section i {
    font-size: 4rem;
    color: var(--primary);
    margin-bottom: 20px;
  }

  .upload-section h3 {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.5rem;
  }

  .upload-section p {
    color: #666;
    margin-bottom: 20px;
  }

  .file-upload-button {
    padding: 12px 30px;
    background: var(--primary);
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
    border: none;
    font-size: 1rem;
  }

  .file-upload-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .file-list-section {
    margin: 30px 0;
  }

  .file-list {
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid #e0e6ed;
    border-radius: 10px;
    background: white;
  }

  .file-item {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.3s ease;
  }

  .file-item:hover {
    background: #f8f9fa;
  }

  .file-item:last-child {
    border-bottom: none;
  }

  .file-icon {
    font-size: 1.5rem;
    color: #e74c3c;
    margin-right: 15px;
  }

  .file-info {
    flex: 1;
  }

  .file-name {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .file-size {
    font-size: 0.9rem;
    color: #7f8c8d;
  }

  .file-actions {
    display: flex;
    gap: 10px;
  }

  .file-action-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    padding: 5px;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .file-action-btn:hover {
    background: #f0f0f0;
  }

  .remove-file {
    color: #e74c3c;
  }

  .empty-state {
    text-align: center;
    padding: 40px 20px;
    color: #7f8c8d;
  }

  .empty-state i {
    font-size: 3rem;
    margin-bottom: 15px;
    color: #bdc3c7;
  }

  .options-section {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
  }

  .conversion-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 15px;
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
    background: white;
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

  .case-button:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .progress-section {
    margin: 20px 0;
    display: none;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .progress-fill {
    height: 100%;
    background: var(--primary);
    border-radius: 4px;
    transition: width 0.3s ease;
    width: 0%;
  }

  .progress-text {
    text-align: center;
    color: #666;
    font-size: 0.9rem;
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

  .alert-info {
    background-color: #d1ecf1;
    color: #0c5460;
    border: 1px solid #bee5eb;
  }

  .alert .close {
    cursor: pointer;
    font-weight: bold;
  }

  .output-container {
    margin: 20px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    border: 1px solid #e0e0e0;
    display: none;
  }

  .output-container h3 {
    color: var(--primary);
    margin-bottom: 15px;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 10px;
  }

  .output-item {
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #f0f0f0;
    gap: 15px;
  }

  .output-item:last-child {
    border-bottom: none;
  }

  .output-image {
    max-width: 200px;
    max-height: 200px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
  }

  .download-btn {
    padding: 8px 15px;
    background: var(--success);
    color: white;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
  }

  .download-btn:hover {
    background: #218838;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

    .conversion-options {
      grid-template-columns: 1fr;
    }

    .file-item {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    .file-actions {
      align-self: flex-end;
    }

    .output-item {
      flex-direction: column;
      align-items: flex-start;
    }

    .output-image {
      max-width: 100%;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online PDF Converter</h1>
  <p class="welcome-message">Convert PDF files to JPG, PNG, TIFF Images formats. Extract images from PDFs. No registration required - 100% free!</p>

  <div class="converter-section">
    <h2>PDF Converter</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Selected File: </span>
        <span id="fileName">None</span>
      </div>
      <div class="counter-item">
        <span>File Size: </span>
        <span id="fileSize">0 MB</span>
      </div>
      <div class="counter-item">
        <span>Pages: </span>
        <span id="pageCount">0</span>
      </div>
      <div class="counter-item">
        <span>Estimated Time: </span>
        <span id="estimatedTime">0 seconds</span>
      </div>
    </div>

    <div class="upload-section" id="dropArea">
      <i class="fas fa-file-pdf"></i>
      <h3>Drag & Drop PDF File Here</h3>
      <p>or click the button below to select a file</p>
      <button class="file-upload-button" id="selectFileBtn">
        <i class="fas fa-plus"></i> Select PDF File
      </button>
      <p class="file-info">Maximum file size: 50 MB</p>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".pdf" style="display: none;">

    <div class="file-list-section">
      <h3>Selected File</h3>
      <div class="file-list" id="fileList">
        <div class="empty-state">
          <i class="fas fa-folder-open"></i>
          <p>No PDF file selected yet</p>
          <p>Drag and drop a file or click the select button above</p>
        </div>
      </div>
    </div>

    <div class="options-section">
      <h3>Conversion Options</h3>
      <div class="conversion-options">
        <div class="option-group">
          <label class="option-label">Output Format</label>
          <select id="format-select" class="option-select">
            <option value="jpg">JPG Images</option>
            <option value="png">PNG Images</option>
            <option value="tiff">TIFF Images</option>
            <option value="extract-images">Extract Images</option>
          </select>
        </div>
        
        <div class="option-group">
          <label class="option-label">Quality</label>
          <select id="quality" class="option-select">
            <option value="high">High</option>
            <option value="medium" selected>Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        
        <div class="option-group">
          <label class="option-label">Output Filename</label>
          <input type="text" id="outputFilename" class="option-input" value="converted" placeholder="Enter filename">
        </div>
        
        <div class="option-group">
          <div class="option-checkbox">
            <input type="checkbox" id="preserveLayout" checked>
            <label for="preserveLayout">Preserve Layout</label>
          </div>
          <div class="option-checkbox">
            <input type="checkbox" id="extractText" checked>
            <label for="extractText">Extract Text</label>
          </div>
          <div class="option-checkbox">
            <input type="checkbox" id="optimizeImages">
            <label for="optimizeImages">Optimize Images</label>
          </div>
        </div>
      </div>
    </div>

    <div class="progress-section" id="progressSection">
      <div class="progress-bar">
        <div class="progress-fill" id="progressFill"></div>
      </div>
      <div class="progress-text" id="progressText">Processing...</div>
    </div>

    <div class="button-section">
      <button class="case-button" data-action="convert" id="convert-btn" disabled>Convert PDF</button>
      <button class="case-button secondary" data-action="clear">Clear</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="output-container" id="output-container">
      <h3>Conversion Results</h3>
      <div id="output-content"></div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>How It Works</h2>

      <h3>Step 1: Select PDF File</h3>
      <div class="example-text">• Click "Select PDF File" or drag and drop a file
• Only PDF files are supported
• Maximum file size: 50 MB</div>

      <h3>Step 2: Choose Output Format</h3>
      <div class="example-text">• Select from JPG, PNG, TIFF, HTML, ODT, EPUB
• Choose "Extract Images" to get all images from PDF
• Adjust quality and other options as needed</div>

      <h3>Step 3: Convert & Download</h3>
      <div class="example-text">• Click "Convert PDF" to start conversion
• Wait for processing to complete
• Download your converted files</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online PDF Converter - Convert PDF to Multiple Formats</h2>

    <p>Need to convert a PDF document to another format? Our free <strong>online PDF Converter tool</strong> makes it incredibly easy to transform PDF files into JPG, PNG, TIFF images, HTML documents, ODT files, EPUB e-books, or extract images from PDFs. Whether you need images for presentations, HTML for web content, or EPUB for e-readers, this tool handles everything seamlessly. There's no software to install, no watermarks, and your files remain completely private - all processing happens securely in your browser.</p>

    <h3>How to Convert PDF Files (Step-by-Step):</h3>
    <ul>
      <li><strong>Select File:</strong> Click the "Select PDF File" button or simply drag and drop your PDF file into the upload area.</li>
      <li><strong>Choose Format:</strong> Select your desired output format from the dropdown menu. Options include JPG, PNG, TIFF, HTML, ODT, EPUB, or image extraction.</li>
      <li><strong>Customize Options:</strong> Adjust quality settings, output filename, and other conversion preferences.</li>
      <li><strong>Convert & Download:</strong> Click the "Convert PDF" button to transform your file, then download the results with a single click.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you've received a PDF document with important diagrams that you need to include in a PowerPoint presentation. Instead of taking screenshots with poor quality, you can use our PDF Converter to extract high-quality PNG images of each page or diagram. This ensures your presentation looks professional with crisp, clear images that maintain their quality when projected.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Designers:</strong> Extract high-quality images from PDF documents for use in design projects.</li>
      <li><strong>Content Creators:</strong> Convert PDFs to HTML for easy publishing on websites and blogs.</li>
      <li><strong>Students & Researchers:</strong> Transform PDF research papers into editable ODT documents for note-taking and quoting.</li>
      <li><strong>E-book Readers:</strong> Convert PDF documents to EPUB format for better reading experience on e-readers.</li>
      <li><strong>Archivists:</strong> Create TIFF images from PDFs for long-term preservation and archiving.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What formats can I convert my PDF to?</strong><br>
      A: You can convert PDFs to JPG, PNG, TIFF (images), HTML (web page), ODT (editable document), EPUB (e-book), or extract all images from the PDF.</p>

    <p><strong>Q: Will the quality of my PDF be affected by conversion?</strong><br>
      A: No, the converter preserves the original quality of your PDF. For image formats, you can select the quality level to balance file size and image fidelity.</p>

    <p><strong>Q: Is my data secure when using this PDF converter?</strong><br>
      A: Absolutely. Your PDF files are processed entirely in your browser and never uploaded to any server. This means your documents remain completely private and secure.</p>

    <p><strong>Q: Can I convert password-protected PDFs?</strong><br>
      A: No, this tool cannot process password-protected or encrypted PDF files for security reasons.</p>

    <p><strong>Q: Do I need to create an account or pay to use this tool?</strong><br>
      A: No, this is a completely free tool with no registration required. There are no hidden fees or watermarks.</p>

    <h3>Why Choose Our PDF Converter?</h3>
    <p>Our <strong>online PDF Converter</strong> stands out for its versatility, speed, and privacy. Unlike many online tools, we don't upload your files to external servers - all processing happens locally in your browser. This ensures maximum security for your sensitive documents. The tool also works on any device with a modern web browser, making it accessible whenever you need it.</p>

    <h3>Common Applications of PDF Conversion</h3>
    <p>PDF conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Image Extraction:</strong> Get high-quality images from PDF documents for presentations, websites, or print materials</li>
      <li><strong>Archiving:</strong> Create TIFF images from PDFs for long-term digital preservation</li>
    </ul>
  </div>
</div>

<script>
  // Global variables
  let selectedFile = null;
  let pdfDoc = null;

  document.addEventListener('DOMContentLoaded', function () {
    const fileUpload = document.getElementById('fileUpload');
    const selectFileBtn = document.getElementById('selectFileBtn');
    const dropArea = document.getElementById('dropArea');
    const fileList = document.getElementById('fileList');
    const alertContainer = document.getElementById('alertContainer');
    const convertBtn = document.getElementById('convert-btn');
    const progressSection = document.getElementById('progressSection');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const outputContainer = document.getElementById('output-container');
    const outputContent = document.getElementById('output-content');
    const formatSelect = document.getElementById('format-select');
    
    // Event listeners
    selectFileBtn.addEventListener('click', function () {
      fileUpload.click();
    });

    fileUpload.addEventListener('change', handleFileSelect);

    // Drag and drop functionality
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
      dropArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, unhighlight, false);
    });

    function highlight() {
      dropArea.style.borderColor = 'var(--primary)';
      dropArea.style.backgroundColor = '#e3f2fd';
    }

    function unhighlight() {
      dropArea.style.borderColor = '#e0e6ed';
      dropArea.style.backgroundColor = 'white';
    }

    dropArea.addEventListener('drop', handleDrop, false);

    function handleDrop(e) {
      const dt = e.dataTransfer;
      const files = dt.files;
      handleFiles(files);
    }

    // Action buttons
    document.querySelectorAll('.case-button').forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handlePdfAction(action);
      });
    });

    function handleFileSelect(e) {
      const files = e.target.files;
      handleFiles(files);
    }

    function handleFiles(files) {
      if (files.length === 0) return;
      
      const file = files[0];
      
      // Check if file is PDF
      if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
        showAlert(`"${file.name}" is not a PDF file. Please select a PDF file.`, 'error');
        return;
      }
      
      // Check file size (max 50MB)
      if (file.size > 50 * 1024 * 1024) {
        showAlert(`"${file.name}" is too large. Maximum file size is 50MB.`, 'error');
        return;
      }
      
      selectedFile = file;
      renderFileList();
      updateUI();
      
      // Try to get page count
      getPdfPageCount(file);
    }

    function renderFileList() {
      if (!selectedFile) {
        fileList.innerHTML = `
          <div class="empty-state">
            <i class="fas fa-folder-open"></i>
            <p>No PDF file selected yet</p>
            <p>Drag and drop a file or click the select button above</p>
          </div>
        `;
        return;
      }

      fileList.innerHTML = `
        <div class="file-item">
          <i class="fas fa-file-pdf file-icon"></i>
          <div class="file-info">
            <div class="file-name">${selectedFile.name}</div>
            <div class="file-size">${formatFileSize(selectedFile.size)}</div>
          </div>
          <div class="file-actions">
            <button class="file-action-btn remove-file" onclick="removeFile()">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      `;
    }

    function updateUI() {
      // Update counters
      document.getElementById('fileName').textContent = selectedFile ? selectedFile.name : 'None';
      document.getElementById('fileSize').textContent = selectedFile ? formatFileSize(selectedFile.size) : '0 MB';
      
      // Enable/disable convert button
      convertBtn.disabled = !selectedFile;
      
      // Hide output container
      outputContainer.style.display = 'none';
    }

    function formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    async function getPdfPageCount(file) {
      try {
        const arrayBuffer = await readFileAsArrayBuffer(file);
        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
        pdfDoc = await loadingTask.promise;
        
        document.getElementById('pageCount').textContent = pdfDoc.numPages;
        document.getElementById('estimatedTime').textContent = Math.ceil(pdfDoc.numPages / 10) + ' seconds';
      } catch (error) {
        console.error('Error getting PDF page count:', error);
        document.getElementById('pageCount').textContent = 'Unknown';
        document.getElementById('estimatedTime').textContent = 'Unknown';
      }
    }

    function handlePdfAction(action) {
      switch (action) {
        case 'convert':
          convertPdf();
          break;

        case 'clear':
          clearAll();
          break;
      }
    }

    async function convertPdf() {
      if (!selectedFile) {
        showAlert('Please select a PDF file to convert.', 'error');
        return;
      }

      try {
        // Show progress
        progressSection.style.display = 'block';
        progressFill.style.width = '0%';
        progressText.textContent = 'Reading PDF file...';

        const arrayBuffer = await readFileAsArrayBuffer(selectedFile);
        const typedArray = new Uint8Array(arrayBuffer);
        
        const selectedFormat = formatSelect.value;
        
        // Hide output container initially
        outputContainer.style.display = 'none';
        outputContent.innerHTML = '';
        
        // Handle conversion based on selected format
        await handleConversion(typedArray, selectedFormat);
        
      } catch (error) {
        console.error('Conversion error:', error);
        progressSection.style.display = 'none';
        showAlert(`Conversion failed: ${error.message}`, 'error');
      }
    }

    async function handleConversion(pdfData, format) {
      switch (format) {
        case 'jpg':
        case 'png':
        case 'tiff':
          await convertPDFToImages(pdfData, format);
          break;
        case 'extract-images':
          await extractImagesFromPDF(pdfData);
          break;
        default:
          showAlert('Unsupported format', 'error');
      }
    }

    /* --------------------------------------------
       1️⃣  PDF → JPG / PNG / TIFF Conversion
    --------------------------------------------- */
    async function convertPDFToImages(pdfData, format) {
      const loadingTask = pdfjsLib.getDocument({ data: pdfData });
      const pdf = await loadingTask.promise;

      outputContent.innerHTML = '';
      outputContainer.style.display = 'block';
      outputContent.innerHTML = `<h4>Converted ${format.toUpperCase()} Images</h4>`;

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        // Update progress
        const progress = Math.floor((pageNumber / pdf.numPages) * 100);
        progressFill.style.width = progress + '%';
        progressText.textContent = `Converting page ${pageNumber} of ${pdf.numPages}...`;

        const page = await pdf.getPage(pageNumber);
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        // Adjust scale based on quality setting
        const quality = document.getElementById('quality').value;
        const scale = quality === 'high' ? 2.0 : quality === 'medium' ? 1.5 : 1.0;
        
        const viewport = page.getViewport({ scale });

        canvas.height = viewport.height;
        canvas.width = viewport.width;
        await page.render({ canvasContext: context, viewport }).promise;

        const mimeType = {
          jpg: 'image/jpeg',
          png: 'image/png',
          tiff: 'image/tiff'
        }[format];

        // Adjust quality for JPG
        let qualityValue = 1.0;
        if (format === 'jpg') {
          qualityValue = quality === 'high' ? 0.95 : quality === 'medium' ? 0.8 : 0.6;
        }

        const imgURL = canvas.toDataURL(mimeType, qualityValue);
        
        // Create output item
        const outputItem = document.createElement('div');
        outputItem.className = 'output-item';
        outputItem.innerHTML = `
          <img src="${imgURL}" alt="Page ${pageNumber}" class="output-image">
          <div>
            <p><strong>Page ${pageNumber}</strong></p>
            <a href="${imgURL}" download="page-${pageNumber}.${format}" class="download-btn">
              <i class="fas fa-download"></i> Download Page ${pageNumber}
            </a>
          </div>
        `;
        outputContent.appendChild(outputItem);
      }

      // Complete progress
      progressFill.style.width = '100%';
      progressText.textContent = 'Conversion completed successfully!';
      
      showAlert(`Successfully converted ${pdf.numPages} pages to ${format.toUpperCase()}!`, 'success');
      
      // Hide progress after a delay
      setTimeout(() => {
        progressSection.style.display = 'none';
      }, 2000);
    }

    /* --------------------------------------------
       4️⃣  Extract Images from PDF
    --------------------------------------------- */
    async function extractImagesFromPDF(pdfData) {
      const loadingTask = pdfjsLib.getDocument({ data: pdfData });
      const pdf = await loadingTask.promise;
      const zip = new JSZip();

      outputContent.innerHTML = '';
      outputContainer.style.display = 'block';
      outputContent.innerHTML = `<h4>Extracted Images</h4>`;

      for (let i = 1; i <= pdf.numPages; i++) {
        // Update progress
        const progress = Math.floor((i / pdf.numPages) * 100);
        progressFill.style.width = progress + '%';
        progressText.textContent = `Extracting images from page ${i} of ${pdf.numPages}...`;

        const page = await pdf.getPage(i);
        
        // Render page to canvas (simplified extraction)
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        // Adjust scale based on quality setting
        const quality = document.getElementById('quality').value;
        const scale = quality === 'high' ? 2.0 : quality === 'medium' ? 1.5 : 1.0;
        
        const viewport = page.getViewport({ scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({ canvasContext: context, viewport }).promise;
        
        // Convert canvas to image and add to ZIP
        const imgData = canvas.toDataURL('image/png');
        const base64Data = imgData.split(',')[1];
        zip.file(`page-${i}.png`, base64Data, { base64: true });
        
        // Also add to output for preview
        const outputItem = document.createElement('div');
        outputItem.className = 'output-item';
        outputItem.innerHTML = `
          <img src="${imgData}" alt="Page ${i}" class="output-image">
          <div>
            <p><strong>Page ${i}</strong></p>
            <a href="${imgData}" download="page-${i}.png" class="download-btn">
              <i class="fas fa-download"></i> Download Page ${i}
            </a>
          </div>
        `;
        outputContent.appendChild(outputItem);
      }

      // Generate ZIP file
      progressFill.style.width = '95%';
      progressText.textContent = 'Creating ZIP archive...';

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const zipUrl = URL.createObjectURL(zipBlob);
      
      // Add ZIP download link
      const zipItem = document.createElement('div');
      zipItem.className = 'output-item';
      zipItem.innerHTML = `
        <i class="fas fa-file-archive" style="font-size: 3rem; color: #f39c12;"></i>
        <div>
          <p><strong>All Images (ZIP Archive)</strong></p>
          <p>Download all ${pdf.numPages} extracted images as a ZIP file.</p>
          <a href="${zipUrl}" download="extracted-images.zip" class="download-btn">
            <i class="fas fa-download"></i> Download All Images (ZIP)
          </a>
        </div>
      `;
      outputContent.appendChild(zipItem);

      // Complete progress
      progressFill.style.width = '100%';
      progressText.textContent = 'Extraction completed successfully!';
      
      showAlert(`Successfully extracted images from ${pdf.numPages} pages!`, 'success');
      
      // Hide progress after a delay
      setTimeout(() => {
        progressSection.style.display = 'none';
      }, 2000);
    }

    // File reader helper function
    function readFileAsArrayBuffer(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
      });
    }

    function clearAll() {
      // Clean up blob URLs
      if (outputContent) {
        const links = outputContent.querySelectorAll('a');
        links.forEach(link => {
          if (link.href.startsWith('blob:')) {
            URL.revokeObjectURL(link.href);
          }
        });
      }
      
      selectedFile = null;
      pdfDoc = null;
      fileUpload.value = '';
      renderFileList();
      updateUI();
      showAlert('File cleared.', 'info');
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

    // Make functions available globally for onclick handlers
    window.removeFile = function() {
      clearAll();
    };

    // Initialize UI
    updateUI();
  });
</script>
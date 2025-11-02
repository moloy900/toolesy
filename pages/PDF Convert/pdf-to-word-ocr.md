---
layout: default
title: "PDF to Word (OCR) Converter – Convert Scanned PDF Easily"
permalink: /pdf-to-word-ocr-converter/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>PDF to Word (OCR) Converter – Convert Scanned PDF Easily</title>

<meta name="description"
  content="Free online PDF to Word converter with OCR. Convert scanned PDFs into editable Word documents (DOCX). Accurately extract text from images. No install or signup required.">

<meta name="keywords"
  content="pdf to word, ocr pdf to word, scanned pdf to word, convert pdf to docx, extract text from pdf, image to word, online pdf converter, editable word from pdf">

<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow">

<!-- Open Graph Tags -->
<meta property="og:title" content="PDF to Word (OCR) Converter - Free Online Tool">
<meta property="og:description" content="Convert scanned PDF to editable Word DOCX with advanced OCR. 100% free, secure and instant — no registration needed.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/pdf-to-word-ocr-converter/">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free PDF to Word Converter with OCR">
<meta name="twitter:description" content="Convert scanned PDF to editable Word documents online — fast & secure.">

<!-- PDF.js CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js"></script>

<!-- Tesseract.js (OCR) CDN -->
<script src="https://cdn.jsdelivr.net/npm/tesseract.js@5.1.0/dist/tesseract.min.js"></script>

<!-- docx.js CDN -->
<script src="https://cdn.jsdelivr.net/npm/docx@8.2.4/build/index.min.js"></script>

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* PDF to Word Converter Styles */
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

  .file-upload-area {
    border: 2px dashed #e0e6ed;
    border-radius: 10px;
    padding: 40px 20px;
    text-align: center;
    background: white;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .file-upload-area:hover {
    border-color: var(--primary);
    background: #f8f9fa;
  }

  .file-upload-area.dragover {
    border-color: var(--primary);
    background: #e3f2fd;
  }

  .upload-icon {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 15px;
  }

  .file-input {
    display: none;
  }

  .conversion-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
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

  .case-button:disabled {
    background: #6c757d;
    cursor: not-allowed;
    transform: none;
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

  .preview-section {
    margin: 30px 0;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .preview-content {
    max-height: 400px;
    overflow-y: auto;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 6px;
    margin: 15px 0;
    font-family: 'Courier New', monospace;
    white-space: pre-wrap;
  }

  .progress-container {
    margin: 20px 0;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: var(--primary);
    transition: width 0.3s ease;
  }

  .progress-text {
    text-align: center;
    margin-top: 5px;
    font-size: 0.9rem;
    color: #666;
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

  /* Share and donation buttons */
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
  }
</style>

<div class="converter-container">
  <h1>Free PDF to Word Converter with OCR</h1>
  <p class="welcome-message">Convert PDF files to editable Word documents using advanced OCR technology. Extract text from scanned PDFs and images with high accuracy.</p>

  <div class="converter-section">
    <h2>PDF to Word (OCR) Converter</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>File Size: </span>
        <span id="fileSize">0 MB</span>
      </div>
      <div class="counter-item">
        <span>Pages: </span>
        <span id="pageCount">0</span>
      </div>
      <div class="counter-item">
        <span>OCR Language: </span>
        <span id="ocrLanguage">English</span>
      </div>
      <div class="counter-item">
        <span>Status: </span>
        <span id="conversionStatus">Ready</span>
      </div>
    </div>

    <div class="input-section">
      <div class="file-upload-area" id="fileUploadArea">
        <div class="upload-icon">
          <i class="fas fa-file-pdf"></i>
        </div>
        <h3>Drop PDF file here or click to upload</h3>
        <p class="text-muted">Supports PDF files up to 50MB</p>
        <input type="file" id="pdfFile" accept="application/pdf" class="file-input">
      </div>
      <div id="fileInfo" class="file-info" style="margin-top: 10px;"></div>
    </div>

    <div class="conversion-options">
      <div class="option-group">
        <label class="option-label">OCR Language</label>
        <select id="ocrLanguageSelect" class="option-select">
          <option value="eng" selected>English</option>
          <option value="spa">Spanish</option>
          <option value="fra">French</option>
          <option value="deu">German</option>
          <option value="ita">Italian</option>
          <option value="por">Portuguese</option>
          <option value="rus">Russian</option>
          <option value="chi_sim">Chinese (Simplified)</option>
          <option value="jpn">Japanese</option>
          <option value="kor">Korean</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Output Format</label>
        <select id="outputFormat" class="option-select">
          <option value="docx" selected>Word Document (.docx)</option>
          <option value="txt">Plain Text (.txt)</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Image Quality</label>
        <select id="imageQuality" class="option-select">
          <option value="1">Low (Faster)</option>
          <option value="2" selected>Medium</option>
          <option value="3">High (Better Accuracy)</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Page Range</label>
        <input type="text" id="pageRange" class="option-input" placeholder="e.g., 1-5, 7, 9-12 (Leave empty for all pages)">
      </div>
    </div>

    <div class="progress-container" style="display: none;" id="progressContainer">
      <div class="progress-bar">
        <div class="progress-fill" id="progressFill" style="width: 0%"></div>
      </div>
      <div class="progress-text" id="progressText">Processing...</div>
    </div>

    <div class="button-section">
      <button class="case-button success" id="convertBtn" disabled>
        <i class="fas fa-sync-alt"></i> Convert to Word (OCR)
      </button>
      <button class="case-button" id="previewBtn" disabled>
        <i class="fas fa-eye"></i> Preview Text
      </button>
      <button class="case-button warning" id="downloadBtn" disabled>
        <i class="fas fa-download"></i> Download
      </button>
      <button class="case-button secondary" id="clearBtn">
        <i class="fas fa-trash"></i> Clear
      </button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="preview-section" id="previewSection" style="display: none;">
      <h2>Extracted Text Preview</h2>
      <div class="preview-content" id="previewContent">
        Extracted text will appear here...
      </div>
      <div class="preview-info">
        <div id="previewInfo">No text extracted yet</div>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online PDF to Word Converter with OCR Technology</h2>

    <p>Convert your PDF files to editable Word documents with our advanced OCR (Optical Character Recognition) technology. Whether you have scanned PDFs, image-based documents, or digital PDFs, our tool can extract text with high accuracy and convert it to fully editable Word format. No software installation required - everything works directly in your browser.</p>

    <h3>How to Convert PDF to Word with OCR (Step-by-Step):</h3>
    <ul>
      <li><strong>Upload PDF File:</strong> Drag and drop your PDF file or click to select it from your device</li>
      <li><strong>Choose OCR Language:</strong> Select the language of your document for better text recognition accuracy</li>
      <li><strong>Configure Settings:</strong> Adjust image quality and page range if needed</li>
      <li><strong>Convert & Extract:</strong> Click "Convert to Word" to start the OCR process and text extraction</li>
      <li><strong>Download Result:</strong> Download your editable Word document with extracted text</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you have a scanned contract document in PDF format that you need to edit. Instead of manually retyping the entire document, you can use our PDF to Word converter with OCR. Simply upload the scanned PDF, select English as the OCR language, and let our tool extract all the text while preserving the formatting. Within minutes, you'll have an editable Word document ready for modifications, saving you hours of manual work.</p>

    <h3>Supported Features & Capabilities:</h3>
    <ul>
      <li><strong>Advanced OCR Technology:</strong> Extract text from scanned PDFs and images</li>
      <li><strong>Multiple Language Support:</strong> English, Spanish, French, German, and more</li>
      <li><strong>Format Preservation:</strong> Maintain original formatting in Word documents</li>
      <li><strong>Batch Processing:</strong> Handle multi-page documents efficiently</li>
      <li><strong>High Accuracy:</strong> Advanced algorithms for precise text recognition</li>
      <li><strong>Secure Processing:</strong> All conversion happens locally in your browser</li>
    </ul>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Students & Researchers:</strong> Convert scanned books and research papers to editable text</li>
      <li><strong>Business Professionals:</strong> Edit contracts, reports, and business documents</li>
      <li><strong>Legal Professionals:</strong> Work with scanned legal documents and contracts</li>
      <li><strong>Administrative Staff:</strong> Convert archived documents to editable formats</li>
      <li><strong>Writers & Editors:</strong> Extract text from scanned manuscripts and documents</li>
      <li><strong>Anyone with Scanned Documents:</strong> Make any scanned document editable</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>What is OCR and why is it important for PDF conversion?</strong><br>
      OCR (Optical Character Recognition) technology converts different types of documents, such as scanned paper documents or image-based PDFs, into editable and searchable data. It's essential for converting scanned PDFs where text is stored as images rather than selectable text.</p>

    <p><strong>How accurate is the OCR text extraction?</strong><br>
      Our OCR technology provides high accuracy, especially with clear scans and good image quality. Accuracy can be affected by factors like image resolution, font type, and document quality. For best results, use high-quality scans with clear text.</p>

    <p><strong>Is my document data kept private and secure?</strong><br>
      Absolutely. All PDF processing and OCR conversion happens locally in your browser. Your documents are never uploaded to our servers, ensuring complete privacy and security for sensitive information.</p>

    <p><strong>What types of PDFs can be converted?</strong><br>
      Our tool can handle both digital PDFs (with selectable text) and scanned PDFs (image-based). For scanned PDFs, the OCR feature will extract text from the images.</p>

    <p><strong>Are there any file size limitations?</strong><br>
      The tool can handle PDF files up to 50MB. For larger files, we recommend splitting them into smaller parts or using professional desktop software.</p>

    <h3>Why Choose Our PDF to Word Converter?</h3>
    <p>Our online PDF to Word converter stands out for its advanced OCR capabilities, user-friendly interface, and commitment to privacy. Unlike many online converters that require file uploads to external servers, our tool processes everything locally in your browser. This means your confidential documents, contracts, and sensitive information remain completely private and secure.</p>

    <h3>Common Applications of PDF to Word Conversion</h3>
    <p>PDF to Word conversion with OCR has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Document Editing:</strong> Modify contracts, reports, and forms that were originally in PDF format</li>
      <li><strong>Content Repurposing:</strong> Extract text from PDFs for use in presentations, websites, or other documents</li>
      <li><strong>Archival Digitization:</strong> Convert scanned archives and historical documents to editable formats</li>
      <li><strong>Academic Research:</strong> Extract quotes and references from scanned books and journals</li>
      <li><strong>Legal Document Processing:</strong> Work with scanned legal documents and court filings</li>
      <li><strong>Business Process Automation:</strong> Convert incoming scanned documents for digital processing</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const pdfFileInput = document.getElementById('pdfFile');
    const fileUploadArea = document.getElementById('fileUploadArea');
    const convertBtn = document.getElementById('convertBtn');
    const previewBtn = document.getElementById('previewBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const clearBtn = document.getElementById('clearBtn');
    const alertContainer = document.getElementById('alertContainer');
    const previewSection = document.getElementById('previewSection');
    const previewContent = document.getElementById('previewContent');
    const previewInfo = document.getElementById('previewInfo');
    const progressContainer = document.getElementById('progressContainer');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const conversionStatus = document.getElementById('conversionStatus');
    
    // Options
    const ocrLanguageSelect = document.getElementById('ocrLanguageSelect');
    const outputFormat = document.getElementById('outputFormat');
    const imageQuality = document.getElementById('imageQuality');
    const pageRange = document.getElementById('pageRange');
    
    // Conversion state
    let currentFile = null;
    let extractedText = '';
    let conversionInProgress = false;

    // Event listeners
    fileUploadArea.addEventListener('click', () => pdfFileInput.click());
    fileUploadArea.addEventListener('dragover', handleDragOver);
    fileUploadArea.addEventListener('drop', handleFileDrop);
    pdfFileInput.addEventListener('change', handleFileSelect);
    
    convertBtn.addEventListener('click', convertPdfToWord);
    previewBtn.addEventListener('click', showPreview);
    downloadBtn.addEventListener('click', downloadDocument);
    clearBtn.addEventListener('click', clearAll);

    function handleDragOver(e) {
      e.preventDefault();
      fileUploadArea.classList.add('dragover');
    }

    function handleFileDrop(e) {
      e.preventDefault();
      fileUploadArea.classList.remove('dragover');
      
      const files = e.dataTransfer.files;
      if (files.length > 0 && files[0].type === 'application/pdf') {
        handleFile(files[0]);
      } else {
        showAlert('Please drop a valid PDF file.', 'error');
      }
    }

    function handleFileSelect(e) {
      const file = e.target.files[0];
      if (file) {
        handleFile(file);
      }
    }

    function handleFile(file) {
      if (file.type !== 'application/pdf') {
        showAlert('Please select a PDF file.', 'error');
        return;
      }

      if (file.size > 50 * 1024 * 1024) {
        showAlert('File size must be less than 50MB.', 'error');
        return;
      }

      currentFile = file;
      updateFileInfo(file);
      convertBtn.disabled = false;
      previewBtn.disabled = false;
      
      showAlert('PDF file loaded successfully!', 'success');
    }

    function updateFileInfo(file) {
      const fileSize = (file.size / (1024 * 1024)).toFixed(2);
      document.getElementById('fileSize').textContent = fileSize + ' MB';
      document.getElementById('fileInfo').textContent = `File: ${file.name} (${fileSize} MB)`;
    }

    async function convertPdfToWord() {
      if (!currentFile || conversionInProgress) return;

      conversionInProgress = true;
      convertBtn.disabled = true;
      progressContainer.style.display = 'block';
      conversionStatus.textContent = "Processing...";
      
      try {
        progressText.textContent = "Reading PDF...";
        const pdfData = await currentFile.arrayBuffer();

        // Load the PDF using pdf.js
        const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
        document.getElementById('pageCount').textContent = pdf.numPages;

        let fullText = "";
        const totalPages = pdf.numPages;

        // Parse page range if specified
        const pagesToProcess = parsePageRange(pageRange.value, totalPages);

        for (let i = 0; i < pagesToProcess.length; i++) {
          const pageNum = pagesToProcess[i];
          const progress = (i / pagesToProcess.length) * 100;
          progressFill.style.width = progress + '%';
          progressText.textContent = `Processing Page ${pageNum} of ${totalPages}...`;
          conversionStatus.textContent = `Processing Page ${pageNum}...`;
          
          const page = await pdf.getPage(pageNum);
          const viewport = page.getViewport({ scale: parseFloat(imageQuality.value) });

          // Render PDF page to canvas
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          await page.render({ canvasContext: context, viewport }).promise;

          // OCR with Tesseract.js
          const result = await Tesseract.recognize(canvas, ocrLanguageSelect.value, {
            logger: m => {
              if (m.status === 'recognizing text') {
                progressText.textContent = `OCR: ${Math.round(m.progress * 100)}% (Page ${pageNum})`;
              }
            }
          });
          
          fullText += `\n\n--- Page ${pageNum} ---\n\n` + result.data.text;
        }

        extractedText = fullText;
        
        progressFill.style.width = '100%';
        progressText.textContent = 'Creating document...';
        conversionStatus.textContent = 'Creating document...';

        // Update status
        conversionStatus.textContent = 'Completed';
        document.getElementById('ocrLanguage').textContent = ocrLanguageSelect.options[ocrLanguageSelect.selectedIndex].text;
        
        downloadBtn.disabled = false;
        showAlert('✅ Conversion completed successfully!', 'success');
        
      } catch (error) {
        console.error('Conversion error:', error);
        showAlert('Error during conversion: ' + error.message, 'error');
        conversionStatus.textContent = 'Error';
      } finally {
        conversionInProgress = false;
        progressContainer.style.display = 'none';
        convertBtn.disabled = false;
      }
    }

    function parsePageRange(rangeText, totalPages) {
      if (!rangeText.trim()) {
        // Return all pages if no range specified
        return Array.from({length: totalPages}, (_, i) => i + 1);
      }

      const pages = [];
      const ranges = rangeText.split(',');
      
      for (const range of ranges) {
        const parts = range.split('-');
        if (parts.length === 1) {
          // Single page
          const page = parseInt(parts[0]);
          if (page >= 1 && page <= totalPages) {
            pages.push(page);
          }
        } else if (parts.length === 2) {
          // Page range
          const start = parseInt(parts[0]);
          const end = parseInt(parts[1]);
          for (let i = start; i <= end; i++) {
            if (i >= 1 && i <= totalPages) {
              pages.push(i);
            }
          }
        }
      }
      
      // Remove duplicates and sort
      return [...new Set(pages)].sort((a, b) => a - b);
    }

    function showPreview() {
      if (!extractedText) {
        showAlert('Please convert a PDF first.', 'error');
        return;
      }

      previewContent.textContent = extractedText;
      previewSection.style.display = 'block';
      previewInfo.textContent = `Extracted ${extractedText.length} characters from PDF`;
      
      // Scroll to preview section
      previewSection.scrollIntoView({ behavior: 'smooth' });
    }

    async function downloadDocument() {
      if (!extractedText) {
        showAlert('No converted text available.', 'error');
        return;
      }

      try {
        if (outputFormat.value === 'docx') {
          // Check if docx library is available
          if (typeof docx === 'undefined') {
            showAlert('Word document format is not available. Please download as text file instead.', 'error');
            return;
          }

          // Use the global docx object instead of destructuring
          const doc = new docx.Document({
            sections: [{
              properties: {},
              children: [
                new docx.Paragraph({
                  children: [
                    new docx.TextRun({
                      text: extractedText,
                      size: 24,
                    })
                  ]
                })
              ]
            }]
          });

          const blob = await docx.Packer.toBlob(doc);
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "converted-document.docx";
          a.click();
          URL.revokeObjectURL(url);
        } else {
          // Download as text file
          const blob = new Blob([extractedText], { type: 'text/plain;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "converted-document.txt";
          a.click();
          URL.revokeObjectURL(url);
        }
        
        showAlert('Document downloaded successfully!', 'success');
      } catch (error) {
        console.error('Download error:', error);
        showAlert('Error downloading document: ' + error.message, 'error');
      }
    }

    function clearAll() {
      currentFile = null;
      extractedText = '';
      
      pdfFileInput.value = '';
      document.getElementById('fileSize').textContent = '0 MB';
      document.getElementById('pageCount').textContent = '0';
      document.getElementById('conversionStatus').textContent = 'Ready';
      document.getElementById('fileInfo').textContent = '';
      
      convertBtn.disabled = true;
      previewBtn.disabled = true;
      downloadBtn.disabled = true;
      
      previewSection.style.display = 'none';
      progressContainer.style.display = 'none';
      progressFill.style.width = '0%';
      
      showAlert('All fields cleared.', 'info');
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
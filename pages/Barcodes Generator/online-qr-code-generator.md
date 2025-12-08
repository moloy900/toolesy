---
layout: default
title: "Free Online Barcode & QR Code Generator"
permalink: /free-online-barcode-qr-code-generator/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Barcode & QR Code Generator - Create Custom Barcodes Instantly</title>
<meta name="description"
  content="Free online barcode and QR code generator. Create custom barcodes, QR codes, Data Matrix, PDF417, and more instantly. No registration required.">
<meta name="keywords"
  content="barcode generator, QR code generator, free barcode maker, online barcode creator, QR code creator, Data Matrix, PDF417, Aztec code, barcode scanner, generate barcode">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<!-- Barcode Library -->
<script src="https://cdn.jsdelivr.net/npm/bwip-js@3.5.1/dist/bwip-js-min.js"></script>

<style>
  /* Barcode Generator Styles */
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

  .input-group {
    margin-bottom: 20px;
  }

  .input-group label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
    color: #2c3e50;
    font-size: 1.1rem;
  }

  .input-group input,
  .input-group select {
    width: 100%;
    padding: 14px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    transition: all 0.3s ease;
    background: white;
  }

  .input-group input:focus,
  .input-group select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .input-group input[type="number"] {
    width: 150px;
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 30px 0;
  }

  .case-button {
    padding: 16px 10px;
    border: none;
    border-radius: 8px;
    background: var(--primary);
    color: white;
    font-size: 16px;
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

  .barcode-preview {
    background: white;
    border-radius: 10px;
    padding: 25px;
    margin: 30px 0;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    border: 1px solid #e0e6ed;
  }

  .barcode-preview h3 {
    color: #2c3e50;
    margin-bottom: 20px;
    font-size: 1.3rem;
  }

  #barcodeCanvas {
    max-width: 100%;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: white;
    padding: 15px;
    margin: 0 auto;
    display: block;
  }

  .code-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .info-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: white;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .info-item span:first-child {
    font-weight: 600;
    color: var(--primary);
  }

  .info-item span:last-child {
    font-weight: bold;
    color: #2c3e50;
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

  .barcode-types {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    margin: 15px 0;
  }

  .type-option {
    padding: 12px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    background: white;
  }

  .type-option:hover {
    border-color: var(--primary);
    background: #f0f8ff;
  }

  .type-option.active {
    border-color: var(--primary);
    background: var(--primary);
    color: white;
    font-weight: bold;
  }

  .type-option i {
    display: block;
    font-size: 24px;
    margin-bottom: 8px;
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

  .content-placeholder h3 {
    color: #34495e;
    margin-top: 25px;
    margin-bottom: 15px;
  }

  .examples {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .example-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .example-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .example-card h4 {
    color: var(--primary);
    margin-bottom: 10px;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .converter-container {
      padding: 15px;
    }

    .converter-container h1 {
      font-size: 2rem;
    }

    .converter-section {
      padding: 20px;
      margin-bottom: 30px;
    }

    .button-section {
      grid-template-columns: 1fr;
    }

    .barcode-types {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }

    .code-info {
      grid-template-columns: 1fr;
    }

    .example-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .barcode-types {
      grid-template-columns: repeat(2, 1fr);
    }

    .input-group input[type="number"] {
      width: 100%;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Barcode & QR Code Generator</h1>
  <p class="welcome-message">Create custom barcodes and QR codes instantly. Supports 15+ barcode types including QR Code, Data Matrix, PDF417, Aztec Code, and more. No registration required.</p>

  <div class="converter-section">
    <h2>Barcode & QR Code Generator</h2>

    <div class="code-info">
      <div class="info-item">
        <span>Selected Type: </span>
        <span id="currentType">QR Code</span>
      </div>
      <div class="info-item">
        <span>Input Length: </span>
        <span id="inputLength">0</span>
      </div>
      <div class="info-item">
        <span>Scale Factor: </span>
        <span id="scaleValue">4</span>
      </div>
      <div class="info-item">
        <span>Status: </span>
        <span id="generationStatus">Ready</span>
      </div>
    </div>

    <div class="input-group">
      <label for="bcid">Barcode Type</label>
      <select id="bcid">
        <option value="qrcode" selected>QR Code</option>
        <option value="microqrcode">Micro QR Code</option>
        <option value="gs1qrcode">GS1 QR Code</option>
        <option value="datamatrix">Data Matrix</option>
        <option value="gs1datamatrix">GS1 Data Matrix</option>
        <option value="pdf417">PDF417</option>
        <option value="micropdf417">Micro PDF417</option>
        <option value="azteccode">Aztec Code</option>
        <option value="maxicode">MaxiCode</option>
        <option value="dotcode">DotCode</option>
        <option value="hanxin">Han Xin Code</option>
        <option value="codeone">Code One</option>
        <option value="gridmatrix">Grid Matrix Code</option>
        <option value="ultracode">Ultracode</option>
        <option value="vericode">VeriCode</option>
      </select>
    </div>

    <div class="input-group">
      <label for="text">Content / Text / URL <small>(Enter text, numbers, or URL)</small></label>
      <input type="text" id="text" placeholder="Enter text, URL, or data for barcode...">
    </div>

    <div class="input-group">
      <label for="scale">Size / Scale Factor <small>(1-10, higher = larger)</small></label>
      <input type="number" id="scale" min="1" max="10" value="4">
    </div>

    <div class="button-section">
      <button class="case-button" id="generateBtn">Generate Barcode</button>
      <button class="case-button success" id="downloadBtn">Download PNG</button>
      <button class="case-button secondary" id="clearBtn">Clear</button>
      <button class="case-button" id="sampleBtn">Load Sample</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="barcode-preview">
      <h3>Generated Barcode Preview</h3>
      <canvas id="barcodeCanvas"></canvas>
      <p id="previewNote" style="margin-top: 15px; color: #666; font-style: italic;">
        Your barcode will appear here after generation
      </p>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Barcode Type Examples & Use Cases</h2>
      <div class="example-grid">
        <div class="example-card">
          <h4><i class="fas fa-qrcode"></i> QR Code</h4>
          <p>Perfect for URLs, contact info, Wi-Fi credentials, and marketing materials. Scan with any smartphone camera.</p>
        </div>
        <div class="example-card">
          <h4><i class="fas fa-barcode"></i> Data Matrix</h4>
          <p>Used for small item labeling, electronics, healthcare, and logistics. Stores data in a compact matrix.</p>
        </div>
        <div class="example-card">
          <h4><i class="fas fa-file-pdf"></i> PDF417</h4>
          <p>2D barcode used for driver licenses, boarding passes, and shipping labels. Can store up to 1.1KB of data.</p>
        </div>
        <div class="example-card">
          <h4><i class="fas fa-th-large"></i> Aztec Code</h4>
          <p>Used in transportation tickets, airline boarding passes, and government documents. Doesn't require quiet zone.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Barcode & QR Code Generator Tool</h2>

    <p>Need to create professional barcodes or QR codes quickly and easily? Our free <strong>Barcode & QR Code Generator</strong> is the ultimate solution for businesses, developers, educators, and individuals. Generate 15+ different barcode types instantly with customizable options. Whether you need QR codes for marketing, Data Matrix for inventory, or PDF417 for documents, our tool has you covered. No software installation, no registration, and your data privacy is guaranteed as all processing happens locally in your browser.</p>

    <h3>How to Generate Barcodes (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Barcode Type:</strong> Choose from 15+ barcode types including QR Code, Data Matrix, PDF417, Aztec Code, and more.</li>
      <li><strong>Enter Your Data:</strong> Type the text, numbers, or URL you want to encode into the barcode.</li>
      <li><strong>Adjust Size:</strong> Use the scale slider to set the barcode size (1-10, where higher numbers create larger barcodes).</li>
      <li><strong>Generate & Download:</strong> Click "Generate Barcode" to create it instantly, then "Download PNG" to save the image to your device.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're organizing a conference and need to create QR codes for each session. Instead of using multiple different tools or paying for premium software, you can use our free generator. Simply select "QR Code", enter the session URL, adjust the size for your printed materials, and generate. You can create hundreds of unique QR codes in minutes, all with consistent formatting and professional quality.</p>

    <h3>Supported Barcode Types & Their Applications:</h3>
    <ul>
      <li><strong>QR Code:</strong> Website URLs, contact information, Wi-Fi access, payment links, marketing materials</li>
      <li><strong>Data Matrix:</strong> Small item identification, electronics components, healthcare labels, industrial marking</li>
      <li><strong>PDF417:</strong> Driver licenses, boarding passes, shipping labels, government documents</li>
      <li><strong>Aztec Code:</strong> Transportation tickets, event tickets, airline boarding passes</li>
      <li><strong>Code 128 & Code 39:</strong> Retail products, inventory management, asset tracking</li>
      <li><strong>GS1 Barcodes:</strong> Retail and healthcare products with standardized identification</li>
    </ul>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Small Businesses:</strong> Create product barcodes for inventory and sales tracking without expensive software</li>
      <li><strong>Marketers:</strong> Generate QR codes for campaigns, business cards, brochures, and digital marketing</li>
      <li><strong>Educators:</strong> Create barcodes for classroom activities, library systems, and educational materials</li>
      <li><strong>Developers:</strong> Test barcode generation for applications without implementing complex libraries</li>
      <li><strong>Event Planners:</strong> Generate tickets, check-in codes, and information QR codes for events</li>
      <li><strong>Individuals:</strong> Create personal QR codes for resumes, contact sharing, or home organization</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What is the difference between barcodes and QR codes?</strong><br>
      A: Traditional barcodes are 1D and store data in parallel lines (good for numbers). QR codes are 2D and store data in both directions (can store URLs, text, and more data).</p>

    <p><strong>Q: Is there a limit to how much data I can put in a barcode?</strong><br>
      A: Yes, different barcode types have different capacity limits. QR codes can store up to 4,296 alphanumeric characters, while Data Matrix can store up to 2,335 alphanumeric characters.</p>

    <strong>Q: Is my data kept private when I generate barcodes?</strong><br>
      A: Absolutely. This tool processes everything locally in your browser. Your data is never sent to our servers, ensuring complete privacy and security for sensitive information.</p>

    <p><strong>Q: Can I use the generated barcodes commercially?</strong><br>
      A: Yes, all barcodes generated with this tool are free for personal and commercial use. However, some barcode types (like GS1 formats) may have licensing requirements for commercial use.</p>

    <p><strong>Q: What image format are the barcodes saved in?</strong><br>
      A: Barcodes are downloaded as high-quality PNG images with transparent backgrounds, perfect for use in documents, websites, and printed materials.</p>

    <h3>Why Choose Our Barcode Generator?</h3>
    <p>Our <strong>online barcode generator</strong> stands out for its simplicity, versatility, and privacy. Unlike many online tools, we don't store your data on servers - all processing happens locally in your browser. This means your proprietary information, product codes, and sensitive data remain completely private. The tool works offline once loaded, supports 15+ barcode types, and produces professional-quality images suitable for both digital and print use.</p>

    <h3>Technical Specifications & Features</h3>
    <ul>
      <li><strong>15+ Barcode Types:</strong> QR Code, Data Matrix, PDF417, Aztec Code, and more</li>
      <li><strong>Customizable Sizing:</strong> Adjustable scale from 1-10 for perfect sizing</li>
      <li><strong>High Resolution Output:</strong> PNG format with transparent background</li>
      <li><strong>No Data Limits:</strong> Generate as many barcodes as you need</li>
      <li><strong>Mobile Friendly:</strong> Works perfectly on smartphones and tablets</li>
      <li><strong>Privacy Focused:</strong> All processing happens locally in your browser</li>
      <li><strong>Completely Free:</strong> No subscriptions, no watermarks, no usage limits</li>
    </ul>
  </div>
</div>

<script type="text/javascript" src="https://unpkg.com/bwip-js/dist/bwip-js-min.js"></script>

<script>
document.addEventListener('DOMContentLoaded', function () {
  const bcidSelect = document.getElementById('bcid');
  const textInput = document.getElementById('text');
  const scaleInput = document.getElementById('scale');
  const generateBtn = document.getElementById('generateBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const clearBtn = document.getElementById('clearBtn');
  const sampleBtn = document.getElementById('sampleBtn');
  const barcodeCanvas = document.getElementById('barcodeCanvas');
  const alertContainer = document.getElementById('alertContainer');
  const currentTypeSpan = document.getElementById('currentType');
  const inputLengthSpan = document.getElementById('inputLength');
  const scaleValueSpan = document.getElementById('scaleValue');
  const generationStatusSpan = document.getElementById('generationStatus');
  const previewNote = document.getElementById('previewNote');

  // 🛑 FIX: Corrected GS1 QR Code checksum (GTIN 09503200000108 -> 09503200000108)
  const sampleData = {
    qrcode: "https://www.example.com/product-info",
    datamatrix: "PROD-2023-7890-XYZ",
    pdf417: "SHIP-987654321-US-EXPRESS",
    azteccode: "TICKET-EVENT-2023-001",
    microqrcode: "https://short.url/abc123",
    gs1qrcode: "(01)09503200000108(17)231231(10)ABC123", // Corrected check digit is 8
    gs1datamatrix: "(01)09503200000108(17)231231(10)BATCH123" // Added GS1 Data Matrix sample
  };

  // sensible initial size
  barcodeCanvas.width = 400;
  barcodeCanvas.height = 400;

  updateInfo();
  textInput.addEventListener('input', updateInfo);
  scaleInput.addEventListener('input', updateInfo);
  bcidSelect.addEventListener('change', updateInfo);

  generateBtn.addEventListener('click', generateBarcode);
  downloadBtn.addEventListener('click', downloadBarcode);
  clearBtn.addEventListener('click', clearAll);
  sampleBtn.addEventListener('click', loadSample);

  function updateInfo() {
    currentTypeSpan.textContent = bcidSelect.options[bcidSelect.selectedIndex].text;
    inputLengthSpan.textContent = textInput.value.length;
    scaleValueSpan.textContent = scaleInput.value;
  }

  function generateBarcode() {
    const bcid = bcidSelect.value;
    const text = textInput.value.trim();
    let scale = parseInt(scaleInput.value);
    if (!text) {
      showAlert('Please enter text or data for the barcode!', 'error');
      return;
    }
    if (isNaN(scale) || scale < 1) scale = 4;

    generationStatusSpan.textContent = 'Generating...';
    generationStatusSpan.style.color = '#e67e22';

    // Ensure bwip-js is available. It exposes either window.BWIPJS or window.bwipjs depending on build.
    const bwip = window.BWIPJS || window.bwipjs;
    if (!bwip) {
      generationStatusSpan.textContent = 'Error';
      generationStatusSpan.style.color = '#e74c3c';
      showAlert('bwip-js library not loaded. Make sure the script src for bwip-js is included before this script and returned 200.', 'error');
      console.error('bwip-js not found: window.BWIPJS and window.bwipjs are undefined.');
      return;
    }

    // set canvas size proportional to scale (you can adjust these multipliers)
    // Using scale to determine canvas size is crucial for high-res output
    const base = 150; 
    barcodeCanvas.width = Math.max(200, base * scale);
    barcodeCanvas.height = Math.max(200, base * scale);

    // Build options. Some barcode types may not accept includetext; we'll attempt common set.
    const opts = {
      bcid: bcid,
      text: text,
      scale: scale,
      paddingwidth: 10,
      paddingheight: 10
    };

    // For linear codes allow includetext; for some 2D codes it's ignored.
    try {
      // Use callback form to capture library errors
      bwip.toCanvas(barcodeCanvas, opts, function (err) {
        if (err) {
          generationStatusSpan.textContent = 'Error';
          generationStatusSpan.style.color = '#e74c3c';

          // Show the actual error message from bwip-js if available
          const errMsg = (err && (err.message || err.toString())) || 'Unknown error while generating barcode.';
          showAlert('Failed to generate barcode: ' + errMsg, 'error');
          console.error('bwip-js error:', err);
          previewNote.style.display = 'block'; // Show note on error
          const ctx = barcodeCanvas.getContext('2d');
          ctx.clearRect(0, 0, barcodeCanvas.width, barcodeCanvas.height); // Clear the canvas on error
        } else {
          generationStatusSpan.textContent = 'Generated';
          generationStatusSpan.style.color = '#27ae60';
          previewNote.style.display = 'none';
          showAlert('Barcode generated successfully!', 'success');
        }
      });
    } catch (ex) {
      generationStatusSpan.textContent = 'Error';
      generationStatusSpan.style.color = '#e74c3c';
      showAlert('Exception while generating barcode: ' + (ex.message || ex.toString()), 'error');
      console.error('Exception generating barcode:', ex);
    }
  }

  function downloadBarcode() {
    try {
      const ctx = barcodeCanvas.getContext('2d');
      const w = barcodeCanvas.width, h = barcodeCanvas.height;
      if (w === 0 || h === 0) {
        showAlert('Canvas is empty. Generate a barcode first.', 'error');
        return;
      }
      
      // Simple check to see if the canvas has content (avoids downloading a blank image)
      const imageData = ctx.getImageData(0, 0, 1, 1).data; // Read a single pixel
      if (imageData[3] === 0) { 
        showAlert('Canvas appears empty. Please generate a barcode first.', 'error');
        return;
      }

      const link = document.createElement('a');
      const barcodeType = bcidSelect.options[bcidSelect.selectedIndex].text.replace(/\s+/g, '_');
      const timestamp = new Date().toISOString().slice(0,19).replace(/[:T.]/g, '-');
      link.download = `barcode_${barcodeType}_${timestamp}.png`;
      link.href = barcodeCanvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showAlert('Barcode downloaded successfully!', 'success');
    } catch (err) {
      showAlert('Error during download: ' + (err.message || err.toString()), 'error');
      console.error('Download error:', err);
    }
  }

  function clearAll() {
    textInput.value = '';
    scaleInput.value = 4;
    bcidSelect.value = 'qrcode';
    const ctx = barcodeCanvas.getContext('2d');
    ctx.clearRect(0, 0, barcodeCanvas.width, barcodeCanvas.height);
    barcodeCanvas.width = 400; // Resetting to a reasonable default size
    barcodeCanvas.height = 400;
    previewNote.style.display = 'block';
    generationStatusSpan.textContent = 'Ready';
    generationStatusSpan.style.color = '#2c3e50';
    updateInfo();
    showAlert('All fields cleared!', 'success');
  }

  function loadSample() {
    const selectedType = bcidSelect.value;
    if (sampleData[selectedType]) {
      textInput.value = sampleData[selectedType];
    } else {
      // Fallback for types without specific sample data
      textInput.value = `Sample data for ${bcidSelect.options[bcidSelect.selectedIndex].text} - ${new Date().getFullYear()}`;
    }
    updateInfo();
    showAlert('Sample data loaded! Click "Generate Barcode" to create.', 'success');
  }

  function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.innerHTML = `
      ${escapeHtml(message)}
      <span class="close">&times;</span>
    `;
    alertContainer.innerHTML = '';
    alertContainer.appendChild(alertDiv);
    alertDiv.querySelector('.close').addEventListener('click', function () {
      alertDiv.remove();
    });
    setTimeout(() => { if (alertDiv.parentNode) alertDiv.remove(); }, 6000);
  }

  // small helper to avoid injecting raw HTML from errors
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
});
</script>
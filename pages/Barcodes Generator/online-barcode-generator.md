---
layout: default
title: "Online Barcode Generator - Create 1D Linear Barcodes"
permalink: /online-barcode-generator-create-1d-linear-barcodes/
---


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Online Barcode Generator - Create 1D Linear Barcodes</title>
<meta name="description"
  content="Free online barcode generator tool. Create various 1D linear barcode types including UPC-A, EAN-13, Code 128, Code 39, and more for retail, inventory, and logistics.">
<meta name="keywords"
  content="barcode generator, 1d barcode, linear barcode, UPC-A, EAN-13, Code 128, Code 39, barcode creator, inventory barcode, retail barcode">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsbarcode/3.12.1/JsBarcode.all.min.js" integrity="sha512-fLmJPYDfCIAZ0gpG/iiIzPw113KquhzI1bxG0XhiLYyqm8Ax2lEiq1h1qv2vafH9tLzkjm4HYRWSeKoGFH4xIw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

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
    min-height: 120px;
    resize: vertical;
    font-family: 'Courier New', monospace;
    transition: border-color 0.3s;
  }

  .input-section textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .barcode-options {
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

  .barcode-types-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .barcode-type-card {
    background: white;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .barcode-type-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .barcode-type-card.active {
    background: #e3f2fd;
    border-left: 4px solid #2196f3;
  }

  .barcode-type-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .barcode-type-name {
    font-weight: 600;
    color: var(--primary);
    font-size: 1.1rem;
  }

  .barcode-type-example {
    font-family: 'Courier New', monospace;
    color: #666;
    font-size: 0.9rem;
  }

  .barcode-type-details {
    font-size: 0.85rem;
    color: #555;
    line-height: 1.4;
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

  .barcode-preview {
    margin: 30px 0;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .barcode-image {
    max-width: 100%;
    height: auto;
    margin: 20px 0;
    border: 1px solid #e0e0e0;
    padding: 15px;
    background: white;
  }

  .barcode-data {
    font-family: 'Courier New', monospace;
    background: #f8f9fa;
    padding: 15px;
    border-radius: 6px;
    margin: 15px 0;
    word-break: break-all;
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

    .barcode-types-grid {
      grid-template-columns: 1fr;
    }

    .barcode-options {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Barcode Generator</h1>
  <p class="welcome-message">Create professional 1D linear barcodes for retail, inventory, logistics, and more. Generate UPC-A, EAN-13, Code 128, Code 39, and other barcode types instantly.</p>

  <div class="converter-section">
    <h2>1D / Linear Barcode Generator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Character Count: </span>
        <span id="charCount">0</span>
      </div>
      <div class="counter-item">
        <span>Barcode Type: </span>
        <span id="barcodeType">CODE128</span>
      </div>
      <div class="counter-item">
        <span>Data Length: </span>
        <span id="dataLength">0</span>
      </div>
      <div class="counter-item">
        <span>Status: </span>
        <span id="barcodeStatus">Ready</span>
      </div>
    </div>

    <div class="barcode-types-grid">
      <div class="barcode-type-card active" data-type="CODE128" data-example="Code128ABC123">
        <div class="barcode-type-header">
          <span class="barcode-type-name">Code 128</span>
          <span class="barcode-type-example">Code128ABC123</span>
        </div>
        <div class="barcode-type-details">High-density alphanumeric barcode — widely used in logistics, shipping, and warehouse labels.</div>
      </div>

      <div class="barcode-type-card" data-type="CODE128A" data-example="CODE128A123">
        <div class="barcode-type-header">
          <span class="barcode-type-name">Code 128A</span>
          <span class="barcode-type-example">CODE128A123</span>
        </div>
        <div class="barcode-type-details">Subset for uppercase letters, digits, and control chars.</div>
      </div>

      <div class="barcode-type-card" data-type="CODE128B" data-example="Code128Babc">
        <div class="barcode-type-header">
          <span class="barcode-type-name">Code 128B</span>
          <span class="barcode-type-example">Code128Babc</span>
        </div>
        <div class="barcode-type-details">Subset for upper/lowercase letters and digits.</div>
      </div>

      <div class="barcode-type-card" data-type="CODE128C" data-example="123456789012">
        <div class="barcode-type-header">
          <span class="barcode-type-name">Code 128C</span>
          <span class="barcode-type-example">123456789012</span>
        </div>
        <div class="barcode-type-details">Subset optimized for numeric pairs (00–99).</div>
      </div>

      <div class="barcode-type-card" data-type="EAN13" data-example="5901234123457">
        <div class="barcode-type-header">
          <span class="barcode-type-name">EAN-13</span>
          <span class="barcode-type-example">5901234123457</span>
        </div>
        <div class="barcode-type-details">13-digit retail barcode standard (international).</div>
      </div>

      <div class="barcode-type-card" data-type="EAN8" data-example="96385074">
        <div class="barcode-type-header">
          <span class="barcode-type-name">EAN-8</span>
          <span class="barcode-type-example">96385074</span>
        </div>
        <div class="barcode-type-details">Shorter 8-digit retail barcode used for small items.</div>
      </div>

      <div class="barcode-type-card" data-type="UPC" data-example="12345678905">
        <div class="barcode-type-header">
          <span class="barcode-type-name">UPC-A</span>
          <span class="barcode-type-example">12345678905</span>
        </div>
        <div class="barcode-type-details">12-digit numeric barcode used in USA/Canada retail.</div>
      </div>

      <div class="barcode-type-card" data-type="CODE39" data-example="CODE39EXAMPLE">
        <div class="barcode-type-header">
          <span class="barcode-type-name">CODE39</span>
          <span class="barcode-type-example">CODE39EXAMPLE</span>
        </div>
        <div class="barcode-type-details">Simple alphanumeric barcode (A–Z, 0–9, - . $ / + % space). Common in industry and inventory.</div>
      </div>

      <div class="barcode-type-card" data-type="ITF14" data-example="12345678901234">
        <div class="barcode-type-header">
          <span class="barcode-type-name">ITF-14</span>
          <span class="barcode-type-example">12345678901234</span>
        </div>
        <div class="barcode-type-details">Numeric-only barcode for outer cartons and packaging.</div>
      </div>

      <div class="barcode-type-card" data-type="MSI" data-example="123456">
        <div class="barcode-type-header">
          <span class="barcode-type-name">MSI (Modified Plessey)</span>
          <span class="barcode-type-example">123456</span>
        </div>
        <div class="barcode-type-details">Numeric barcode for inventory, retail shelf labels.</div>
      </div>

      <div class="barcode-type-card" data-type="codabar" data-example="A123456A">
        <div class="barcode-type-header">
          <span class="barcode-type-name">Codabar</span>
          <span class="barcode-type-example">A123456A</span>
        </div>
        <div class="barcode-type-details">Used in logistics, blood banks, libraries. Supports 0–9 and A–D.</div>
      </div>

      <div class="barcode-type-card" data-type="pharmacode" data-example="12345">
        <div class="barcode-type-header">
          <span class="barcode-type-name">Pharmacode</span>
          <span class="barcode-type-example">12345</span>
        </div>
        <div class="barcode-type-details">Binary barcode used on pharmaceutical packaging.</div>
      </div>
    </div>

    <div class="input-section">
      <h2>Barcode Data</h2>
      <textarea id="barcodeInput" rows="3" placeholder="Enter barcode data...">Code128ABC123</textarea>
      <div class="example-text" style="font-size: 0.9rem; color: #666; margin-top: 5px;">Example: <span id="currentExample">Code128ABC123</span></div>
    </div>

    <div class="barcode-options">
      <div class="option-group">
        <label class="option-label">Barcode Size</label>
        <select id="barcodeSize" class="option-select">
          <option value="1">Small</option>
          <option value="2" selected>Medium</option>
          <option value="3">Large</option>
          <option value="4">Extra Large</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Output Format</label>
        <select id="outputFormat" class="option-select">
          <option value="png" selected>PNG</option>
          <option value="svg">SVG</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Show Text</label>
        <select id="showText" class="option-select">
          <option value="true" selected>Yes</option>
          <option value="false">No</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Background Color</label>
        <input type="color" id="bgColor" class="option-input" value="#ffffff">
      </div>

      <div class="option-group">
        <label class="option-label">Foreground Color</label>
        <input type="color" id="fgColor" class="option-input" value="#000000">
      </div>
    </div>

    <div class="button-section">
      <button class="case-button success" data-action="generate">Generate Barcode</button>
      <button class="case-button" data-action="validate">Validate Data</button>
      <button class="case-button" data-action="copy">Copy Data</button>
      <button class="case-button warning" data-action="download">Download Barcode</button>
      <button class="case-button secondary" data-action="clear">Clear</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="barcode-preview">
      <h2>Barcode Preview</h2>
      <div id="barcodeOutput" class="barcode-data">Barcode will appear here after generation</div>
      <div id="barcodeImageContainer">
        <svg id="barcodeImage"></svg>
      </div>
      <div class="barcode-info">
        <div id="barcodeInfo">No barcode generated yet</div>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Barcode Generator Tool</h2>

    <p>Create professional 1D linear barcodes instantly with our free online barcode generator. Whether you need UPC-A for retail products, Code 128 for shipping labels, or Code 39 for inventory management, our tool supports all major barcode formats. Generate high-quality barcodes in PNG or SVG formats with customizable sizes and colors. No download required, no registration needed, and your data privacy is guaranteed as all processing happens securely in your browser.</p>

    <h3>How to Generate Barcodes (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Barcode Type:</strong> Choose from popular 1D barcode formats like UPC-A, EAN-13, Code 128, Code 39, and more based on your needs.</li>
      <li><strong>Enter Data:</strong> Input the numeric or alphanumeric data you want to encode in the barcode. Make sure it matches the requirements for your selected barcode type.</li>
      <li><strong>Customize Appearance:</strong> Adjust the size, colors, and output format to match your requirements.</li>
      <li><strong>Generate & Download:</strong> Click "Generate Barcode" to create your barcode, then download it in your preferred format (PNG or SVG).</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a small business owner who needs to create UPC-A barcodes for your retail products. Instead of purchasing expensive barcode software or hiring a designer, you can use our free online tool. Simply select UPC-A, enter your 12-digit product number, customize the size and appearance, and generate professional barcodes ready for printing on product packaging. The entire process takes less than 30 seconds and costs nothing.</p>

    <h3>Supported Barcode Types & Applications:</h3>
    <ul>
      <li><strong>Code 128 (High-density):</strong> Logistics, shipping labels, warehouse management</li>
      <li><strong>UPC-A (12-digit numeric):</strong> Retail products in the USA and Canada</li>
      <li><strong>EAN-13 (13-digit numeric):</strong> International retail products worldwide</li>
      <li><strong>Code 39 (alphanumeric):</strong> Inventory tracking, military, industrial applications</li>
      <li><strong>ITF-14 (Interleaved 2 of 5):</strong> Carton labeling, packaging with numeric data</li>
      <li><strong>Codabar (numeric + A/B/C/D):</strong> Libraries, blood banks, logistics</li>
      <li><strong>MSI Plessey:</strong> Retail shelf labels, inventory management</li>
      <li><strong>Pharmacode:</strong> Pharmaceutical packaging and drug identification</li>
    </ul>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Small Businesses:</strong> Create professional barcodes for product labeling without expensive software</li>
      <li><strong>Inventory Managers:</strong> Generate barcodes for stock tracking and warehouse management</li>
      <li><strong>Retailers:</strong> Produce UPC and EAN barcodes for retail products</li>
      <li><strong>Logistics Companies:</strong> Create shipping labels with Code 128 barcodes</li>
      <li><strong>Libraries & Educational Institutions:</strong> Generate Codabar barcodes for book tracking</li>
      <li><strong>Pharmaceutical Companies:</strong> Create Pharmacode barcodes for drug packaging</li>
      <li><strong>Students & Developers:</strong> Learn about barcode technology and integration</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>What is the difference between 1D and 2D barcodes?</strong><br>
      1D barcodes (linear barcodes) store data in parallel lines of varying widths, while 2D barcodes (like QR codes) store data in both horizontal and vertical dimensions, allowing them to hold much more information.</p>

    <p><strong>Is there a limit to how many barcodes I can generate?</strong><br>
      No, you can generate unlimited barcodes completely free of charge. There are no usage limits or restrictions.</p>

    <p><strong>Is my barcode data kept private and secure?</strong><br>
      Absolutely. All barcode generation happens locally in your browser. Your data is never sent to our servers, ensuring complete privacy and security for sensitive information.</p>

    <p><strong>Can I use the generated barcodes commercially?</strong><br>
      Yes, all barcodes generated with our tool are free for personal and commercial use. However, for certain barcode types like UPC-A used in retail, you may need to purchase a unique company prefix from GS1.</p>

    <p><strong>Do I need special software to read the generated barcodes?</strong><br>
      The barcodes generated are standard 1D linear barcodes that can be read by any standard barcode scanner or smartphone barcode reading app.</p>

    <h3>Why Choose Our Barcode Generator?</h3>
    <p>Our online barcode generator stands out for its simplicity, versatility, and privacy. Unlike many online tools, we don't store your data on our servers - all processing happens locally in your browser. This means your product codes, inventory numbers, and other sensitive data remain completely private. The tool supports all major 1D barcode formats and provides high-quality output suitable for professional printing.</p>

    <h3>Common Applications of Barcode Generation</h3>
    <p>Barcode technology has numerous practical applications across various industries:</p>
    <ul>
      <li><strong>Retail & E-commerce:</strong> Product identification, pricing, and inventory management</li>
      <li><strong>Logistics & Shipping:</strong> Package tracking, shipping labels, and delivery management</li>
      <li><strong>Healthcare:</strong> Patient identification, medication tracking, and specimen labeling</li>
      <li><strong>Library Systems:</strong> Book tracking, membership cards, and inventory management</li>
      <li><strong>Manufacturing:</strong> Work-in-process tracking, quality control, and asset management</li>
      <li><strong>Event Management:</strong> Ticket validation, access control, and attendance tracking</li>
      <li><strong>Pharmaceutical:</strong> Drug identification, batch tracking, and safety compliance</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const barcodeInput = document.getElementById('barcodeInput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const barcodeTypeCards = document.querySelectorAll('.barcode-type-card');
    const barcodeOutput = document.getElementById('barcodeOutput');
    const barcodeImage = document.getElementById('barcodeImage');
    const barcodeInfo = document.getElementById('barcodeInfo');
    const currentExample = document.getElementById('currentExample');
    
    // Barcode options
    const barcodeSize = document.getElementById('barcodeSize');
    const outputFormat = document.getElementById('outputFormat');
    const showText = document.getElementById('showText');
    const bgColor = document.getElementById('bgColor');
    const fgColor = document.getElementById('fgColor');
    
    // Current barcode type
    let currentBarcodeType = 'CODE128';
    let currentBarcodeExample = 'Code128ABC123';
    let generatedBarcodeData = '';

    // Initialize counters
    updateCounts();

    // Event listeners
    barcodeInput.addEventListener('input', updateCounts);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleBarcodeAction(action);
      });
    });

    // Barcode type selection
    barcodeTypeCards.forEach(card => {
      card.addEventListener('click', function() {
        // Remove active class from all cards
        barcodeTypeCards.forEach(c => c.classList.remove('active'));
        // Add active class to clicked card
        this.classList.add('active');
        // Update current barcode type
        currentBarcodeType = this.getAttribute('data-type');
        currentBarcodeExample = this.getAttribute('data-example');
        // Update example text
        currentExample.textContent = currentBarcodeExample;
        // Update input with example if empty
        if (!barcodeInput.value.trim()) {
          barcodeInput.value = currentBarcodeExample;
        }
        updateCounts();
        validateBarcodeData();
      });
    });

    function updateCounts() {
      const data = barcodeInput.value;

      // Character count
      document.getElementById('charCount').textContent = data.length;

      // Barcode type
      document.getElementById('barcodeType').textContent = getBarcodeTypeName(currentBarcodeType);

      // Data length
      document.getElementById('dataLength').textContent = data.length;

      // Validate data for current barcode type
      validateBarcodeData();
    }

    function getBarcodeTypeName(type) {
      const typeNames = {
        'CODE128': 'Code 128',
        'CODE128A': 'Code 128A',
        'CODE128B': 'Code 128B',
        'CODE128C': 'Code 128C',
        'EAN13': 'EAN-13',
        'EAN8': 'EAN-8',
        'UPC': 'UPC-A',
        'CODE39': 'CODE39',
        'ITF14': 'ITF-14',
        'MSI': 'MSI Plessey',
        'codabar': 'Codabar',
        'pharmacode': 'Pharmacode'
      };
      return typeNames[type] || type;
    }

    function validateBarcodeData() {
      const data = barcodeInput.value;
      let isValid = true;
      let message = 'Data is valid for ' + getBarcodeTypeName(currentBarcodeType);

      // Validation rules for different barcode types
      switch(currentBarcodeType) {
        case 'UPC':
          if (data.length !== 12 || !/^\d+$/.test(data)) {
            isValid = false;
            message = 'UPC-A requires exactly 12 numeric digits';
          }
          break;
        case 'EAN13':
          if (data.length !== 13 || !/^\d+$/.test(data)) {
            isValid = false;
            message = 'EAN-13 requires exactly 13 numeric digits';
          }
          break;
        case 'EAN8':
          if (data.length !== 8 || !/^\d+$/.test(data)) {
            isValid = false;
            message = 'EAN-8 requires exactly 8 numeric digits';
          }
          break;
        case 'CODE39':
          if (!/^[A-Z0-9\-\.\$\+\/%\s]+$/.test(data.toUpperCase())) {
            isValid = false;
            message = 'CODE39 supports A-Z, 0-9, and symbols: - . $ + / % space';
          }
          break;
        case 'ITF14':
          if (!/^\d+$/.test(data) || (data.length < 12 || data.length > 14)) {
            isValid = false;
            message = 'ITF-14 requires 12-14 numeric digits';
          }
          break;
        case 'MSI':
          if (!/^\d+$/.test(data)) {
            isValid = false;
            message = 'MSI requires numeric digits only';
          }
          break;
        case 'codabar':
          if (!/^[A-D]?[0-9\-:\$\/\.\+]*[A-D]?$/.test(data)) {
            isValid = false;
            message = 'Codabar supports numbers and start/stop characters A, B, C, D';
          }
          break;
        case 'pharmacode':
          if (!/^\d+$/.test(data) || parseInt(data) < 3 || parseInt(data) > 131070) {
            isValid = false;
            message = 'Pharmacode requires numeric value between 3 and 131070';
          }
          break;
        // Code 128 variants have minimal validation as they support wide character sets
      }

      document.getElementById('barcodeStatus').textContent = isValid ? 'Valid' : 'Invalid';
      document.getElementById('barcodeStatus').style.color = isValid ? 'green' : 'red';

      return { isValid, message };
    }

    function handleBarcodeAction(action) {
      const data = barcodeInput.value;
      
      switch (action) {
        case 'generate':
          generateBarcode();
          break;

        case 'validate':
          const validation = validateBarcodeData();
          if (validation.isValid) {
            showAlert(validation.message, 'success');
          } else {
            showAlert(validation.message, 'error');
          }
          break;

        case 'copy':
          copyToClipboard(data);
          break;

        case 'download':
          if (!generatedBarcodeData) {
            showAlert('Please generate a barcode first.', 'error');
            return;
          }
          downloadBarcode();
          break;

        case 'clear':
          barcodeInput.value = '';
          barcodeOutput.textContent = 'Barcode will appear here after generation';
          barcodeImage.innerHTML = '';
          barcodeInfo.textContent = 'No barcode generated yet';
          generatedBarcodeData = '';
          updateCounts();
          break;
      }
    }

    function generateBarcode() {
      const data = barcodeInput.value;
      const validation = validateBarcodeData();

      if (!validation.isValid) {
        showAlert(validation.message, 'error');
        return;
      }

      try {
        // Clear previous barcode
        barcodeImage.innerHTML = '';
        
        // Generate new barcode using JsBarcode
        JsBarcode("#barcodeImage", data, {
          format: currentBarcodeType,
          width: parseFloat(barcodeSize.value),
          height: 60,
          displayValue: showText.value === 'true',
          lineColor: fgColor.value,
          background: bgColor.value,
          margin: 10
        });

        generatedBarcodeData = data;
        barcodeOutput.textContent = data;
        barcodeInfo.textContent = `Type: ${getBarcodeTypeName(currentBarcodeType)} | Data: ${data} | Size: ${barcodeSize.options[barcodeSize.selectedIndex].text}`;
        
        showAlert('Barcode generated successfully!', 'success');
      } catch (error) {
        showAlert('Error generating barcode: ' + error.message, 'error');
      }
    }

    function downloadBarcode() {
      const format = outputFormat.value;
      const svgElement = document.getElementById('barcodeImage');
      
      if (!svgElement || !svgElement.innerHTML) {
        showAlert('No barcode generated to download.', 'error');
        return;
      }

      try {
        if (format === 'svg') {
          // Download as SVG
          const svgData = new XMLSerializer().serializeToString(svgElement);
          const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          downloadFile(url, `barcode_${currentBarcodeType}.svg`);
        } else if (format === 'png') {
          // Convert SVG to PNG for download
          const svgData = new XMLSerializer().serializeToString(svgElement);
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const img = new Image();
          
          img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            
            const pngUrl = canvas.toDataURL('image/png');
            downloadFile(pngUrl, `barcode_${currentBarcodeType}.png`);
          };
          
          img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
        }
      } catch (error) {
        showAlert('Error downloading barcode: ' + error.message, 'error');
      }
    }

    function downloadFile(url, filename) {
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showAlert(`Barcode downloaded as ${filename}`, 'success');
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Barcode data copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy data: ' + err, 'error');
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
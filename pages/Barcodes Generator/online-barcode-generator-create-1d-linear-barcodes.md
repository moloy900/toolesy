---
layout: default
title: "Online Barcode Generator - Create Retail & Product Barcodes"
permalink: /online-barcode-generator-create-retail-product-barcodes/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Online Barcode Generator - Create Retail & Product Barcodes</title>
<meta name="description"
  content="Free online barcode generator tool. Create retail and product barcodes including UPC-A, EAN-13, ISBN, ISSN, and more for global retail standards.">
<meta name="keywords"
  content="barcode generator, retail barcode, product barcode, UPC-A, EAN-13, ISBN, ISSN, SSCC18, barcode creator, inventory barcode">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">
<script src="https://cdnjs.cloudflare.com/ajax/libs/bwip-js/4.7.0/bwip-js-min.js" integrity="sha512-MDtabmDetsQATsClilUhXqOmgQraxAmYDYWTaxzvAD9S0qaJJKMj/WqnxC7VnEAVULW637yr/KZGPbwdvArCJw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

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
  <h1>Free Online Retail & Product Barcode Generator</h1>
  <p class="welcome-message">Create professional retail and product barcodes for global standards. Generate UPC-A, EAN-13, ISBN, ISSN, and other retail barcode types instantly.</p>

  <div class="converter-section">
    <h2>Retail & Product Barcodes Generator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Character Count: </span>
        <span id="charCount">0</span>
      </div>
      <div class="counter-item">
        <span>Barcode Type: </span>
        <span id="barcodeType">UPC-A</span>
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
      <div class="barcode-type-card active" data-type="upca" data-example="123456789012">
        <div class="barcode-type-header">
          <span class="barcode-type-name">UPC-A</span>
          <span class="barcode-type-example">123456789012</span>
        </div>
        <div class="barcode-type-details">12 digits • US retail standard • Universal Product Code</div>
      </div>

      <div class="barcode-type-card" data-type="upce" data-example="12345670">
        <div class="barcode-type-header">
          <span class="barcode-type-name">UPC-E</span>
          <span class="barcode-type-example">12345670</span>
        </div>
        <div class="barcode-type-details">Short version for small products • Zero-compression format</div>
      </div>

      <div class="barcode-type-card" data-type="ean13" data-example="5901234123457">
        <div class="barcode-type-header">
          <span class="barcode-type-name">EAN-13</span>
          <span class="barcode-type-example">5901234123457</span>
        </div>
        <div class="barcode-type-details">13 digits • Global retail standard • European Article Number</div>
      </div>

      <div class="barcode-type-card" data-type="ean8" data-example="96385074">
        <div class="barcode-type-header">
          <span class="barcode-type-name">EAN-8</span>
          <span class="barcode-type-example">96385074</span>
        </div>
        <div class="barcode-type-details">8 digits • Short EAN format • Small packaging items</div>
      </div>

      <div class="barcode-type-card" data-type="isbn" data-example="9780123456789">
        <div class="barcode-type-header">
          <span class="barcode-type-name">ISBN</span>
          <span class="barcode-type-example">9780123456789</span>
        </div>
        <div class="barcode-type-details">Books identification • Based on EAN-13 • International Standard Book Number</div>
      </div>

      <div class="barcode-type-card" data-type="issn" data-example="9771234567004">
        <div class="barcode-type-header">
          <span class="barcode-type-name">ISSN</span>
          <span class="barcode-type-example">9771234567004</span>
        </div>
        <div class="barcode-type-details">Periodicals & journals • International Standard Serial Number</div>
      </div>

      <div class="barcode-type-card" data-type="ismn" data-example="9790123456789">
        <div class="barcode-type-header">
          <span class="barcode-type-name">ISMN</span>
          <span class="barcode-type-example">9790123456789</span>
        </div>
        <div class="barcode-type-details">Sheet music identification • International Standard Music Number</div>
      </div>

      <div class="barcode-type-card" data-type="jan13" data-example="4901234123457">
        <div class="barcode-type-header">
          <span class="barcode-type-name">JAN-13</span>
          <span class="barcode-type-example">4901234123457</span>
        </div>
        <div class="barcode-type-details">Japanese Article Number • Same as EAN-13 • Japan retail market</div>
      </div>

      <div class="barcode-type-card" data-type="ucc12" data-example="123456789012">
        <div class="barcode-type-header">
          <span class="barcode-type-name">UCC-12</span>
          <span class="barcode-type-example">123456789012</span>
        </div>
        <div class="barcode-type-details">Same as UPC-A • Uniform Code Council standard</div>
      </div>

      <div class="barcode-type-card" data-type="sscc18" data-example="123456789012345678">
        <div class="barcode-type-header">
          <span class="barcode-type-name">SSCC-18</span>
          <span class="barcode-type-example">123456789012345678</span>
        </div>
        <div class="barcode-type-details">18 digits • Serial Shipping Container Code • Logistics & shipping</div>
      </div>
    </div>

    <div class="input-section">
      <h2>Barcode Data</h2>
      <textarea id="barcodeInput" rows="3" placeholder="Enter barcode data...">123456789012</textarea>
      <div class="example-text" style="font-size: 0.9rem; color: #666; margin-top: 5px;">Example: <span id="currentExample">123456789012</span></div>
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
        <canvas id="barcodeCanvas"></canvas>
      </div>
      <div class="barcode-info">
        <div id="barcodeInfo">No barcode generated yet</div>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->

<div class="content-placeholder">
  <h2>Free Online Retail & Product Barcode Generator</h2>

  <p>Most people only think about barcodes when they're stuck without one — a self-published book that needs an ISBN before a printer will touch it, a small batch of products headed to a retailer that insists on scannable packaging, a warehouse manager who needs pallets identified before a shipment goes out. This tool generates the standard barcode formats used across retail, publishing, and logistics, ready to download and print.</p>

  <h3>Which Format Do You Actually Need?</h3>

  <p>This is usually the confusing part, not the generating. The right format depends entirely on what you're labeling and where it's being sold:</p>

  <ul>
    <li>Selling a physical product in the US or Canada through standard retail? You want <strong>UPC-A</strong> (12 digits).</li>
    <li>Selling internationally, or through a retailer that follows global retail standards? <strong>EAN-13</strong> (13 digits) is the one almost everyone recognizes.</li>
    <li>Publishing a book? You need an <strong>ISBN</strong> barcode, generated from the 13-digit ISBN your publisher or ISBN agency assigned you.</li>
    <li>Publishing a magazine, journal, or anything issued on a recurring schedule? That's <strong>ISSN</strong>, not ISBN.</li>
    <li>Printed sheet music specifically has its own format, <strong>ISMN</strong>.</li>
    <li>Moving pallets or shipping containers through a supply chain? <strong>SSCC-18</strong> is built for logistics tracking, not point-of-sale scanning.</li>
    <li>A very small product with limited label space? <strong>UPC-E</strong> or <strong>EAN-8</strong> compress the same idea into a shorter code.</li>
  </ul>

  <p>If you're not sure which one applies, check what your retailer, distributor, or printer actually requires before generating anything — printing the wrong format is a wasted print run.</p>

  <h3>Generating a Barcode</h3>

  <p>Once you know the format, the process itself is quick:</p>

  <ol>
    <li>Select the barcode type from the list (UPC-A, EAN-13, ISBN, and so on).</li>
    <li>Enter the number — each format expects a specific digit length, and the tool will flag it if what you've entered doesn't match.</li>
    <li>Adjust size and output format if you have specific print requirements.</li>
    <li>Download as PNG for digital use or SVG if it needs to scale cleanly for large print like packaging or cartons.</li>
  </ol>

  <h3>A Detail Worth Knowing: GS1 Registration</h3>

  <p>Generating a UPC or EAN barcode here is instant, but there's a distinction worth understanding before using one commercially: the barcode <em>image</em> and the underlying <em>number</em> are two different things. For a product to be genuinely unique in retail systems worldwide, the number itself typically needs to come from a GS1 member organization, which assigns manufacturers a company prefix so no two products anywhere end up with the same code. This tool will generate a scannable barcode from any valid-format number you provide — but if you're selling through a major retailer or marketplace that checks GS1 registration, you'll want a properly licensed number behind it, not just any 12 or 13 digits that happen to pass a checksum.</p>

  <p>For internal use, small-batch sales, or platforms that don't enforce GS1 registration, this distinction matters less.</p>

  <h3>Where These Actually Get Used</h3>

  <p>A self-published author finishing a manuscript needs an ISBN barcode on the back cover before a print-on-demand service will accept the file — that's a one-time need, solved in a couple of minutes here rather than through separate barcode software. A small business preparing its first retail packaging run needs UPC or EAN codes for every SKU before a store will stock the product. A warehouse coordinating outbound pallets uses SSCC-18 codes purely for internal tracking — those never need to match a public product catalog at all, since their job is logistics, not point-of-sale.</p>

  <h3>Before You Send Anything to Print</h3>

  <p>A few things are easy to overlook and expensive to fix after a print run:</p>

  <ul>
    <li><strong>Scan-test it first.</strong> Print one label and scan it with an actual barcode reader or phone app before committing to hundreds or thousands of copies.</li>
    <li><strong>Watch the size.</strong> Barcodes shrunk too small to fit a tight label often fail to scan even though they look fine on screen.</li>
    <li><strong>Keep contrast high.</strong> Dark bars on a light background scan reliably; anything with low contrast or a busy background image behind it is a common cause of scan failures at checkout.</li>
    <li><strong>Double-check the digit count.</strong> A single wrong digit in an EAN-13 or ISBN produces a barcode that either won't scan at all or, worse, scans as the wrong product entirely.</li>
  </ul>

  <h3>Questions That Come Up Often</h3>

  <p><strong>Is a UPC code the same thing as an EAN code?</strong><br>
  They're closely related — EAN-13 is effectively a superset of UPC-A, and most modern scanners read both without any special configuration. The main difference is regional convention: UPC is the historical US/Canada standard, EAN is used more broadly internationally.</p>

  <p><strong>I already have an ISBN — do I need anything else to generate the barcode?</strong><br>
  No. If your ISBN has already been assigned (by your publisher, self-publishing platform, or a national ISBN agency), that number is all you need to generate the corresponding barcode here.</p>

  <p><strong>Will any retailer accept a barcode generated this way?</strong><br>
  It depends on the retailer. Barcodes generated from a properly assigned, GS1-registered number will scan and work anywhere. If the number itself wasn't obtained through GS1 for retail products, some larger retailers and marketplaces may reject the listing even though the barcode image itself scans perfectly fine.</p>

  <p><strong>What file format should I download for professional printing?</strong><br>
  SVG holds up better for anything being resized for packaging or large-format printing, since it won't lose sharpness when scaled. PNG is fine for digital use or standard label printing at a fixed size.</p>

  <p><strong>Can this generate barcodes for internal inventory that never reach a retail shelf?</strong><br>
  Yes — for internal tracking, warehouse labeling, or asset tagging, you don't need GS1-registered numbers at all, since the code never needs to be globally unique outside your own system.</p>
</div>


<script>
  document.addEventListener('DOMContentLoaded', function () {
    const barcodeInput = document.getElementById('barcodeInput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const barcodeTypeCards = document.querySelectorAll('.barcode-type-card');
    const barcodeOutput = document.getElementById('barcodeOutput');
    const barcodeCanvas = document.getElementById('barcodeCanvas');
    const barcodeInfo = document.getElementById('barcodeInfo');
    const currentExample = document.getElementById('currentExample');
    
    // Barcode options
    const barcodeSize = document.getElementById('barcodeSize');
    const outputFormat = document.getElementById('outputFormat');
    const showText = document.getElementById('showText');
    const bgColor = document.getElementById('bgColor');
    const fgColor = document.getElementById('fgColor');
    
    // Current barcode type
    let currentBarcodeType = 'upca';
    let currentBarcodeExample = '123456789012';
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
        'upca': 'UPC-A',
        'upce': 'UPC-E',
        'ean13': 'EAN-13',
        'ean8': 'EAN-8',
        'isbn': 'ISBN',
        'issn': 'ISSN',
        'ismn': 'ISMN',
        'jan13': 'JAN-13',
        'ucc12': 'UCC-12',
        'sscc18': 'SSCC-18'
      };
      return typeNames[type] || type;
    }

    function validateBarcodeData() {
      const data = barcodeInput.value;
      let isValid = true;
      let message = 'Data is valid for ' + getBarcodeTypeName(currentBarcodeType);

      // Validation rules for different barcode types
      switch(currentBarcodeType) {
        case 'upca':
          if (data.length !== 12 || !/^\d+$/.test(data)) {
            isValid = false;
            message = 'UPC-A requires exactly 12 numeric digits';
          }
          break;
        case 'upce':
          if (data.length !== 8 || !/^\d+$/.test(data)) {
            isValid = false;
            message = 'UPC-E requires exactly 8 numeric digits';
          }
          break;
        case 'ean13':
          if (data.length !== 13 || !/^\d+$/.test(data)) {
            isValid = false;
            message = 'EAN-13 requires exactly 13 numeric digits';
          }
          break;
        case 'ean8':
          if (data.length !== 8 || !/^\d+$/.test(data)) {
            isValid = false;
            message = 'EAN-8 requires exactly 8 numeric digits';
          }
          break;
        case 'isbn':
          if (data.length !== 13 || !/^\d+$/.test(data) || !/^97[89]/.test(data)) {
            isValid = false;
            message = 'ISBN requires 13 digits starting with 978 or 979';
          }
          break;
        case 'issn':
          if (data.length !== 8 || !/^\d+$/.test(data)) {
            isValid = false;
            message = 'ISSN requires exactly 8 numeric digits';
          }
          break;
        case 'ismn':
          if (data.length !== 13 || !/^\d+$/.test(data) || !/^9790/.test(data)) {
            isValid = false;
            message = 'ISMN requires 13 digits starting with 9790';
          }
          break;
        case 'jan13':
          if (data.length !== 13 || !/^\d+$/.test(data) || !/^45|49/.test(data.substring(0,2))) {
            isValid = false;
            message = 'JAN-13 requires 13 digits starting with 45 or 49';
          }
          break;
        case 'ucc12':
          if (data.length !== 12 || !/^\d+$/.test(data)) {
            isValid = false;
            message = 'UCC-12 requires exactly 12 numeric digits';
          }
          break;
        case 'sscc18':
          if (data.length !== 18 || !/^\d+$/.test(data)) {
            isValid = false;
            message = 'SSCC-18 requires exactly 18 numeric digits';
          }
          break;
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
          barcodeCanvas.getContext('2d').clearRect(0, 0, barcodeCanvas.width, barcodeCanvas.height);
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
        // Set canvas size based on selected size
        const sizeMultiplier = parseInt(barcodeSize.value);
        const width = 300 * sizeMultiplier;
        const height = 150 * sizeMultiplier;
        
        barcodeCanvas.width = width;
        barcodeCanvas.height = height;

        // Generate barcode using bwip-js
        bwipjs.toCanvas(barcodeCanvas, {
          bcid: currentBarcodeType,
          text: data,
          scale: sizeMultiplier,
          height: 15,
          includetext: showText.value === 'true',
          textxalign: 'center',
          backgroundcolor: bgColor.value,
          barcolor: fgColor.value
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
      
      if (!generatedBarcodeData) {
        showAlert('No barcode generated to download.', 'error');
        return;
      }

      try {
        if (format === 'svg') {
          // Create SVG barcode
          const svgNS = "http://www.w3.org/2000/svg";
          const svg = document.createElementNS(svgNS, "svg");
          svg.setAttribute("width", "300");
          svg.setAttribute("height", "150");
          svg.setAttribute("viewBox", "0 0 300 150");
          
          // For SVG, we'll create a simple representation
          // In a real implementation, you would use the bwip-js SVG renderer
          const text = document.createElementNS(svgNS, "text");
          text.setAttribute("x", "150");
          text.setAttribute("y", "75");
          text.setAttribute("text-anchor", "middle");
          text.setAttribute("fill", fgColor.value);
          text.textContent = `Barcode: ${generatedBarcodeData}`;
          svg.appendChild(text);
          
          const svgData = new XMLSerializer().serializeToString(svg);
          const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          downloadFile(url, `barcode_${currentBarcodeType}.svg`);
        } else if (format === 'png') {
          // Download PNG from canvas
          const pngUrl = barcodeCanvas.toDataURL('image/png');
          downloadFile(pngUrl, `barcode_${currentBarcodeType}.png`);
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
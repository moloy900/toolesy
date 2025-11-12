---
layout: default
title: "Online Torque Converter - Convert Torque Units Accurately"
permalink: /online-torque-converter-convert-torque-units-accurately/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Torque Converter - Convert Torque Units Accurately</title>
<meta name="description"
  content="Free online torque converter tool. Convert between Newton-meter, Pound-force foot, Kilogram-force meter and other torque units instantly. Accurate and easy to use.">
<meta name="keywords"
  content="torque converter, torque conversion, newton meter, pound foot, kgf meter, torque calculator, unit converter, mechanical engineering">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Torque Converter Styles */
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

  /* Torque Converter specific styles */
  .conversion-options {
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
    width: 100%;
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

  .unit-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .unit-category {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .unit-category h3 {
    color: var(--primary);
    margin-bottom: 15px;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 10px;
  }

  .unit-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .unit-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  .unit-item:hover {
    background: #e9ecef;
  }

  .unit-name {
    font-weight: 500;
    color: #2c3e50;
  }

  .unit-value {
    font-weight: bold;
    color: var(--primary);
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

    .conversion-options {
      grid-template-columns: 1fr;
    }

    .unit-categories {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Torque Converter</h1>
  <p class="welcome-message">Convert between Newton-meter, Pound-force foot, Kilogram-force meter and other torque units instantly. Accurate conversions for engineering and mechanical applications.</p>

  <div class="converter-section">
    <h2>Torque Unit Converter</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Input Value: </span>
        <span id="inputValue">0</span>
      </div>
      <div class="counter-item">
        <span>From Unit: </span>
        <span id="fromUnit">N·m</span>
      </div>
      <div class="counter-item">
        <span>To Unit: </span>
        <span id="toUnit">lbf·ft</span>
      </div>
      <div class="counter-item">
        <span>Result: </span>
        <span id="resultValue">0</span>
      </div>
    </div>

    <div class="conversion-options">
      <div class="option-group">
        <label class="option-label">Input Value</label>
        <input type="number" id="torqueInput" class="option-input" value="1" step="0.001">
      </div>
      
      <div class="option-group">
        <label class="option-label">From Unit</label>
        <select id="fromUnitSelect" class="option-select">
          <option value="N·m">Newton-meter (N·m)</option>
          <option value="kN·m">Kilonewton-meter (kN·m)</option>
          <option value="N·cm">Newton-centimeter (N·cm)</option>
          <option value="dyne·cm">Dyne-centimeter (dyne·cm)</option>
          <option value="J">Joule (J)</option>
          <option value="lbf·ft">Pound-force foot (lbf·ft)</option>
          <option value="lbf·in">Pound-force inch (lbf·in)</option>
          <option value="ozf·in">Ounce-force inch (ozf·in)</option>
          <option value="ft·lb">Foot-pound (ft·lb)</option>
          <option value="kgf·m">Kilogram-force meter (kgf·m)</option>
          <option value="kgf·cm">Kilogram-force centimeter (kgf·cm)</option>
          <option value="gf·cm">Gram-force centimeter (gf·cm)</option>
          <option value="tf·m">Ton-force meter (tf·m)</option>
          <option value="tf·ft">Ton-force foot (tf·ft)</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">To Unit</label>
        <select id="toUnitSelect" class="option-select">
          <option value="lbf·ft">Pound-force foot (lbf·ft)</option>
          <option value="N·m">Newton-meter (N·m)</option>
          <option value="kN·m">Kilonewton-meter (kN·m)</option>
          <option value="N·cm">Newton-centimeter (N·cm)</option>
          <option value="dyne·cm">Dyne-centimeter (dyne·cm)</option>
          <option value="J">Joule (J)</option>
          <option value="lbf·in">Pound-force inch (lbf·in)</option>
          <option value="ozf·in">Ounce-force inch (ozf·in)</option>
          <option value="ft·lb">Foot-pound (ft·lb)</option>
          <option value="kgf·m">Kilogram-force meter (kgf·m)</option>
          <option value="kgf·cm">Kilogram-force centimeter (kgf·cm)</option>
          <option value="gf·cm">Gram-force centimeter (gf·cm)</option>
          <option value="tf·m">Ton-force meter (tf·m)</option>
          <option value="tf·ft">Ton-force foot (tf·ft)</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="autoConvert" checked>
          <label for="autoConvert">Auto Convert</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="showFormula">
          <label for="showFormula">Show Conversion Formula</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="convert">Convert Torque</button>
        <button class="case-button" data-action="swap">Swap Units</button>
        <button class="case-button" data-action="reset">Reset</button>
        <button class="case-button" data-action="copy">Copy Result</button>
        <button class="case-button success" data-action="save">Save Conversion</button>
        <button class="case-button warning" data-action="history">View History</button>
        <button class="case-button secondary" data-action="clear">Clear All</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="unit-categories">
      <div class="unit-category">
        <h3>SI / Metric Units</h3>
        <div class="unit-list">
          <div class="unit-item">
            <span class="unit-name">Newton-meter (N·m)</span>
            <span class="unit-value" id="N·m">1.000</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Kilonewton-meter (kN·m)</span>
            <span class="unit-value" id="kN·m">0.001</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Newton-centimeter (N·cm)</span>
            <span class="unit-value" id="N·cm">100.000</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Dyne-centimeter (dyne·cm)</span>
            <span class="unit-value" id="dyne·cm">10000000.000</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Joule (J)</span>
            <span class="unit-value" id="J">1.000</span>
          </div>
        </div>
      </div>

      <div class="unit-category">
        <h3>Imperial / US Units</h3>
        <div class="unit-list">
          <div class="unit-item">
            <span class="unit-name">Pound-force foot (lbf·ft)</span>
            <span class="unit-value" id="lbf·ft">0.7376</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Pound-force inch (lbf·in)</span>
            <span class="unit-value" id="lbf·in">8.8507</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Ounce-force inch (ozf·in)</span>
            <span class="unit-value" id="ozf·in">141.6117</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Foot-pound (ft·lb)</span>
            <span class="unit-value" id="ft·lb">0.7376</span>
          </div>
        </div>
      </div>

      <div class="unit-category">
        <h3>Industrial Units</h3>
        <div class="unit-list">
          <div class="unit-item">
            <span class="unit-name">Kilogram-force meter (kgf·m)</span>
            <span class="unit-value" id="kgf·m">0.1020</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Kilogram-force centimeter (kgf·cm)</span>
            <span class="unit-value" id="kgf·cm">10.1972</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Gram-force centimeter (gf·cm)</span>
            <span class="unit-value" id="gf·cm">10197.1621</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Ton-force meter (tf·m)</span>
            <span class="unit-value" id="tf·m">0.0001</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Ton-force foot (tf·ft)</span>
            <span class="unit-value" id="tf·ft">0.0003</span>
          </div>
        </div>
      </div>
    </div>

    <div class="examples">
      <h2>Common Torque Conversions</h2>

      <h3>Automotive Applications:</h3>
      <div class="example-text">• Wheel nuts: 80-120 N·m ≈ 59-88 lbf·ft
• Engine bolts: 20-60 N·m ≈ 15-44 lbf·ft
• Spark plugs: 15-30 N·m ≈ 11-22 lbf·ft</div>

      <h3>Industrial Applications:</h3>
      <div class="example-text">• Small motors: 0.1-5 N·m ≈ 0.07-3.7 lbf·ft
• Machine tools: 50-500 N·m ≈ 37-369 lbf·ft
• Large machinery: 1000-5000 N·m ≈ 738-3688 lbf·ft</div>

      <h3>Conversion Formulas:</h3>
      <div class="example-text">1 N·m = 0.737562 lbf·ft
1 lbf·ft = 1.355818 N·m
1 kgf·m = 9.80665 N·m
1 N·m = 10.197162 kgf·cm</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Torque Converter Tool</h2>

    <p>Need accurate torque conversions for engineering, automotive, or mechanical applications? Our free <strong>Torque Converter tool</strong> provides instant and precise conversions between all major torque units. Convert between Newton-meters, Pound-feet, Kilogram-force meters, and many other units with just a few clicks. This essential tool is perfect for engineers, mechanics, students, and DIY enthusiasts who work with torque specifications across different measurement systems.</p>

    <h3>How to Use This Torque Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Value:</strong> Input the torque value you want to convert in the "Input Value" field</li>
      <li><strong>Select From Unit:</strong> Choose the unit of your input value from the "From Unit" dropdown</li>
      <li><strong>Select To Unit:</strong> Choose the unit you want to convert to from the "To Unit" dropdown</li>
      <li><strong>Convert:</strong> Click the "Convert Torque" button or let auto-convert handle it automatically</li>
      <li><strong>View Results:</strong> See the converted value and explore all unit equivalents in the categories below</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're an automotive mechanic working on an imported European car. The repair manual specifies torque values in Newton-meters (N·m), but your torque wrench is calibrated in Pound-feet (lbf·ft). Instead of manual calculations or searching through conversion tables, you can simply enter the N·m value from the manual into our converter, select N·m as the "From Unit" and lbf·ft as the "To Unit". The tool instantly provides the exact equivalent value, ensuring you apply the correct torque to critical components like cylinder heads, wheel nuts, or engine mounts.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Automotive Technicians:</strong> Convert between metric and imperial torque specifications for various vehicle systems</li>
      <li><strong>Mechanical Engineers:</strong> Work with international standards and convert between different unit systems</li>
      <li><strong>Industrial Maintenance:</strong> Ensure proper torque settings for machinery from different countries</li>
      <li><strong>Students & Educators:</strong> Learn torque unit relationships and verify calculations</li>
      <li><strong>DIY Enthusiasts:</strong> Properly torque components when working with tools from different regions</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What is the difference between N·m and lbf·ft?</strong><br>
      Newton-meter (N·m) is the SI unit of torque, while Pound-force foot (lbf·ft) is the imperial unit. 1 N·m equals approximately 0.7376 lbf·ft, and 1 lbf·ft equals approximately 1.3558 N·m.</p>

    <p><strong>Are Joule (J) and Newton-meter (N·m) the same?</strong><br>
      Yes, in terms of dimensional analysis, 1 Joule equals 1 Newton-meter. However, Joule is typically used for energy, while Newton-meter is used for torque.</p>

    <p><strong>How accurate are the conversions?</strong><br>
      Our torque converter uses precise conversion factors with high decimal precision, making it suitable for engineering and technical applications where accuracy is critical.</p>

    <p><strong>Can I use this tool on my mobile phone?</strong><br>
      Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>Do I need to create an account or pay to use this?</strong><br>
      No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our Torque Converter?</h3>
    <p>Our <strong>online torque converter</strong> stands out from other tools because of its comprehensive unit coverage, high precision, and user-friendly interface. We include all major torque units from SI/metric, imperial/US, and industrial systems. The tool provides instant results with professional-grade accuracy that engineers and technicians can rely on for critical applications.</p>

    <h3>Common Applications of Torque Conversion</h3>
    <p>Torque conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Automotive Repair:</strong> Converting torque specs between different measurement systems for proper component installation</li>
      <li><strong>Manufacturing:</strong> Ensuring consistent torque settings across international production facilities</li>
      <li><strong>Aerospace:</strong> Working with precision torque requirements in both metric and imperial units</li>
      <li><strong>Construction:</strong> Proper torque application for structural bolts and fasteners</li>
      <li><strong>Education:</strong> Teaching students about measurement systems and unit conversions</li>
    </ul>
  </div>
</div>

<!-- Conversion History Modal -->
<div id="historyModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Conversion History</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div id="historyList" style="max-height: 400px; overflow-y: auto;">
        <!-- History items will be added here -->
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="clearHistory">Clear History</button>
      <button class="modal-button primary" id="closeHistory">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const torqueInput = document.getElementById('torqueInput');
    const fromUnitSelect = document.getElementById('fromUnitSelect');
    const toUnitSelect = document.getElementById('toUnitSelect');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const autoConvert = document.getElementById('autoConvert');
    const showFormula = document.getElementById('showFormula');
    
    // Modal elements
    const historyModal = document.getElementById('historyModal');
    const historyList = document.getElementById('historyList');
    const clearHistory = document.getElementById('clearHistory');
    const closeHistory = document.getElementById('closeHistory');
    const closeModal = document.querySelectorAll('.close-modal');
    
    // Conversion factors relative to 1 N·m
    const conversionFactors = {
      // SI / Metric Units
      'N·m': 1,
      'kN·m': 0.001,
      'N·cm': 100,
      'dyne·cm': 10000000,
      'J': 1,
      
      // Imperial / US Units
      'lbf·ft': 0.73756214927727,
      'lbf·in': 8.8507457913272,
      'ozf·in': 141.61193266124,
      'ft·lb': 0.73756214927727,
      
      // Industrial Units
      'kgf·m': 0.10197162129779,
      'kgf·cm': 10.197162129779,
      'gf·cm': 10197.162129779,
      'tf·m': 0.00010197162129779,
      'tf·ft': 0.00033455256331297
    };

    // Store conversion history
    let conversionHistory = JSON.parse(localStorage.getItem('torqueConversionHistory')) || [];

    // Initialize converter
    updateAllConversions();
    displayHistory();

    // Event listeners
    torqueInput.addEventListener('input', function() {
      if (autoConvert.checked) {
        updateAllConversions();
      }
      updateInputDisplay();
    });

    fromUnitSelect.addEventListener('change', function() {
      if (autoConvert.checked) {
        updateAllConversions();
      }
      updateUnitDisplays();
    });

    toUnitSelect.addEventListener('change', function() {
      if (autoConvert.checked) {
        updateConversionResult();
      }
      updateUnitDisplays();
    });

    autoConvert.addEventListener('change', function() {
      if (this.checked) {
        updateAllConversions();
      }
    });

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleTorqueAction(action);
      });
    });

    // Modal event listeners
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        historyModal.style.display = 'none';
      });
    });

    clearHistory.addEventListener('click', function() {
      conversionHistory = [];
      localStorage.setItem('torqueConversionHistory', JSON.stringify(conversionHistory));
      displayHistory();
      showAlert('Conversion history cleared!', 'success');
    });

    closeHistory.addEventListener('click', function() {
      historyModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === historyModal) {
        historyModal.style.display = 'none';
      }
    });

    function updateInputDisplay() {
      document.getElementById('inputValue').textContent = parseFloat(torqueInput.value).toFixed(4);
    }

    function updateUnitDisplays() {
      document.getElementById('fromUnit').textContent = fromUnitSelect.value;
      document.getElementById('toUnit').textContent = toUnitSelect.value;
    }

    function updateAllConversions() {
      const inputValue = parseFloat(torqueInput.value) || 0;
      const fromUnit = fromUnitSelect.value;
      
      // Convert input to base unit (N·m)
      const baseValue = inputValue / conversionFactors[fromUnit];
      
      // Update all unit displays
      Object.keys(conversionFactors).forEach(unit => {
        const element = document.getElementById(unit);
        if (element) {
          const convertedValue = baseValue * conversionFactors[unit];
          element.textContent = convertedValue.toFixed(4);
        }
      });
      
      // Update main conversion result
      updateConversionResult();
      updateInputDisplay();
      updateUnitDisplays();
    }

    function updateConversionResult() {
      const inputValue = parseFloat(torqueInput.value) || 0;
      const fromUnit = fromUnitSelect.value;
      const toUnit = toUnitSelect.value;
      
      // Convert through base unit (N·m)
      const baseValue = inputValue / conversionFactors[fromUnit];
      const resultValue = baseValue * conversionFactors[toUnit];
      
      document.getElementById('resultValue').textContent = resultValue.toFixed(6);
    }

    function handleTorqueAction(action) {
      const inputValue = parseFloat(torqueInput.value) || 0;
      const fromUnit = fromUnitSelect.value;
      const toUnit = toUnitSelect.value;
      
      // Convert through base unit (N·m)
      const baseValue = inputValue / conversionFactors[fromUnit];
      const resultValue = baseValue * conversionFactors[toUnit];

      switch (action) {
        case 'convert':
          updateAllConversions();
          showAlert('Torque converted successfully!', 'success');
          break;

        case 'swap':
          // Swap the from and to units
          const tempUnit = fromUnitSelect.value;
          fromUnitSelect.value = toUnitSelect.value;
          toUnitSelect.value = tempUnit;
          updateAllConversions();
          showAlert('Units swapped!', 'success');
          break;

        case 'reset':
          torqueInput.value = '1';
          fromUnitSelect.value = 'N·m';
          toUnitSelect.value = 'lbf·ft';
          updateAllConversions();
          showAlert('Converter reset!', 'success');
          break;

        case 'copy':
          const resultText = `${inputValue} ${fromUnit} = ${resultValue.toFixed(6)} ${toUnit}`;
          copyToClipboard(resultText);
          break;

        case 'save':
          addToHistory(inputValue, fromUnit, resultValue, toUnit);
          showAlert('Conversion saved to history!', 'success');
          break;

        case 'history':
          displayHistory();
          historyModal.style.display = 'block';
          break;

        case 'clear':
          torqueInput.value = '';
          updateAllConversions();
          showAlert('Input cleared!', 'success');
          break;
      }
    }

    function addToHistory(inputValue, fromUnit, resultValue, toUnit) {
      const conversion = {
        timestamp: new Date().toISOString(),
        input: inputValue,
        fromUnit: fromUnit,
        result: resultValue,
        toUnit: toUnit
      };
      
      conversionHistory.unshift(conversion);
      
      // Keep only last 50 conversions
      if (conversionHistory.length > 50) {
        conversionHistory = conversionHistory.slice(0, 50);
      }
      
      localStorage.setItem('torqueConversionHistory', JSON.stringify(conversionHistory));
      displayHistory();
    }

    function displayHistory() {
      historyList.innerHTML = '';
      
      if (conversionHistory.length === 0) {
        historyList.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">No conversion history yet.</p>';
        return;
      }
      
      conversionHistory.forEach((conversion, index) => {
        const historyItem = document.createElement('div');
        historyItem.className = 'unit-item';
        historyItem.style.marginBottom = '10px';
        
        const date = new Date(conversion.timestamp).toLocaleString();
        historyItem.innerHTML = `
          <div>
            <strong>${conversion.input} ${conversion.fromUnit} = ${conversion.result.toFixed(6)} ${conversion.toUnit}</strong>
            <div style="font-size: 0.8em; color: #666;">${date}</div>
          </div>
          <button class="case-button" style="padding: 5px 10px; font-size: 0.8em;" data-index="${index}">Use</button>
        `;
        
        historyList.appendChild(historyItem);
        
        // Add event listener to use button
        historyItem.querySelector('button').addEventListener('click', function() {
          const historyIndex = parseInt(this.getAttribute('data-index'));
          const historyItem = conversionHistory[historyIndex];
          
          torqueInput.value = historyItem.input;
          fromUnitSelect.value = historyItem.fromUnit;
          toUnitSelect.value = historyItem.toUnit;
          updateAllConversions();
          historyModal.style.display = 'none';
          showAlert('Conversion loaded from history!', 'success');
        });
      });
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Result copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy result: ' + err, 'error');
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
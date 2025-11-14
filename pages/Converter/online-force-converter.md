---
layout: default
title: "Online Force Converter - Convert Between Different Force Units"
permalink: /online-force-converter-convert-between-different-force-units/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Force Converter - Convert Between Different Force Units</title>
<meta name="description"
  content="Free online force converter tool. Convert between Newton, kilonewton, dyne, pound-force, kilogram-force and many other force units instantly.">
<meta name="keywords"
  content="force converter, newton converter, pound-force converter, dyne converter, kgf converter, force unit conversion, physics calculator, engineering converter">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Force Converter Styles */
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

  .conversion-interface {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 20px;
    align-items: end;
    margin: 30px 0;
  }

  .input-group {
    display: flex;
    flex-direction: column;
  }

  .input-group label {
    font-weight: 600;
    margin-bottom: 8px;
    color: #2c3e50;
  }

  .input-group input,
  .input-group select {
    padding: 15px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .input-group input:focus,
  .input-group select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .swap-button {
    padding: 15px 20px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    transition: all 0.3s ease;
  }

  .swap-button:hover {
    background: #2980b9;
    transform: scale(1.05);
  }

  .unit-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }

  .category-card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-left: 4px solid var(--primary);
  }

  .category-card h3 {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.3rem;
  }

  .unit-list {
    display: grid;
    gap: 10px;
  }

  .unit-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 6px;
    transition: all 0.3s ease;
  }

  .unit-item:hover {
    background: #e9ecef;
    transform: translateX(5px);
  }

  .unit-name {
    font-weight: 600;
    color: #2c3e50;
  }

  .unit-symbol {
    color: #6c757d;
    font-style: italic;
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

  .conversion-history {
    margin-top: 30px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .history-item {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    gap: 15px;
    padding: 12px;
    border-bottom: 1px solid #e9ecef;
    align-items: center;
  }

  .history-item:last-child {
    border-bottom: none;
  }

  .history-value {
    font-weight: bold;
    color: var(--primary);
  }

  .history-arrow {
    text-align: center;
    color: #6c757d;
    font-size: 1.2rem;
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

    .conversion-interface {
      grid-template-columns: 1fr;
      gap: 15px;
    }

    .swap-button {
      order: 3;
      margin-top: 10px;
    }

    .unit-categories {
      grid-template-columns: 1fr;
    }

    .history-item {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 8px;
    }

    .history-arrow {
      transform: rotate(90deg);
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Force Converter</h1>
  <p class="welcome-message">Convert between different force units instantly. Supports Newton, kilonewton, dyne, pound-force, kilogram-force and many other units used in physics and engineering.</p>

  <div class="converter-section">
    <h2>Force Unit Converter</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Conversions Today: </span>
        <span id="conversionCount">0</span>
      </div>
      <div class="counter-item">
        <span>Available Units: </span>
        <span id="unitCount">15</span>
      </div>
      <div class="counter-item">
        <span>Last Conversion: </span>
        <span id="lastConversion">-</span>
      </div>
      <div class="counter-item">
        <span>Precision: </span>
        <span id="precisionLevel">6 decimal places</span>
      </div>
    </div>

    <div class="conversion-interface">
      <div class="input-group">
        <label for="fromValue">From Value</label>
        <input type="number" id="fromValue" placeholder="Enter value" step="any" value="1">
      </div>

      <button class="swap-button" id="swapUnits">
        <i class="fas fa-exchange-alt"></i>
      </button>

      <div class="input-group">
        <label for="toValue">To Value</label>
        <input type="number" id="toValue" placeholder="Result" readonly>
      </div>
    </div>

    <div class="conversion-interface">
      <div class="input-group">
        <label for="fromUnit">From Unit</label>
        <select id="fromUnit">
          <optgroup label="SI / Metric Units">
            <option value="N" selected>Newton (N)</option>
            <option value="kN">kilonewton (kN)</option>
            <option value="MN">meganewton (MN)</option>
            <option value="GN">giganewton (GN)</option>
            <option value="mN">millinewton (mN)</option>
            <option value="µN">micronewton (µN)</option>
          </optgroup>
          <optgroup label="CGS Units">
            <option value="dyne">dyne</option>
            <option value="kilodyne">kilodyne</option>
            <option value="megadyne">megadyne</option>
          </optgroup>
          <optgroup label="Imperial / US Customary Units">
            <option value="lbf">pound-force (lbf)</option>
            <option value="kip">kilopound-force (kip)</option>
            <option value="ozf">ounce-force (ozf)</option>
            <option value="tonf_short">ton-force (short ton)</option>
            <option value="tonf_long">ton-force (long ton)</option>
            <option value="poundal">poundal</option>
          </optgroup>
          <optgroup label="Technical Units">
            <option value="kgf">kilogram-force (kgf)</option>
            <option value="gf">gram-force (gf)</option>
            <option value="tf">tonne-force (tf)</option>
          </optgroup>
        </select>
      </div>

      <div style="display: flex; align-items: center; justify-content: center;">
        <i class="fas fa-arrow-right" style="font-size: 24px; color: var(--primary);"></i>
      </div>

      <div class="input-group">
        <label for="toUnit">To Unit</label>
        <select id="toUnit">
          <optgroup label="SI / Metric Units">
            <option value="N">Newton (N)</option>
            <option value="kN" selected>kilonewton (kN)</option>
            <option value="MN">meganewton (MN)</option>
            <option value="GN">giganewton (GN)</option>
            <option value="mN">millinewton (mN)</option>
            <option value="µN">micronewton (µN)</option>
          </optgroup>
          <optgroup label="CGS Units">
            <option value="dyne">dyne</option>
            <option value="kilodyne">kilodyne</option>
            <option value="megadyne">megadyne</option>
          </optgroup>
          <optgroup label="Imperial / US Customary Units">
            <option value="lbf">pound-force (lbf)</option>
            <option value="kip">kilopound-force (kip)</option>
            <option value="ozf">ounce-force (ozf)</option>
            <option value="tonf_short">ton-force (short ton)</option>
            <option value="tonf_long">ton-force (long ton)</option>
            <option value="poundal">poundal</option>
          </optgroup>
          <optgroup label="Technical Units">
            <option value="kgf">kilogram-force (kgf)</option>
            <option value="gf">gram-force (gf)</option>
            <option value="tf">tonne-force (tf)</option>
          </optgroup>
        </select>
      </div>
    </div>

    <div class="button-section">
      <button class="case-button" data-action="convert">Convert</button>
      <button class="case-button" data-action="reset">Reset</button>
      <button class="case-button" data-action="swap">Swap Units</button>
      <button class="case-button success" data-action="copy">Copy Result</button>
      <button class="case-button warning" data-action="history">View History</button>
      <button class="case-button secondary" data-action="clear">Clear All</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="unit-categories">
      <div class="category-card">
        <h3>SI / Metric Units</h3>
        <div class="unit-list">
          <div class="unit-item">
            <span class="unit-name">Newton</span>
            <span class="unit-symbol">N</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">kilonewton</span>
            <span class="unit-symbol">kN</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">meganewton</span>
            <span class="unit-symbol">MN</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">giganewton</span>
            <span class="unit-symbol">GN</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">millinewton</span>
            <span class="unit-symbol">mN</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">micronewton</span>
            <span class="unit-symbol">µN</span>
          </div>
        </div>
      </div>

      <div class="category-card">
        <h3>CGS Units</h3>
        <div class="unit-list">
          <div class="unit-item">
            <span class="unit-name">dyne</span>
            <span class="unit-symbol">dyne</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">kilodyne</span>
            <span class="unit-symbol">kilodyne</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">megadyne</span>
            <span class="unit-symbol">megadyne</span>
          </div>
        </div>
      </div>

      <div class="category-card">
        <h3>Imperial / US Customary Units</h3>
        <div class="unit-list">
          <div class="unit-item">
            <span class="unit-name">pound-force</span>
            <span class="unit-symbol">lbf</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">kilopound-force</span>
            <span class="unit-symbol">kip</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">ounce-force</span>
            <span class="unit-symbol">ozf</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">ton-force (short)</span>
            <span class="unit-symbol">tonf</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">ton-force (long)</span>
            <span class="unit-symbol">tonf</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">poundal</span>
            <span class="unit-symbol">poundal</span>
          </div>
        </div>
      </div>

      <div class="category-card">
        <h3>Technical Units</h3>
        <div class="unit-list">
          <div class="unit-item">
            <span class="unit-name">kilogram-force</span>
            <span class="unit-symbol">kgf</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">gram-force</span>
            <span class="unit-symbol">gf</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">tonne-force</span>
            <span class="unit-symbol">tf</span>
          </div>
        </div>
      </div>
    </div>

    <div class="conversion-history">
      <h3>Recent Conversions</h3>
      <div id="historyList">
        <!-- History items will be added here dynamically -->
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Force Converter Tool</h2>

    <p>Need to convert between different force units quickly and accurately? Our free <strong>Force Converter tool</strong> is the perfect solution for students, engineers, physicists, and professionals. This powerful tool instantly converts between Newton, kilonewton, dyne, pound-force, kilogram-force and many other force units used in various scientific and engineering applications. There's no download required, no registration needed, and all calculations happen securely right in your browser.</p>

    <h3>How to Use This Force Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Value:</strong> Type the numerical value you want to convert in the "From Value" input field.</li>
      <li><strong>Select Source Unit:</strong> Choose the unit you're converting from in the "From Unit" dropdown (e.g., Newton, pound-force, dyne).</li>
      <li><strong>Select Target Unit:</strong> Choose the unit you want to convert to in the "To Unit" dropdown.</li>
      <li><strong>Convert:</strong> Click the "Convert" button or simply press Enter to see the converted value instantly.</li>
      <li><strong>Use Results:</strong> Copy the result to clipboard, view conversion history, or swap units for reverse conversion.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're an engineer working on an international project where some specifications are in Newton (SI units) while others are in pound-force (Imperial units). Instead of manually calculating conversions or searching for conversion formulas, you can simply enter the value in Newton, select "Newton" as the source unit and "pound-force" as the target unit. The tool instantly provides the accurate conversion, saving time and eliminating calculation errors.</p>

    <h3>Supported Force Units & Systems:</h3>
    <ul>
      <li><strong>SI/Metric System:</strong> Newton (N), kilonewton (kN), meganewton (MN), giganewton (GN), millinewton (mN), micronewton (µN)</li>
      <li><strong>CGS System:</strong> dyne, kilodyne, megadyne</li>
      <li><strong>Imperial/US Customary:</strong> pound-force (lbf), kilopound-force (kip), ounce-force (ozf), ton-force (short and long), poundal</li>
      <li><strong>Technical Units:</strong> kilogram-force (kgf), gram-force (gf), tonne-force (metric ton-force)</li>
    </ul>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Engineering Students:</strong> Quickly convert force units for physics and engineering homework and projects.</li>
      <li><strong>Mechanical Engineers:</strong> Convert between different force measurement systems in design and analysis.</li>
      <li><strong>Physics Researchers:</strong> Easily work with force data from different measurement systems and publications.</li>
      <li><strong>Construction Professionals:</strong> Convert between metric and imperial force units for international projects.</li>
      <li><strong>Educators:</strong> Demonstrate force unit conversions in classroom settings with instant results.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What is the base unit for force in the SI system?</strong><br>
      The Newton (N) is the base unit for force in the International System of Units (SI). One Newton is defined as the force required to accelerate a mass of one kilogram at one meter per second squared.</p>

    <p><strong>How accurate are the conversions?</strong><br>
      Our force converter uses precise conversion factors and maintains high computational accuracy up to 15 decimal places for most conversions.</p>

    <p><strong>Is my data kept private when I use this tool?</strong><br>
      Absolutely. All calculations happen locally in your browser. Your input values and conversion results are never sent to any server, ensuring complete privacy and security.</p>

    <p><strong>Can I use this tool on my mobile device?</strong><br>
      Yes, our website and converter tool are fully responsive and optimized to work perfectly on all devices including smartphones and tablets.</p>

    <p><strong>Are there any limits on how many conversions I can perform?</strong><br>
      No, this is a completely free tool with no usage limits. You can perform as many conversions as you need.</p>

    <h3>Common Force Conversion Factors:</h3>
    <ul>
      <li>1 Newton (N) = 100,000 dyne</li>
      <li>1 Newton (N) ≈ 0.224809 pound-force (lbf)</li>
      <li>1 kilogram-force (kgf) = 9.80665 Newton (N)</li>
      <li>1 pound-force (lbf) = 4.44822 Newton (N)</li>
      <li>1 kilonewton (kN) = 1,000 Newton (N)</li>
      <li>1 meganewton (MN) = 1,000,000 Newton (N)</li>
    </ul>

    <h3>Why Choose Our Force Converter?</h3>
    <p>Our <strong>online force converter</strong> stands out from other tools because of its comprehensive unit coverage, precision, and user-friendly interface. Unlike many online converters, we support units from multiple measurement systems including SI, CGS, Imperial, and technical units. The tool provides instant results with high accuracy and maintains a history of your recent conversions for reference. Best of all, it works completely offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Applications of Force Conversion</h3>
    <p>Force unit conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Engineering Design:</strong> Converting force specifications between different measurement systems</li>
      <li><strong>Academic Research:</strong> Working with force data from international publications and studies</li>
      <li><strong>Manufacturing:</strong> Interpreting force specifications from international suppliers and customers</li>
      <li><strong>Construction:</strong> Converting building load specifications between metric and imperial systems</li>
      <li><strong>Physics Education:</strong> Teaching students about different force measurement systems and their relationships</li>
    </ul>
  </div>
</div>

<!-- History Modal -->
<div id="historyModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Conversion History</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div id="detailedHistoryList">
        <!-- Detailed history items will be added here dynamically -->
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
    const fromValue = document.getElementById('fromValue');
    const toValue = document.getElementById('toValue');
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    const swapButton = document.getElementById('swapUnits');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const historyList = document.getElementById('historyList');
    const detailedHistoryList = document.getElementById('detailedHistoryList');
    const historyModal = document.getElementById('historyModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const closeHistory = document.getElementById('closeHistory');
    const clearHistory = document.getElementById('clearHistory');

    // Conversion factors relative to Newton (base unit)
    const conversionFactors = {
      // SI / Metric Units
      'N': 1,
      'kN': 1000,
      'MN': 1000000,
      'GN': 1000000000,
      'mN': 0.001,
      'µN': 0.000001,
      
      // CGS Units
      'dyne': 0.00001,
      'kilodyne': 0.01,
      'megadyne': 10,
      
      // Imperial / US Customary Units
      'lbf': 4.4482216152605,
      'kip': 4448.2216152605,
      'ozf': 0.278013850953,
      'tonf_short': 8896.443230521,
      'tonf_long': 9964.016418183,
      'poundal': 0.138254954376,
      
      // Technical Units
      'kgf': 9.80665,
      'gf': 0.00980665,
      'tf': 9806.65
    };

    // Unit labels for display
    const unitLabels = {
      'N': 'Newton (N)',
      'kN': 'kilonewton (kN)',
      'MN': 'meganewton (MN)',
      'GN': 'giganewton (GN)',
      'mN': 'millinewton (mN)',
      'µN': 'micronewton (µN)',
      'dyne': 'dyne',
      'kilodyne': 'kilodyne',
      'megadyne': 'megadyne',
      'lbf': 'pound-force (lbf)',
      'kip': 'kilopound-force (kip)',
      'ozf': 'ounce-force (ozf)',
      'tonf_short': 'ton-force (short)',
      'tonf_long': 'ton-force (long)',
      'poundal': 'poundal',
      'kgf': 'kilogram-force (kgf)',
      'gf': 'gram-force (gf)',
      'tf': 'tonne-force (tf)'
    };

    let conversionHistory = JSON.parse(localStorage.getItem('forceConversionHistory')) || [];
    let conversionCount = parseInt(localStorage.getItem('forceConversionCount')) || 0;

    // Initialize
    updateUnitCount();
    updateHistoryDisplay();
    updateConversionCount();

    // Event listeners
    fromValue.addEventListener('input', convertForce);
    fromUnit.addEventListener('change', convertForce);
    toUnit.addEventListener('change', convertForce);
    
    swapButton.addEventListener('click', swapUnits);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleAction(action);
      });
    });

    // Modal event listeners
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        historyModal.style.display = 'none';
      });
    });

    closeHistory.addEventListener('click', function() {
      historyModal.style.display = 'none';
    });

    clearHistory.addEventListener('click', function() {
      conversionHistory = [];
      localStorage.setItem('forceConversionHistory', JSON.stringify(conversionHistory));
      updateHistoryDisplay();
      detailedHistoryList.innerHTML = '<p>No conversion history yet.</p>';
      showAlert('History cleared successfully!', 'success');
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === historyModal) {
        historyModal.style.display = 'none';
      }
    });

    function convertForce() {
      const inputValue = parseFloat(fromValue.value);
      
      if (isNaN(inputValue)) {
        toValue.value = '';
        return;
      }

      const fromUnitValue = fromUnit.value;
      const toUnitValue = toUnit.value;

      // Convert to base unit (Newton) first
      const valueInNewtons = inputValue * conversionFactors[fromUnitValue];
      
      // Convert from base unit to target unit
      const result = valueInNewtons / conversionFactors[toUnitValue];
      
      // Display result with appropriate precision
      toValue.value = formatResult(result);

      // Add to history
      addToHistory(inputValue, fromUnitValue, result, toUnitValue);
    }

    function formatResult(value) {
      if (value === 0) return '0';
      
      // Determine appropriate number of decimal places
      const absValue = Math.abs(value);
      if (absValue >= 1000) {
        return value.toFixed(2);
      } else if (absValue >= 100) {
        return value.toFixed(3);
      } else if (absValue >= 10) {
        return value.toFixed(4);
      } else if (absValue >= 1) {
        return value.toFixed(5);
      } else if (absValue >= 0.1) {
        return value.toFixed(6);
      } else if (absValue >= 0.01) {
        return value.toFixed(7);
      } else if (absValue >= 0.001) {
        return value.toFixed(8);
      } else {
        return value.toFixed(9);
      }
    }

    function swapUnits() {
      const tempUnit = fromUnit.value;
      fromUnit.value = toUnit.value;
      toUnit.value = tempUnit;
      
      const tempValue = fromValue.value;
      fromValue.value = toValue.value;
      toValue.value = tempValue;
      
      convertForce();
    }

    function addToHistory(inputValue, fromUnitValue, outputValue, toUnitValue) {
      const conversion = {
        input: inputValue,
        fromUnit: fromUnitValue,
        output: outputValue,
        toUnit: toUnitValue,
        timestamp: new Date().toLocaleString()
      };

      conversionHistory.unshift(conversion);
      
      // Keep only last 10 conversions in history
      if (conversionHistory.length > 10) {
        conversionHistory = conversionHistory.slice(0, 10);
      }

      // Update localStorage
      localStorage.setItem('forceConversionHistory', JSON.stringify(conversionHistory));
      
      // Update counters
      conversionCount++;
      localStorage.setItem('forceConversionCount', conversionCount.toString());
      updateConversionCount();
      
      // Update display
      updateHistoryDisplay();
    }

    function updateHistoryDisplay() {
      // Update main history list
      if (conversionHistory.length === 0) {
        historyList.innerHTML = '<p>No recent conversions. Convert some values to see them here.</p>';
        return;
      }

      let historyHTML = '';
      conversionHistory.slice(0, 5).forEach(conv => {
        historyHTML += `
          <div class="history-item">
            <div class="history-value">${conv.input} ${unitLabels[conv.fromUnit]}</div>
            <div class="history-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="history-value">${formatResult(conv.output)} ${unitLabels[conv.toUnit]}</div>
          </div>
        `;
      });
      
      historyList.innerHTML = historyHTML;

      // Update detailed history for modal
      let detailedHTML = '';
      conversionHistory.forEach(conv => {
        detailedHTML += `
          <div class="history-item">
            <div class="history-value">${conv.input} ${unitLabels[conv.fromUnit]}</div>
            <div class="history-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="history-value">${formatResult(conv.output)} ${unitLabels[conv.toUnit]}</div>
            <div style="font-size: 0.8rem; color: #6c757d; grid-column: 1 / -1; text-align: center;">
              ${conv.timestamp}
            </div>
          </div>
        `;
      });
      
      detailedHistoryList.innerHTML = detailedHTML;
    }

    function updateConversionCount() {
      document.getElementById('conversionCount').textContent = conversionCount;
      document.getElementById('lastConversion').textContent = conversionHistory.length > 0 ? conversionHistory[0].timestamp : '-';
    }

    function updateUnitCount() {
      const unitCount = Object.keys(conversionFactors).length;
      document.getElementById('unitCount').textContent = unitCount;
    }

    function handleAction(action) {
      switch (action) {
        case 'convert':
          convertForce();
          showAlert('Conversion completed successfully!', 'success');
          break;

        case 'reset':
          fromValue.value = '1';
          convertForce();
          showAlert('Values reset to default!', 'success');
          break;

        case 'swap':
          swapUnits();
          showAlert('Units swapped successfully!', 'success');
          break;

        case 'copy':
          copyToClipboard(toValue.value);
          break;

        case 'history':
          historyModal.style.display = 'block';
          break;

        case 'clear':
          fromValue.value = '';
          toValue.value = '';
          showAlert('All fields cleared!', 'success');
          break;
      }
    }

    function copyToClipboard(text) {
      if (!text) {
        showAlert('No result to copy! Please perform a conversion first.', 'error');
        return;
      }

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

    // Perform initial conversion
    convertForce();
  });
</script>
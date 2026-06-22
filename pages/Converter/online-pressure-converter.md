---
layout: default
title: "Online Pressure Converter - Convert Pressure Units Accurately"
permalink: /online-pressure-converter-convert-pressure-units-accurately/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Pressure Converter - Convert Pressure Units Accurately</title>
<meta name="description"
  content="Free online pressure converter tool. Convert between Pascal, PSI, Bar, Atmosphere and other pressure units instantly. Accurate conversions for engineering and scientific applications.">
<meta name="keywords"
  content="pressure converter, pressure conversion, pascal, psi, bar, atmosphere, torque calculator, unit converter, mechanical engineering, fluid dynamics">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Pressure Converter Styles */
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

  /* Pressure Converter specific styles */
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
  <h1>Free Online Pressure Converter</h1>
  <p class="welcome-message">Convert between Pascal, PSI, Bar, Atmosphere and other pressure units instantly. Accurate conversions for engineering, scientific, and industrial applications.</p>

  <div class="converter-section">
    <h2>Pressure Unit Converter</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Input Value: </span>
        <span id="inputValue">0</span>
      </div>
      <div class="counter-item">
        <span>From Unit: </span>
        <span id="fromUnit">Pa</span>
      </div>
      <div class="counter-item">
        <span>To Unit: </span>
        <span id="toUnit">psi</span>
      </div>
      <div class="counter-item">
        <span>Result: </span>
        <span id="resultValue">0</span>
      </div>
    </div>

    <div class="conversion-options">
      <div class="option-group">
        <label class="option-label">Input Value</label>
        <input type="number" id="pressureInput" class="option-input" value="101325" step="0.001">
      </div>
      
      <div class="option-group">
        <label class="option-label">From Unit</label>
        <select id="fromUnitSelect" class="option-select">
          <option value="Pa">Pascal (Pa)</option>
          <option value="kPa">Kilopascal (kPa)</option>
          <option value="MPa">Megapascal (MPa)</option>
          <option value="GPa">Gigapascal (GPa)</option>
          <option value="hPa">Hectopascal (hPa)</option>
          <option value="mPa">Millipascal (mPa)</option>
          <option value="bar">Bar (bar)</option>
          <option value="mbar">Millibar (mbar)</option>
          <option value="atm">Atmosphere (atm)</option>
          <option value="psi">Pound per Square Inch (psi)</option>
          <option value="psf">Pound per Square Foot (psf)</option>
          <option value="inHg">Inch of Mercury (inHg)</option>
          <option value="inH₂O">Inch of Water (inH₂O)</option>
          <option value="ftH₂O">Foot of Water (ftH₂O)</option>
          <option value="torr">Torr (torr)</option>
          <option value="mTorr">Millitorr (mTorr)</option>
          <option value="at">Technical Atmosphere (at)</option>
          <option value="kgf/cm²">Kilogram-force per Square Centimeter (kgf/cm²)</option>
          <option value="N/cm²">Newton per Square Centimeter (N/cm²)</option>
          <option value="N/mm²">Newton per Square Millimeter (N/mm²)</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">To Unit</label>
        <select id="toUnitSelect" class="option-select">
          <option value="psi">Pound per Square Inch (psi)</option>
          <option value="Pa">Pascal (Pa)</option>
          <option value="kPa">Kilopascal (kPa)</option>
          <option value="MPa">Megapascal (MPa)</option>
          <option value="GPa">Gigapascal (GPa)</option>
          <option value="hPa">Hectopascal (hPa)</option>
          <option value="mPa">Millipascal (mPa)</option>
          <option value="bar">Bar (bar)</option>
          <option value="mbar">Millibar (mbar)</option>
          <option value="atm">Atmosphere (atm)</option>
          <option value="psf">Pound per Square Foot (psf)</option>
          <option value="inHg">Inch of Mercury (inHg)</option>
          <option value="inH₂O">Inch of Water (inH₂O)</option>
          <option value="ftH₂O">Foot of Water (ftH₂O)</option>
          <option value="torr">Torr (torr)</option>
          <option value="mTorr">Millitorr (mTorr)</option>
          <option value="at">Technical Atmosphere (at)</option>
          <option value="kgf/cm²">Kilogram-force per Square Centimeter (kgf/cm²)</option>
          <option value="N/cm²">Newton per Square Centimeter (N/cm²)</option>
          <option value="N/mm²">Newton per Square Millimeter (N/mm²)</option>
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
        <button class="case-button" data-action="convert">Convert Pressure</button>
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
            <span class="unit-name">Pascal (Pa)</span>
            <span class="unit-value" id="Pa">101325.000</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Kilopascal (kPa)</span>
            <span class="unit-value" id="kPa">101.325</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Megapascal (MPa)</span>
            <span class="unit-value" id="MPa">0.101</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Gigapascal (GPa)</span>
            <span class="unit-value" id="GPa">0.000</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Hectopascal (hPa)</span>
            <span class="unit-value" id="hPa">1013.250</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Millipascal (mPa)</span>
            <span class="unit-value" id="mPa">101325000.000</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Bar (bar)</span>
            <span class="unit-value" id="bar">1.013</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Millibar (mbar)</span>
            <span class="unit-value" id="mbar">1013.250</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Atmosphere (atm)</span>
            <span class="unit-value" id="atm">1.000</span>
          </div>
        </div>
      </div>

      <div class="unit-category">
        <h3>Imperial / US Units</h3>
        <div class="unit-list">
          <div class="unit-item">
            <span class="unit-name">Pound per Square Inch (psi)</span>
            <span class="unit-value" id="psi">14.696</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Pound per Square Foot (psf)</span>
            <span class="unit-value" id="psf">2116.217</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Inch of Mercury (inHg)</span>
            <span class="unit-value" id="inHg">29.921</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Inch of Water (inH₂O)</span>
            <span class="unit-value" id="inH₂O">406.782</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Foot of Water (ftH₂O)</span>
            <span class="unit-value" id="ftH₂O">33.899</span>
          </div>
        </div>
      </div>

      <div class="unit-category">
        <h3>Scientific & Industrial Units</h3>
        <div class="unit-list">
          <div class="unit-item">
            <span class="unit-name">Torr (torr)</span>
            <span class="unit-value" id="torr">760.000</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Millitorr (mTorr)</span>
            <span class="unit-value" id="mTorr">760000.000</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Technical Atmosphere (at)</span>
            <span class="unit-value" id="at">1.033</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Kilogram-force per cm² (kgf/cm²)</span>
            <span class="unit-value" id="kgf/cm²">1.033</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Newton per cm² (N/cm²)</span>
            <span class="unit-value" id="N/cm²">10.132</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Newton per mm² (N/mm²)</span>
            <span class="unit-value" id="N/mm²">0.101</span>
          </div>
        </div>
      </div>
    </div>

    <div class="examples">
      <h2>Common Pressure Conversions</h2>

      <h3>Everyday Applications:</h3>
      <div class="example-text">• Standard Atmosphere: 101325 Pa = 14.696 psi = 1.013 bar
• Car Tire Pressure: 30-35 psi ≈ 207-241 kPa ≈ 2.07-2.41 bar
• Weather Reporting: 1013 mbar = 29.92 inHg = 760 mmHg</div>

      <h3>Industrial Applications:</h3>
      <div class="example-text">• Hydraulic Systems: 2000-5000 psi ≈ 13.8-34.5 MPa
• Scuba Diving: 200 bar ≈ 2900 psi (tank pressure)
• Vacuum Systems: 1 torr = 133.322 Pa = 0.00132 atm</div>

      <h3>Conversion Formulas:</h3>
      <div class="example-text">1 Pa = 0.000145038 psi
1 psi = 6894.76 Pa
1 bar = 100000 Pa = 14.5038 psi
1 atm = 101325 Pa = 14.6959 psi
1 torr = 133.322 Pa = 0.0193368 psi</div>
    </div>
  </div>

<div class="content-placeholder">

<h2>Free Online Pressure Converter Tool</h2>

<p>
Pressure is one of the most important physical measurements used in science, engineering, manufacturing, transportation, and everyday life. Whether you are checking the air pressure in your vehicle’s tires, monitoring industrial machinery, designing hydraulic systems, or conducting laboratory experiments, accurate pressure measurements are essential. Because different countries and industries use different pressure units, converting values correctly is often necessary.
</p>

<p>
Our <strong>Free Online Pressure Converter Tool</strong> makes pressure conversion fast, simple, and highly accurate. Instead of performing manual calculations or searching through conversion charts, you can instantly convert between Pascal (Pa), Kilopascal (kPa), Bar, PSI, Atmosphere (atm), Torr, Millimeter of Mercury (mmHg), and many other pressure units.
</p>

<p>
Whether you are an engineer, technician, scientist, student, researcher, or DIY enthusiast, this tool provides a reliable solution for converting pressure measurements across multiple unit systems. It works directly in your browser and delivers instant results without requiring software installation, registration, or subscriptions.
</p>

<h3>What Is Pressure?</h3>

<p>
Pressure is defined as the amount of force applied per unit area. In simple terms, it describes how strongly a force acts on a surface. The same force applied over a small area creates greater pressure than when applied over a larger area.
</p>

<p>
Mathematically, pressure is expressed as:
</p>

<p>
<strong>Pressure = Force ÷ Area</strong>
</p>

<p>
Pressure affects countless aspects of our lives. Air pressure influences weather patterns, hydraulic pressure powers heavy machinery, blood pressure impacts human health, and tire pressure affects vehicle safety and fuel efficiency.
</p>

<p>
Because pressure values can range from extremely low vacuum conditions to extremely high industrial pressures, multiple units are used to represent pressure in different fields.
</p>

<h3>How to Use This Pressure Converter</h3>

<p>
Using the pressure converter is simple and requires only a few steps:
</p>

<ul>

<li>
<strong>Step 1 – Enter the Pressure Value:</strong>
Type the numerical pressure value into the input field.
</li>

<li>
<strong>Step 2 – Select the Original Unit:</strong>
Choose the unit associated with your entered value.
</li>

<li>
<strong>Step 3 – Select the Target Unit:</strong>
Choose the unit you want to convert the pressure into.
</li>

<li>
<strong>Step 4 – View Instant Results:</strong>
The converter automatically calculates the equivalent pressure value.
</li>

<li>
<strong>Step 5 – Use the Converted Value:</strong>
Copy the result or use it in calculations, reports, engineering projects, or educational assignments.
</li>

</ul>

<p>
The entire process takes only seconds and helps eliminate errors that can occur during manual calculations.
</p>

<h3>Why Pressure Conversion Is Important</h3>

<p>
Different industries and countries often use different pressure measurement systems. For example, engineers in Europe commonly use bar and Pascal, while technicians in the United States frequently use PSI.
</p>

<p>
Without accurate pressure conversion, misunderstandings can occur when interpreting technical specifications, operating equipment, or comparing measurements from different sources.
</p>

<p>
Pressure conversion is especially important in industries such as manufacturing, automotive engineering, aerospace, medicine, oil and gas, HVAC systems, and scientific research.
</p>

<h3>Real-World Example of Pressure Conversion</h3>

<p>
Imagine that you purchase industrial equipment from a European manufacturer. The operating pressure is specified as 8 bar. However, your local pressure gauges display readings in PSI.
</p>

<p>
To configure the equipment correctly, you need to convert 8 bar into PSI. Instead of manually calculating the value, you can simply enter the pressure into the converter and instantly obtain the correct equivalent.
</p>

<p>
This helps prevent operational errors, improves safety, and ensures that equipment functions within its recommended pressure range.
</p>

<h3>Common Pressure Units Explained</h3>

<p>
Pressure can be expressed using various units depending on the industry and measurement system involved.
</p>

<ul>

<li>
<strong>Pascal (Pa)</strong><br>
The Pascal is the SI unit of pressure. One Pascal equals one Newton of force acting on an area of one square meter.
</li>

<li>
<strong>Kilopascal (kPa)</strong><br>
One kilopascal equals one thousand Pascals. It is commonly used in weather reports, engineering calculations, and industrial applications.
</li>

<li>
<strong>Megapascal (MPa)</strong><br>
One megapascal equals one million Pascals. It is often used when describing material strength, hydraulic systems, and high-pressure equipment.
</li>

<li>
<strong>Bar</strong><br>
The bar is a widely used metric pressure unit. One bar equals exactly 100,000 Pascals and is commonly used in automotive, industrial, and engineering fields.
</li>

<li>
<strong>Millibar (mbar)</strong><br>
A millibar is one-thousandth of a bar and is frequently used in meteorology and atmospheric pressure measurements.
</li>

<li>
<strong>PSI (Pounds per Square Inch)</strong><br>
PSI is one of the most common pressure units in the United States and is widely used for tire pressure, hydraulic systems, and industrial equipment.
</li>

<li>
<strong>Atmosphere (atm)</strong><br>
The atmosphere represents average sea-level atmospheric pressure and is commonly used in scientific and educational contexts.
</li>

<li>
<strong>Torr</strong><br>
The Torr is often used in vacuum technology and scientific research involving low-pressure systems.
</li>

<li>
<strong>Millimeter of Mercury (mmHg)</strong><br>
This unit is widely used in medicine for measuring blood pressure and in laboratory applications.
</li>

<li>
<strong>Inch of Mercury (inHg)</strong><br>
Commonly used in aviation, meteorology, and vacuum systems.
</li>

</ul>

<h3>Who Should Use This Pressure Converter?</h3>

<ul>

<li>
<strong>Mechanical Engineers:</strong>
Convert pressure specifications for hydraulic and pneumatic systems.
</li>

<li>
<strong>Chemical Engineers:</strong>
Work with pressure values in reactors, pipelines, and process equipment.
</li>

<li>
<strong>HVAC Technicians:</strong>
Convert refrigeration and air-conditioning pressure measurements.
</li>

<li>
<strong>Automotive Professionals:</strong>
Check tire pressures and vehicle system specifications.
</li>

<li>
<strong>Meteorologists:</strong>
Interpret atmospheric pressure readings from different measurement systems.
</li>

<li>
<strong>Scientists and Researchers:</strong>
Perform accurate pressure calculations for experiments and publications.
</li>

<li>
<strong>Students and Educators:</strong>
Learn pressure concepts and verify calculations.
</li>

</ul>

<h3>Pressure in Everyday Life</h3>

<p>
Many people associate pressure only with scientific equipment, but pressure plays a role in everyday activities. Inflating a bicycle tire, checking vehicle tire pressure, drinking through a straw, using a pressure cooker, and even monitoring blood pressure all involve pressure measurements.
</p>

<p>
Weather forecasts also rely heavily on atmospheric pressure. High-pressure systems are generally associated with stable weather conditions, while low-pressure systems often bring clouds, wind, and precipitation.
</p>

<p>
Understanding pressure and its units helps people make better decisions in both technical and daily situations.
</p>

<h3>Frequently Asked Questions</h3>

<p>
<strong>What is the SI unit of pressure?</strong><br>
The Pascal (Pa) is the official SI unit of pressure and is widely used in scientific and engineering calculations.
</p>

<p>
<strong>What is PSI?</strong><br>
PSI stands for Pounds per Square Inch and is commonly used in the United States for measuring tire pressure, hydraulic pressure, and industrial system pressure.
</p>

<p>
<strong>Are bar and atmosphere the same?</strong><br>
No. They are very close but not identical. One atmosphere is slightly greater than one bar.
</p>

<p>
<strong>Why do different industries use different pressure units?</strong><br>
Different industries evolved using different measurement systems. As a result, multiple pressure units remain in use worldwide today.
</p>

<p>
<strong>How accurate are the conversion results?</strong><br>
Our pressure converter uses internationally recognized conversion standards and high-precision mathematical calculations. This level of accuracy makes it suitable for educational, scientific, engineering, industrial, and professional applications where reliable measurements are essential.
</p>

<p>
<strong>Can I use this converter on mobile devices?</strong><br>
Yes. The tool is fully responsive and works seamlessly on smartphones, tablets, laptops, and desktop computers. You can perform pressure conversions anytime and anywhere with an internet connection.
</p>

<p>
<strong>Is the tool free to use?</strong><br>
Absolutely. There are no registration requirements, subscription fees, or hidden charges. You can perform unlimited pressure conversions at no cost.
</p>

<p>
<strong>Can pressure conversions help prevent equipment damage?</strong><br>
Yes. Using the correct pressure units helps ensure that machinery, pipelines, hydraulic systems, and pneumatic equipment operate within their recommended limits, reducing the risk of failures and costly repairs.
</p>

<h3>Common Pressure Conversion Factors</h3>

<p>
Understanding frequently used conversion factors can make pressure calculations easier and help verify results when working across different unit systems.
</p>

<ul>

<li><strong>1 Bar = 100,000 Pascal (Pa)</strong></li>

<li><strong>1 Bar ≈ 14.5038 PSI</strong></li>

<li><strong>1 PSI ≈ 0.06895 Bar</strong></li>

<li><strong>1 Atmosphere (atm) = 101,325 Pascal (Pa)</strong></li>

<li><strong>1 Atmosphere ≈ 1.01325 Bar</strong></li>

<li><strong>1 Atmosphere ≈ 14.696 PSI</strong></li>

<li><strong>1 Kilopascal (kPa) = 1,000 Pascal (Pa)</strong></li>

<li><strong>1 Megapascal (MPa) = 1,000,000 Pascal (Pa)</strong></li>

<li><strong>1 Torr ≈ 133.322 Pascal (Pa)</strong></li>

<li><strong>760 Torr = 1 Atmosphere</strong></li>

<li><strong>760 mmHg = 1 Atmosphere</strong></li>

<li><strong>1 Inch of Mercury (inHg) ≈ 3,386.39 Pascal</strong></li>

</ul>

<p>
These conversion relationships are widely used in engineering calculations, industrial operations, scientific research, and technical documentation.
</p>

<h3>Understanding Different Pressure Measurement Systems</h3>

<p>
Pressure units are derived from several measurement systems that developed over time in different countries and industries. Understanding these systems makes it easier to interpret specifications from around the world.
</p>

<h4>SI (International System of Units)</h4>

<p>
The SI system is the global standard used in science, engineering, manufacturing, and education. It is based on the Pascal and its multiples.
</p>

<p>
Common SI pressure units include:
</p>

<ul>
<li>Pascal (Pa)</li>
<li>Kilopascal (kPa)</li>
<li>Megapascal (MPa)</li>
<li>Gigapascal (GPa)</li>
</ul>

<p>
Most modern engineering software, technical standards, and scientific publications use SI pressure units.
</p>

<h4>Metric Pressure Units</h4>

<p>
Although not an official SI unit, the bar remains one of the most widely used pressure units worldwide. Many industries prefer bar because its values are easy to read and interpret in practical applications.
</p>

<p>
Meteorology commonly uses millibars, while industrial systems frequently use bars and megapascals.
</p>

<h4>Imperial and US Customary Units</h4>

<p>
The Imperial system continues to be widely used in the United States and several industrial sectors.
</p>

<p>
Common pressure units include:
</p>

<ul>
<li>PSI (Pounds per Square Inch)</li>
<li>KSI (Kilo Pounds per Square Inch)</li>
<li>Inches of Mercury (inHg)</li>
<li>Inches of Water (inH₂O)</li>
</ul>

<p>
Pressure conversion tools are especially valuable when working with international equipment specifications and documentation.
</p>

<h4>Scientific and Vacuum Units</h4>

<p>
Researchers and laboratory professionals often work with specialized pressure units used in vacuum science and atmospheric studies.
</p>

<ul>
<li>Torr</li>
<li>Millimeter of Mercury (mmHg)</li>
<li>Micron</li>
<li>Millitorr (mTorr)</li>
</ul>

<p>
These units are frequently encountered in vacuum chambers, semiconductor manufacturing, scientific instruments, and laboratory experiments.
</p>

<h3>Pressure Applications in Engineering</h3>

<p>
Pressure measurement and conversion are critical in many branches of engineering. Accurate pressure values help ensure safe operation, efficient performance, and compliance with industry standards.
</p>

<h4>Mechanical Engineering</h4>

<p>
Mechanical engineers use pressure measurements when designing pumps, compressors, hydraulic systems, boilers, pressure vessels, and industrial machinery.
</p>

<p>
Converting between pressure units allows engineers to compare specifications from suppliers and manufacturers operating in different regions.
</p>

<h4>Chemical Engineering</h4>

<p>
Chemical processing plants often operate under carefully controlled pressure conditions. Reactors, pipelines, storage tanks, and process equipment all require accurate pressure monitoring.
</p>

<p>
Pressure conversion helps engineers maintain consistency across equipment, instruments, and safety documentation.
</p>

<h4>Civil Engineering</h4>

<p>
Civil engineers encounter pressure in water distribution systems, wastewater treatment facilities, dams, and underground infrastructure projects.
</p>

<p>
Understanding pressure relationships helps ensure proper design and long-term system reliability.
</p>

<h4>Petroleum and Gas Industry</h4>

<p>
Oil and gas operations involve extremely high pressures during extraction, transportation, refining, and storage.
</p>

<p>
Accurate pressure conversion is essential for maintaining safety and operational efficiency throughout the entire process.
</p>

<h3>Pressure Applications in Everyday Life</h3>

<p>
Pressure measurements affect many aspects of everyday life, often without people realizing it.
</p>

<ul>

<li>
<strong>Vehicle Tire Pressure:</strong>
Proper tire pressure improves safety, fuel efficiency, and tire lifespan.
</li>

<li>
<strong>Bicycle Tires:</strong>
Cyclists frequently adjust tire pressure based on riding conditions and terrain.
</li>

<li>
<strong>Pressure Cookers:</strong>
Cooking times are reduced by increasing pressure inside the cooking chamber.
</li>

<li>
<strong>Water Systems:</strong>
Residential plumbing relies on consistent water pressure for proper operation.
</li>

<li>
<strong>Sports Equipment:</strong>
Balls used in football, basketball, volleyball, and other sports require specific pressure levels.
</li>

</ul>

<p>
These examples demonstrate how pressure measurements influence everyday comfort, convenience, and safety.
</p>

<h3>Pressure in Aviation</h3>

<p>
Pressure plays a critical role in aviation. Aircraft instruments, cabin systems, and weather monitoring all depend on accurate pressure measurements.
</p>

<p>
Pilots use atmospheric pressure readings to determine altitude. Altimeters are calibrated using pressure values that must be interpreted correctly to ensure safe flight operations.
</p>

<p>
Cabin pressurization systems maintain a comfortable and safe environment for passengers during high-altitude flights. Pressure conversion may be necessary when working with international aviation standards and equipment.
</p>

<h3>Pressure in Medicine and Healthcare</h3>

<p>
Medical professionals frequently work with pressure measurements in diagnosis and treatment.
</p>

<ul>

<li>
Blood pressure is commonly measured in millimeters of mercury (mmHg).
</li>

<li>
Respiratory equipment uses pressure settings to assist patients with breathing.
</li>

<li>
Medical gas systems require accurate pressure monitoring and control.
</li>

<li>
Research laboratories use pressure measurements in various biomedical experiments.
</li>

</ul>

<p>
Accurate pressure conversion ensures consistency across medical equipment and healthcare facilities worldwide.
</p>

<h3>Vacuum Pressure Measurements</h3>

<p>
Vacuum systems operate at pressures below atmospheric pressure and require specialized units and instruments.
</p>

<p>
Industries that rely heavily on vacuum technology include:
</p>

<ul>

<li>Semiconductor manufacturing</li>

<li>Scientific research laboratories</li>

<li>Space simulation facilities</li>

<li>Vacuum packaging industries</li>

<li>Pharmaceutical production</li>

</ul>

<p>
Vacuum engineers frequently convert between Torr, millitorr, Pascal, and micron units when operating and maintaining equipment.
</p>

<h3>Advantages of Using an Online Pressure Converter</h3>

<ul>

<li>Instant and accurate calculations</li>

<li>No manual formulas required</li>

<li>Supports multiple pressure units</li>

<li>Reduces calculation errors</li>

<li>Useful for education and professional work</li>

<li>Accessible from any internet-enabled device</li>

<li>Ideal for international projects</li>

<li>Provides reliable engineering-grade results</li>

</ul>

<p>
These benefits make online pressure converters valuable resources for professionals, students, and hobbyists alike.
</p>

<h3>Pressure Safety Considerations</h3>

<p>
Working with pressure systems requires careful attention to safety. Incorrect pressure settings can result in equipment failure, leaks, injuries, or costly damage.
</p>

<ul>

<li>
Always verify pressure ratings before operating equipment.
</li>

<li>
Use properly calibrated gauges and instruments.
</li>

<li>
Inspect pressure vessels and pipelines regularly.
</li>

<li>
Follow manufacturer specifications and safety guidelines.
</li>

<li>
Avoid exceeding maximum operating pressure limits.
</li>

<li>
Wear appropriate protective equipment when working with high-pressure systems.
</li>

<li>
Ensure personnel receive proper training for pressure-related operations.
</li>

</ul>

<p>
Accurate pressure conversion is an important part of maintaining safety and preventing operational mistakes.
</p>

<h3>Why Accurate Pressure Conversion Matters</h3>

<p>
A small error in pressure conversion can have significant consequences. Incorrect pressure settings may affect equipment performance, product quality, scientific results, and workplace safety.
</p>

<p>
In industries such as aerospace, pharmaceuticals, manufacturing, and energy production, precision is essential. Reliable pressure conversion helps professionals make informed decisions and maintain compliance with technical standards.
</p>

<p>
As global collaboration continues to increase, pressure conversion tools have become indispensable resources for engineers, scientists, technicians, and researchers around the world.
</p>

<h3>Final Thoughts</h3>

<p>
Pressure is one of the most important physical quantities in science, engineering, medicine, industry, and everyday life. Because different countries and technical fields use different measurement systems, accurate pressure conversion is essential for effective communication, safe operation, and reliable calculations.
</p>

<p>
Our <strong>Free Online Pressure Converter Tool</strong> provides a fast, accurate, and convenient solution for converting between Pascal, Kilopascal, Bar, PSI, Atmosphere, Torr, mmHg, and many other pressure units. Whether you are an engineer, technician, student, educator, researcher, or hobbyist, this tool can simplify your work and help eliminate conversion errors.
</p>

<p>
With comprehensive unit support, professional-grade accuracy, and an easy-to-use interface, the converter serves as a dependable resource for anyone who regularly works with pressure measurements. Use it whenever you need quick, reliable pressure conversions and accurate results within seconds.
</p>

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
    const pressureInput = document.getElementById('pressureInput');
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
    
    // Conversion factors relative to 1 Pascal (Pa)
    const conversionFactors = {
      // SI / Metric Units
      'Pa': 1,
      'kPa': 0.001,
      'MPa': 0.000001,
      'GPa': 0.000000001,
      'hPa': 0.01,
      'mPa': 1000,
      'bar': 0.00001,
      'mbar': 0.01,
      'atm': 0.00000986923,
      
      // Imperial / US Units
      'psi': 0.000145038,
      'psf': 0.0208854,
      'inHg': 0.0002953,
      'inH₂O': 0.00401463,
      'ftH₂O': 0.000334553,
      
      // Scientific & Industrial Units
      'torr': 0.00750062,
      'mTorr': 7.50062,
      'at': 0.0000101972,
      'kgf/cm²': 0.0000101972,
      'N/cm²': 0.0001,
      'N/mm²': 0.000001
    };

    // Store conversion history
    let conversionHistory = JSON.parse(localStorage.getItem('pressureConversionHistory')) || [];

    // Initialize converter
    updateAllConversions();
    displayHistory();

    // Event listeners
    pressureInput.addEventListener('input', function() {
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
        handlePressureAction(action);
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
      localStorage.setItem('pressureConversionHistory', JSON.stringify(conversionHistory));
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
      document.getElementById('inputValue').textContent = parseFloat(pressureInput.value).toFixed(3);
    }

    function updateUnitDisplays() {
      document.getElementById('fromUnit').textContent = fromUnitSelect.value;
      document.getElementById('toUnit').textContent = toUnitSelect.value;
    }

    function updateAllConversions() {
      const inputValue = parseFloat(pressureInput.value) || 0;
      const fromUnit = fromUnitSelect.value;
      
      // Convert input to base unit (Pa)
      const baseValue = inputValue / conversionFactors[fromUnit];
      
      // Update all unit displays
      Object.keys(conversionFactors).forEach(unit => {
        const element = document.getElementById(unit);
        if (element) {
          const convertedValue = baseValue * conversionFactors[unit];
          // Format based on magnitude
          let formattedValue;
          if (convertedValue < 0.001) {
            formattedValue = convertedValue.toFixed(6);
          } else if (convertedValue < 1) {
            formattedValue = convertedValue.toFixed(4);
          } else if (convertedValue < 1000) {
            formattedValue = convertedValue.toFixed(3);
          } else {
            formattedValue = convertedValue.toFixed(2);
          }
          element.textContent = formattedValue;
        }
      });
      
      // Update main conversion result
      updateConversionResult();
      updateInputDisplay();
      updateUnitDisplays();
    }

    function updateConversionResult() {
      const inputValue = parseFloat(pressureInput.value) || 0;
      const fromUnit = fromUnitSelect.value;
      const toUnit = toUnitSelect.value;
      
      // Convert through base unit (Pa)
      const baseValue = inputValue / conversionFactors[fromUnit];
      const resultValue = baseValue * conversionFactors[toUnit];
      
      // Format result based on magnitude
      let formattedResult;
      if (resultValue < 0.001) {
        formattedResult = resultValue.toFixed(8);
      } else if (resultValue < 1) {
        formattedResult = resultValue.toFixed(6);
      } else if (resultValue < 1000) {
        formattedResult = resultValue.toFixed(4);
      } else {
        formattedResult = resultValue.toFixed(2);
      }
      
      document.getElementById('resultValue').textContent = formattedResult;
    }

    function handlePressureAction(action) {
      const inputValue = parseFloat(pressureInput.value) || 0;
      const fromUnit = fromUnitSelect.value;
      const toUnit = toUnitSelect.value;
      
      // Convert through base unit (Pa)
      const baseValue = inputValue / conversionFactors[fromUnit];
      const resultValue = baseValue * conversionFactors[toUnit];

      switch (action) {
        case 'convert':
          updateAllConversions();
          showAlert('Pressure converted successfully!', 'success');
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
          pressureInput.value = '101325';
          fromUnitSelect.value = 'Pa';
          toUnitSelect.value = 'psi';
          updateAllConversions();
          showAlert('Converter reset to standard atmosphere!', 'success');
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
          pressureInput.value = '';
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
      
      localStorage.setItem('pressureConversionHistory', JSON.stringify(conversionHistory));
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
          
          pressureInput.value = historyItem.input;
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
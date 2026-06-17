---
layout: default
title: "Area Unit Converter | Square Meter, Acre, Hectare Tool"
permalink: /area-unit-converter-square-meter-acre-hectare-tool/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Area Unit Converter | Square Meter, Acre, Hectare Tool</title>
<meta name="description"
  content="Convert area units like square meters, acres, hectares, and square feet instantly. Use this free online area converter for accurate land measurement.">
<meta name="keywords"
  content="area converter, unit converter, square meter converter, acre converter, hectare converter, square feet converter, land measurement converter, area calculator">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Area Converter Styles */
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

  .converter-input-group {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 15px;
    margin: 20px 0;
    align-items: end;
  }

  .converter-input {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border: 2px solid #e0e6ed;
    transition: all 0.3s ease;
  }

  .converter-input:focus-within {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .converter-input label {
    display: block;
    font-weight: 600;
    margin-bottom: 10px;
    color: #2c3e50;
    font-size: 1rem;
  }

  .converter-input input {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    font-family: 'Courier New', monospace;
    transition: border-color 0.3s;
  }

  .converter-input input:focus {
    outline: none;
    border-color: var(--primary);
  }

  .converter-select {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 14px;
    background: white;
    cursor: pointer;
  }

  .converter-select:focus {
    outline: none;
    border-color: var(--primary);
  }

  .converter-display {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    color: var(--primary);
    font-family: 'Courier New', monospace;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .unit-label {
    font-size: 0.9rem;
    color: #7f8c8d;
    margin-top: 5px;
    text-align: center;
  }

  .conversion-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: var(--primary);
    padding: 20px 0;
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

  .options-section {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
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

  /* Area converter specific styles */
  .converter-options {
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
    width: 80px;
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

  .unit-system {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
    flex-wrap: wrap;
  }

  .system-button {
    padding: 10px 15px;
    border: 2px solid var(--primary);
    background: white;
    color: var(--primary);
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .system-button.active {
    background: var(--primary);
    color: white;
  }

  .system-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .area-chart {
    margin: 30px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .chart-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
  }

  .chart-table th,
  .chart-table td {
    padding: 12px;
    text-align: center;
    border: 1px solid #e0e0e0;
  }

  .chart-table th {
    background: var(--primary);
    color: white;
    font-weight: 600;
  }

  .chart-table tr:nth-child(even) {
    background: #f8f9fa;
  }

  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .result-item {
    background: white;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
    text-align: center;
  }

  .result-value {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--primary);
    margin-bottom: 5px;
    font-family: 'Courier New', monospace;
  }

  .result-unit {
    font-size: 0.9rem;
    color: #7f8c8d;
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
    max-width: 600px;
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

    .converter-options {
      grid-template-columns: 1fr;
    }

    .converter-input-group {
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .conversion-arrow {
      padding: 10px 0;
      transform: rotate(90deg);
    }

    .chart-table {
      font-size: 0.8rem;
    }

    .chart-table th,
    .chart-table td {
      padding: 8px 4px;
    }

    .results-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
</style>

<div class="converter-container">
  <h1>Area Unit Converter</h1>
  <p class="welcome-message">Convert between metric, imperial, and regional area units instantly. Accurate and easy-to-use conversion calculator for square meters, acres, hectares, square feet, and more.</p>

  <div class="converter-section">
    <h2>Area Unit Converter</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>From Unit: </span>
        <span id="fromUnit">Square Meter</span>
      </div>
      <div class="counter-item">
        <span>To Unit: </span>
        <span id="toUnit">Square Foot</span>
      </div>
      <div class="counter-item">
        <span>Precision: </span>
        <span id="precisionCount">4 decimals</span>
      </div>
      <div class="counter-item">
        <span>Last Conversion: </span>
        <span id="lastConversion">-</span>
      </div>
    </div>

    <div class="unit-system">
      <button class="system-button active" data-system="metric">Metric Units</button>
      <button class="system-button" data-system="us">US Customary</button>
      <button class="system-button" data-system="regional">Regional Units</button>
      <button class="system-button" data-system="scientific">Scientific Units</button>
      <button class="system-button" data-system="all">All Units</button>
    </div>

    <div class="converter-input-group">
      <div class="converter-input">
        <label for="fromValue">From Value</label>
        <input type="number" id="fromValue" placeholder="Enter area" step="any">
        <select id="fromUnitSelect" class="converter-select">
          <optgroup label="Metric Units">
            <option value="sq_km">Square Kilometer (km²)</option>
            <option value="hectare">Hectare (ha)</option>
            <option value="are">Are (a)</option>
            <option value="sq_m" selected>Square Meter (m²)</option>
            <option value="sq_dm">Square Decimeter (dm²)</option>
            <option value="sq_cm">Square Centimeter (cm²)</option>
            <option value="sq_mm">Square Millimeter (mm²)</option>
            <option value="sq_µm">Square Micrometer (µm²)</option>
            <option value="sq_nm">Square Nanometer (nm²)</option>
          </optgroup>
          <optgroup label="US Customary Units">
            <option value="sq_in">Square Inch (in²)</option>
            <option value="sq_ft">Square Foot (ft²)</option>
            <option value="sq_yd">Square Yard (yd²)</option>
            <option value="acre">Acre (ac)</option>
            <option value="sq_mi">Square Mile (mi²)</option>
          </optgroup>
          <optgroup label="Common & Regional Units">
            <option value="cent">Cent</option>
            <option value="guntha">Guntha / Gunta</option>
            <option value="bigha">Bigha</option>
            <option value="katha">Katha</option>
            <option value="decimal">Decimal</option>
            <option value="marla">Marla</option>
            <option value="kanal">Kanal</option>
            <option value="dunam">Dunam / Donum</option>
            <option value="sq_chain">Square Chain</option>
            <option value="sq_rod">Square Rod</option>
            <option value="township">Township</option>
            <option value="kattha_var">Kattha (variant)</option>
            <option value="lecha">Lecha</option>
            <option value="satak">Satak</option>
            <option value="dhur">Dhur</option>
            <option value="rood">Rood</option>
            <option value="ground">Ground</option>
            <option value="ankanam">Ankanam</option>
          </optgroup>
          <optgroup label="Scientific / Astronomical Units">
            <option value="barn">Barn (b)</option>
            <option value="sq_ly">Square Light Year (ly²)</option>
            <option value="sq_au">Square Astronomical Unit (AU²)</option>
          </optgroup>
        </select>
      </div>

      <div class="conversion-arrow">
        <i class="fas fa-arrow-right"></i>
      </div>

      <div class="converter-input">
        <label for="toValue">To Value</label>
        <input type="number" id="toValue" placeholder="Result" readonly>
        <select id="toUnitSelect" class="converter-select">
          <optgroup label="Metric Units">
            <option value="sq_km">Square Kilometer (km²)</option>
            <option value="hectare">Hectare (ha)</option>
            <option value="are">Are (a)</option>
            <option value="sq_m">Square Meter (m²)</option>
            <option value="sq_dm">Square Decimeter (dm²)</option>
            <option value="sq_cm">Square Centimeter (cm²)</option>
            <option value="sq_mm">Square Millimeter (mm²)</option>
            <option value="sq_µm">Square Micrometer (µm²)</option>
            <option value="sq_nm">Square Nanometer (nm²)</option>
          </optgroup>
          <optgroup label="US Customary Units">
            <option value="sq_in">Square Inch (in²)</option>
            <option value="sq_ft" selected>Square Foot (ft²)</option>
            <option value="sq_yd">Square Yard (yd²)</option>
            <option value="acre">Acre (ac)</option>
            <option value="sq_mi">Square Mile (mi²)</option>
          </optgroup>
          <optgroup label="Common & Regional Units">
            <option value="cent">Cent</option>
            <option value="guntha">Guntha / Gunta</option>
            <option value="bigha">Bigha</option>
            <option value="katha">Katha</option>
            <option value="decimal">Decimal</option>
            <option value="marla">Marla</option>
            <option value="kanal">Kanal</option>
            <option value="dunam">Dunam / Donum</option>
            <option value="sq_chain">Square Chain</option>
            <option value="sq_rod">Square Rod</option>
            <option value="township">Township</option>
            <option value="kattha_var">Kattha (variant)</option>
            <option value="lecha">Lecha</option>
            <option value="satak">Satak</option>
            <option value="dhur">Dhur</option>
            <option value="rood">Rood</option>
            <option value="ground">Ground</option>
            <option value="ankanam">Ankanam</option>
          </optgroup>
          <optgroup label="Scientific / Astronomical Units">
            <option value="barn">Barn (b)</option>
            <option value="sq_ly">Square Light Year (ly²)</option>
            <option value="sq_au">Square Astronomical Unit (AU²)</option>
          </optgroup>
        </select>
      </div>
    </div>

    <div class="results-grid" id="allResults">
      <!-- All unit results will be populated here -->
    </div>

    <div class="converter-options">
      <div class="option-group">
        <label class="option-label">Decimal Precision</label>
        <select id="decimalPrecision" class="option-select">
          <option value="0">0 decimals</option>
          <option value="2">2 decimals</option>
          <option value="4" selected>4 decimals</option>
          <option value="6">6 decimals</option>
          <option value="8">8 decimals</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Auto-update</label>
        <div class="option-checkbox">
          <input type="checkbox" id="autoUpdate" checked>
          <label for="autoUpdate">Update automatically</label>
        </div>
      </div>
      
      <div class="option-group">
        <label class="option-label">Number Format</label>
        <select id="numberFormat" class="option-select">
          <option value="normal">Normal</option>
          <option value="scientific">Scientific Notation</option>
          <option value="engineering">Engineering Notation</option>
        </select>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="convert">Convert</button>
        <button class="case-button" data-action="swap">Swap Units</button>
        <button class="case-button" data-action="copy">Copy Result</button>
        <button class="case-button success" data-action="common">Common Areas</button>
        <button class="case-button warning" data-action="formula">Show Formulas</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="area-chart">
      <h3>Common Area Conversions</h3>
      <table class="chart-table">
        <thead>
          <tr>
            <th>Metric</th>
            <th>US Customary</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 hectare</td>
            <td>2.47105 acres</td>
            <td>Hectare to Acre</td>
          </tr>
          <tr>
            <td>1 square meter</td>
            <td>10.7639 sq ft</td>
            <td>Square Meter to Square Foot</td>
          </tr>
          <tr>
            <td>1 square km</td>
            <td>247.105 acres</td>
            <td>Square Kilometer to Acre</td>
          </tr>
          <tr>
            <td>1 are</td>
            <td>1076.39 sq ft</td>
            <td>Are to Square Foot</td>
          </tr>
          <tr>
            <td>1 acre</td>
            <td>0.404686 hectares</td>
            <td>Acre to Hectare</td>
          </tr>
          <tr>
            <td>1 square foot</td>
            <td>0.092903 sq m</td>
            <td>Square Foot to Square Meter</td>
          </tr>
          <tr>
            <td>1 square mile</td>
            <td>2.58999 sq km</td>
            <td>Square Mile to Square Kilometer</td>
          </tr>
          <tr>
            <td>1 bigha</td>
            <td>0.25 acres</td>
            <td>Bigha to Acre (approx)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="examples">
      <h2>Conversion Examples</h2>

      <h3>Metric to US Customary:</h3>
      <div class="example-text">1 hectare = 2.47105 acres
1 square meter = 10.7639 square feet
1 square kilometer = 0.386102 square miles
1 are = 1076.39 square feet</div>

      <h3>US Customary to Metric:</h3>
      <div class="example-text">1 acre = 0.404686 hectares
1 square foot = 0.092903 square meters
1 square mile = 2.58999 square kilometers
1 square yard = 0.836127 square meters</div>

      <h3>Regional Units:</h3>
      <div class="example-text">1 bigha ≈ 0.25 acres (varies by region)
1 guntha = 0.025 acres
1 katha ≈ 720 square feet
1 marla = 272.25 square feet
1 kanal = 5445 square feet
1 dunam = 1000 square meters
1 cent = 435.6 square feet</div>

      <h3>Scientific Units:</h3>
      <div class="example-text">1 barn = 1e-28 square meters
1 square light year = 8.950542e+47 square meters
1 square astronomical unit = 2.237952e+22 square meters</div>
    </div>
  </div>

<!-- SEO Content Section -->
<div class="content-placeholder">
  <h2>Free Online Area Unit Converter Tool</h2>

  <p>
    Converting area measurements can be confusing, especially when dealing with
    different measurement systems used around the world. Whether you're buying
    land, managing agricultural fields, planning a construction project, or
    studying mathematics, accurate area conversion is essential. Our
    <strong>Free Online Area Unit Converter Tool</strong> makes the process
    simple, fast, and reliable by allowing you to convert between dozens of area
    units instantly.
  </p>

  <p>
    From square meters and hectares to acres, square feet, square yards,
    bighas, kathas, gunthas, and many other units, this tool supports a wide
    range of measurements commonly used in real estate, agriculture,
    engineering, education, and scientific research. Instead of manually
    calculating conversion formulas or searching through complicated conversion
    tables, you can get accurate results with just a few clicks.
  </p>

  <p>
    One of the biggest advantages of this converter is its ease of use. There is
    no software to install, no registration process, and no hidden fees. The
    tool works directly in your web browser, allowing you to perform unlimited
    conversions whenever you need them. Since all calculations happen locally,
    your data remains private and secure.
  </p>

  <p>
    Whether you are a property dealer comparing land sizes, a farmer preparing
    official documents, a student completing an assignment, or an engineer
    working on a development project, this area converter provides a convenient
    solution for accurate measurements.
  </p>

  <h3>How to Use This Area Converter (Step-by-Step)</h3>

  <p>
    The converter has been designed to be user-friendly, making it suitable for
    beginners and professionals alike. Follow these simple steps to convert area
    measurements instantly.
  </p>

  <ul>
    <li>
      <strong>Step 1: Enter the Area Value</strong><br>
      Type the numerical area value you want to convert into the input field.
      You can enter whole numbers, decimal values, or large figures depending
      on your requirements.
    </li>

    <li>
      <strong>Step 2: Select the Source Unit</strong><br>
      Choose the unit that your current area measurement is expressed in. This
      could be square meters, acres, hectares, square feet, bighas, or any
      other supported unit.
    </li>

    <li>
      <strong>Step 3: Select the Target Unit</strong><br>
      Choose the unit you want the area converted into. The converter will
      automatically calculate the equivalent value.
    </li>

    <li>
      <strong>Step 4: View Instant Results</strong><br>
      If auto-conversion is enabled, the result will appear immediately as you
      enter values or change units.
    </li>

    <li>
      <strong>Step 5: Explore Additional Conversions</strong><br>
      View equivalent values across multiple units in the results section,
      helping you compare measurements more efficiently.
    </li>

    <li>
      <strong>Step 6: Copy and Share Results</strong><br>
      Use the copy feature to quickly transfer conversion results into reports,
      documents, spreadsheets, or emails.
    </li>
  </ul>

  <h3>Why Area Conversion Is Important</h3>

  <p>
    Different countries and industries use different systems for measuring land
    and surface areas. As a result, understanding how to convert between units
    becomes essential when working across regions or professions.
  </p>

  <p>
    For example, a property listing in Europe may use hectares, while buyers in
    the United States are more familiar with acres. Similarly, agricultural land
    in India is often measured using regional units such as bigha, katha, or
    guntha. Converting these measurements accurately ensures that everyone
    understands the true size of a property or piece of land.
  </p>

  <p>
    Area conversion also helps avoid costly mistakes. A misunderstanding between
    square meters and square feet can significantly affect property valuations,
    construction estimates, and land transactions. Using a reliable conversion
    tool eliminates uncertainty and improves accuracy.
  </p>

  <h3>Real-Life Example and Practical Use Cases</h3>

  <p>
    Imagine a real estate consultant helping an overseas buyer evaluate a large
    agricultural property. The property is listed as 20 hectares, but the buyer
    is accustomed to acres. Rather than performing manual calculations, the
    consultant simply enters the value into the converter and instantly sees
    that 20 hectares is approximately 49.42 acres.
  </p>

  <p>
    Another common scenario involves farmers applying for government subsidies,
    crop insurance, or agricultural loans. Official documents may require land
    measurements in hectares, while local land records may use traditional units
    such as bigha. The converter helps bridge this gap quickly and accurately.
  </p>

  <p>
    Construction companies also rely on area conversion when purchasing land,
    estimating materials, and preparing project plans. Converting between square
    feet, square meters, and acres ensures consistency across project documents.
  </p>

  <p>
    Students and teachers benefit from area conversion tools when studying
    geometry, land measurement systems, and unit conversion concepts. The tool
    provides a practical way to verify calculations and improve understanding.
  </p>

  <h3>Who Should Use This Area Converter?</h3>

  <ul>
    <li>
      <strong>Real Estate Agents:</strong> Compare property sizes and explain
      measurements to clients from different countries.
    </li>

    <li>
      <strong>Property Buyers and Sellers:</strong> Understand land dimensions
      and compare listings using familiar units.
    </li>

    <li>
      <strong>Farmers and Agricultural Professionals:</strong> Convert land
      measurements for documentation, planning, and reporting.
    </li>

    <li>
      <strong>Surveyors:</strong> Work efficiently with various land measurement
      systems and regional units.
    </li>

    <li>
      <strong>Engineers and Architects:</strong> Calculate project areas and
      maintain consistency in construction planning.
    </li>

    <li>
      <strong>Students and Educators:</strong> Learn and teach area conversion
      concepts with accurate examples.
    </li>

    <li>
      <strong>Government Officials:</strong> Verify land records and process
      documentation involving multiple measurement systems.
    </li>

    <li>
      <strong>Researchers and Scientists:</strong> Standardize measurements
      collected from different sources and regions.
    </li>
  </ul>

  <h3>Benefits of Using an Online Area Converter</h3>

  <p>
    Online conversion tools offer several advantages compared to manual
    calculations. They save time, reduce errors, and provide instant access to
    accurate information whenever needed.
  </p>

  <ul>
    <li>Fast and accurate area conversions</li>
    <li>No registration or installation required</li>
    <li>Accessible from computers, tablets, and smartphones</li>
    <li>Supports a wide range of international and regional units</li>
    <li>Reduces the risk of manual calculation mistakes</li>
    <li>Useful for both personal and professional applications</li>
    <li>Available 24 hours a day from anywhere in the world</li>
  </ul>

  <p>
    Whether you are converting a small residential plot or a large agricultural
    estate, an online area converter helps ensure accuracy and efficiency.
  </p>

<h3>Understanding Common Area Measurement Units</h3>

<p>
  Area measurement units are used to determine the size of a surface or piece of
  land. Different countries, industries, and professions often rely on different
  units, which is why area conversion tools have become so valuable. Knowing the
  basic characteristics of these units can help you better understand land
  records, property listings, agricultural reports, and construction plans.
</p>

<ul>
  <li>
    <strong>Square Meter (m²):</strong> The standard unit of area in the metric
    system. It is widely used worldwide for measuring rooms, buildings, and land.
  </li>

  <li>
    <strong>Square Kilometer (km²):</strong> Used for measuring large regions,
    cities, forests, and geographic areas.
  </li>

  <li>
    <strong>Hectare (ha):</strong> A metric unit commonly used for agricultural
    land. One hectare equals 10,000 square meters.
  </li>

  <li>
    <strong>Square Foot (ft²):</strong> Frequently used in real estate and
    construction, especially in the United States, India, and several other
    countries.
  </li>

  <li>
    <strong>Square Yard (yd²):</strong> Commonly used in property transactions
    and land measurements.
  </li>

  <li>
    <strong>Acre:</strong> A popular unit for measuring farmland and large
    properties. One acre equals approximately 4,046.86 square meters.
  </li>

  <li>
    <strong>Square Mile:</strong> Used for measuring large geographical regions
    and administrative areas.
  </li>
</ul>

<h3>Hectares vs Acres: Which One Should You Use?</h3>

<p>
  Hectares and acres are among the most commonly used land measurement units.
  While they serve a similar purpose, they belong to different measurement
  systems.
</p>

<p>
  A hectare belongs to the metric system and is widely used in Europe, Asia,
  Africa, Australia, and international organizations. An acre belongs to the
  imperial and customary systems and remains popular in countries such as the
  United States and the United Kingdom.
</p>

<p>
  For quick reference:
</p>

<ul>
  <li>1 Hectare = 10,000 Square Meters</li>
  <li>1 Hectare ≈ 2.471 Acres</li>
  <li>1 Acre ≈ 4,046.86 Square Meters</li>
  <li>1 Acre ≈ 0.4047 Hectares</li>
</ul>

<p>
  If you work internationally, understanding both units is extremely useful.
  Farmers, land investors, and real estate professionals often need to convert
  between hectares and acres when comparing properties in different countries.
</p>

<h3>Regional Land Measurement Units</h3>

<p>
  Many countries continue to use traditional land measurement units that have
  been passed down through generations. These units often vary by state,
  province, or region.
</p>

<p>
  In India, for example, land is frequently measured using units such as bigha,
  katha, guntha, kanal, marla, and cent. The exact size of these units can vary
  significantly from one location to another.
</p>

<ul>
  <li><strong>Bigha:</strong> Common in northern and eastern India.</li>
  <li><strong>Katha:</strong> Used in several eastern states.</li>
  <li><strong>Guntha:</strong> Popular in Maharashtra and nearby regions.</li>
  <li><strong>Marla:</strong> Commonly used in northern India and Pakistan.</li>
  <li><strong>Cent:</strong> Frequently used in South India.</li>
</ul>

<p>
  Because regional definitions may differ, users should always verify local
  standards before making legal, financial, or government-related decisions.
</p>

<h3>Metric System vs Imperial System</h3>

<p>
  The world primarily uses two major area measurement systems: the Metric System
  and the Imperial/US Customary System.
</p>

<p>
  The metric system is based on powers of ten, making calculations simple and
  consistent. Units such as square meters, hectares, and square kilometers are
  widely accepted internationally.
</p>

<p>
  The imperial system includes square inches, square feet, square yards, acres,
  and square miles. While not as mathematically straightforward as the metric
  system, these units remain deeply integrated into property and construction
  industries in several countries.
</p>

<p>
  An area converter helps bridge the gap between these systems, allowing users
  to communicate measurements clearly regardless of location.
</p>

<h3>Area Conversion in Real Estate</h3>

<p>
  Real estate professionals regularly encounter properties listed in different
  units. A commercial property may be advertised in square feet, while an
  agricultural estate may be described in acres or hectares.
</p>

<p>
  Accurate area conversion enables buyers and sellers to compare properties
  fairly. It also improves transparency during negotiations and reduces the
  chances of misunderstandings.
</p>

<p>
  Investors who purchase properties internationally often rely on conversion
  tools to evaluate land values and calculate returns on investment using
  familiar units.
</p>

<h3>Area Conversion in Agriculture</h3>

<p>
  Agriculture is one of the fields where area measurement plays a critical role.
  Farmers use land area calculations when planning crops, estimating fertilizer
  requirements, arranging irrigation systems, and determining yields.
</p>

<p>
  Government agricultural programs may require land records in hectares, while
  local records use traditional units. A reliable converter helps ensure
  consistency across documentation and reporting.
</p>

<p>
  Accurate land measurement also assists in budgeting, resource allocation, and
  productivity analysis.
</p>

<h3>Area Conversion in Construction and Engineering</h3>

<p>
  Construction projects depend heavily on accurate area measurements. Engineers,
  architects, and contractors use area calculations when designing structures,
  estimating materials, and planning land development.
</p>

<p>
  Converting between square feet and square meters is particularly common when
  working on international projects or collaborating with global teams.
</p>

<p>
  Even small measurement errors can affect project costs and timelines.
  Therefore, precise area conversion is essential for professional success.
</p>

<h3>Frequently Asked Questions</h3>

<p>
  <strong>What is the most commonly used area unit?</strong><br>
  The square meter is the most widely recognized area unit internationally. It
  serves as the foundation of the metric area measurement system.
</p>

<p>
  <strong>How many square feet are in one acre?</strong><br>
  One acre contains exactly 43,560 square feet, making it a popular unit for
  measuring land and agricultural properties.
</p>

<p>
  <strong>How many square meters are in a hectare?</strong><br>
  One hectare equals exactly 10,000 square meters. It is commonly used for
  measuring farms, forests, and large parcels of land.
</p>

<p>
  <strong>Can I convert extremely large areas?</strong><br>
  Yes. The converter supports very large measurements such as square
  kilometers and square miles, making it suitable for geographic and
  environmental applications.
</p>

<p>
  <strong>Can I convert extremely small areas?</strong><br>
  Yes. Specialized scientific units can be converted for research and technical
  purposes.
</p>

<p>
  <strong>Do regional units always have the same value?</strong><br>
  No. Traditional units such as bigha, katha, and marla may vary between
  regions. Always verify local standards when accuracy is critical.
</p>

<p>
  <strong>Is this converter suitable for educational purposes?</strong><br>
  Absolutely. Students and teachers frequently use area converters to learn and
  verify unit conversion concepts.
</p>

<h3>Specialized Scientific Area Units</h3>

<p>
  While most people use square meters, acres, or hectares, scientists sometimes
  work with specialized units designed for extremely small or extremely large
  measurements.
</p>

<ul>
  <li>
    <strong>Barn:</strong> A unit used in nuclear physics for measuring atomic
    cross-sectional areas. One barn equals 10⁻²⁸ square meters.
  </li>

  <li>
    <strong>Square Astronomical Units:</strong> Used in astronomical studies to
    describe vast areas in space.
  </li>

  <li>
    <strong>Square Light-Years:</strong> Useful for measuring extremely large
    regions across the universe.
  </li>
</ul>

<h3>Common Area Measurements in Daily Life</h3>

<p>
  Understanding common area values can help you visualize measurements more
  easily.
</p>

<ul>
  <li>Small bedroom: Approximately 10–20 square meters</li>
  <li>Apartment: Approximately 50–150 square meters</li>
  <li>Basketball court: Around 420 square meters</li>
  <li>Football field: Roughly 7,000 square meters</li>
  <li>One hectare: About 2.47 acres</li>
  <li>One acre: About 75% of a football field</li>
</ul>

<h3>Advantages of Accurate Area Measurement</h3>

<p>
  Accurate area calculations provide benefits across numerous industries and
  activities.
</p>

<ul>
  <li>Better property valuation</li>
  <li>More accurate construction planning</li>
  <li>Improved agricultural management</li>
  <li>Reliable government documentation</li>
  <li>Consistent international communication</li>
  <li>Reduced risk of costly mistakes</li>
  <li>Improved research and data analysis</li>
</ul>

<h3>Tips for Reliable Area Conversion</h3>

<ul>
  <li>Always verify the original unit before converting.</li>
  <li>Double-check regional land measurement definitions.</li>
  <li>Use sufficient decimal precision for professional work.</li>
  <li>Avoid rounding values too early in calculations.</li>
  <li>Review final results before submitting official documents.</li>
</ul>

<h3>Why Choose Our Area Unit Converter?</h3>

<p>
  Our online area converter combines accuracy, convenience, speed, and privacy
  in a single easy-to-use tool. Whether you need to convert a residential plot,
  a large agricultural field, a commercial property, or scientific data, the
  converter delivers reliable results instantly.
</p>

<p>
  Unlike many online services, no registration is required, and your
  measurement data remains private because calculations occur directly in your
  browser.
</p>

<p>
  The tool is designed for everyone—from students learning unit conversions to
  professionals managing large-scale projects. Its intuitive interface and
  broad unit support make it a practical solution for daily use.
</p>

<h3>Final Thoughts</h3>

<p>
  Area measurements are fundamental in real estate, agriculture, engineering,
  construction, education, science, and government administration. Because
  different countries and industries use different measurement systems,
  converting area values accurately is essential for clear communication and
  informed decision-making.
</p>

<p>
  Our Free Online Area Unit Converter helps simplify these calculations by
  providing fast, accurate, and reliable conversions between metric, imperial,
  traditional, and scientific units. Whether you're comparing property sizes,
  preparing official documents, planning a construction project, or studying
  unit conversion concepts, this tool can save time and eliminate errors.
</p>

<p>
  Bookmark this converter for future use and enjoy quick, hassle-free area
  conversions whenever you need them. With support for a wide range of units and
  instant results, it is a practical resource for both personal and professional
  applications.
</p>

</div>


<!-- Formulas Modal -->
<div id="formulasModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Area Conversion Formulas</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="margin-bottom: 20px;">
        <h4>Metric to US Customary:</h4>
        <div class="example-text">1 hectare = 2.47105 acres
1 square meter = 10.7639 square feet
1 square kilometer = 0.386102 square miles
1 are = 1076.39 square feet</div>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h4>US Customary to Metric:</h4>
        <div class="example-text">1 acre = 0.404686 hectares
1 square foot = 0.092903 square meters
1 square mile = 2.58999 square kilometers
1 square yard = 0.836127 square meters</div>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h4>Key Regional Conversions:</h4>
        <div class="example-text">1 bigha ≈ 0.25 acres (North India)
1 guntha = 0.025 acres
1 katha ≈ 720 square feet
1 marla = 272.25 square feet
1 kanal = 5445 square feet
1 dunam = 1000 square meters
1 cent = 435.6 square feet</div>
      </div>
      
      <div>
        <h4>Scientific Units:</h4>
        <div class="example-text">1 barn = 1e-28 square meters
1 square light year = 8.950542e+47 square meters
1 square astronomical unit = 2.237952e+22 square meters</div>
        <p><strong>Note:</strong> All conversions go through square meters as the base unit</p>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeFormulas">Close</button>
    </div>
  </div>
</div>

<!-- Common Areas Modal -->
<div id="commonModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Common Area References</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <table class="chart-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Area</th>
            <th>Equivalent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standard parking space</td>
            <td>12.5 m²</td>
            <td>134.5 sq ft</td>
          </tr>
          <tr>
            <td>Tennis court</td>
            <td>260.8 m²</td>
            <td>2,808 sq ft</td>
          </tr>
          <tr>
            <td>Football field</td>
            <td>5,351 m²</td>
            <td>1.322 acres</td>
          </tr>
          <tr>
            <td>Central Park, NYC</td>
            <td>3.41 km²</td>
            <td>843 acres</td>
          </tr>
          <tr>
            <td>Average house lot</td>
            <td>929 m²</td>
            <td>0.23 acres</td>
          </tr>
          <tr>
            <td>Monaco country</td>
            <td>2.02 km²</td>
            <td>499 acres</td>
          </tr>
          <tr>
            <td>Manhattan island</td>
            <td>59.1 km²</td>
            <td>22.8 sq mi</td>
          </tr>
          <tr>
            <td>Texas state</td>
            <td>695,662 km²</td>
            <td>268,596 sq mi</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeCommon">Close</button>
      <button class="modal-button primary" id="useCommon">Use This Area</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const fromValue = document.getElementById('fromValue');
    const toValue = document.getElementById('toValue');
    const fromUnitSelect = document.getElementById('fromUnitSelect');
    const toUnitSelect = document.getElementById('toUnitSelect');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const systemButtons = document.querySelectorAll('.system-button');
    const allResults = document.getElementById('allResults');
    
    // Options
    const decimalPrecision = document.getElementById('decimalPrecision');
    const autoUpdate = document.getElementById('autoUpdate');
    const numberFormat = document.getElementById('numberFormat');
    
    // Modal elements
    const formulasModal = document.getElementById('formulasModal');
    const commonModal = document.getElementById('commonModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const closeFormulas = document.getElementById('closeFormulas');
    const closeCommon = document.getElementById('closeCommon');
    const useCommon = document.getElementById('useCommon');

    // Conversion factors relative to square meters
    const conversionFactors = {
      // Metric units
      sq_km: 1000000,
      hectare: 10000,
      are: 100,
      sq_m: 1,
      sq_dm: 0.01,
      sq_cm: 0.0001,
      sq_mm: 0.000001,
      sq_µm: 1e-12,
      sq_nm: 1e-18,
      
      // US Customary units
      sq_in: 0.00064516,
      sq_ft: 0.092903,
      sq_yd: 0.836127,
      acre: 4046.86,
      sq_mi: 2589988,
      
      // Common & Regional units
      cent: 40.4686,
      guntha: 101.171,
      bigha: 2508.38,      // Approximate - varies by region
      katha: 66.89,        // Approximate - varies by region
      decimal: 40.4686,
      marla: 25.2929,
      kanal: 505.857,
      dunam: 1000,
      sq_chain: 404.686,
      sq_rod: 25.2929,
      township: 93239572,
      kattha_var: 66.89,   // Approximate
      lecha: 6.689,        // Approximate
      satak: 40.4686,
      dhur: 16.93,         // Approximate
      rood: 1011.71,
      ground: 203,         // Approximate
      ankanam: 13.38,      // Approximate
      
      // Scientific / Astronomical units
      barn: 1e-28,
      sq_ly: 8.950542e+47,
      sq_au: 2.237952e+22
    };

    // Conversion history
    let lastConversion = '';

    // Initialize
    updatePrecisionDisplay();
    updateAllResults();

    // Event listeners
    fromValue.addEventListener('input', function() {
      if (autoUpdate.checked) convertArea();
    });

    fromUnitSelect.addEventListener('change', function() {
      document.getElementById('fromUnit').textContent = this.options[this.selectedIndex].text.split(' ')[0];
      if (autoUpdate.checked) convertArea();
    });

    toUnitSelect.addEventListener('change', function() {
      document.getElementById('toUnit').textContent = this.options[this.selectedIndex].text.split(' ')[0];
      if (autoUpdate.checked) convertArea();
    });

    decimalPrecision.addEventListener('change', function() {
      updatePrecisionDisplay();
      if (autoUpdate.checked) convertArea();
    });

    numberFormat.addEventListener('change', function() {
      if (autoUpdate.checked) convertArea();
    });

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleAreaAction(action);
      });
    });

    systemButtons.forEach(button => {
      button.addEventListener('click', function() {
        systemButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        filterUnits(this.getAttribute('data-system'));
      });
    });

    // Modal event listeners
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        formulasModal.style.display = 'none';
        commonModal.style.display = 'none';
      });
    });

    closeFormulas.addEventListener('click', function() {
      formulasModal.style.display = 'none';
    });

    closeCommon.addEventListener('click', function() {
      commonModal.style.display = 'none';
    });

    useCommon.addEventListener('click', function() {
      // For demo purposes, set to 1 hectare
      fromValue.value = '1';
      fromUnitSelect.value = 'hectare';
      convertArea();
      commonModal.style.display = 'none';
      showAlert('1 hectare set for conversion', 'success');
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === formulasModal || event.target === commonModal) {
        formulasModal.style.display = 'none';
        commonModal.style.display = 'none';
      }
    });

    function convertArea() {
      const inputValue = parseFloat(fromValue.value);
      if (isNaN(inputValue)) {
        toValue.value = '';
        updateAllResults();
        return;
      }

      const fromUnit = fromUnitSelect.value;
      const toUnit = toUnitSelect.value;
      
      // Convert to square meters first, then to target unit
      const valueInSqMeters = inputValue * conversionFactors[fromUnit];
      const result = valueInSqMeters / conversionFactors[toUnit];
      
      toValue.value = formatNumber(result, getPrecision());
      
      updateAllResults();
      updateLastConversion(`${inputValue} ${getUnitName(fromUnit)} = ${formatNumber(result, getPrecision())} ${getUnitName(toUnit)}`);
    }

    function updateAllResults() {
      const inputValue = parseFloat(fromValue.value);
      if (isNaN(inputValue)) {
        allResults.innerHTML = '<div class="result-item" style="grid-column: 1 / -1; text-align: center; color: #666;">Enter an area value to see all conversions</div>';
        return;
      }

      const fromUnit = fromUnitSelect.value;
      const precision = getPrecision();
      let resultsHTML = '';

      // Convert to all units
      Object.keys(conversionFactors).forEach(unit => {
        if (unit !== fromUnit) {
          const valueInSqMeters = inputValue * conversionFactors[fromUnit];
          const result = valueInSqMeters / conversionFactors[unit];
          resultsHTML += `
            <div class="result-item">
              <div class="result-value">${formatNumber(result, precision)}</div>
              <div class="result-unit">${getUnitName(unit)}</div>
            </div>
          `;
        }
      });

      allResults.innerHTML = resultsHTML;
    }

    function formatNumber(value, precision) {
      const format = numberFormat.value;
      
      // For very small or very large numbers, use scientific notation
      if (Math.abs(value) < 0.0001 || Math.abs(value) > 1000000) {
        return value.toExponential(precision);
      }
      
      switch (format) {
        case 'scientific':
          return value.toExponential(precision);
        case 'engineering':
          return value.toExponential(precision).replace(/e([+-]?)(\d+)/, (match, sign, digits) => {
            const exponent = parseInt(digits);
            const engineeringExponent = Math.floor(exponent / 3) * 3;
            const coefficient = value / Math.pow(10, engineeringExponent);
            return `e${sign}${engineeringExponent}`;
          });
        default:
          return value.toFixed(precision);
      }
    }

    function getPrecision() {
      return parseInt(decimalPrecision.value);
    }

    function updatePrecisionDisplay() {
      document.getElementById('precisionCount').textContent = getPrecision() + ' decimal' + (getPrecision() !== 1 ? 's' : '');
    }

    function getUnitName(unit) {
      const option = Array.from(fromUnitSelect.options).find(opt => opt.value === unit);
      return option ? option.text.split(' ')[0] : unit;
    }

    function updateLastConversion(conversion) {
      lastConversion = conversion;
      document.getElementById('lastConversion').textContent = conversion;
    }

    function filterUnits(system) {
      const fromOptions = fromUnitSelect.options;
      const toOptions = toUnitSelect.options;
      
      for (let i = 0; i < fromOptions.length; i++) {
        const option = fromOptions[i];
        const parentGroup = option.parentElement.label;
        
        if (system === 'all') {
          option.style.display = '';
        } else if (system === 'metric' && parentGroup === 'Metric Units') {
          option.style.display = '';
        } else if (system === 'us' && parentGroup === 'US Customary Units') {
          option.style.display = '';
        } else if (system === 'regional' && parentGroup === 'Common & Regional Units') {
          option.style.display = '';
        } else if (system === 'scientific' && parentGroup === 'Scientific / Astronomical Units') {
          option.style.display = '';
        } else {
          option.style.display = 'none';
        }
      }
      
      // Apply same filtering to toUnitSelect
      for (let i = 0; i < toOptions.length; i++) {
        const option = toOptions[i];
        const parentGroup = option.parentElement.label;
        
        if (system === 'all') {
          option.style.display = '';
        } else if (system === 'metric' && parentGroup === 'Metric Units') {
          option.style.display = '';
        } else if (system === 'us' && parentGroup === 'US Customary Units') {
          option.style.display = '';
        } else if (system === 'regional' && parentGroup === 'Common & Regional Units') {
          option.style.display = '';
        } else if (system === 'scientific' && parentGroup === 'Scientific / Astronomical Units') {
          option.style.display = '';
        } else {
          option.style.display = 'none';
        }
      }
    }

    function handleAreaAction(action) {
      switch (action) {
        case 'convert':
          convertArea();
          break;

        case 'swap':
          // Swap from and to units
          const tempFromUnit = fromUnitSelect.value;
          const tempFromValue = fromValue.value;
          
          fromUnitSelect.value = toUnitSelect.value;
          toUnitSelect.value = tempFromUnit;
          fromValue.value = toValue.value;
          
          document.getElementById('fromUnit').textContent = getUnitName(fromUnitSelect.value);
          document.getElementById('toUnit').textContent = getUnitName(toUnitSelect.value);
          
          if (autoUpdate.checked) convertArea();
          else updateAllResults();
          
          showAlert('Units swapped successfully', 'success');
          break;

        case 'copy':
          copyResultToClipboard();
          break;

        case 'common':
          commonModal.style.display = 'block';
          break;

        case 'formula':
          formulasModal.style.display = 'block';
          break;

        case 'clear':
          fromValue.value = '';
          toValue.value = '';
          updateAllResults();
          lastConversion = '';
          document.getElementById('lastConversion').textContent = '-';
          showAlert('All fields cleared', 'success');
          break;
      }
    }

    function copyResultToClipboard() {
      if (!fromValue.value || !toValue.value) {
        showAlert('No conversion result to copy', 'error');
        return;
      }

      const fromUnit = getUnitName(fromUnitSelect.value);
      const toUnit = getUnitName(toUnitSelect.value);
      const copyText = `${fromValue.value} ${fromUnit} = ${toValue.value} ${toUnit}`;

      navigator.clipboard.writeText(copyText).then(() => {
        showAlert('Conversion result copied to clipboard!', 'success');
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
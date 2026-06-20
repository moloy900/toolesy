---
layout: default
title: "Length Unit Converter - Convert Metric and Imperial Units"
permalink: /length-unit-converter-convert-metric-and-imperial-units/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Length Unit Converter - Convert Metric and Imperial Units</title>
<meta name="description"
  content="Free online length unit converter tool. Convert between metric and imperial units including kilometers, meters, inches, feet, yards, miles, and more. Accurate and easy-to-use conversion calculator.">
<meta name="keywords"
  content="length converter, unit converter, metric converter, imperial converter, km to miles, meters to feet, inches to cm, length calculator, measurement converter">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">


<style>
  /* Length Converter Styles */
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

  /* Length converter specific styles */
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

  .length-chart {
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
  <h1>Length Unit Converter</h1>
  <p class="welcome-message">Convert between metric and imperial length units instantly. Accurate and easy-to-use conversion calculator for kilometers, meters, inches, feet, yards, miles, and more.</p>

  <div class="converter-section">
    <h2>Length Unit Converter</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>From Unit: </span>
        <span id="fromUnit">Meter</span>
      </div>
      <div class="counter-item">
        <span>To Unit: </span>
        <span id="toUnit">Feet</span>
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
      <button class="system-button" data-system="imperial">Imperial Units</button>
      <button class="system-button" data-system="astronomical">Astronomical</button>
      <button class="system-button" data-system="specialized">Specialized</button>
      <button class="system-button" data-system="all">All Units</button>
    </div>

    <div class="converter-input-group">
      <div class="converter-input">
        <label for="fromValue">From Value</label>
        <input type="number" id="fromValue" placeholder="Enter length" step="any">
        <select id="fromUnitSelect" class="converter-select">
          <optgroup label="Metric Units">
            <option value="km">Kilometer (km)</option>
            <option value="m" selected>Meter (m)</option>
            <option value="dm">Decimeter (dm)</option>
            <option value="cm">Centimeter (cm)</option>
            <option value="mm">Millimeter (mm)</option>
            <option value="µm">Micrometer (µm)</option>
            <option value="nm">Nanometer (nm)</option>
          </optgroup>
          <optgroup label="Imperial Units">
            <option value="in">Inch (in)</option>
            <option value="ft">Foot (ft)</option>
            <option value="yd">Yard (yd)</option>
            <option value="mi">Mile (mi)</option>
            <option value="nmi">Nautical Mile (nmi)</option>
            <option value="fth">Fathom (fth)</option>
            <option value="ch">Chain (ch)</option>
            <option value="rd">Rod / Pole / Perch (rd)</option>
          </optgroup>
          <optgroup label="Astronomical Units">
            <option value="au">Astronomical Unit (AU)</option>
            <option value="ly">Light Year (ly)</option>
            <option value="pc">Parsec (pc)</option>
          </optgroup>
          <optgroup label="Scientific & Specialized Units">
            <option value="angstrom">Angstrom (Å)</option>
            <option value="planck">Planck Length</option>
            <option value="cubit">Cubit</option>
            <option value="league">League</option>
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
            <option value="km">Kilometer (km)</option>
            <option value="m">Meter (m)</option>
            <option value="dm">Decimeter (dm)</option>
            <option value="cm">Centimeter (cm)</option>
            <option value="mm">Millimeter (mm)</option>
            <option value="µm">Micrometer (µm)</option>
            <option value="nm">Nanometer (nm)</option>
          </optgroup>
          <optgroup label="Imperial Units">
            <option value="in">Inch (in)</option>
            <option value="ft" selected>Foot (ft)</option>
            <option value="yd">Yard (yd)</option>
            <option value="mi">Mile (mi)</option>
            <option value="nmi">Nautical Mile (nmi)</option>
            <option value="fth">Fathom (fth)</option>
            <option value="ch">Chain (ch)</option>
            <option value="rd">Rod / Pole / Perch (rd)</option>
          </optgroup>
          <optgroup label="Astronomical Units">
            <option value="au">Astronomical Unit (AU)</option>
            <option value="ly">Light Year (ly)</option>
            <option value="pc">Parsec (pc)</option>
          </optgroup>
          <optgroup label="Scientific & Specialized Units">
            <option value="angstrom">Angstrom (Å)</option>
            <option value="planck">Planck Length</option>
            <option value="cubit">Cubit</option>
            <option value="league">League</option>
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
        <button class="case-button success" data-action="common">Common Lengths</button>
        <button class="case-button warning" data-action="formula">Show Formulas</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="length-chart">
      <h3>Common Length Conversions</h3>
      <table class="chart-table">
        <thead>
          <tr>
            <th>Metric</th>
            <th>Imperial</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 km</td>
            <td>0.6214 miles</td>
            <td>Kilometer to Mile</td>
          </tr>
          <tr>
            <td>1 m</td>
            <td>3.2808 feet</td>
            <td>Meter to Foot</td>
          </tr>
          <tr>
            <td>1 cm</td>
            <td>0.3937 inches</td>
            <td>Centimeter to Inch</td>
          </tr>
          <tr>
            <td>1 mm</td>
            <td>0.03937 inches</td>
            <td>Millimeter to Inch</td>
          </tr>
          <tr>
            <td>1 mile</td>
            <td>1.6093 km</td>
            <td>Mile to Kilometer</td>
          </tr>
          <tr>
            <td>1 foot</td>
            <td>0.3048 m</td>
            <td>Foot to Meter</td>
          </tr>
          <tr>
            <td>1 inch</td>
            <td>2.54 cm</td>
            <td>Inch to Centimeter</td>
          </tr>
          <tr>
            <td>1 yard</td>
            <td>0.9144 m</td>
            <td>Yard to Meter</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="examples">
      <h2>Conversion Examples</h2>

      <h3>Metric to Imperial:</h3>
      <div class="example-text">1 kilometer = 0.621371 miles
1 meter = 3.28084 feet
1 centimeter = 0.393701 inches
1 millimeter = 0.0393701 inches</div>

      <h3>Imperial to Metric:</h3>
      <div class="example-text">1 mile = 1.60934 kilometers
1 foot = 0.3048 meters
1 inch = 2.54 centimeters
1 yard = 0.9144 meters</div>

      <h3>Astronomical Units:</h3>
      <div class="example-text">1 light-year = 9.461e+12 kilometers
1 astronomical unit = 1.496e+8 kilometers
1 parsec = 3.086e+13 kilometers
1 parsec = 3.262 light-years</div>

      <h3>Specialized Units:</h3>
      <div class="example-text">1 fathom = 6 feet = 1.8288 meters
1 chain = 66 feet = 20.1168 meters
1 rod = 16.5 feet = 5.0292 meters
1 league = 3 miles = 4.828 kilometers
1 cubit ≈ 0.4572 meters (Egyptian)
1 angstrom = 1e-10 meters
1 Planck length = 1.616e-35 meters</div>
    </div>
  </div>

<!-- SEO Content Section -->
<div class="content-placeholder">

  <h2>Free Online Length Unit Converter Tool</h2>

  <p>
    Length measurements are used in almost every aspect of daily life, from measuring the dimensions of a room and planning construction projects to calculating travel distances and studying astronomical objects. However, different countries, industries, and scientific fields often use different measurement systems. This can create confusion when comparing dimensions, reading technical specifications, or working with international data. Our <strong>Free Online Length Unit Converter Tool</strong> is designed to solve this problem by providing fast, accurate, and reliable conversions between a wide range of length units.
  </p>

  <p>
    Whether you are a student solving mathematics problems, an engineer reviewing technical drawings, a traveler comparing distances abroad, or a researcher working with scientific data, this tool helps you convert measurements instantly. It supports both metric and imperial units as well as specialized scientific and astronomical units, making it suitable for personal, educational, and professional use.
  </p>

  <p>
    Unlike manual calculations, which can be time-consuming and prone to errors, our converter delivers precise results in real time. You simply enter a value, select the source and target units, and receive an accurate conversion immediately. No downloads, installations, or registrations are required.
  </p>

  <h3>How to Use This Length Converter</h3>

  <p>
    The converter has been designed with simplicity and convenience in mind. Even users with no technical background can perform accurate conversions within seconds.
  </p>

  <ul>
    <li>
      <strong>Enter a Length Value:</strong>
      Type the numerical value you want to convert into the input field.
    </li>

    <li>
      <strong>Select the Original Unit:</strong>
      Choose the unit associated with the value you entered, such as meters, feet, inches, kilometers, or miles.
    </li>

    <li>
      <strong>Select the Target Unit:</strong>
      Choose the unit you want the measurement converted into.
    </li>

    <li>
      <strong>Instant Conversion:</strong>
      The tool automatically calculates the equivalent value using internationally recognized conversion standards.
    </li>

    <li>
      <strong>View Additional Results:</strong>
      Many users prefer seeing conversions in multiple units simultaneously for easier comparison.
    </li>

    <li>
      <strong>Copy or Reset:</strong>
      Save your results or clear the form to perform another conversion.
    </li>
  </ul>

  <h3>Why Length Unit Conversion Is Important</h3>

  <p>
    Length measurements are fundamental to science, engineering, commerce, education, and everyday life. Because different regions use different systems, converting measurements accurately is essential for avoiding misunderstandings and costly mistakes.
  </p>

  <p>
    Imagine purchasing machinery from another country where dimensions are listed in millimeters while your design documents use inches. A simple conversion error could affect manufacturing accuracy and project timelines. Similarly, travelers may encounter road signs showing distances in kilometers while being more familiar with miles.
  </p>

  <p>
    Accurate length conversion ensures consistency, improves communication, and helps people make informed decisions regardless of the measurement system being used.
  </p>

  <h3>Understanding Different Length Measurement Systems</h3>

  <p>
    Throughout history, civilizations have developed various systems for measuring distance and length. While modern international standards have simplified measurement practices, multiple systems remain in use today.
  </p>

  <h4>Metric System</h4>

  <p>
    The metric system is the most widely used measurement system in the world. It is based on powers of ten, making calculations simple and consistent. The meter serves as the fundamental unit of length, with larger and smaller units derived using decimal prefixes.
  </p>

  <ul>
    <li>1 kilometer = 1,000 meters</li>
    <li>1 meter = 100 centimeters</li>
    <li>1 centimeter = 10 millimeters</li>
  </ul>

  <p>
    Because of its simplicity and global acceptance, the metric system is the standard measurement system in science, engineering, medicine, and most countries worldwide.
  </p>

  <h4>Imperial and US Customary System</h4>

  <p>
    The imperial system is primarily used in the United States and a few other regions. It includes familiar units such as inches, feet, yards, and miles.
  </p>

  <ul>
    <li>12 inches = 1 foot</li>
    <li>3 feet = 1 yard</li>
    <li>1,760 yards = 1 mile</li>
  </ul>

  <p>
    Although less standardized than the metric system, imperial units remain common in construction, manufacturing, transportation, and everyday life in the United States.
  </p>

  <h4>Nautical Measurement System</h4>

  <p>
    Marine navigation and aviation often use nautical miles instead of standard miles. Unlike land-based measurements, nautical miles are linked directly to the Earth's geometry and latitude lines.
  </p>

  <p>
    One nautical mile equals approximately 1.852 kilometers or 1.1508 statute miles.
  </p>

  <h4>Astronomical Measurement System</h4>

  <p>
    When measuring vast distances in space, conventional units such as meters and kilometers become impractical. Astronomers use specialized units designed for interplanetary and interstellar distances.
  </p>

  <ul>
    <li><strong>Astronomical Unit (AU):</strong> Average distance between Earth and the Sun.</li>
    <li><strong>Light-Year:</strong> Distance traveled by light in one year.</li>
    <li><strong>Parsec:</strong> Common unit used in professional astronomy.</li>
  </ul>

  <p>
    These units allow scientists to describe enormous distances more conveniently and accurately.
  </p>

  <h3>Real-Life Applications of Length Conversion</h3>

  <h4>Construction and Architecture</h4>

  <p>
    Architects, builders, and contractors frequently work with projects involving multiple measurement systems. Construction materials, machinery, and technical drawings may originate from different countries using different standards.
  </p>

  <p>
    Converting dimensions accurately ensures that building components fit together correctly and comply with design specifications.
  </p>

  <h4>Engineering and Manufacturing</h4>

  <p>
    Engineers often collaborate internationally, requiring measurements to be converted between metric and imperial systems. Precision is especially important in industries such as aerospace, automotive manufacturing, electronics, and industrial machinery.
  </p>

  <p>
    Even a small conversion error can lead to expensive production problems or safety concerns.
  </p>

  <h4>Travel and Navigation</h4>

  <p>
    Travelers frequently encounter unfamiliar distance measurements when visiting foreign countries. Understanding how kilometers relate to miles can make route planning, navigation, and transportation decisions easier.
  </p>

  <p>
    For example, a 100-kilometer journey equals approximately 62.14 miles, helping travelers estimate travel times more accurately.
  </p>

  <h4>Education and Academic Learning</h4>

  <p>
    Length conversion is an important topic in mathematics and science education. Students often use conversion tools to verify calculations, understand relationships between units, and develop problem-solving skills.
  </p>

  <h4>Science and Research</h4>

  <p>
    Researchers regularly work with measurements collected from different countries and scientific disciplines. Standardizing data through unit conversion improves collaboration and ensures consistency across studies.
  </p>

  <h4>Astronomy and Space Exploration</h4>

  <p>
    Astronomers use unit conversion to compare planetary distances, calculate spacecraft trajectories, and communicate scientific findings. Converting between astronomical units, light-years, and parsecs is a routine part of space science.
  </p>

  <h3>Common Length Units Explained</h3>

  <p>
    Although there are hundreds of length units used throughout history and across different scientific disciplines, a relatively small group of units accounts for the majority of modern measurements. Understanding these commonly used units helps users interpret conversion results more effectively.
  </p>

  <h4>Millimeter (mm)</h4>

  <p>
    The millimeter is one of the smallest metric units used in everyday applications. It is commonly used in engineering drawings, manufacturing, electronics, jewelry design, and medical instruments where precision is important.
  </p>

  <p>
    Since one millimeter equals one-thousandth of a meter, it provides a practical way to express very small dimensions without using decimal values.
  </p>

  <h4>Centimeter (cm)</h4>

  <p>
    Centimeters are widely used for measuring personal height, furniture dimensions, clothing sizes, and educational activities. Because one centimeter equals ten millimeters, it offers a convenient balance between precision and readability.
  </p>

  <h4>Meter (m)</h4>

  <p>
    The meter is the foundation of the metric system and is recognized internationally as the standard unit of length. Most scientific calculations, engineering projects, and construction measurements are ultimately based on the meter.
  </p>

  <h4>Kilometer (km)</h4>

  <p>
    Kilometers are commonly used to measure longer distances such as road travel, geographical features, and transportation routes. Most countries display highway distances using kilometers.
  </p>

  <h4>Inch (in)</h4>

  <p>
    The inch remains one of the most frequently used imperial units. It is widely used in construction, screen sizes, manufacturing specifications, and consumer products.
  </p>

  <p>
    By international agreement, one inch equals exactly 2.54 centimeters.
  </p>

  <h4>Foot (ft)</h4>

  <p>
    Feet are commonly used in architecture, construction, aviation, and real estate. Room dimensions, building heights, and aircraft altitude measurements are frequently expressed in feet.
  </p>

  <h4>Yard (yd)</h4>

  <p>
    The yard is often used in sports fields, landscaping, textiles, and construction applications. One yard equals three feet or thirty-six inches.
  </p>

  <h4>Mile (mi)</h4>

  <p>
    Miles are primarily used in the United States and the United Kingdom for measuring road distances and travel routes. A standard mile contains 5,280 feet.
  </p>

  <h3>Popular Length Conversion Examples</h3>

  <p>
    Many users search for specific conversion values rather than general formulas. Here are some of the most commonly requested conversions:
  </p>

  <ul>
    <li>1 inch = 2.54 centimeters</li>
    <li>1 foot = 30.48 centimeters</li>
    <li>1 yard = 0.9144 meters</li>
    <li>1 mile = 1.60934 kilometers</li>
    <li>1 kilometer = 0.62137 miles</li>
    <li>1 meter = 3.28084 feet</li>
    <li>1 centimeter = 0.3937 inches</li>
    <li>1 nautical mile = 1.852 kilometers</li>
  </ul>

  <p>
    These conversion factors are internationally recognized and used in scientific, educational, and professional applications worldwide.
  </p>

  <h3>The History of Length Measurement</h3>

  <p>
    Human civilization has measured distance for thousands of years. Early societies often based their measurement systems on parts of the human body. Units such as the foot, cubit, palm, and span originated from approximate body dimensions.
  </p>

  <p>
    While these methods were practical for everyday use, they lacked consistency because body sizes varied from person to person. As trade, science, and engineering became more advanced, standardized measurement systems became necessary.
  </p>

  <p>
    The metric system was introduced in France during the late eighteenth century and gradually became the international standard because of its logical decimal structure and scientific precision.
  </p>

  <h3>Length Conversion in International Trade</h3>

  <p>
    Global trade involves products manufactured and distributed across countries that use different measurement systems. Product dimensions may be listed in millimeters, centimeters, inches, or feet depending on the market.
  </p>

  <p>
    Accurate unit conversion ensures that buyers understand product specifications correctly and helps avoid costly mistakes related to sizing, compatibility, and manufacturing requirements.
  </p>

  <p>
    Industries such as automotive manufacturing, machinery production, electronics, and construction rely heavily on accurate conversions to maintain quality and consistency across international supply chains.
  </p>

  <h3>Scientific Applications of Length Conversion</h3>

  <p>
    Scientific research frequently requires measurements across multiple scales. A biologist may study microscopic structures measured in micrometers, while an astronomer examines objects separated by light-years.
  </p>

  <p>
    Unit conversion allows researchers to communicate findings clearly and compare results from different studies. Standardized measurements are essential for collaboration, reproducibility, and data analysis.
  </p>

  <p>
    Modern scientific software often performs automatic conversions, but understanding the relationships between units remains important for interpreting results correctly.
  </p>

  <h3>Astronomical Distance Units</h3>

  <p>
    Space is so vast that ordinary units quickly become impractical. Astronomers therefore use specialized units designed to simplify the description of enormous distances.
  </p>

  <ul>
    <li><strong>Astronomical Unit (AU):</strong> Approximately 149.6 million kilometers.</li>
    <li><strong>Light-Year:</strong> About 9.46 trillion kilometers.</li>
    <li><strong>Parsec:</strong> Approximately 3.26 light-years.</li>
  </ul>

  <p>
    These units help scientists communicate cosmic distances more efficiently and make complex astronomical calculations easier to understand.
  </p>

  <h3>Why Accuracy Matters in Length Conversion</h3>

  <p>
    Small conversion errors can create significant problems in professional applications. In engineering and manufacturing, even tiny discrepancies may affect component compatibility, safety standards, and product performance.
  </p>

  <p>
    Historical examples exist where unit conversion mistakes contributed to costly project failures. These incidents demonstrate the importance of using reliable conversion tools and standardized measurement practices.
  </p>

  <p>
    Accurate conversion software helps eliminate manual calculation errors and improves confidence in measurement-related decisions.
  </p>

  <h3>Benefits of Using an Online Length Converter</h3>

  <ul>
    <li>Fast and accurate calculations.</li>
    <li>No need for manual formulas.</li>
    <li>Supports metric, imperial, nautical, and scientific units.</li>
    <li>Reduces the risk of conversion mistakes.</li>
    <li>Useful for education, business, and professional applications.</li>
    <li>Accessible from any device with a web browser.</li>
    <li>Ideal for international collaboration and communication.</li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p>
    <strong>What is the most commonly used length unit in the world?</strong><br>
    The meter is the internationally recognized SI base unit of length and serves as the foundation of the metric system used in most countries.
  </p>

  <p>
    <strong>Why does the United States still use inches and feet?</strong><br>
    Historical practices, infrastructure standards, and widespread familiarity have contributed to the continued use of imperial units in many industries within the United States.
  </p>

  <p>
    <strong>What is the difference between a mile and a nautical mile?</strong><br>
    A standard mile is used primarily for land travel and equals approximately 1.609 kilometers. A nautical mile equals approximately 1.852 kilometers and is based on Earth's geographic coordinates.
  </p>

  <p>
    <strong>Can this converter handle very large and very small values?</strong><br>
    Yes. Modern conversion tools support measurements ranging from microscopic scientific units to astronomical distances measured in light-years and parsecs.
  </p>

  <p>
    <strong>Are the conversion factors accurate?</strong><br>
    Yes. Reliable conversion tools use internationally accepted standards and exact conversion factors whenever available.
  </p>

  <h3>Tips for Working with Measurements</h3>

  <ul>
    <li>Always verify the original measurement unit before converting.</li>
    <li>Use sufficient decimal precision for technical applications.</li>
    <li>Double-check conversions when working on engineering projects.</li>
    <li>Be aware of regional measurement conventions.</li>
    <li>Use standardized units when collaborating internationally.</li>
    <li>Keep conversion records for important calculations.</li>
  </ul>

  <h3>Who Can Benefit from This Tool?</h3>

  <p>
    This converter is useful for students, teachers, engineers, architects, manufacturers, travelers, scientists, surveyors, contractors, researchers, astronomers, and anyone who works with measurements on a regular basis.
  </p>

  <p>
    Whether you are converting dimensions for a building project, calculating travel distances, analyzing scientific data, or comparing product specifications, the tool provides fast and dependable results.
  </p>

  <h3>Why Choose Our Length Unit Converter?</h3>

  <p>
    Our converter combines simplicity, speed, and accuracy in a single easy-to-use interface. Instead of searching through conversion tables or performing manual calculations, users can obtain reliable results instantly.
  </p>

  <p>
    The tool supports a broad range of units, from everyday measurements such as inches and meters to specialized scientific and astronomical units. This makes it suitable for both casual users and professionals.
  </p>

  <h3>Conclusion</h3>

  <p>
    Length measurement is one of the most fundamental concepts in science, engineering, construction, transportation, and daily life. Because multiple measurement systems exist around the world, accurate conversion is essential for communication, planning, and decision-making.
  </p>

  <p>
    Our Free Online Length Unit Converter Tool provides a convenient and reliable solution for converting between metric, imperial, nautical, scientific, and astronomical units. With instant calculations and support for a wide range of measurements, it helps users save time and avoid errors.
  </p>

  <p>
    Whether you are working on a professional engineering project, planning a journey, studying mathematics, conducting scientific research, or simply satisfying your curiosity, this converter offers the accuracy and flexibility needed for successful measurement conversions.
  </p>

</div>


<!-- Formulas Modal -->
<div id="formulasModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Length Conversion Formulas</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="margin-bottom: 20px;">
        <h4>Metric to Imperial:</h4>
        <div class="example-text">1 meter = 3.28084 feet
1 centimeter = 0.393701 inches
1 kilometer = 0.621371 miles
1 millimeter = 0.0393701 inches</div>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h4>Imperial to Metric:</h4>
        <div class="example-text">1 foot = 0.3048 meters
1 inch = 2.54 centimeters
1 mile = 1.60934 kilometers
1 yard = 0.9144 meters</div>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h4>Astronomical Units:</h4>
        <div class="example-text">1 light-year = 9.46073e+15 meters
1 astronomical unit = 1.495978707e+11 meters
1 parsec = 3.085677581e+16 meters
1 parsec = 3.26156 light-years</div>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h4>Specialized Units:</h4>
        <div class="example-text">1 fathom = 1.8288 meters
1 chain = 20.1168 meters
1 rod = 5.0292 meters
1 league = 4828 meters
1 cubit = 0.4572 meters
1 angstrom = 1e-10 meters
1 Planck length = 1.616255e-35 meters</div>
      </div>
      
      <div>
        <h4>Conversion Factors:</h4>
        <div class="example-text">All conversions go through meters as the base unit:
Target Value = (Input Value × Input Factor) ÷ Output Factor</div>
        <p><strong>Example:</strong> Convert 10 feet to meters: (10 × 0.3048) = 3.048 meters</p>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeFormulas">Close</button>
    </div>
  </div>
</div>

<!-- Common Lengths Modal -->
<div id="commonModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Common Length References</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <table class="chart-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Metric</th>
            <th>Imperial</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paper thickness</td>
            <td>0.1 mm</td>
            <td>0.0039 inches</td>
          </tr>
          <tr>
            <td>Credit card thickness</td>
            <td>0.76 mm</td>
            <td>0.03 inches</td>
          </tr>
          <tr>
            <td>Standard door height</td>
            <td>2.03 m</td>
            <td>6 feet 8 inches</td>
          </tr>
          <tr>
            <td>Basketball hoop height</td>
            <td>3.05 m</td>
            <td>10 feet</td>
          </tr>
          <tr>
            <td>Football field length</td>
            <td>91.44 m</td>
            <td>100 yards</td>
          </tr>
          <tr>
            <td>Marathon distance</td>
            <td>42.195 km</td>
            <td>26.219 miles</td>
          </tr>
          <tr>
            <td>Earth's circumference</td>
            <td>40,075 km</td>
            <td>24,901 miles</td>
          </tr>
          <tr>
            <td>Distance to Moon</td>
            <td>384,400 km</td>
            <td>238,855 miles</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeCommon">Close</button>
      <button class="modal-button primary" id="useCommon">Use This Length</button>
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

    // Conversion factors relative to meters
    const conversionFactors = {
      // Metric units
      km: 1000,
      m: 1,
      dm: 0.1,
      cm: 0.01,
      mm: 0.001,
      'µm': 0.000001,
      nm: 0.000000001,
      
      // Imperial units
      in: 0.0254,
      ft: 0.3048,
      yd: 0.9144,
      mi: 1609.344,
      nmi: 1852,
      fth: 1.8288,      // Fathom
      ch: 20.1168,      // Chain
      rd: 5.0292,       // Rod/Pole/Perch
      
      // Astronomical units
      au: 149597870700, // Astronomical Unit
      ly: 9460730472580800, // Light Year
      pc: 30856775814913672, // Parsec
      
      // Scientific & Specialized units
      angstrom: 0.0000000001,
      planck: 1.616255e-35,
      cubit: 0.4572,
      league: 4828
    };

    // Conversion history
    let lastConversion = '';

    // Initialize
    updatePrecisionDisplay();
    updateAllResults();

    // Event listeners
    fromValue.addEventListener('input', function() {
      if (autoUpdate.checked) convertLength();
    });

    fromUnitSelect.addEventListener('change', function() {
      document.getElementById('fromUnit').textContent = this.options[this.selectedIndex].text.split(' ')[0];
      if (autoUpdate.checked) convertLength();
    });

    toUnitSelect.addEventListener('change', function() {
      document.getElementById('toUnit').textContent = this.options[this.selectedIndex].text.split(' ')[0];
      if (autoUpdate.checked) convertLength();
    });

    decimalPrecision.addEventListener('change', function() {
      updatePrecisionDisplay();
      if (autoUpdate.checked) convertLength();
    });

    numberFormat.addEventListener('change', function() {
      if (autoUpdate.checked) convertLength();
    });

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleLengthAction(action);
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
      // For demo purposes, set to 1 meter
      fromValue.value = '1';
      fromUnitSelect.value = 'm';
      convertLength();
      commonModal.style.display = 'none';
      showAlert('1 meter set for conversion', 'success');
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === formulasModal || event.target === commonModal) {
        formulasModal.style.display = 'none';
        commonModal.style.display = 'none';
      }
    });

    function convertLength() {
      const inputValue = parseFloat(fromValue.value);
      if (isNaN(inputValue)) {
        toValue.value = '';
        updateAllResults();
        return;
      }

      const fromUnit = fromUnitSelect.value;
      const toUnit = toUnitSelect.value;
      
      // Convert to meters first, then to target unit
      const valueInMeters = inputValue * conversionFactors[fromUnit];
      const result = valueInMeters / conversionFactors[toUnit];
      
      toValue.value = formatNumber(result, getPrecision());
      
      updateAllResults();
      updateLastConversion(`${inputValue} ${getUnitName(fromUnit)} = ${formatNumber(result, getPrecision())} ${getUnitName(toUnit)}`);
    }

    function updateAllResults() {
      const inputValue = parseFloat(fromValue.value);
      if (isNaN(inputValue)) {
        allResults.innerHTML = '<div class="result-item" style="grid-column: 1 / -1; text-align: center; color: #666;">Enter a length value to see all conversions</div>';
        return;
      }

      const fromUnit = fromUnitSelect.value;
      const precision = getPrecision();
      let resultsHTML = '';

      // Convert to all units
      Object.keys(conversionFactors).forEach(unit => {
        if (unit !== fromUnit) {
          const valueInMeters = inputValue * conversionFactors[fromUnit];
          const result = valueInMeters / conversionFactors[unit];
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
        } else if (system === 'imperial' && parentGroup === 'Imperial Units') {
          option.style.display = '';
        } else if (system === 'astronomical' && parentGroup === 'Astronomical Units') {
          option.style.display = '';
        } else if (system === 'specialized' && parentGroup === 'Scientific & Specialized Units') {
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
        } else if (system === 'imperial' && parentGroup === 'Imperial Units') {
          option.style.display = '';
        } else if (system === 'astronomical' && parentGroup === 'Astronomical Units') {
          option.style.display = '';
        } else if (system === 'specialized' && parentGroup === 'Scientific & Specialized Units') {
          option.style.display = '';
        } else {
          option.style.display = 'none';
        }
      }
    }

    function handleLengthAction(action) {
      switch (action) {
        case 'convert':
          convertLength();
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
          
          if (autoUpdate.checked) convertLength();
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
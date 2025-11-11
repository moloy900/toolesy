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

      <h3>Common Equivalents:</h3>
      <div class="example-text">1 nautical mile = 1.852 kilometers
1 light-year = 9.461e+12 kilometers
1 astronomical unit = 1.496e+8 kilometers
1 parsec = 3.086e+13 kilometers</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Length Unit Converter Tool</h2>

    <p>Need to convert length measurements quickly and accurately? Our free <strong>Length Unit Converter tool</strong> is the perfect solution for students, engineers, travelers, DIY enthusiasts, and professionals working with international measurements. This powerful tool instantly converts between all major metric and imperial length units with precision and ease. There's no download required, no registration needed, and your data privacy is guaranteed as all conversions happen securely right in your browser.</p>

    <h3>How to Use This Length Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Length:</strong> Type a length value into the "From Value" input field.</li>
      <li><strong>Select Units:</strong> Choose the source unit from the "From Unit" dropdown and the target unit from the "To Unit" dropdown.</li>
      <li><strong>Auto-Conversion:</strong> With auto-update enabled, the result will update instantly as you type or change units.</li>
      <li><strong>Manual Conversion:</strong> If auto-update is disabled, click "Convert" to calculate the conversion.</li>
      <li><strong>View All Results:</strong> See conversions to all available units in the results grid below.</li>
      <li><strong>Copy Results:</strong> Use the "Copy Result" button to easily paste converted lengths elsewhere.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're an engineer working on an international project where specifications are in millimeters, but your tools are calibrated in inches. Instead of manual calculations (which can be error-prone), you can simply enter the measurement in millimeters and select inches as the target unit. For example, entering 25.4 mm instantly shows you it equals exactly 1 inch. Similarly, if you're planning a road trip in Europe where distances are in kilometers but you're used to miles, converting 100 km shows it's approximately 62.14 miles.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Students & Teachers:</strong> Learn unit conversion concepts and verify homework answers across different measurement systems.</li>
      <li><strong>Engineers & Architects:</strong> Convert technical drawings and specifications between metric and imperial systems.</li>
      <li><strong>Travelers & Navigators:</strong> Understand distance measurements when traveling between countries using different measurement systems.</li>
      <li><strong>DIY Enthusiasts:</strong> Convert measurements for home improvement projects using tools and materials from different countries.</li>
      <li><strong>Scientists & Researchers:</strong> Work with length data from international collaborators using consistent units.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What is the difference between metric and imperial units?</strong><br>
      A: Metric units (meters, centimeters, kilometers) are based on powers of 10 and used worldwide. Imperial units (inches, feet, yards, miles) are primarily used in the United States and are based on historical measurements.</p>

    <p><strong>How accurate are the conversions?</strong><br>
      Our conversions are highly accurate, using standardized conversion factors. For example, 1 inch is exactly 2.54 centimeters by international agreement.</p>

    <p><strong>What is a nautical mile and how does it differ from a regular mile?</strong><br>
      A nautical mile is based on the circumference of the Earth and equals 1 minute of latitude (approximately 1.852 km). A statute mile (regular mile) is 1.609 km and is used for land measurements.</p>

    <p><strong>Can I convert very large or very small measurements?</strong><br>
      Yes, the tool handles measurements from nanometers (billionths of a meter) to kilometers and beyond. You can also use scientific notation for extreme values.</p>

    <p><strong>Is this tool available on mobile devices?</strong><br>
      Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <h3>Why Choose Our Length Unit Converter?</h3>
    <p>Our <strong>online length converter</strong> stands out from other tools because of its comprehensive coverage, accuracy, and privacy features. Unlike many online tools, we don't store your data on our servers - all conversions happen in your browser. This means your measurement data remains completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Measurement System Background</h3>
    <p>Understanding different measurement systems helps in various applications:</p>
    <ul>
      <li><strong>Metric System:</strong> International standard used in science, engineering, and most countries worldwide. Based on meters with decimal multiples and subdivisions.</li>
      <li><strong>Imperial System:</strong> Traditional system used primarily in the United States. Based on historical units like inches, feet, and yards.</li>
      <li><strong>SI Units:</strong> The International System of Units, which includes the meter as the base unit of length, used in scientific contexts globally.</li>
    </ul>

    <h3>Common Applications of Length Conversion</h3>
    <p>Length conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Construction & Engineering:</strong> Convert blueprints and specifications between measurement systems</li>
      <li><strong>International Trade:</strong> Understand product dimensions from international suppliers</li>
      <li><strong>Education:</strong> Teach measurement concepts and unit conversion skills</li>
      <li><strong>Travel & Navigation:</strong> Convert distance measurements for trip planning</li>
      <li><strong>Manufacturing:</strong> Work with machinery and tools calibrated in different units</li>
      <li><strong>Science & Research:</strong> Standardize measurements from international studies and publications</li>
    </ul>
  </div>
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
        <h4>Special Units:</h4>
        <div class="example-text">1 nautical mile = 1.852 kilometers
1 light-year = 9.461e+12 kilometers
1 astronomical unit = 1.496e+8 kilometers
1 parsec = 3.086e+13 kilometers</div>
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
      nmi: 1852
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
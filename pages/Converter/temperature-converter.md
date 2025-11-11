---
layout: default
title: "Celsius to Fahrenheit Converter | Free Online Tool"
permalink: /celsius-to-fahrenheit-converter-free-online-tool/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Celsius to Fahrenheit Converter | Free Online Tool</title>
<meta name="description"
  content="Convert Celsius to Fahrenheit, Kelvin, and vice versa instantly. Use this free online temperature converter for accurate and quick conversions.">
<meta name="keywords"
  content="temperature converter, celsius to fahrenheit, fahrenheit to celsius, temperature calculator, celsius converter, fahrenheit converter, kelvin converter, temperature conversion">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Temperature Converter Styles */
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

  .temperature-input-group {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .temperature-input {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border: 2px solid #e0e6ed;
    transition: all 0.3s ease;
  }

  .temperature-input:focus-within {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .temperature-input label {
    display: block;
    font-weight: 600;
    margin-bottom: 10px;
    color: #2c3e50;
    font-size: 1.1rem;
  }

  .temperature-input input {
    width: 100%;
    padding: 15px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 18px;
    font-family: 'Courier New', monospace;
    transition: border-color 0.3s;
  }

  .temperature-input input:focus {
    outline: none;
    border-color: var(--primary);
  }

  .temperature-display {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    color: var(--primary);
    font-family: 'Courier New', monospace;
  }

  .unit-label {
    font-size: 0.9rem;
    color: #7f8c8d;
    margin-top: 5px;
    text-align: center;
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

  /* Temperature specific styles */
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

  .temperature-scale {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
  }

  .scale-button {
    padding: 10px 15px;
    border: 2px solid var(--primary);
    background: white;
    color: var(--primary);
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .scale-button.active {
    background: var(--primary);
    color: white;
  }

  .scale-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .temperature-chart {
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

    .converter-options {
      grid-template-columns: 1fr;
    }

    .temperature-input-group {
      grid-template-columns: 1fr;
    }

    .chart-table {
      font-size: 0.8rem;
    }

    .chart-table th,
    .chart-table td {
      padding: 8px 4px;
    }
  }
</style>

<div class="converter-container">
  <h1>Temperature Converter</h1>
  <p class="welcome-message">Convert between Celsius, Fahrenheit, and Kelvin instantly. Accurate and easy-to-use temperature conversion calculator for scientific, educational, and everyday use.</p>

  <div class="converter-section">
    <h2>Temperature Converter</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>From Scale: </span>
        <span id="fromScale">Celsius</span>
      </div>
      <div class="counter-item">
        <span>To Scale: </span>
        <span id="toScale">Fahrenheit</span>
      </div>
      <div class="counter-item">
        <span>Precision: </span>
        <span id="precisionCount">2 decimals</span>
      </div>
      <div class="counter-item">
        <span>Last Conversion: </span>
        <span id="lastConversion">-</span>
      </div>
    </div>

    <div class="temperature-scale">
      <button class="scale-button active" data-scale="celsius">Celsius (°C)</button>
      <button class="scale-button" data-scale="fahrenheit">Fahrenheit (°F)</button>
      <button class="scale-button" data-scale="kelvin">Kelvin (K)</button>
    </div>

    <div class="temperature-input-group">
      <div class="temperature-input">
        <label for="celsiusInput">Celsius (°C)</label>
        <input type="number" id="celsiusInput" placeholder="Enter Celsius temperature">
        <div class="temperature-display" id="celsiusDisplay">-</div>
        <div class="unit-label">Degrees Celsius</div>
      </div>

      <div class="temperature-input">
        <label for="fahrenheitInput">Fahrenheit (°F)</label>
        <input type="number" id="fahrenheitInput" placeholder="Enter Fahrenheit temperature">
        <div class="temperature-display" id="fahrenheitDisplay">-</div>
        <div class="unit-label">Degrees Fahrenheit</div>
      </div>

      <div class="temperature-input">
        <label for="kelvinInput">Kelvin (K)</label>
        <input type="number" id="kelvinInput" placeholder="Enter Kelvin temperature">
        <div class="temperature-display" id="kelvinDisplay">-</div>
        <div class="unit-label">Kelvin</div>
      </div>
    </div>

    <div class="converter-options">
      <div class="option-group">
        <label class="option-label">Decimal Precision</label>
        <select id="decimalPrecision" class="option-select">
          <option value="0">0 decimals</option>
          <option value="1">1 decimal</option>
          <option value="2" selected>2 decimals</option>
          <option value="3">3 decimals</option>
          <option value="4">4 decimals</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Auto-update</label>
        <div class="option-checkbox">
          <input type="checkbox" id="autoUpdate" checked>
          <label for="autoUpdate">Update all fields automatically</label>
        </div>
      </div>
      
      <div class="option-group">
        <label class="option-label">Temperature Range</label>
        <select id="temperatureRange" class="option-select">
          <option value="all">All temperatures</option>
          <option value="common">Common range (-100°C to 100°C)</option>
          <option value="scientific">Scientific range</option>
        </select>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="convert">Convert All</button>
        <button class="case-button" data-action="swap">Swap Units</button>
        <button class="case-button" data-action="copy">Copy Results</button>
        <button class="case-button success" data-action="common">Common Temperatures</button>
        <button class="case-button warning" data-action="formula">Show Formulas</button>
        <button class="case-button secondary" data-action="clear">Clear All</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="temperature-chart">
      <h3>Common Temperature Conversions</h3>
      <table class="chart-table">
        <thead>
          <tr>
            <th>Celsius (°C)</th>
            <th>Fahrenheit (°F)</th>
            <th>Kelvin (K)</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-273.15</td>
            <td>-459.67</td>
            <td>0</td>
            <td>Absolute Zero</td>
          </tr>
          <tr>
            <td>-40</td>
            <td>-40</td>
            <td>233.15</td>
            <td>Where Celsius = Fahrenheit</td>
          </tr>
          <tr>
            <td>0</td>
            <td>32</td>
            <td>273.15</td>
            <td>Water Freezing Point</td>
          </tr>
          <tr>
            <td>20</td>
            <td>68</td>
            <td>293.15</td>
            <td>Room Temperature</td>
          </tr>
          <tr>
            <td>37</td>
            <td>98.6</td>
            <td>310.15</td>
            <td>Human Body Temperature</td>
          </tr>
          <tr>
            <td>100</td>
            <td>212</td>
            <td>373.15</td>
            <td>Water Boiling Point</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="examples">
      <h2>Conversion Examples</h2>

      <h3>Celsius to Fahrenheit:</h3>
      <div class="example-text">0°C = 32°F
20°C = 68°F
37°C = 98.6°F
100°C = 212°F</div>

      <h3>Fahrenheit to Celsius:</h3>
      <div class="example-text">32°F = 0°C
68°F = 20°C
98.6°F = 37°C
212°F = 100°C</div>

      <h3>Celsius to Kelvin:</h3>
      <div class="example-text">0°C = 273.15K
-273.15°C = 0K
100°C = 373.15K
25°C = 298.15K</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Temperature Converter Tool</h2>

    <p>Need to convert temperatures quickly and accurately? Our free <strong>Temperature Converter tool</strong> is the perfect solution for students, scientists, cooks, travelers, and anyone who needs to work with different temperature scales. This powerful tool instantly converts between Celsius, Fahrenheit, and Kelvin with precision and ease. There's no download required, no registration needed, and your data privacy is guaranteed as all conversions happen securely right in your browser.</p>

    <h3>How to Use This Temperature Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Temperature:</strong> Type a temperature value into any of the input fields (Celsius, Fahrenheit, or Kelvin).</li>
      <li><strong>Auto-Conversion:</strong> With auto-update enabled, all other temperature fields will update instantly as you type.</li>
      <li><strong>Manual Conversion:</strong> If auto-update is disabled, click "Convert All" to update all temperature values.</li>
      <li><strong>Customize Settings:</strong> Adjust decimal precision and temperature range according to your needs.</li>
      <li><strong>Copy Results:</strong> Use the "Copy Results" button to easily paste converted temperatures elsewhere.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're following an American recipe that calls for an oven temperature of 350°F, but your oven uses Celsius. Instead of trying to calculate the conversion manually (which can be error-prone), you can simply enter 350 in the Fahrenheit field. The tool will instantly show you that this equals 176.67°C. Similarly, if you're a scientist working with cryogenics and need to convert -196°C (liquid nitrogen temperature) to Kelvin, the tool shows you it's 77.15K instantly.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Students & Teachers:</strong> Learn temperature conversion formulas and verify homework answers.</li>
      <li><strong>Scientists & Researchers:</strong> Quickly convert between temperature scales for experiments and data analysis.</li>
      <li><strong>Cooks & Bakers:</strong> Convert oven temperatures between Celsius and Fahrenheit for international recipes.</li>
      <li><strong>Travelers:</strong> Understand local weather forecasts when traveling between countries using different temperature scales.</li>
      <li><strong>Engineers & Technicians:</strong> Convert temperature readings for equipment calibration and maintenance.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What is the formula for converting Celsius to Fahrenheit?</strong><br>
      The formula is: °F = (°C × 9/5) + 32. For example, 20°C equals (20 × 9/5) + 32 = 68°F.</p>

    <p><strong>How do I convert Fahrenheit to Celsius?</strong><br>
      The formula is: °C = (°F - 32) × 5/9. For example, 68°F equals (68 - 32) × 5/9 = 20°C.</p>

    <p><strong>What is Kelvin and how does it relate to Celsius?</strong><br>
      Kelvin is the base unit of temperature in the International System of Units (SI). The conversion is simple: K = °C + 273.15. Kelvin uses the same increment as Celsius but starts at absolute zero (-273.15°C).</p>

    <p><strong>Is there a temperature where Celsius and Fahrenheit are equal?</strong><br>
      Yes, at -40 degrees. Both -40°C and -40°F represent the same temperature.</p>

    <p><strong>Can I use this tool on my mobile phone?</strong><br>
      Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <h3>Why Choose Our Temperature Converter?</h3>
    <p>Our <strong>online temperature converter</strong> stands out from other tools because of its accuracy, simplicity, and privacy features. Unlike many online tools, we don't store your data on our servers - all conversions happen in your browser. This means your temperature data remains completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Temperature Scale Background</h3>
    <p>Understanding the different temperature scales helps in various applications:</p>
    <ul>
      <li><strong>Celsius (°C):</strong> Used worldwide for everyday temperature measurements. Based on water freezing (0°C) and boiling (100°C) points.</li>
      <li><strong>Fahrenheit (°F):</strong> Primarily used in the United States. Based on a scale where water freezes at 32°F and boils at 212°F.</li>
      <li><strong>Kelvin (K):</strong> The scientific standard, used in physics and chemistry. Starts at absolute zero (0K), the theoretical minimum temperature where molecular motion stops.</li>
    </ul>

    <h3>Common Applications of Temperature Conversion</h3>
    <p>Temperature conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Cooking & Baking:</strong> Convert oven temperatures for international recipes</li>
      <li><strong>Weather Forecasting:</strong> Understand temperature reports from different countries</li>
      <li><strong>Scientific Research:</strong> Work with temperature data in consistent units</li>
      <li><strong>Medical Field:</strong> Convert body temperature readings between scales</li>
      <li><strong>Engineering:</strong> Convert temperature specifications for equipment and materials</li>
      <li><strong>Education:</strong> Teach and learn about temperature scales and conversions</li>
    </ul>
  </div>
</div>

<!-- Formulas Modal -->
<div id="formulasModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Temperature Conversion Formulas</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="margin-bottom: 20px;">
        <h4>Celsius to Fahrenheit:</h4>
        <div class="example-text">°F = (°C × 9/5) + 32</div>
        <p><strong>Example:</strong> 20°C = (20 × 9/5) + 32 = 68°F</p>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h4>Fahrenheit to Celsius:</h4>
        <div class="example-text">°C = (°F - 32) × 5/9</div>
        <p><strong>Example:</strong> 68°F = (68 - 32) × 5/9 = 20°C</p>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h4>Celsius to Kelvin:</h4>
        <div class="example-text">K = °C + 273.15</div>
        <p><strong>Example:</strong> 25°C = 25 + 273.15 = 298.15K</p>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h4>Kelvin to Celsius:</h4>
        <div class="example-text">°C = K - 273.15</div>
        <p><strong>Example:</strong> 300K = 300 - 273.15 = 26.85°C</p>
      </div>
      
      <div>
        <h4>Fahrenheit to Kelvin:</h4>
        <div class="example-text">K = (°F - 32) × 5/9 + 273.15</div>
        <p><strong>Example:</strong> 68°F = (68 - 32) × 5/9 + 273.15 = 293.15K</p>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeFormulas">Close</button>
    </div>
  </div>
</div>

<!-- Common Temperatures Modal -->
<div id="commonModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Common Temperature References</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <table class="chart-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Celsius (°C)</th>
            <th>Fahrenheit (°F)</th>
            <th>Kelvin (K)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Absolute Zero</td>
            <td>-273.15</td>
            <td>-459.67</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Dry Ice (Sublimation)</td>
            <td>-78.5</td>
            <td>-109.3</td>
            <td>194.65</td>
          </tr>
          <tr>
            <td>Coldest Recorded Temperature on Earth</td>
            <td>-89.2</td>
            <td>-128.6</td>
            <td>183.95</td>
          </tr>
          <tr>
            <td>Water Freezing Point</td>
            <td>0</td>
            <td>32</td>
            <td>273.15</td>
          </tr>
          <tr>
            <td>Room Temperature</td>
            <td>20-25</td>
            <td>68-77</td>
            <td>293.15-298.15</td>
          </tr>
          <tr>
            <td>Human Body Temperature</td>
            <td>37</td>
            <td>98.6</td>
            <td>310.15</td>
          </tr>
          <tr>
            <td>Hot Summer Day</td>
            <td>35</td>
            <td>95</td>
            <td>308.15</td>
          </tr>
          <tr>
            <td>Water Boiling Point</td>
            <td>100</td>
            <td>212</td>
            <td>373.15</td>
          </tr>
          <tr>
            <td>Pizza Oven</td>
            <td>260-290</td>
            <td>500-554</td>
            <td>533.15-563.15</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeCommon">Close</button>
      <button class="modal-button primary" id="useCommon">Use This Temperature</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const celsiusInput = document.getElementById('celsiusInput');
    const fahrenheitInput = document.getElementById('fahrenheitInput');
    const kelvinInput = document.getElementById('kelvinInput');
    const celsiusDisplay = document.getElementById('celsiusDisplay');
    const fahrenheitDisplay = document.getElementById('fahrenheitDisplay');
    const kelvinDisplay = document.getElementById('kelvinDisplay');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const scaleButtons = document.querySelectorAll('.scale-button');
    
    // Options
    const decimalPrecision = document.getElementById('decimalPrecision');
    const autoUpdate = document.getElementById('autoUpdate');
    const temperatureRange = document.getElementById('temperatureRange');
    
    // Modal elements
    const formulasModal = document.getElementById('formulasModal');
    const commonModal = document.getElementById('commonModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const closeFormulas = document.getElementById('closeFormulas');
    const closeCommon = document.getElementById('closeCommon');
    const useCommon = document.getElementById('useCommon');

    // Conversion history
    let lastConversion = '';

    // Initialize
    updateDisplays();

    // Event listeners
    celsiusInput.addEventListener('input', function() {
      if (autoUpdate.checked) convertFromCelsius();
    });

    fahrenheitInput.addEventListener('input', function() {
      if (autoUpdate.checked) convertFromFahrenheit();
    });

    kelvinInput.addEventListener('input', function() {
      if (autoUpdate.checked) convertFromKelvin();
    });

    decimalPrecision.addEventListener('change', updateDisplays);
    temperatureRange.addEventListener('change', validateTemperatures);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleTemperatureAction(action);
      });
    });

    scaleButtons.forEach(button => {
      button.addEventListener('click', function() {
        scaleButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        document.getElementById('fromScale').textContent = this.textContent.split(' ')[0];
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
      // For demo purposes, set to room temperature
      celsiusInput.value = '20';
      convertFromCelsius();
      commonModal.style.display = 'none';
      showAlert('Room temperature (20°C) set for conversion', 'success');
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === formulasModal || event.target === commonModal) {
        formulasModal.style.display = 'none';
        commonModal.style.display = 'none';
      }
    });

    function convertFromCelsius() {
      const celsius = parseFloat(celsiusInput.value);
      if (isNaN(celsius)) {
        clearDisplays();
        return;
      }

      const fahrenheit = (celsius * 9/5) + 32;
      const kelvin = celsius + 273.15;

      fahrenheitInput.value = fahrenheit.toFixed(getPrecision());
      kelvinInput.value = kelvin.toFixed(getPrecision());
      
      updateDisplays();
      updateLastConversion(`${celsius}°C = ${fahrenheit.toFixed(getPrecision())}°F = ${kelvin.toFixed(getPrecision())}K`);
    }

    function convertFromFahrenheit() {
      const fahrenheit = parseFloat(fahrenheitInput.value);
      if (isNaN(fahrenheit)) {
        clearDisplays();
        return;
      }

      const celsius = (fahrenheit - 32) * 5/9;
      const kelvin = (fahrenheit - 32) * 5/9 + 273.15;

      celsiusInput.value = celsius.toFixed(getPrecision());
      kelvinInput.value = kelvin.toFixed(getPrecision());
      
      updateDisplays();
      updateLastConversion(`${fahrenheit}°F = ${celsius.toFixed(getPrecision())}°C = ${kelvin.toFixed(getPrecision())}K`);
    }

    function convertFromKelvin() {
      const kelvin = parseFloat(kelvinInput.value);
      if (isNaN(kelvin)) {
        clearDisplays();
        return;
      }

      const celsius = kelvin - 273.15;
      const fahrenheit = (kelvin - 273.15) * 9/5 + 32;

      celsiusInput.value = celsius.toFixed(getPrecision());
      fahrenheitInput.value = fahrenheit.toFixed(getPrecision());
      
      updateDisplays();
      updateLastConversion(`${kelvin}K = ${celsius.toFixed(getPrecision())}°C = ${fahrenheit.toFixed(getPrecision())}°F`);
    }

    function updateDisplays() {
      const precision = getPrecision();
      
      celsiusDisplay.textContent = celsiusInput.value ? parseFloat(celsiusInput.value).toFixed(precision) + '°C' : '-';
      fahrenheitDisplay.textContent = fahrenheitInput.value ? parseFloat(fahrenheitInput.value).toFixed(precision) + '°F' : '-';
      kelvinDisplay.textContent = kelvinInput.value ? parseFloat(kelvinInput.value).toFixed(precision) + 'K' : '-';
      
      document.getElementById('precisionCount').textContent = precision + ' decimal' + (precision !== 1 ? 's' : '');
    }

    function clearDisplays() {
      celsiusDisplay.textContent = '-';
      fahrenheitDisplay.textContent = '-';
      kelvinDisplay.textContent = '-';
    }

    function getPrecision() {
      return parseInt(decimalPrecision.value);
    }

    function updateLastConversion(conversion) {
      lastConversion = conversion;
      document.getElementById('lastConversion').textContent = conversion;
    }

    function validateTemperatures() {
      const range = temperatureRange.value;
      let celsius = parseFloat(celsiusInput.value);
      
      if (isNaN(celsius)) return;
      
      if (range === 'common' && (celsius < -100 || celsius > 100)) {
        showAlert('Temperature outside common range (-100°C to 100°C)', 'error');
      }
    }

    function handleTemperatureAction(action) {
      switch (action) {
        case 'convert':
          if (celsiusInput.value) convertFromCelsius();
          else if (fahrenheitInput.value) convertFromFahrenheit();
          else if (kelvinInput.value) convertFromKelvin();
          else showAlert('Please enter a temperature to convert', 'error');
          break;

        case 'swap':
          // Swap Celsius and Fahrenheit values
          const tempCelsius = celsiusInput.value;
          const tempFahrenheit = fahrenheitInput.value;
          celsiusInput.value = tempFahrenheit;
          fahrenheitInput.value = tempCelsius;
          if (autoUpdate.checked) convertFromCelsius();
          else updateDisplays();
          showAlert('Celsius and Fahrenheit values swapped', 'success');
          break;

        case 'copy':
          copyResultsToClipboard();
          break;

        case 'common':
          commonModal.style.display = 'block';
          break;

        case 'formula':
          formulasModal.style.display = 'block';
          break;

        case 'clear':
          celsiusInput.value = '';
          fahrenheitInput.value = '';
          kelvinInput.value = '';
          updateDisplays();
          lastConversion = '';
          document.getElementById('lastConversion').textContent = '-';
          showAlert('All fields cleared', 'success');
          break;
      }
    }

    function copyResultsToClipboard() {
      if (!celsiusInput.value && !fahrenheitInput.value && !kelvinInput.value) {
        showAlert('No temperature data to copy', 'error');
        return;
      }

      let copyText = '';
      if (celsiusInput.value) copyText += `Celsius: ${celsiusDisplay.textContent}\n`;
      if (fahrenheitInput.value) copyText += `Fahrenheit: ${fahrenheitDisplay.textContent}\n`;
      if (kelvinInput.value) copyText += `Kelvin: ${kelvinDisplay.textContent}\n`;
      
      if (lastConversion) copyText += `\nLast Conversion: ${lastConversion}`;

      navigator.clipboard.writeText(copyText).then(() => {
        showAlert('Temperature results copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy results: ' + err, 'error');
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
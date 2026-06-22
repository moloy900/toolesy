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

  <p>
    Temperature is something we encounter every day, whether we're checking the weather forecast, cooking dinner, conducting scientific experiments, monitoring industrial equipment, or traveling to another country. Because different regions and industries use different temperature scales, converting temperature values accurately is often necessary. That's where our <strong>Free Online Temperature Converter Tool</strong> becomes incredibly useful.
  </p>

  <p>
    This easy-to-use converter allows you to instantly switch between Celsius (°C), Fahrenheit (°F), and Kelvin (K) without needing to memorize formulas or perform manual calculations. Simply enter a value into any temperature field, and the corresponding values in other temperature scales are displayed automatically. Whether you're a student, teacher, scientist, engineer, chef, healthcare professional, or traveler, this tool provides quick and reliable temperature conversions whenever you need them.
  </p>

  <p>
    Unlike many online conversion tools, our temperature converter works directly in your browser. No software installation is required, no account registration is needed, and your information remains completely private because all calculations happen locally on your device. This makes the tool not only convenient but also secure and dependable.
  </p>

  <p>
    From converting oven temperatures for international recipes to translating scientific measurements between Celsius and Kelvin, this converter helps eliminate errors and saves valuable time. Whether you're handling everyday tasks or professional calculations, accurate temperature conversion has never been easier.
  </p>

  <h3>How to Use This Temperature Converter (Step-by-Step)</h3>

  <p>
    The converter is designed to be simple enough for beginners while still providing the precision required by professionals. Follow these easy steps to convert temperatures instantly.
  </p>

  <ul>
    <li>
      <strong>Enter a Temperature Value:</strong> Type a temperature value into any available field, whether Celsius, Fahrenheit, or Kelvin.
    </li>

    <li>
      <strong>Automatic Conversion:</strong> If auto-convert is enabled, the remaining temperature fields update instantly as you type.
    </li>

    <li>
      <strong>Manual Conversion Option:</strong> If automatic updates are disabled, simply click the conversion button to generate results.
    </li>

    <li>
      <strong>Adjust Precision:</strong> Choose the number of decimal places that best suits your needs, from simple everyday values to highly precise scientific calculations.
    </li>

    <li>
      <strong>Review Results:</strong> Compare the converted values across multiple temperature scales.
    </li>

    <li>
      <strong>Copy and Share:</strong> Use the copy feature to quickly transfer results into reports, spreadsheets, assignments, recipes, or research documents.
    </li>

    <li>
      <strong>Start Again Anytime:</strong> Clear all values and begin a new conversion whenever necessary.
    </li>
  </ul>

  <p>
    Because the tool updates results instantly, users can experiment with different values and gain a deeper understanding of how temperature scales relate to one another.
  </p>

  <h3>Real-Life Example & Use Case</h3>

  <p>
    Imagine you're following a recipe from the United States that recommends baking a cake at 350°F. However, your oven displays temperatures only in Celsius. Without a converter, you would need to calculate the conversion manually using a formula, which increases the risk of mistakes.
  </p>

  <p>
    By entering 350°F into the converter, you'll instantly see that it corresponds to approximately 176.67°C. This allows you to set your oven correctly and achieve the intended cooking results.
  </p>

  <p>
    Temperature conversion is equally important in scientific fields. For example, a chemistry student may need to convert laboratory temperatures from Celsius to Kelvin when performing calculations involving gases and thermodynamics. Entering 25°C immediately reveals that the equivalent temperature is 298.15 K.
  </p>

  <p>
    Another example involves international travel. Suppose you're visiting a country that uses Celsius while you're familiar with Fahrenheit. A weather forecast predicting 30°C may not immediately mean much to you. By converting it, you'll discover that 30°C equals 86°F, helping you pack appropriate clothing and prepare for the local climate.
  </p>

  <p>
    These everyday examples demonstrate how a temperature converter can simplify tasks, improve understanding, and eliminate calculation errors.
  </p>

  <h3>Benefits & Who Should Use This Tool?</h3>

  <p>
    Temperature conversion is required in many professions, academic disciplines, and daily activities. This tool has been designed to serve a broad range of users.
  </p>

  <ul>
    <li>
      <strong>Students:</strong> Learn temperature conversion principles and verify homework solutions quickly and accurately.
    </li>

    <li>
      <strong>Teachers:</strong> Demonstrate temperature scale relationships during classroom instruction and laboratory exercises.
    </li>

    <li>
      <strong>Scientists:</strong> Convert temperatures for chemistry, physics, biology, and environmental science applications.
    </li>

    <li>
      <strong>Researchers:</strong> Standardize temperature data when preparing technical reports and scientific publications.
    </li>

    <li>
      <strong>Cooks and Bakers:</strong> Convert oven temperatures for recipes from different countries and regions.
    </li>

    <li>
      <strong>Travelers:</strong> Understand local weather forecasts and climate conditions regardless of the temperature scale used.
    </li>

    <li>
      <strong>Engineers:</strong> Convert operating temperatures for industrial equipment, machinery, and manufacturing processes.
    </li>

    <li>
      <strong>Technicians:</strong> Use accurate temperature conversions during maintenance, testing, and calibration work.
    </li>

    <li>
      <strong>Healthcare Professionals:</strong> Interpret temperature readings and communicate measurements using different scales.
    </li>

    <li>
      <strong>General Users:</strong> Perform quick and accurate conversions for everyday needs without learning complicated formulas.
    </li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p>
    <strong>What is temperature?</strong><br>
    Temperature is a measure of how hot or cold an object or environment is. Scientifically, it reflects the average kinetic energy of particles within a substance.
  </p>

  <p>
    <strong>Why are there different temperature scales?</strong><br>
    Different temperature scales were developed by scientists during various periods of history. Celsius, Fahrenheit, and Kelvin each serve specific purposes and remain widely used in different regions and scientific disciplines.
  </p>

  <p>
    <strong>Which temperature scale is most commonly used worldwide?</strong><br>
    Celsius is the most widely used temperature scale for weather reporting, education, and everyday measurements in most countries around the world.
  </p>

  <p>
    <strong>What temperature does water freeze at?</strong><br>
    Pure water freezes at 0°C, 32°F, and 273.15 K under standard atmospheric conditions.
  </p>

  <p>
    <strong>What temperature does water boil at?</strong><br>
    Water boils at 100°C, 212°F, and 373.15 K at standard atmospheric pressure.
  </p>

  <p>
    <strong>What is absolute zero?</strong><br>
    Absolute zero is the lowest theoretical temperature possible. It occurs at 0 Kelvin, which is equal to -273.15°C or -459.67°F.
  </p>

  <p>
    <strong>Can this converter handle negative temperatures?</strong><br>
    Yes. The converter supports positive, negative, and extremely low temperatures, making it useful for scientific, industrial, and educational applications.
  </p>

  <p>
    <strong>Is the converter accurate?</strong><br>
    Absolutely. The tool uses standard scientific conversion formulas and precise calculations to ensure reliable results.
  </p>

</div>

<h3>Why Choose Our Temperature Converter?</h3>

<p>
  There are many temperature conversion calculators available online, but not all of them provide the same level of convenience, accuracy, and reliability. Our Temperature Converter has been designed to make temperature conversions as simple as possible while maintaining the precision required for scientific, educational, and professional applications.
</p>

<p>
  One of the greatest advantages of this tool is its ease of use. Users do not need to remember conversion formulas or perform calculations manually. Simply enter a value into one temperature field, and all corresponding values are displayed instantly.
</p>

<p>
  The converter is suitable for both everyday users and professionals. Whether you're converting a weather forecast, adjusting oven settings, conducting laboratory research, or analyzing engineering data, the tool provides fast and dependable results.
</p>

<p>
  Privacy is another major benefit. All calculations take place directly in your browser rather than being processed on external servers. This ensures that your data remains secure and confidential.
</p>

<p>
  The tool is also optimized for mobile devices, allowing users to perform temperature conversions on smartphones, tablets, laptops, and desktop computers without any installation requirements.
</p>

<p>
  Additional benefits include:
</p>

<ul>
  <li>Instant temperature conversions.</li>
  <li>Support for Celsius, Fahrenheit, and Kelvin.</li>
  <li>Easy-to-understand interface.</li>
  <li>Accurate scientific calculations.</li>
  <li>No registration or downloads required.</li>
  <li>Works across all modern devices.</li>
  <li>Suitable for educational and professional use.</li>
</ul>

<h3>Temperature Scale Background</h3>

<p>
  Temperature scales provide standardized methods for measuring thermal energy. Throughout history, scientists have developed various temperature systems to meet different scientific and practical needs.
</p>

<p>
  Today, the three most commonly used scales are Celsius, Fahrenheit, and Kelvin. Each scale has unique characteristics and remains important in different fields.
</p>

<h4>Celsius (°C)</h4>

<p>
  Celsius is the most widely used temperature scale worldwide. It is based on the freezing and boiling points of water under standard atmospheric conditions.
</p>

<p>
  On the Celsius scale:
</p>

<ul>
  <li>Water freezes at 0°C.</li>
  <li>Water boils at 100°C.</li>
  <li>Normal room temperature is approximately 20–25°C.</li>
</ul>

<p>
  Because of its simplicity and compatibility with the metric system, Celsius has become the standard temperature scale for everyday use in most countries.
</p>

<h4>Fahrenheit (°F)</h4>

<p>
  Fahrenheit remains widely used in the United States and a few other regions. It provides a different numerical scale for measuring temperature.
</p>

<p>
  On the Fahrenheit scale:
</p>

<ul>
  <li>Water freezes at 32°F.</li>
  <li>Water boils at 212°F.</li>
  <li>Average room temperature is around 68–77°F.</li>
</ul>

<p>
  Although many countries have adopted Celsius, Fahrenheit continues to be important in weather reporting, cooking, and everyday measurements in certain regions.
</p>

<h4>Kelvin (K)</h4>

<p>
  Kelvin is the official temperature unit used in the International System of Units (SI). Unlike Celsius and Fahrenheit, Kelvin does not use the word "degrees."
</p>

<p>
  Kelvin is especially important in science because it begins at absolute zero, the lowest possible temperature.
</p>

<ul>
  <li>Absolute zero = 0 K.</li>
  <li>Water freezes at 273.15 K.</li>
  <li>Water boils at 373.15 K.</li>
</ul>

<p>
  Scientists prefer Kelvin because many physical equations and thermodynamic calculations require an absolute temperature scale.
</p>

<h3>The History of Temperature Measurement</h3>

<p>
  Humans have attempted to measure heat and cold for centuries. Early civilizations relied primarily on observation rather than precise measurement. People could identify whether an object felt hot or cold, but they lacked standardized methods for quantifying temperature.
</p>

<p>
  Significant progress occurred during the 17th and 18th centuries when scientists began developing thermometers and temperature scales.
</p>

<h4>Daniel Gabriel Fahrenheit</h4>

<p>
  In the early 1700s, German physicist Daniel Gabriel Fahrenheit developed the Fahrenheit scale. He also created highly accurate mercury thermometers that improved temperature measurement significantly.
</p>

<p>
  Fahrenheit's work established one of the earliest widely adopted temperature systems.
</p>

<h4>Anders Celsius</h4>

<p>
  Swedish astronomer Anders Celsius introduced the Celsius scale in 1742. His scale was eventually standardized so that water freezes at 0°C and boils at 100°C.
</p>

<p>
  The simplicity of the Celsius scale made it ideal for scientific and everyday use.
</p>

<h4>Lord Kelvin</h4>

<p>
  During the 19th century, physicist William Thomson, later known as Lord Kelvin, developed the Kelvin temperature scale.
</p>

<p>
  His work was based on thermodynamics and the concept of absolute zero. The Kelvin scale became essential for modern physics, chemistry, and engineering.
</p>

<h3>Common Applications of Temperature Conversion</h3>

<p>
  Temperature conversion is important across numerous industries and everyday activities. Different regions, professions, and scientific disciplines often use different temperature scales, making conversion tools essential.
</p>

<h4>Cooking and Baking</h4>

<p>
  One of the most common reasons people convert temperatures is cooking. Recipes from different countries often use different temperature scales.
</p>

<p>
  For example:
</p>

<ul>
  <li>180°C ≈ 356°F.</li>
  <li>200°C ≈ 392°F.</li>
  <li>220°C ≈ 428°F.</li>
</ul>

<p>
  Accurate oven temperature conversion helps ensure consistent cooking results and prevents undercooking or overcooking food.
</p>

<h4>Weather Forecasting</h4>

<p>
  Weather reports use different temperature scales depending on the country. Travelers frequently need to convert temperatures when interpreting forecasts abroad.
</p>

<p>
  Examples:
</p>

<ul>
  <li>0°C = 32°F.</li>
  <li>20°C = 68°F.</li>
  <li>30°C = 86°F.</li>
  <li>40°C = 104°F.</li>
</ul>

<p>
  Understanding these conversions makes it easier to prepare for local weather conditions.
</p>

<h4>Medical Applications</h4>

<p>
  Healthcare professionals often work with body temperature measurements. Depending on the region and equipment used, temperatures may be displayed in Celsius or Fahrenheit.
</p>

<p>
  Common examples include:
</p>

<ul>
  <li>Normal body temperature: approximately 37°C (98.6°F).</li>
  <li>Mild fever: approximately 38°C (100.4°F).</li>
  <li>High fever: above 39°C (102.2°F).</li>
</ul>

<p>
  Quick conversion helps healthcare providers communicate temperature information clearly across different systems.
</p>

<h4>Scientific Research</h4>

<p>
  Scientists frequently convert between Celsius and Kelvin during experiments and data analysis.
</p>

<p>
  Many scientific formulas require temperatures expressed in Kelvin because it is an absolute temperature scale.
</p>

<p>
  Research fields using temperature conversions include:
</p>

<ul>
  <li>Physics.</li>
  <li>Chemistry.</li>
  <li>Biology.</li>
  <li>Astronomy.</li>
  <li>Environmental science.</li>
</ul>

<h4>Engineering and Manufacturing</h4>

<p>
  Engineers often monitor and control temperatures during manufacturing processes, equipment testing, and industrial operations.
</p>

<p>
  Examples include:
</p>

<ul>
  <li>Metal processing.</li>
  <li>Semiconductor production.</li>
  <li>Automotive engineering.</li>
  <li>Power generation.</li>
  <li>HVAC system design.</li>
</ul>

<p>
  Accurate temperature conversion ensures equipment operates safely and efficiently.
</p>

<h4>Environmental Monitoring</h4>

<p>
  Environmental scientists use temperature measurements to study climate, weather patterns, ecosystems, and global environmental changes.
</p>

<p>
  Because research may involve data from multiple countries, temperature conversion helps standardize measurements for analysis and reporting.
</p>

<h3>Understanding Absolute Zero</h3>

<p>
  Absolute zero is one of the most important concepts in temperature science. It represents the theoretical point at which particles possess their minimum possible thermal energy.
</p>

<p>
  Absolute zero corresponds to:
</p>

<ul>
  <li>0 Kelvin.</li>
  <li>-273.15°C.</li>
  <li>-459.67°F.</li>
</ul>

<p>
  Scientists have never reached absolute zero exactly, but modern technology allows temperatures to come extremely close.
</p>

<p>
  Research involving ultra-cold temperatures has led to important discoveries in quantum physics, superconductivity, and materials science.
</p>

<h3>Interesting Temperature Facts</h3>

<p>
  Temperature plays a fascinating role throughout the universe. Here are a few interesting examples:
</p>

<ul>
  <li>The surface of the Sun is approximately 5,500°C.</li>
  <li>Lightning can reach temperatures above 30,000°C.</li>
  <li>Liquid nitrogen boils at approximately -196°C.</li>
  <li>Liquid helium boils at approximately -269°C.</li>
  <li>The coldest naturally recorded temperature on Earth was below -89°C.</li>
  <li>Some industrial furnaces operate above 1,500°C.</li>
</ul>

<p>
  These examples demonstrate the enormous range of temperatures encountered in nature, science, and technology.
</p>

<h3>Temperature Conversion Formulas</h3>

<p>
  Understanding the formulas behind temperature conversion can help students, teachers, and professionals gain a deeper appreciation of how different temperature scales relate to one another. While our converter performs these calculations automatically, knowing the underlying equations can be useful for educational and scientific purposes.
</p>

<h4>Celsius to Fahrenheit</h4>

<p>
  To convert a temperature from Celsius to Fahrenheit, multiply the Celsius value by 9/5 and then add 32.
</p>

<p>
  Formula:
</p>

<ul>
  <li>°F = (°C × 9/5) + 32</li>
</ul>

<p>
  Example:
</p>

<ul>
  <li>25°C = (25 × 9/5) + 32 = 77°F</li>
</ul>

<h4>Fahrenheit to Celsius</h4>

<p>
  To convert Fahrenheit to Celsius, subtract 32 from the Fahrenheit value and multiply the result by 5/9.
</p>

<ul>
  <li>°C = (°F − 32) × 5/9</li>
</ul>

<p>
  Example:
</p>

<ul>
  <li>77°F = (77 − 32) × 5/9 = 25°C</li>
</ul>

<h4>Celsius to Kelvin</h4>

<p>
  Kelvin and Celsius use the same size increments. The only difference is the starting point of the scale.
</p>

<ul>
  <li>K = °C + 273.15</li>
</ul>

<p>
  Example:
</p>

<ul>
  <li>25°C = 298.15 K</li>
</ul>

<h4>Kelvin to Celsius</h4>

<ul>
  <li>°C = K − 273.15</li>
</ul>

<p>
  Example:
</p>

<ul>
  <li>298.15 K = 25°C</li>
</ul>

<h4>Fahrenheit to Kelvin</h4>

<ul>
  <li>K = (°F − 32) × 5/9 + 273.15</li>
</ul>

<h4>Kelvin to Fahrenheit</h4>

<ul>
  <li>°F = (K − 273.15) × 9/5 + 32</li>
</ul>

<p>
  Although these formulas are straightforward, using an online converter eliminates calculation errors and saves time, especially when working with multiple values.
</p>

<h3>Celsius vs Fahrenheit vs Kelvin</h3>

<p>
  Each temperature scale has unique advantages and applications. Understanding their differences helps users choose the most appropriate scale for a particular task.
</p>

<table>
  <tr>
    <th>Scale</th>
    <th>Main Use</th>
    <th>Water Freezes</th>
    <th>Water Boils</th>
  </tr>
  <tr>
    <td>Celsius</td>
    <td>Everyday use, education, weather</td>
    <td>0°C</td>
    <td>100°C</td>
  </tr>
  <tr>
    <td>Fahrenheit</td>
    <td>Weather and daily use in the USA</td>
    <td>32°F</td>
    <td>212°F</td>
  </tr>
  <tr>
    <td>Kelvin</td>
    <td>Science and engineering</td>
    <td>273.15 K</td>
    <td>373.15 K</td>
  </tr>
</table>

<p>
  Celsius is ideal for everyday measurements because its freezing and boiling points are easy to remember. Fahrenheit provides finer temperature intervals for weather reporting. Kelvin is indispensable in science because it starts at absolute zero and avoids negative values in many calculations.
</p>

<h3>Quick Reference Temperature Conversion Table</h3>

<p>
  The following reference values are commonly used in daily life and professional applications.
</p>

<table>
  <tr>
    <th>Celsius</th>
    <th>Fahrenheit</th>
    <th>Kelvin</th>
  </tr>
  <tr>
    <td>-40°C</td>
    <td>-40°F</td>
    <td>233.15 K</td>
  </tr>
  <tr>
    <td>0°C</td>
    <td>32°F</td>
    <td>273.15 K</td>
  </tr>
  <tr>
    <td>20°C</td>
    <td>68°F</td>
    <td>293.15 K</td>
  </tr>
  <tr>
    <td>37°C</td>
    <td>98.6°F</td>
    <td>310.15 K</td>
  </tr>
  <tr>
    <td>100°C</td>
    <td>212°F</td>
    <td>373.15 K</td>
  </tr>
</table>

<p>
  Keeping these common reference points in mind can make temperature comparisons easier in everyday situations.
</p>

<h3>Advanced Frequently Asked Questions</h3>

<p>
  <strong>Why do scientists prefer Kelvin?</strong><br>
  Kelvin begins at absolute zero and avoids negative temperature values in many scientific calculations. This makes equations involving gases, thermodynamics, and energy transfer simpler and more accurate.
</p>

<p>
  <strong>Why does Fahrenheit have unusual numbers like 32 and 212?</strong><br>
  The Fahrenheit scale was developed using reference points chosen by Daniel Gabriel Fahrenheit. These historical choices resulted in water freezing at 32°F and boiling at 212°F.
</p>

<p>
  <strong>What happens at absolute zero?</strong><br>
  At absolute zero, particles possess the minimum possible thermal energy. While absolute zero cannot be reached exactly, scientists have achieved temperatures extremely close to it in laboratory environments.
</p>

<p>
  <strong>Why are Kelvin temperatures never written with a degree symbol?</strong><br>
  Kelvin is defined as an SI base unit rather than a degree-based scale. Therefore, temperatures are written as "300 K" instead of "300°K."
</p>

<p>
  <strong>Can temperatures go below absolute zero?</strong><br>
  Under conventional physics, absolute zero represents the lowest possible thermodynamic temperature. Temperatures below absolute zero are not possible in the traditional sense.
</p>

<p>
  <strong>What temperature scale should I use for cooking?</strong><br>
  Use the scale supported by your oven. If your recipe uses a different scale, our converter can quickly provide the correct equivalent temperature.
</p>

<h3>Best Practices for Temperature Measurement</h3>

<p>
  Accurate temperature conversion begins with accurate temperature measurement. Even the most precise conversion formula cannot compensate for incorrect readings.
</p>

<p>
  Consider the following best practices:
</p>

<ul>
  <li>Use calibrated thermometers whenever possible.</li>
  <li>Allow instruments to stabilize before recording readings.</li>
  <li>Verify the temperature scale being used.</li>
  <li>Avoid estimating values when precision is important.</li>
  <li>Use Kelvin for scientific calculations involving thermodynamics.</li>
  <li>Double-check conversions used in technical reports.</li>
  <li>Consider environmental factors that may influence measurements.</li>
</ul>

<p>
  Following these guidelines helps ensure reliable and consistent results across different applications.
</p>

<h3>Real-World Industrial Applications</h3>

<p>
  Temperature conversion is essential across many industries where precision and safety are critical.
</p>

<h4>Food Processing</h4>

<p>
  Food manufacturers monitor temperatures throughout production, storage, transportation, and quality control processes. Converting between temperature scales helps organizations comply with international standards and regulations.
</p>

<h4>Pharmaceutical Manufacturing</h4>

<p>
  Many medications and vaccines must be stored within strict temperature ranges. Accurate conversions help ensure product quality and effectiveness throughout the supply chain.
</p>

<h4>Energy Production</h4>

<p>
  Power plants continuously monitor temperatures in turbines, boilers, cooling systems, and electrical equipment. Engineers often work with both Celsius and Kelvin measurements depending on the application.
</p>

<h4>Automotive Engineering</h4>

<p>
  Vehicle manufacturers measure engine temperatures, exhaust temperatures, battery performance, and climate-control systems using various temperature scales.
</p>

<h4>Aerospace Technology</h4>

<p>
  Aircraft and spacecraft operate across extreme temperature ranges. Engineers use precise temperature conversions when designing systems capable of functioning in challenging environments.
</p>

<h3>Educational Importance of Temperature Conversion</h3>

<p>
  Temperature conversion is one of the most fundamental concepts taught in science and mathematics education. Understanding how temperature scales relate to each other helps students build a strong foundation for more advanced topics such as thermodynamics, chemistry, meteorology, and engineering.
</p>

<p>
  By practicing conversions and exploring real-world examples, students gain a deeper understanding of measurement systems and scientific reasoning.
</p>

<h3>Conclusion</h3>

<p>
  Our <strong>Free Online Temperature Converter Tool</strong> provides a fast, accurate, and convenient solution for converting temperatures between Celsius, Fahrenheit, and Kelvin. Whether you're preparing an international recipe, analyzing scientific data, monitoring industrial equipment, studying for an exam, or simply checking a weather forecast from another country, this converter makes the process effortless.
</p>

<p>
  With instant calculations, user-friendly design, mobile compatibility, and complete privacy, the tool is suitable for students, teachers, researchers, engineers, healthcare professionals, cooks, travelers, and everyday users alike.
</p>

<p>
  Instead of memorizing formulas or performing manual calculations, let the converter handle the work for you. Save time, reduce errors, and gain confidence in every temperature conversion. Bookmark this page and use our online temperature converter whenever you need accurate and reliable temperature calculations.
</p>

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
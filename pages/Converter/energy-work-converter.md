---
layout: default
title: "Energy & Work Converter - Convert Between Different Energy Units"
permalink: /energy-work-converter-convert-between-different-energy-units/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Energy & Work Converter - Convert Between Energy Units</title>
<meta name="description"
  content="Free online energy and work conversion tool. Convert between joules, calories, BTU, watt-hours, foot-pounds, electronvolts and more energy units instantly.">
<meta name="keywords"
  content="energy converter, work converter, joule converter, calorie converter, BTU converter, watt-hour converter, foot-pound converter, electronvolt converter, energy conversion">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Energy Converter Styles */
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

  .conversion-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .conversion-group {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .conversion-group h3 {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.2rem;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 8px;
  }

  .input-group {
    margin-bottom: 15px;
  }

  .input-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #2c3e50;
  }

  .input-group input,
  .input-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
  }

  .input-group input:focus,
  .input-group select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }

  .result-section {
    margin-top: 20px;
    padding: 20px;
    background: #e8f4fd;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .result-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 8px;
    background: white;
    border-radius: 6px;
    border-left: 3px solid var(--primary);
  }

  .result-item:last-child {
    margin-bottom: 0;
  }

  .result-label {
    font-weight: 600;
    color: #2c3e50;
  }

  .result-value {
    font-weight: bold;
    color: var(--primary);
    font-family: 'Courier New', monospace;
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .converter-button {
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

  .converter-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .converter-button:active {
    transform: translateY(0);
  }

  .converter-button.success {
    background: var(--success);
  }

  .converter-button.success:hover {
    background: #218838;
  }

  .converter-button.secondary {
    background: #6c757d;
  }

  .converter-button.secondary:hover {
    background: #5a6268;
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

  .unit-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 30px 0;
  }

  .category-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-top: 4px solid var(--primary);
  }

  .category-card h3 {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.3rem;
  }

  .category-card ul {
    list-style: none;
    padding: 0;
  }

  .category-card li {
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
    color: #555;
  }

  .category-card li:last-child {
    border-bottom: none;
  }

  .examples {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .example-item {
    background: white;
    padding: 15px;
    border-radius: 6px;
    border-left: 4px solid var(--primary);
    margin: 10px 0;
    font-family: monospace;
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

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .conversion-wrapper {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .converter-button {
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

    .unit-categories {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Energy & Work Converter</h1>
  <p class="welcome-message">Convert between different energy and work units instantly. Supports joules, calories, BTU, watt-hours, foot-pounds, electronvolts and many more energy units.</p>

  <div class="converter-section">
    <h2>Energy & Work Conversion</h2>

    <div class="conversion-wrapper">
      <div class="conversion-group">
        <h3>Input Value</h3>
        <div class="input-group">
          <label for="inputValue">Energy Value</label>
          <input type="number" id="inputValue" placeholder="Enter energy value" step="any" value="1">
        </div>
        <div class="input-group">
          <label for="inputUnit">From Unit</label>
          <select id="inputUnit">
            <optgroup label="SI / Metric Units">
              <option value="joule">Joule (J)</option>
              <option value="kilojoule">Kilojoule (kJ)</option>
              <option value="megajoule">Megajoule (MJ)</option>
              <option value="gigajoule">Gigajoule (GJ)</option>
            </optgroup>
            <optgroup label="Thermal / Food Energy Units">
              <option value="calorie">Calorie (cal)</option>
              <option value="kilocalorie">Kilocalorie (kcal)</option>
              <option value="btu">British Thermal Unit (BTU)</option>
              <option value="therm">Therm (thm)</option>
            </optgroup>
            <optgroup label="Electrical Energy Units">
              <option value="watt-hour">Watt-hour (Wh)</option>
              <option value="kilowatt-hour">Kilowatt-hour (kWh)</option>
              <option value="megawatt-hour">Megawatt-hour (MWh)</option>
            </optgroup>
            <optgroup label="Mechanical / Other Units">
              <option value="foot-pound">Foot-pound (ft·lb)</option>
              <option value="inch-pound">Inch-pound (in·lb)</option>
              <option value="erg">Erg (erg)</option>
              <option value="electronvolt">Electronvolt (eV)</option>
            </optgroup>
            <optgroup label="Astronomical / Specialized Units">
              <option value="planck-energy">Planck Energy (Eₚ)</option>
              <option value="ton-tnt">Ton of TNT (tTNT)</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div class="conversion-group">
        <h3>Conversion Results</h3>
        <div class="result-section">
          <div class="result-item">
            <span class="result-label">Joule (J):</span>
            <span class="result-value" id="resultJoule">1.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">Kilojoule (kJ):</span>
            <span class="result-value" id="resultKilojoule">0.0010</span>
          </div>
          <div class="result-item">
            <span class="result-label">Calorie (cal):</span>
            <span class="result-value" id="resultCalorie">0.2390</span>
          </div>
          <div class="result-item">
            <span class="result-label">Kilocalorie (kcal):</span>
            <span class="result-value" id="resultKilocalorie">0.0002</span>
          </div>
          <div class="result-item">
            <span class="result-label">BTU:</span>
            <span class="result-value" id="resultBTU">0.0009</span>
          </div>
          <div class="result-item">
            <span class="result-label">Watt-hour (Wh):</span>
            <span class="result-value" id="resultWattHour">0.0003</span>
          </div>
          <div class="result-item">
            <span class="result-label">Foot-pound (ft·lb):</span>
            <span class="result-value" id="resultFootPound">0.7376</span>
          </div>
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="converter-button" id="convertButton">Convert</button>
      <button class="converter-button success" id="swapButton">Swap Units</button>
      <button class="converter-button" id="copyButton">Copy Results</button>
      <button class="converter-button secondary" id="resetButton">Reset</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="unit-categories">
      <div class="category-card">
        <h3>SI / Metric Units</h3>
        <ul>
          <li><strong>Joule (J)</strong> - SI unit of energy</li>
          <li><strong>Kilojoule (kJ)</strong> = 1,000 J</li>
          <li><strong>Megajoule (MJ)</strong> = 1,000,000 J</li>
          <li><strong>Gigajoule (GJ)</strong> = 1,000,000,000 J</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Thermal / Food Energy</h3>
        <ul>
          <li><strong>Calorie (cal)</strong> - Energy to heat 1g water by 1°C</li>
          <li><strong>Kilocalorie (kcal)</strong> = 1,000 cal (food calories)</li>
          <li><strong>BTU</strong> - British Thermal Unit</li>
          <li><strong>Therm (thm)</strong> = 100,000 BTU</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Electrical Energy</h3>
        <ul>
          <li><strong>Watt-hour (Wh)</strong> = 3,600 J</li>
          <li><strong>Kilowatt-hour (kWh)</strong> = 3,600,000 J</li>
          <li><strong>Megawatt-hour (MWh)</strong> = 3,600,000,000 J</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Other Energy Units</h3>
        <ul>
          <li><strong>Foot-pound (ft·lb)</strong> - Mechanical energy</li>
          <li><strong>Erg (erg)</strong> = 10⁻⁷ J (CGS unit)</li>
          <li><strong>Electronvolt (eV)</strong> = 1.602×10⁻¹⁹ J</li>
          <li><strong>Ton of TNT</strong> = 4.184×10⁹ J</li>
        </ul>
      </div>
    </div>

    <div class="examples">
      <h2>Conversion Examples</h2>

      <div class="example-item">
        <strong>1 Joule</strong> = 0.239 calories = 0.0002778 watt-hours = 0.7376 foot-pounds
      </div>

      <div class="example-item">
        <strong>1 Calorie</strong> = 4.184 joules = 0.001162 watt-hours = 3.088 foot-pounds
      </div>

      <div class="example-item">
        <strong>1 BTU</strong> = 1,055 joules = 252 calories = 0.293 watt-hours
      </div>

      <div class="example-item">
        <strong>1 Kilowatt-hour</strong> = 3,600,000 joules = 860,420 calories = 3,412 BTU
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Energy & Work Conversion Tool</h2>

    <p>Our comprehensive <strong>Energy and Work Converter</strong> is an essential tool for students, engineers, scientists, and anyone working with energy measurements. This powerful converter allows you to instantly convert between dozens of energy units including joules, calories, BTU, watt-hours, foot-pounds, electronvolts, and many more. Whether you're working on physics homework, engineering calculations, or scientific research, this tool provides accurate conversions with real-time results.</p>

    <h3>How to Use This Energy Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Value:</strong> Input the numerical energy value you want to convert in the "Energy Value" field</li>
      <li><strong>Select Source Unit:</strong> Choose the unit of your input value from the dropdown menu (e.g., joules, calories, BTU)</li>
      <li><strong>View Results:</strong> Instantly see the converted values in all major energy units in the results panel</li>
      <li><strong>Additional Actions:</strong> Use the buttons to copy results, swap units, or reset the converter for new calculations</li>
    </ul>

    <h3>Real-Life Application Examples:</h3>
    <p><strong>For Home Energy Bills:</strong> Convert your electricity usage from kilowatt-hours (what's on your bill) to joules or BTU to understand your energy consumption in different units. A typical household might use 900 kWh per month, which equals 3.24 billion joules or 3.07 million BTU.</p>

    <p><strong>For Nutrition & Diet:</strong> Convert food energy from kilocalories (what you see on nutrition labels) to joules or watt-hours. A 200-calorie snack contains 836,800 joules - enough energy to power a 60-watt light bulb for nearly 4 hours!</p>

    <p><strong>For Engineering & Physics:</strong> Convert mechanical energy from foot-pounds to joules for scientific calculations, or convert electronvolts (used in particle physics) to more familiar units like joules.</p>

    <h3>Common Energy Unit Definitions:</h3>
    <ul>
      <li><strong>Joule (J):</strong> The SI unit of energy, defined as the work done by a force of one newton moving through one meter</li>
      <li><strong>Calorie (cal):</strong> The amount of energy needed to raise the temperature of 1 gram of water by 1°C</li>
      <li><strong>British Thermal Unit (BTU):</strong> The amount of energy needed to raise the temperature of 1 pound of water by 1°F</li>
      <li><strong>Watt-hour (Wh):</strong> The amount of energy equivalent to one watt of power expended for one hour</li>
      <li><strong>Foot-pound (ft·lb):</strong> The amount of work done by a force of one pound acting through one foot</li>
      <li><strong>Electronvolt (eV):</strong> The amount of kinetic energy gained by a single electron accelerating through one volt of electric potential difference</li>
    </ul>

    <h3>Who Should Use This Energy Converter?</h3>
    <ul>
      <li><strong>Students & Educators:</strong> Perfect for physics, engineering, and chemistry classes dealing with energy conversions</li>
      <li><strong>Engineers & Technicians:</strong> Essential for mechanical, electrical, and energy engineering calculations</li>
      <li><strong>Scientists & Researchers:</strong> Useful across physics, chemistry, biology, and environmental sciences</li>
      <li><strong>Nutritionists & Dietitians:</strong> Convert between food energy units (calories) and other energy measurements</li>
      <li><strong>Homeowners & Energy Auditors:</strong> Understand energy consumption across different measurement systems</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What's the difference between energy and work?</strong><br>
      In physics, work is the transfer of energy, so both are measured using the same units. When work is done on an object, energy is transferred to that object.</p>

    <p><strong>How accurate are the conversions?</strong><br>
      Our converter uses precise conversion factors with high precision calculations. For most scientific and engineering purposes, the accuracy is more than sufficient.</p>

    <p><strong>Can I convert very large or very small energy values?</strong><br>
      Yes, the converter handles values from extremely small (electronvolts) to extremely large (gigajoules, tons of TNT) with equal precision.</p>

    <p><strong>Is this tool free to use?</strong><br>
      Yes, this is a completely free online tool with no registration required and no usage limits.</p>

    <p><strong>Does the converter work on mobile devices?</strong><br>
      Absolutely! The converter is fully responsive and works perfectly on smartphones, tablets, and desktop computers.</p>

    <h3>Energy Conversion Factors Reference:</h3>
    <p>For quick reference, here are some key conversion factors:</p>
    <ul>
      <li>1 joule = 0.239 calories = 0.0009478 BTU = 0.0002778 watt-hours</li>
      <li>1 calorie = 4.184 joules = 0.003965 BTU = 0.001162 watt-hours</li>
      <li>1 BTU = 1,055 joules = 252 calories = 0.293 watt-hours</li>
      <li>1 kilowatt-hour = 3,600,000 joules = 860,420 calories = 3,412 BTU</li>
      <li>1 foot-pound = 1.356 joules = 0.324 calories = 0.001285 BTU</li>
      <li>1 electronvolt = 1.602 × 10⁻¹⁹ joules</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const inputValue = document.getElementById('inputValue');
    const inputUnit = document.getElementById('inputUnit');
    const convertButton = document.getElementById('convertButton');
    const swapButton = document.getElementById('swapButton');
    const copyButton = document.getElementById('copyButton');
    const resetButton = document.getElementById('resetButton');
    const alertContainer = document.getElementById('alertContainer');

    // Result elements
    const resultJoule = document.getElementById('resultJoule');
    const resultKilojoule = document.getElementById('resultKilojoule');
    const resultCalorie = document.getElementById('resultCalorie');
    const resultKilocalorie = document.getElementById('resultKilocalorie');
    const resultBTU = document.getElementById('resultBTU');
    const resultWattHour = document.getElementById('resultWattHour');
    const resultFootPound = document.getElementById('resultFootPound');

    // Conversion factors (to joules)
    const conversionFactors = {
      // SI / Metric Units
      'joule': 1,
      'kilojoule': 1000,
      'megajoule': 1000000,
      'gigajoule': 1000000000,
      
      // Thermal / Food Energy Units
      'calorie': 4.184,
      'kilocalorie': 4184,
      'btu': 1055.06,
      'therm': 105506000,
      
      // Electrical Energy Units
      'watt-hour': 3600,
      'kilowatt-hour': 3600000,
      'megawatt-hour': 3600000000,
      
      // Mechanical / Other Units
      'foot-pound': 1.35582,
      'inch-pound': 0.112985,
      'erg': 0.0000001,
      'electronvolt': 1.602176634e-19,
      
      // Astronomical / Specialized Units
      'planck-energy': 1.956e9,
      'ton-tnt': 4184000000
    };

    // Initialize with default conversion
    convertEnergy();

    // Event listeners
    convertButton.addEventListener('click', convertEnergy);
    inputValue.addEventListener('input', convertEnergy);
    inputUnit.addEventListener('change', convertEnergy);
    
    swapButton.addEventListener('click', function() {
      showAlert('Use the unit selector to choose different conversion units', 'info');
    });
    
    copyButton.addEventListener('click', copyResults);
    resetButton.addEventListener('click', resetConverter);

    function convertEnergy() {
      const value = parseFloat(inputValue.value) || 0;
      const fromUnit = inputUnit.value;
      
      // Convert to joules first
      const joules = value * conversionFactors[fromUnit];
      
      // Convert to all other units
      resultJoule.textContent = formatNumber(joules / conversionFactors['joule']);
      resultKilojoule.textContent = formatNumber(joules / conversionFactors['kilojoule']);
      resultCalorie.textContent = formatNumber(joules / conversionFactors['calorie']);
      resultKilocalorie.textContent = formatNumber(joules / conversionFactors['kilocalorie']);
      resultBTU.textContent = formatNumber(joules / conversionFactors['btu']);
      resultWattHour.textContent = formatNumber(joules / conversionFactors['watt-hour']);
      resultFootPound.textContent = formatNumber(joules / conversionFactors['foot-pound']);
    }

    function formatNumber(num) {
      if (num === 0) return '0.0000';
      
      if (Math.abs(num) < 0.0001) {
        return num.toExponential(4);
      } else if (Math.abs(num) < 1) {
        return num.toFixed(6).replace(/\.?0+$/, '');
      } else if (Math.abs(num) < 1000) {
        return num.toFixed(4).replace(/\.?0+$/, '');
      } else if (Math.abs(num) < 1000000) {
        return num.toFixed(2).replace(/\.?0+$/, '');
      } else {
        return num.toExponential(4);
      }
    }

    function copyResults() {
      const results = `Energy Conversion Results:
Input: ${inputValue.value} ${getUnitName(inputUnit.value)}
Joule: ${resultJoule.textContent} J
Kilojoule: ${resultKilojoule.textContent} kJ
Calorie: ${resultCalorie.textContent} cal
Kilocalorie: ${resultKilocalorie.textContent} kcal
BTU: ${resultBTU.textContent} BTU
Watt-hour: ${resultWattHour.textContent} Wh
Foot-pound: ${resultFootPound.textContent} ft·lb`;

      navigator.clipboard.writeText(results).then(() => {
        showAlert('Conversion results copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy results: ' + err, 'error');
      });
    }

    function resetConverter() {
      inputValue.value = '1';
      inputUnit.selectedIndex = 0;
      convertEnergy();
      showAlert('Converter has been reset', 'success');
    }

    function getUnitName(unitValue) {
      const unitNames = {
        'joule': 'Joule (J)',
        'kilojoule': 'Kilojoule (kJ)',
        'megajoule': 'Megajoule (MJ)',
        'gigajoule': 'Gigajoule (GJ)',
        'calorie': 'Calorie (cal)',
        'kilocalorie': 'Kilocalorie (kcal)',
        'btu': 'BTU',
        'therm': 'Therm (thm)',
        'watt-hour': 'Watt-hour (Wh)',
        'kilowatt-hour': 'Kilowatt-hour (kWh)',
        'megawatt-hour': 'Megawatt-hour (MWh)',
        'foot-pound': 'Foot-pound (ft·lb)',
        'inch-pound': 'Inch-pound (in·lb)',
        'erg': 'Erg (erg)',
        'electronvolt': 'Electronvolt (eV)',
        'planck-energy': 'Planck Energy (Eₚ)',
        'ton-tnt': 'Ton of TNT (tTNT)'
      };
      return unitNames[unitValue] || unitValue;
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
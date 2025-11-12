---
layout: default
title: "Viscosity Converter - Convert Between Viscosity Units"
permalink: /viscosity-converter-convert-between-viscosity-units/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Viscosity Converter - Convert Between Viscosity Units</title>
<meta name="description"
  content="Free online viscosity conversion tool. Convert between Pa·s, cP, St, cSt, reyn and more viscosity units instantly for fluids and lubricants.">
<meta name="keywords"
  content="viscosity converter, dynamic viscosity, kinematic viscosity, centipoise converter, centistokes converter, pascal-second converter, poise converter, reyn converter">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Viscosity Converter Styles */
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
  <h1>Free Online Viscosity Converter</h1>
  <p class="welcome-message">Convert between different viscosity units instantly. Supports dynamic viscosity (Pa·s, cP), kinematic viscosity (St, cSt), and industrial units (reyn) for fluids and lubricants.</p>

  <div class="converter-section">
    <h2>Viscosity Conversion</h2>

    <div class="conversion-wrapper">
      <div class="conversion-group">
        <h3>Input Value</h3>
        <div class="input-group">
          <label for="inputValue">Viscosity Value</label>
          <input type="number" id="inputValue" placeholder="Enter viscosity value" step="any" value="1">
        </div>
        <div class="input-group">
          <label for="inputUnit">From Unit</label>
          <select id="inputUnit">
            <optgroup label="Dynamic / Absolute Viscosity">
              <option value="pascalSecond">Pascal-second (Pa·s)</option>
              <option value="millipascalSecond">Millipascal-second (mPa·s)</option>
              <option value="poise">Poise (P)</option>
              <option value="centipoise" selected>Centipoise (cP)</option>
            </optgroup>
            <optgroup label="Kinematic Viscosity">
              <option value="squareMeterSecond">Square meter per second (m²/s)</option>
              <option value="stokes">Stokes (St)</option>
              <option value="centistokes">Centistokes (cSt)</option>
            </optgroup>
            <optgroup label="Other / Industrial Units">
              <option value="poundForceSecondSqFt">Pound-force second per square foot (lb·ft⁻¹·s)</option>
              <option value="poundForceSecondSqIn">Pound-force second per square inch (lb·in⁻¹·s)</option>
              <option value="reyn">Reyn (Reyn)</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div class="conversion-group">
        <h3>Conversion Results</h3>
        <div class="result-section">
          <div class="result-item">
            <span class="result-label">Centipoise (cP):</span>
            <span class="result-value" id="resultCentipoise">1.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">Pascal-second (Pa·s):</span>
            <span class="result-value" id="resultPascalSecond">0.0010</span>
          </div>
          <div class="result-item">
            <span class="result-label">Poise (P):</span>
            <span class="result-value" id="resultPoise">0.0100</span>
          </div>
          <div class="result-item">
            <span class="result-label">Centistokes (cSt):</span>
            <span class="result-value" id="resultCentistokes">1.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">Stokes (St):</span>
            <span class="result-value" id="resultStokes">0.0100</span>
          </div>
          <div class="result-item">
            <span class="result-label">Reyn:</span>
            <span class="result-value" id="resultReyn">0.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">lb·ft⁻¹·s:</span>
            <span class="result-value" id="resultLbFtS">0.0000</span>
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
        <h3>Dynamic Viscosity</h3>
        <ul>
          <li><strong>Pascal-second (Pa·s)</strong> - SI unit</li>
          <li><strong>Centipoise (cP)</strong> - Most common unit</li>
          <li><strong>Poise (P)</strong> - CGS unit</li>
          <li>Measures resistance to flow</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Kinematic Viscosity</h3>
        <ul>
          <li><strong>Stokes (St)</strong> - CGS unit</li>
          <li><strong>Centistokes (cSt)</strong> - Most common</li>
          <li><strong>m²/s</strong> - SI unit</li>
          <li>Dynamic viscosity ÷ density</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Industrial Units</h3>
        <ul>
          <li><strong>Reyn</strong> - Imperial unit</li>
          <li><strong>lb·ft⁻¹·s</strong> - Pound-second per foot</li>
          <li><strong>lb·in⁻¹·s</strong> - Pound-second per inch</li>
          <li>Used in lubrication engineering</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Common Viscosity Values</h3>
        <ul>
          <li><strong>Water (20°C):</strong> 1.0 cP</li>
          <li><strong>Olive Oil:</strong> 80-100 cP</li>
          <li><strong>Honey:</strong> 2,000-10,000 cP</li>
          <li><strong>Motor Oil (SAE 30):</strong> 200-300 cP</li>
        </ul>
      </div>
    </div>

    <div class="examples">
      <h2>Conversion Examples</h2>

      <div class="example-item">
        <strong>1 Centipoise</strong> = 0.001 Pa·s = 0.01 Poise = 1 mPa·s = 0.000001 Reyn
      </div>

      <div class="example-item">
        <strong>1 Pascal-second</strong> = 1,000 centipoise = 10 Poise = 0.000145 Reyn
      </div>

      <div class="example-item">
        <strong>1 Stokes</strong> = 100 centistokes = 0.0001 m²/s
      </div>

      <div class="example-item">
        <strong>1 Reyn</strong> = 68,950 Poise = 6,895,000 centipoise
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Viscosity Conversion Tool</h2>

    <p>Our comprehensive <strong>Viscosity Converter</strong> is an essential tool for engineers, chemists, lubricant specialists, and anyone working with fluid dynamics. This powerful converter allows you to instantly convert between dozens of viscosity units including pascal-seconds, centipoise, stokes, centistokes, reyn, and many more. Whether you're designing hydraulic systems, formulating lubricants, analyzing fluid flow, or working in petroleum engineering, this tool provides accurate conversions with real-time results.</p>

    <h3>How to Use This Viscosity Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Value:</strong> Input the numerical viscosity value you want to convert in the "Viscosity Value" field</li>
      <li><strong>Select Source Unit:</strong> Choose the unit of your input value from the dropdown menu (e.g., centipoise, Pa·s, cSt)</li>
      <li><strong>View Results:</strong> Instantly see the converted values in all major viscosity units in the results panel</li>
      <li><strong>Additional Actions:</strong> Use the buttons to copy results, swap units, or reset the converter for new calculations</li>
    </ul>

    <h3>Real-Life Application Examples:</h3>
    <p><strong>For Lubricant Engineering:</strong> Convert between different viscosity units when specifying lubricant grades. SAE 30 motor oil has a viscosity of approximately 200-300 centipoise at 40°C, which equals 0.2-0.3 Pa·s or about 0.000003-0.000004 reyn.</p>

    <p><strong>For Chemical Processing:</strong> Convert viscosity measurements when working with different fluid systems. A polymer solution with viscosity of 5,000 cP equals 5 Pa·s, helping engineers design appropriate pumping and mixing equipment.</p>

    <p><strong>For Petroleum Industry:</strong> Convert between kinematic and dynamic viscosity units for crude oil characterization. Crude oil with kinematic viscosity of 15 cSt and density 0.85 g/cm³ has dynamic viscosity of 12.75 cP.</p>

    <p><strong>For Quality Control:</strong> Convert viscosity measurements between different standards and testing methods used in various industries and geographical regions.</p>

    <h3>Common Viscosity Unit Definitions:</h3>
    <ul>
      <li><strong>Pascal-second (Pa·s):</strong> SI unit of dynamic viscosity - force per unit area required to maintain unit velocity gradient</li>
      <li><strong>Centipoise (cP):</strong> Most commonly used unit of dynamic viscosity - 1 cP = 0.001 Pa·s</li>
      <li><strong>Poise (P):</strong> CGS unit of dynamic viscosity - named after Jean Léonard Marie Poiseuille</li>
      <li><strong>Stokes (St):</strong> CGS unit of kinematic viscosity - dynamic viscosity divided by density</li>
      <li><strong>Centistokes (cSt):</strong> Most commonly used unit of kinematic viscosity - 1 cSt = 0.01 St</li>
      <li><strong>Reyn:</strong> Imperial unit of dynamic viscosity - named after Osbourne Reynolds, used in lubrication engineering</li>
      <li><strong>lb·ft⁻¹·s:</strong> Imperial unit of dynamic viscosity - pound-force second per square foot</li>
    </ul>

    <h3>Who Should Use This Viscosity Converter?</h3>
    <ul>
      <li><strong>Mechanical Engineers:</strong> Essential for designing hydraulic systems, bearings, and lubrication systems</li>
      <li><strong>Chemical Engineers:</strong> Perfect for process design, fluid dynamics, and material characterization</li>
      <li><strong>Lubricant Specialists:</strong> Ideal for formulating and testing oils, greases, and synthetic lubricants</li>
      <li><strong>Petroleum Engineers:</strong> Useful for crude oil characterization and pipeline design</li>
      <li><strong>Quality Control Technicians:</strong> Valuable for verifying product specifications across different measurement systems</li>
      <li><strong>Students & Educators:</strong> Great for engineering, chemistry, and physics courses dealing with fluid mechanics</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What's the difference between dynamic and kinematic viscosity?</strong><br>
      Dynamic viscosity measures a fluid's resistance to flow (internal friction), while kinematic viscosity is dynamic viscosity divided by density. Kinematic viscosity accounts for both the fluid's resistance to flow and its density.</p>

    <p><strong>How do I convert between dynamic and kinematic viscosity?</strong><br>
      Kinematic viscosity = Dynamic viscosity ÷ Density. You need to know the fluid's density to convert between these two types of viscosity measurements.</p>

    <p><strong>Why are centipoise and centistokes so commonly used?</strong><br>
      Centipoise and centistokes provide convenient numerical values for most practical applications. Water has viscosity of approximately 1 cP at 20°C, making it easy to compare other fluids relative to water.</p>

    <p><strong>How accurate are the conversions?</strong><br>
      Our converter uses precise conversion factors based on international standards. For most engineering and scientific purposes, the accuracy is more than sufficient.</p>

    <p><strong>Can I convert viscosity at different temperatures?</strong><br>
      This converter handles unit conversions only. Viscosity is highly temperature-dependent, so temperature-specific conversions require additional calculations based on the fluid's viscosity-temperature relationship.</p>

    <h3>Viscosity Conversion Factors Reference:</h3>
    <p>For quick reference, here are some key conversion factors:</p>
    <ul>
      <li>1 Pa·s = 1,000 cP = 10 P = 0.0209 lb·ft⁻¹·s</li>
      <li>1 cP = 0.001 Pa·s = 0.01 P = 0.000000145 Reyn</li>
      <li>1 P = 100 cP = 0.1 Pa·s = 0.00209 lb·ft⁻¹·s</li>
      <li>1 St = 100 cSt = 0.0001 m²/s</li>
      <li>1 cSt = 0.01 St = 0.000001 m²/s</li>
      <li>1 Reyn = 68,950 P = 6,895,000 cP</li>
      <li>1 lb·ft⁻¹·s = 47,880 cP = 478.8 P</li>
    </ul>

    <h3>Typical Viscosity Values by Fluid Type:</h3>
    <ul>
      <li><strong>Air (20°C):</strong> 0.018 cP</li>
      <li><strong>Water (20°C):</strong> 1.0 cP</li>
      <li><strong>Blood (37°C):</strong> 3-4 cP</li>
      <li><strong>Olive Oil (20°C):</strong> 80-100 cP</li>
      <li><strong>SAE 10W Motor Oil (20°C):</strong> 100-200 cP</li>
      <li><strong>SAE 30 Motor Oil (20°C):</strong> 200-300 cP</li>
      <li><strong>Honey (20°C):</strong> 2,000-10,000 cP</li>
      <li><strong>Ketchup:</strong> 50,000-100,000 cP</li>
      <li><strong>Peanut Butter:</strong> 150,000-250,000 cP</li>
    </ul>

    <h3>Viscosity Classification Systems:</h3>
    <ul>
      <li><strong>SAE J300:</strong> Engine oil viscosity classification (e.g., SAE 5W-30)</li>
      <li><strong>SAE J306:</strong> Gear oil viscosity classification</li>
      <li><strong>ISO 3448:</strong> Industrial oil viscosity classification</li>
      <li><strong>ASTM D445:</strong> Standard test method for kinematic viscosity</li>
      <li>These systems help standardize viscosity measurements across different applications and industries</li>
    </ul>

    <h3>Temperature Effects on Viscosity:</h3>
    <ul>
      <li>Viscosity decreases as temperature increases for most liquids</li>
      <li>Viscosity increases as temperature increases for most gases</li>
      <li>The relationship is often described by the Arrhenius equation or Vogel-Fulcher-Tammann equation</li>
      <li>Viscosity index (VI) measures how much viscosity changes with temperature</li>
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
    const resultCentipoise = document.getElementById('resultCentipoise');
    const resultPascalSecond = document.getElementById('resultPascalSecond');
    const resultPoise = document.getElementById('resultPoise');
    const resultCentistokes = document.getElementById('resultCentistokes');
    const resultStokes = document.getElementById('resultStokes');
    const resultReyn = document.getElementById('resultReyn');
    const resultLbFtS = document.getElementById('resultLbFtS');

    // Initialize with default conversion
    convertViscosity();

    // Event listeners
    convertButton.addEventListener('click', convertViscosity);
    inputValue.addEventListener('input', convertViscosity);
    inputUnit.addEventListener('change', convertViscosity);
    
    swapButton.addEventListener('click', function() {
      showAlert('Use the unit selector to choose different conversion units', 'info');
    });
    
    copyButton.addEventListener('click', copyResults);
    resetButton.addEventListener('click', resetConverter);

    function convertViscosity() {
      const value = parseFloat(inputValue.value) || 0;
      const fromUnit = inputUnit.value;
      
      // Convert to centipoise first (as base unit)
      let centipoise;
      
      switch (fromUnit) {
        // Dynamic / Absolute Viscosity
        case 'pascalSecond':
          centipoise = value * 1000;
          break;
        case 'millipascalSecond':
          centipoise = value;
          break;
        case 'poise':
          centipoise = value * 100;
          break;
        case 'centipoise':
          centipoise = value;
          break;
        
        // Kinematic Viscosity
        case 'squareMeterSecond':
          // Assuming water density for conversion (1000 kg/m³)
          centipoise = value * 1000000;
          break;
        case 'stokes':
          // Assuming water density for conversion
          centipoise = value * 100;
          break;
        case 'centistokes':
          // Assuming water density for conversion
          centipoise = value;
          break;
        
        // Other / Industrial Units
        case 'poundForceSecondSqFt':
          centipoise = value * 47880.26;
          break;
        case 'poundForceSecondSqIn':
          centipoise = value * 6894757;
          break;
        case 'reyn':
          centipoise = value * 6894757;
          break;
        
        default:
          centipoise = value;
      }
      
      // Convert to all other units from centipoise
      resultCentipoise.textContent = formatNumber(centipoise);
      resultPascalSecond.textContent = formatNumber(centipoise / 1000);
      resultPoise.textContent = formatNumber(centipoise / 100);
      resultCentistokes.textContent = formatNumber(centipoise); // Assuming water density
      resultStokes.textContent = formatNumber(centipoise / 100); // Assuming water density
      resultReyn.textContent = formatNumber(centipoise / 6894757);
      resultLbFtS.textContent = formatNumber(centipoise / 47880.26);
    }

    function formatNumber(num) {
      if (num === 0) return '0.0000';
      if (!isFinite(num)) return '∞';
      
      if (Math.abs(num) < 0.0001) {
        return num.toExponential(6);
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
      const results = `Viscosity Conversion Results:
Input: ${inputValue.value} ${getUnitName(inputUnit.value)}
Centipoise: ${resultCentipoise.textContent} cP
Pascal-second: ${resultPascalSecond.textContent} Pa·s
Poise: ${resultPoise.textContent} P
Centistokes: ${resultCentistokes.textContent} cSt
Stokes: ${resultStokes.textContent} St
Reyn: ${resultReyn.textContent} reyn
lb·ft⁻¹·s: ${resultLbFtS.textContent} lb·ft⁻¹·s`;

      navigator.clipboard.writeText(results).then(() => {
        showAlert('Conversion results copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy results: ' + err, 'error');
      });
    }

    function resetConverter() {
      inputValue.value = '1';
      inputUnit.selectedIndex = 3; // Centipoise
      convertViscosity();
      showAlert('Converter has been reset', 'success');
    }

    function getUnitName(unitValue) {
      const unitNames = {
        'pascalSecond': 'Pascal-second (Pa·s)',
        'millipascalSecond': 'Millipascal-second (mPa·s)',
        'poise': 'Poise (P)',
        'centipoise': 'Centipoise (cP)',
        'squareMeterSecond': 'Square meter per second (m²/s)',
        'stokes': 'Stokes (St)',
        'centistokes': 'Centistokes (cSt)',
        'poundForceSecondSqFt': 'Pound-force second per square foot (lb·ft⁻¹·s)',
        'poundForceSecondSqIn': 'Pound-force second per square inch (lb·in⁻¹·s)',
        'reyn': 'Reyn (Reyn)'
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
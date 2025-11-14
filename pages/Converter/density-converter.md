---
layout: default
title: "Density Converter - Convert kg/m³, g/cm³, lb/ft³, Specific Gravity & More"
permalink: /density-converter-convert-kgm-gcm-lbft-specific-gravity-more/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Density Converter - Convert kg/m³, g/cm³, lb/ft³, Specific Gravity & More</title>
<meta name="description"
  content="Free online density converter tool. Convert between kg/m³, g/cm³, g/mL, lb/ft³, lb/in³, specific gravity, API gravity, and more density units instantly.">
<meta name="keywords"
  content="density converter, kg m3 to g cm3, specific gravity converter, lb ft3 converter, density calculator, unit converter, physics calculator, engineering converter">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Density Converter Styles */
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

  .converter-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin: 30px 0;
  }

  .converter-card {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-top: 4px solid var(--primary);
  }

  .converter-card h3 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.3rem;
    text-align: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }

  .input-group {
    margin-bottom: 20px;
  }

  .input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #2c3e50;
  }

  .input-group input,
  .input-group select {
    width: 100%;
    padding: 12px 15px;
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

  .result-section {
    margin-top: 25px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #27ae60;
  }

  .result-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #e0e0e0;
  }

  .result-item:last-child {
    border-bottom: none;
  }

  .result-item span:first-child {
    font-weight: 600;
    color: #2c3e50;
  }

  .result-item span:last-child {
    font-weight: bold;
    color: var(--primary);
    font-family: 'Courier New', monospace;
  }

  .unit-info {
    margin-top: 25px;
    padding: 20px;
    background: #fff3cd;
    border-radius: 8px;
    border-left: 4px solid #ffc107;
  }

  .unit-info h4 {
    color: #856404;
    margin-bottom: 10px;
  }

  .unit-info p {
    color: #856404;
    margin-bottom: 8px;
    line-height: 1.6;
  }

  .reference-section {
    margin-top: 25px;
    padding: 20px;
    background: #e8f4fd;
    border-radius: 8px;
    border-left: 4px solid #3498db;
  }

  .reference-section h4 {
    color: #2c3e50;
    margin-bottom: 15px;
  }

  .reference-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #d1ecf1;
  }

  .reference-item:last-child {
    border-bottom: none;
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

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .converter-grid {
      grid-template-columns: 1fr;
      gap: 20px;
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
  }
</style>

<div class="converter-container">
  <h1>Free Online Density Converter</h1>
  <p class="welcome-message">Convert between different density units instantly. Convert kg/m³, g/cm³, g/mL, lb/ft³, lb/in³, specific gravity, API gravity, and more density units with precision.</p>

  <div class="converter-section">
    <h2>Density Converter</h2>

    <div class="converter-grid">
      <!-- SI / Metric Units Converter -->
      <div class="converter-card">
        <h3>SI / Metric Units</h3>
        <div class="input-group">
          <label for="kgPerM3Input">kg/m³ (kilogram per cubic meter)</label>
          <input type="number" id="kgPerM3Input" placeholder="Enter kg/m³" step="any">
        </div>
        <div class="input-group">
          <label for="gPerCm3Input">g/cm³ (gram per cubic centimeter)</label>
          <input type="number" id="gPerCm3Input" placeholder="Enter g/cm³" step="any">
        </div>
        <div class="input-group">
          <label for="gPerMlInput">g/mL (gram per milliliter)</label>
          <input type="number" id="gPerMlInput" placeholder="Enter g/mL" step="any">
        </div>
        <div class="input-group">
          <label for="kgPerLInput">kg/L (kilogram per liter)</label>
          <input type="number" id="kgPerLInput" placeholder="Enter kg/L" step="any">
        </div>
        <div class="input-group">
          <label for="mgPerM3Input">mg/m³ (milligram per cubic meter)</label>
          <input type="number" id="mgPerM3Input" placeholder="Enter mg/m³" step="any">
        </div>
        <div class="input-group">
          <label for="mgPerLInput">mg/L (milligram per liter)</label>
          <input type="number" id="mgPerLInput" placeholder="Enter mg/L" step="any">
        </div>
        
        <div class="result-section">
          <h4>SI Unit Conversions:</h4>
          <div class="result-item">
            <span>kg/m³ to g/cm³:</span>
            <span id="kgm3ToGcm3">0</span>
          </div>
          <div class="result-item">
            <span>g/cm³ to kg/m³:</span>
            <span id="gcm3ToKgm3">0</span>
          </div>
          <div class="result-item">
            <span>g/mL to kg/m³:</span>
            <span id="gmlToKgm3">0</span>
          </div>
        </div>
      </div>

      <!-- US Customary / Imperial Units Converter -->
      <div class="converter-card">
        <h3>US Customary / Imperial Units</h3>
        <div class="input-group">
          <label for="lbPerFt3Input">lb/ft³ (pound per cubic foot)</label>
          <input type="number" id="lbPerFt3Input" placeholder="Enter lb/ft³" step="any">
        </div>
        <div class="input-group">
          <label for="lbPerIn3Input">lb/in³ (pound per cubic inch)</label>
          <input type="number" id="lbPerIn3Input" placeholder="Enter lb/in³" step="any">
        </div>
        <div class="input-group">
          <label for="lbPerGalUsInput">lb/gal (US) (pound per US gallon)</label>
          <input type="number" id="lbPerGalUsInput" placeholder="Enter lb/gal (US)" step="any">
        </div>
        <div class="input-group">
          <label for="lbPerGalUkInput">lb/gal (UK) (pound per Imperial gallon)</label>
          <input type="number" id="lbPerGalUkInput" placeholder="Enter lb/gal (UK)" step="any">
        </div>
        <div class="input-group">
          <label for="ozPerIn3Input">oz/in³ (ounce per cubic inch)</label>
          <input type="number" id="ozPerIn3Input" placeholder="Enter oz/in³" step="any">
        </div>
        <div class="input-group">
          <label for="ozPerFt3Input">oz/ft³ (ounce per cubic foot)</label>
          <input type="number" id="ozPerFt3Input" placeholder="Enter oz/ft³" step="any">
        </div>
        
        <div class="result-section">
          <h4>Imperial Conversions:</h4>
          <div class="result-item">
            <span>lb/ft³ to kg/m³:</span>
            <span id="lbft3ToKgm3">0</span>
          </div>
          <div class="result-item">
            <span>lb/in³ to g/cm³:</span>
            <span id="lbin3ToGcm3">0</span>
          </div>
          <div class="result-item">
            <span>US gal to UK gal:</span>
            <span id="usGalToUkGal">0</span>
          </div>
        </div>
      </div>

      <!-- Special / Industry Units Converter -->
      <div class="converter-card">
        <h3>Special / Industry Units</h3>
        <div class="input-group">
          <label for="slugPerFt3Input">slug/ft³</label>
          <input type="number" id="slugPerFt3Input" placeholder="Enter slug/ft³" step="any">
        </div>
        <div class="input-group">
          <label for="slugPerIn3Input">slug/in³</label>
          <input type="number" id="slugPerIn3Input" placeholder="Enter slug/in³" step="any">
        </div>
        <div class="input-group">
          <label for="apiGravityInput">°API (API gravity)</label>
          <input type="number" id="apiGravityInput" placeholder="Enter °API" step="any">
        </div>
        <div class="input-group">
          <label for="bauméInput">Baumé scale</label>
          <input type="number" id="bauméInput" placeholder="Enter Baumé" step="any">
        </div>
        <div class="input-group">
          <label for="specificGravityInput">Specific Gravity (SG)</label>
          <input type="number" id="specificGravityInput" placeholder="Enter SG (water = 1)" step="any">
        </div>
        
        <div class="result-section">
          <h4>Industry Conversions:</h4>
          <div class="result-item">
            <span>SG to g/cm³:</span>
            <span id="sgToGcm3">0</span>
          </div>
          <div class="result-item">
            <span>°API to SG:</span>
            <span id="apiToSg">0</span>
          </div>
          <div class="result-item">
            <span>Baumé to SG:</span>
            <span id="baumeToSg">0</span>
          </div>
        </div>
      </div>
    </div>

    <div class="unit-info">
      <h4>Density Units Definitions & Conversion Factors</h4>
      <p><strong>kg/m³:</strong> SI unit of density, mass in kilograms per cubic meter volume</p>
      <p><strong>g/cm³:</strong> Common metric unit, equivalent to g/mL (1 g/cm³ = 1000 kg/m³)</p>
      <p><strong>lb/ft³:</strong> Imperial unit, pounds per cubic foot (1 lb/ft³ ≈ 16.018 kg/m³)</p>
      <p><strong>Specific Gravity (SG):</strong> Ratio of substance density to water density (dimensionless)</p>
      <p><strong>°API Gravity:</strong> American Petroleum Institute scale for petroleum liquids</p>
      <p><strong>Baumé Scale:</strong> Historical density scale for liquids, different for liquids heavier/lighter than water</p>
      <p><strong>Slug:</strong> Imperial mass unit (1 slug = 32.174 lb)</p>
    </div>

    <div class="reference-section">
      <h4>Common Material Densities</h4>
      <div class="reference-item">
        <span>Air (STP):</span>
        <span>1.225 kg/m³</span>
      </div>
      <div class="reference-item">
        <span>Water (4°C):</span>
        <span>1000 kg/m³ (SG = 1.0)</span>
      </div>
      <div class="reference-item">
        <span>Ice:</span>
        <span>917 kg/m³</span>
      </div>
      <div class="reference-item">
        <span>Aluminum:</span>
        <span>2700 kg/m³</span>
      </div>
      <div class="reference-item">
        <span>Iron/Steel:</span>
        <span>7850 kg/m³</span>
      </div>
      <div class="reference-item">
        <span>Lead:</span>
        <span>11340 kg/m³</span>
      </div>
      <div class="reference-item">
        <span>Gold:</span>
        <span>19300 kg/m³</span>
      </div>
      <div class="reference-item">
        <span>Gasoline:</span>
        <span>750 kg/m³ (SG = 0.75)</span>
      </div>
    </div>

    <div class="button-section">
      <button class="case-button" data-action="calculate">Calculate All</button>
      <button class="case-button" data-action="reset">Reset All</button>
      <button class="case-button success" data-action="copy">Copy Results</button>
      <button class="case-button secondary" data-action="clear">Clear All</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Common Density Conversion Examples</h2>

      <h3>Basic Conversions:</h3>
      <div class="example-text">Water: 1000 kg/m³ = 1 g/cm³ = 62.43 lb/ft³
Iron: 7850 kg/m³ = 7.85 g/cm³ = 490 lb/ft³
Air: 1.225 kg/m³ = 0.001225 g/cm³ = 0.0765 lb/ft³
Gold: 19300 kg/m³ = 19.3 g/cm³ = 1205 lb/ft³</div>

      <h3>Industry Specific Conversions:</h3>
      <div class="example-text">Gasoline: SG = 0.75 = 750 kg/m³ = 6.25 lb/US gal
Crude Oil: 30°API = SG 0.876 = 876 kg/m³
Sea Water: SG = 1.025 = 1025 kg/m³ = 8.55 lb/US gal
Mercury: SG = 13.534 = 13534 kg/m³ = 845 lb/ft³</div>

      <h3>Imperial to Metric:</h3>
      <div class="example-text">1 lb/ft³ = 16.018 kg/m³
1 lb/in³ = 27.68 g/cm³
1 slug/ft³ = 515.4 kg/m³
1 lb/US gal = 119.8 kg/m³</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Density Converter Tool</h2>

    <p>Working with density measurements across different unit systems? Our free <strong>Density Converter tool</strong> is the perfect solution for engineers, scientists, students, and professionals in various industries. This comprehensive tool allows you to instantly convert between all major density units including SI/metric units (kg/m³, g/cm³, g/mL), US customary/imperial units (lb/ft³, lb/in³), and specialized industry units (specific gravity, API gravity, Baumé scale). There's no download required, no registration needed, and your data privacy is guaranteed as all calculations happen securely right in your browser.</p>

    <h3>How to Use This Density Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Your Input:</strong> Enter the value you want to convert in any of the input fields (kg/m³, g/cm³, lb/ft³, specific gravity, etc.).</li>
      <li><strong>Automatic Calculation:</strong> The tool automatically calculates and displays all equivalent values in real-time as you type.</li>
      <li><strong>Review Results:</strong> Check the conversion results section for accurate conversions between all related density units.</li>
      <li><strong>Copy or Reset:</strong> Use the "Copy Results" button to save your conversions or "Reset All" to start over with new values.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a materials engineer working with international specifications. Your US-based supplier provides density in lb/ft³ (62.4), but your European client requires it in kg/m³. Instead of manually calculating the conversion (which could lead to errors), you simply enter "62.4" in the lb/ft³ field. The tool instantly shows you the equivalent value of 1000 kg/m³, confirming this is the density of water and ensuring accurate communication between international teams.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Engineers & Scientists:</strong> Convert between different density measurement systems for research, design, and analysis.</li>
      <li><strong>Students & Educators:</strong> Learn density unit relationships and verify homework calculations with instant conversions.</li>
      <li><strong>Chemical & Process Industries:</strong> Convert between specific gravity, API gravity, and absolute density units.</li>
      <li><strong>Construction & Materials:</strong> Work with density specifications across metric and imperial unit systems.</li>
      <li><strong>Quality Control:</strong> Ensure consistency in density measurements across different testing standards.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What is the difference between density and specific gravity?</strong><br>
      Density is an absolute measurement (mass per unit volume), while specific gravity is a relative measurement comparing a substance's density to that of water (at 4°C). Specific gravity is dimensionless, while density has units.</p>

    <p><strong>How do I convert between kg/m³ and g/cm³?</strong><br>
      1 g/cm³ = 1000 kg/m³. To convert g/cm³ to kg/m³, multiply by 1000. To convert kg/m³ to g/cm³, divide by 1000.</p>

    <p><strong>Is my data kept private when I use this converter?</strong><br>
      Absolutely. All calculations happen locally in your browser. Your density values are never sent to any server, meaning we never see, store, or have access to your data. It is 100% secure and private.</p>

    <p><strong>Can I use this tool on my mobile device?</strong><br>
      Yes, our website and converter are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>What are API gravity and Baumé scale used for?</strong><br>
      API gravity is used in the petroleum industry to classify crude oils (higher API = lighter oil). Baumé scale is an older system used for measuring density of liquids, with different scales for liquids heavier and lighter than water.</p>

    <h3>Why Choose Our Density Converter?</h3>
    <p>Our <strong>online density converter</strong> stands out from other tools because of its comprehensive coverage, accuracy, and privacy features. Unlike many online converters, we don't process your data on our servers - all calculations happen in your browser. This means your proprietary density data, research measurements, and industrial specifications remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Density Conversion</h3>
    <p>Density conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Materials Science:</strong> Convert between different density units for material characterization and selection</li>
      <li><strong>Chemical Engineering:</strong> Work with density measurements in process design and fluid dynamics</li>
      <li><strong>Petroleum Industry:</strong> Convert between API gravity and absolute density for crude oil classification</li>
      <li><strong>Quality Assurance:</strong> Ensure consistency in density specifications across international standards</li>
      <li><strong>Education & Research:</strong> Teach and learn density concepts using consistent unit conversions</li>
    </ul>

    <h3>Understanding Density Measurement Systems</h3>
    <p>Density measurement involves several different unit systems, each serving specific contexts:</p>
    <ul>
      <li><strong>SI System (kg/m³):</strong> International standard, used in scientific research and most countries</li>
      <li><strong>Metric System (g/cm³, g/mL):</strong> Common in chemistry and everyday measurements</li>
      <li><strong>Imperial System (lb/ft³, lb/in³):</strong> Used in the United States and some engineering fields</li>
      <li><strong>Relative Scales (SG, °API, Baumé):</strong> Dimensionless scales comparing to reference substances</li>
      <li><strong>Specialized Units (slug/ft³):</strong> Used in specific engineering contexts involving mass and force</li>
    </ul>

    <h3>Professional Applications</h3>
    <p>This converter is essential for professionals in various fields:</p>
    <ul>
      <li><strong>Civil Engineering:</strong> Convert soil and construction material densities between unit systems</li>
      <li><strong>Pharmaceutical Industry:</strong> Work with density specifications for drug formulations</li>
      <li><strong>Food Science:</strong> Convert density measurements for quality control and recipe standardization</li>
      <li><strong>Environmental Science:</strong> Measure and convert densities of air, water, and pollutants</li>
      <li><strong>Metallurgy:</strong> Work with metal densities for alloy development and quality control</li>
    </ul>

    <h3>Practical Conversion Examples</h3>
    <p>Understanding these common conversions can help in technical work:</p>
    <ul>
      <li><strong>Water Reference:</strong> 1 g/cm³ = 1000 kg/m³ = 62.43 lb/ft³ = SG 1.0</li>
      <li><strong>Crude Oil:</strong> 35°API = SG 0.85 = 850 kg/m³ = 53.1 lb/ft³</li>
      <li><strong>Conversion Factors:</strong> 1 lb/ft³ = 16.018 kg/m³, 1 g/cm³ = 0.03613 lb/in³</li>
      <li><strong>Industry Standards:</strong> Light crude: >31.1°API, Medium crude: 22.3-31.1°API, Heavy crude: <22.3°API</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Input elements - SI/Metric
    const kgPerM3Input = document.getElementById('kgPerM3Input');
    const gPerCm3Input = document.getElementById('gPerCm3Input');
    const gPerMlInput = document.getElementById('gPerMlInput');
    const kgPerLInput = document.getElementById('kgPerLInput');
    const mgPerM3Input = document.getElementById('mgPerM3Input');
    const mgPerLInput = document.getElementById('mgPerLInput');
    
    // Input elements - Imperial
    const lbPerFt3Input = document.getElementById('lbPerFt3Input');
    const lbPerIn3Input = document.getElementById('lbPerIn3Input');
    const lbPerGalUsInput = document.getElementById('lbPerGalUsInput');
    const lbPerGalUkInput = document.getElementById('lbPerGalUkInput');
    const ozPerIn3Input = document.getElementById('ozPerIn3Input');
    const ozPerFt3Input = document.getElementById('ozPerFt3Input');
    
    // Input elements - Special/Industry
    const slugPerFt3Input = document.getElementById('slugPerFt3Input');
    const slugPerIn3Input = document.getElementById('slugPerIn3Input');
    const apiGravityInput = document.getElementById('apiGravityInput');
    const bauméInput = document.getElementById('bauméInput');
    const specificGravityInput = document.getElementById('specificGravityInput');
    
    // Result elements
    const kgm3ToGcm3 = document.getElementById('kgm3ToGcm3');
    const gcm3ToKgm3 = document.getElementById('gcm3ToKgm3');
    const gmlToKgm3 = document.getElementById('gmlToKgm3');
    const lbft3ToKgm3 = document.getElementById('lbft3ToKgm3');
    const lbin3ToGcm3 = document.getElementById('lbin3ToGcm3');
    const usGalToUkGal = document.getElementById('usGalToUkGal');
    const sgToGcm3 = document.getElementById('sgToGcm3');
    const apiToSg = document.getElementById('apiToSg');
    const baumeToSg = document.getElementById('baumeToSg');
    
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');

    // Conversion constants
    const KG_PER_M3_TO_G_PER_CM3 = 0.001;
    const G_PER_CM3_TO_KG_PER_M3 = 1000;
    const LB_PER_FT3_TO_KG_PER_M3 = 16.01846337396;
    const LB_PER_IN3_TO_G_PER_CM3 = 27.679904710203;
    const OZ_PER_IN3_TO_G_PER_CM3 = 1.7299940443877;
    const SLUG_PER_FT3_TO_KG_PER_M3 = 515.3788183932;
    const LB_PER_US_GAL_TO_KG_PER_M3 = 119.8264273169;
    const LB_PER_UK_GAL_TO_KG_PER_M3 = 99.7763726631;
    const WATER_DENSITY = 1000; // kg/m³ at 4°C

    // Event listeners for automatic conversion
    const inputElements = [
      kgPerM3Input, gPerCm3Input, gPerMlInput, kgPerLInput, mgPerM3Input, mgPerLInput,
      lbPerFt3Input, lbPerIn3Input, lbPerGalUsInput, lbPerGalUkInput, ozPerIn3Input, ozPerFt3Input,
      slugPerFt3Input, slugPerIn3Input, apiGravityInput, bauméInput, specificGravityInput
    ];

    inputElements.forEach(input => {
      input.addEventListener('input', performAllConversions);
    });

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleConverterAction(action);
      });
    });

    function performAllConversions() {
      // Get values from inputs
      const kgPerM3Value = parseFloat(kgPerM3Input.value) || 0;
      const gPerCm3Value = parseFloat(gPerCm3Input.value) || 0;
      const lbPerFt3Value = parseFloat(lbPerFt3Input.value) || 0;
      const specificGravityValue = parseFloat(specificGravityInput.value) || 0;
      const apiGravityValue = parseFloat(apiGravityInput.value) || 0;
      const baumeValue = parseFloat(bauméInput.value) || 0;

      // Update related fields based on which input was changed
      if (this === kgPerM3Input && kgPerM3Value !== 0) {
        // Convert kg/m³ to other units
        gPerCm3Input.value = (kgPerM3Value * KG_PER_M3_TO_G_PER_CM3).toFixed(6);
        gPerMlInput.value = (kgPerM3Value * KG_PER_M3_TO_G_PER_CM3).toFixed(6);
        kgPerLInput.value = (kgPerM3Value * 0.001).toFixed(6);
        mgPerM3Input.value = (kgPerM3Value * 1000000).toFixed(2);
        mgPerLInput.value = (kgPerM3Value).toFixed(2);
        lbPerFt3Input.value = (kgPerM3Value / LB_PER_FT3_TO_KG_PER_M3).toFixed(6);
        lbPerIn3Input.value = (kgPerM3Value / (LB_PER_IN3_TO_G_PER_CM3 * G_PER_CM3_TO_KG_PER_M3)).toFixed(6);
        specificGravityInput.value = (kgPerM3Value / WATER_DENSITY).toFixed(6);
        
        // Convert to API gravity if applicable
        if (kgPerM3Value < WATER_DENSITY) {
          const sg = kgPerM3Value / WATER_DENSITY;
          apiGravityInput.value = ((141.5 / sg) - 131.5).toFixed(2);
        }
      } else if (this === gPerCm3Input && gPerCm3Value !== 0) {
        kgPerM3Input.value = (gPerCm3Value * G_PER_CM3_TO_KG_PER_M3).toFixed(6);
      } else if (this === lbPerFt3Input && lbPerFt3Value !== 0) {
        kgPerM3Input.value = (lbPerFt3Value * LB_PER_FT3_TO_KG_PER_M3).toFixed(6);
      } else if (this === specificGravityInput && specificGravityValue !== 0) {
        kgPerM3Input.value = (specificGravityValue * WATER_DENSITY).toFixed(6);
        gPerCm3Input.value = specificGravityValue.toFixed(6);
        
        // Convert to API gravity if applicable
        if (specificGravityValue < 1) {
          apiGravityInput.value = ((141.5 / specificGravityValue) - 131.5).toFixed(2);
        }
      } else if (this === apiGravityInput && apiGravityValue !== 0) {
        const sg = 141.5 / (apiGravityValue + 131.5);
        specificGravityInput.value = sg.toFixed(6);
        kgPerM3Input.value = (sg * WATER_DENSITY).toFixed(6);
      } else if (this === bauméInput && baumeValue !== 0) {
        // Baumé to specific gravity conversion (for liquids heavier than water)
        const sg = 145 / (145 - baumeValue);
        specificGravityInput.value = sg.toFixed(6);
        kgPerM3Input.value = (sg * WATER_DENSITY).toFixed(6);
      }

      // Update all result displays
      updateResultDisplays();
    }

    function updateResultDisplays() {
      const kgPerM3Value = parseFloat(kgPerM3Input.value) || 0;
      const gPerCm3Value = parseFloat(gPerCm3Input.value) || 0;
      const lbPerFt3Value = parseFloat(lbPerFt3Input.value) || 0;
      const lbPerIn3Value = parseFloat(lbPerIn3Input.value) || 0;
      const specificGravityValue = parseFloat(specificGravityInput.value) || 0;
      const apiGravityValue = parseFloat(apiGravityInput.value) || 0;
      const baumeValue = parseFloat(bauméInput.value) || 0;

      // Update result displays
      if (kgPerM3Value !== 0) {
        kgm3ToGcm3.textContent = (kgPerM3Value * KG_PER_M3_TO_G_PER_CM3).toFixed(6) + ' g/cm³';
      } else {
        kgm3ToGcm3.textContent = '0';
      }

      if (gPerCm3Value !== 0) {
        gcm3ToKgm3.textContent = (gPerCm3Value * G_PER_CM3_TO_KG_PER_M3).toFixed(6) + ' kg/m³';
      } else {
        gcm3ToKgm3.textContent = '0';
      }

      if (gPerCm3Value !== 0) {
        gmlToKgm3.textContent = (gPerCm3Value * G_PER_CM3_TO_KG_PER_M3).toFixed(6) + ' kg/m³';
      } else {
        gmlToKgm3.textContent = '0';
      }

      if (lbPerFt3Value !== 0) {
        lbft3ToKgm3.textContent = (lbPerFt3Value * LB_PER_FT3_TO_KG_PER_M3).toFixed(6) + ' kg/m³';
      } else {
        lbft3ToKgm3.textContent = '0';
      }

      if (lbPerIn3Value !== 0) {
        lbin3ToGcm3.textContent = (lbPerIn3Value * LB_PER_IN3_TO_G_PER_CM3).toFixed(6) + ' g/cm³';
      } else {
        lbin3ToGcm3.textContent = '0';
      }

      if (lbPerFt3Value !== 0) {
        usGalToUkGal.textContent = 'Ratio: 1.201';
      } else {
        usGalToUkGal.textContent = 'Ratio: 1.201';
      }

      if (specificGravityValue !== 0) {
        sgToGcm3.textContent = specificGravityValue.toFixed(6) + ' g/cm³';
      } else {
        sgToGcm3.textContent = '0';
      }

      if (apiGravityValue !== 0) {
        const sg = 141.5 / (apiGravityValue + 131.5);
        apiToSg.textContent = sg.toFixed(6);
      } else {
        apiToSg.textContent = '0';
      }

      if (baumeValue !== 0) {
        const sg = 145 / (145 - baumeValue);
        baumeToSg.textContent = sg.toFixed(6);
      } else {
        baumeToSg.textContent = '0';
      }
    }

    function handleConverterAction(action) {
      switch (action) {
        case 'calculate':
          updateResultDisplays();
          showAlert('All conversions calculated successfully!', 'success');
          break;

        case 'reset':
          // Reset all inputs to 0
          inputElements.forEach(input => {
            input.value = '';
          });
          updateResultDisplays();
          showAlert('All fields reset successfully!', 'success');
          break;

        case 'copy':
          copyResultsToClipboard();
          break;

        case 'clear':
          // Clear all inputs and results
          inputElements.forEach(input => {
            input.value = '';
          });
          updateResultDisplays();
          showAlert('All fields cleared successfully!', 'success');
          break;
      }
    }

    function copyResultsToClipboard() {
      const results = `
Density Conversion Results:
kg/m³ to g/cm³: ${kgm3ToGcm3.textContent}
g/cm³ to kg/m³: ${gcm3ToKgm3.textContent}
g/mL to kg/m³: ${gmlToKgm3.textContent}
lb/ft³ to kg/m³: ${lbft3ToKgm3.textContent}
lb/in³ to g/cm³: ${lbin3ToGcm3.textContent}
US gal to UK gal: ${usGalToUkGal.textContent}
SG to g/cm³: ${sgToGcm3.textContent}
°API to SG: ${apiToSg.textContent}
Baumé to SG: ${baumeToSg.textContent}

Generated using Density Converter Tool
      `.trim();

      navigator.clipboard.writeText(results).then(() => {
        showAlert('Conversion results copied to clipboard!', 'success');
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

    // Initialize with some example values
    kgPerM3Input.value = '1000';
    performAllConversions.call(kgPerM3Input);
  });
</script>
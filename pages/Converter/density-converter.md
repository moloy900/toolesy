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

<p>Density plays an important role in science, engineering, manufacturing, construction, chemistry, and many everyday applications. Whether you are comparing materials, calculating fluid properties, evaluating product specifications, or studying scientific concepts, understanding density and converting between different density units is often essential. Our free <strong>Density Converter Tool</strong> is designed to make these conversions quick, accurate, and effortless.</p>

<p>This online converter helps you instantly switch between a wide variety of density measurement units used around the world. From standard metric units such as kilograms per cubic meter (kg/m³) and grams per cubic centimeter (g/cm³) to imperial units like pounds per cubic foot (lb/ft³) and pounds per cubic inch (lb/in³), the tool handles everything automatically. It also supports specialized density scales such as Specific Gravity (SG), API Gravity, and Baumé degrees, which are widely used in petroleum, chemical, and industrial applications.</p>

<p>Unlike many online conversion tools, this density converter performs calculations directly inside your browser. No information is uploaded, stored, or transmitted to external servers. This means your data remains completely private while providing fast and reliable conversion results whenever you need them.</p>

<h3>What Is Density?</h3>

<p>Density is a physical property that describes how much mass is contained within a specific volume of a substance. In simple terms, it tells us how compact a material is. The density of a material is calculated by dividing its mass by its volume.</p>

<p>Materials with high density contain more mass in a smaller volume, while materials with low density contain less mass in the same volume. For example, steel is much denser than wood, which is why a steel object generally weighs more than a wooden object of the same size.</p>

<p>Density is commonly expressed using units such as:</p>

<ul>
<li><strong>kg/m³ (kilograms per cubic meter)</strong> – The standard SI unit.</li>
<li><strong>g/cm³ (grams per cubic centimeter)</strong> – Common in chemistry and material science.</li>
<li><strong>g/mL (grams per milliliter)</strong> – Frequently used for liquids.</li>
<li><strong>lb/ft³ (pounds per cubic foot)</strong> – Popular in US engineering applications.</li>
<li><strong>lb/in³ (pounds per cubic inch)</strong> – Used for precise material specifications.</li>
</ul>

<p>Knowing density helps engineers and scientists identify materials, calculate buoyancy, estimate weight, evaluate product quality, and perform countless technical calculations.</p>

<h3>How to Use This Density Converter</h3>

<p>Using the converter is extremely simple and requires no special knowledge. Whether you are a student solving homework problems or an engineer working on industrial projects, the tool provides instant results in just a few steps.</p>

<ul>
<li><strong>Step 1: Enter a Value</strong> – Type the density value into any available input field.</li>

<li><strong>Step 2: Select the Unit</strong> – Choose the density unit that matches your measurement.</li>

<li><strong>Step 3: Instant Conversion</strong> – The converter automatically calculates equivalent values in all supported units.</li>

<li><strong>Step 4: Review Results</strong> – View the converted values and use them for calculations, reports, or technical documentation.</li>

<li><strong>Step 5: Copy or Reset</strong> – Copy the results for future use or clear all fields to begin a new conversion.</li>
</ul>

<p>There is no need to memorize conversion formulas or perform manual calculations. The tool handles all mathematical operations automatically, helping eliminate mistakes and saving valuable time.</p>

<h3>Why Density Conversion Matters</h3>

<p>Different countries, industries, and scientific disciplines often use different density units. A material specification received from a supplier in one country may use a completely different measurement system than the one required by your customer or project documentation.</p>

<p>Without accurate conversion, misunderstandings can occur, leading to incorrect calculations, manufacturing errors, quality issues, or costly project delays. A reliable density converter ensures that everyone involved in a project is working with consistent and accurate information.</p>

<p>For example, a construction engineer in Europe may receive material density data in pounds per cubic foot from an American supplier. Before using the information in structural calculations, the engineer must convert the values into kilograms per cubic meter to comply with local standards. Our converter makes this process immediate and error-free.</p>

<h3>Real-World Example</h3>

<p>Imagine that you are working in a manufacturing company that imports raw materials from different countries. One supplier provides a plastic material with a density of 0.95 g/cm³, while your internal specifications require density values in kg/m³.</p>

<p>Instead of manually calculating the conversion, you simply enter 0.95 g/cm³ into the converter. The tool immediately displays the equivalent value of 950 kg/m³. This allows you to verify specifications quickly and communicate accurately with suppliers, customers, and production teams.</p>

<p>The same process applies in chemical laboratories, educational institutions, petroleum refineries, construction sites, and research facilities where density measurements are routinely used.</p>

<h3>Benefits of Using Our Density Converter</h3>

<ul>
<li><strong>Fast and Accurate Results:</strong> Get instant conversions without complicated calculations.</li>

<li><strong>Supports Multiple Units:</strong> Convert between metric, imperial, scientific, and industrial density units.</li>

<li><strong>User-Friendly Interface:</strong> Designed for beginners and professionals alike.</li>

<li><strong>Completely Free:</strong> No subscriptions, downloads, or registration requirements.</li>

<li><strong>Privacy Focused:</strong> All calculations are performed locally in your browser.</li>

<li><strong>Mobile Friendly:</strong> Works smoothly on smartphones, tablets, laptops, and desktop computers.</li>

<li><strong>Educational Value:</strong> Helps students understand relationships between different density units.</li>
</ul>

<h3>Who Can Benefit from This Tool?</h3>

<p>Density conversion is useful for a wide range of professionals and students. Some common users include:</p>

<ul>
<li><strong>Mechanical Engineers</strong> working with material specifications.</li>

<li><strong>Civil Engineers</strong> evaluating construction materials and soil properties.</li>

<li><strong>Chemists</strong> analyzing liquids, solutions, and chemical compounds.</li>

<li><strong>Researchers</strong> conducting experiments and preparing scientific reports.</li>

<li><strong>Quality Control Specialists</strong> verifying product consistency.</li>

<li><strong>Students and Teachers</strong> learning scientific principles and unit conversions.</li>

<li><strong>Petroleum Professionals</strong> working with API gravity and crude oil classifications.</li>

<li><strong>Manufacturing Companies</strong> managing international specifications and standards.</li>
</ul>

</div>

<h3>Understanding Common Density Units</h3>

<p>Density can be expressed using many different units depending on the industry, country, or scientific field involved. Although the concept remains the same, the units used to represent density may vary significantly. Understanding these units helps users interpret specifications correctly and communicate effectively across international markets.</p>

<p>The most widely recognized density unit is <strong>kilograms per cubic meter (kg/m³)</strong>, which is the official SI unit. It is commonly used in engineering, physics, environmental science, and industrial applications. Since it is part of the International System of Units, it is accepted worldwide for technical documentation and scientific research.</p>

<p>Another common unit is <strong>grams per cubic centimeter (g/cm³)</strong>. This unit is especially popular in chemistry, geology, and material science because it provides convenient values for solids and liquids. For example, water has a density close to 1 g/cm³, making it easy to compare other substances against a familiar reference point.</p>

<p><strong>Grams per milliliter (g/mL)</strong> is another frequently used unit. Since one cubic centimeter is equal to one milliliter, g/mL and g/cm³ often have identical numerical values. This unit is widely used in laboratories and pharmaceutical applications.</p>

<p>In the United States and some engineering industries, density is often expressed as <strong>pounds per cubic foot (lb/ft³)</strong>. Construction materials, building products, and industrial specifications commonly use this unit.</p>

<p>For highly detailed engineering work, <strong>pounds per cubic inch (lb/in³)</strong> may be used. This unit is particularly useful when dealing with metals, plastics, and precision manufacturing materials.</p>

<h3>Specific Gravity Explained</h3>

<p>Specific Gravity (SG) is one of the most useful density-related measurements because it provides a simple way to compare the density of a substance with that of water. Unlike density, specific gravity has no units because it is a ratio rather than an absolute measurement.</p>

<p>Specific gravity is calculated by dividing the density of a substance by the density of water at a specified temperature. Since water has a density of approximately 1000 kg/m³ or 1 g/cm³, it serves as a convenient reference standard.</p>

<p>If a substance has a specific gravity greater than 1, it is denser than water and generally sinks. If the value is less than 1, it is less dense than water and tends to float.</p>

<p>For example:</p>

<ul>
<li>Water = SG 1.0</li>
<li>Gasoline ≈ SG 0.72</li>
<li>Crude Oil ≈ SG 0.80–0.95</li>
<li>Mercury ≈ SG 13.6</li>
<li>Steel ≈ SG 7.8</li>
</ul>

<p>Specific gravity is widely used in the petroleum industry, chemical processing, food production, and laboratory testing because it allows quick comparisons without requiring complex calculations.</p>

<h3>API Gravity and Petroleum Applications</h3>

<p>API Gravity is a specialized density measurement developed by the American Petroleum Institute. It is primarily used to classify crude oil and petroleum products according to their density relative to water.</p>

<p>Unlike conventional density units, API Gravity uses a scale where higher values indicate lighter oils. This may seem unusual at first, but it has become the industry standard for evaluating crude oil quality.</p>

<p>Generally speaking:</p>

<ul>
<li><strong>Above 31.1° API:</strong> Light crude oil</li>
<li><strong>22.3°–31.1° API:</strong> Medium crude oil</li>
<li><strong>Below 22.3° API:</strong> Heavy crude oil</li>
</ul>

<p>Light crude oils are often more valuable because they yield larger quantities of gasoline and other high-demand products during refining. Heavy crude oils typically require additional processing and may produce lower percentages of premium fuels.</p>

<p>Refineries, traders, petroleum engineers, and energy analysts regularly convert between API gravity and standard density units. A reliable density converter simplifies this process and helps ensure consistency across technical documents and commercial transactions.</p>

<h3>Baumé Scale and Industrial Usage</h3>

<p>The Baumé scale is another traditional density measurement system that remains useful in certain industrial sectors. Developed by French chemist Antoine Baumé, this scale provides a convenient method for measuring liquid densities.</p>

<p>The Baumé system actually includes two separate scales:</p>

<ul>
<li>One for liquids heavier than water.</li>
<li>One for liquids lighter than water.</li>
</ul>

<p>Although modern industries increasingly rely on SI units and specific gravity measurements, Baumé values are still encountered in chemical manufacturing, food processing, sugar production, and various industrial operations.</p>

<p>Because Baumé values are not directly intuitive, converting them into standard density units often becomes necessary. This converter helps users perform such conversions quickly and accurately.</p>

<h3>Density in Materials Science</h3>

<p>Materials scientists rely heavily on density measurements when evaluating and selecting materials for engineering applications. Density influences weight, strength, durability, thermal properties, and overall performance.</p>

<p>For example, aerospace engineers prefer lightweight materials such as aluminum and carbon fiber composites because lower density helps reduce aircraft weight and improve fuel efficiency. In contrast, structural engineers may select denser materials when high strength and stability are required.</p>

<p>Density measurements also help identify unknown materials. By measuring the mass and volume of a sample, researchers can calculate density and compare the result with known reference values.</p>

<p>This makes density one of the most important physical properties used in material characterization and quality assurance.</p>

<h3>Density in Construction and Civil Engineering</h3>

<p>Civil engineers use density values extensively when designing buildings, roads, bridges, and infrastructure projects. Soil density affects foundation stability, while concrete density influences structural load calculations.</p>

<p>Accurate density measurements help engineers estimate:</p>

<ul>
<li>Material quantities</li>
<li>Transportation costs</li>
<li>Structural loads</li>
<li>Foundation requirements</li>
<li>Compaction performance</li>
</ul>

<p>Because construction projects often involve suppliers from different regions, density conversion tools help standardize measurements and prevent costly mistakes.</p>

<h3>Density in Chemistry and Laboratory Work</h3>

<p>Density is one of the most frequently measured properties in chemistry laboratories. Scientists use density measurements to identify substances, determine concentrations, evaluate purity, and monitor chemical reactions.</p>

<p>Many laboratory procedures require converting between density units because research papers, instruments, and reference materials may use different measurement systems.</p>

<p>For example, a chemist working with an international research team may receive data in kg/m³ while laboratory equipment displays results in g/mL. Accurate conversion ensures consistency and prevents misunderstandings during analysis.</p>

<h3>Environmental and Scientific Applications</h3>

<p>Environmental scientists use density measurements when studying air quality, water resources, climate systems, and pollution. Density affects fluid movement, mixing behavior, and environmental transport processes.</p>

<p>Oceanographers analyze water density to understand ocean currents and temperature distribution. Meteorologists evaluate air density when studying weather patterns and atmospheric conditions. Environmental engineers use density information when designing treatment systems and assessing pollutant behavior.</p>

<p>Because scientific collaboration often involves multiple countries and organizations, density conversion remains an essential part of data interpretation and communication.</p>

<h3>Common Density Values for Everyday Materials</h3>

<p>Knowing the density of common materials can help put conversion results into perspective. Here are some approximate reference values:</p>

<ul>
<li><strong>Air:</strong> 1.225 kg/m³</li>
<li><strong>Water:</strong> 1000 kg/m³</li>
<li><strong>Seawater:</strong> 1025 kg/m³</li>
<li><strong>Ice:</strong> 917 kg/m³</li>
<li><strong>Gasoline:</strong> 720–780 kg/m³</li>
<li><strong>Aluminum:</strong> 2700 kg/m³</li>
<li><strong>Iron:</strong> 7870 kg/m³</li>
<li><strong>Copper:</strong> 8960 kg/m³</li>
<li><strong>Lead:</strong> 11340 kg/m³</li>
<li><strong>Gold:</strong> 19300 kg/m³</li>
</ul>

<p>These values illustrate how dramatically density can vary between different substances and why accurate conversion tools are important.</p>

<h3>Tips for Accurate Density Conversions</h3>

<p>Although density conversion is straightforward when using a reliable tool, following a few best practices can help ensure maximum accuracy:</p>

<ul>
<li>Double-check the unit of the original measurement before converting.</li>
<li>Use sufficient decimal places when working with scientific data.</li>
<li>Verify whether the density value was measured at a specific temperature.</li>
<li>Be aware that liquids and gases may change density with temperature and pressure.</li>
<li>Use trusted conversion tools rather than manual calculations whenever possible.</li>
</ul>

<p>These simple precautions help prevent errors and improve confidence in the results.</p>

<h3>Frequently Asked Questions</h3>

<p><strong>Why are there so many density units?</strong><br>
Different industries and countries developed their own measurement systems over time. Density converters help bridge these differences and provide consistent results.</p>

<p><strong>Can density change with temperature?</strong><br>
Yes. Most substances expand when heated, which changes their volume and therefore their density. This effect is particularly important for liquids and gases.</p>

<p><strong>Why does ice float on water?</strong><br>
Ice is less dense than liquid water. Because its density is lower, it floats instead of sinking.</p>

<p><strong>What is considered a high-density material?</strong><br>
Materials such as lead, tungsten, platinum, and gold are considered high-density materials because they contain a large amount of mass within a relatively small volume.</p>

<p><strong>Is specific gravity the same as density?</strong><br>
No. Density is an absolute measurement with units, while specific gravity is a unitless ratio comparing a substance's density to the density of water.</p>

<h3>Why Choose Our Online Density Converter?</h3>

<p>There are many density conversion tools available online, but our converter is designed to provide a combination of speed, simplicity, accuracy, and privacy. Whether you are performing a quick homework calculation or working on a complex engineering project, the tool delivers reliable results instantly.</p>

<p>Since all calculations occur directly within your browser, you can use the converter with confidence knowing that your data remains private. There is no need to install software, create an account, or share sensitive information.</p>

<p>The responsive design ensures a smooth experience across desktops, laptops, tablets, and smartphones. This flexibility allows you to perform density conversions wherever your work takes you.</p>

<h3>Final Thoughts</h3>

<p>Density is one of the most important physical properties used in science, engineering, manufacturing, construction, chemistry, and countless other fields. Because different industries rely on different measurement systems, converting density values accurately is essential for effective communication and reliable calculations.</p>

<p>Our free online <strong>Density Converter Tool</strong> makes the process simple by supporting a wide range of metric, imperial, scientific, and industry-specific units. Whether you need to convert kg/m³ to g/cm³, compare specific gravity values, calculate API gravity equivalents, or verify technical specifications, the converter provides fast and dependable results.</p>

<p>Save time, reduce calculation errors, and improve productivity by using this comprehensive density conversion tool whenever you need accurate density measurements across multiple unit systems.</p>

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
---
layout: default
title: "Magnetic Field & Induction Converter - Convert Between Magnetic Units"
permalink: /magnetic-field-induction-converter-convert-between-magnetic-units/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Magnetic Field & Induction Converter - Convert Between Magnetic Units</title>
<meta name="description"
  content="Free online magnetic field and induction conversion tool. Convert between tesla, gauss, oersted, weber and more magnetic units instantly for physics and engineering.">
<meta name="keywords"
  content="magnetic field converter, tesla converter, gauss converter, oersted converter, magnetic induction converter, weber converter, maxwell converter">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Magnetic Field Converter Styles */
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
  <h1>Free Online Magnetic Field & Induction Converter</h1>
  <p class="welcome-message">Convert between different magnetic field and induction units instantly. Supports tesla, gauss, oersted, weber, maxwell and more magnetic units for physics and engineering.</p>

  <div class="converter-section">
    <h2>Magnetic Field & Induction Conversion</h2>

    <div class="conversion-wrapper">
      <div class="conversion-group">
        <h3>Input Value</h3>
        <div class="input-group">
          <label for="inputValue">Magnetic Value</label>
          <input type="number" id="inputValue" placeholder="Enter magnetic value" step="any" value="1">
        </div>
        <div class="input-group">
          <label for="inputUnit">From Unit</label>
          <select id="inputUnit">
            <optgroup label="SI Units">
              <option value="tesla">Tesla (T)</option>
              <option value="millitesla">Millitesla (mT)</option>
              <option value="microtesla">Microtesla (µT)</option>
              <option value="weberPerSquareMeter">Weber per square meter (Wb/m²)</option>
            </optgroup>
            <optgroup label="CGS / Gaussian Units">
              <option value="gauss" selected>Gauss (G)</option>
              <option value="kilogauss">Kilogauss (kG)</option>
              <option value="maxwellPerSquareCm">Maxwell per square centimeter (Mx/cm²)</option>
            </optgroup>
            <optgroup label="Other / Specialized Units">
              <option value="oersted">Oersted (Oe)</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div class="conversion-group">
        <h3>Conversion Results</h3>
        <div class="result-section">
          <div class="result-item">
            <span class="result-label">Tesla (T):</span>
            <span class="result-value" id="resultTesla">0.0001</span>
          </div>
          <div class="result-item">
            <span class="result-label">Gauss (G):</span>
            <span class="result-value" id="resultGauss">1.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">Millitesla (mT):</span>
            <span class="result-value" id="resultMillitesla">0.1000</span>
          </div>
          <div class="result-item">
            <span class="result-label">Oersted (Oe):</span>
            <span class="result-value" id="resultOersted">1.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">Microtesla (µT):</span>
            <span class="result-value" id="resultMicrotesla">100.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">Kilogauss (kG):</span>
            <span class="result-value" id="resultKilogauss">0.0010</span>
          </div>
          <div class="result-item">
            <span class="result-label">Wb/m²:</span>
            <span class="result-value" id="resultWeberPerSquareMeter">0.0001</span>
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
        <h3>SI Magnetic Units</h3>
        <ul>
          <li><strong>Tesla (T)</strong> - SI unit of magnetic flux density</li>
          <li><strong>Millitesla (mT)</strong> = 0.001 T</li>
          <li><strong>Microtesla (µT)</strong> = 0.000001 T</li>
          <li><strong>Wb/m²</strong> = 1 T (equivalent)</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>CGS / Gaussian Units</h3>
        <ul>
          <li><strong>Gauss (G)</strong> - Most common CGS unit</li>
          <li><strong>Kilogauss (kG)</strong> = 1,000 G</li>
          <li><strong>Mx/cm²</strong> = 1 G (equivalent)</li>
          <li>1 T = 10,000 G</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Magnetic Field Strength</h3>
        <ul>
          <li><strong>Oersted (Oe)</strong> - CGS unit of magnetic field strength</li>
          <li>Different from magnetic flux density</li>
          <li>Related to magnetizing field</li>
          <li>Used in material characterization</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Common Magnetic Field Values</h3>
        <ul>
          <li><strong>Earth's Field:</strong> 25-65 µT</li>
          <li><strong>Refrigerator Magnet:</strong> 5-10 mT</li>
          <li><strong>MRI Scanner:</strong> 1.5-3.0 T</li>
          <li><strong>Neodymium Magnet:</strong> 1.0-1.4 T</li>
        </ul>
      </div>
    </div>

    <div class="examples">
      <h2>Conversion Examples</h2>

      <div class="example-item">
        <strong>1 Gauss</strong> = 0.0001 Tesla = 0.1 Millitesla = 100 Microtesla = 1 Oersted (in air)
      </div>

      <div class="example-item">
        <strong>1 Tesla</strong> = 10,000 Gauss = 1,000 Millitesla = 1,000,000 Microtesla = 7,958 Oersted (in air)
      </div>

      <div class="example-item">
        <strong>1 Oersted</strong> = 79.58 A/m (SI) = 1 Gauss (in CGS for air/vacuum)
      </div>

      <div class="example-item">
        <strong>Earth's Magnetic Field</strong> ≈ 50 µT = 0.5 Gauss = 0.05 mT
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Magnetic Field & Induction Conversion Tool</h2>

    <p>Our comprehensive <strong>Magnetic Field and Induction Converter</strong> is an essential tool for physicists, electrical engineers, researchers, and anyone working with magnetic fields. This powerful converter allows you to instantly convert between dozens of magnetic units including tesla, gauss, oersted, weber per square meter, maxwell per square centimeter, and many more. Whether you're designing electromagnetic systems, conducting research, working with MRI technology, or studying magnetism, this tool provides accurate conversions with real-time results.</p>

    <h3>How to Use This Magnetic Field Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Value:</strong> Input the numerical magnetic field value you want to convert in the "Magnetic Value" field</li>
      <li><strong>Select Source Unit:</strong> Choose the unit of your input value from the dropdown menu (e.g., tesla, gauss, oersted)</li>
      <li><strong>View Results:</strong> Instantly see the converted values in all major magnetic units in the results panel</li>
      <li><strong>Additional Actions:</strong> Use the buttons to copy results, swap units, or reset the converter for new calculations</li>
    </ul>

    <h3>Real-Life Application Examples:</h3>
    <p><strong>For Electrical Engineering:</strong> Convert between tesla and gauss when designing transformers, motors, and generators. A typical transformer core might operate at 1.5-1.7 tesla (15,000-17,000 gauss) before saturation.</p>

    <p><strong>For Medical Imaging:</strong> Convert magnetic field units when working with MRI systems. Clinical MRI scanners typically operate at 1.5-3.0 tesla (15,000-30,000 gauss), while research scanners can reach 7-11 tesla.</p>

    <p><strong>For Physics Research:</strong> Convert between SI and CGS units when analyzing experimental data or reading scientific literature from different eras and regions that use different measurement systems.</p>

    <p><strong>For Industrial Applications:</strong> Convert magnetic field measurements for quality control in manufacturing permanent magnets, magnetic separators, and magnetic recording media.</p>

    <h3>Common Magnetic Unit Definitions:</h3>
    <ul>
      <li><strong>Tesla (T):</strong> SI unit of magnetic flux density - defined as one weber per square meter</li>
      <li><strong>Gauss (G):</strong> CGS unit of magnetic flux density - named after Carl Friedrich Gauss</li>
      <li><strong>Oersted (Oe):</strong> CGS unit of magnetic field strength - named after Hans Christian Ørsted</li>
      <li><strong>Weber per square meter (Wb/m²):</strong> Equivalent to tesla - SI unit of magnetic flux density</li>
      <li><strong>Maxwell per square centimeter (Mx/cm²):</strong> Equivalent to gauss - CGS unit of magnetic flux density</li>
      <li><strong>Millitesla (mT):</strong> 0.001 tesla - commonly used for moderate magnetic fields</li>
      <li><strong>Microtesla (µT):</strong> 0.000001 tesla - used for weak magnetic fields like Earth's field</li>
    </ul>

    <h3>Who Should Use This Magnetic Field Converter?</h3>
    <ul>
      <li><strong>Electrical Engineers:</strong> Essential for designing motors, generators, transformers, and electromagnetic devices</li>
      <li><strong>Physicists & Researchers:</strong> Perfect for experimental work, data analysis, and scientific publications</li>
      <li><strong>Medical Professionals:</strong> Ideal for understanding MRI specifications and magnetic safety limits</li>
      <li><strong>Industrial Engineers:</strong> Useful for quality control in magnet manufacturing and magnetic applications</li>
      <li><strong>Students & Educators:</strong> Valuable for physics and engineering courses dealing with electromagnetism</li>
      <li><strong>Hobbyists & DIY Enthusiasts:</strong> Great for projects involving magnets, electromagnets, and magnetic sensors</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What's the difference between magnetic flux density and magnetic field strength?</strong><br>
      Magnetic flux density (B, measured in tesla or gauss) describes the strength of the magnetic field, while magnetic field strength (H, measured in A/m or oersted) describes the magnetizing field. In vacuum, B = μ₀H, where μ₀ is the permeability of free space.</p>

    <p><strong>How are tesla and gauss related?</strong><br>
      1 tesla = 10,000 gauss. This conversion factor comes from the relationship between the SI and CGS systems of units for magnetic flux density.</p>

    <p><strong>When should I use oersted instead of gauss?</strong><br>
      Use gauss for magnetic flux density (B field) and oersted for magnetic field strength (H field). In CGS units for non-magnetic materials, 1 oersted = 1 gauss, but this relationship changes for magnetic materials.</p>

    <p><strong>How accurate are the conversions?</strong><br>
      Our converter uses precise conversion factors based on international standards. For most scientific and engineering purposes, the accuracy is more than sufficient.</p>

    <p><strong>Can I convert between magnetic flux and magnetic flux density?</strong><br>
      Magnetic flux (measured in weber or maxwell) is the total magnetic field through an area, while magnetic flux density (tesla or gauss) is flux per unit area. You need to know the area to convert between them.</p>

    <h3>Magnetic Field Conversion Factors Reference:</h3>
    <p>For quick reference, here are some key conversion factors:</p>
    <ul>
      <li>1 tesla = 10,000 gauss = 1,000 millitesla = 1,000,000 microtesla</li>
      <li>1 gauss = 0.0001 tesla = 0.1 millitesla = 100 microtesla</li>
      <li>1 millitesla = 0.001 tesla = 10 gauss = 1,000 microtesla</li>
      <li>1 microtesla = 0.000001 tesla = 0.01 gauss = 0.001 millitesla</li>
      <li>1 oersted = 79.5774715 A/m (SI) ≈ 1 gauss (in CGS for vacuum/air)</li>
      <li>1 weber/m² = 1 tesla</li>
      <li>1 maxwell/cm² = 1 gauss</li>
    </ul>

    <h3>Typical Magnetic Field Values in Practice:</h3>
    <ul>
      <li><strong>Interstellar Space:</strong> 0.1-10 nT (0.001-0.1 mG)</li>
      <li><strong>Earth's Magnetic Field:</strong> 25-65 µT (0.25-0.65 G)</li>
      <li><strong>Sunspot:</strong> 0.1-0.3 T (1,000-3,000 G)</li>
      <li><strong>Refrigerator Magnet:</strong> 5-10 mT (50-100 G)</li>
      <li><strong>Speaker Magnet:</strong> 0.1-1.0 T (1,000-10,000 G)</li>
      <li><strong>Neodymium Magnet:</strong> 1.0-1.4 T (10,000-14,000 G)</li>
      <li><strong>MRI Scanner:</strong> 0.2-7.0 T (2,000-70,000 G)</li>
      <li><strong>Pulsed Laboratory Magnet:</strong> Up to 100 T (1,000,000 G)</li>
    </ul>

    <h3>Magnetic Unit Systems Comparison:</h3>
    <ul>
      <li><strong>SI System:</strong> Tesla (T), Weber (Wb), Ampere/meter (A/m)</li>
      <li><strong>CGS System:</strong> Gauss (G), Maxwell (Mx), Oersted (Oe)</li>
      <li><strong>Conversion:</strong> 1 T = 10⁴ G, 1 Wb = 10⁸ Mx, 1 A/m = 4π×10⁻³ Oe</li>
      <li>SI system is used internationally in most scientific and engineering contexts</li>
      <li>CGS system is still used in some specialized fields and older literature</li>
    </ul>

    <h3>Safety Considerations:</h3>
    <ul>
      <li><strong>Static Fields &lt; 2 T:</strong> Generally safe for brief exposure</li>
      <li><strong>Static Fields 2-8 T:</strong> Potential biological effects, professional use only</li>
      <li><strong>Static Fields &gt; 8 T:</strong> Significant safety concerns, restricted access</li>
      <li>Always follow safety guidelines when working with strong magnetic fields</li>
      <li>Consider effects on medical implants, magnetic media, and electronic devices</li>
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
    const resultTesla = document.getElementById('resultTesla');
    const resultGauss = document.getElementById('resultGauss');
    const resultMillitesla = document.getElementById('resultMillitesla');
    const resultOersted = document.getElementById('resultOersted');
    const resultMicrotesla = document.getElementById('resultMicrotesla');
    const resultKilogauss = document.getElementById('resultKilogauss');
    const resultWeberPerSquareMeter = document.getElementById('resultWeberPerSquareMeter');

    // Initialize with default conversion
    convertMagneticField();

    // Event listeners
    convertButton.addEventListener('click', convertMagneticField);
    inputValue.addEventListener('input', convertMagneticField);
    inputUnit.addEventListener('change', convertMagneticField);
    
    swapButton.addEventListener('click', function() {
      showAlert('Use the unit selector to choose different conversion units', 'info');
    });
    
    copyButton.addEventListener('click', copyResults);
    resetButton.addEventListener('click', resetConverter);

    function convertMagneticField() {
      const value = parseFloat(inputValue.value) || 0;
      const fromUnit = inputUnit.value;
      
      // Convert to tesla first (as base SI unit)
      let tesla;
      
      switch (fromUnit) {
        // SI Units
        case 'tesla':
          tesla = value;
          break;
        case 'millitesla':
          tesla = value / 1000;
          break;
        case 'microtesla':
          tesla = value / 1000000;
          break;
        case 'weberPerSquareMeter':
          tesla = value;
          break;
        
        // CGS / Gaussian Units
        case 'gauss':
          tesla = value / 10000;
          break;
        case 'kilogauss':
          tesla = value / 10;
          break;
        case 'maxwellPerSquareCm':
          tesla = value / 10000;
          break;
        
        // Other / Specialized Units
        case 'oersted':
          // For vacuum/air, 1 Oe ≈ 1 G ≈ 0.0001 T
          // More precisely in SI: 1 Oe = 1000/(4π) A/m ≈ 79.57747 A/m
          // For conversion to tesla in vacuum: B = μ₀H, where μ₀ = 4π×10⁻⁷ N/A²
          tesla = value * (4 * Math.PI * 1e-7) * (1000/(4*Math.PI));
          break;
        
        default:
          tesla = value;
      }
      
      // Convert to all other units from tesla
      resultTesla.textContent = formatNumber(tesla);
      resultGauss.textContent = formatNumber(tesla * 10000);
      resultMillitesla.textContent = formatNumber(tesla * 1000);
      resultOersted.textContent = formatNumber(tesla * 10000); // Approximation for vacuum/air
      resultMicrotesla.textContent = formatNumber(tesla * 1000000);
      resultKilogauss.textContent = formatNumber(tesla * 10);
      resultWeberPerSquareMeter.textContent = formatNumber(tesla);
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
      const results = `Magnetic Field Conversion Results:
Input: ${inputValue.value} ${getUnitName(inputUnit.value)}
Tesla: ${resultTesla.textContent} T
Gauss: ${resultGauss.textContent} G
Millitesla: ${resultMillitesla.textContent} mT
Oersted: ${resultOersted.textContent} Oe
Microtesla: ${resultMicrotesla.textContent} µT
Kilogauss: ${resultKilogauss.textContent} kG
Wb/m²: ${resultWeberPerSquareMeter.textContent} Wb/m²`;

      navigator.clipboard.writeText(results).then(() => {
        showAlert('Conversion results copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy results: ' + err, 'error');
      });
    }

    function resetConverter() {
      inputValue.value = '1';
      inputUnit.selectedIndex = 4; // Gauss
      convertMagneticField();
      showAlert('Converter has been reset', 'success');
    }

    function getUnitName(unitValue) {
      const unitNames = {
        'tesla': 'Tesla (T)',
        'millitesla': 'Millitesla (mT)',
        'microtesla': 'Microtesla (µT)',
        'weberPerSquareMeter': 'Weber per square meter (Wb/m²)',
        'gauss': 'Gauss (G)',
        'kilogauss': 'Kilogauss (kG)',
        'maxwellPerSquareCm': 'Maxwell per square centimeter (Mx/cm²)',
        'oersted': 'Oersted (Oe)'
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
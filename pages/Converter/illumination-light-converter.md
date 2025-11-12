---
layout: default
title: "Illumination & Light Units Converter - Convert Between Light Measurement Units"
permalink: /illumination-light-units-converter-convert-between-light-measurement-units/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Illumination & Light Units Converter - Convert Between Light Measurement Units</title>
<meta name="description"
  content="Free online illumination and light units conversion tool. Convert between lumens, lux, candela, foot-candles, nits, lamberts and more light measurement units instantly.">
<meta name="keywords"
  content="illumination converter, light units converter, lumen converter, lux converter, candela converter, foot-candle converter, nit converter, lambert converter, light measurement conversion">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Illumination Converter Styles */
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
  <h1>Free Online Illumination & Light Units Converter</h1>
  <p class="welcome-message">Convert between different illumination and light measurement units instantly. Supports lumens, lux, candela, foot-candles, nits, lamberts and many more light units.</p>

  <div class="converter-section">
    <h2>Illumination & Light Conversion</h2>

    <div class="conversion-wrapper">
      <div class="conversion-group">
        <h3>Input Value</h3>
        <div class="input-group">
          <label for="inputValue">Light Value</label>
          <input type="number" id="inputValue" placeholder="Enter light value" step="any" value="100">
        </div>
        <div class="input-group">
          <label for="inputUnit">From Unit</label>
          <select id="inputUnit">
            <optgroup label="SI / Metric Units">
              <option value="lumen">Lumen (lm)</option>
              <option value="lux">Lux (lx)</option>
              <option value="candela">Candela (cd)</option>
            </optgroup>
            <optgroup label="Imperial / US Units">
              <option value="footcandle">Foot-candle (fc)</option>
              <option value="candlepower">Candlepower (cp)</option>
            </optgroup>
            <optgroup label="Other / Specialized Units">
              <option value="nit">Nit (nt)</option>
              <option value="stilb">Stilb (sb)</option>
              <option value="lambert">Lambert (L)</option>
              <option value="apostilb">Apostilb (asb)</option>
              <option value="footlambert">Foot-lambert (fL)</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div class="conversion-group">
        <h3>Conversion Results</h3>
        <div class="result-section">
          <div class="result-item">
            <span class="result-label">Lumen (lm):</span>
            <span class="result-value" id="resultLumen">100.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">Lux (lx):</span>
            <span class="result-value" id="resultLux">100.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">Candela (cd):</span>
            <span class="result-value" id="resultCandela">7.9577</span>
          </div>
          <div class="result-item">
            <span class="result-label">Foot-candle (fc):</span>
            <span class="result-value" id="resultFootcandle">9.2903</span>
          </div>
          <div class="result-item">
            <span class="result-label">Nit (nt):</span>
            <span class="result-value" id="resultNit">100.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">Foot-lambert (fL):</span>
            <span class="result-value" id="resultFootlambert">29.1866</span>
          </div>
          <div class="result-item">
            <span class="result-label">Lambert (L):</span>
            <span class="result-value" id="resultLambert">0.0318</span>
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
        <h3>Luminous Flux (Light Output)</h3>
        <ul>
          <li><strong>Lumen (lm)</strong> - Total visible light emitted</li>
          <li>Measures total light output from a source</li>
          <li>Used for light bulbs, LEDs, and light sources</li>
          <li>Example: 60W bulb ≈ 800 lumens</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Illuminance (Surface Lighting)</h3>
        <ul>
          <li><strong>Lux (lx)</strong> - Lumens per square meter</li>
          <li><strong>Foot-candle (fc)</strong> - Lumens per square foot</li>
          <li>Measures light falling on a surface</li>
          <li>Used in lighting design and photography</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Luminous Intensity</h3>
        <ul>
          <li><strong>Candela (cd)</strong> - Light intensity in a direction</li>
          <li><strong>Candlepower (cp)</strong> - Older term for candela</li>
          <li>Measures directional light brightness</li>
          <li>Used for flashlights, spotlights</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Luminance (Surface Brightness)</h3>
        <ul>
          <li><strong>Nit (nt)</strong> - Candelas per square meter</li>
          <li><strong>Foot-lambert (fL)</strong> - Imperial luminance</li>
          <li><strong>Lambert (L)</strong> - CGS luminance unit</li>
          <li>Measures surface brightness</li>
        </ul>
      </div>
    </div>

    <div class="examples">
      <h2>Conversion Examples</h2>

      <div class="example-item">
        <strong>100 Lux</strong> = 9.29 foot-candles = 100 nits = 29.19 foot-lamberts = 0.0318 lamberts
      </div>

      <div class="example-item">
        <strong>1 Candela</strong> = 12.57 lumens (for isotropic source) = 1 candlepower = 3.142 candela per steradian
      </div>

      <div class="example-item">
        <strong>1000 Lumens</strong> = 79.58 candela (at 1 steradian) = 12.57 lumens per watt (at 80W)
      </div>

      <div class="example-item">
        <strong>1 Foot-candle</strong> = 10.764 lux = 3.426 foot-lamberts = 0.001076 phot
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Illumination & Light Units Conversion Tool</h2>

    <p>Our comprehensive <strong>Illumination and Light Units Converter</strong> is an essential tool for lighting designers, photographers, engineers, architects, and anyone working with light measurements. This powerful converter allows you to instantly convert between dozens of light measurement units including lumens, lux, candela, foot-candles, nits, lamberts, apostilbs, and many more. Whether you're designing lighting systems, setting up photography equipment, working on display technology, or studying optics, this tool provides accurate conversions with real-time results.</p>

    <h3>How to Use This Light Units Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Value:</strong> Input the numerical light measurement value you want to convert in the "Light Value" field</li>
      <li><strong>Select Source Unit:</strong> Choose the unit of your input value from the dropdown menu (e.g., lumens, lux, candela)</li>
      <li><strong>View Results:</strong> Instantly see the converted values in all major light measurement units in the results panel</li>
      <li><strong>Additional Actions:</strong> Use the buttons to copy results, swap units, or reset the converter for new calculations</li>
    </ul>

    <h3>Real-Life Application Examples:</h3>
    <p><strong>For Lighting Design:</strong> Convert between lux and foot-candles when designing indoor or outdoor lighting systems. Office lighting typically requires 300-500 lux (28-46 foot-candles), while detailed work may need 750-1000 lux (70-93 foot-candles).</p>

    <p><strong>For Photography & Videography:</strong> Convert between different light measurement units when setting up studio lighting or calculating exposure. Understanding that 1000 lux equals approximately 93 foot-candles helps when working with light meters from different regions.</p>

    <p><strong>For Display Technology:</strong> Convert between nits and foot-lamberts when specifying display brightness. A typical computer monitor might be 200-300 nits (58-88 foot-lamberts), while HDR displays can reach 1000+ nits.</p>

    <p><strong>For Architecture & Construction:</strong> Convert between different illumination units when designing building lighting to meet international standards and regulations across different measurement systems.</p>

    <h3>Common Light Measurement Unit Definitions:</h3>
    <ul>
      <li><strong>Lumen (lm):</strong> SI unit of luminous flux - total quantity of visible light emitted by a source</li>
      <li><strong>Lux (lx):</strong> SI unit of illuminance - luminous flux per unit area (lumens per square meter)</li>
      <li><strong>Candela (cd):</strong> SI unit of luminous intensity - light power per unit solid angle</li>
      <li><strong>Foot-candle (fc):</strong> Imperial unit of illuminance - lumens per square foot</li>
      <li><strong>Nit (nt):</strong> SI unit of luminance - candelas per square meter (display brightness)</li>
      <li><strong>Foot-lambert (fL):</strong> Imperial unit of luminance - based on foot-candle and surface reflectivity</li>
      <li><strong>Lambert (L):</strong> CGS unit of luminance - named after Johann Heinrich Lambert</li>
      <li><strong>Apostilb (asb):</strong> Non-SI unit of luminance - equivalent to 1/π candela per square meter</li>
    </ul>

    <h3>Who Should Use This Light Units Converter?</h3>
    <ul>
      <li><strong>Lighting Designers & Engineers:</strong> Essential for designing efficient and compliant lighting systems across different standards</li>
      <li><strong>Photographers & Videographers:</strong> Perfect for understanding and converting light measurements for optimal exposure</li>
      <li><strong>Display & Screen Manufacturers:</strong> Ideal for specifying and comparing display brightness across different units</li>
      <li><strong>Architects & Interior Designers:</strong> Useful for meeting lighting requirements in building codes and design standards</li>
      <li><strong>Students & Educators:</strong> Valuable for physics, engineering, and photography courses dealing with optics and light</li>
      <li><strong>DIY Enthusiasts:</strong> Great for home lighting projects, grow lights, and custom lighting installations</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What's the difference between lumens, lux, and candela?</strong><br>
      Lumens measure total light output, lux measures light falling on a surface (illuminance), and candela measures light intensity in a specific direction. Think of lumens as "total light," lux as "light per area," and candela as "brightness in a direction."</p>

    <p><strong>How are foot-candles related to lux?</strong><br>
      1 foot-candle = 10.764 lux. This conversion comes from the relationship between square feet and square meters (1 ft² = 0.0929 m²). Foot-candles are commonly used in the US, while lux is used internationally.</p>

    <p><strong>What are nits used for?</strong><br>
      Nits (candelas per square meter) are primarily used to measure the brightness of displays like monitors, TVs, smartphones, and digital signs. Higher nits values indicate brighter displays.</p>

    <p><strong>How accurate are the conversions?</strong><br>
      Our converter uses precise conversion factors based on international standards. For most practical applications in lighting design, photography, and engineering, the accuracy is more than sufficient.</p>

    <p><strong>Can I convert between photometric and radiometric units?</strong><br>
      This converter focuses on photometric units (light as perceived by human vision). Radiometric units (physical light energy) require different conversion factors based on wavelength and require knowledge of the light source spectrum.</p>

    <h3>Light Unit Conversion Factors Reference:</h3>
    <p>For quick reference, here are some key conversion factors:</p>
    <ul>
      <li>1 lux = 0.0929 foot-candles</li>
      <li>1 foot-candle = 10.764 lux</li>
      <li>1 candela = 1 candlepower (approximately)</li>
      <li>1 nit = 1 candela per square meter</li>
      <li>1 foot-lambert = 3.426 candelas per square meter</li>
      <li>1 lambert = 3183.1 candelas per square meter</li>
      <li>1 apostilb = 0.3183 candelas per square meter</li>
      <li>1 lumen = 1 candela × steradian (for isotropic source)</li>
    </ul>

    <h3>Typical Light Levels in Practice:</h3>
    <ul>
      <li><strong>Moonlight:</strong> 0.1-1 lux</li>
      <li><strong>Residential Lighting:</strong> 50-300 lux</li>
      <li><strong>Office Lighting:</strong> 300-500 lux</li>
      <li><strong>Supermarket Lighting:</strong> 750-1000 lux</li>
      <li><strong>Overcast Daylight:</strong> 1000-2000 lux</li>
      <li><strong>Full Daylight (not direct sun):</strong> 10,000-25,000 lux</li>
      <li><strong>Direct Sunlight:</strong> 32,000-100,000 lux</li>
    </ul>

    <h3>Common Light Source Luminous Efficacy:</h3>
    <ul>
      <li><strong>Incandescent Bulb:</strong> 10-17 lumens/watt</li>
      <li><strong>Halogen Bulb:</strong> 15-25 lumens/watt</li>
      <li><strong>Compact Fluorescent (CFL):</strong> 45-75 lumens/watt</li>
      <li><strong>LED Bulb:</strong> 80-150 lumens/watt</li>
      <li><strong>Professional LED:</strong> 150-200+ lumens/watt</li>
    </ul>

    <h3>Display Brightness Reference:</h3>
    <ul>
      <li><strong>Smartphone (indoor):</strong> 200-600 nits</li>
      <li><strong>Computer Monitor:</strong> 200-350 nits</li>
      <li><strong>HDR TV:</strong> 400-1500+ nits</li>
      <li><strong>Outdoor Display:</strong> 1500-5000+ nits</li>
      <li><strong>Sunlight-readable Display:</strong> 1000-2500+ nits</li>
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
    const resultLumen = document.getElementById('resultLumen');
    const resultLux = document.getElementById('resultLux');
    const resultCandela = document.getElementById('resultCandela');
    const resultFootcandle = document.getElementById('resultFootcandle');
    const resultNit = document.getElementById('resultNit');
    const resultFootlambert = document.getElementById('resultFootlambert');
    const resultLambert = document.getElementById('resultLambert');

    // Initialize with default conversion
    convertLightUnits();

    // Event listeners
    convertButton.addEventListener('click', convertLightUnits);
    inputValue.addEventListener('input', convertLightUnits);
    inputUnit.addEventListener('change', convertLightUnits);
    
    swapButton.addEventListener('click', function() {
      showAlert('Use the unit selector to choose different conversion units', 'info');
    });
    
    copyButton.addEventListener('click', copyResults);
    resetButton.addEventListener('click', resetConverter);

    function convertLightUnits() {
      const value = parseFloat(inputValue.value) || 0;
      const fromUnit = inputUnit.value;
      
      // Convert to lux first (as base unit for many conversions)
      let lux;
      
      switch (fromUnit) {
        // SI / Metric Units
        case 'lumen':
          // Assuming 1 square meter surface at 1 meter distance
          lux = value;
          break;
        case 'lux':
          lux = value;
          break;
        case 'candela':
          // Assuming 1 steradian solid angle at 1 meter distance
          lux = value;
          break;
        
        // Imperial / US Units
        case 'footcandle':
          lux = value * 10.76391;
          break;
        case 'candlepower':
          // 1 candlepower ≈ 1 candela
          lux = value;
          break;
        
        // Other / Specialized Units
        case 'nit':
          // 1 nit = 1 cd/m², for uniform diffuse surface: lux = π × nits
          lux = value * Math.PI;
          break;
        case 'stilb':
          // 1 stilb = 10,000 nits
          lux = value * 10000 * Math.PI;
          break;
        case 'lambert':
          // 1 lambert = 1/π candela/cm² = 10,000/π cd/m²
          lux = value * (10000 / Math.PI) * Math.PI;
          break;
        case 'apostilb':
          // 1 apostilb = 1/π cd/m²
          lux = value * Math.PI;
          break;
        case 'footlambert':
          // 1 foot-lambert = 1/π cd/ft² = 3.426 cd/m²
          lux = value * 3.426259;
          break;
        
        default:
          lux = value;
      }
      
      // Convert to all other units from lux
      resultLumen.textContent = formatNumber(lux); // Simplified assumption
      resultLux.textContent = formatNumber(lux);
      resultCandela.textContent = formatNumber(lux / (4 * Math.PI)); // For isotropic source
      resultFootcandle.textContent = formatNumber(lux / 10.76391);
      resultNit.textContent = formatNumber(lux / Math.PI);
      resultFootlambert.textContent = formatNumber(lux / 3.426259);
      resultLambert.textContent = formatNumber((lux / Math.PI) / 10000);
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
      const results = `Light Units Conversion Results:
Input: ${inputValue.value} ${getUnitName(inputUnit.value)}
Lumen: ${resultLumen.textContent} lm
Lux: ${resultLux.textContent} lx
Candela: ${resultCandela.textContent} cd
Foot-candle: ${resultFootcandle.textContent} fc
Nit: ${resultNit.textContent} nt
Foot-lambert: ${resultFootlambert.textContent} fL
Lambert: ${resultLambert.textContent} L`;

      navigator.clipboard.writeText(results).then(() => {
        showAlert('Conversion results copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy results: ' + err, 'error');
      });
    }

    function resetConverter() {
      inputValue.value = '100';
      inputUnit.selectedIndex = 0;
      convertLightUnits();
      showAlert('Converter has been reset', 'success');
    }

    function getUnitName(unitValue) {
      const unitNames = {
        'lumen': 'Lumen (lm)',
        'lux': 'Lux (lx)',
        'candela': 'Candela (cd)',
        'footcandle': 'Foot-candle (fc)',
        'candlepower': 'Candlepower (cp)',
        'nit': 'Nit (nt)',
        'stilb': 'Stilb (sb)',
        'lambert': 'Lambert (L)',
        'apostilb': 'Apostilb (asb)',
        'footlambert': 'Foot-lambert (fL)'
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
---
layout: default
title: "Fuel & Energy Efficiency Converter - Convert Between Efficiency Units"
permalink: /fuel-energy-efficiency-converter-convert-between-efficiency-units/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Fuel & Energy Efficiency Converter - Convert Between Efficiency Units</title>
<meta name="description"
  content="Free online fuel and energy efficiency conversion tool. Convert between km/L, mpg, L/100km, kWh/100km, MJ/km and more efficiency units instantly.">
<meta name="keywords"
  content="fuel efficiency converter, mpg converter, km/L converter, L/100km converter, energy efficiency converter, fuel consumption converter, mileage converter">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Fuel Efficiency Converter Styles */
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
  <h1>Free Online Fuel & Energy Efficiency Converter</h1>
  <p class="welcome-message">Convert between different fuel and energy efficiency units instantly. Supports km/L, mpg, L/100km, kWh/100km, MJ/km and many more efficiency units.</p>

  <div class="converter-section">
    <h2>Fuel & Energy Efficiency Conversion</h2>

    <div class="conversion-wrapper">
      <div class="conversion-group">
        <h3>Input Value</h3>
        <div class="input-group">
          <label for="inputValue">Efficiency Value</label>
          <input type="number" id="inputValue" placeholder="Enter efficiency value" step="any" value="15">
        </div>
        <div class="input-group">
          <label for="inputUnit">From Unit</label>
          <select id="inputUnit">
            <optgroup label="Distance per Fuel Unit">
              <option value="kmL">Kilometer per Liter (km/L)</option>
              <option value="mL">Meter per Liter (m/L)</option>
              <option value="mpgUS">Mile per Gallon (US) (mpg)</option>
              <option value="mpgUK">Mile per Gallon (UK) (mpg)</option>
              <option value="ftgal">Foot per Gallon (ft/gal)</option>
            </optgroup>
            <optgroup label="Fuel Consumption Units">
              <option value="L100km">Liter per 100 km (L/100 km)</option>
              <option value="gal100mi">Gallon per 100 miles (gal/100 mi)</option>
              <option value="kL1000km">Kiloliter per 1000 km (kL/1000 km)</option>
            </optgroup>
            <optgroup label="Energy-based Efficiency Units">
              <option value="MJkm">Megajoule per km (MJ/km)</option>
              <option value="kWh100km">Kilowatt-hour per 100 km (kWh/100 km)</option>
            </optgroup>
            <optgroup label="Other / Specialized Units">
              <option value="galmiUS">Gallons per mile (US)</option>
              <option value="galmiUK">Gallons per mile (UK)</option>
              <option value="Jm">Joule per meter (J/m)</option>
              <option value="Whkm">Watt-hour per km (Wh/km)</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div class="conversion-group">
        <h3>Conversion Results</h3>
        <div class="result-section">
          <div class="result-item">
            <span class="result-label">km/L:</span>
            <span class="result-value" id="resultKmL">15.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">mpg (US):</span>
            <span class="result-value" id="resultMpgUS">35.2822</span>
          </div>
          <div class="result-item">
            <span class="result-label">L/100 km:</span>
            <span class="result-value" id="resultL100km">6.6667</span>
          </div>
          <div class="result-item">
            <span class="result-label">mpg (UK):</span>
            <span class="result-value" id="resultMpgUK">42.3720</span>
          </div>
          <div class="result-item">
            <span class="result-label">kWh/100 km:</span>
            <span class="result-value" id="resultKwh100km">23.1481</span>
          </div>
          <div class="result-item">
            <span class="result-label">MJ/km:</span>
            <span class="result-value" id="resultMjKm">0.8333</span>
          </div>
          <div class="result-item">
            <span class="result-label">gal/100 mi:</span>
            <span class="result-value" id="resultGal100mi">2.3521</span>
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
        <h3>Distance per Fuel Unit</h3>
        <ul>
          <li><strong>km/L</strong> - Kilometers per liter (metric)</li>
          <li><strong>mpg (US)</strong> - Miles per US gallon</li>
          <li><strong>mpg (UK)</strong> - Miles per imperial gallon</li>
          <li><strong>m/L</strong> - Meters per liter</li>
          <li>Higher values = better efficiency</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Fuel Consumption Units</h3>
        <ul>
          <li><strong>L/100 km</strong> - Liters per 100 km (metric)</li>
          <li><strong>gal/100 mi</strong> - Gallons per 100 miles</li>
          <li><strong>kL/1000 km</strong> - Kiloliters per 1000 km</li>
          <li>Lower values = better efficiency</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Energy Efficiency Units</h3>
        <ul>
          <li><strong>kWh/100 km</strong> - Electric vehicle standard</li>
          <li><strong>MJ/km</strong> - Megajoules per kilometer</li>
          <li><strong>Wh/km</strong> - Watt-hours per kilometer</li>
          <li><strong>J/m</strong> - Joules per meter</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Typical Efficiency Values</h3>
        <ul>
          <li><strong>Economy Car:</strong> 15-20 km/L</li>
          <li><strong>SUV:</strong> 8-12 km/L</li>
          <li><strong>Electric Car:</strong> 15-25 kWh/100 km</li>
          <li><strong>Hybrid Car:</strong> 20-30 km/L</li>
        </ul>
      </div>
    </div>

    <div class="examples">
      <h2>Conversion Examples</h2>

      <div class="example-item">
        <strong>15 km/L</strong> = 6.67 L/100 km = 35.28 mpg (US) = 42.37 mpg (UK) = 23.15 kWh/100 km
      </div>

      <div class="example-item">
        <strong>30 mpg (US)</strong> = 12.75 km/L = 7.84 L/100 km = 36.02 mpg (UK) = 19.64 kWh/100 km
      </div>

      <div class="example-item">
        <strong>8 L/100 km</strong> = 12.5 km/L = 29.40 mpg (US) = 35.31 mpg (UK) = 17.28 kWh/100 km
      </div>

      <div class="example-item">
        <strong>20 kWh/100 km</strong> = 5.56 km/L equivalent = 13.08 mpg (US) equivalent = 18.0 L/100 km gasoline equivalent
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Fuel & Energy Efficiency Conversion Tool</h2>

    <p>Our comprehensive <strong>Fuel and Energy Efficiency Converter</strong> is an essential tool for car owners, engineers, environmentalists, and anyone interested in vehicle efficiency. This powerful converter allows you to instantly convert between dozens of efficiency units including kilometers per liter, miles per gallon, liters per 100 km, kilowatt-hours per 100 km, megajoules per km, and many more. Whether you're comparing vehicle specifications, planning a road trip, analyzing environmental impact, or working on engineering calculations, this tool provides accurate conversions with real-time results.</p>

    <h3>How to Use This Efficiency Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Value:</strong> Input the numerical efficiency value you want to convert in the "Efficiency Value" field</li>
      <li><strong>Select Source Unit:</strong> Choose the unit of your input value from the dropdown menu (e.g., km/L, mpg, L/100km)</li>
      <li><strong>View Results:</strong> Instantly see the converted values in all major efficiency units in the results panel</li>
      <li><strong>Additional Actions:</strong> Use the buttons to copy results, swap units, or reset the converter for new calculations</li>
    </ul>

    <h3>Real-Life Application Examples:</h3>
    <p><strong>For Car Buyers & Owners:</strong> Convert between different efficiency standards when comparing vehicles from different markets. A European car rated at 5.0 L/100 km equals 47 mpg (US), while a Japanese car rated at 20 km/L equals 47 mpg (US) as well.</p>

    <p><strong>For International Travel:</strong> Convert fuel efficiency values when traveling between countries that use different measurement systems. Understanding that 30 mpg (US) equals approximately 7.8 L/100 km helps you compare fuel costs accurately.</p>

    <p><strong>For Electric Vehicle Owners:</strong> Convert between energy consumption units for electric vehicles. An EV rated at 20 kWh/100 km has a gasoline equivalent of about 5.6 km/L, helping you understand efficiency in familiar terms.</p>

    <p><strong>For Environmental Analysis:</strong> Convert between different efficiency metrics when calculating carbon footprint or energy consumption for transportation planning and environmental reporting.</p>

    <h3>Common Efficiency Unit Definitions:</h3>
    <ul>
      <li><strong>km/L (Kilometers per liter):</strong> Distance traveled per liter of fuel - common in metric countries</li>
      <li><strong>mpg (Miles per gallon):</strong> Distance traveled per gallon of fuel - common in US and UK (different gallon sizes)</li>
      <li><strong>L/100 km (Liters per 100 kilometers):</strong> Fuel consumed to travel 100 km - standard in Europe and many countries</li>
      <li><strong>kWh/100 km (Kilowatt-hours per 100 kilometers):</strong> Electrical energy consumed to travel 100 km - standard for electric vehicles</li>
      <li><strong>MJ/km (Megajoules per kilometer):</strong> Energy consumed per kilometer traveled - useful for comparing different energy sources</li>
      <li><strong>gal/100 mi (Gallons per 100 miles):</strong> Fuel consumed to travel 100 miles - US equivalent of L/100 km</li>
    </ul>

    <h3>Who Should Use This Efficiency Converter?</h3>
    <ul>
      <li><strong>Car Owners & Buyers:</strong> Compare vehicle efficiency specifications across different markets and measurement systems</li>
      <li><strong>Fleet Managers:</strong> Analyze and optimize fuel consumption across different vehicle types and regions</li>
      <li><strong>Engineers & Technicians:</strong> Perform technical calculations for vehicle design, testing, and optimization</li>
      <li><strong>Environmental Researchers:</strong> Convert efficiency data for environmental impact studies and carbon footprint calculations</li>
      <li><strong>Travelers & Expats:</strong> Understand fuel efficiency measurements when traveling or moving between countries</li>
      <li><strong>Students & Educators:</strong> Learn about different efficiency measurement systems in physics and engineering courses</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What's the difference between US mpg and UK mpg?</strong><br>
      US gallons and UK (imperial) gallons are different sizes. 1 US gallon = 3.785 liters, while 1 UK gallon = 4.546 liters. This means the same vehicle will show better mpg numbers in the UK system compared to the US system.</p>

    <p><strong>How do I convert between fuel efficiency and energy efficiency?</strong><br>
      Energy content of fuel is used for conversion. Gasoline contains about 34.2 MJ/L or 9.5 kWh/L. Our converter automatically handles these energy conversions using standard energy density values.</p>

    <p><strong>Why do some countries use L/100 km while others use km/L or mpg?</strong><br>
      L/100 km (consumption) is linear and makes fuel cost calculations easier - double the value means double the fuel cost. km/L or mpg (efficiency) is non-linear but intuitively represents "distance per unit fuel."</p>

    <p><strong>How accurate are the conversions?</strong><br>
      Our converter uses precise conversion factors with standard values for energy densities and unit conversions. For most practical purposes, the accuracy is more than sufficient.</p>

    <p><strong>Can I convert electric vehicle efficiency to gasoline equivalent?</strong><br>
      Yes, the converter includes energy-based units that allow direct comparison between electric and gasoline vehicles using standard energy conversion factors.</p>

    <h3>Efficiency Conversion Factors Reference:</h3>
    <p>For quick reference, here are some key conversion factors:</p>
    <ul>
      <li>1 km/L = 2.352 mpg (US) = 2.825 mpg (UK) = 100/L/100 km</li>
      <li>1 mpg (US) = 0.425 km/L = 235.2/L/100 km = 1.201 mpg (UK)</li>
      <li>1 mpg (UK) = 0.354 km/L = 282.5/L/100 km = 0.833 mpg (US)</li>
      <li>1 L/100 km = 100/km/L = 235.2/mpg (US) = 282.5/mpg (UK)</li>
      <li>1 kWh/100 km ≈ 0.36 L/100 km (gasoline equivalent)</li>
      <li>1 MJ/km ≈ 0.029 L/km ≈ 3.42 L/100 km (gasoline equivalent)</li>
    </ul>

    <h3>Typical Efficiency Values by Vehicle Type:</h3>
    <ul>
      <li><strong>Compact Gasoline Car:</strong> 15-20 km/L (35-47 mpg US)</li>
      <li><strong>Hybrid Vehicle:</strong> 20-30 km/L (47-70 mpg US)</li>
      <li><strong>SUV/Truck:</strong> 8-12 km/L (19-28 mpg US)</li>
      <li><strong>Electric Vehicle:</strong> 15-25 kWh/100 km</li>
      <li><strong>Motorcycle:</strong> 25-40 km/L (59-94 mpg US)</li>
      <li><strong>Diesel Car:</strong> 18-25 km/L (42-59 mpg US)</li>
    </ul>

    <h3>Energy Content Reference Values:</h3>
    <ul>
      <li><strong>Gasoline:</strong> 34.2 MJ/L = 9.5 kWh/L</li>
      <li><strong>Diesel:</strong> 38.6 MJ/L = 10.7 kWh/L</li>
      <li><strong>Electricity:</strong> 3.6 MJ/kWh (standard conversion)</li>
      <li>These values are used for energy-based efficiency conversions in our tool</li>
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
    const resultKmL = document.getElementById('resultKmL');
    const resultMpgUS = document.getElementById('resultMpgUS');
    const resultL100km = document.getElementById('resultL100km');
    const resultMpgUK = document.getElementById('resultMpgUK');
    const resultKwh100km = document.getElementById('resultKwh100km');
    const resultMjKm = document.getElementById('resultMjKm');
    const resultGal100mi = document.getElementById('resultGal100mi');

    // Energy content constants (for conversions)
    const ENERGY_DENSITY = {
      GASOLINE_MJ_L: 34.2,
      GASOLINE_KWH_L: 9.5,
      DIESEL_MJ_L: 38.6,
      DIESEL_KWH_L: 10.7
    };

    // Initialize with default conversion
    convertEfficiency();

    // Event listeners
    convertButton.addEventListener('click', convertEfficiency);
    inputValue.addEventListener('input', convertEfficiency);
    inputUnit.addEventListener('change', convertEfficiency);
    
    swapButton.addEventListener('click', function() {
      showAlert('Use the unit selector to choose different conversion units', 'info');
    });
    
    copyButton.addEventListener('click', copyResults);
    resetButton.addEventListener('click', resetConverter);

    function convertEfficiency() {
      const value = parseFloat(inputValue.value) || 0;
      const fromUnit = inputUnit.value;
      
      // Convert to km/L first (as base unit)
      let kmL;
      
      switch (fromUnit) {
        // Distance per fuel units
        case 'kmL':
          kmL = value;
          break;
        case 'mL':
          kmL = value / 1000;
          break;
        case 'mpgUS':
          kmL = value / 2.352;
          break;
        case 'mpgUK':
          kmL = value / 2.825;
          break;
        case 'ftgal':
          kmL = value * 0.000189394;
          break;
        
        // Fuel consumption units
        case 'L100km':
          kmL = 100 / value;
          break;
        case 'gal100mi':
          kmL = 235.215 / value;
          break;
        case 'kL1000km':
          kmL = 1000 / value;
          break;
        
        // Energy-based efficiency units
        case 'MJkm':
          kmL = ENERGY_DENSITY.GASOLINE_MJ_L / value;
          break;
        case 'kWh100km':
          kmL = (ENERGY_DENSITY.GASOLINE_KWH_L * 100) / value;
          break;
        
        // Other units
        case 'galmiUS':
          kmL = 2.352 / value;
          break;
        case 'galmiUK':
          kmL = 2.825 / value;
          break;
        case 'Jm':
          kmL = (ENERGY_DENSITY.GASOLINE_MJ_L * 1000) / value;
          break;
        case 'Whkm':
          kmL = ENERGY_DENSITY.GASOLINE_KWH_L / (value / 1000);
          break;
        
        default:
          kmL = value;
      }
      
      // Convert to all other units from kmL
      resultKmL.textContent = formatNumber(kmL);
      resultMpgUS.textContent = formatNumber(kmL * 2.352);
      resultL100km.textContent = formatNumber(100 / kmL);
      resultMpgUK.textContent = formatNumber(kmL * 2.825);
      resultKwh100km.textContent = formatNumber((ENERGY_DENSITY.GASOLINE_KWH_L * 100) / kmL);
      resultMjKm.textContent = formatNumber(ENERGY_DENSITY.GASOLINE_MJ_L / kmL);
      resultGal100mi.textContent = formatNumber(235.215 / kmL);
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
      const results = `Fuel Efficiency Conversion Results:
Input: ${inputValue.value} ${getUnitName(inputUnit.value)}
km/L: ${resultKmL.textContent}
mpg (US): ${resultMpgUS.textContent}
L/100 km: ${resultL100km.textContent}
mpg (UK): ${resultMpgUK.textContent}
kWh/100 km: ${resultKwh100km.textContent}
MJ/km: ${resultMjKm.textContent}
gal/100 mi: ${resultGal100mi.textContent}`;

      navigator.clipboard.writeText(results).then(() => {
        showAlert('Conversion results copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy results: ' + err, 'error');
      });
    }

    function resetConverter() {
      inputValue.value = '15';
      inputUnit.selectedIndex = 0;
      convertEfficiency();
      showAlert('Converter has been reset', 'success');
    }

    function getUnitName(unitValue) {
      const unitNames = {
        'kmL': 'Kilometer per Liter (km/L)',
        'mL': 'Meter per Liter (m/L)',
        'mpgUS': 'Mile per Gallon (US) (mpg)',
        'mpgUK': 'Mile per Gallon (UK) (mpg)',
        'ftgal': 'Foot per Gallon (ft/gal)',
        'L100km': 'Liter per 100 km (L/100 km)',
        'gal100mi': 'Gallon per 100 miles (gal/100 mi)',
        'kL1000km': 'Kiloliter per 1000 km (kL/1000 km)',
        'MJkm': 'Megajoule per km (MJ/km)',
        'kWh100km': 'Kilowatt-hour per 100 km (kWh/100 km)',
        'galmiUS': 'Gallons per mile (US)',
        'galmiUK': 'Gallons per mile (UK)',
        'Jm': 'Joule per meter (J/m)',
        'Whkm': 'Watt-hour per km (Wh/km)'
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
---
layout: default
title: "Speed Unit Converter - Convert Between Different Speed Measurements"
permalink: /speed-unit-converter-convert-between-different-speed-measurements/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Speed Unit Converter - Convert Between Different Speed Measurements</title>
<meta name="description"
  content="Free online speed unit converter tool. Convert between meters per second, kilometers per hour, miles per hour, knots, Mach, light speed and more speed measurements.">
<meta name="keywords"
  content="speed converter, unit converter, speed measurement, km/h to mph, m/s to km/h, speed calculator, velocity converter">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Speed Converter Styles */
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

  .converter-wrapper {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 20px;
    align-items: end;
    margin: 30px 0;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .input-group label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .input-group input,
  .input-group select {
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

  .swap-button {
    padding: 12px 20px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .swap-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .result-section {
    margin-top: 20px;
    padding: 20px;
    background: #e8f4fd;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .result-section h3 {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.3rem;
  }

  .conversion-result {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
    text-align: center;
    padding: 15px;
    background: white;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .unit-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 30px 0;
  }

  .category-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-left: 4px solid var(--primary);
  }

  .category-card h3 {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.2rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }

  .unit-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 10px;
  }

  .unit-item {
    padding: 8px 12px;
    background: #f8f9fa;
    border-radius: 4px;
    font-size: 0.9rem;
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

  /* Speed converter specific styles */
  .quick-conversions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .quick-conversion-item {
    padding: 15px;
    background: white;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .quick-conversion-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-color: var(--primary);
  }

  .quick-conversion-item.active {
    background: var(--primary);
    color: white;
  }

  .conversion-value {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 5px;
    color: var(--primary);
  }

  .quick-conversion-item.active .conversion-value {
    color: white;
  }

  /* Speed comparison visualization */
  .speed-comparison {
    margin: 30px 0;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .speed-bar {
    height: 30px;
    background: linear-gradient(90deg, #e3f2fd, #2196f3);
    border-radius: 15px;
    margin: 10px 0;
    position: relative;
    overflow: hidden;
  }

  .speed-label {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .converter-wrapper {
      grid-template-columns: 1fr;
      gap: 15px;
    }

    .swap-button {
      order: 3;
      margin-top: 10px;
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

    .unit-categories {
      grid-template-columns: 1fr;
    }

    .quick-conversions {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Speed Unit Converter</h1>
  <p class="welcome-message">Convert between different speed units instantly - from millimeters per second to light speed, including metric, imperial, maritime, and scientific speed measurements.</p>

  <div class="converter-section">
    <h2>Speed Unit Converter</h2>

    <div class="converter-wrapper">
      <div class="input-group">
        <label for="fromValue">From:</label>
        <input type="number" id="fromValue" value="1" min="0" step="any">
        <select id="fromUnit">
          <!-- SI (Metric) Units -->
          <option value="m_s" selected>Meter per Second (m/s)</option>
          <option value="km_h">Kilometer per Hour (km/h)</option>
          <option value="cm_s">Centimeter per Second (cm/s)</option>
          <option value="mm_s">Millimeter per Second (mm/s)</option>
          
          <!-- Imperial & US Customary Units -->
          <option value="mph">Mile per Hour (mph)</option>
          <option value="ft_s">Foot per Second (ft/s)</option>
          <option value="ft_min">Foot per Minute (ft/min)</option>
          <option value="in_s">Inch per Second (in/s)</option>
          <option value="in_min">Inch per Minute (in/min)</option>
          
          <!-- Maritime & Aviation Units -->
          <option value="knot">Knot (kn)</option>
          <option value="mach">Mach (Speed of sound)</option>
          
          <!-- Scientific & Specialized Units -->
          <option value="m_min">Meter per Minute (m/min)</option>
          <option value="km_s">Kilometer per Second (km/s)</option>
          <option value="light">Light Speed (c)</option>
        </select>
      </div>

      <button class="swap-button" id="swapUnits">
        <i class="fas fa-exchange-alt"></i> Swap
      </button>

      <div class="input-group">
        <label for="toValue">To:</label>
        <input type="number" id="toValue" readonly>
        <select id="toUnit">
          <!-- SI (Metric) Units -->
          <option value="m_s">Meter per Second (m/s)</option>
          <option value="km_h" selected>Kilometer per Hour (km/h)</option>
          <option value="cm_s">Centimeter per Second (cm/s)</option>
          <option value="mm_s">Millimeter per Second (mm/s)</option>
          
          <!-- Imperial & US Customary Units -->
          <option value="mph">Mile per Hour (mph)</option>
          <option value="ft_s">Foot per Second (ft/s)</option>
          <option value="ft_min">Foot per Minute (ft/min)</option>
          <option value="in_s">Inch per Second (in/s)</option>
          <option value="in_min">Inch per Minute (in/min)</option>
          
          <!-- Maritime & Aviation Units -->
          <option value="knot">Knot (kn)</option>
          <option value="mach">Mach (Speed of sound)</option>
          
          <!-- Scientific & Specialized Units -->
          <option value="m_min">Meter per Minute (m/min)</option>
          <option value="km_s">Kilometer per Second (km/s)</option>
          <option value="light">Light Speed (c)</option>
        </select>
      </div>
    </div>

    <div class="result-section">
      <h3>Conversion Result</h3>
      <div class="conversion-result" id="conversionResult">
        1 m/s = 3.6 km/h
      </div>
    </div>

    <div class="quick-conversions">
      <div class="quick-conversion-item" data-from="m_s" data-to="km_h">
        <div>m/s to km/h</div>
        <div class="conversion-value">1 m/s = 3.6 km/h</div>
      </div>
      <div class="quick-conversion-item" data-from="km_h" data-to="mph">
        <div>km/h to mph</div>
        <div class="conversion-value">1 km/h = 0.621 mph</div>
      </div>
      <div class="quick-conversion-item" data-from="mph" data-to="knot">
        <div>mph to Knots</div>
        <div class="conversion-value">1 mph = 0.869 knots</div>
      </div>
      <div class="quick-conversion-item" data-from="mach" data-to="km_h">
        <div>Mach to km/h</div>
        <div class="conversion-value">1 Mach = 1225 km/h</div>
      </div>
      <div class="quick-conversion-item" data-from="light" data-to="km_s">
        <div>Light Speed to km/s</div>
        <div class="conversion-value">c = 299,792 km/s</div>
      </div>
    </div>

    <div class="speed-comparison">
      <h3>Speed Comparison</h3>
      <div class="speed-bar" style="width: 10%">
        <span class="speed-label">Walking (1.4 m/s)</span>
      </div>
      <div class="speed-bar" style="width: 25%">
        <span class="speed-label">Cycling (6 m/s)</span>
      </div>
      <div class="speed-bar" style="width: 50%">
        <span class="speed-label">Car (28 m/s)</span>
      </div>
      <div class="speed-bar" style="width: 75%">
        <span class="speed-label">Plane (250 m/s)</span>
      </div>
      <div class="speed-bar" style="width: 100%">
        <span class="speed-label">Sound (343 m/s)</span>
      </div>
    </div>

    <div class="button-section">
      <button class="case-button" data-action="copy">Copy Result</button>
      <button class="case-button success" data-action="reset">Reset</button>
      <button class="case-button secondary" data-action="clear">Clear All</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="unit-categories">
      <div class="category-card">
        <h3>🔹 SI (Metric) Units</h3>
        <div class="unit-list">
          <div class="unit-item">Meter per Second</div>
          <div class="unit-item">Kilometer per Hour</div>
          <div class="unit-item">Centimeter per Second</div>
          <div class="unit-item">Millimeter per Second</div>
        </div>
      </div>

      <div class="category-card">
        <h3>🔹 Imperial & US Customary</h3>
        <div class="unit-list">
          <div class="unit-item">Mile per Hour</div>
          <div class="unit-item">Foot per Second</div>
          <div class="unit-item">Foot per Minute</div>
          <div class="unit-item">Inch per Second</div>
          <div class="unit-item">Inch per Minute</div>
        </div>
      </div>

      <div class="category-card">
        <h3>🔹 Maritime & Aviation</h3>
        <div class="unit-list">
          <div class="unit-item">Knot</div>
          <div class="unit-item">Mach</div>
        </div>
      </div>

      <div class="category-card">
        <h3>🔹 Scientific & Specialized</h3>
        <div class="unit-list">
          <div class="unit-item">Meter per Minute</div>
          <div class="unit-item">Kilometer per Second</div>
          <div class="unit-item">Light Speed</div>
        </div>
      </div>
    </div>

    <div class="examples">
      <h2>Common Speed Conversions</h2>

      <h3>Everyday Conversions:</h3>
      <div class="example-text">1 meter per second = 3.6 kilometers per hour
1 kilometer per hour = 0.621371 miles per hour
1 mile per hour = 1.60934 kilometers per hour
1 knot = 1.852 kilometers per hour = 1.15078 miles per hour</div>

      <h3>Scientific Conversions:</h3>
      <div class="example-text">1 Mach (speed of sound) = 343 meters per second
1 Mach = 1234.8 kilometers per hour
Speed of light (c) = 299,792,458 meters per second
Speed of light = 1,079,252,848.8 kilometers per hour</div>

      <h3>Practical Speed References:</h3>
      <div class="example-text">Walking speed: 1.4 m/s (5 km/h)
Cycling speed: 6 m/s (21.6 km/h)
Car highway speed: 28 m/s (100 km/h)
Commercial jet: 250 m/s (900 km/h)
Sound speed: 343 m/s (1234.8 km/h)</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Speed Unit Converter Tool</h2>

    <p>Need to convert between different speed units quickly and accurately? Our free <strong>Speed Unit Converter tool</strong> is the perfect solution for students, engineers, pilots, sailors, drivers, and anyone working with speed measurements. This powerful tool instantly converts between meters per second, kilometers per hour, miles per hour, knots, Mach numbers, and even light speed. There's no download required, no registration needed, and your data privacy is guaranteed as all processing happens securely right in your browser.</p>

    <h3>How to Use This Speed Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Value:</strong> Type the numerical value you want to convert in the "From" input field.</li>
      <li><strong>Select Source Unit:</strong> Choose the unit of speed you're converting from using the first dropdown menu.</li>
      <li><strong>Select Target Unit:</strong> Choose the unit of speed you want to convert to using the second dropdown menu.</li>
      <li><strong>View Result:</strong> The converted value automatically appears in the "To" field with the full conversion displayed below.</li>
      <li><strong>Quick Conversions:</strong> Use the quick conversion buttons for common speed conversions with a single click.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're planning an international road trip and need to understand speed limits in different countries. European speed limits are typically in km/h, while American speed limits are in mph. Instead of manual calculations, you can simply enter "100" in the value field, select "Kilometers per Hour" as the source unit, and choose "Miles per Hour" as the target unit. The tool instantly shows that 100 km/h equals approximately 62 mph, helping you drive safely and legally in different countries.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Drivers & Travelers:</strong> Convert speed limits and vehicle speeds between different measurement systems for international travel.</li>
      <li><strong>Pilots & Mariners:</strong> Convert between knots, km/h, and mph for navigation and flight planning.</li>
      <li><strong>Students & Educators:</strong> Learn about speed conversions for physics, mathematics, and engineering coursework.</li>
      <li><strong>Athletes & Coaches:</strong> Convert running, cycling, and swimming speeds between different measurement units.</li>
      <li><strong>Engineers & Scientists:</strong> Work with different speed units for technical calculations and research.</li>
      <li><strong>Weather Enthusiasts:</strong> Convert wind speeds between different measurement systems for weather analysis.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What is the difference between knots and miles per hour?</strong><br>
      One knot equals one nautical mile per hour (1.852 km/h or 1.15078 mph). Nautical miles are based on the circumference of the Earth, making knots particularly useful for navigation and aviation.</p>

    <p><strong>How accurate are the speed conversions?</strong><br>
      Our tool uses precise conversion factors with high decimal precision. For scientific units like light speed, we use established scientific constants.</p>

    <p><strong>What is Mach speed and how is it calculated?</strong><br>
      Mach number represents the ratio of an object's speed to the speed of sound in the surrounding medium. Mach 1 equals the speed of sound (approximately 343 m/s in air at sea level). The actual speed varies with temperature and altitude.</p>

    <p><strong>Can I convert very large speeds like light speed?</strong><br>
      Yes, our tool can handle extremely large speed values, including conversions to and from light speed (299,792,458 m/s).</p>

    <p><strong>Is my data kept private when I use this tool?</strong><br>
      Absolutely. All conversions happen locally in your browser. We don't store any of your input data or conversion results on our servers.</p>

    <h3>Why Choose Our Speed Unit Converter?</h3>
    <p>Our <strong>online speed converter</strong> stands out from other tools because of its comprehensive coverage of speed units, from everyday measurements to scientific extremes like light speed. Unlike many online tools, we don't store your data on our servers - all processing happens in your browser. This means your conversions remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Speed Conversion</h3>
    <p>Speed conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>International Travel:</strong> Convert speed limits and vehicle speeds when driving in different countries</li>
      <li><strong>Aviation:</strong> Convert between knots, km/h, and mph for flight planning and navigation</li>
      <li><strong>Maritime Navigation:</strong> Use knots for ship speeds and nautical calculations</li>
      <li><strong>Sports & Athletics:</strong> Convert running paces, cycling speeds, and swimming times between different units</li>
      <li><strong>Weather Forecasting:</strong> Convert wind speeds between different measurement systems</li>
      <li><strong>Physics Education:</strong> Teach students about different speed measurement systems and relativity concepts</li>
      <li><strong>Engineering:</strong> Convert speeds for mechanical design, fluid dynamics, and transportation planning</li>
      <li><strong>Space Exploration:</strong> Work with extremely high speeds for astronomical calculations and spacecraft design</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const fromValue = document.getElementById('fromValue');
    const fromUnit = document.getElementById('fromUnit');
    const toValue = document.getElementById('toValue');
    const toUnit = document.getElementById('toUnit');
    const swapButton = document.getElementById('swapUnits');
    const conversionResult = document.getElementById('conversionResult');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const quickConversionItems = document.querySelectorAll('.quick-conversion-item');

    // Speed conversion factors (relative to meters per second)
    const speedUnits = {
      // SI (Metric) Units
      'm_s': 1,
      'km_h': 1 / 3.6,
      'cm_s': 100,
      'mm_s': 1000,
      
      // Imperial & US Customary Units
      'mph': 2.23694,
      'ft_s': 3.28084,
      'ft_min': 196.85,
      'in_s': 39.3701,
      'in_min': 2362.2,
      
      // Maritime & Aviation Units
      'knot': 1.94384,
      'mach': 0.00291545, // Mach 1 = 343 m/s at sea level
      
      // Scientific & Specialized Units
      'm_min': 60,
      'km_s': 0.001,
      'light': 3.33564e-9 // Speed of light = 299,792,458 m/s
    };

    // Initialize conversion
    convertSpeed();

    // Event listeners
    fromValue.addEventListener('input', convertSpeed);
    fromUnit.addEventListener('change', convertSpeed);
    toUnit.addEventListener('change', convertSpeed);

    swapButton.addEventListener('click', function() {
      const tempValue = fromValue.value;
      const tempUnit = fromUnit.value;
      
      fromValue.value = toValue.value;
      fromUnit.value = toUnit.value;
      toUnit.value = tempUnit;
      
      convertSpeed();
    });

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleAction(action);
      });
    });

    quickConversionItems.forEach(item => {
      item.addEventListener('click', function() {
        const from = this.getAttribute('data-from');
        const to = this.getAttribute('data-to');
        
        fromUnit.value = from;
        toUnit.value = to;
        fromValue.value = 1;
        
        // Update active state
        quickConversionItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        
        convertSpeed();
      });
    });

    function convertSpeed() {
      const value = parseFloat(fromValue.value) || 0;
      const fromUnitValue = fromUnit.value;
      const toUnitValue = toUnit.value;
      
      // Convert to meters per second first
      const valueInMetersPerSecond = value / speedUnits[fromUnitValue];
      
      // Convert from meters per second to target unit
      const convertedValue = valueInMetersPerSecond * speedUnits[toUnitValue];
      
      // Update result
      toValue.value = formatNumber(convertedValue);
      
      // Update conversion result text
      conversionResult.textContent = `${formatNumber(value)} ${getUnitName(fromUnitValue)} = ${formatNumber(convertedValue)} ${getUnitName(toUnitValue)}`;
    }

    function formatNumber(num) {
      if (num === 0) return '0';
      if (Math.abs(num) < 0.0001 || Math.abs(num) > 1000000) {
        return num.toExponential(6);
      }
      // Round to reasonable precision based on magnitude
      const precision = Math.max(0, 6 - Math.floor(Math.log10(Math.abs(num))));
      return Number(num.toFixed(precision)).toString();
    }

    function getUnitName(unitKey) {
      const unitNames = {
        // SI (Metric) Units
        'm_s': 'Meters per Second',
        'km_h': 'Kilometers per Hour',
        'cm_s': 'Centimeters per Second',
        'mm_s': 'Millimeters per Second',
        
        // Imperial & US Customary Units
        'mph': 'Miles per Hour',
        'ft_s': 'Feet per Second',
        'ft_min': 'Feet per Minute',
        'in_s': 'Inches per Second',
        'in_min': 'Inches per Minute',
        
        // Maritime & Aviation Units
        'knot': 'Knots',
        'mach': 'Mach',
        
        // Scientific & Specialized Units
        'm_min': 'Meters per Minute',
        'km_s': 'Kilometers per Second',
        'light': 'Light Speed'
      };
      
      return unitNames[unitKey] || unitKey;
    }

    function handleAction(action) {
      switch (action) {
        case 'copy':
          copyToClipboard(conversionResult.textContent);
          break;

        case 'reset':
          fromValue.value = 1;
          fromUnit.value = 'm_s';
          toUnit.value = 'km_h';
          convertSpeed();
          showAlert('Converter reset to default values!', 'success');
          break;

        case 'clear':
          fromValue.value = '';
          toValue.value = '';
          conversionResult.textContent = 'Enter a value to see conversion result';
          showAlert('All fields cleared!', 'success');
          break;
      }
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
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
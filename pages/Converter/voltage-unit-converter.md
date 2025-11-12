---
layout: default
title: "Voltage Unit Converter - Convert Between Different Voltage Measurements"
permalink: /voltage-unit-converter-convert-between-different-voltage-measurements/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Voltage Unit Converter - Convert Between Different Voltage Measurements</title>
<meta name="description"
  content="Free online voltage unit converter tool. Convert between volts, millivolts, microvolts, kilovolts, megavolts, gigavolts and more voltage measurements.">
<meta name="keywords"
  content="voltage converter, unit converter, voltage measurement, volts to millivolts, kilovolts to volts, voltage calculator, electrical converter">
<meta name="author" content="Par,dip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Voltage Converter Styles */
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

  /* Voltage converter specific styles */
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

  /* Voltage level visualization */
  .voltage-levels {
    margin: 30px 0;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .voltage-level {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 5px 0;
    border-radius: 4px;
    font-weight: 500;
  }

  .low-voltage {
    background: #e8f5e8;
    color: #2e7d32;
  }

  .medium-voltage {
    background: #fff3e0;
    color: #ef6c00;
  }

  .high-voltage {
    background: #ffebee;
    color: #c62828;
  }

  .extreme-voltage {
    background: #f3e5f5;
    color: #7b1fa2;
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
  <h1>Free Online Voltage Unit Converter</h1>
  <p class="welcome-message">Convert between different voltage units instantly - from microvolts to gigavolts, including standard electrical units and specialized CGS system measurements.</p>

  <div class="converter-section">
    <h2>Voltage Unit Converter</h2>

    <div class="converter-wrapper">
      <div class="input-group">
        <label for="fromValue">From:</label>
        <input type="number" id="fromValue" value="1" min="0" step="any">
        <select id="fromUnit">
          <!-- Standard Electrical Units -->
          <option value="V" selected>Volt (V)</option>
          <option value="mV">Millivolt (mV)</option>
          <option value="μV">Microvolt (µV)</option>
          <option value="kV">Kilovolt (kV)</option>
          <option value="MV">Megavolt (MV)</option>
          
          <!-- Derived or Related Units -->
          <option value="GV">Gigavolt (GV)</option>
          <option value="nV">Nanovolt (nV)</option>
          <option value="abV">Abvolt (abV)</option>
          <option value="statV">Statvolt (statV)</option>
        </select>
      </div>

      <button class="swap-button" id="swapUnits">
        <i class="fas fa-exchange-alt"></i> Swap
      </button>

      <div class="input-group">
        <label for="toValue">To:</label>
        <input type="number" id="toValue" readonly>
        <select id="toUnit">
          <!-- Standard Electrical Units -->
          <option value="V">Volt (V)</option>
          <option value="mV" selected>Millivolt (mV)</option>
          <option value="μV">Microvolt (µV)</option>
          <option value="kV">Kilovolt (kV)</option>
          <option value="MV">Megavolt (MV)</option>
          
          <!-- Derived or Related Units -->
          <option value="GV">Gigavolt (GV)</option>
          <option value="nV">Nanovolt (nV)</option>
          <option value="abV">Abvolt (abV)</option>
          <option value="statV">Statvolt (statV)</option>
        </select>
      </div>
    </div>

    <div class="result-section">
      <h3>Conversion Result</h3>
      <div class="conversion-result" id="conversionResult">
        1 Volt = 1000 Millivolts
      </div>
    </div>

    <div class="quick-conversions">
      <div class="quick-conversion-item" data-from="V" data-to="mV">
        <div>Volts to Millivolts</div>
        <div class="conversion-value">1 V = 1000 mV</div>
      </div>
      <div class="quick-conversion-item" data-from="mV" data-to="μV">
        <div>Millivolts to Microvolts</div>
        <div class="conversion-value">1 mV = 1000 µV</div>
      </div>
      <div class="quick-conversion-item" data-from="V" data-to="kV">
        <div>Volts to Kilovolts</div>
        <div class="conversion-value">1 V = 0.001 kV</div>
      </div>
      <div class="quick-conversion-item" data-from="kV" data-to="V">
        <div>Kilovolts to Volts</div>
        <div class="conversion-value">1 kV = 1000 V</div>
      </div>
      <div class="quick-conversion-item" data-from="MV" data-to="kV">
        <div>Megavolts to Kilovolts</div>
        <div class="conversion-value">1 MV = 1000 kV</div>
      </div>
    </div>

    <div class="voltage-levels">
      <h3>Common Voltage Levels</h3>
      <div class="voltage-level low-voltage">
        <span>Low Voltage</span>
        <span>≤ 50V AC / 120V DC</span>
      </div>
      <div class="voltage-level medium-voltage">
        <span>Medium Voltage</span>
        <span>1kV - 35kV</span>
      </div>
      <div class="voltage-level high-voltage">
        <span>High Voltage</span>
        <span>35kV - 230kV</span>
      </div>
      <div class="voltage-level extreme-voltage">
        <span>Extra High Voltage</span>
        <span>> 230kV</span>
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
        <h3>Standard Electrical Units</h3>
        <div class="unit-list">
          <div class="unit-item">Volt (V)</div>
          <div class="unit-item">Millivolt (mV)</div>
          <div class="unit-item">Microvolt (µV)</div>
          <div class="unit-item">Kilovolt (kV)</div>
          <div class="unit-item">Megavolt (MV)</div>
        </div>
      </div>

      <div class="category-card">
        <h3>Derived & Specialized Units</h3>
        <div class="unit-list">
          <div class="unit-item">Gigavolt (GV)</div>
          <div class="unit-item">Nanovolt (nV)</div>
          <div class="unit-item">Abvolt (abV)</div>
          <div class="unit-item">Statvolt (statV)</div>
        </div>
      </div>

      <div class="category-card">
        <h3>Common Applications</h3>
        <div class="unit-list">
          <div class="unit-item">Batteries (1.5V-12V)</div>
          <div class="unit-item">Household (110V-240V)</div>
          <div class="unit-item">Industrial (480V)</div>
          <div class="unit-item">Transmission (kV-MV)</div>
          <div class="unit-item">Electronics (mV-µV)</div>
        </div>
      </div>
    </div>

    <div class="examples">
      <h2>Common Voltage Conversions</h2>

      <h3>Standard Electrical Conversions:</h3>
      <div class="example-text">1 volt = 1000 millivolts
1 volt = 1,000,000 microvolts
1 volt = 0.001 kilovolts
1 kilovolt = 1000 volts
1 megavolt = 1,000,000 volts</div>

      <h3>Specialized Unit Conversions:</h3>
      <div class="example-text">1 abvolt = 10⁻⁸ volts (CGS electromagnetic unit)
1 statvolt = 299.792458 volts (CGS electrostatic unit)
1 gigavolt = 1,000,000,000 volts
1 nanovolt = 10⁻⁹ volts</div>

      <h3>Practical Voltage References:</h3>
      <div class="example-text">AA Battery: 1.5 volts
Car Battery: 12 volts
USB Port: 5 volts
Household Outlet: 110-240 volts
Transmission Lines: 110-765 kilovolts
Lightning Bolt: 100+ megavolts</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Voltage Unit Converter Tool</h2>

    <p>Need to convert between different voltage units quickly and accurately? Our free <strong>Voltage Unit Converter tool</strong> is the perfect solution for electrical engineers, technicians, students, hobbyists, and anyone working with electrical measurements. This powerful tool instantly converts between volts, millivolts, microvolts, kilovolts, megavolts, and even specialized units like abvolts and statvolts from CGS systems. There's no download required, no registration needed, and your data privacy is guaranteed as all processing happens securely right in your browser.</p>

    <h3>How to Use This Voltage Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Value:</strong> Type the numerical value you want to convert in the "From" input field.</li>
      <li><strong>Select Source Unit:</strong> Choose the unit of voltage you're converting from using the first dropdown menu.</li>
      <li><strong>Select Target Unit:</strong> Choose the unit of voltage you want to convert to using the second dropdown menu.</li>
      <li><strong>View Result:</strong> The converted value automatically appears in the "To" field with the full conversion displayed below.</li>
      <li><strong>Quick Conversions:</strong> Use the quick conversion buttons for common voltage conversions with a single click.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're an electronics hobbyist working on a circuit that requires precise voltage measurements. Your multimeter shows 2.5 millivolts, but your circuit design specifications are in microvolts. Instead of manual calculations, you can simply enter "2.5" in the value field, select "Millivolts" as the source unit, and choose "Microvolts" as the target unit. The tool instantly shows that 2.5 millivolts equals 2500 microvolts, helping you verify your circuit is operating within the required specifications.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Electrical Engineers:</strong> Convert between different voltage units for circuit design, power systems, and electrical calculations.</li>
      <li><strong>Electronics Technicians:</strong> Work with millivolts and microvolts for sensitive electronic measurements and troubleshooting.</li>
      <li><strong>Students & Educators:</strong> Learn about voltage conversions for physics, electrical engineering, and electronics coursework.</li>
      <li><strong>DIY Electronics Hobbyists:</strong> Convert voltage measurements for Arduino projects, Raspberry Pi, and other electronic projects.</li>
      <li><strong>Power System Professionals:</strong> Convert between kilovolts and megavolts for transmission and distribution system analysis.</li>
      <li><strong>Research Scientists:</strong> Work with specialized units like abvolts and statvolts for theoretical physics and research applications.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What is the difference between millivolts and microvolts?</strong><br>
      One millivolt (mV) equals 0.001 volts, while one microvolt (µV) equals 0.000001 volts. There are 1000 microvolts in one millivolt. Microvolts are typically used for very small signal measurements in electronics.</p>

    <p><strong>How accurate are the voltage conversions?</strong><br>
      Our tool uses precise conversion factors with high decimal precision. For specialized CGS units, we use established scientific conversion factors.</p>

    <p><strong>What are abvolts and statvolts used for?</strong><br>
      Abvolts and statvolts are units from the CGS (centimeter-gram-second) system of units, primarily used in theoretical physics and some specialized scientific fields. Abvolts are part of the electromagnetic CGS system, while statvolts are part of the electrostatic CGS system.</p>

    <p><strong>Can I convert very large voltage values like gigavolts?</strong><br>
      Yes, our tool can handle extremely large voltage values, including conversions to and from gigavolts (1,000,000,000 volts). These are theoretical values used in high-energy physics and atmospheric electricity research.</p>

    <p><strong>Is my data kept private when I use this tool?</strong><br>
      Absolutely. All conversions happen locally in your browser. We don't store any of your input data or conversion results on our servers.</p>

    <h3>Why Choose Our Voltage Unit Converter?</h3>
    <p>Our <strong>online voltage converter</strong> stands out from other tools because of its comprehensive coverage of voltage units, from everyday electrical measurements to specialized theoretical units. Unlike many online tools, we don't store your data on our servers - all processing happens in your browser. This means your conversions remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Voltage Conversion</h3>
    <p>Voltage conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Electronics Design:</strong> Convert between volts, millivolts, and microvolts for circuit design and analysis</li>
      <li><strong>Power Distribution:</strong> Convert between kilovolts and megavolts for transmission line design and operation</li>
      <li><strong>Battery Technology:</strong> Work with different voltage units for battery specifications and performance analysis</li>
      <li><strong>Sensor Applications:</strong> Convert small signal voltages from sensors and transducers</li>
      <li><strong>Education:</strong> Teach students about different voltage measurement systems and unit conversions</li>
      <li><strong>Research:</strong> Work with specialized voltage units in physics, electrical engineering, and materials science</li>
      <li><strong>Quality Control:</strong> Convert voltage measurements for testing and verification of electrical equipment</li>
      <li><strong>Troubleshooting:</strong> Convert between different voltage units when diagnosing electrical problems</li>
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

    // Voltage conversion factors (relative to volts)
    const voltageUnits = {
      // Standard Electrical Units
      'V': 1,
      'mV': 1000,
      'μV': 1000000,
      'kV': 0.001,
      'MV': 0.000001,
      
      // Derived or Related Units
      'GV': 0.000000001,
      'nV': 1000000000,
      'abV': 100000000, // 1 abvolt = 10⁻⁸ volts
      'statV': 0.00333564 // 1 statvolt ≈ 299.792458 volts
    };

    // Initialize conversion
    convertVoltage();

    // Event listeners
    fromValue.addEventListener('input', convertVoltage);
    fromUnit.addEventListener('change', convertVoltage);
    toUnit.addEventListener('change', convertVoltage);

    swapButton.addEventListener('click', function() {
      const tempValue = fromValue.value;
      const tempUnit = fromUnit.value;
      
      fromValue.value = toValue.value;
      fromUnit.value = toUnit.value;
      toUnit.value = tempUnit;
      
      convertVoltage();
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
        
        convertVoltage();
      });
    });

    function convertVoltage() {
      const value = parseFloat(fromValue.value) || 0;
      const fromUnitValue = fromUnit.value;
      const toUnitValue = toUnit.value;
      
      // Convert to volts first
      const valueInVolts = value / voltageUnits[fromUnitValue];
      
      // Convert from volts to target unit
      const convertedValue = valueInVolts * voltageUnits[toUnitValue];
      
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
        // Standard Electrical Units
        'V': 'Volts',
        'mV': 'Millivolts',
        'μV': 'Microvolts',
        'kV': 'Kilovolts',
        'MV': 'Megavolts',
        
        // Derived or Related Units
        'GV': 'Gigavolts',
        'nV': 'Nanovolts',
        'abV': 'Abvolts',
        'statV': 'Statvolts'
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
          fromUnit.value = 'V';
          toUnit.value = 'mV';
          convertVoltage();
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
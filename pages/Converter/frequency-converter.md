---
layout: default
title: "Frequency Converter - Convert Between Different Frequency Units"
permalink: /frequency-converter-convert-between-different-frequency-units/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Frequency Converter - Convert Between Frequency Units</title>
<meta name="description"
  content="Free online frequency conversion tool. Convert between hertz, kilohertz, megahertz, gigahertz, RPM, BPM and more frequency units instantly.">
<meta name="keywords"
  content="frequency converter, hertz converter, kHz converter, MHz converter, GHz converter, RPM converter, BPM converter, cycles per second, frequency conversion">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Frequency Converter Styles */
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
  <h1>Free Online Frequency Converter</h1>
  <p class="welcome-message">Convert between different frequency units instantly. Supports hertz, kilohertz, megahertz, gigahertz, RPM, BPM, cycles per second and many more frequency units.</p>

  <div class="converter-section">
    <h2>Frequency Conversion</h2>

    <div class="conversion-wrapper">
      <div class="conversion-group">
        <h3>Input Value</h3>
        <div class="input-group">
          <label for="inputValue">Frequency Value</label>
          <input type="number" id="inputValue" placeholder="Enter frequency value" step="any" value="1">
        </div>
        <div class="input-group">
          <label for="inputUnit">From Unit</label>
          <select id="inputUnit">
            <optgroup label="SI / Metric Units">
              <option value="hertz">Hertz (Hz)</option>
              <option value="kilohertz">Kilohertz (kHz)</option>
              <option value="megahertz">Megahertz (MHz)</option>
              <option value="gigahertz">Gigahertz (GHz)</option>
              <option value="terahertz">Terahertz (THz)</option>
              <option value="millihertz">Millihertz (mHz)</option>
              <option value="microhertz">Microhertz (µHz)</option>
              <option value="nanohertz">Nanohertz (nHz)</option>
            </optgroup>
            <optgroup label="Other / Specialized Units">
              <option value="cps">Cycles per second (cps)</option>
              <option value="rpm">Revolutions per minute (RPM)</option>
              <option value="bpm">Beats per minute (BPM)</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div class="conversion-group">
        <h3>Conversion Results</h3>
        <div class="result-section">
          <div class="result-item">
            <span class="result-label">Hertz (Hz):</span>
            <span class="result-value" id="resultHertz">1.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">Kilohertz (kHz):</span>
            <span class="result-value" id="resultKilohertz">0.0010</span>
          </div>
          <div class="result-item">
            <span class="result-label">Megahertz (MHz):</span>
            <span class="result-value" id="resultMegahertz">0.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">Gigahertz (GHz):</span>
            <span class="result-value" id="resultGigahertz">0.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">Cycles per second (cps):</span>
            <span class="result-value" id="resultCps">1.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">RPM:</span>
            <span class="result-value" id="resultRpm">60.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">BPM:</span>
            <span class="result-value" id="resultBpm">60.0000</span>
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
        <h3>SI Frequency Units</h3>
        <ul>
          <li><strong>Hertz (Hz)</strong> - SI unit of frequency</li>
          <li><strong>Kilohertz (kHz)</strong> = 1,000 Hz</li>
          <li><strong>Megahertz (MHz)</strong> = 1,000,000 Hz</li>
          <li><strong>Gigahertz (GHz)</strong> = 1,000,000,000 Hz</li>
          <li><strong>Terahertz (THz)</strong> = 1,000,000,000,000 Hz</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Small Frequency Units</h3>
        <ul>
          <li><strong>Millihertz (mHz)</strong> = 0.001 Hz</li>
          <li><strong>Microhertz (µHz)</strong> = 0.000001 Hz</li>
          <li><strong>Nanohertz (nHz)</strong> = 0.000000001 Hz</li>
          <li>Used for very low frequency measurements</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Rotational & Musical Units</h3>
        <ul>
          <li><strong>Cycles per second (cps)</strong> = 1 Hz</li>
          <li><strong>Revolutions per minute (RPM)</strong> = 1/60 Hz</li>
          <li><strong>Beats per minute (BPM)</strong> = 1/60 Hz</li>
          <li>Common in engineering and music</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Common Applications</h3>
        <ul>
          <li><strong>Audio Range:</strong> 20 Hz - 20 kHz</li>
          <li><strong>AC Power:</strong> 50/60 Hz</li>
          <li><strong>Radio:</strong> kHz - GHz range</li>
          <li><strong>Processors:</strong> GHz range</li>
        </ul>
      </div>
    </div>

    <div class="examples">
      <h2>Conversion Examples</h2>

      <div class="example-item">
        <strong>1 Hertz</strong> = 0.001 kilohertz = 0.000001 megahertz = 60 RPM = 60 BPM
      </div>

      <div class="example-item">
        <strong>1 Kilohertz</strong> = 1,000 hertz = 0.001 megahertz = 60,000 RPM
      </div>

      <div class="example-item">
        <strong>1 Megahertz</strong> = 1,000,000 hertz = 1,000 kilohertz = 60,000,000 RPM
      </div>

      <div class="example-item">
        <strong>120 BPM</strong> = 2 hertz = 0.002 kilohertz = 120 RPM
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Frequency Conversion Tool</h2>

    <p>Our comprehensive <strong>Frequency Converter</strong> is an essential tool for engineers, musicians, students, and anyone working with frequency measurements. This powerful converter allows you to instantly convert between dozens of frequency units including hertz, kilohertz, megahertz, gigahertz, RPM, BPM, cycles per second, and many more. Whether you're working on electronics projects, audio engineering, physics homework, or musical compositions, this tool provides accurate conversions with real-time results.</p>

    <h3>How to Use This Frequency Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Value:</strong> Input the numerical frequency value you want to convert in the "Frequency Value" field</li>
      <li><strong>Select Source Unit:</strong> Choose the unit of your input value from the dropdown menu (e.g., hertz, kilohertz, RPM)</li>
      <li><strong>View Results:</strong> Instantly see the converted values in all major frequency units in the results panel</li>
      <li><strong>Additional Actions:</strong> Use the buttons to copy results, swap units, or reset the converter for new calculations</li>
    </ul>

    <h3>Real-Life Application Examples:</h3>
    <p><strong>For Audio Engineering:</strong> Convert between hertz and kilohertz when working with audio frequencies. Human hearing ranges from 20 Hz to 20,000 Hz (20 kHz). Converting 440 Hz (musical note A) to kHz gives 0.44 kHz.</p>

    <p><strong>For Electronics & Radio:</strong> Convert radio frequencies from megahertz to hertz. FM radio stations broadcast between 88-108 MHz, which equals 88,000,000 - 108,000,000 Hz.</p>

    <p><strong>For Mechanical Engineering:</strong> Convert rotational speeds from RPM to hertz. A hard disk drive spinning at 7,200 RPM rotates at 120 Hz (7,200 ÷ 60 = 120).</p>

    <p><strong>For Music Production:</strong> Convert BPM (beats per minute) to hertz for timing calculations. A song at 120 BPM has a beat frequency of 2 Hz (120 ÷ 60 = 2).</p>

    <h3>Common Frequency Unit Definitions:</h3>
    <ul>
      <li><strong>Hertz (Hz):</strong> The SI unit of frequency, defined as one cycle per second</li>
      <li><strong>Kilohertz (kHz):</strong> 1,000 hertz, commonly used for audio frequencies and radio signals</li>
      <li><strong>Megahertz (MHz):</strong> 1,000,000 hertz, used for computer processors and radio broadcasting</li>
      <li><strong>Gigahertz (GHz):</strong> 1,000,000,000 hertz, used for modern computer processors and microwave signals</li>
      <li><strong>RPM (Revolutions per minute):</strong> The number of full rotations completed in one minute</li>
      <li><strong>BPM (Beats per minute):</strong> The number of beats occurring in one minute, commonly used in music</li>
      <li><strong>Cycles per second (cps):</strong> Equivalent to hertz, an older term for frequency measurement</li>
    </ul>

    <h3>Who Should Use This Frequency Converter?</h3>
    <ul>
      <li><strong>Electronics Engineers & Technicians:</strong> Essential for circuit design, signal processing, and radio frequency work</li>
      <li><strong>Audio Engineers & Musicians:</strong> Perfect for working with audio frequencies, sampling rates, and musical timing</li>
      <li><strong>Students & Educators:</strong> Ideal for physics, engineering, and music technology classes</li>
      <li><strong>Mechanical Engineers:</strong> Useful for rotational speed calculations and vibration analysis</li>
      <li><strong>Researchers & Scientists:</strong> Valuable across physics, engineering, and telecommunications fields</li>
      <li><strong>DIY Enthusiasts:</strong> Great for electronics projects, audio systems, and technical hobbies</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What's the relationship between hertz and RPM?</strong><br>
      1 Hz equals 60 RPM, and 1 RPM equals 1/60 Hz. This is because hertz measures cycles per second, while RPM measures revolutions per minute (60 seconds).</p>

    <p><strong>How accurate are the conversions?</strong><br>
      Our converter uses precise conversion factors with high precision calculations. For most engineering and scientific purposes, the accuracy is more than sufficient.</p>

    <p><strong>Can I convert very high or very low frequencies?</strong><br>
      Yes, the converter handles values from extremely low (nanohertz) to extremely high (terahertz) with equal precision.</p>

    <p><strong>Is there a mobile app version?</strong><br>
      This online tool works perfectly on all mobile devices through your web browser. No app installation is needed.</p>

    <p><strong>Are there any usage limits or costs?</strong><br>
      No, this is a completely free online tool with no registration required and no usage limits.</p>

    <h3>Frequency Conversion Factors Reference:</h3>
    <p>For quick reference, here are some key conversion factors:</p>
    <ul>
      <li>1 hertz = 0.001 kilohertz = 0.000001 megahertz = 0.000000001 gigahertz</li>
      <li>1 kilohertz = 1,000 hertz = 0.001 megahertz = 0.000001 gigahertz</li>
      <li>1 megahertz = 1,000,000 hertz = 1,000 kilohertz = 0.001 gigahertz</li>
      <li>1 gigahertz = 1,000,000,000 hertz = 1,000,000 kilohertz = 1,000 megahertz</li>
      <li>1 RPM = 1/60 hertz = 0.016667 hertz</li>
      <li>1 BPM = 1/60 hertz = 0.016667 hertz</li>
      <li>1 cycle per second = 1 hertz</li>
    </ul>

    <h3>Common Frequency Ranges in Practice:</h3>
    <ul>
      <li><strong>Human Hearing:</strong> 20 Hz - 20,000 Hz (20 kHz)</li>
      <li><strong>AC Power Grid:</strong> 50 Hz (Europe) or 60 Hz (North America)</li>
      <li><strong>AM Radio:</strong> 530 kHz - 1,710 kHz</li>
      <li><strong>FM Radio:</strong> 88 MHz - 108 MHz</li>
      <li><strong>Wi-Fi:</strong> 2.4 GHz and 5 GHz</li>
      <li><strong>Computer Processors:</strong> 1 GHz - 5+ GHz</li>
      <li><strong>Resting Heart Rate:</strong> 60-100 BPM (1-1.67 Hz)</li>
      <li><strong>Typical Music Tempo:</strong> 60-180 BPM (1-3 Hz)</li>
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
    const resultHertz = document.getElementById('resultHertz');
    const resultKilohertz = document.getElementById('resultKilohertz');
    const resultMegahertz = document.getElementById('resultMegahertz');
    const resultGigahertz = document.getElementById('resultGigahertz');
    const resultCps = document.getElementById('resultCps');
    const resultRpm = document.getElementById('resultRpm');
    const resultBpm = document.getElementById('resultBpm');

    // Conversion factors (to hertz)
    const conversionFactors = {
      // SI / Metric Units
      'hertz': 1,
      'kilohertz': 1000,
      'megahertz': 1000000,
      'gigahertz': 1000000000,
      'terahertz': 1000000000000,
      'millihertz': 0.001,
      'microhertz': 0.000001,
      'nanohertz': 0.000000001,
      
      // Other / Specialized Units
      'cps': 1,
      'rpm': 1/60,
      'bpm': 1/60
    };

    // Initialize with default conversion
    convertFrequency();

    // Event listeners
    convertButton.addEventListener('click', convertFrequency);
    inputValue.addEventListener('input', convertFrequency);
    inputUnit.addEventListener('change', convertFrequency);
    
    swapButton.addEventListener('click', function() {
      showAlert('Use the unit selector to choose different conversion units', 'info');
    });
    
    copyButton.addEventListener('click', copyResults);
    resetButton.addEventListener('click', resetConverter);

    function convertFrequency() {
      const value = parseFloat(inputValue.value) || 0;
      const fromUnit = inputUnit.value;
      
      // Convert to hertz first
      const hertz = value * conversionFactors[fromUnit];
      
      // Convert to all other units
      resultHertz.textContent = formatNumber(hertz / conversionFactors['hertz']);
      resultKilohertz.textContent = formatNumber(hertz / conversionFactors['kilohertz']);
      resultMegahertz.textContent = formatNumber(hertz / conversionFactors['megahertz']);
      resultGigahertz.textContent = formatNumber(hertz / conversionFactors['gigahertz']);
      resultCps.textContent = formatNumber(hertz / conversionFactors['cps']);
      resultRpm.textContent = formatNumber(hertz / conversionFactors['rpm']);
      resultBpm.textContent = formatNumber(hertz / conversionFactors['bpm']);
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
      const results = `Frequency Conversion Results:
Input: ${inputValue.value} ${getUnitName(inputUnit.value)}
Hertz: ${resultHertz.textContent} Hz
Kilohertz: ${resultKilohertz.textContent} kHz
Megahertz: ${resultMegahertz.textContent} MHz
Gigahertz: ${resultGigahertz.textContent} GHz
Cycles per second: ${resultCps.textContent} cps
RPM: ${resultRpm.textContent} RPM
BPM: ${resultBpm.textContent} BPM`;

      navigator.clipboard.writeText(results).then(() => {
        showAlert('Conversion results copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy results: ' + err, 'error');
      });
    }

    function resetConverter() {
      inputValue.value = '1';
      inputUnit.selectedIndex = 0;
      convertFrequency();
      showAlert('Converter has been reset', 'success');
    }

    function getUnitName(unitValue) {
      const unitNames = {
        'hertz': 'Hertz (Hz)',
        'kilohertz': 'Kilohertz (kHz)',
        'megahertz': 'Megahertz (MHz)',
        'gigahertz': 'Gigahertz (GHz)',
        'terahertz': 'Terahertz (THz)',
        'millihertz': 'Millihertz (mHz)',
        'microhertz': 'Microhertz (µHz)',
        'nanohertz': 'Nanohertz (nHz)',
        'cps': 'Cycles per second (cps)',
        'rpm': 'Revolutions per minute (RPM)',
        'bpm': 'Beats per minute (BPM)'
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
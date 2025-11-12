---
layout: default
title: "Angle Converter - Convert Between Different Angle Units"
permalink: /angle-converter-convert-between-different-angle-units/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Angle Converter - Convert Between Angle Units</title>
<meta name="description"
  content="Free online angle conversion tool. Convert between degrees, radians, gradians, minutes, seconds, revolutions and more angle units instantly.">
<meta name="keywords"
  content="angle converter, degree converter, radian converter, gradian converter, minute converter, second converter, revolution converter, angle conversion">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Angle Converter Styles */
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
  <h1>Free Online Angle Converter</h1>
  <p class="welcome-message">Convert between different angle units instantly. Supports degrees, radians, gradians, minutes, seconds, revolutions and many more angle units.</p>

  <div class="converter-section">
    <h2>Angle Conversion</h2>

    <div class="conversion-wrapper">
      <div class="conversion-group">
        <h3>Input Value</h3>
        <div class="input-group">
          <label for="inputValue">Angle Value</label>
          <input type="number" id="inputValue" placeholder="Enter angle value" step="any" value="45">
        </div>
        <div class="input-group">
          <label for="inputUnit">From Unit</label>
          <select id="inputUnit">
            <optgroup label="Common Units">
              <option value="degree">Degree (°)</option>
              <option value="radian">Radian (rad)</option>
              <option value="gradian">Gradian / Gon / Grade (gon)</option>
            </optgroup>
            <optgroup label="Subdivisions">
              <option value="minute">Minute (′)</option>
              <option value="second">Second (″)</option>
            </optgroup>
            <optgroup label="Other / Specialized Units">
              <option value="revolution">Revolution / Turn (rev)</option>
              <option value="quadrant">Quadrant (quad)</option>
              <option value="sextant">Sextant (sext)</option>
              <option value="mil">Mil (NATO mil)</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div class="conversion-group">
        <h3>Conversion Results</h3>
        <div class="result-section">
          <div class="result-item">
            <span class="result-label">Degree (°):</span>
            <span class="result-value" id="resultDegree">45.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">Radian (rad):</span>
            <span class="result-value" id="resultRadian">0.7854</span>
          </div>
          <div class="result-item">
            <span class="result-label">Gradian (gon):</span>
            <span class="result-value" id="resultGradian">50.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">Minute (′):</span>
            <span class="result-value" id="resultMinute">2700.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">Second (″):</span>
            <span class="result-value" id="resultSecond">162000.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">Revolution (rev):</span>
            <span class="result-value" id="resultRevolution">0.1250</span>
          </div>
          <div class="result-item">
            <span class="result-label">Mil (NATO mil):</span>
            <span class="result-value" id="resultMil">800.0000</span>
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
        <h3>Common Angle Units</h3>
        <ul>
          <li><strong>Degree (°)</strong> - Most common unit (360° in circle)</li>
          <li><strong>Radian (rad)</strong> - SI unit (2π rad in circle)</li>
          <li><strong>Gradian (gon)</strong> - 400 gon in circle</li>
          <li>Used in mathematics, engineering, and navigation</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Angle Subdivisions</h3>
        <ul>
          <li><strong>Minute (′)</strong> = 1/60 degree</li>
          <li><strong>Second (″)</strong> = 1/60 minute = 1/3600 degree</li>
          <li>Used for precise measurements in astronomy and geography</li>
          <li>Common in DMS (Degrees, Minutes, Seconds) format</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Specialized Angle Units</h3>
        <ul>
          <li><strong>Revolution (turn)</strong> = 360° = complete circle</li>
          <li><strong>Quadrant</strong> = 90° = quarter circle</li>
          <li><strong>Sextant</strong> = 60° = sixth of circle</li>
          <li><strong>Mil (NATO)</strong> = 0.05625° = 1/6400 circle</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Common Angle Values</h3>
        <ul>
          <li><strong>Right Angle:</strong> 90° = π/2 rad = 100 gon</li>
          <li><strong>Straight Angle:</strong> 180° = π rad = 200 gon</li>
          <li><strong>Full Circle:</strong> 360° = 2π rad = 400 gon</li>
          <li><strong>Acute:</strong> < 90°, <strong>Obtuse:</strong> > 90°</li>
        </ul>
      </div>
    </div>

    <div class="examples">
      <h2>Conversion Examples</h2>

      <div class="example-item">
        <strong>90 Degrees</strong> = 1.5708 radians = 100 gradians = 0.25 revolutions = 1600 mils
      </div>

      <div class="example-item">
        <strong>π Radians</strong> = 180 degrees = 200 gradians = 0.5 revolutions = 3200 mils
      </div>

      <div class="example-item">
        <strong>1 Revolution</strong> = 360 degrees = 6.2832 radians = 400 gradians = 6400 mils
      </div>

      <div class="example-item">
        <strong>45 Degrees</strong> = 0.7854 radians = 50 gradians = 2700 minutes = 162000 seconds
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Angle Conversion Tool</h2>

    <p>Our comprehensive <strong>Angle Converter</strong> is an essential tool for students, engineers, mathematicians, surveyors, and anyone working with angular measurements. This powerful converter allows you to instantly convert between dozens of angle units including degrees, radians, gradians, minutes, seconds, revolutions, mils, and many more. Whether you're working on geometry problems, engineering calculations, navigation, or astronomy, this tool provides accurate conversions with real-time results.</p>

    <h3>How to Use This Angle Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Value:</strong> Input the numerical angle value you want to convert in the "Angle Value" field</li>
      <li><strong>Select Source Unit:</strong> Choose the unit of your input value from the dropdown menu (e.g., degrees, radians, minutes)</li>
      <li><strong>View Results:</strong> Instantly see the converted values in all major angle units in the results panel</li>
      <li><strong>Additional Actions:</strong> Use the buttons to copy results, swap units, or reset the converter for new calculations</li>
    </ul>

    <h3>Real-Life Application Examples:</h3>
    <p><strong>For Mathematics & Education:</strong> Convert between degrees and radians when working with trigonometric functions. Sine, cosine, and tangent calculations often require angle conversions between these units.</p>

    <p><strong>For Engineering & Construction:</strong> Convert between degrees and gradians for precise angle measurements in mechanical drawings and construction plans. Many European countries use gradians in technical drawings.</p>

    <p><strong>For Navigation & Surveying:</strong> Convert between degrees, minutes, and seconds for geographic coordinates. Latitude and longitude are typically expressed in DMS (Degrees, Minutes, Seconds) format.</p>

    <p><strong>For Military & Ballistics:</strong> Convert between degrees and mils for artillery and targeting calculations. NATO mils are commonly used in military applications for angular measurements.</p>

    <h3>Common Angle Unit Definitions:</h3>
    <ul>
      <li><strong>Degree (°):</strong> 1/360 of a full circle, the most commonly used angle unit</li>
      <li><strong>Radian (rad):</strong> The SI unit of angle, defined as the angle subtended by an arc equal in length to the radius</li>
      <li><strong>Gradian (gon):</strong> 1/400 of a full circle, also known as grade or gon</li>
      <li><strong>Minute (′):</strong> 1/60 of a degree, used for more precise measurements</li>
      <li><strong>Second (″):</strong> 1/60 of a minute = 1/3600 of a degree, used for very precise measurements</li>
      <li><strong>Revolution (turn):</strong> A complete 360° rotation, equivalent to one full circle</li>
      <li><strong>Mil (NATO mil):</strong> 1/6400 of a circle, used in military and artillery applications</li>
    </ul>

    <h3>Who Should Use This Angle Converter?</h3>
    <ul>
      <li><strong>Students & Educators:</strong> Essential for mathematics, physics, and engineering classes dealing with trigonometry and geometry</li>
      <li><strong>Engineers & Architects:</strong> Perfect for technical drawings, mechanical design, and construction calculations</li>
      <li><strong>Surveyors & Cartographers:</strong> Ideal for geographic coordinate conversions and land measurement</li>
      <li><strong>Astronomers & Navigators:</strong> Useful for celestial navigation and astronomical calculations</li>
      <li><strong>Military Personnel:</strong> Valuable for artillery targeting and tactical calculations</li>
      <li><strong>DIY Enthusiasts:</strong> Great for woodworking, metalworking, and home improvement projects</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What's the relationship between degrees and radians?</strong><br>
      180 degrees equals π radians (approximately 3.14159 radians). This means 1 degree = π/180 radians and 1 radian = 180/π degrees (approximately 57.2958 degrees).</p>

    <p><strong>Why are there 400 gradians in a circle instead of 360?</strong><br>
      The gradian system was developed during the French Revolution as part of the metric system. It uses base-10 divisions, making calculations easier: 100 gradians = right angle, 200 gradians = straight angle, 400 gradians = full circle.</p>

    <p><strong>How accurate are the conversions?</strong><br>
      Our converter uses precise conversion factors with high precision calculations. For most scientific and engineering purposes, the accuracy is more than sufficient.</p>

    <p><strong>Can I convert negative angles or angles larger than 360°?</strong><br>
      Yes, the converter handles all real number values, including negative angles and angles exceeding 360 degrees (which represent multiple rotations).</p>

    <p><strong>Is this tool free to use?</strong><br>
      Yes, this is a completely free online tool with no registration required and no usage limits.</p>

    <h3>Angle Conversion Factors Reference:</h3>
    <p>For quick reference, here are some key conversion factors (based on 1 degree):</p>
    <ul>
      <li>1 degree = 0.0174533 radians = 1.11111 gradians = 60 minutes = 3600 seconds</li>
      <li>1 radian = 57.2958 degrees = 63.6620 gradians = 3437.75 minutes = 206265 seconds</li>
      <li>1 gradian = 0.9 degrees = 0.015708 radians = 54 minutes = 3240 seconds</li>
      <li>1 minute = 0.0166667 degrees = 0.000290888 radians = 0.0185185 gradians = 60 seconds</li>
      <li>1 second = 0.000277778 degrees = 0.00000484814 radians = 0.000308642 gradians</li>
      <li>1 revolution = 360 degrees = 6.28319 radians = 400 gradians = 21600 minutes</li>
      <li>1 NATO mil = 0.05625 degrees = 0.000981748 radians = 0.0625 gradians</li>
    </ul>

    <h3>Common Angle Measurements in Practice:</h3>
    <ul>
      <li><strong>Right Angle:</strong> 90° = π/2 rad = 100 gon = 1 quadrant</li>
      <li><strong>Straight Angle:</strong> 180° = π rad = 200 gon = 2 quadrants</li>
      <li><strong>Full Circle:</strong> 360° = 2π rad = 400 gon = 4 quadrants</li>
      <li><strong>Equilateral Triangle:</strong> 60° = π/3 rad = 66.6667 gon</li>
      <li><strong>Square Corner:</strong> 45° = π/4 rad = 50 gon</li>
      <li><strong>Compass Directions:</strong> N=0°, E=90°, S=180°, W=270°</li>
      <li><strong>Clock Hands:</strong> 30° per hour, 6° per minute</li>
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
    const resultDegree = document.getElementById('resultDegree');
    const resultRadian = document.getElementById('resultRadian');
    const resultGradian = document.getElementById('resultGradian');
    const resultMinute = document.getElementById('resultMinute');
    const resultSecond = document.getElementById('resultSecond');
    const resultRevolution = document.getElementById('resultRevolution');
    const resultMil = document.getElementById('resultMil');

    // Conversion factors (to degrees)
    const conversionFactors = {
      // Common Units
      'degree': 1,
      'radian': 180 / Math.PI,
      'gradian': 0.9,
      
      // Subdivisions
      'minute': 1/60,
      'second': 1/3600,
      
      // Other / Specialized Units
      'revolution': 360,
      'quadrant': 90,
      'sextant': 60,
      'mil': 0.05625
    };

    // Initialize with default conversion
    convertAngle();

    // Event listeners
    convertButton.addEventListener('click', convertAngle);
    inputValue.addEventListener('input', convertAngle);
    inputUnit.addEventListener('change', convertAngle);
    
    swapButton.addEventListener('click', function() {
      showAlert('Use the unit selector to choose different conversion units', 'info');
    });
    
    copyButton.addEventListener('click', copyResults);
    resetButton.addEventListener('click', resetConverter);

    function convertAngle() {
      const value = parseFloat(inputValue.value) || 0;
      const fromUnit = inputUnit.value;
      
      // Convert to degrees first
      const degrees = value * conversionFactors[fromUnit];
      
      // Convert to all other units
      resultDegree.textContent = formatNumber(degrees / conversionFactors['degree']);
      resultRadian.textContent = formatNumber(degrees / conversionFactors['radian']);
      resultGradian.textContent = formatNumber(degrees / conversionFactors['gradian']);
      resultMinute.textContent = formatNumber(degrees / conversionFactors['minute']);
      resultSecond.textContent = formatNumber(degrees / conversionFactors['second']);
      resultRevolution.textContent = formatNumber(degrees / conversionFactors['revolution']);
      resultMil.textContent = formatNumber(degrees / conversionFactors['mil']);
    }

    function formatNumber(num) {
      if (num === 0) return '0.0000';
      
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
      const results = `Angle Conversion Results:
Input: ${inputValue.value} ${getUnitName(inputUnit.value)}
Degree: ${resultDegree.textContent}°
Radian: ${resultRadian.textContent} rad
Gradian: ${resultGradian.textContent} gon
Minute: ${resultMinute.textContent}′
Second: ${resultSecond.textContent}″
Revolution: ${resultRevolution.textContent} rev
Mil: ${resultMil.textContent} mil`;

      navigator.clipboard.writeText(results).then(() => {
        showAlert('Conversion results copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy results: ' + err, 'error');
      });
    }

    function resetConverter() {
      inputValue.value = '45';
      inputUnit.selectedIndex = 0;
      convertAngle();
      showAlert('Converter has been reset', 'success');
    }

    function getUnitName(unitValue) {
      const unitNames = {
        'degree': 'Degree (°)',
        'radian': 'Radian (rad)',
        'gradian': 'Gradian (gon)',
        'minute': 'Minute (′)',
        'second': 'Second (″)',
        'revolution': 'Revolution (rev)',
        'quadrant': 'Quadrant (quad)',
        'sextant': 'Sextant (sext)',
        'mil': 'Mil (NATO mil)'
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
---
layout: default
title: "Radiation Dose Converter - Convert Gy, Sv, Rad, Rem, Roentgen & More"
permalink: /radiation-dose-converter-convert-gy-sv-rad-rem-roentgen-more/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Radiation Dose Converter - Convert Gy, Sv, Rad, Rem & More</title>
<meta name="description"
  content="Free online radiation dose converter tool. Convert between Gray (Gy), Sievert (Sv), Rad, Rem, Roentgen (R), Becquerel (Bq), and Curie (Ci) units instantly.">
<meta name="keywords"
  content="radiation dose converter, gray to sievert, rad to rem, gy to rad, sievert to rem, roentgen converter, becquerel to curie, radiation units, dose conversion">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Radiation Dose Converter Styles */
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  <h1>Free Online Radiation Dose Converter</h1>
  <p class="welcome-message">Convert between different radiation dose units instantly. Convert Gray (Gy), Sievert (Sv), Rad, Rem, Roentgen (R), Becquerel (Bq), and Curie (Ci) units with precision.</p>

  <div class="converter-section">
    <h2>Radiation Dose Converter</h2>

    <div class="converter-grid">
      <!-- SI/Modern Units Converter -->
      <div class="converter-card">
        <h3>SI / Modern Units</h3>
        <div class="input-group">
          <label for="grayInput">Gray (Gy)</label>
          <input type="number" id="grayInput" placeholder="Enter Gray value" step="any">
        </div>
        <div class="input-group">
          <label for="sievertInput">Sievert (Sv)</label>
          <input type="number" id="sievertInput" placeholder="Enter Sievert value" step="any">
        </div>
        
        <div class="result-section">
          <h4>Conversion Results:</h4>
          <div class="result-item">
            <span>Gray to Rad:</span>
            <span id="gyToRad">0</span>
          </div>
          <div class="result-item">
            <span>Sievert to Rem:</span>
            <span id="svToRem">0</span>
          </div>
        </div>
      </div>

      <!-- Traditional Units Converter -->
      <div class="converter-card">
        <h3>Non-SI / Traditional Units</h3>
        <div class="input-group">
          <label for="radInput">Rad</label>
          <input type="number" id="radInput" placeholder="Enter Rad value" step="any">
        </div>
        <div class="input-group">
          <label for="remInput">Rem</label>
          <input type="number" id="remInput" placeholder="Enter Rem value" step="any">
        </div>
        
        <div class="result-section">
          <h4>Conversion Results:</h4>
          <div class="result-item">
            <span>Rad to Gray:</span>
            <span id="radToGy">0</span>
          </div>
          <div class="result-item">
            <span>Rem to Sievert:</span>
            <span id="remToSv">0</span>
          </div>
        </div>
      </div>

      <!-- Exposure & Radioactivity Converter -->
      <div class="converter-card">
        <h3>Exposure & Radioactivity</h3>
        <div class="input-group">
          <label for="roentgenInput">Roentgen (R)</label>
          <input type="number" id="roentgenInput" placeholder="Enter Roentgen value" step="any">
        </div>
        <div class="input-group">
          <label for="milliroentgenInput">Milliroentgen (mR)</label>
          <input type="number" id="milliroentgenInput" placeholder="Enter Milliroentgen value" step="any">
        </div>
        <div class="input-group">
          <label for="becquerelInput">Becquerel (Bq)</label>
          <input type="number" id="becquerelInput" placeholder="Enter Becquerel value" step="any">
        </div>
        <div class="input-group">
          <label for="curieInput">Curie (Ci)</label>
          <input type="number" id="curieInput" placeholder="Enter Curie value" step="any">
        </div>
        
        <div class="result-section">
          <h4>Conversion Results:</h4>
          <div class="result-item">
            <span>Bq to Ci:</span>
            <span id="bqToCi">0</span>
          </div>
          <div class="result-item">
            <span>Ci to Bq:</span>
            <span id="ciToBq">0</span>
          </div>
        </div>
      </div>
    </div>

    <div class="unit-info">
      <h4>Unit Definitions & Conversion Factors</h4>
      <p><strong>Gray (Gy):</strong> SI unit of absorbed radiation dose (1 Gy = 1 J/kg)</p>
      <p><strong>Sievert (Sv):</strong> SI unit of equivalent dose, accounting for biological effects</p>
      <p><strong>Rad:</strong> Traditional unit of absorbed dose (1 rad = 0.01 Gy)</p>
      <p><strong>Rem:</strong> Traditional unit of equivalent dose (1 rem = 0.01 Sv)</p>
      <p><strong>Roentgen (R):</strong> Unit of radiation exposure (1 R = 2.58 × 10⁻⁴ C/kg)</p>
      <p><strong>Becquerel (Bq):</strong> SI unit of radioactivity (1 Bq = 1 decay/second)</p>
      <p><strong>Curie (Ci):</strong> Traditional unit of radioactivity (1 Ci = 3.7 × 10¹⁰ Bq)</p>
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
      <h2>Common Conversion Examples</h2>

      <h3>Medical Radiation Examples:</h3>
      <div class="example-text">Chest X-ray: ~0.1 mSv (0.01 rem)
CT Scan: ~10 mSv (1 rem)
Annual Natural Background: ~3 mSv (0.3 rem)</div>

      <h3>Radiation Protection Limits:</h3>
      <div class="example-text">Annual Occupational Limit: 50 mSv (5 rem)
Public Annual Limit: 1 mSv (0.1 rem)</div>

      <h3>Quick Reference Conversions:</h3>
      <div class="example-text">1 Gy = 100 rad
1 Sv = 100 rem
1 Ci = 3.7 × 10¹⁰ Bq
1 R ≈ 0.877 rad in air</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Radiation Dose Converter Tool</h2>

    <p>Working with radiation measurements and need to convert between different units? Our free <strong>Radiation Dose Converter tool</strong> is the perfect solution for medical professionals, radiation safety officers, students, and researchers. This comprehensive tool allows you to instantly convert between all major radiation dose and radioactivity units including Gray (Gy), Sievert (Sv), Rad, Rem, Roentgen (R), Becquerel (Bq), and Curie (Ci). There's no download required, no registration needed, and your data privacy is guaranteed as all calculations happen securely right in your browser.</p>

    <h3>How to Use This Radiation Dose Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Your Input:</strong> Enter the value you want to convert in any of the input fields (Gy, Sv, Rad, Rem, R, mR, Bq, or Ci).</li>
      <li><strong>Automatic Calculation:</strong> The tool automatically calculates and displays all equivalent values in real-time as you type.</li>
      <li><strong>Review Results:</strong> Check the conversion results section for accurate conversions between all related units.</li>
      <li><strong>Copy or Reset:</strong> Use the "Copy Results" button to save your conversions or "Reset All" to start over with new values.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a radiation safety officer reviewing dosimeter readings that show 250 mrem. You need to report this in Sieverts for international documentation. Instead of manually calculating the conversion (which could lead to errors), you simply enter "250" in the Millirem field or "0.25" in the Rem field. The tool instantly shows you the equivalent value of 2.5 mSv, saving time and ensuring accuracy in your radiation safety reports.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Medical Professionals:</strong> Convert radiation doses between different measurement systems for patient safety and documentation.</li>
      <li><strong>Radiation Safety Officers:</strong> Quickly convert between traditional and SI units for compliance reporting and safety monitoring.</li>
      <li><strong>Students & Educators:</strong> Learn radiation unit relationships and verify homework calculations with instant conversions.</li>
      <li><strong>Researchers:</strong> Convert experimental data between different measurement systems for publications and analysis.</li>
      <li><strong>Nuclear Industry Workers:</strong> Ensure accurate conversions for safety protocols and operational documentation.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What is the difference between Gray (Gy) and Sievert (Sv)?</strong><br>
      Gray measures absorbed radiation dose (energy deposited per mass), while Sievert measures equivalent dose that accounts for biological effects based on radiation type and tissue sensitivity.</p>

    <p><strong>Why are there both traditional and SI radiation units?</strong><br>
      Traditional units (rad, rem, curie) were developed earlier and are still used in some countries, particularly the US. SI units (gray, sievert, becquerel) are the international standard used in most countries and scientific publications.</p>

    <p><strong>Is my data kept private when I use this converter?</strong><br>
      Absolutely. All calculations happen locally in your browser. Your radiation dose values are never sent to any server, meaning we never see, store, or have access to your data. It is 100% secure and private.</p>

    <p><strong>Can I use this tool on my mobile device?</strong><br>
      Yes, our website and converter are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>Are the conversion factors accurate for medical applications?</strong><br>
      Yes, we use standard conversion factors accepted in medical physics and radiation protection. However, for critical medical decisions, always verify with qualified medical physicists.</p>

    <h3>Why Choose Our Radiation Dose Converter?</h3>
    <p>Our <strong>online radiation dose converter</strong> stands out from other tools because of its comprehensive coverage, accuracy, and privacy features. Unlike many online converters, we don't process your data on our servers - all calculations happen in your browser. This means your sensitive radiation dose data, patient information, and research data remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Radiation Dose Conversion</h3>
    <p>Radiation dose conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Medical Radiology:</strong> Convert between different dose measurement systems for diagnostic and therapeutic applications</li>
      <li><strong>Radiation Protection:</strong> Ensure compliance with international safety standards and regulations</li>
      <li><strong>Research & Development:</strong> Standardize radiation measurements across different research studies and publications</li>
      <li><strong>Education & Training:</strong> Teach students the relationships between different radiation units and measurement systems</li>
      <li><strong>Nuclear Industry:</strong> Convert operational radiation measurements for safety monitoring and reporting</li>
    </ul>

    <h3>Understanding Radiation Units</h3>
    <p>Radiation measurement involves several different types of units, each serving a specific purpose:</p>
    <ul>
      <li><strong>Absorbed Dose (Gray, Rad):</strong> Measures the energy deposited by radiation in any material</li>
      <li><strong>Equivalent Dose (Sievert, Rem):</strong> Accounts for the biological effectiveness of different radiation types</li>
      <li><strong>Exposure (Roentgen):</strong> Measures ionization in air from X-rays or gamma rays</li>
      <li><strong>Radioactivity (Becquerel, Curie):</strong> Measures the rate of radioactive decay</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Input elements
    const grayInput = document.getElementById('grayInput');
    const sievertInput = document.getElementById('sievertInput');
    const radInput = document.getElementById('radInput');
    const remInput = document.getElementById('remInput');
    const roentgenInput = document.getElementById('roentgenInput');
    const milliroentgenInput = document.getElementById('milliroentgenInput');
    const becquerelInput = document.getElementById('becquerelInput');
    const curieInput = document.getElementById('curieInput');
    
    // Result elements
    const gyToRad = document.getElementById('gyToRad');
    const svToRem = document.getElementById('svToRem');
    const radToGy = document.getElementById('radToGy');
    const remToSv = document.getElementById('remToSv');
    const bqToCi = document.getElementById('bqToCi');
    const ciToBq = document.getElementById('ciToBq');
    
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');

    // Conversion factors
    const conversionFactors = {
      gyToRad: 100,
      radToGy: 0.01,
      svToRem: 100,
      remToSv: 0.01,
      bqToCi: 2.703e-11, // 1 / 3.7e10
      ciToBq: 3.7e10,
      rToMr: 1000,
      mrToR: 0.001
    };

    // Event listeners for automatic conversion
    const inputElements = [
      grayInput, sievertInput, radInput, remInput, 
      roentgenInput, milliroentgenInput, becquerelInput, curieInput
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
      const gyValue = parseFloat(grayInput.value) || 0;
      const svValue = parseFloat(sievertInput.value) || 0;
      const radValue = parseFloat(radInput.value) || 0;
      const remValue = parseFloat(remInput.value) || 0;
      const rValue = parseFloat(roentgenInput.value) || 0;
      const mrValue = parseFloat(milliroentgenInput.value) || 0;
      const bqValue = parseFloat(becquerelInput.value) || 0;
      const ciValue = parseFloat(curieInput.value) || 0;

      // Update related fields based on which input was changed
      if (this === grayInput && gyValue !== 0) {
        radInput.value = (gyValue * conversionFactors.gyToRad).toFixed(6);
      } else if (this === radInput && radValue !== 0) {
        grayInput.value = (radValue * conversionFactors.radToGy).toFixed(6);
      } else if (this === sievertInput && svValue !== 0) {
        remInput.value = (svValue * conversionFactors.svToRem).toFixed(6);
      } else if (this === remInput && remValue !== 0) {
        sievertInput.value = (remValue * conversionFactors.remToSv).toFixed(6);
      } else if (this === roentgenInput && rValue !== 0) {
        milliroentgenInput.value = (rValue * conversionFactors.rToMr).toFixed(6);
      } else if (this === milliroentgenInput && mrValue !== 0) {
        roentgenInput.value = (mrValue * conversionFactors.mrToR).toFixed(6);
      } else if (this === becquerelInput && bqValue !== 0) {
        curieInput.value = (bqValue * conversionFactors.bqToCi).toExponential(3);
      } else if (this === curieInput && ciValue !== 0) {
        becquerelInput.value = (ciValue * conversionFactors.ciToBq).toExponential(3);
      }

      // Update all result displays
      updateResultDisplays();
    }

    function updateResultDisplays() {
      const gyValue = parseFloat(grayInput.value) || 0;
      const svValue = parseFloat(sievertInput.value) || 0;
      const radValue = parseFloat(radInput.value) || 0;
      const remValue = parseFloat(remInput.value) || 0;
      const bqValue = parseFloat(becquerelInput.value) || 0;
      const ciValue = parseFloat(curieInput.value) || 0;

      // Update result displays
      gyToRad.textContent = (gyValue * conversionFactors.gyToRad).toFixed(6);
      svToRem.textContent = (svValue * conversionFactors.svToRem).toFixed(6);
      radToGy.textContent = (radValue * conversionFactors.radToGy).toFixed(6);
      remToSv.textContent = (remValue * conversionFactors.remToSv).toFixed(6);
      bqToCi.textContent = (bqValue * conversionFactors.bqToCi).toExponential(3);
      ciToBq.textContent = (ciValue * conversionFactors.ciToBq).toExponential(3);
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
Radiation Dose Conversion Results:
Gray to Rad: ${gyToRad.textContent}
Sievert to Rem: ${svToRem.textContent}
Rad to Gray: ${radToGy.textContent}
Rem to Sievert: ${remToSv.textContent}
Becquerel to Curie: ${bqToCi.textContent}
Curie to Becquerel: ${ciToBq.textContent}

Generated using Radiation Dose Converter Tool
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
    grayInput.value = '1';
    performAllConversions();
  });
</script>
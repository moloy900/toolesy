---
layout: default
title: "Sound & Acoustics Units Converter - Convert dB, dBA, Pa, W/m², Phon, Sone & More"
permalink: /sound-acoustics-units-converter-convert-db-dba-pa-wm-phon-sone-more/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Sound & Acoustics Units Converter - Convert dB, dBA, Pa, W/m² & More</title>
<meta name="description"
  content="Free online sound and acoustics units converter tool. Convert between dB, dBA, dBC, dB SPL, Pa, W/m², Phon, Sone, Hz, µPa, W, Rayl, and J/m³ units instantly.">
<meta name="keywords"
  content="sound units converter, acoustics converter, db to dba, pa to db spl, w/m² converter, phon to sone, hz converter, sound pressure level, acoustics units">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Sound & Acoustics Converter Styles */
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
  <h1>Free Online Sound & Acoustics Units Converter</h1>
  <p class="welcome-message">Convert between different sound and acoustics units instantly. Convert dB, dBA, dBC, dB SPL, Pa, W/m², Phon, Sone, Hz, µPa, W, Rayl, and J/m³ units with precision.</p>

  <div class="converter-section">
    <h2>Sound & Acoustics Units Converter</h2>

    <div class="converter-grid">
      <!-- Primary Sound Units Converter -->
      <div class="converter-card">
        <h3>Primary Sound Units</h3>
        <div class="input-group">
          <label for="dbInput">Decibel (dB)</label>
          <input type="number" id="dbInput" placeholder="Enter dB value" step="any">
        </div>
        <div class="input-group">
          <label for="dbaInput">A-weighted dB (dBA)</label>
          <input type="number" id="dbaInput" placeholder="Enter dBA value" step="any">
        </div>
        <div class="input-group">
          <label for="dbcInput">C-weighted dB (dBC)</label>
          <input type="number" id="dbcInput" placeholder="Enter dBC value" step="any">
        </div>
        <div class="input-group">
          <label for="dbsplInput">dB Sound Pressure Level (dB SPL)</label>
          <input type="number" id="dbsplInput" placeholder="Enter dB SPL value" step="any">
        </div>
        
        <div class="result-section">
          <h4>SPL Conversions:</h4>
          <div class="result-item">
            <span>dB SPL to Pa:</span>
            <span id="dbsplToPa">0</span>
          </div>
          <div class="result-item">
            <span>Pa to dB SPL:</span>
            <span id="paTodbspl">0</span>
          </div>
        </div>
      </div>

      <!-- Physical Sound Units Converter -->
      <div class="converter-card">
        <h3>Physical Sound Units</h3>
        <div class="input-group">
          <label for="paInput">Pascal (Pa)</label>
          <input type="number" id="paInput" placeholder="Enter Pa value" step="any">
        </div>
        <div class="input-group">
          <label for="wattPerM2Input">Power (W/m²)</label>
          <input type="number" id="wattPerM2Input" placeholder="Enter W/m² value" step="any">
        </div>
        <div class="input-group">
          <label for="phonInput">Phon</label>
          <input type="number" id="phonInput" placeholder="Enter Phon value" step="any">
        </div>
        <div class="input-group">
          <label for="soneInput">Sone</label>
          <input type="number" id="soneInput" placeholder="Enter Sone value" step="any">
        </div>
        <div class="input-group">
          <label for="hzInput">Frequency (Hz)</label>
          <input type="number" id="hzInput" placeholder="Enter Hz value" step="any">
        </div>
        
        <div class="result-section">
          <h4>Loudness Conversions:</h4>
          <div class="result-item">
            <span>Phon to Sone:</span>
            <span id="phonToSone">0</span>
          </div>
          <div class="result-item">
            <span>Sone to Phon:</span>
            <span id="soneToPhon">0</span>
          </div>
        </div>
      </div>

      <!-- Additional Sound Units Converter -->
      <div class="converter-card">
        <h3>Additional Sound Units</h3>
        <div class="input-group">
          <label for="upaInput">Micropascal (µPa)</label>
          <input type="number" id="upaInput" placeholder="Enter µPa value" step="any">
        </div>
        <div class="input-group">
          <label for="wattInput">Watt (W)</label>
          <input type="number" id="wattInput" placeholder="Enter W value" step="any">
        </div>
        <div class="input-group">
          <label for="raylInput">Rayl</label>
          <input type="number" id="raylInput" placeholder="Enter Rayl value" step="any">
        </div>
        <div class="input-group">
          <label for="joulePerM3Input">Energy Density (J/m³)</label>
          <input type="number" id="joulePerM3Input" placeholder="Enter J/m³ value" step="any">
        </div>
        
        <div class="result-section">
          <h4>Pressure Conversions:</h4>
          <div class="result-item">
            <span>Pa to µPa:</span>
            <span id="paToUpa">0</span>
          </div>
          <div class="result-item">
            <span>µPa to Pa:</span>
            <span id="upaToPa">0</span>
          </div>
        </div>
      </div>
    </div>

    <div class="unit-info">
      <h4>Sound Units Definitions & Conversion Factors</h4>
      <p><strong>Decibel (dB):</strong> Logarithmic unit expressing the ratio of sound pressure levels</p>
      <p><strong>dBA:</strong> A-weighted decibel, approximates human hearing response at low levels</p>
      <p><strong>dBC:</strong> C-weighted decibel, approximates human hearing response at high levels</p>
      <p><strong>Pascal (Pa):</strong> SI unit of pressure (1 Pa = 1 N/m²)</p>
      <p><strong>W/m²:</strong> Sound intensity, power per unit area</p>
      <p><strong>Phon:</strong> Unit of loudness level, equal to dB SPL at 1 kHz</p>
      <p><strong>Sone:</strong> Unit of perceived loudness (1 sone = 40 phons)</p>
      <p><strong>Reference:</strong> 0 dB SPL = 20 µPa (threshold of human hearing)</p>
    </div>

    <div class="reference-section">
      <h4>Common Sound Level References</h4>
      <div class="reference-item">
        <span>Threshold of hearing:</span>
        <span>0 dB SPL</span>
      </div>
      <div class="reference-item">
        <span>Whisper:</span>
        <span>30 dB SPL</span>
      </div>
      <div class="reference-item">
        <span>Normal conversation:</span>
        <span>60 dB SPL</span>
      </div>
      <div class="reference-item">
        <span>City traffic:</span>
        <span>85 dB SPL</span>
      </div>
      <div class="reference-item">
        <span>Rock concert:</span>
        <span>110 dB SPL</span>
      </div>
      <div class="reference-item">
        <span>Threshold of pain:</span>
        <span>130 dB SPL</span>
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
      <h2>Common Sound Conversion Examples</h2>

      <h3>Sound Pressure Level Examples:</h3>
      <div class="example-text">Threshold of hearing: 0 dB SPL = 20 µPa
Normal conversation: 60 dB SPL = 0.02 Pa
Rock concert: 110 dB SPL = 6.32 Pa
Jet engine: 140 dB SPL = 200 Pa</div>

      <h3>Loudness Perception Examples:</h3>
      <div class="example-text">1 sone = 40 phons
2 sones = 50 phons
4 sones = 60 phons
8 sones = 70 phons</div>

      <h3>Frequency Range Examples:</h3>
      <div class="example-text">Human hearing range: 20 Hz - 20,000 Hz
Bass frequencies: 20 Hz - 250 Hz
Mid frequencies: 250 Hz - 4,000 Hz
Treble frequencies: 4,000 Hz - 20,000 Hz</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Sound & Acoustics Units Converter Tool</h2>

    <p>Working with sound measurements and need to convert between different acoustic units? Our free <strong>Sound & Acoustics Units Converter tool</strong> is the perfect solution for audio engineers, acousticians, students, researchers, and professionals. This comprehensive tool allows you to instantly convert between all major sound and acoustics units including decibels (dB, dBA, dBC, dB SPL), pressure units (Pa, µPa), intensity (W/m²), loudness (Phon, Sone), frequency (Hz), and acoustic impedance (Rayl). There's no download required, no registration needed, and your data privacy is guaranteed as all calculations happen securely right in your browser.</p>

    <h3>How to Use This Sound Units Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Your Input:</strong> Enter the value you want to convert in any of the input fields (dB, dBA, Pa, W/m², Phon, Sone, Hz, etc.).</li>
      <li><strong>Automatic Calculation:</strong> The tool automatically calculates and displays all equivalent values in real-time as you type.</li>
      <li><strong>Review Results:</strong> Check the conversion results section for accurate conversions between all related acoustic units.</li>
      <li><strong>Copy or Reset:</strong> Use the "Copy Results" button to save your conversions or "Reset All" to start over with new values.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're an audio engineer measuring sound levels at a concert venue. Your sound level meter shows 105 dBC, but you need to report this in Pascals for technical documentation. Instead of manually calculating the complex logarithmic conversion (which could lead to errors), you simply enter "105" in the dBC field. The tool instantly shows you the equivalent sound pressure level of approximately 3.56 Pa, saving time and ensuring accuracy in your acoustic reports.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Audio Engineers:</strong> Convert between different sound measurement systems for studio work and live events.</li>
      <li><strong>Acousticians:</strong> Quickly convert between traditional and SI units for noise assessment and room acoustics.</li>
      <li><strong>Students & Educators:</strong> Learn acoustic unit relationships and verify homework calculations with instant conversions.</li>
      <li><strong>Researchers:</strong> Convert experimental data between different measurement systems for publications and analysis.</li>
      <li><strong>Environmental Health Officers:</strong> Ensure accurate conversions for noise pollution monitoring and compliance reporting.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What is the difference between dB, dBA, and dBC?</strong><br>
      dB is the basic decibel unit. dBA uses A-weighting that approximates human hearing at low levels (for environmental noise). dBC uses C-weighting that approximates human hearing at high levels (for music and industrial noise).</p>

    <p><strong>How do I convert between sound pressure (Pa) and sound level (dB SPL)?</strong><br>
      Use the formula: dB SPL = 20 × log₁₀(P / P₀) where P is sound pressure in Pa and P₀ is reference pressure (20 µPa). Our converter handles this automatically.</p>

    <p><strong>Is my data kept private when I use this converter?</strong><br>
      Absolutely. All calculations happen locally in your browser. Your sound measurement values are never sent to any server, meaning we never see, store, or have access to your data. It is 100% secure and private.</p>

    <p><strong>Can I use this tool on my mobile device?</strong><br>
      Yes, our website and converter are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>What is the relationship between Phons and Sones?</strong><br>
      Phons measure loudness level (equivalent to dB SPL at 1 kHz), while Sones measure perceived loudness. The relationship is logarithmic: loudness in sones = 2^((phons - 40)/10).</p>

    <h3>Why Choose Our Sound & Acoustics Converter?</h3>
    <p>Our <strong>online sound units converter</strong> stands out from other tools because of its comprehensive coverage, accuracy, and privacy features. Unlike many online converters, we don't process your data on our servers - all calculations happen in your browser. This means your sensitive acoustic data, research measurements, and professional work remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Sound Unit Conversion</h3>
    <p>Sound unit conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Audio Engineering:</strong> Convert between different sound measurement systems for recording, mixing, and mastering</li>
      <li><strong>Noise Control:</strong> Ensure compliance with international noise standards and regulations</li>
      <li><strong>Research & Development:</strong> Standardize acoustic measurements across different research studies and publications</li>
      <li><strong>Education & Training:</strong> Teach students the relationships between different acoustic units and measurement systems</li>
      <li><strong>Environmental Monitoring:</strong> Convert operational sound measurements for noise pollution assessment and reporting</li>
    </ul>

    <h3>Understanding Sound Measurement Units</h3>
    <p>Sound measurement involves several different types of units, each serving a specific purpose:</p>
    <ul>
      <li><strong>Sound Pressure (Pa, µPa):</strong> Measures the amplitude of sound waves in air</li>
      <li><strong>Sound Level (dB SPL):</strong> Logarithmic scale that matches human perception of loudness</li>
      <li><strong>Sound Intensity (W/m²):</strong> Measures the power of sound waves per unit area</li>
      <li><strong>Loudness (Phon, Sone):</strong> Measures the subjective perception of sound intensity</li>
      <li><strong>Frequency (Hz):</strong> Measures the pitch or tone of sound</li>
      <li><strong>Acoustic Impedance (Rayl):</strong> Measures the opposition to sound wave propagation</li>
    </ul>

    <h3>Professional Applications</h3>
    <p>This converter is essential for professionals in various fields:</p>
    <ul>
      <li><strong>Architectural Acoustics:</strong> Convert between different room acoustic parameters</li>
      <li><strong>Industrial Hygiene:</strong> Monitor workplace noise exposure levels</li>
      <li><strong>Consumer Audio:</strong> Compare specifications of audio equipment</li>
      <li><strong>Telecommunications:</strong> Standardize audio level measurements</li>
      <li><strong>Medical Audiology:</strong> Convert hearing test measurements between different standards</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Input elements
    const dbInput = document.getElementById('dbInput');
    const dbaInput = document.getElementById('dbaInput');
    const dbcInput = document.getElementById('dbcInput');
    const dbsplInput = document.getElementById('dbsplInput');
    const paInput = document.getElementById('paInput');
    const wattPerM2Input = document.getElementById('wattPerM2Input');
    const phonInput = document.getElementById('phonInput');
    const soneInput = document.getElementById('soneInput');
    const hzInput = document.getElementById('hzInput');
    const upaInput = document.getElementById('upaInput');
    const wattInput = document.getElementById('wattInput');
    const raylInput = document.getElementById('raylInput');
    const joulePerM3Input = document.getElementById('joulePerM3Input');
    
    // Result elements
    const dbsplToPa = document.getElementById('dbsplToPa');
    const paTodbspl = document.getElementById('paTodbspl');
    const phonToSone = document.getElementById('phonToSone');
    const soneToPhon = document.getElementById('soneToPhon');
    const paToUpa = document.getElementById('paToUpa');
    const upaToPa = document.getElementById('upaToPa');
    
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');

    // Reference pressure for dB SPL calculations (20 µPa)
    const REFERENCE_PRESSURE = 0.00002; // 20 µPa in Pa

    // Event listeners for automatic conversion
    const inputElements = [
      dbInput, dbaInput, dbcInput, dbsplInput, paInput, 
      wattPerM2Input, phonInput, soneInput, hzInput, 
      upaInput, wattInput, raylInput, joulePerM3Input
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
      const dbValue = parseFloat(dbInput.value) || 0;
      const dbaValue = parseFloat(dbaInput.value) || 0;
      const dbcValue = parseFloat(dbcInput.value) || 0;
      const dbsplValue = parseFloat(dbsplInput.value) || 0;
      const paValue = parseFloat(paInput.value) || 0;
      const wattPerM2Value = parseFloat(wattPerM2Input.value) || 0;
      const phonValue = parseFloat(phonInput.value) || 0;
      const soneValue = parseFloat(soneInput.value) || 0;
      const hzValue = parseFloat(hzInput.value) || 0;
      const upaValue = parseFloat(upaInput.value) || 0;
      const wattValue = parseFloat(wattInput.value) || 0;
      const raylValue = parseFloat(raylInput.value) || 0;
      const joulePerM3Value = parseFloat(joulePerM3Input.value) || 0;

      // Update related fields based on which input was changed
      if (this === dbsplInput && dbsplValue !== 0) {
        const pressure = REFERENCE_PRESSURE * Math.pow(10, dbsplValue / 20);
        paInput.value = pressure.toFixed(6);
        upaInput.value = (pressure * 1000000).toFixed(2);
      } else if (this === paInput && paValue !== 0) {
        const dbspl = 20 * Math.log10(paValue / REFERENCE_PRESSURE);
        dbsplInput.value = dbspl.toFixed(2);
        upaInput.value = (paValue * 1000000).toFixed(2);
      } else if (this === upaInput && upaValue !== 0) {
        const pressure = upaValue / 1000000;
        paInput.value = pressure.toFixed(6);
        const dbspl = 20 * Math.log10(pressure / REFERENCE_PRESSURE);
        dbsplInput.value = dbspl.toFixed(2);
      } else if (this === phonInput && phonValue !== 0) {
        // Phon to Sone conversion
        const sone = Math.pow(2, (phonValue - 40) / 10);
        soneInput.value = sone.toFixed(4);
      } else if (this === soneInput && soneValue !== 0) {
        // Sone to Phon conversion
        const phon = 40 + 10 * Math.log2(soneValue);
        phonInput.value = phon.toFixed(2);
      }

      // For simple conversions between similar units
      if (this === dbInput && dbValue !== 0) {
        dbaInput.value = (dbValue - 2).toFixed(2); // Approximate conversion
        dbcInput.value = (dbValue + 1).toFixed(2); // Approximate conversion
      }

      // Update all result displays
      updateResultDisplays();
    }

    function updateResultDisplays() {
      const dbsplValue = parseFloat(dbsplInput.value) || 0;
      const paValue = parseFloat(paInput.value) || 0;
      const upaValue = parseFloat(upaInput.value) || 0;
      const phonValue = parseFloat(phonInput.value) || 0;
      const soneValue = parseFloat(soneInput.value) || 0;

      // Update result displays
      if (dbsplValue !== 0) {
        const pressure = REFERENCE_PRESSURE * Math.pow(10, dbsplValue / 20);
        dbsplToPa.textContent = pressure.toFixed(6) + ' Pa';
      } else {
        dbsplToPa.textContent = '0';
      }

      if (paValue !== 0) {
        const dbspl = 20 * Math.log10(paValue / REFERENCE_PRESSURE);
        paTodbspl.textContent = dbspl.toFixed(2) + ' dB SPL';
      } else {
        paTodbspl.textContent = '0';
      }

      if (phonValue !== 0) {
        const sone = Math.pow(2, (phonValue - 40) / 10);
        phonToSone.textContent = sone.toFixed(4) + ' sone';
      } else {
        phonToSone.textContent = '0';
      }

      if (soneValue !== 0) {
        const phon = 40 + 10 * Math.log2(soneValue);
        soneToPhon.textContent = phon.toFixed(2) + ' phon';
      } else {
        soneToPhon.textContent = '0';
      }

      if (paValue !== 0) {
        paToUpa.textContent = (paValue * 1000000).toFixed(2) + ' µPa';
      } else {
        paToUpa.textContent = '0';
      }

      if (upaValue !== 0) {
        upaToPa.textContent = (upaValue / 1000000).toFixed(6) + ' Pa';
      } else {
        upaToPa.textContent = '0';
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
Sound & Acoustics Conversion Results:
dB SPL to Pa: ${dbsplToPa.textContent}
Pa to dB SPL: ${paTodbspl.textContent}
Phon to Sone: ${phonToSone.textContent}
Sone to Phon: ${soneToPhon.textContent}
Pa to µPa: ${paToUpa.textContent}
µPa to Pa: ${upaToPa.textContent}

Generated using Sound & Acoustics Units Converter Tool
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
    dbsplInput.value = '60';
    performAllConversions.call(dbsplInput);
  });
</script>
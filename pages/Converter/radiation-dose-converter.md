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

<div class="content-placeholder">

<h2>Free Online Radiation Dose Converter Tool</h2>

<p>
Radiation measurements play a critical role in medicine, scientific research, nuclear energy, industrial testing, environmental monitoring, and radiation safety programs. Because different countries, organizations, and industries use different measurement systems, professionals often need to convert radiation values between multiple units quickly and accurately.
</p>

<p>
Our <strong>Free Online Radiation Dose Converter Tool</strong> has been designed to make these conversions simple, reliable, and accessible to everyone. Whether you need to convert Gray (Gy) to Rad, Sievert (Sv) to Rem, Becquerel (Bq) to Curie (Ci), or any other commonly used radiation unit, this converter provides accurate results instantly.
</p>

<p>
The tool is suitable for medical physicists, radiologists, radiation protection officers, nuclear engineers, researchers, students, educators, and anyone who works with radiation-related data. Instead of spending time performing manual calculations or searching through conversion charts, you can obtain accurate results within seconds.
</p>

<p>
One of the biggest advantages of this converter is simplicity. No registration is required, no software installation is necessary, and all calculations take place directly within your browser. This ensures convenience, speed, and privacy whenever you perform radiation conversions.
</p>

<h3>What Is Radiation?</h3>

<p>
Radiation is energy that travels through space or matter in the form of waves or particles. It occurs naturally in the environment and can also be produced artificially through medical equipment, industrial processes, and nuclear technologies.
</p>

<p>
Examples of radiation include:
</p>

<ul>

<li>X-rays used in medical imaging</li>

<li>Gamma rays emitted by radioactive materials</li>

<li>Alpha particles released during radioactive decay</li>

<li>Beta particles produced by unstable atoms</li>

<li>Cosmic radiation from outer space</li>

<li>Natural background radiation found in the environment</li>

</ul>

<p>
Because radiation can interact with living tissue and materials in different ways, scientists have developed several measurement systems to quantify exposure, absorbed energy, biological impact, and radioactive decay.
</p>

<h3>Why Radiation Unit Conversion Is Important</h3>

<p>
Radiation measurements are used worldwide, but not every country or industry follows the same unit system. Older documents often use traditional units such as rad, rem, roentgen, and curie, while modern scientific publications typically use SI units such as gray, sievert, and becquerel.
</p>

<p>
As a result, professionals frequently encounter situations where conversions are necessary. For example, a research paper may report radiation dose in grays, while regulatory guidelines may require values in rads. Similarly, a medical report may use millisieverts while historical records use rems.
</p>

<p>
Accurate conversions help ensure:
</p>

<ul>

<li>Regulatory compliance</li>

<li>Patient safety</li>

<li>Research consistency</li>

<li>International collaboration</li>

<li>Reliable documentation</li>

<li>Proper radiation monitoring</li>

</ul>

<h3>How to Use This Radiation Dose Converter</h3>

<p>
The converter has been designed to be straightforward and user-friendly. Even users with limited technical knowledge can perform accurate conversions easily.
</p>

<ul>

<li>
<strong>Step 1 – Enter a Value:</strong>
Type the radiation value you wish to convert.
</li>

<li>
<strong>Step 2 – Select the Original Unit:</strong>
Choose the unit corresponding to the value you entered.
</li>

<li>
<strong>Step 3 – Select the Desired Unit:</strong>
Choose the target unit for conversion.
</li>

<li>
<strong>Step 4 – View Instant Results:</strong>
The converter automatically calculates the equivalent value.
</li>

<li>
<strong>Step 5 – Use the Converted Data:</strong>
Apply the results to reports, calculations, research projects, safety assessments, or educational work.
</li>

</ul>

<p>
The entire process takes only a few seconds and helps eliminate calculation errors.
</p>

<h3>Real-Life Example of Radiation Conversion</h3>

<p>
Imagine a radiation safety officer reviewing personnel monitoring records at a healthcare facility. A worker's annual dose report is recorded as 500 millirem, but an international regulatory agency requires reporting in millisieverts.
</p>

<p>
Instead of manually calculating the conversion, the officer can simply enter the value into the converter and obtain the equivalent measurement instantly. This saves time, improves accuracy, and reduces the possibility of reporting mistakes.
</p>

<p>
Similar situations occur regularly in hospitals, laboratories, research centers, nuclear facilities, and educational institutions.
</p>

<h3>Who Can Benefit from This Radiation Converter?</h3>

<ul>

<li>
<strong>Medical Professionals:</strong>
Convert patient radiation doses for imaging, radiation therapy, and diagnostic procedures.
</li>

<li>
<strong>Medical Physicists:</strong>
Verify treatment plans and radiation calculations accurately.
</li>

<li>
<strong>Radiation Safety Officers:</strong>
Monitor occupational exposure and ensure regulatory compliance.
</li>

<li>
<strong>Nuclear Industry Workers:</strong>
Interpret radiation measurements from different monitoring systems.
</li>

<li>
<strong>Researchers:</strong>
Convert experimental data between SI and traditional units.
</li>

<li>
<strong>Students and Educators:</strong>
Learn radiation measurement principles and unit relationships.
</li>

<li>
<strong>Environmental Scientists:</strong>
Analyze radiation levels in air, water, soil, and ecosystems.
</li>

</ul>

<h3>Understanding Different Radiation Measurements</h3>

<p>
Radiation is measured in several different ways depending on what aspect of radiation is being evaluated.
</p>

<p>
The four most common categories include:
</p>

<ul>

<li>Radioactivity</li>

<li>Exposure</li>

<li>Absorbed Dose</li>

<li>Equivalent or Effective Dose</li>

</ul>

<p>
Each category serves a different purpose and uses its own measurement units.
</p>

<h3>Radioactivity Units</h3>

<p>
Radioactivity refers to the rate at which unstable atoms decay and emit radiation. It measures the source of radiation rather than the dose received by people or materials.
</p>

<p>
The most common radioactivity units are:
</p>

<ul>

<li><strong>Becquerel (Bq)</strong></li>

<li><strong>Curie (Ci)</strong></li>

</ul>

<p>
One becquerel represents one radioactive decay per second. The curie is an older unit originally based on the activity of radium.
</p>

<p>
These units are widely used in nuclear medicine, radioactive source calibration, environmental monitoring, and scientific research.
</p>

<h3>Exposure Units</h3>

<p>
Exposure measurements describe the amount of ionization produced by X-rays or gamma rays in air.
</p>

<p>
The traditional unit used for exposure is:
</p>

<ul>

<li><strong>Roentgen (R)</strong></li>

</ul>

<p>
Although exposure units are less commonly used today than absorbed dose units, they still appear in historical records, technical documentation, and certain specialized applications.
</p>

<h3>Absorbed Dose Units</h3>

<p>
Absorbed dose measures how much radiation energy is deposited into a material.
</p>

<p>
The two most common absorbed dose units are:
</p>

<ul>

<li><strong>Gray (Gy)</strong></li>

<li><strong>Rad</strong></li>

</ul>

<p>
The gray is the SI standard unit and represents one joule of radiation energy absorbed per kilogram of material.
</p>

<p>
Absorbed dose measurements are commonly used in radiation therapy, medical imaging, industrial irradiation, and scientific experiments.
</p>

<h3>Equivalent and Effective Dose Units</h3>

<p>
Not all types of radiation affect biological tissue in the same way. Equivalent dose accounts for differences in biological effectiveness between radiation types.
</p>

<p>
The most common units are:
</p>

<ul>

<li><strong>Sievert (Sv)</strong></li>

<li><strong>Rem</strong></li>

</ul>

<p>
These measurements are especially important in radiation protection and occupational safety because they estimate the potential health impact of radiation exposure.
</p>

<h3>Why the Sievert Is Important</h3>

<p>
The sievert is considered one of the most important units in radiation protection. It helps estimate the biological risk associated with radiation exposure by considering both the absorbed energy and the type of radiation involved.
</p>

<p>
Radiation protection guidelines, occupational dose limits, and public safety regulations are typically expressed in sieverts or millisieverts.
</p>

<p>
For example, annual occupational exposure limits for radiation workers are generally specified using millisieverts (mSv).
</p>

<h3>Traditional Units vs SI Units</h3>

<p>
Historically, radiation measurements were expressed using units such as rad, rem, roentgen, and curie. While these units are still encountered in some regions and older documents, modern scientific practice increasingly relies on SI units.
</p>

<p>
The most common SI units include:
</p>

<ul>

<li>Becquerel (Bq)</li>

<li>Gray (Gy)</li>

<li>Sievert (Sv)</li>

</ul>

<p>
Understanding both systems is essential because professionals often need to interpret historical records alongside modern data.
</p>

<h3>Common Radiation Conversion Factors</h3>

<p>
Understanding a few basic radiation conversion factors can make it easier to interpret reports, scientific papers, safety documents, and medical records. While our converter performs all calculations automatically, knowing these relationships helps users better understand radiation measurements.
</p>

<ul>

<li><strong>1 Gray (Gy) = 100 Rad</strong></li>

<li><strong>1 Rad = 0.01 Gray (Gy)</strong></li>

<li><strong>1 Sievert (Sv) = 100 Rem</strong></li>

<li><strong>1 Rem = 0.01 Sievert (Sv)</strong></li>

<li><strong>1 Millisievert (mSv) = 100 Millirem (mrem)</strong></li>

<li><strong>1 Becquerel (Bq) = 1 Radioactive Decay per Second</strong></li>

<li><strong>1 Curie (Ci) = 3.7 × 10¹⁰ Becquerels</strong></li>

<li><strong>1 Millicurie (mCi) = 37 Million Becquerels</strong></li>

<li><strong>1 Microcurie (µCi) = 37,000 Becquerels</strong></li>

</ul>

<p>
These conversion factors are widely accepted by international scientific organizations and radiation protection authorities.
</p>

<h3>Radiation in Medical Imaging</h3>

<p>
Modern healthcare relies heavily on medical imaging technologies that use radiation. Accurate dose measurement and conversion help ensure patient safety while maintaining image quality and diagnostic effectiveness.
</p>

<p>
Common imaging procedures include:
</p>

<ul>

<li>X-ray Examinations</li>

<li>Computed Tomography (CT) Scans</li>

<li>Fluoroscopy</li>

<li>Mammography</li>

<li>Nuclear Medicine Imaging</li>

<li>PET Scans</li>

</ul>

<p>
Medical professionals often convert radiation values between different units when comparing equipment specifications, documenting patient doses, or reviewing research publications.
</p>

<h3>Radiation Therapy Applications</h3>

<p>
Radiation therapy is one of the most effective treatments for many forms of cancer. High-energy radiation is carefully delivered to destroy cancer cells while minimizing damage to surrounding healthy tissue.
</p>

<p>
Treatment planning systems commonly use absorbed dose measurements expressed in Gray (Gy).
</p>

<p>
Medical physicists, radiation oncologists, and dosimetrists rely on accurate dose calculations and unit conversions to ensure treatment accuracy and patient safety.
</p>

<p>
Even small errors in dose calculations can significantly affect treatment outcomes, which is why reliable conversion tools are valuable resources in clinical settings.
</p>

<h3>Radiation Protection and Occupational Safety</h3>

<p>
Radiation protection programs are designed to minimize unnecessary exposure while allowing beneficial uses of radiation in medicine, research, industry, and energy production.
</p>

<p>
Radiation workers often wear personal dosimeters that measure accumulated exposure over time.
</p>

<p>
These measurements may be reported in:
</p>

<ul>

<li>Millisieverts (mSv)</li>

<li>Microsieverts (µSv)</li>

<li>Rem</li>

<li>Millirem (mrem)</li>

</ul>

<p>
Converting between these units helps organizations comply with national and international safety regulations.
</p>

<h3>Radiation Monitoring in Nuclear Facilities</h3>

<p>
Nuclear power plants, fuel processing facilities, research reactors, and waste management sites continuously monitor radiation levels to ensure safe operation.
</p>

<p>
Radiation measurements are used to:
</p>

<ul>

<li>Monitor worker exposure</li>

<li>Assess environmental impact</li>

<li>Track radioactive materials</li>

<li>Verify regulatory compliance</li>

<li>Support emergency preparedness</li>

</ul>

<p>
Because different monitoring systems may use different unit conventions, radiation conversion tools are frequently used in daily operations.
</p>

<h3>Environmental Radiation Monitoring</h3>

<p>
Radiation occurs naturally in the environment. Environmental scientists monitor radiation levels in air, water, soil, food, and ecosystems to assess potential risks and ensure public safety.
</p>

<p>
Sources of natural background radiation include:
</p>

<ul>

<li>Cosmic Radiation</li>

<li>Naturally Occurring Radioactive Minerals</li>

<li>Radon Gas</li>

<li>Terrestrial Radiation</li>

<li>Natural Radioisotopes in Food and Water</li>

</ul>

<p>
Accurate conversion between measurement units helps researchers compare data from different studies and monitoring programs.
</p>

<h3>Radiation in Scientific Research</h3>

<p>
Researchers in physics, biology, chemistry, medicine, environmental science, and engineering often work with radiation measurements.
</p>

<p>
Scientific publications may use SI units, while older research papers frequently use traditional units. Converting between these systems ensures consistency and improves data interpretation.
</p>

<p>
Applications include:
</p>

<ul>

<li>Medical Research</li>

<li>Nuclear Physics</li>

<li>Environmental Studies</li>

<li>Space Science</li>

<li>Materials Research</li>

<li>Industrial Testing</li>

</ul>

<h3>Typical Radiation Dose Examples</h3>

<p>
Understanding real-world radiation levels helps place measurements into context. Radiation is present in everyday life, and exposure levels vary widely depending on the source.
</p>

<ul>

<li><strong>Chest X-ray:</strong> Approximately 0.1 mSv</li>

<li><strong>Dental X-ray:</strong> Approximately 0.005 mSv</li>

<li><strong>CT Scan:</strong> Approximately 2–20 mSv</li>

<li><strong>Annual Natural Background Radiation:</strong> Approximately 2–4 mSv</li>

<li><strong>Cross-Country Airline Flight:</strong> Approximately 0.03–0.08 mSv</li>

<li><strong>Nuclear Medicine Procedures:</strong> Varies depending on the examination</li>

</ul>

<p>
These values are approximate and may vary depending on equipment, procedures, location, and individual circumstances.
</p>

<h3>Understanding Radioactivity Measurements</h3>

<p>
Radioactivity measures how rapidly radioactive atoms decay. It does not directly indicate the dose received by a person.
</p>

<p>
For example, two radioactive sources may have identical activity levels but produce very different radiation doses depending on factors such as:
</p>

<ul>

<li>Distance from the source</li>

<li>Shielding materials</li>

<li>Exposure duration</li>

<li>Radiation type</li>

<li>Source geometry</li>

</ul>

<p>
This distinction is important when interpreting radiation measurements and safety information.
</p>

<h3>Benefits of Using an Online Radiation Converter</h3>

<p>
A dedicated radiation converter provides several advantages compared to manual calculations or printed conversion charts.
</p>

<ul>

<li>Fast and accurate results</li>

<li>Reduces calculation errors</li>

<li>Supports multiple radiation units</li>

<li>Useful for education and training</li>

<li>Improves regulatory compliance</li>

<li>Accessible from any device</li>

<li>No software installation required</li>

<li>Available anytime</li>

</ul>

<p>
These benefits make online converters valuable tools for professionals, students, and researchers alike.
</p>

<h3>Common Mistakes in Radiation Conversion</h3>

<p>
When converting radiation units manually, several common mistakes can occur:
</p>

<ul>

<li>Confusing absorbed dose and equivalent dose units</li>

<li>Mixing radioactivity units with dose units</li>

<li>Using incorrect conversion factors</li>

<li>Applying outdated standards</li>

<li>Misplacing decimal points</li>

<li>Confusing milli-, micro-, and nano-prefixes</li>

</ul>

<p>
Using a reliable converter significantly reduces the likelihood of these errors.
</p>

<h3>International Radiation Standards</h3>

<p>
Several organizations establish radiation measurement standards and safety recommendations worldwide.
</p>

<p>
Examples include:
</p>

<ul>

<li>International Atomic Energy Agency (IAEA)</li>

<li>International Commission on Radiological Protection (ICRP)</li>

<li>World Health Organization (WHO)</li>

<li>International Commission on Radiation Units and Measurements (ICRU)</li>

<li>National Radiation Protection Agencies</li>

</ul>

<p>
These organizations promote the use of standardized measurement systems to improve safety, consistency, and international cooperation.
</p>

<h3>Radiation Safety Principles</h3>

<p>
Radiation protection programs are based on several fundamental principles designed to minimize unnecessary exposure.
</p>

<ul>

<li><strong>Time:</strong> Reduce exposure duration whenever possible.</li>

<li><strong>Distance:</strong> Increase distance from radiation sources.</li>

<li><strong>Shielding:</strong> Use appropriate protective materials.</li>

<li><strong>Monitoring:</strong> Measure and record exposure levels regularly.</li>

<li><strong>Training:</strong> Ensure personnel understand radiation risks and procedures.</li>

</ul>

<p>
Accurate dose measurements and unit conversions support all of these safety practices.
</p>

<h3>Why Accurate Radiation Conversion Matters</h3>

<p>
Radiation measurements influence important decisions involving healthcare, occupational safety, environmental protection, scientific research, and regulatory compliance.
</p>

<p>
An incorrect conversion may lead to reporting errors, misunderstandings, unnecessary concern, or inaccurate documentation. In professional environments, precision is essential.
</p>

<p>
Reliable conversion tools help users maintain consistency and confidence when working with radiation-related information.
</p>

<h3>Frequently Asked Questions</h3>

<p>
<strong>What unit is most commonly used for radiation protection?</strong><br>
The sievert (Sv) and its subunits, such as millisievert (mSv), are widely used in radiation protection because they account for biological effects.
</p>

<p>
<strong>Which unit measures radioactive decay?</strong><br>
The becquerel (Bq) measures radioactive decay and represents one decay event per second.
</p>

<p>
<strong>Is gray the same as sievert?</strong><br>
No. Gray measures absorbed energy, while sievert estimates biological impact. They represent different aspects of radiation exposure.
</p>

<p>
<strong>Why do older documents use rem and rad?</strong><br>
These traditional units were widely used before SI units became the international standard. They still appear in historical records and some regulatory documents.
</p>

<p>
<strong>Can this converter be used for educational purposes?</strong><br>
Yes. It is an excellent resource for students, teachers, researchers, and professionals who want to understand radiation measurement systems.
</p>

<h3>Final Thoughts</h3>

<p>
Radiation measurements are essential in medicine, research, environmental monitoring, industrial applications, and nuclear technology. Because multiple measurement systems are used worldwide, converting between units accurately is often necessary.
</p>

<p>
Our <strong>Free Online Radiation Dose Converter Tool</strong> provides a convenient, accurate, and user-friendly solution for converting between Gray, Sievert, Rad, Rem, Roentgen, Becquerel, Curie, and many related units.
</p>

<p>
Whether you are a medical professional, radiation safety officer, student, educator, researcher, or industry specialist, this converter helps simplify calculations and improve accuracy. With comprehensive unit support, instant results, and professional-grade precision, it serves as a dependable resource for all your radiation conversion needs.
</p>

<p>
Use the converter whenever you need fast, reliable, and accurate radiation calculations without the complexity of manual conversion formulas.
</p>

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
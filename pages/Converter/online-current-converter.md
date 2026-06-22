---
layout: default
title: "Online Current Converter - Convert Electric Current Units"
permalink: /online-current-converter-convert-electric-current-units/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Current Converter - Convert Electric Current Units Accurately</title>
<meta name="description"
  content="Free online electric current converter tool. Convert between Ampere, Milliampere, Microampere, Abampere and other current units instantly. Accurate conversions for electrical engineering and electronics.">
<meta name="keywords"
  content="current converter, electric current conversion, ampere, milliampere, microampere, abampere, statampere, biot, electronics, electrical engineering">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Current Converter Styles */
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

  .counter-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    border-left: 4px solid var(--primary);
  }

  .counter-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: white;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .counter-item span:first-child {
    font-weight: 600;
    color: var(--primary);
  }

  .counter-item span:last-child {
    font-weight: bold;
    color: #2c3e50;
  }

  .input-section {
    margin: 20px 0;
  }

  .input-section textarea {
    width: 100%;
    padding: 18px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 16px;
    min-height: 220px;
    resize: vertical;
    font-family: 'Courier New', monospace;
    transition: border-color 0.3s;
  }

  .input-section textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .file-upload-section {
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .file-upload-button {
    padding: 12px 20px;
    background: var(--primary);
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
    border: none;
  }

  .file-upload-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
  }

  #fileName {
    font-style: italic;
    color: #7f8c8d;
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

  .case-button.warning {
    background: #ffc107;
    color: #212529;
  }

  .case-button.warning:hover {
    background: #e0a800;
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

  .file-info {
    margin-top: 10px;
    font-size: 14px;
    color: #7f8c8d;
    width: 100%;
  }

  .options-section {
    background: #f8f9fa;
    padding: 0px;
    border-radius: 10px;
    margin: 10px 0;
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

  .upload-icon {
    color: var(--primary);
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    padding: 5px;
    border-radius: 4px;
  }

  .upload-icon:hover {
    background: rgba(52, 152, 219, 0.1);
    transform: scale(1.1);
  }

  /* Modal styles */
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.3s;
  }

  .modal-content {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 30px;
    border-radius: 12px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    animation: slideIn 0.3s;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
  }

  .modal-title {
    font-size: 1.5rem;
    color: var(--primary);
    margin: 0;
  }

  .close-modal {
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s;
  }

  .close-modal:hover {
    color: #000;
  }

  .modal-body {
    margin-bottom: 20px;
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  .modal-button {
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
  }

  .modal-button.primary {
    background: var(--primary);
    color: white;
  }

  .modal-button.secondary {
    background: #6c757d;
    color: white;
  }

  .modal-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideIn {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  /* Current Converter specific styles */
  .conversion-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .option-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .option-label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .option-select, .option-input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
  }

  .option-input {
    width: 100%;
  }

  .option-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .option-checkbox input {
    width: 18px;
    height: 18px;
  }

  .unit-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .unit-category {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .unit-category h3 {
    color: var(--primary);
    margin-bottom: 15px;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 10px;
  }

  .unit-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .unit-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  .unit-item:hover {
    background: #e9ecef;
  }

  .unit-name {
    font-weight: 500;
    color: #2c3e50;
  }

  .unit-value {
    font-weight: bold;
    color: var(--primary);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .counter-wrapper {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .case-button {
      font-size: 13px;
      padding: 12px 8px;
    }

    .file-upload-section {
      flex-direction: column;
      align-items: flex-start;
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

    .modal-content {
      margin: 20% auto;
      width: 95%;
      padding: 20px;
    }

    .conversion-options {
      grid-template-columns: 1fr;
    }

    .unit-categories {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Current Converter</h1>
  <p class="welcome-message">Convert between Ampere, Milliampere, Microampere, Abampere and other electric current units instantly. Accurate conversions for electrical engineering, electronics, and physics applications.</p>

  <div class="converter-section">
    <h2>Electric Current Unit Converter</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Input Value: </span>
        <span id="inputValue">0</span>
      </div>
      <div class="counter-item">
        <span>From Unit: </span>
        <span id="fromUnit">A</span>
      </div>
      <div class="counter-item">
        <span>To Unit: </span>
        <span id="toUnit">mA</span>
      </div>
      <div class="counter-item">
        <span>Result: </span>
        <span id="resultValue">0</span>
      </div>
    </div>

    <div class="conversion-options">
      <div class="option-group">
        <label class="option-label">Input Value</label>
        <input type="number" id="currentInput" class="option-input" value="1" step="0.001">
      </div>
      
      <div class="option-group">
        <label class="option-label">From Unit</label>
        <select id="fromUnitSelect" class="option-select">
          <option value="A">Ampere (A)</option>
          <option value="mA">Milliampere (mA)</option>
          <option value="µA">Microampere (µA)</option>
          <option value="kA">Kiloampere (kA)</option>
          <option value="MA">Megaampere (MA)</option>
          <option value="abA">Abampere (abA)</option>
          <option value="statA">Statampere (statA)</option>
          <option value="Bi">Biot (Bi)</option>
          <option value="e⁻/s">Elementary Charge per Second (e⁻/s)</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">To Unit</label>
        <select id="toUnitSelect" class="option-select">
          <option value="mA">Milliampere (mA)</option>
          <option value="A">Ampere (A)</option>
          <option value="µA">Microampere (µA)</option>
          <option value="kA">Kiloampere (kA)</option>
          <option value="MA">Megaampere (MA)</option>
          <option value="abA">Abampere (abA)</option>
          <option value="statA">Statampere (statA)</option>
          <option value="Bi">Biot (Bi)</option>
          <option value="e⁻/s">Elementary Charge per Second (e⁻/s)</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="autoConvert" checked>
          <label for="autoConvert">Auto Convert</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="showFormula">
          <label for="showFormula">Show Conversion Formula</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="convert">Convert Current</button>
        <button class="case-button" data-action="swap">Swap Units</button>
        <button class="case-button" data-action="reset">Reset</button>
        <button class="case-button" data-action="copy">Copy Result</button>
        <button class="case-button success" data-action="save">Save Conversion</button>
        <button class="case-button warning" data-action="history">View History</button>
        <button class="case-button secondary" data-action="clear">Clear All</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="unit-categories">
      <div class="unit-category">
        <h3>SI Units</h3>
        <div class="unit-list">
          <div class="unit-item">
            <span class="unit-name">Ampere (A)</span>
            <span class="unit-value" id="A">1.000</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Milliampere (mA)</span>
            <span class="unit-value" id="mA">1000.000</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Microampere (µA)</span>
            <span class="unit-value" id="µA">1000000.000</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Kiloampere (kA)</span>
            <span class="unit-value" id="kA">0.001</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Megaampere (MA)</span>
            <span class="unit-value" id="MA">0.000001</span>
          </div>
        </div>
      </div>

      <div class="unit-category">
        <h3>CGS & Specialized Units</h3>
        <div class="unit-list">
          <div class="unit-item">
            <span class="unit-name">Abampere (abA)</span>
            <span class="unit-value" id="abA">0.100</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Statampere (statA)</span>
            <span class="unit-value" id="statA">2997924536.843</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Biot (Bi)</span>
            <span class="unit-value" id="Bi">0.100</span>
          </div>
        </div>
      </div>

      <div class="unit-category">
        <h3>Physics & Particle Units</h3>
        <div class="unit-list">
          <div class="unit-item">
            <span class="unit-name">Elementary Charge per Second (e⁻/s)</span>
            <span class="unit-value" id="e⁻/s">6241509074460.000</span>
          </div>
        </div>
      </div>
    </div>

    <div class="examples">
      <h2>Common Current Conversions</h2>

      <h3>Everyday Electronics:</h3>
      <div class="example-text">• LED Current: 20 mA = 0.02 A = 20000 µA
• USB Port: 500 mA = 0.5 A = 500000 µA
• Smartphone Charger: 2 A = 2000 mA = 0.002 kA</div>

      <h3>Industrial Applications:</h3>
      <div class="example-text">• Car Starter: 200 A = 0.2 kA = 200000 mA
• Industrial Motor: 50 A = 50000 mA = 0.05 kA
• Power Transmission: 1000 A = 1 kA = 1000000 mA</div>

      <h3>Conversion Formulas:</h3>
      <div class="example-text">1 A = 1000 mA = 1000000 µA
1 mA = 0.001 A = 1000 µA
1 µA = 0.000001 A = 0.001 mA
1 abA = 10 A = 10000 mA
1 statA ≈ 3.3356 × 10⁻¹⁰ A
1 e⁻/s ≈ 1.602 × 10⁻¹⁹ A</div>
    </div>
  </div>

<div class="content-placeholder">

<h2>Free Online Electric Current Converter Tool</h2>

<p>
Electric current is one of the most fundamental concepts in electricity and electronics. Whether you are designing an electronic circuit, troubleshooting electrical equipment, conducting scientific research, or simply learning about electricity, understanding current measurements is essential. Because current values can vary from extremely tiny microampere levels in sensitive electronic devices to thousands of amperes in industrial power systems, engineers and technicians often need to convert between different current units quickly and accurately.
</p>

<p>
Our <strong>Free Online Electric Current Converter Tool</strong> is designed to make this process simple and reliable. Instead of performing manual calculations or searching through conversion tables, you can instantly convert between amperes, milliamperes, microamperes, kiloamperes, abamperes, statamperes, and many other current units. The tool delivers fast and precise results suitable for educational, professional, scientific, and industrial applications.
</p>

<p>
Whether you are an electronics engineer checking component specifications, a student solving electrical problems, a researcher working with specialized unit systems, or a hobbyist building DIY projects, this converter provides an easy and convenient way to handle current conversions without errors.
</p>

<h3>What Is Electric Current?</h3>

<p>
Electric current is the flow of electric charge through a conductor or circuit. It represents the rate at which electrons move through a wire, component, or electrical system. In simple terms, current can be compared to the flow of water through a pipe. The greater the number of electrons flowing through a circuit, the higher the current.
</p>

<p>
Current is one of the most important electrical quantities and plays a central role in virtually every electrical and electronic system. From tiny wearable sensors to massive industrial power plants, electric current is what enables devices to function and transfer energy.
</p>

<p>
The standard international unit of electric current is the <strong>Ampere (A)</strong>, commonly known as the amp. However, depending on the application, smaller or larger units are often used to make measurements more practical and easier to understand.
</p>

<h3>How to Use This Electric Current Converter</h3>

<p>
Using the converter is simple and requires only a few steps:
</p>

<ul>

<li>
<strong>Step 1 – Enter the Current Value:</strong>
Type the numerical value you want to convert into the input box.
</li>

<li>
<strong>Step 2 – Select the Original Unit:</strong>
Choose the unit associated with your input value from the "From Unit" menu.
</li>

<li>
<strong>Step 3 – Select the Target Unit:</strong>
Choose the desired output unit from the "To Unit" dropdown menu.
</li>

<li>
<strong>Step 4 – Convert Instantly:</strong>
Click the convert button or allow automatic conversion to display the result immediately.
</li>

<li>
<strong>Step 5 – Review Additional Equivalents:</strong>
Many converters also display equivalent values in other commonly used current units for quick reference.
</li>

</ul>

<p>
The process takes only seconds and eliminates the possibility of calculation mistakes that may occur when performing manual conversions.
</p>

<h3>Why Current Conversion Is Important</h3>

<p>
Different industries, countries, scientific disciplines, and technical documents may use different current units. Engineers frequently encounter specifications expressed in amperes, milliamperes, or microamperes depending on the size and purpose of the electrical system being described.
</p>

<p>
For example, a household appliance may consume several amperes of current, while a microcontroller sensor may operate with only a few microamperes. Understanding the relationship between these units helps prevent misunderstandings and ensures accurate calculations.
</p>

<p>
Current conversion becomes especially important when comparing specifications from different manufacturers, analyzing laboratory data, interpreting technical datasheets, or designing circuits with strict current requirements.
</p>

<h3>Real-World Example of Current Conversion</h3>

<p>
Imagine an electronics engineer developing a battery-powered device. The sensor used in the design consumes 250 microamperes, the microcontroller consumes 18 milliamperes during operation, and the display consumes 120 milliamperes.
</p>

<p>
To calculate total current consumption and estimate battery life, all values must be expressed using the same unit. By converting microamperes and milliamperes into amperes or vice versa, the engineer can easily determine the device’s overall power requirements.
</p>

<p>
Without proper unit conversion, incorrect calculations could result in selecting the wrong battery size, reducing device performance, or causing unexpected operational issues.
</p>

<h3>Common Electric Current Units Explained</h3>

<p>
Understanding the most frequently used current units can make electrical calculations easier and more intuitive.
</p>

<ul>

<li>
<strong>Ampere (A)</strong><br>
The ampere is the SI base unit of electric current. It represents the flow of one coulomb of electric charge per second through a conductor.
</li>

<li>
<strong>Milliampere (mA)</strong><br>
One milliampere equals one-thousandth of an ampere. It is commonly used for electronic circuits, LEDs, sensors, and portable devices.
</li>

<li>
<strong>Microampere (µA)</strong><br>
One microampere equals one-millionth of an ampere. This unit is typically used for extremely small currents in integrated circuits, biomedical sensors, and precision instruments.
</li>

<li>
<strong>Nanoampere (nA)</strong><br>
One nanoampere equals one-billionth of an ampere. Nanoampere measurements are often encountered in laboratory experiments and semiconductor research.
</li>

<li>
<strong>Kiloampere (kA)</strong><br>
One kiloampere equals one thousand amperes. Large industrial equipment and electrical substations may involve currents measured in kiloamperes.
</li>

<li>
<strong>Megaampere (MA)</strong><br>
One megaampere equals one million amperes. Such extremely large currents are primarily used in advanced scientific research and plasma physics.
</li>

<li>
<strong>Abampere (abA)</strong><br>
The abampere belongs to the electromagnetic CGS system and is occasionally encountered in theoretical physics and historical scientific literature.
</li>

<li>
<strong>Statampere (statA)</strong><br>
The statampere is part of the electrostatic CGS system and is mainly used in advanced academic and research applications.
</li>

</ul>

<h3>Who Should Use This Current Converter?</h3>

<ul>

<li>
<strong>Electronics Engineers:</strong>
Design circuits, analyze current consumption, and verify component ratings.
</li>

<li>
<strong>Electrical Engineers:</strong>
Work with electrical distribution systems, industrial equipment, and power calculations.
</li>

<li>
<strong>Technicians:</strong>
Interpret measurements from various instruments and testing devices.
</li>

<li>
<strong>Researchers:</strong>
Convert between SI and specialized units for scientific studies and publications.
</li>

<li>
<strong>Students:</strong>
Learn current relationships and solve electrical engineering problems.
</li>

<li>
<strong>Teachers and Educators:</strong>
Demonstrate practical examples of current conversion in classrooms and laboratories.
</li>

<li>
<strong>DIY Enthusiasts:</strong>
Build electronics projects while accurately understanding current specifications.
</li>

</ul>

<h3>Understanding Current in Everyday Life</h3>

<p>
Although electric current is often associated with complex engineering concepts, it affects our daily lives in countless ways. Every electrical device we use relies on current flow to operate.
</p>

<p>
A smartphone charger may provide a current of around 1 to 3 amperes. A laptop charger may deliver several amperes depending on the device. Small LEDs often operate at currents between 10 and 30 milliamperes, while modern microprocessors may contain sections that operate with microampere-level currents when in sleep mode.
</p>

<p>
By understanding these values and their relationships, users can better appreciate how electrical systems function and why accurate current measurement is important.
</p>

<h3>Frequently Asked Questions</h3>

<p>
<strong>What is an ampere?</strong><br>
An ampere is the SI base unit used to measure electric current. It represents the flow of electric charge through a conductor at a specific rate.
</p>

<p>
<strong>How many milliamperes are in one ampere?</strong><br>
One ampere equals 1,000 milliamperes. Conversely, one milliampere equals 0.001 ampere.
</p>

<p>
<strong>How many microamperes are in one ampere?</strong><br>
One ampere equals 1,000,000 microamperes, making microamperes useful for measuring very small currents.
</p>

<p>
<strong>When should I use milliamperes instead of amperes?</strong><br>
Milliamperes are commonly used when measuring relatively small currents in electronic circuits. Components such as LEDs, sensors, microcontrollers, and portable electronic devices often operate in the milliampere range, making the unit easier to read and understand than expressing values in fractions of an ampere.
</p>

<p>
<strong>What are microamperes used for?</strong><br>
Microamperes are typically used when measuring extremely small currents. They are common in low-power electronics, medical devices, precision sensors, battery-powered systems, and semiconductor applications where power consumption must be minimized.
</p>

<p>
<strong>What is the difference between SI and CGS current units?</strong><br>
SI units are the internationally accepted standard used in modern engineering and science. CGS units such as abampere and statampere belong to older measurement systems that are still occasionally used in theoretical physics and historical literature.
</p>

<p>
<strong>Can this converter be used for professional engineering work?</strong><br>
Yes. The converter uses precise mathematical conversion factors and is suitable for educational, industrial, engineering, and scientific applications where accurate current measurements are important.
</p>

<p>
<strong>Is the converter free to use?</strong><br>
Absolutely. The tool is completely free and does not require registration, subscriptions, downloads, or installation.
</p>

<h3>Important Electric Current Conversion Factors</h3>

<p>
The following conversion factors are among the most commonly used in electronics, electrical engineering, and scientific calculations:
</p>

<ul>

<li><strong>1 Ampere (A) = 1,000 Milliamperes (mA)</strong></li>

<li><strong>1 Ampere (A) = 1,000,000 Microamperes (µA)</strong></li>

<li><strong>1 Ampere (A) = 1,000,000,000 Nanoamperes (nA)</strong></li>

<li><strong>1 Milliampere (mA) = 0.001 Ampere (A)</strong></li>

<li><strong>1 Milliampere (mA) = 1,000 Microamperes (µA)</strong></li>

<li><strong>1 Microampere (µA) = 0.000001 Ampere (A)</strong></li>

<li><strong>1 Microampere (µA) = 0.001 Milliampere (mA)</strong></li>

<li><strong>1 Kiloampere (kA) = 1,000 Amperes (A)</strong></li>

<li><strong>1 Megaampere (MA) = 1,000,000 Amperes (A)</strong></li>

<li><strong>1 Abampere (abA) = 10 Amperes (A)</strong></li>

</ul>

<p>
These relationships are frequently used when designing circuits, selecting components, analyzing power systems, and interpreting technical documentation.
</p>

<h3>Common Applications of Current Conversion</h3>

<p>
Current conversion is an essential part of electrical and electronic work. Professionals across many industries rely on accurate conversions to ensure compatibility, safety, and proper system performance.
</p>

<h4>Circuit Design and Electronics</h4>

<p>
Engineers often work with components that use different current ratings. LEDs may require currents measured in milliamperes, while processors can have operating currents specified in amperes or microamperes depending on operating mode.
</p>

<p>
Converting these values allows engineers to calculate total power consumption, choose suitable power supplies, and verify component limitations.
</p>

<h4>Battery-Powered Devices</h4>

<p>
Portable electronics such as smartphones, wearable devices, wireless sensors, and remote controls depend heavily on accurate current measurements.
</p>

<p>
Battery life calculations often require converting between microamperes, milliamperes, and amperes to estimate operating time accurately.
</p>

<h4>Industrial Power Systems</h4>

<p>
Factories, substations, and power distribution networks frequently handle currents measured in hundreds or thousands of amperes.
</p>

<p>
Engineers use current conversions to compare equipment ratings, verify system capacities, and ensure compliance with electrical standards.
</p>

<h4>Scientific Research</h4>

<p>
Researchers may encounter multiple measurement systems when reviewing academic papers or conducting experiments. Converting between SI and CGS current units helps maintain consistency and simplifies data analysis.
</p>

<h4>Education and Training</h4>

<p>
Students studying electricity and electronics often perform current conversions while solving laboratory exercises, homework assignments, and engineering calculations.
</p>

<p>
A reliable converter helps learners focus on understanding concepts rather than spending excessive time performing manual calculations.
</p>

<h3>Current Measurement Instruments</h3>

<p>
Several instruments are used to measure electric current in practical applications. Understanding these tools can help users appreciate why accurate current conversion is important.
</p>

<h4>Ammeter</h4>

<p>
An ammeter is the most common instrument used to measure electric current. It is connected in series with a circuit and provides direct current readings.
</p>

<h4>Digital Multimeter</h4>

<p>
Digital multimeters are versatile devices capable of measuring current, voltage, resistance, continuity, and other electrical quantities. Most technicians and engineers rely on multimeters for routine testing and troubleshooting.
</p>

<h4>Clamp Meter</h4>

<p>
Clamp meters allow users to measure current without physically disconnecting wires. They are widely used in industrial and commercial electrical systems.
</p>

<h4>Oscilloscope Current Probes</h4>

<p>
Advanced laboratories and engineering environments often use oscilloscope current probes to observe changing current waveforms in real time.
</p>

<h3>Typical Current Values in Everyday Devices</h3>

<p>
Understanding real-world current values can make electrical measurements easier to visualize.
</p>

<ul>

<li>
<strong>Digital Watch:</strong>
A few microamperes during normal operation.
</li>

<li>
<strong>Remote Control:</strong>
Usually operates with currents ranging from microamperes to milliamperes.
</li>

<li>
<strong>LED Indicator:</strong>
Typically 10–20 milliamperes.
</li>

<li>
<strong>Smartphone Charging:</strong>
Usually between 1 and 3 amperes.
</li>

<li>
<strong>Laptop Charging:</strong>
Commonly 2–6 amperes.
</li>

<li>
<strong>Microwave Oven:</strong>
Several amperes depending on power rating.
</li>

<li>
<strong>Electric Vehicle Charging:</strong>
Often tens or hundreds of amperes.
</li>

<li>
<strong>Industrial Motors:</strong>
Can range from several amperes to thousands of amperes.
</li>

</ul>

<p>
These examples highlight the enormous range of current levels encountered across modern technology.
</p>

<h3>Understanding Current and Power</h3>

<p>
Electric current is closely related to electrical power. Power represents the rate at which electrical energy is consumed or delivered.
</p>

<p>
The basic relationship is:
</p>

<p>
<strong>Power (Watts) = Voltage (Volts) × Current (Amperes)</strong>
</p>

<p>
For example, a device operating at 12 volts and drawing 2 amperes consumes:
</p>

<p>
12 × 2 = 24 watts
</p>

<p>
Because power calculations often involve current measurements, accurate current conversion is essential when analyzing energy consumption and electrical efficiency.
</p>

<h3>Current Safety Considerations</h3>

<p>
While current conversion itself is safe, working with electrical systems requires proper safety precautions.
</p>

<ul>

<li>
Always disconnect power before modifying electrical circuits.
</li>

<li>
Use properly rated measurement instruments.
</li>

<li>
Verify current limits of wires, connectors, and components.
</li>

<li>
Avoid overloading circuits beyond their rated capacity.
</li>

<li>
Follow local electrical safety regulations and standards.
</li>

<li>
Wear appropriate protective equipment when working with high-current systems.
</li>

<li>
Be especially cautious around industrial power equipment and high-voltage installations.
</li>

</ul>

<p>
Understanding current values and their proper units helps reduce the risk of equipment damage and electrical accidents.
</p>

<h3>Advantages of Using Our Current Converter</h3>

<ul>

<li>Fast and reliable calculations</li>

<li>Supports a wide range of current units</li>

<li>No manual formulas required</li>

<li>Suitable for students and professionals</li>

<li>Works on desktop, tablet, and mobile devices</li>

<li>Provides accurate engineering-grade results</li>

<li>Easy-to-use interface</li>

<li>Helpful for learning and professional applications</li>

</ul>

<h3>Why Accurate Current Conversion Matters</h3>

<p>
Even a small mistake in current conversion can lead to significant errors in electrical calculations. Incorrect current values may result in choosing the wrong fuse, selecting an unsuitable power supply, underestimating battery requirements, or exceeding component ratings.
</p>

<p>
Accurate conversions help engineers design reliable systems, assist technicians in troubleshooting equipment, and enable students to develop a stronger understanding of electrical principles.
</p>

<p>
As modern technology becomes increasingly sophisticated, the ability to work confidently with different current units becomes even more valuable.
</p>

<h3>Final Thoughts</h3>

<p>
Electric current is one of the most important quantities in electrical engineering, electronics, physics, and industrial technology. Because current values can range from tiny microamperes in low-power sensors to thousands of amperes in industrial systems, converting between units accurately is an essential skill.
</p>

<p>
Our <strong>Free Online Electric Current Converter Tool</strong> provides a quick, accurate, and convenient solution for converting between amperes, milliamperes, microamperes, kiloamperes, abamperes, statamperes, and many other current units. Whether you are a student, educator, technician, engineer, researcher, or hobbyist, this tool can help simplify calculations and improve accuracy.
</p>

<p>
With instant results, comprehensive unit support, and user-friendly functionality, the converter serves as a valuable resource for anyone working with electrical current measurements in academic, professional, or practical environments.
</p>

</div>


<!-- Conversion History Modal -->
<div id="historyModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Conversion History</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div id="historyList" style="max-height: 400px; overflow-y: auto;">
        <!-- History items will be added here -->
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="clearHistory">Clear History</button>
      <button class="modal-button primary" id="closeHistory">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const currentInput = document.getElementById('currentInput');
    const fromUnitSelect = document.getElementById('fromUnitSelect');
    const toUnitSelect = document.getElementById('toUnitSelect');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const autoConvert = document.getElementById('autoConvert');
    const showFormula = document.getElementById('showFormula');
    
    // Modal elements
    const historyModal = document.getElementById('historyModal');
    const historyList = document.getElementById('historyList');
    const clearHistory = document.getElementById('clearHistory');
    const closeHistory = document.getElementById('closeHistory');
    const closeModal = document.querySelectorAll('.close-modal');
    
    // Conversion factors relative to 1 Ampere (A)
    const conversionFactors = {
      // SI Units
      'A': 1,
      'mA': 1000,
      'µA': 1000000,
      'kA': 0.001,
      'MA': 0.000001,
      
      // CGS & Specialized Units
      'abA': 0.1,
      'statA': 2997924536.8431,
      'Bi': 0.1,
      
      // Physics & Particle Units
      'e⁻/s': 6241509074460.0
    };

    // Store conversion history
    let conversionHistory = JSON.parse(localStorage.getItem('currentConversionHistory')) || [];

    // Initialize converter
    updateAllConversions();
    displayHistory();

    // Event listeners
    currentInput.addEventListener('input', function() {
      if (autoConvert.checked) {
        updateAllConversions();
      }
      updateInputDisplay();
    });

    fromUnitSelect.addEventListener('change', function() {
      if (autoConvert.checked) {
        updateAllConversions();
      }
      updateUnitDisplays();
    });

    toUnitSelect.addEventListener('change', function() {
      if (autoConvert.checked) {
        updateConversionResult();
      }
      updateUnitDisplays();
    });

    autoConvert.addEventListener('change', function() {
      if (this.checked) {
        updateAllConversions();
      }
    });

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleCurrentAction(action);
      });
    });

    // Modal event listeners
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        historyModal.style.display = 'none';
      });
    });

    clearHistory.addEventListener('click', function() {
      conversionHistory = [];
      localStorage.setItem('currentConversionHistory', JSON.stringify(conversionHistory));
      displayHistory();
      showAlert('Conversion history cleared!', 'success');
    });

    closeHistory.addEventListener('click', function() {
      historyModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === historyModal) {
        historyModal.style.display = 'none';
      }
    });

    function updateInputDisplay() {
      document.getElementById('inputValue').textContent = parseFloat(currentInput.value).toFixed(6);
    }

    function updateUnitDisplays() {
      document.getElementById('fromUnit').textContent = fromUnitSelect.value;
      document.getElementById('toUnit').textContent = toUnitSelect.value;
    }

    function updateAllConversions() {
      const inputValue = parseFloat(currentInput.value) || 0;
      const fromUnit = fromUnitSelect.value;
      
      // Convert input to base unit (A)
      const baseValue = inputValue / conversionFactors[fromUnit];
      
      // Update all unit displays
      Object.keys(conversionFactors).forEach(unit => {
        const element = document.getElementById(unit);
        if (element) {
          const convertedValue = baseValue * conversionFactors[unit];
          // Format based on magnitude
          let formattedValue;
          if (convertedValue < 0.001) {
            formattedValue = convertedValue.toFixed(9);
          } else if (convertedValue < 1) {
            formattedValue = convertedValue.toFixed(6);
          } else if (convertedValue < 1000) {
            formattedValue = convertedValue.toFixed(3);
          } else if (convertedValue < 1000000) {
            formattedValue = convertedValue.toFixed(1);
          } else {
            formattedValue = convertedValue.toExponential(3);
          }
          element.textContent = formattedValue;
        }
      });
      
      // Update main conversion result
      updateConversionResult();
      updateInputDisplay();
      updateUnitDisplays();
    }

    function updateConversionResult() {
      const inputValue = parseFloat(currentInput.value) || 0;
      const fromUnit = fromUnitSelect.value;
      const toUnit = toUnitSelect.value;
      
      // Convert through base unit (A)
      const baseValue = inputValue / conversionFactors[fromUnit];
      const resultValue = baseValue * conversionFactors[toUnit];
      
      // Format result based on magnitude
      let formattedResult;
      if (resultValue < 0.001) {
        formattedResult = resultValue.toFixed(9);
      } else if (resultValue < 1) {
        formattedResult = resultValue.toFixed(6);
      } else if (resultValue < 1000) {
        formattedResult = resultValue.toFixed(4);
      } else if (resultValue < 1000000) {
        formattedResult = resultValue.toFixed(2);
      } else {
        formattedResult = resultValue.toExponential(4);
      }
      
      document.getElementById('resultValue').textContent = formattedResult;
    }

    function handleCurrentAction(action) {
      const inputValue = parseFloat(currentInput.value) || 0;
      const fromUnit = fromUnitSelect.value;
      const toUnit = toUnitSelect.value;
      
      // Convert through base unit (A)
      const baseValue = inputValue / conversionFactors[fromUnit];
      const resultValue = baseValue * conversionFactors[toUnit];

      switch (action) {
        case 'convert':
          updateAllConversions();
          showAlert('Current converted successfully!', 'success');
          break;

        case 'swap':
          // Swap the from and to units
          const tempUnit = fromUnitSelect.value;
          fromUnitSelect.value = toUnitSelect.value;
          toUnitSelect.value = tempUnit;
          updateAllConversions();
          showAlert('Units swapped!', 'success');
          break;

        case 'reset':
          currentInput.value = '1';
          fromUnitSelect.value = 'A';
          toUnitSelect.value = 'mA';
          updateAllConversions();
          showAlert('Converter reset!', 'success');
          break;

        case 'copy':
          const resultText = `${inputValue} ${fromUnit} = ${resultValue} ${toUnit}`;
          copyToClipboard(resultText);
          break;

        case 'save':
          addToHistory(inputValue, fromUnit, resultValue, toUnit);
          showAlert('Conversion saved to history!', 'success');
          break;

        case 'history':
          displayHistory();
          historyModal.style.display = 'block';
          break;

        case 'clear':
          currentInput.value = '';
          updateAllConversions();
          showAlert('Input cleared!', 'success');
          break;
      }
    }

    function addToHistory(inputValue, fromUnit, resultValue, toUnit) {
      const conversion = {
        timestamp: new Date().toISOString(),
        input: inputValue,
        fromUnit: fromUnit,
        result: resultValue,
        toUnit: toUnit
      };
      
      conversionHistory.unshift(conversion);
      
      // Keep only last 50 conversions
      if (conversionHistory.length > 50) {
        conversionHistory = conversionHistory.slice(0, 50);
      }
      
      localStorage.setItem('currentConversionHistory', JSON.stringify(conversionHistory));
      displayHistory();
    }

    function displayHistory() {
      historyList.innerHTML = '';
      
      if (conversionHistory.length === 0) {
        historyList.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">No conversion history yet.</p>';
        return;
      }
      
      conversionHistory.forEach((conversion, index) => {
        const historyItem = document.createElement('div');
        historyItem.className = 'unit-item';
        historyItem.style.marginBottom = '10px';
        
        const date = new Date(conversion.timestamp).toLocaleString();
        historyItem.innerHTML = `
          <div>
            <strong>${conversion.input} ${conversion.fromUnit} = ${conversion.result} ${conversion.toUnit}</strong>
            <div style="font-size: 0.8em; color: #666;">${date}</div>
          </div>
          <button class="case-button" style="padding: 5px 10px; font-size: 0.8em;" data-index="${index}">Use</button>
        `;
        
        historyList.appendChild(historyItem);
        
        // Add event listener to use button
        historyItem.querySelector('button').addEventListener('click', function() {
          const historyIndex = parseInt(this.getAttribute('data-index'));
          const historyItem = conversionHistory[historyIndex];
          
          currentInput.value = historyItem.input;
          fromUnitSelect.value = historyItem.fromUnit;
          toUnitSelect.value = historyItem.toUnit;
          updateAllConversions();
          historyModal.style.display = 'none';
          showAlert('Conversion loaded from history!', 'success');
        });
      });
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Result copied to clipboard!', 'success');
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
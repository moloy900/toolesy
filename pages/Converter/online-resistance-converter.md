---
layout: default
title: "Online Resistance Converter - Convert Electrical Resistance Units"
permalink: /online-resistance-converter-convert-electrical-resistance-units/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Resistance Converter - Convert Electrical Resistance Units Accurately</title>
<meta name="description"
  content="Free online electrical resistance converter tool. Convert between Ohm, Kiloohm, Megaohm, Milliohm and other resistance units instantly. Accurate conversions for electronics and electrical engineering.">
<meta name="keywords"
  content="resistance converter, electrical resistance conversion, ohm, kiloohm, megaohm, milliohm, microohm, abohm, statohm, electronics, electrical engineering">
<meta name="author" content="Paramdip Nah">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Resistance Converter Styles */
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

  /* Resistance Converter specific styles */
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
  <h1>Free Online Resistance Converter</h1>
  <p class="welcome-message">Convert between Ohm, Kiloohm, Megaohm, Milliohm and other electrical resistance units instantly. Accurate conversions for electronics, electrical engineering, and circuit design.</p>

  <div class="converter-section">
    <h2>Electrical Resistance Unit Converter</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Input Value: </span>
        <span id="inputValue">0</span>
      </div>
      <div class="counter-item">
        <span>From Unit: </span>
        <span id="fromUnit">Ω</span>
      </div>
      <div class="counter-item">
        <span>To Unit: </span>
        <span id="toUnit">kΩ</span>
      </div>
      <div class="counter-item">
        <span>Result: </span>
        <span id="resultValue">0</span>
      </div>
    </div>

    <div class="conversion-options">
      <div class="option-group">
        <label class="option-label">Input Value</label>
        <input type="number" id="resistanceInput" class="option-input" value="1000" step="0.001">
      </div>
      
      <div class="option-group">
        <label class="option-label">From Unit</label>
        <select id="fromUnitSelect" class="option-select">
          <option value="Ω">Ohm (Ω)</option>
          <option value="mΩ">Milliohm (mΩ)</option>
          <option value="µΩ">Microohm (µΩ)</option>
          <option value="kΩ">Kiloohm (kΩ)</option>
          <option value="MΩ">Megaohm (MΩ)</option>
          <option value="GΩ">Gigaohm (GΩ)</option>
          <option value="abΩ">Abohm (abΩ)</option>
          <option value="statΩ">Statohm (statΩ)</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">To Unit</label>
        <select id="toUnitSelect" class="option-select">
          <option value="kΩ">Kiloohm (kΩ)</option>
          <option value="Ω">Ohm (Ω)</option>
          <option value="mΩ">Milliohm (mΩ)</option>
          <option value="µΩ">Microohm (µΩ)</option>
          <option value="MΩ">Megaohm (MΩ)</option>
          <option value="GΩ">Gigaohm (GΩ)</option>
          <option value="abΩ">Abohm (abΩ)</option>
          <option value="statΩ">Statohm (statΩ)</option>
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
        <button class="case-button" data-action="convert">Convert Resistance</button>
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
        <h3>SI / Metric Units</h3>
        <div class="unit-list">
          <div class="unit-item">
            <span class="unit-name">Ohm (Ω)</span>
            <span class="unit-value" id="Ω">1000.000</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Milliohm (mΩ)</span>
            <span class="unit-value" id="mΩ">1000000.000</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Microohm (µΩ)</span>
            <span class="unit-value" id="µΩ">1000000000.000</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Kiloohm (kΩ)</span>
            <span class="unit-value" id="kΩ">1.000</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Megaohm (MΩ)</span>
            <span class="unit-value" id="MΩ">0.001</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Gigaohm (GΩ)</span>
            <span class="unit-value" id="GΩ">0.000001</span>
          </div>
        </div>
      </div>

      <div class="unit-category">
        <h3>CGS & Specialized Units</h3>
        <div class="unit-list">
          <div class="unit-item">
            <span class="unit-name">Abohm (abΩ)</span>
            <span class="unit-value" id="abΩ">1000000000000.000</span>
          </div>
          <div class="unit-item">
            <span class="unit-name">Statohm (statΩ)</span>
            <span class="unit-value" id="statΩ">0.000001112650</span>
          </div>
        </div>
      </div>
    </div>

    <div class="examples">
      <h2>Common Resistance Conversions</h2>

      <h3>Electronics Applications:</h3>
      <div class="example-text">• Common Resistor: 1 kΩ = 1000 Ω = 0.001 MΩ
• Potentiometer: 10 kΩ = 10000 Ω = 0.01 MΩ
• Pull-up Resistor: 4.7 kΩ = 4700 Ω = 4700000 mΩ</div>

      <h3>Industrial Applications:</h3>
      <div class="example-text">• Motor Winding: 0.1 Ω = 100 mΩ = 100000 µΩ
• Power Transformer: 1 MΩ = 1000 kΩ = 1000000 Ω
• Insulation Resistance: 100 MΩ = 0.1 GΩ = 100000 kΩ</div>

      <h3>Conversion Formulas:</h3>
      <div class="example-text">1 Ω = 1000 mΩ = 1000000 µΩ
1 kΩ = 1000 Ω = 0.001 MΩ
1 MΩ = 1000000 Ω = 1000 kΩ
1 abΩ = 10⁻⁹ Ω = 0.000000001 Ω
1 statΩ ≈ 8.98755 × 10¹¹ Ω</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Electrical Resistance Converter Tool</h2>

    <p>Need accurate electrical resistance conversions for electronics, electrical engineering, or circuit design? Our free <strong>Resistance Converter tool</strong> provides instant and precise conversions between all major resistance units. Convert between Ohm, Kiloohm, Megaohm, Milliohm, and specialized CGS units with just a few clicks. This essential tool is perfect for engineers, technicians, students, and hobbyists who work with electrical resistance across different measurement systems and scales.</p>

    <h3>How to Use This Resistance Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Value:</strong> Input the resistance value you want to convert in the "Input Value" field (default is 1000 Ohms)</li>
      <li><strong>Select From Unit:</strong> Choose the unit of your input value from the "From Unit" dropdown</li>
      <li><strong>Select To Unit:</strong> Choose the unit you want to convert to from the "To Unit" dropdown</li>
      <li><strong>Convert:</strong> Click the "Convert Resistance" button or let auto-convert handle it automatically</li>
      <li><strong>View Results:</strong> See the converted value and explore all unit equivalents in the categories below</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're an electronics technician troubleshooting a circuit board. Your multimeter displays resistance in Ohms (Ω), but the schematic specifies values in Kiloohms (kΩ), and the component datasheets use Megaohms (MΩ) for insulation resistance. Instead of manual calculations or searching through conversion tables, you can simply enter any resistance value into our converter, select the appropriate "From Unit" and "To Unit". The tool instantly provides the exact equivalent value, ensuring you correctly interpret resistance measurements for resistors, potentiometers, transformers, and insulation testing.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Electronics Engineers:</strong> Convert between different resistance units for circuit design and analysis</li>
      <li><strong>Electrical Technicians:</strong> Work with resistance measurements from various instruments and standards</li>
      <li><strong>PCB Designers:</strong> Convert resistance values between different scales for component selection</li>
      <li><strong>Students & Educators:</strong> Learn resistance unit relationships and solve circuit problems</li>
      <li><strong>DIY Electronics Hobbyists:</strong> Properly interpret resistor color codes and specifications</li>
      <li><strong>Quality Control Engineers:</strong> Convert resistance measurements for compliance testing</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What is the difference between Ohm and Kiloohm?</strong><br>
      Ohm (Ω) is the SI base unit of electrical resistance, while Kiloohm (kΩ) is a subunit equal to one thousand ohms. 1 kΩ = 1000 Ω, and 1 Ω = 0.001 kΩ.</p>

    <p><strong>When would I use Milliohms vs Ohms?</strong><br>
      Milliohms (mΩ) are used for very low resistance measurements like wire resistance, contact resistance, or shunt resistors. Ohms (Ω) are used for standard resistor values. Kiloohms (kΩ) and Megaohms (MΩ) are used for higher resistances like potentiometers, pull-up resistors, and insulation resistance.</p>

    <p><strong>What are Abohms and Statohms used for?</strong><br>
      Abohm (abΩ) is the CGS electromagnetic unit of resistance, used in some theoretical physics contexts. Statohm (statΩ) is the CGS electrostatic unit of resistance. These are specialized units mainly used in academic and research settings.</p>

    <p><strong>How accurate are the conversions?</strong><br>
      Our resistance converter uses precise conversion factors with high decimal precision, making it suitable for engineering and scientific applications where accuracy is critical.</p>

    <p><strong>Can I use this tool on my mobile phone?</strong><br>
      Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>Do I need to create an account or pay to use this?</strong><br>
      No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our Resistance Converter?</h3>
    <p>Our <strong>online resistance converter</strong> stands out from other tools because of its comprehensive unit coverage, high precision, and user-friendly interface. We include all major resistance units from SI and CGS systems. The tool provides instant results with professional-grade accuracy that engineers and technicians can rely on for critical applications.</p>

    <h3>Common Applications of Resistance Conversion</h3>
    <p>Resistance conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Circuit Design:</strong> Converting resistance specifications between different units for component selection and circuit analysis</li>
      <li><strong>Electrical Testing:</strong> Converting resistance measurements between different scales for quality control and troubleshooting</li>
      <li><strong>Academic Research:</strong> Converting between SI and CGS units for theoretical calculations and publications</li>
      <li><strong>Manufacturing:</strong> Ensuring consistent resistance measurements across different testing equipment and standards</li>
      <li><strong>Education:</strong> Teaching students about resistance measurement systems and unit relationships</li>
      <li><strong>Maintenance:</strong> Converting resistance readings between different instruments during diagnostic procedures</li>
    </ul>
  </div>
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
    const resistanceInput = document.getElementById('resistanceInput');
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
    
    // Conversion factors relative to 1 Ohm (Ω)
    const conversionFactors = {
      // SI / Metric Units
      'Ω': 1,
      'mΩ': 1000,
      'µΩ': 1000000,
      'kΩ': 0.001,
      'MΩ': 0.000001,
      'GΩ': 0.000000001,
      
      // CGS & Specialized Units
      'abΩ': 1000000000,
      'statΩ': 1.112650e-12
    };

    // Store conversion history
    let conversionHistory = JSON.parse(localStorage.getItem('resistanceConversionHistory')) || [];

    // Initialize converter
    updateAllConversions();
    displayHistory();

    // Event listeners
    resistanceInput.addEventListener('input', function() {
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
        handleResistanceAction(action);
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
      localStorage.setItem('resistanceConversionHistory', JSON.stringify(conversionHistory));
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
      document.getElementById('inputValue').textContent = parseFloat(resistanceInput.value).toFixed(6);
    }

    function updateUnitDisplays() {
      document.getElementById('fromUnit').textContent = fromUnitSelect.value;
      document.getElementById('toUnit').textContent = toUnitSelect.value;
    }

    function updateAllConversions() {
      const inputValue = parseFloat(resistanceInput.value) || 0;
      const fromUnit = fromUnitSelect.value;
      
      // Convert input to base unit (Ω)
      const baseValue = inputValue / conversionFactors[fromUnit];
      
      // Update all unit displays
      Object.keys(conversionFactors).forEach(unit => {
        const element = document.getElementById(unit);
        if (element) {
          const convertedValue = baseValue * conversionFactors[unit];
          // Format based on magnitude
          let formattedValue;
          if (convertedValue < 0.001) {
            formattedValue = convertedValue.toExponential(4);
          } else if (convertedValue < 1) {
            formattedValue = convertedValue.toFixed(6);
          } else if (convertedValue < 1000) {
            formattedValue = convertedValue.toFixed(3);
          } else if (convertedValue < 1000000) {
            formattedValue = convertedValue.toFixed(1);
          } else {
            formattedValue = convertedValue.toExponential(4);
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
      const inputValue = parseFloat(resistanceInput.value) || 0;
      const fromUnit = fromUnitSelect.value;
      const toUnit = toUnitSelect.value;
      
      // Convert through base unit (Ω)
      const baseValue = inputValue / conversionFactors[fromUnit];
      const resultValue = baseValue * conversionFactors[toUnit];
      
      // Format result based on magnitude
      let formattedResult;
      if (resultValue < 0.001) {
        formattedResult = resultValue.toExponential(6);
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

    function handleResistanceAction(action) {
      const inputValue = parseFloat(resistanceInput.value) || 0;
      const fromUnit = fromUnitSelect.value;
      const toUnit = toUnitSelect.value;
      
      // Convert through base unit (Ω)
      const baseValue = inputValue / conversionFactors[fromUnit];
      const resultValue = baseValue * conversionFactors[toUnit];

      switch (action) {
        case 'convert':
          updateAllConversions();
          showAlert('Resistance converted successfully!', 'success');
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
          resistanceInput.value = '1000';
          fromUnitSelect.value = 'Ω';
          toUnitSelect.value = 'kΩ';
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
          resistanceInput.value = '';
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
      
      localStorage.setItem('resistanceConversionHistory', JSON.stringify(conversionHistory));
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
          
          resistanceInput.value = historyItem.input;
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
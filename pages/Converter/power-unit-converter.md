---
layout: default
title: "Power Unit Converter - Convert Between Different Power Measurements"
permalink: /power-unit-converter-convert-between-different-power-measurements/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Power Unit Converter - Convert Between Different Power Measurements</title>
<meta name="description"
  content="Free online power unit converter tool. Convert between watts, kilowatts, horsepower, BTU per hour, megawatts, gigawatts and more power measurements.">
<meta name="keywords"
  content="power converter, unit converter, power measurement, watts to horsepower, kilowatts to BTU, power calculator, energy converter">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Power Converter Styles */
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

  /* Power converter specific styles */
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

    .modal-content {
      margin: 20% auto;
      width: 95%;
      padding: 20px;
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
  <h1>Free Online Power Unit Converter</h1>
  <p class="welcome-message">Convert between different power units instantly - from nanowatts to terawatts, including mechanical, electrical, thermal, and scientific power measurements.</p>

  <div class="converter-section">
    <h2>Power Unit Converter</h2>

    <div class="converter-wrapper">
      <div class="input-group">
        <label for="fromValue">From:</label>
        <input type="number" id="fromValue" value="1" min="0" step="any">
        <select id="fromUnit">
          <!-- SI (Metric) Units -->
          <option value="W" selected>Watt (W)</option>
          <option value="kW">Kilowatt (kW)</option>
          <option value="MW">Megawatt (MW)</option>
          <option value="GW">Gigawatt (GW)</option>
          <option value="mW">Milliwatt (mW)</option>
          <option value="μW">Microwatt (µW)</option>
          <option value="nW">Nanowatt (nW)</option>
          <option value="TW">Terawatt (TW)</option>
          <option value="dW">Deciwatt (dW)</option>
          <option value="hW">Hectowatt (hW)</option>
          
          <!-- Imperial & US Customary -->
          <option value="hp">Horsepower (hp)</option>
          <option value="hp_mech">Mechanical Horsepower (hp(I))</option>
          <option value="hp_metric">Metric Horsepower (hp(M))</option>
          <option value="hp_elec">Electrical Horsepower (hp(E))</option>
          <option value="hp_boiler">Boiler Horsepower (hp(S))</option>
          <option value="ft_lb_s">Foot-Pound per Second (ft·lb/s)</option>
          <option value="ft_lb_min">Foot-Pound per Minute (ft·lb/min)</option>
          <option value="btu_h">BTU per Hour (BTU/h)</option>
          <option value="btu_s">BTU per Second (BTU/s)</option>
          
          <!-- Electrical & Energy Industry -->
          <option value="kVA">Kilovolt-Ampere (kVA)</option>
          <option value="MVA">Megavolt-Ampere (MVA)</option>
          <option value="VA">Volt-Ampere (VA)</option>
          <option value="J_s">Joule per Second (J/s)</option>
          <option value="cal_s">Calorie per Second (cal/s)</option>
          <option value="erg_s">Erg per Second (erg/s)</option>
          <option value="Nm_s">Newton-Meter per Second (N·m/s)</option>
          
          <!-- Thermal Power Units -->
          <option value="kcal_h">Kilocalorie per Hour (kcal/h)</option>
          <option value="cal_s_thermal">Calorie per Second (cal/s)</option>
          <option value="W_thermal">Watt (thermal)</option>
          <option value="TR">Ton of Refrigeration (TR)</option>
          
          <!-- Scientific / Specialized -->
          <option value="planck_power">Planck Power</option>
          <option value="dBW">dBW (decibel-watt)</option>
          <option value="dBm">dBm (decibel-milliwatt)</option>
          <option value="lm_s">Lumen per Second</option>
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
          <option value="W">Watt (W)</option>
          <option value="kW" selected>Kilowatt (kW)</option>
          <option value="MW">Megawatt (MW)</option>
          <option value="GW">Gigawatt (GW)</option>
          <option value="mW">Milliwatt (mW)</option>
          <option value="μW">Microwatt (µW)</option>
          <option value="nW">Nanowatt (nW)</option>
          <option value="TW">Terawatt (TW)</option>
          <option value="dW">Deciwatt (dW)</option>
          <option value="hW">Hectowatt (hW)</option>
          
          <!-- Imperial & US Customary -->
          <option value="hp">Horsepower (hp)</option>
          <option value="hp_mech">Mechanical Horsepower (hp(I))</option>
          <option value="hp_metric">Metric Horsepower (hp(M))</option>
          <option value="hp_elec">Electrical Horsepower (hp(E))</option>
          <option value="hp_boiler">Boiler Horsepower (hp(S))</option>
          <option value="ft_lb_s">Foot-Pound per Second (ft·lb/s)</option>
          <option value="ft_lb_min">Foot-Pound per Minute (ft·lb/min)</option>
          <option value="btu_h">BTU per Hour (BTU/h)</option>
          <option value="btu_s">BTU per Second (BTU/s)</option>
          
          <!-- Electrical & Energy Industry -->
          <option value="kVA">Kilovolt-Ampere (kVA)</option>
          <option value="MVA">Megavolt-Ampere (MVA)</option>
          <option value="VA">Volt-Ampere (VA)</option>
          <option value="J_s">Joule per Second (J/s)</option>
          <option value="cal_s">Calorie per Second (cal/s)</option>
          <option value="erg_s">Erg per Second (erg/s)</option>
          <option value="Nm_s">Newton-Meter per Second (N·m/s)</option>
          
          <!-- Thermal Power Units -->
          <option value="kcal_h">Kilocalorie per Hour (kcal/h)</option>
          <option value="cal_s_thermal">Calorie per Second (cal/s)</option>
          <option value="W_thermal">Watt (thermal)</option>
          <option value="TR">Ton of Refrigeration (TR)</option>
          
          <!-- Scientific / Specialized -->
          <option value="planck_power">Planck Power</option>
          <option value="dBW">dBW (decibel-watt)</option>
          <option value="dBm">dBm (decibel-milliwatt)</option>
          <option value="lm_s">Lumen per Second</option>
        </select>
      </div>
    </div>

    <div class="result-section">
      <h3>Conversion Result</h3>
      <div class="conversion-result" id="conversionResult">
        1 Watt = 0.001 Kilowatts
      </div>
    </div>

    <div class="quick-conversions">
      <div class="quick-conversion-item" data-from="W" data-to="kW">
        <div>Watts to Kilowatts</div>
        <div class="conversion-value">1 W = 0.001 kW</div>
      </div>
      <div class="quick-conversion-item" data-from="hp" data-to="kW">
        <div>Horsepower to Kilowatts</div>
        <div class="conversion-value">1 hp = 0.7457 kW</div>
      </div>
      <div class="quick-conversion-item" data-from="btu_h" data-to="W">
        <div>BTU/h to Watts</div>
        <div class="conversion-value">1 BTU/h = 0.293 W</div>
      </div>
      <div class="quick-conversion-item" data-from="kW" data-to="hp">
        <div>Kilowatts to Horsepower</div>
        <div class="conversion-value">1 kW = 1.341 hp</div>
      </div>
      <div class="quick-conversion-item" data-from="MW" data-to="kW">
        <div>Megawatts to Kilowatts</div>
        <div class="conversion-value">1 MW = 1000 kW</div>
      </div>
      <div class="quick-conversion-item" data-from="TR" data-to="kW">
        <div>Tons Refrigeration to kW</div>
        <div class="conversion-value">1 TR = 3.517 kW</div>
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
          <div class="unit-item">Watt (W)</div>
          <div class="unit-item">Kilowatt (kW)</div>
          <div class="unit-item">Megawatt (MW)</div>
          <div class="unit-item">Gigawatt (GW)</div>
          <div class="unit-item">Milliwatt (mW)</div>
          <div class="unit-item">Microwatt (µW)</div>
          <div class="unit-item">Nanowatt (nW)</div>
          <div class="unit-item">Terawatt (TW)</div>
          <div class="unit-item">Deciwatt (dW)</div>
          <div class="unit-item">Hectowatt (hW)</div>
        </div>
      </div>

      <div class="category-card">
        <h3>🔹 Imperial & US Customary</h3>
        <div class="unit-list">
          <div class="unit-item">Horsepower (hp)</div>
          <div class="unit-item">Mechanical HP</div>
          <div class="unit-item">Metric HP</div>
          <div class="unit-item">Electrical HP</div>
          <div class="unit-item">Boiler HP</div>
          <div class="unit-item">Foot-Pound/s</div>
          <div class="unit-item">Foot-Pound/min</div>
          <div class="unit-item">BTU per Hour</div>
          <div class="unit-item">BTU per Second</div>
        </div>
      </div>

      <div class="category-card">
        <h3>🔹 Electrical & Energy</h3>
        <div class="unit-list">
          <div class="unit-item">Kilovolt-Ampere</div>
          <div class="unit-item">Megavolt-Ampere</div>
          <div class="unit-item">Volt-Ampere</div>
          <div class="unit-item">Joule per Second</div>
          <div class="unit-item">Calorie per Second</div>
          <div class="unit-item">Erg per Second</div>
          <div class="unit-item">Newton-Meter/s</div>
        </div>
      </div>

      <div class="category-card">
        <h3>🔹 Scientific & Specialized</h3>
        <div class="unit-list">
          <div class="unit-item">Planck Power</div>
          <div class="unit-item">dBW</div>
          <div class="unit-item">dBm</div>
          <div class="unit-item">Lumen per Second</div>
          <div class="unit-item">Kilocalorie/h</div>
          <div class="unit-item">Ton Refrigeration</div>
        </div>
      </div>
    </div>

    <div class="examples">
      <h2>Common Power Conversions</h2>

      <h3>Everyday Conversions:</h3>
      <div class="example-text">1 kilowatt = 1000 watts
1 horsepower = 745.7 watts
1 megawatt = 1,000,000 watts
1 gigawatt = 1,000,000,000 watts
1 BTU per hour = 0.293071 watts</div>

      <h3>Electrical Conversions:</h3>
      <div class="example-text">1 kilovolt-ampere ≈ 1 kilowatt (for resistive loads)
1 volt-ampere = 1 watt (for DC circuits)
1 calorie per second = 4.1868 watts
1 ton of refrigeration = 3.51685 kilowatts</div>

      <h3>Scientific & Specialized Conversions:</h3>
      <div class="example-text">1 Planck Power ≈ 3.63 × 10⁵² watts
1 dBW = 10 * log₁₀(P/1W)
1 dBm = 10 * log₁₀(P/1mW)
1 mechanical horsepower = 550 foot-pounds per second</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Power Unit Converter Tool</h2>

    <p>Need to convert between different power units quickly and accurately? Our free <strong>Power Unit Converter tool</strong> is the perfect solution for engineers, technicians, students, mechanics, and anyone working with power measurements. This powerful tool instantly converts between watts, kilowatts, horsepower, BTU per hour, megawatts, and even specialized units like Planck power, decibel measurements, and thermal power units. There's no download required, no registration needed, and your data privacy is guaranteed as all processing happens securely right in your browser.</p>

    <h3>How to Use This Power Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Value:</strong> Type the numerical value you want to convert in the "From" input field.</li>
      <li><strong>Select Source Unit:</strong> Choose the unit of power you're converting from using the first dropdown menu.</li>
      <li><strong>Select Target Unit:</strong> Choose the unit of power you want to convert to using the second dropdown menu.</li>
      <li><strong>View Result:</strong> The converted value automatically appears in the "To" field with the full conversion displayed below.</li>
      <li><strong>Quick Conversions:</strong> Use the quick conversion buttons for common power conversions with a single click.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're an automotive engineer comparing engine specifications from different countries. European manufacturers typically use kilowatts, while American manufacturers use horsepower. Instead of manual calculations, you can simply enter "150" in the value field, select "Kilowatts" as the source unit, and choose "Horsepower" as the target unit. The tool instantly shows that 150 kilowatts equals approximately 201 horsepower, helping you make accurate comparisons between different engine specifications.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Engineers & Technicians:</strong> Convert between different power units for mechanical, electrical, and thermal system design.</li>
      <li><strong>Automotive Professionals:</strong> Compare engine power specifications between different measurement systems.</li>
      <li><strong>HVAC Specialists:</strong> Convert between tons of refrigeration, BTU/hour, and kilowatts for cooling system calculations.</li>
      <li><strong>Electrical Engineers:</strong> Work with volt-amperes, watts, and decibel power measurements.</li>
      <li><strong>Students & Educators:</strong> Learn about power conversions for physics, engineering, and technical coursework.</li>
      <li><strong>Energy Professionals:</strong> Convert between different power units for renewable energy, power generation, and consumption analysis.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What is the difference between mechanical horsepower and metric horsepower?</strong><br>
      Mechanical horsepower (hp(I)) equals 745.7 watts, while metric horsepower (hp(M)) equals 735.5 watts. The mechanical horsepower is commonly used in the US and UK, while metric horsepower is used in most other countries.</p>

    <p><strong>How accurate are the power conversions?</strong><br>
      Our tool uses precise conversion factors with high decimal precision. For scientific and specialized units, we use established scientific constants and conversion factors.</p>

    <p><strong>What is the difference between watts and volt-amperes?</strong><br>
      Watts measure real power, while volt-amperes measure apparent power. For resistive loads, they are approximately equal, but for reactive loads, they differ due to power factor.</p>

    <p><strong>Can I convert decibel power measurements like dBW and dBm?</strong><br>
      Yes, our tool includes decibel power measurements commonly used in telecommunications and RF engineering. dBW is relative to 1 watt, while dBm is relative to 1 milliwatt.</p>

    <p><strong>Is my data kept private when I use this tool?</strong><br>
      Absolutely. All conversions happen locally in your browser. We don't store any of your input data or conversion results on our servers.</p>

    <h3>Why Choose Our Power Unit Converter?</h3>
    <p>Our <strong>online power converter</strong> stands out from other tools because of its comprehensive coverage of power units, from the incredibly small (nanowatts) to the incredibly large (Planck power), including specialized mechanical, electrical, thermal, and scientific power measurements. Unlike many online tools, we don't store your data on our servers - all processing happens in your browser. This means your conversions remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Power Conversion</h3>
    <p>Power conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Automotive Industry:</strong> Convert between horsepower and kilowatts for engine specifications and performance comparisons</li>
      <li><strong>HVAC Systems:</strong> Convert between tons of refrigeration, BTU/hour, and kilowatts for cooling capacity calculations</li>
      <li><strong>Electrical Engineering:</strong> Work with different power units for circuit design, power distribution, and energy efficiency analysis</li>
      <li><strong>Renewable Energy:</strong> Convert power measurements for solar panels, wind turbines, and other renewable energy systems</li>
      <li><strong>Telecommunications:</strong> Use decibel power measurements for signal strength and transmission power calculations</li>
      <li><strong>Industrial Machinery:</strong> Convert between different power units for motor specifications and mechanical system design</li>
      <li><strong>Education:</strong> Teach students about different power measurement systems and conversion principles</li>
      <li><strong>Research:</strong> Work with specialized power units in physics, engineering, and scientific research</li>
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

    // Power conversion factors (relative to watts)
    const powerUnits = {
      // SI (Metric) Units
      'W': 1,
      'kW': 1000,
      'MW': 1000000,
      'GW': 1000000000,
      'mW': 0.001,
      'μW': 0.000001,
      'nW': 1e-9,
      'TW': 1e12,
      'dW': 0.1,
      'hW': 100,
      
      // Imperial & US Customary
      'hp': 745.699872,
      'hp_mech': 745.699872,
      'hp_metric': 735.49875,
      'hp_elec': 746,
      'hp_boiler': 9809.5,
      'ft_lb_s': 1.355817948,
      'ft_lb_min': 0.0225969658,
      'btu_h': 0.29307107,
      'btu_s': 1055.05585,
      
      // Electrical & Energy Industry
      'kVA': 1000, // Approximation for resistive loads
      'MVA': 1000000,
      'VA': 1,
      'J_s': 1,
      'cal_s': 4.1868,
      'erg_s': 1e-7,
      'Nm_s': 1,
      
      // Thermal Power Units
      'kcal_h': 1.163,
      'cal_s_thermal': 4.1868,
      'W_thermal': 1,
      'TR': 3516.85284,
      
      // Scientific / Specialized
      'planck_power': 3.62831e52,
      'dBW': 1, // Special handling needed for dB conversions
      'dBm': 0.001, // Special handling needed for dB conversions
      'lm_s': 1 // Approximation for photometric context
    };

    // Initialize conversion
    convertPower();

    // Event listeners
    fromValue.addEventListener('input', convertPower);
    fromUnit.addEventListener('change', convertPower);
    toUnit.addEventListener('change', convertPower);

    swapButton.addEventListener('click', function() {
      const tempValue = fromValue.value;
      const tempUnit = fromUnit.value;
      
      fromValue.value = toValue.value;
      fromUnit.value = toUnit.value;
      toUnit.value = tempUnit;
      
      convertPower();
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
        
        convertPower();
      });
    });

    function convertPower() {
      const value = parseFloat(fromValue.value) || 0;
      const fromUnitValue = fromUnit.value;
      const toUnitValue = toUnit.value;
      
      // Handle special cases for dB conversions
      let valueInWatts;
      if (fromUnitValue === 'dBW') {
        valueInWatts = Math.pow(10, value / 10);
      } else if (fromUnitValue === 'dBm') {
        valueInWatts = Math.pow(10, (value - 30) / 10);
      } else {
        valueInWatts = value * powerUnits[fromUnitValue];
      }
      
      // Convert from watts to target unit
      let convertedValue;
      if (toUnitValue === 'dBW') {
        convertedValue = 10 * Math.log10(valueInWatts);
      } else if (toUnitValue === 'dBm') {
        convertedValue = 10 * Math.log10(valueInWatts * 1000);
      } else {
        convertedValue = valueInWatts / powerUnits[toUnitValue];
      }
      
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
        'W': 'Watts',
        'kW': 'Kilowatts',
        'MW': 'Megawatts',
        'GW': 'Gigawatts',
        'mW': 'Milliwatts',
        'μW': 'Microwatts',
        'nW': 'Nanowatts',
        'TW': 'Terawatts',
        'dW': 'Deciwatts',
        'hW': 'Hectowatts',
        
        // Imperial & US Customary
        'hp': 'Horsepower',
        'hp_mech': 'Mechanical Horsepower',
        'hp_metric': 'Metric Horsepower',
        'hp_elec': 'Electrical Horsepower',
        'hp_boiler': 'Boiler Horsepower',
        'ft_lb_s': 'Foot-Pounds per Second',
        'ft_lb_min': 'Foot-Pounds per Minute',
        'btu_h': 'BTU per Hour',
        'btu_s': 'BTU per Second',
        
        // Electrical & Energy Industry
        'kVA': 'Kilovolt-Amperes',
        'MVA': 'Megavolt-Amperes',
        'VA': 'Volt-Amperes',
        'J_s': 'Joules per Second',
        'cal_s': 'Calories per Second',
        'erg_s': 'Ergs per Second',
        'Nm_s': 'Newton-Meters per Second',
        
        // Thermal Power Units
        'kcal_h': 'Kilocalories per Hour',
        'cal_s_thermal': 'Calories per Second',
        'W_thermal': 'Watts (thermal)',
        'TR': 'Tons of Refrigeration',
        
        // Scientific / Specialized
        'planck_power': 'Planck Power',
        'dBW': 'dBW',
        'dBm': 'dBm',
        'lm_s': 'Lumens per Second'
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
          fromUnit.value = 'W';
          toUnit.value = 'kW';
          convertPower();
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
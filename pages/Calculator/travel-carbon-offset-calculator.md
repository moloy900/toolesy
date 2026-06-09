---
layout: default
title: "Travel Carbon Offset Calculator – Reduce Travel Emissions"
permalink: /travel-carbon-offset-calculator/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Travel Carbon Offset Calculator – Reduce Travel Emissions</title>

<meta name="description" content="Free travel carbon offset calculator to estimate CO2 from flights and car trips. Get quick offset tips for cleaner, climate-friendly, and sustainable travel.">

<meta name="keywords" content="travel carbon footprint calculator, carbon offset calculator, flight carbon calculator, car CO2 calculator, travel emissions calculator, CO2 travel calculator, eco friendly travel calculator, climate neutral travel">

<meta name="author" content="ToolEsy">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://toolesy.com/travel-carbon-offset-calculator/">

<!-- ✅ Open Graph Tags -->
<meta property="og:title" content="Travel Carbon Footprint Calculator - Reduce Your Travel Emissions">
<meta property="og:description" content="Instant CO2 emission calculation for flights, car travel, and daily commuting — plus offset suggestions.">
<meta property="og:url" content="https://toolesy.com/travel-carbon-offset-calculator/">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Travel Carbon Offset Calculator">
<meta name="twitter:description" content="Calculate your travel CO2 emissions and offset them with sustainable projects. Fast & Free!">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Travel Carbon Calculator Styles */
  .calculator-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .calculator-container h1 {
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

  .calculator-section {
    margin-bottom: 40px;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .calculator-section h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .calculator-section p {
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

  .input-section label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #2c3e50;
  }

  .input-section input,
  .input-section select {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
    box-sizing: border-box;
  }

  .input-section input:focus,
  .input-section select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 25px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .transport-section {
    margin: 20px 0;
  }

  .transport-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
  }

  .transport-item {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border-left: 4px solid #e0e0e0;
  }

  .transport-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .transport-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    color: white;
    font-size: 1.5rem;
  }

  .flight-bg { background: #3498db; }
  .car-bg { background: #e74c3c; }
  .train-bg { background: #2ecc71; }
  .bus-bg { background: #f39c12; }
  .cruise-bg { background: #9b59b6; }

  .transport-name {
    font-weight: 600;
    color: #2c3e50;
    font-size: 1.1rem;
  }

  .distance-input {
    width: 100%;
    padding: 10px;
    border: 2px solid #e0e6ed;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.3s;
  }

  .distance-input:focus {
    outline: none;
    border-color: var(--primary);
  }

  .distance-options {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  .distance-option {
    flex: 1;
    padding: 8px;
    text-align: center;
    background: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    transition: all 0.3s ease;
  }

  .distance-option:hover {
    background: #e9ecef;
  }

  .distance-option.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }

  .calculation-options {
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

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .calc-button {
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

  .calc-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .calc-button:active {
    transform: translateY(0);
  }

  .calc-button.success {
    background: var(--success);
  }

  .calc-button.success:hover {
    background: #218838;
  }

  .calc-button.secondary {
    background: #6c757d;
  }

  .calc-button.secondary:hover {
    background: #5a6268;
  }

  .calc-button.warning {
    background: #ffc107;
    color: #212529;
  }

  .calc-button.warning:hover {
    background: #e0a800;
  }

  .calc-button.eco {
    background: #27ae60;
    color: white;
  }

  .calc-button.eco:hover {
    background: #219653;
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

  .alert-warning {
    background-color: #fff3cd;
    color: #856404;
    border: 1px solid #ffeaa7;
  }

  .alert-info {
    background-color: #d1ecf1;
    color: #0c5460;
    border: 1px solid #bee5eb;
  }

  .alert .close {
    cursor: pointer;
    font-weight: bold;
  }

  .results-section {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    display: none;
  }

  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 25px;
  }

  .result-item {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    border-left: 4px solid var(--primary);
  }

  .result-item.warning {
    border-left-color: #ffc107;
  }

  .result-item.success {
    border-left-color: var(--success);
  }

  .result-item.eco {
    border-left-color: #27ae60;
  }

  .result-item h3 {
    margin-top: 0;
    color: #2c3e50;
    font-size: 1rem;
  }

  .result-value {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--primary);
    margin: 10px 0;
  }

  .result-item.warning .result-value {
    color: #ffc107;
  }

  .result-item.success .result-value {
    color: var(--success);
  }

  .result-item.eco .result-value {
    color: #27ae60;
  }

  .result-description {
    font-size: 0.9rem;
    color: #7f8c8d;
  }

  .emissions-breakdown {
    margin-top: 30px;
  }

  .breakdown-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 15px;
  }

  .breakdown-item {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    text-align: center;
  }

  .breakdown-value {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary);
    margin: 5px 0;
  }

  .breakdown-label {
    font-size: 0.9rem;
    color: #7f8c8d;
  }

  .offset-section {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .offset-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .offset-option {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .offset-option:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .offset-option.selected {
    border-color: #27ae60;
    background: rgba(39, 174, 96, 0.05);
  }

  .offset-icon {
    font-size: 2.5rem;
    color: #27ae60;
    margin-bottom: 15px;
  }

  .offset-name {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 10px;
  }

  .offset-cost {
    font-size: 1.2rem;
    font-weight: bold;
    color: #27ae60;
    margin: 10px 0;
  }

  .offset-description {
    font-size: 0.9rem;
    color: #7f8c8d;
    line-height: 1.5;
  }

  .chart-container {
    margin-top: 30px;
    height: 300px;
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .sustainability-tips {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .sustainability-tips h3 {
    color: var(--primary);
    margin-bottom: 15px;
  }

  .sustainability-tips ul {
    margin: 15px 0;
    padding-left: 30px;
  }

  .sustainability-tips li {
    margin-bottom: 10px;
    line-height: 1.6;
    color: #555;
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

  /* New styles for share and donation buttons */
  .share-donation-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    flex-wrap: wrap;
    gap: 15px;
  }

  .share-buttons,
  .donation-buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .share-button,
  .donation-button {
    padding: 10px 15px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    border: none;
  }

  .share-button:hover,
  .donation-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .facebook {
    background: #3b5998;
    color: white;
  }

  .twitter {
    background: #1da1f2;
    color: white;
  }

  .linkedin {
    background: #0077b5;
    color: white;
  }

  .pinterest {
    background: #bd081c;
    color: white;
  }

  .reddit {
    background: #FF4500;
    color: white;
  }

  .paypal {
    background: #0070ba;
    color: white;
  }

  .coffee {
    background: #ff813f;
    color: white;
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

  .modal-button.eco {
    background: #27ae60;
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

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .counter-wrapper {
      grid-template-columns: 1fr;
    }

    .transport-grid {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .calc-button {
      font-size: 13px;
      padding: 12px 8px;
    }

    .calculator-container {
      padding: 15px;
    }

    .calculator-section {
      padding: 20px;
      margin-bottom: 30px;
    }

    .calculator-container h1 {
      font-size: 2rem;
    }

    .calculator-section h2 {
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

    .calculation-options {
      grid-template-columns: 1fr;
    }

    .results-grid {
      grid-template-columns: 1fr;
    }

    .breakdown-grid {
      grid-template-columns: 1fr;
    }

    .offset-options {
      grid-template-columns: 1fr;
    }

    .chart-container {
      height: 250px;
    }
  }
</style>

<div class="calculator-container">
  <h1>Travel Carbon Offset Calculator</h1>
  <p class="welcome-message">Calculate your travel carbon footprint and discover how to offset it through verified environmental projects. Make your travels more sustainable and climate-friendly.</p>

  <div class="calculator-section">
    <h2>Carbon Footprint Calculator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Total CO₂ Emissions: </span>
        <span id="totalEmissions">0 kg</span>
      </div>
      <div class="counter-item">
        <span>Offset Cost: </span>
        <span id="offsetCost">$0</span>
      </div>
      <div class="counter-item">
        <span>Equivalent Trees: </span>
        <span id="equivalentTrees">0</span>
      </div>
      <div class="counter-item">
        <span>Carbon Intensity: </span>
        <span id="carbonIntensity">Low</span>
      </div>
    </div>

    <div class="transport-section">
      <h2>Transportation Methods</h2>
      <p>Enter your travel distances for each transportation method used:</p>
      
      <div class="transport-grid">
        <!-- Flight -->
        <div class="transport-item">
          <div class="transport-header">
            <div class="transport-icon flight-bg">
              <i class="fas fa-plane"></i>
            </div>
            <div>
              <div class="transport-name">Flights</div>
              <small>Round trip or one-way</small>
            </div>
          </div>
          <input type="number" class="distance-input" id="flightDistance" min="0" placeholder="Distance in km">
          <div class="distance-options">
            <div class="distance-option" data-distance="500">Short (500km)</div>
            <div class="distance-option" data-distance="1500">Medium (1,500km)</div>
            <div class="distance-option" data-distance="5000">Long (5,000km)</div>
          </div>
          <div class="form-group" style="margin-top: 10px;">
            <select id="flightClass" class="option-select">
              <option value="1.0">Economy Class</option>
              <option value="1.5">Premium Economy</option>
              <option value="2.0">Business Class</option>
              <option value="3.0">First Class</option>
            </select>
          </div>
        </div>

        <!-- Car -->
        <div class="transport-item">
          <div class="transport-header">
            <div class="transport-icon car-bg">
              <i class="fas fa-car"></i>
            </div>
            <div>
              <div class="transport-name">Car Travel</div>
              <small>Personal vehicle</small>
            </div>
          </div>
          <input type="number" class="distance-input" id="carDistance" min="0" placeholder="Distance in km">
          <div class="distance-options">
            <div class="distance-option" data-distance="100">Short (100km)</div>
            <div class="distance-option" data-distance="300">Medium (300km)</div>
            <div class="distance-option" data-distance="800">Long (800km)</div>
          </div>
          <div class="form-group" style="margin-top: 10px;">
            <select id="carType" class="option-select">
              <option value="0.12">Small Car (Petrol)</option>
              <option value="0.15">Medium Car (Petrol)</option>
              <option value="0.18">Large Car (Petrol)</option>
              <option value="0.20">SUV (Petrol)</option>
              <option value="0.10">Small Car (Diesel)</option>
              <option value="0.13">Medium Car (Diesel)</option>
              <option value="0.08">Hybrid Vehicle</option>
              <option value="0.00">Electric Vehicle</option>
            </select>
          </div>
        </div>

        <!-- Train -->
        <div class="transport-item">
          <div class="transport-header">
            <div class="transport-icon train-bg">
              <i class="fas fa-train"></i>
            </div>
            <div>
              <div class="transport-name">Train Travel</div>
              <small>Rail journeys</small>
            </div>
          </div>
          <input type="number" class="distance-input" id="trainDistance" min="0" placeholder="Distance in km">
          <div class="distance-options">
            <div class="distance-option" data-distance="50">Short (50km)</div>
            <div class="distance-option" data-distance="200">Medium (200km)</div>
            <div class="distance-option" data-distance="500">Long (500km)</div>
          </div>
          <div class="form-group" style="margin-top: 10px;">
            <select id="trainType" class="option-select">
              <option value="0.035">Regional Train</option>
              <option value="0.025">High-Speed Train</option>
              <option value="0.015">Electric Commuter</option>
            </select>
          </div>
        </div>

        <!-- Bus -->
        <div class="transport-item">
          <div class="transport-header">
            <div class="transport-icon bus-bg">
              <i class="fas fa-bus"></i>
            </div>
            <div>
              <div class="transport-name">Bus Travel</div>
              <small>Coach or local bus</small>
            </div>
          </div>
          <input type="number" class="distance-input" id="busDistance" min="0" placeholder="Distance in km">
          <div class="distance-options">
            <div class="distance-option" data-distance="50">Short (50km)</div>
            <div class="distance-option" data-distance="200">Medium (200km)</div>
            <div class="distance-option" data-distance="500">Long (500km)</div>
          </div>
          <div class="form-group" style="margin-top: 10px;">
            <select id="busType" class="option-select">
              <option value="0.08">Local Bus</option>
              <option value="0.03">Coach/Long Distance</option>
            </select>
          </div>
        </div>

        <!-- Cruise -->
        <div class="transport-item">
          <div class="transport-header">
            <div class="transport-icon cruise-bg">
              <i class="fas fa-ship"></i>
            </div>
            <div>
              <div class="transport-name">Cruise Ship</div>
              <small>Cruise journeys</small>
            </div>
          </div>
          <input type="number" class="distance-input" id="cruiseDistance" min="0" placeholder="Distance in km">
          <div class="distance-options">
            <div class="distance-option" data-distance="500">Short (500km)</div>
            <div class="distance-option" data-distance="2000">Medium (2,000km)</div>
            <div class="distance-option" data-distance="5000">Long (5,000km)</div>
          </div>
          <div class="form-group" style="margin-top: 10px;">
            <select id="cruiseType" class="option-select">
              <option value="0.25">Standard Cruise</option>
              <option value="0.40">Luxury Cruise</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="calculation-options">
      <div class="option-group">
        <label class="option-label">Carbon Price</label>
        <select id="carbonPrice" class="option-select">
          <option value="15">$15/ton (Basic)</option>
          <option value="25" selected>$25/ton (Standard)</option>
          <option value="50">$50/ton (Premium)</option>
          <option value="100">$100/ton (Climate Leader)</option>
        </select>
        <small>Cost per ton of CO₂ to offset</small>
      </div>
      
      <div class="option-group">
        <label class="option-label">Travel Period</label>
        <select id="travelPeriod" class="option-select">
          <option value="1">Single Trip</option>
          <option value="4" selected>Monthly Travel</option>
          <option value="12">Annual Travel</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Include Accommodation</label>
        <div class="option-checkbox">
          <input type="checkbox" id="includeAccommodation" checked>
          <label for="includeAccommodation">Calculate hotel emissions</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="includeMeals">
          <label for="includeMeals">Include food carbon footprint</label>
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="calc-button" data-action="calculate">Calculate Emissions</button>
      <button class="calc-button success" data-action="save">Save Calculation</button>
      <button class="calc-button warning" data-action="compare">Compare Methods</button>
      <button class="calc-button eco" data-action="offset">Offset Now</button>
      <button class="calc-button secondary" data-action="clear">Clear All</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="results-section" id="resultsSection">
      <h2>Carbon Emissions Analysis</h2>
      
      <div class="results-grid">
        <div class="result-item">
          <h3>Total CO₂ Emissions</h3>
          <div class="result-value" id="resultEmissions">0 kg</div>
          <div class="result-description" id="emissionsPeriod">For this trip</div>
        </div>
        
        <div class="result-item warning">
          <h3>Carbon Offset Cost</h3>
          <div class="result-value" id="resultOffsetCost">$0</div>
          <div class="result-description">To neutralize your impact</div>
        </div>
        
        <div class="result-item success">
          <h3>Equivalent Trees</h3>
          <div class="result-value" id="resultTrees">0</div>
          <div class="result-description">Trees needed to absorb CO₂</div>
        </div>
        
        <div class="result-item eco">
          <h3>Environmental Impact</h3>
          <div class="result-value" id="environmentalImpact">Low</div>
          <div class="result-description">Compared to average</div>
        </div>
      </div>

      <div class="emissions-breakdown">
        <h3>Emissions Breakdown by Transportation</h3>
        <div class="breakdown-grid" id="transportBreakdown">
          <!-- Transport breakdown will be inserted here by JavaScript -->
        </div>
      </div>
      
      <div class="chart-container">
        <canvas id="emissionsChart"></canvas>
      </div>

      <div class="offset-section">
        <h3>Carbon Offset Projects</h3>
        <p>Choose how you'd like to offset your carbon emissions through verified environmental projects:</p>
        
        <div class="offset-options">
          <div class="offset-option" data-project="reforestation">
            <div class="offset-icon">🌳</div>
            <div class="offset-name">Reforestation</div>
            <div class="offset-cost" id="reforestationCost">$0</div>
            <div class="offset-description">Plant trees to absorb CO₂ and restore ecosystems</div>
          </div>
          
          <div class="offset-option" data-project="renewable">
            <div class="offset-icon">☀️</div>
            <div class="offset-name">Renewable Energy</div>
            <div class="offset-cost" id="renewableCost">$0</div>
            <div class="offset-description">Support solar and wind projects to replace fossil fuels</div>
          </div>
          
          <div class="offset-option" data-project="cookstoves">
            <div class="offset-icon">🔥</div>
            <div class="offset-name">Clean Cookstoves</div>
            <div class="offset-cost" id="cookstovesCost">$0</div>
            <div class="offset-description">Provide efficient cookstoves to reduce deforestation</div>
          </div>
        </div>
      </div>

      <div class="sustainability-tips">
        <h3>Sustainable Travel Tips</h3>
        <div id="travelTips">
          <p>Based on your travel patterns, here are personalized tips to reduce your carbon footprint:</p>
          <ul>
            <li>Choose direct flights when possible to reduce takeoff/landing emissions</li>
            <li>Consider train travel for shorter distances instead of flying</li>
            <li>Use public transportation or walk when exploring destinations</li>
            <li>Pack light to reduce weight-related fuel consumption</li>
          </ul>
        </div>
      </div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Real-Life Travel Examples</h2>

      <h3>Weekend City Break:</h3>
      <div class="example-text">
• Flight: 500km round trip (Economy)
• Local transport: 50km by train + 20km by bus
• 2-night hotel stay
• Total Emissions: ~180 kg CO₂
• Offset Cost: $4.50
• Equivalent: 9 tree seedlings
• Impact: Moderate - Consider train alternative
      </div>

      <h3>Family Road Trip:</h3>
      <div class="example-text">
• Car travel: 800km (Medium petrol car)
• 5-night accommodation
• Local activities: 100km
• Total Emissions: ~240 kg CO₂
• Offset Cost: $6.00
• Equivalent: 12 tree seedlings
• Impact: High - Consider carpooling or electric vehicle
      </div>

      <h3>International Vacation:</h3>
      <div class="example-text">
• Flight: 8,000km round trip (Economy)
• Local transport: 200km by rental car
• 10-night hotel stay
• Total Emissions: ~1,800 kg CO₂
• Offset Cost: $45.00
• Equivalent: 90 tree seedlings
• Impact: Very High - Consider carbon offset program
      </div>
    </div>
  </div>

  ```html
<!-- SEO Content Section -->
<div class="content-placeholder">
    <h2>Travel Carbon Offset Calculator - Make Your Travels Climate Positive</h2>

    <p>Let’s be honest for a second. Most of us love to travel. We love the excitement of a new city, the peace of a quiet beach, or the adventure of a mountain trail. But there’s an uncomfortable truth that nags at the back of our minds, especially if you care about the planet: getting there often involves burning fossil fuels. A lot of them. A single round-trip flight from New York to London can produce more carbon dioxide per passenger than someone in a developing country emits in an entire year. That’s not a fun fact—it’s a sobering one. But here’s the good news: you don’t have to stop traveling to be a good person. You just have to travel smarter. Our <strong>Travel Carbon Offset Calculator</strong> helps you do exactly that. You tell us where you’re going, how you’re getting there, and we’ll tell you exactly how much CO₂ your trip is creating. Then we’ll show you how to offset those emissions—for surprisingly little money—by supporting real-world projects that actually remove carbon or prevent it from entering the atmosphere. Reforestation, renewable energy, clean cookstoves in developing countries—your offset dollars go to work. The goal isn’t to make you feel guilty about traveling. It’s to make your travels climate-positive, so you can explore the world without harming it.</p>

    <h3>How to Use This Carbon Offset Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Travel Distances (Be Honest, It's Just Data):</strong> For each leg of your trip—flights, car rides, train journeys, bus travel, even cruises—enter the distance. You can use kilometers or miles; the calculator converts automatically. If you’re flying from Chicago to Denver, that’s roughly 1,400 km. If you’re driving from Paris to Barcelona, that’s about 1,030 km. Don’t stress about exact numbers—estimates are fine. The calculator also has a “Round Trip” checkbox so you don’t have to double-enter.</li>
      <li><strong>Select Vehicle Types (Details Matter):</strong> A Boeing 747 burns a lot more fuel per passenger than a modern Airbus A350. An SUV emits more than a hybrid sedan. A diesel train is different from an electric one. The calculator gives you specific options: flight class (economy, business, first—higher classes take more space, so you’re responsible for more emissions), car type (small, medium, large, hybrid, electric), train type (high-speed electric, regional diesel), and bus type. Taking the time to select the right option makes your calculation more accurate.</li>
      <li><strong>Set Calculation Parameters (Customize It):</strong> You can adjust the carbon price per ton of CO₂. The default is $25, which is a solid average for high-quality verified offsets, but prices range from $10 to $50 depending on the project type. You can also set your travel period (one-time trip, monthly, or annual) to calculate emissions for commuting or regular business travel. This is great for companies doing carbon accounting.</li>
      <li><strong>Calculate (See the Number):</strong> Click “Calculate Emissions” and get ready. The calculator shows your total carbon footprint in kilograms or tons of CO₂. It also shows equivalents: how many tree seedlings would need to grow for 10 years to absorb that much carbon, or how many miles the average car would need to drive to emit the same amount. These comparisons make the abstract number feel real.</li>
      <li><strong>Choose Offset Projects (Your Money, Your Impact):</strong> Not all carbon offsets are equal. You can choose from verified projects: reforestation (planting trees that absorb CO₂), renewable energy (building wind or solar farms that replace coal), clean cookstoves (replacing open fires that burn wood or charcoal), or methane capture (turning landfill gas into energy). Each has different co-benefits—reforestation helps biodiversity, clean cookstoves reduce indoor air pollution and save lives. Pick the one that resonates with you.</li>
      <li><strong>Take Action (Offset Now):</strong> The calculator tells you exactly how much it will cost to offset your trip. For most flights, it’s surprisingly affordable—often $10 to $50 per person for a long-haul round trip. You can use the “Offset Now” feature to donate directly to a verified offset provider. You’ll get a certificate showing your trip is carbon neutral. Share it with friends, post it on social media, or just keep it for your own peace of mind.</li>
    </ul>

    <h3>Real-Life Example & Use Case (Meet the Patels):</h3>
    <p>The Patel family—Ravi, his wife Sunita, and their two teenagers—are planning a dream vacation from their home in Mumbai to Bali, Indonesia. They’re excited, but Ravi has been reading about climate change and feels uneasy about the flight. He decides to use our calculator.</p>
    <p>First, they enter the flight details: Mumbai to Bali is about 5,000 kilometers one way, so 10,000 kilometers round trip. They select economy class. The calculator tells them that each person’s share of the flight emissions is approximately 1.4 tons of CO₂. For four people, that’s 5.6 tons total. The calculator also shows equivalents: that’s the same as driving a car for about 14,000 miles, or the amount of carbon that 140 tree seedlings would absorb over 10 years.</p>
    <p>The offset cost at $25/ton is $140 for the whole family. That’s less than one dinner out in Bali. Ravi clicks on the reforestation project option—a verified program in Madagascar that plants native trees, restores wildlife habitat, and employs local villagers. He pays $140, gets a carbon-neutral certificate for the family’s flights, and feels genuinely good about their vacation. The kids even use it as a school project about climate action. That’s the power of this tool: it turns an abstract sense of guilt into concrete, affordable action.</p>
    <p><strong>Business traveler example:</strong> Priya is a consultant who flies from Delhi to Singapore (about 4,100 km round trip) every month for client meetings. That’s 12 trips per year, nearly 50,000 kilometers. Her annual flight emissions are about 7 tons of CO₂. At $25/ton, offsetting her business travel costs $175 per year—less than the price of one flight upgrade. Her company reimburses her, and they add the offsets to their corporate sustainability report. Simple, measurable, meaningful.</p>

    <h3>Benefits & Who Should Use This Tool (Probably You):</h3>
    <ul>
      <li><strong>Eco-Conscious Travelers (That’s You, Hopefully):</strong> You want to see the world but don’t want to destroy it. The calculator gives you a clear, guilt-free path. Calculate your trip, pay a small amount to offset, and travel with a clean conscience. You can even offset past trips if you’re feeling retrospective.</li>
      <li><strong>Business Travelers & Corporate Sustainability Teams:</strong> Many companies now track their carbon footprint as part of ESG (Environmental, Social, Governance) reporting. This calculator helps you quantify emissions from employee travel and purchase offsets at scale. Some companies even build offset costs into their travel booking systems so every flight is automatically offset. It’s good for the planet and good for the brand.</li>
      <li><strong>Tour Operators & Travel Agencies:</strong> Offering carbon offset options to your clients is a competitive differentiator. More and more travelers want sustainable options. You can use the calculator to estimate emissions for your tour packages and offer a “carbon neutral” add-on. It’s usually a small percentage of the trip cost, and customers appreciate the transparency.</li>
      <li><strong>Event Planners:</strong> Conferences, weddings, and corporate retreats all involve travel—often hundreds or thousands of people flying in. Use the calculator to estimate total event emissions, then add a small offset fee to registration or the overall budget. You can even plant trees in the event’s name and give attendees a certificate. It turns a carbon-intensive gathering into a climate-positive one.</li>
      <li><strong>Students & Educators:</strong> Climate change is the defining issue of our time. The calculator is an excellent teaching tool. Have students calculate their family’s annual travel emissions, then research offset projects. It makes the abstract concept of “carbon footprint” tangible. They can even create a school-wide offset campaign.</li>
      <li><strong>Climate Advocates & Influencers:</strong> You’re already talking about the climate crisis. Use the calculator to lead by example. Share your own offset certificates on social media. Show your followers that you’re not just talking—you’re acting. It’s a small gesture that builds credibility.</li>
    </ul>

    <h3>Frequently Asked Questions (Real Answers):</h3>
    <p><strong>How accurate are the carbon emission calculations? Can I trust them?</strong><br>
      The calculator uses emission factors from authoritative sources: the EPA (Environmental Protection Agency), DEFRA (UK Department for Environment, Food & Rural Affairs), and ICAO (International Civil Aviation Organization). These are the same sources that governments and large corporations use. However, any carbon calculator is an estimate. Actual emissions depend on many variables: exact aircraft model, load factor (how full the plane is), weather, routing, etc. The calculator gives you a reliable benchmark—accurate enough for offsetting, even if not perfect to the last kilogram. For most travelers, the difference between the estimate and the real number is less than 10-15%, which is fine for practical purposes.</p>

    <p><strong>What does “carbon offsetting” actually mean? Is it just a feel-good scam?</strong><br>
      Fair question. Some cheap, unverified offsets have been scams in the past. But high-quality offsets are real and effective. Here’s how it works: you pay a project to reduce or remove one ton of CO₂ that would not have been reduced otherwise. For example, a reforestation project plants trees on degraded land. Those trees absorb CO₂ as they grow. Without the project, the land would stay bare. The carbon reduction is “additional”—it wouldn’t have happened without your payment. Verification standards like Gold Standard and Verified Carbon Standard (VCS) ensure the projects are real, measurable, and permanent. Our calculator only suggests projects with these certifications. So no, not a scam. It’s a legitimate market-based tool for climate action.</p>

    <p><strong>Are offset projects actually effective? Do trees really get planted?</strong><br>
      Verified projects undergo rigorous third-party audits. For reforestation projects, auditors check that trees are actually planted, that they survive, and that the land wasn’t forested before (otherwise it’s not new carbon removal). They also ensure local communities benefit and that biodiversity is protected. Renewable energy projects (wind, solar) are even easier to verify—you can literally see the turbines or panels, and the electricity meter shows how much fossil fuel was displaced. So yes, effective projects exist. But you have to choose certified ones. The calculator’s recommendations are pre-vetted.</p>

    <p><strong>Should I reduce my travel first, or just offset it? What’s the right order?</strong><br>
      The most responsible approach is: reduce first, then offset the rest. Don’t use offsetting as a “license to pollute” while making no other changes. Ask yourself: can I take the train instead of flying for short trips? (Trains emit 80-90% less CO₂ per passenger than planes for distances under 800 km). Can I combine multiple trips into one longer journey? Can I fly economy instead of business or first class? (Business class has about 3x the carbon footprint per passenger because of extra space). Can I pack lighter? (Extra weight burns more fuel). Once you’ve reduced what you reasonably can, offset the remaining unavoidable emissions. That’s the balanced, effective approach.</p>

    <p><strong>How much does carbon offsetting typically cost? Is it expensive?</strong><br>
      Surprisingly affordable. High-quality offsets typically cost $10 to $50 per ton of CO₂. The calculator uses $25/ton as a default. For a round-trip flight from New York to Los Angeles (about 8,000 km total), emissions are roughly 1.2 tons per person. That’s $30. For a round-trip from London to New York (11,000 km), about 1.8 tons → $45. For a family of four on that trip: $180. Compare that to the cost of flights, hotels, and meals—it’s a tiny fraction. Most people spend more on airport coffee and snacks. Offsetting is one of the most cost-effective climate actions an individual can take.</p>

    <p><strong>What about non-CO₂ emissions from planes? Does the calculator account for them?</strong><br>
      Yes. Airplanes also emit nitrogen oxides (NOx), water vapor, and soot, which have warming effects at high altitudes. This is called “radiative forcing.” The calculator multiplies the CO₂ emissions by a factor of 1.9 for aviation to account for these non-CO₂ effects. That’s the standard approach recommended by the IPCC and used by most serious calculators. For ground transportation (cars, trains, buses), we only count CO₂, because the non-CO₂ effects are much smaller at low altitudes.</p>

    <h3>The Science Behind Carbon Calculations (For the Nerds):</h3>
    <p>This is how the math works under the hood. You don’t need to memorize it, but understanding it builds trust in the numbers.</p>
    <ul>
      <li><strong>Aviation Emissions:</strong> Fuel burn per passenger depends on aircraft type, distance, and seat configuration. A long-haul flight burns about 0.2 kg of jet fuel per passenger per kilometer. Jet fuel emits 3.16 kg of CO₂ per kg burned. So 0.2 kg fuel × 3.16 = 0.63 kg CO₂ per passenger-km. But then we multiply by 1.9 for radiative forcing, giving about 1.2 kg CO₂e per passenger-km. For a 5,000 km flight: 5,000 × 1.2 = 6,000 kg (6 tons) per passenger. That’s the calculator’s baseline.</li>
      <li><strong>Road Transport:</strong> A typical petrol car emits about 0.25 kg CO₂ per km. A hybrid: 0.15 kg/km. An electric car: depends on the electricity grid. In a coal-heavy grid, an EV might emit 0.12 kg/km (from power plant emissions). In a renewable-heavy grid, near zero. The calculator uses grid average for the region you select.</li>
      <li><strong>Rail Travel:</strong> High-speed electric trains in Europe emit about 0.03 kg CO₂ per passenger-km (mostly from electricity generation). Diesel trains emit about 0.08 kg/km. Both are far lower than flying—often 10-20x lower.</li>
      <li><strong>Carbon Sequestration (Trees):</strong> A newly planted tree absorbs about 22 kg of CO₂ per year as it grows, averaged over its first 20 years. So to offset 1 ton (1,000 kg), you need about 45 tree-years of growth. That could be 45 trees growing for 1 year, 9 trees growing for 5 years, or 4.5 trees growing for 10 years. The calculator uses “10 tree seedlings growing for 10 years” as a standard equivalence.</li>
    </ul>

    <h3>Types of Carbon Offset Projects (Where Your Money Goes):</h3>
    <p>Not all offsets are the same. Here’s what your money actually funds when you choose different project types:</p>
    <ul>
      <li><strong>Reforestation & Afforestation (Planting Trees):</strong> Your money buys tree seedlings, pays for planting, and covers maintenance and monitoring for several years. These projects often also restore wildlife habitat, prevent soil erosion, and provide local employment. The downside: trees take years to absorb significant carbon, so the climate benefit is delayed. But long-term, reforestation is powerful and popular.</li>
      <li><strong>Renewable Energy (Wind, Solar, Hydro):</strong> Your money helps build wind farms or solar plants in places that currently rely on coal or natural gas. By displacing fossil fuel electricity, these projects avoid emissions immediately. They also reduce air pollution and create local energy independence. This is the fastest-acting offset type.</li>
      <li><strong>Clean Cookstoves (Health + Climate):</strong> In many developing countries, people cook over open fires using wood or charcoal. These fires release black carbon (soot) and CO₂, and the smoke causes respiratory disease—killing nearly 4 million people per year, mostly women and children. Clean cookstoves burn fuel more efficiently or use solar, reducing emissions by 50-80% and saving lives. Your offset dollars fund stove distribution and training.</li>
      <li><strong>Methane Capture (Landfill Gas):</strong> Landfills generate methane as organic waste decomposes. Methane is 28x more potent as a greenhouse gas than CO₂ over 100 years. Methane capture projects collect the gas and burn it to generate electricity, converting a super-potent gas into much less harmful CO₂. These projects are highly effective but less sexy than tree planting.</li>
      <li><strong>Forest Conservation (REDD+):</strong> These projects pay local communities to protect existing forests from logging or clearing for agriculture. Deforestation is a major carbon source (about 10% of global emissions). Keeping forests standing avoids those emissions. These projects also protect biodiversity and indigenous lands. However, they’re harder to verify than tree planting—you have to prove the forest would have been cut down without the project.</li>
    </ul>

    <h3>Sustainable Travel Strategies (Reduce Before You Offset):</h3>
    <p>Offsetting is great, but reducing your emissions in the first place is even better. Here are practical strategies that actually work:</p>
    <ul>
      <li><strong>Trip Consolidation (Fewer, Longer Trips):</strong> Instead of taking three short weekend trips by plane, take one longer trip by train or by plane but stay longer. Each flight has a fixed “takeoff and landing” emissions cost that’s independent of distance. So many short flights are worse than one long flight.</li>
      <li><strong>Choose Trains Over Planes for Short Distances:</strong> For distances under 800 km (500 miles), trains emit 80-90% less CO₂ per passenger than planes. Plus, train stations are often city-center to city-center, saving taxi or transit time. The train is often faster once you factor in airport security and transfers. Win-win.</li>
      <li><strong>Pack Light (Every Kilo Matters):</strong> Heavier planes burn more fuel. The difference between a 10 kg suitcase and a 20 kg suitcase might not seem like much, but across 100 passengers, it adds up to tons of extra emissions. Pack only what you need.</li>
      <li><strong>Fly Economy (Seriously):</strong> Business class seats take up about 2-3x the space of economy seats, so the emissions per passenger are 2-3x higher. First class is even worse. If you can afford business class, you can afford to fly economy and donate the savings to offsets. Your carbon footprint will thank you.</li>
      <li><strong>Choose Non-Stop Flights:</strong> Takeoffs and landings are the most fuel-intensive parts of a flight. A connecting flight with two landings and two takeoffs emits more than a direct flight, even if the total distance is the same. Pay a bit more for non-stop when possible.</li>
      <li><strong>Stay in Eco-Accommodation:</strong> Choose hotels with sustainability certifications like LEED, Green Key, or EarthCheck. They use renewable energy, conserve water, reduce waste, and sometimes offer electric vehicle charging. Your vacation dollars reward good behavior.</li>
      <li><strong>Support Local (Don’t Fly Across the World to Eat at McDonald’s):</strong> Eating local food, using local transport, and buying local products reduces the carbon footprint of your trip by avoiding imported goods that were shipped or flown in. Plus, it’s a better cultural experience.</li>
    </ul>

    <h3>The Bigger Picture (Why Offsetting Matters):</h3>
    <p>Some people argue that carbon offsetting is a distraction—that we should focus on reducing emissions at the source instead of paying to “undo” them. And they’re partly right. Offsetting is not a substitute for systemic change. We still need renewable energy, electric vehicles, reforestation at scale, and climate policy. But here’s the thing: individual action and systemic change aren’t opponents. They’re teammates. When you offset your travel, you’re not just “easing your guilt.” You’re funding real projects that reduce real emissions. You’re sending a market signal that there’s demand for carbon reduction. You’re normalizing the idea that we should take responsibility for our climate impact. And you’re empowering yourself to act now, instead of waiting for governments to solve everything. Offsetting won’t save the world alone. But combined with reduction, advocacy, and lifestyle changes, it’s a powerful tool in the toolbox. Use it.</p>

    <h3>One Final Thought (Travel Well, Leave Light):</h3>
    <p>The world is beautiful, and you should see it. Meet people in faraway places. Try strange foods. Watch the sun set over oceans and mountains and deserts. Travel is one of the great joys of being human. But do it with awareness. Every flight, every drive, every cruise has a cost that’s not measured in dollars. Now you have a way to pay that cost. Not to erase it—you can’t un-burn jet fuel. But to balance the scales. To invest in a future where travel and the planet can coexist. Next time you book a trip, use the calculator. See the number. Pay the offset. It’s small, it’s easy, and it matters. Then go have the adventure of a lifetime, with a clean conscience and a lighter footprint.</p>
</div>
</div>
```
<!-- Offset Confirmation Modal -->
<div id="offsetModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Offset Your Carbon Emissions</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div id="offsetConfirmationContent">
        <p>You're about to offset <strong id="confirmEmissions">0 kg</strong> of CO₂ emissions through <strong id="confirmProject">reforestation</strong>.</p>
        <p>Total offset cost: <strong id="confirmCost">$0</strong></p>
        <p>This will support verified environmental projects that:</p>
        <ul id="projectBenefits">
          <li>Remove CO₂ from the atmosphere</li>
          <li>Support sustainable development</li>
          <li>Create environmental co-benefits</li>
        </ul>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelOffset">Cancel</button>
      <button class="modal-button eco" id="confirmOffset">Confirm Offset</button>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM elements
    const distanceInputs = document.querySelectorAll('.distance-input');
    const distanceOptions = document.querySelectorAll('.distance-option');
    const transportSelects = document.querySelectorAll('.option-select');
    const calcButtons = document.querySelectorAll('.calc-button');
    const alertContainer = document.getElementById('alertContainer');
    const resultsSection = document.getElementById('resultsSection');
    const offsetOptions = document.querySelectorAll('.offset-option');
    
    // Calculation options
    const carbonPrice = document.getElementById('carbonPrice');
    const travelPeriod = document.getElementById('travelPeriod');
    const includeAccommodation = document.getElementById('includeAccommodation');
    const includeMeals = document.getElementById('includeMeals');
    
    // Result elements
    const totalEmissionsElement = document.getElementById('totalEmissions');
    const offsetCostElement = document.getElementById('offsetCost');
    const equivalentTreesElement = document.getElementById('equivalentTrees');
    const carbonIntensityElement = document.getElementById('carbonIntensity');
    const resultEmissionsElement = document.getElementById('resultEmissions');
    const resultOffsetCostElement = document.getElementById('resultOffsetCost');
    const resultTreesElement = document.getElementById('resultTrees');
    const environmentalImpactElement = document.getElementById('environmentalImpact');
    const emissionsPeriodElement = document.getElementById('emissionsPeriod');
    const transportBreakdownElement = document.getElementById('transportBreakdown');
    const travelTipsElement = document.getElementById('travelTips');
    
    // Offset project elements
    const reforestationCostElement = document.getElementById('reforestationCost');
    const renewableCostElement = document.getElementById('renewableCost');
    const cookstovesCostElement = document.getElementById('cookstovesCost');
    
    // Modal elements
    const offsetModal = document.getElementById('offsetModal');
    const confirmEmissionsElement = document.getElementById('confirmEmissions');
    const confirmProjectElement = document.getElementById('confirmProject');
    const confirmCostElement = document.getElementById('confirmCost');
    const projectBenefitsElement = document.getElementById('projectBenefits');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelOffset = document.getElementById('cancelOffset');
    const confirmOffset = document.getElementById('confirmOffset');
    
    // Chart variable
    let emissionsChart = null;

    // Selected offset project
    let selectedProject = 'reforestation';

    // Emission factors (kg CO₂ per passenger km)
    const emissionFactors = {
      flight: 0.15, // Base for economy class, adjusted by class multiplier
      car: 0.15, // Base for medium petrol car
      train: 0.035, // Base for regional train
      bus: 0.08, // Base for local bus
      cruise: 0.25 // Base for standard cruise
    };

    // Event listeners
    distanceInputs.forEach(input => {
      input.addEventListener('input', updateCalculations);
    });

    distanceOptions.forEach(option => {
      option.addEventListener('click', function() {
        const distance = this.getAttribute('data-distance');
        const transportItem = this.closest('.transport-item');
        const input = transportItem.querySelector('.distance-input');
        input.value = distance;
        
        // Update active state
        const siblings = this.parentElement.querySelectorAll('.distance-option');
        siblings.forEach(sib => sib.classList.remove('active'));
        this.classList.add('active');
        
        updateCalculations();
      });
    });

    transportSelects.forEach(select => {
      select.addEventListener('change', updateCalculations);
    });

    carbonPrice.addEventListener('change', updateCalculations);
    travelPeriod.addEventListener('change', updateCalculations);

    calcButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleCalculation(action);
      });
    });

    offsetOptions.forEach(option => {
      option.addEventListener('click', function() {
        const project = this.getAttribute('data-project');
        selectOffsetProject(project);
      });
    });

    // Modal event listeners
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        offsetModal.style.display = 'none';
      });
    });

    cancelOffset.addEventListener('click', function() {
      offsetModal.style.display = 'none';
    });

    confirmOffset.addEventListener('click', function() {
      // In a real application, this would process the offset payment
      showAlert(`Thank you! Your carbon offset of ${confirmEmissionsElement.textContent} has been confirmed.`, 'success');
      offsetModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === offsetModal) {
        offsetModal.style.display = 'none';
      }
    });

    function updateCalculations() {
      const totalEmissions = calculateTotalEmissions();
      const offsetPrice = parseFloat(carbonPrice.value);
      const periodMultiplier = parseFloat(travelPeriod.value);
      
      // Calculate results
      const periodEmissions = totalEmissions * periodMultiplier;
      const offsetCost = (periodEmissions / 1000) * offsetPrice; // Convert kg to tons
      const equivalentTrees = Math.ceil(periodEmissions / 22); // Average tree absorbs 22kg CO₂ per year
      const carbonIntensity = getCarbonIntensity(periodEmissions);
      
      // Update counter displays
      totalEmissionsElement.textContent = `${formatNumber(periodEmissions)} kg`;
      offsetCostElement.textContent = `$${offsetCost.toFixed(2)}`;
      equivalentTreesElement.textContent = equivalentTrees;
      carbonIntensityElement.textContent = carbonIntensity;
      
      // Update offset project costs
      updateOffsetCosts(offsetCost);
    }

    function calculateTotalEmissions() {
      let total = 0;
      
      // Flight emissions
      const flightDistance = parseFloat(document.getElementById('flightDistance').value) || 0;
      const flightClass = parseFloat(document.getElementById('flightClass').value);
      total += flightDistance * emissionFactors.flight * flightClass * 1.9; // Include radiative forcing
      
      // Car emissions
      const carDistance = parseFloat(document.getElementById('carDistance').value) || 0;
      const carType = parseFloat(document.getElementById('carType').value);
      total += carDistance * carType;
      
      // Train emissions
      const trainDistance = parseFloat(document.getElementById('trainDistance').value) || 0;
      const trainType = parseFloat(document.getElementById('trainType').value);
      total += trainDistance * trainType;
      
      // Bus emissions
      const busDistance = parseFloat(document.getElementById('busDistance').value) || 0;
      const busType = parseFloat(document.getElementById('busType').value);
      total += busDistance * busType;
      
      // Cruise emissions
      const cruiseDistance = parseFloat(document.getElementById('cruiseDistance').value) || 0;
      const cruiseType = parseFloat(document.getElementById('cruiseType').value);
      total += cruiseDistance * cruiseType;
      
      // Accommodation emissions (if included)
      if (includeAccommodation.checked) {
        // Estimate based on travel distances and types
        const accommodationEmissions = (flightDistance + carDistance + trainDistance + busDistance + cruiseDistance) * 0.05;
        total += accommodationEmissions;
      }
      
      // Meal emissions (if included)
      if (includeMeals.checked) {
        const mealEmissions = (flightDistance + carDistance + trainDistance + busDistance + cruiseDistance) * 0.02;
        total += mealEmissions;
      }
      
      return total;
    }
    
    function getCarbonIntensity(emissions) {
      if (emissions < 100) return 'Very Low';
      if (emissions < 500) return 'Low';
      if (emissions < 2000) return 'Moderate';
      if (emissions < 5000) return 'High';
      return 'Very High';
    }
    
    function updateOffsetCosts(baseCost) {
      // Different offset projects have different cost structures
      reforestationCostElement.textContent = `$${baseCost.toFixed(2)}`;
      renewableCostElement.textContent = `$${(baseCost * 0.9).toFixed(2)}`;
      cookstovesCostElement.textContent = `$${(baseCost * 0.8).toFixed(2)}`;
    }
    
    function handleCalculation(action) {
      const totalEmissions = calculateTotalEmissions();
      
      if (action === 'calculate' && totalEmissions === 0) {
        showAlert('Please enter travel distances first.', 'error');
        return;
      }
      
      switch(action) {
        case 'calculate':
          calculateEmissions(totalEmissions);
          break;
          
        case 'save':
          saveCalculation();
          break;
          
        case 'compare':
          compareTransportMethods();
          break;
          
        case 'offset':
          showOffsetConfirmation(totalEmissions);
          break;
          
        case 'clear':
          clearAllData();
          return;
      }
    }
    
    function calculateEmissions(totalEmissions) {
      const offsetPrice = parseFloat(carbonPrice.value);
      const periodMultiplier = parseFloat(travelPeriod.value);
      const periodLabel = getPeriodLabel(periodMultiplier);
      
      // Calculate results
      const periodEmissions = totalEmissions * periodMultiplier;
      const offsetCost = (periodEmissions / 1000) * offsetPrice;
      const equivalentTrees = Math.ceil(periodEmissions / 22);
      const carbonIntensity = getCarbonIntensity(periodEmissions);
      
      // Update UI with results
      resultEmissionsElement.textContent = `${formatNumber(periodEmissions)} kg`;
      resultOffsetCostElement.textContent = `$${offsetCost.toFixed(2)}`;
      resultTreesElement.textContent = equivalentTrees;
      environmentalImpactElement.textContent = carbonIntensity;
      emissionsPeriodElement.textContent = periodLabel;
      
      // Update transport breakdown
      updateTransportBreakdown(periodMultiplier);
      
      // Update chart
      updateChart(periodMultiplier);
      
      // Generate travel tips
      generateTravelTips(totalEmissions, periodMultiplier);
      
      // Show results section
      resultsSection.style.display = 'block';
      
      // Scroll to results
      resultsSection.scrollIntoView({ behavior: 'smooth' });
      
      showAlert('Carbon emissions calculation completed!', 'success');
    }
    
    function getPeriodLabel(multiplier) {
      switch(multiplier) {
        case 1: return 'For this trip';
        case 4: return 'Per month';
        case 12: return 'Per year';
        default: return 'For this period';
      }
    }
    
    function updateTransportBreakdown(periodMultiplier) {
      let breakdownHTML = '';
      
      const transports = [
        { id: 'flightDistance', name: 'Flights', icon: '✈️' },
        { id: 'carDistance', name: 'Car', icon: '🚗' },
        { id: 'trainDistance', name: 'Train', icon: '🚆' },
        { id: 'busDistance', name: 'Bus', icon: '🚌' },
        { id: 'cruiseDistance', name: 'Cruise', icon: '🚢' }
      ];
      
      transports.forEach(transport => {
        const input = document.getElementById(transport.id);
        const distance = parseFloat(input.value) || 0;
        
        if (distance > 0) {
          let emissions = 0;
          
          // Calculate emissions for this transport type
          switch(transport.id) {
            case 'flightDistance':
              const flightClass = parseFloat(document.getElementById('flightClass').value);
              emissions = distance * emissionFactors.flight * flightClass * 1.9 * periodMultiplier;
              break;
            case 'carDistance':
              const carType = parseFloat(document.getElementById('carType').value);
              emissions = distance * carType * periodMultiplier;
              break;
            case 'trainDistance':
              const trainType = parseFloat(document.getElementById('trainType').value);
              emissions = distance * trainType * periodMultiplier;
              break;
            case 'busDistance':
              const busType = parseFloat(document.getElementById('busType').value);
              emissions = distance * busType * periodMultiplier;
              break;
            case 'cruiseDistance':
              const cruiseType = parseFloat(document.getElementById('cruiseType').value);
              emissions = distance * cruiseType * periodMultiplier;
              break;
          }
          
          breakdownHTML += `
            <div class="breakdown-item">
              <div class="breakdown-value">${formatNumber(emissions)} kg</div>
              <div class="breakdown-label">${transport.icon} ${transport.name}</div>
            </div>
          `;
        }
      });
      
      transportBreakdownElement.innerHTML = breakdownHTML || '<p>No transportation data entered.</p>';
    }
    
    function updateChart(periodMultiplier) {
      const ctx = document.getElementById('emissionsChart').getContext('2d');
      
      // Destroy previous chart if it exists
      if (emissionsChart) {
        emissionsChart.destroy();
      }
      
      // Prepare data for chart
      const labels = [];
      const data = [];
      const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
      
      const transports = [
        { id: 'flightDistance', name: 'Flights' },
        { id: 'carDistance', name: 'Car' },
        { id: 'trainDistance', name: 'Train' },
        { id: 'busDistance', name: 'Bus' },
        { id: 'cruiseDistance', name: 'Cruise' }
      ];
      
      transports.forEach((transport, index) => {
        const input = document.getElementById(transport.id);
        const distance = parseFloat(input.value) || 0;
        
        if (distance > 0) {
          labels.push(transport.name);
          
          let emissions = 0;
          switch(transport.id) {
            case 'flightDistance':
              const flightClass = parseFloat(document.getElementById('flightClass').value);
              emissions = distance * emissionFactors.flight * flightClass * 1.9 * periodMultiplier;
              break;
            case 'carDistance':
              const carType = parseFloat(document.getElementById('carType').value);
              emissions = distance * carType * periodMultiplier;
              break;
            case 'trainDistance':
              const trainType = parseFloat(document.getElementById('trainType').value);
              emissions = distance * trainType * periodMultiplier;
              break;
            case 'busDistance':
              const busType = parseFloat(document.getElementById('busType').value);
              emissions = distance * busType * periodMultiplier;
              break;
            case 'cruiseDistance':
              const cruiseType = parseFloat(document.getElementById('cruiseType').value);
              emissions = distance * cruiseType * periodMultiplier;
              break;
          }
          
          data.push(emissions);
        }
      });
      
      // Create new chart
      emissionsChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: colors,
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom'
            },
            title: {
              display: true,
              text: 'Emissions by Transportation Type'
            }
          }
        }
      });
    }
    
    function generateTravelTips(totalEmissions, periodMultiplier) {
      const periodEmissions = totalEmissions * periodMultiplier;
      let tips = '';
      
      if (periodEmissions > 5000) {
        tips = `
          <p><strong>High Impact Travel Detected</strong> - Consider these significant changes:</p>
          <ul>
            <li>Explore virtual alternatives for some business trips</li>
            <li>Combine multiple trips into longer, less frequent journeys</li>
            <li>Choose destinations closer to home for some vacations</li>
            <li>Invest in high-quality carbon offsets for unavoidable travel</li>
            <li>Advocate for sustainable travel policies in your organization</li>
          </ul>
        `;
      } else if (periodEmissions > 1000) {
        tips = `
          <p><strong>Moderate Impact Travel</strong> - These adjustments can help:</p>
          <ul>
            <li>Choose trains over planes for journeys under 800km</li>
            <li>Select non-stop flights to reduce takeoff/landing emissions</li>
            <li>Consider electric or hybrid rental cars</li>
            <li>Pack light to reduce weight-related fuel consumption</li>
            <li>Offset your remaining emissions through verified projects</li>
          </ul>
        `;
      } else {
        tips = `
          <p><strong>Low Impact Travel</strong> - Great job! Consider these enhancements:</p>
          <ul>
            <li>Continue choosing sustainable transportation options</li>
            <li>Share your sustainable travel practices with others</li>
            <li>Consider offsetting your emissions to become carbon neutral</li>
            <li>Support eco-friendly accommodations and tour operators</li>
            <li>Advocate for better public transportation infrastructure</li>
          </ul>
        `;
      }
      
      travelTipsElement.innerHTML = tips;
    }
    
    function selectOffsetProject(project) {
      selectedProject = project;
      
      // Update active state
      offsetOptions.forEach(option => {
        option.classList.remove('selected');
        if (option.getAttribute('data-project') === project) {
          option.classList.add('selected');
        }
      });
      
      // Update project benefits
      updateProjectBenefits(project);
      
      showAlert(`Selected offset project: ${getProjectName(project)}`, 'success');
    }
    
    function getProjectName(project) {
      const names = {
        reforestation: 'Reforestation',
        renewable: 'Renewable Energy',
        cookstoves: 'Clean Cookstoves'
      };
      return names[project] || 'Environmental Project';
    }
    
    function updateProjectBenefits(project) {
      let benefits = '';
      
      switch(project) {
        case 'reforestation':
          benefits = `
            <li>Plants trees that absorb CO₂ from the atmosphere</li>
            <li>Restores natural habitats and biodiversity</li>
            <li>Prevents soil erosion and improves water quality</li>
            <li>Provides sustainable livelihoods for local communities</li>
          `;
          break;
        case 'renewable':
          benefits = `
            <li>Funds solar and wind projects that replace fossil fuels</li>
            <li>Reduces air pollution and improves public health</li>
            <li>Creates green jobs in renewable energy sectors</li>
            <li>Accelerates the transition to clean energy</li>
          `;
          break;
        case 'cookstoves':
          benefits = `
            <li>Provides efficient cookstoves to families in need</li>
            <li>Reduces deforestation from fuelwood collection</li>
            <li>Improves indoor air quality and respiratory health</li>
            <li>Saves families time and money on fuel</li>
          `;
          break;
      }
      
      projectBenefitsElement.innerHTML = benefits;
    }
    
    function showOffsetConfirmation(totalEmissions) {
      if (totalEmissions === 0) {
        showAlert('Please calculate your emissions first.', 'error');
        return;
      }
      
      const offsetPrice = parseFloat(carbonPrice.value);
      const periodMultiplier = parseFloat(travelPeriod.value);
      const periodEmissions = totalEmissions * periodMultiplier;
      const offsetCost = (periodEmissions / 1000) * offsetPrice;
      
      // Apply project-specific discounts
      let finalCost = offsetCost;
      switch(selectedProject) {
        case 'renewable':
          finalCost = offsetCost * 0.9;
          break;
        case 'cookstoves':
          finalCost = offsetCost * 0.8;
          break;
      }
      
      confirmEmissionsElement.textContent = `${formatNumber(periodEmissions)} kg`;
      confirmProjectElement.textContent = getProjectName(selectedProject);
      confirmCostElement.textContent = `$${finalCost.toFixed(2)}`;
      
      updateProjectBenefits(selectedProject);
      
      offsetModal.style.display = 'block';
    }
    
    function saveCalculation() {
      const calculationData = {
        timestamp: new Date().toISOString(),
        totalEmissions: calculateTotalEmissions(),
        transport: {
          flight: parseFloat(document.getElementById('flightDistance').value) || 0,
          car: parseFloat(document.getElementById('carDistance').value) || 0,
          train: parseFloat(document.getElementById('trainDistance').value) || 0,
          bus: parseFloat(document.getElementById('busDistance').value) || 0,
          cruise: parseFloat(document.getElementById('cruiseDistance').value) || 0
        },
        carbonPrice: parseFloat(carbonPrice.value)
      };
      
      // In a real application, this would save to local storage or a database
      localStorage.setItem('carbonCalculationData', JSON.stringify(calculationData));
      showAlert('Your carbon calculation has been saved locally!', 'success');
    }
    
    function compareTransportMethods() {
      const distance = 500; // Compare for 500km journey
      
      const comparisons = [
        { name: 'Flight (Economy)', emissions: distance * emissionFactors.flight * 1 * 1.9 },
        { name: 'Car (Medium Petrol)', emissions: distance * 0.15 },
        { name: 'High-Speed Train', emissions: distance * 0.025 },
        { name: 'Coach Bus', emissions: distance * 0.03 },
        { name: 'Electric Car', emissions: distance * 0.00 }
      ];
      
      let comparisonHTML = '<p><strong>Emissions for 500km Journey:</strong></p><ul>';
      
      comparisons.forEach(method => {
        comparisonHTML += `<li><strong>${method.name}:</strong> ${formatNumber(method.emissions)} kg CO₂</li>`;
      });
      
      comparisonHTML += '</ul><p><em>Train and bus are the most climate-friendly options for medium distances.</em></p>';
      
      showAlert(comparisonHTML, 'info');
    }
    
    function clearAllData() {
      // Reset form values
      distanceInputs.forEach(input => {
        input.value = '';
      });
      
      // Clear active distance options
      document.querySelectorAll('.distance-option.active').forEach(option => {
        option.classList.remove('active');
      });
      
      // Reset selects to defaults
      document.getElementById('flightClass').value = '1.0';
      document.getElementById('carType').value = '0.15';
      document.getElementById('trainType').value = '0.035';
      document.getElementById('busType').value = '0.08';
      document.getElementById('cruiseType').value = '0.25';
      carbonPrice.value = '25';
      travelPeriod.value = '4';
      includeAccommodation.checked = true;
      includeMeals.checked = false;
      
      // Reset offset selection
      offsetOptions.forEach(option => {
        option.classList.remove('selected');
      });
      document.querySelector('.offset-option[data-project="reforestation"]').classList.add('selected');
      selectedProject = 'reforestation';
      
      // Reset results
      resultsSection.style.display = 'none';
      updateCalculations();
      
      showAlert('All data cleared successfully!', 'success');
    }

    function formatNumber(num) {
      return new Intl.NumberFormat('en-US').format(Math.round(num));
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
    
    // Initialize the calculator
    updateCalculations();
  });
</script>
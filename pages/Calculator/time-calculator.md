---
layout: default
title: "Time Calculator – Add, Subtract & Calculate Hours"
permalink: /time-calculator-calculate-time-addsubtract-time-online/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Time Calculator – Add, Subtract & Calculate Hours</title>

<meta name="description" content="Free online time calculator to add or subtract time, find time duration, and convert hours and minutes. Ideal for payroll, study, and everyday time planning.">

<meta name="keywords" content="time calculator, add time calculator, subtract time calculator, time difference calculator, hours calculator, minutes calculator, work time calculator, time duration calculator, payroll hours calculator, free online time calculator">

<meta name="author" content="ToolEsy">

<meta name="robots" content="index, follow">
<link rel="canonical" href="https://toolesy.com/time-calculator-calculate-time-addsubtract-time-online">

<!-- ✅ Open Graph Tags (for Facebook, LinkedIn, WhatsApp) -->
<meta property="og:title" content="Free Online Time Calculator - Instant Time Add/Subtract Tool">
<meta property="og:description" content="Quickly calculate time difference, add or subtract hours and minutes, and convert time units online. Fast & 100% Free!">
<meta property="og:url" content="https://toolesy.com/time-calculator-calculate-time-addsubtract-time-online">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Time Calculator - Fast & Free">
<meta name="twitter:description" content="Add or subtract time, calculate work hours, convert hours to minutes instantly.">


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Time Calculator Styles */
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

  .calculator-types {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }

  .calculator-type {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    cursor: pointer;
    border: 2px solid transparent;
  }

  .calculator-type:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
    border-color: var(--primary);
  }

  .calculator-type.active {
    border-color: var(--primary);
    background: #f0f8ff;
  }

  .calculator-type h3 {
    color: var(--primary);
    margin-bottom: 10px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .calculator-type p {
    font-size: 0.95rem;
    color: #555;
    margin: 0;
  }

  .input-section {
    margin: 20px 0;
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

  .input-group input, .input-group select {
    width: 100%;
    padding: 14px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .input-group input:focus, .input-group select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .time-inputs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .time-input-group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }

  .time-input-group input {
    text-align: center;
  }

  .formula-display {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    margin: 20px 0;
    border-left: 4px solid var(--primary);
    font-family: 'Courier New', monospace;
    font-size: 1rem;
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

  .result-section {
    margin-top: 30px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    display: none;
  }

  .result-section.active {
    display: block;
    animation: fadeIn 0.5s;
  }

  .result-title {
    color: var(--primary);
    font-size: 1.3rem;
    margin-bottom: 15px;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 10px;
  }

  .result-value {
    font-size: 1.8rem;
    font-weight: bold;
    color: #2c3e50;
    margin: 15px 0;
    text-align: center;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .calculation-steps {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
    font-size: 0.95rem;
  }

  .calculation-steps h4 {
    margin-bottom: 10px;
    color: var(--primary);
  }

  .calculation-steps ol {
    margin-left: 20px;
  }

  .calculation-steps li {
    margin-bottom: 8px;
    line-height: 1.5;
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

  .example-item {
    background: white;
    padding: 15px;
    border-radius: 6px;
    border-left: 4px solid var(--primary);
    margin: 10px 0;
  }

  .example-question {
    font-weight: 600;
    margin-bottom: 5px;
    color: #2c3e50;
  }

  .example-answer {
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

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Time calculator specific styles */
  .time-options {
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

  /* Time unit display */
  .time-unit {
    font-size: 0.9rem;
    color: #666;
    margin-left: 5px;
  }

  /* Time display styles */
  .time-display {
    font-family: 'Courier New', monospace;
    font-size: 1.1rem;
    background: #2c3e50;
    color: white;
    padding: 10px 15px;
    border-radius: 6px;
    text-align: center;
    margin: 10px 0;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .counter-wrapper {
      grid-template-columns: 1fr;
    }

    .calculator-types {
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

    .result-value {
      font-size: 1.5rem;
    }

    .time-inputs-grid {
      grid-template-columns: 1fr;
    }

    .time-input-group {
      grid-template-columns: 1fr;
    }

    .time-options {
      grid-template-columns: 1fr;
    }
  }

  /* Calculator type icons */
  .calculator-type i {
    font-size: 1.5rem;
    color: var(--primary);
  }
</style>

<div class="calculator-container">
  <h1>Free Online Time Calculator</h1>
  <p class="welcome-message">Calculate time differences, add or subtract time, convert time units, and more with our comprehensive time calculator tool.</p>

  <div class="calculator-section">
    <h2>Time Calculator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Current Time: </span>
        <span id="currentTime">Loading...</span>
      </div>
      <div class="counter-item">
        <span>Timezone: </span>
        <span id="currentTimezone">Loading...</span>
      </div>
      <div class="counter-item">
        <span>Today's Date: </span>
        <span id="currentDate">Loading...</span>
      </div>
      <div class="counter-item">
        <span>Day of Week: </span>
        <span id="currentDay">Loading...</span>
      </div>
    </div>

    <div class="calculator-types">
      <div class="calculator-type active" data-type="time-difference">
        <h3><i class="fas fa-clock"></i> Time Difference</h3>
        <p>Calculate the duration between two times</p>
      </div>
      <div class="calculator-type" data-type="add-subtract-time">
        <h3><i class="fas fa-plus-minus"></i> Add/Subtract Time</h3>
        <p>Add or subtract time from a specific time</p>
      </div>
      <div class="calculator-type" data-type="time-converter">
        <h3><i class="fas fa-exchange-alt"></i> Time Converter</h3>
        <p>Convert between different time units</p>
      </div>
      <div class="calculator-type" data-type="time-zones">
        <h3><i class="fas fa-globe"></i> Time Zones</h3>
        <p>Convert time between different time zones</p>
      </div>
    </div>

    <div class="input-section">
      <!-- Time Difference Calculator -->
      <div id="time-difference-inputs" class="calculator-inputs">
        <div class="time-inputs-grid">
          <div class="input-group">
            <label for="start-time">Start Time</label>
            <div class="time-input-group">
              <input type="number" id="start-hours" min="0" max="23" placeholder="HH" value="09">
              <input type="number" id="start-minutes" min="0" max="59" placeholder="MM" value="00">
              <input type="number" id="start-seconds" min="0" max="59" placeholder="SS" value="00">
            </div>
            <select id="start-period">
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
          <div class="input-group">
            <label for="end-time">End Time</label>
            <div class="time-input-group">
              <input type="number" id="end-hours" min="0" max="23" placeholder="HH" value="17">
              <input type="number" id="end-minutes" min="0" max="59" placeholder="MM" value="00">
              <input type="number" id="end-seconds" min="0" max="59" placeholder="SS" value="00">
            </div>
            <select id="end-period">
              <option value="AM">AM</option>
              <option value="PM" selected>PM</option>
            </select>
          </div>
        </div>
        <div class="formula-display">
          Formula: Duration = End Time - Start Time (in hours, minutes, seconds)
        </div>
      </div>

      <!-- Add/Subtract Time Calculator -->
      <div id="add-subtract-time-inputs" class="calculator-inputs" style="display: none;">
        <div class="time-inputs-grid">
          <div class="input-group">
            <label for="base-time">Base Time</label>
            <div class="time-input-group">
              <input type="number" id="base-hours" min="0" max="23" placeholder="HH" value="12">
              <input type="number" id="base-minutes" min="0" max="59" placeholder="MM" value="00">
              <input type="number" id="base-seconds" min="0" max="59" placeholder="SS" value="00">
            </div>
            <select id="base-period">
              <option value="AM">AM</option>
              <option value="PM" selected>PM</option>
            </select>
          </div>
          <div class="input-group">
            <label>Time to Add/Subtract</label>
            <div class="time-input-group">
              <input type="number" id="add-hours" min="0" placeholder="HH" value="1">
              <input type="number" id="add-minutes" min="0" placeholder="MM" value="30">
              <input type="number" id="add-seconds" min="0" placeholder="SS" value="0">
            </div>
            <select id="add-subtract-operation">
              <option value="add">Add Time</option>
              <option value="subtract">Subtract Time</option>
            </select>
          </div>
        </div>
        <div class="formula-display">
          Formula: New Time = Base Time ± (Hours + Minutes + Seconds)
        </div>
      </div>

      <!-- Time Converter Calculator -->
      <div id="time-converter-inputs" class="calculator-inputs" style="display: none;">
        <div class="time-inputs-grid">
          <div class="input-group">
            <label for="convert-value">Time Value</label>
            <input type="number" id="convert-value" placeholder="Enter time value" value="1" step="0.01">
          </div>
          <div class="input-group">
            <label for="convert-from">Convert From</label>
            <select id="convert-from">
              <option value="seconds">Seconds</option>
              <option value="minutes">Minutes</option>
              <option value="hours" selected>Hours</option>
              <option value="days">Days</option>
              <option value="weeks">Weeks</option>
            </select>
          </div>
          <div class="input-group">
            <label for="convert-to">Convert To</label>
            <select id="convert-to">
              <option value="seconds">Seconds</option>
              <option value="minutes" selected>Minutes</option>
              <option value="hours">Hours</option>
              <option value="days">Days</option>
              <option value="weeks">Weeks</option>
            </select>
          </div>
        </div>
        <div class="formula-display">
          Conversion Factors: 1 minute = 60 seconds, 1 hour = 60 minutes, 1 day = 24 hours, 1 week = 7 days
        </div>
      </div>

      <!-- Time Zones Calculator -->
      <div id="time-zones-inputs" class="calculator-inputs" style="display: none;">
        <div class="time-inputs-grid">
          <div class="input-group">
            <label for="timezone-time">Time</label>
            <div class="time-input-group">
              <input type="number" id="timezone-hours" min="0" max="23" placeholder="HH" value="12">
              <input type="number" id="timezone-minutes" min="0" max="59" placeholder="MM" value="00">
              <input type="number" id="timezone-seconds" min="0" max="59" placeholder="SS" value="00">
            </div>
            <select id="timezone-period">
              <option value="AM">AM</option>
              <option value="PM" selected>PM</option>
            </select>
          </div>
          <div class="input-group">
            <label for="from-timezone">From Timezone</label>
            <select id="from-timezone">
              <option value="UTC">UTC</option>
              <option value="EST" selected>EST (Eastern)</option>
              <option value="CST">CST (Central)</option>
              <option value="MST">MST (Mountain)</option>
              <option value="PST">PST (Pacific)</option>
              <option value="GMT">GMT</option>
              <option value="CET">CET (Central Europe)</option>
            </select>
          </div>
          <div class="input-group">
            <label for="to-timezone">To Timezone</label>
            <select id="to-timezone">
              <option value="UTC">UTC</option>
              <option value="EST">EST (Eastern)</option>
              <option value="CST">CST (Central)</option>
              <option value="MST">MST (Mountain)</option>
              <option value="PST" selected>PST (Pacific)</option>
              <option value="GMT">GMT</option>
              <option value="CET">CET (Central Europe)</option>
            </select>
          </div>
        </div>
        <div class="formula-display">
          Timezone Offsets: EST = UTC-5, CST = UTC-6, MST = UTC-7, PST = UTC-8, GMT = UTC+0, CET = UTC+1
        </div>
      </div>
    </div>

    <div class="time-options">
      <div class="option-group">
        <label class="option-label">Time Format</label>
        <select id="time-format" class="option-select">
          <option value="12hour">12-hour (AM/PM)</option>
          <option value="24hour">24-hour</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Display Format</label>
        <select id="display-format" class="option-select">
          <option value="detailed">Detailed Breakdown</option>
          <option value="simple">Simple Result</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Include Seconds</label>
        <div class="option-checkbox">
          <input type="checkbox" id="include-seconds" checked>
          <label for="include-seconds">Show seconds in calculations</label>
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="calc-button" id="calculate-button">Calculate</button>
      <button class="calc-button success" id="now-button">Use Current Time</button>
      <button class="calc-button secondary" id="clear-button">Clear</button>
      <button class="calc-button warning" id="copy-button">Copy Result</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="result-section" id="result-section">
      <h3 class="result-title">Calculation Result</h3>
      <div class="result-value" id="result-value"></div>
      <div class="calculation-steps" id="calculation-steps"></div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <div class="example-item">
        <div class="example-question">What is the time difference between 9:00 AM and 5:00 PM?</div>
        <div class="example-answer">8 hours (from 9 AM to 5 PM)</div>
      </div>

      <div class="example-item">
        <div class="example-question">What time is 2 hours 15 minutes after 10:30 AM?</div>
        <div class="example-answer">12:45 PM (10:30 AM + 2h 15m = 12:45 PM)</div>
      </div>

      <div class="example-item">
        <div class="example-question">How many minutes are in 3.5 hours?</div>
        <div class="example-answer">210 minutes (3.5 × 60 = 210)</div>
      </div>

      <div class="example-item">
        <div class="example-question">If it's 3:00 PM EST, what time is it in PST?</div>
        <div class="example-answer">12:00 PM PST (EST is 3 hours ahead of PST)</div>
      </div>
    </div>
  </div>


<!-- SEO Content Section -->
<div class="content-placeholder">

    <h2>Free Online Time Calculator – Easily Calculate Time Differences, Durations, and Conversions</h2>

    <p>Time is one of the most valuable resources we have, yet it is also one of the most difficult things to calculate accurately when dealing with schedules, work hours, travel plans, events, deadlines, and daily activities. Whether you're trying to find the difference between two times, add several hours to a schedule, calculate overtime, or convert time units, manual calculations can quickly become confusing and prone to mistakes. That's where our <strong>Free Online Time Calculator</strong> becomes incredibly useful.</p>

    <p>This powerful calculator is designed to simplify all types of time-related calculations. Instead of spending several minutes figuring out durations on paper or using complicated formulas, you can get accurate results instantly. The tool supports multiple calculation types, including time differences, time addition and subtraction, time unit conversions, and time zone calculations.</p>

    <p>From professionals managing work schedules to students organizing study sessions, almost everyone encounters situations where accurate time calculations are important. A small mistake in calculating hours and minutes can lead to missed appointments, payroll errors, scheduling conflicts, or inefficient planning. By using a dedicated time calculator, you eliminate these risks and save valuable time.</p>

    <p>The best part is that this tool is completely free to use. There is no registration required, no software installation needed, and no complicated setup process. Everything works directly within your browser, making it accessible from desktop computers, tablets, and smartphones.</p>

    <h3>How to Use This Time Calculator (Step-by-Step):</h3>

    <p>The calculator is designed with simplicity in mind. Even if you've never used a time calculator before, you can get accurate results in just a few seconds.</p>

    <ul>
        <li><strong>Select a Calculation Type:</strong> Choose whether you want to calculate a time difference, add or subtract time, convert time units, or work with different time zones.</li>

        <li><strong>Enter Your Values:</strong> Input the required time values using the available fields and selectors.</li>

        <li><strong>Customize Preferences:</strong> Select your preferred time format such as 12-hour (AM/PM) or 24-hour format.</li>

        <li><strong>Click Calculate:</strong> The calculator instantly processes the information and displays the results.</li>

        <li><strong>Review Results:</strong> See detailed breakdowns including hours, minutes, seconds, and other relevant information.</li>

        <li><strong>Copy or Reset:</strong> Easily copy the results or clear the form to start a new calculation.</li>
    </ul>

    <h3>Why Time Calculations Matter More Than You Think</h3>

    <p>Most people calculate time several times every day without realizing it. When planning meetings, estimating travel durations, scheduling work shifts, calculating overtime pay, preparing study schedules, or organizing events, time calculations are constantly involved.</p>

    <p>Unfortunately, calculating time manually can be surprisingly difficult. Unlike standard decimal numbers, time operates on a base-60 system. Sixty seconds make a minute, sixty minutes make an hour, and twenty-four hours make a day. This unique structure often creates confusion when adding or subtracting time values.</p>

    <p>For example, adding 2 hours and 45 minutes to 8:30 AM is not as straightforward as simple arithmetic. Similar challenges arise when calculating durations across midnight, multiple days, or different time zones.</p>

    <p>A dedicated time calculator eliminates these complexities by automatically handling all conversions and calculations behind the scenes.</p>

    <h3>Real-Life Example: Calculating Work Hours</h3>

    <p>Imagine you start work at 8:15 AM and finish at 5:45 PM with a one-hour lunch break. Determining your actual working hours manually requires several calculation steps.</p>

    <p>Using the Time Difference Calculator, you can quickly calculate the total duration between start and end times. Then simply subtract your lunch break to determine your actual billable or payable work hours.</p>

    <p>This can be particularly useful for freelancers, contractors, consultants, and hourly employees who need accurate records for invoicing or payroll purposes.</p>

    <h3>Who Can Benefit from a Time Calculator?</h3>

    <p>One of the greatest advantages of a time calculator is its versatility. It can be useful in countless personal, educational, and professional situations.</p>

    <ul>
        <li><strong>Employees:</strong> Calculate daily work hours, overtime, and shift durations.</li>

        <li><strong>Freelancers:</strong> Track project time and generate accurate invoices.</li>

        <li><strong>Students:</strong> Plan study schedules and manage deadlines.</li>

        <li><strong>Teachers:</strong> Organize lesson plans and classroom activities.</li>

        <li><strong>Project Managers:</strong> Estimate project timelines and task durations.</li>

        <li><strong>Travelers:</strong> Calculate travel times and time zone differences.</li>

        <li><strong>Event Organizers:</strong> Schedule events and coordinate activities.</li>

        <li><strong>Business Owners:</strong> Manage employee schedules and productivity.</li>
    </ul>

    <h3>Understanding Time Difference Calculations</h3>

    <p>A time difference calculation determines the duration between two points in time. This is one of the most common uses of a time calculator.</p>

    <p>For example, if an event starts at 9:15 AM and ends at 2:45 PM, the calculator can instantly determine the exact duration.</p>

    <p>Time difference calculations are useful for:</p>

    <ul>
        <li>Work shift tracking</li>
        <li>Attendance records</li>
        <li>Travel planning</li>
        <li>Exercise sessions</li>
        <li>Meeting durations</li>
        <li>Project time management</li>
    </ul>

    <p>The calculator automatically handles complex scenarios such as crossing midnight, spanning multiple days, or accounting for varying time units.</p>

    <h3>Adding and Subtracting Time Made Easy</h3>

    <p>Another popular feature is the ability to add or subtract time from an existing value.</p>

    <p>For instance, suppose your flight departs at 6:45 PM and lasts 8 hours and 20 minutes. Instead of calculating the arrival time manually, you can simply add the flight duration to the departure time.</p>

    <p>Similarly, if you need to know what time it was three hours and thirty minutes ago, the calculator can subtract that duration instantly.</p>

    <p>These calculations are particularly helpful when planning schedules, managing deadlines, and coordinating activities.</p>

    <h3>Why Manual Time Calculations Often Cause Errors</h3>

    <p>Many people assume time calculations are simple until they encounter situations involving multiple conversions.</p>

    <p>Common mistakes include:</p>

    <ul>
        <li>Forgetting to convert minutes correctly.</li>

        <li>Miscalculating durations across midnight.</li>

        <li>Confusing AM and PM values.</li>

        <li>Incorrectly converting hours into days.</li>

        <li>Overlooking time zone differences.</li>

        <li>Making arithmetic errors under pressure.</li>
    </ul>

    <p>Even small mistakes can have significant consequences, especially in professional settings where schedules, payroll, and deadlines depend on accurate calculations.</p>

    <p>Using an automated calculator ensures consistent and reliable results every time.</p>

    <h3>Working with Time Zones Made Simple</h3>

    <p>In today's connected world, people regularly communicate, collaborate, and do business across different countries and continents. While technology makes global communication easier than ever, time zone differences can create scheduling challenges.</p>

    <p>Imagine you're located in New York and need to schedule a meeting with clients in London, Sydney, and Singapore. Without proper time conversion, it's easy to accidentally schedule a meeting at an inconvenient or impossible time for someone involved.</p>

    <p>A Time Zone Calculator removes the guesswork by instantly converting times between locations. Instead of manually calculating offsets, the tool provides accurate results within seconds.</p>

    <p>Time zone calculations are especially useful for:</p>

    <ul>
        <li>Remote teams working internationally.</li>
        <li>Freelancers serving global clients.</li>
        <li>Online educators and students.</li>
        <li>International business meetings.</li>
        <li>Virtual events and webinars.</li>
        <li>Travel planning and flight scheduling.</li>
    </ul>

    <h3>Understanding Time Unit Conversions</h3>

    <p>Converting between different units of time is another task that often causes confusion. While converting seconds to minutes may seem straightforward, larger conversions involving days, weeks, months, and years can become more complicated.</p>

    <p>For example, if someone asks how many minutes are in 3.5 days, many people need a calculator to determine the answer accurately.</p>

    <p>The Time Converter automatically handles these calculations and supports conversions between various units, including:</p>

    <ul>
        <li>Seconds</li>
        <li>Minutes</li>
        <li>Hours</li>
        <li>Days</li>
        <li>Weeks</li>
        <li>Months</li>
        <li>Years</li>
    </ul>

    <p>This feature is particularly valuable for students, researchers, engineers, project managers, and anyone who regularly works with time-based measurements.</p>

    <h3>Using Time Calculations for Payroll and Work Hours</h3>

    <p>Accurate time tracking is essential in the workplace. Employees need reliable records of their hours worked, while employers require precise data for payroll processing.</p>

    <p>Even a small calculation error can result in incorrect payments, disputes, or administrative headaches.</p>

    <p>A Time Calculator makes payroll calculations much easier by allowing users to:</p>

    <ul>
        <li>Calculate daily work hours.</li>
        <li>Determine overtime hours.</li>
        <li>Track weekly schedules.</li>
        <li>Subtract break periods.</li>
        <li>Estimate project labor time.</li>
        <li>Generate accurate time reports.</li>
    </ul>

    <p>Freelancers and consultants can also use these calculations when preparing invoices for clients based on hourly billing.</p>

    <h3>Time Management and Productivity Planning</h3>

    <p>Effective time management starts with understanding how your time is being spent.</p>

    <p>Many people underestimate the duration of tasks, which often leads to missed deadlines and unrealistic schedules.</p>

    <p>By accurately calculating task durations, individuals can create more realistic plans and improve productivity.</p>

    <p>For example, a student preparing for exams can estimate how much study time is available before a test date. A project manager can calculate whether a deadline is realistic based on available working hours.</p>

    <p>When time is measured accurately, planning becomes more reliable and stress levels often decrease.</p>

    <h3>12-Hour vs 24-Hour Time Formats</h3>

    <p>Different regions around the world use different methods of expressing time.</p>

    <p>The 12-hour format uses AM and PM indicators, while the 24-hour format counts hours continuously from 00:00 to 23:59.</p>

    <p>Examples include:</p>

    <ul>
        <li>7:00 AM = 07:00</li>
        <li>12:00 PM = 12:00</li>
        <li>3:30 PM = 15:30</li>
        <li>10:45 PM = 22:45</li>
    </ul>

    <p>Many industries such as aviation, healthcare, military operations, and transportation prefer the 24-hour format because it reduces ambiguity and minimizes scheduling errors.</p>

    <p>Our Time Calculator supports both formats, allowing users to work with whichever system they prefer.</p>

    <h3>Travel Planning and Time Calculations</h3>

    <p>Travel often involves complex timing considerations. Flights, train schedules, hotel check-ins, layovers, and time zone changes all require accurate calculations.</p>

    <p>Suppose a flight departs at 9:00 PM and lasts 7 hours and 45 minutes. Determining the exact arrival time can be challenging, especially if the destination is in a different time zone.</p>

    <p>With a Time Calculator, travelers can quickly estimate:</p>

    <ul>
        <li>Flight durations.</li>
        <li>Arrival and departure times.</li>
        <li>Layover periods.</li>
        <li>Time zone adjustments.</li>
        <li>Travel schedules.</li>
        <li>Trip itineraries.</li>
    </ul>

    <p>This helps reduce confusion and improves overall travel planning.</p>

    <h3>Educational Uses of Time Calculations</h3>

    <p>Students frequently encounter time calculations in both academic and personal contexts.</p>

    <p>Examples include:</p>

    <ul>
        <li>Managing study schedules.</li>
        <li>Tracking homework duration.</li>
        <li>Calculating exam preparation time.</li>
        <li>Completing mathematics assignments.</li>
        <li>Understanding measurement conversions.</li>
    </ul>

    <p>Teachers can also use time calculations when planning classroom activities, organizing lessons, and managing educational projects.</p>

    <p>Learning how to calculate time accurately is an important life skill that extends far beyond the classroom.</p>

    <h3>Frequently Asked Questions</h3>

    <p><strong>How accurate is this Time Calculator?</strong><br>
    The calculator performs precise mathematical calculations and provides highly accurate results for time differences, additions, subtractions, conversions, and scheduling calculations. Results are generated instantly using standard time measurement principles.</p>

    <p><strong>Can I calculate durations longer than one day?</strong><br>
    Yes. The calculator can handle calculations ranging from a few seconds to multiple years. Whether you're measuring a short meeting or a long-term project timeline, the tool can process the calculation accurately.</p>

    <p><strong>Does the calculator support both 12-hour and 24-hour formats?</strong><br>
    Absolutely. You can work with either AM/PM notation or military-style 24-hour time depending on your preference and regional standards.</p>

    <p><strong>Can I use the calculator on my smartphone?</strong><br>
    Yes. The calculator is fully responsive and optimized for mobile phones, tablets, laptops, and desktop computers.</p>

    <p><strong>Do I need to install any software?</strong><br>
    No installation is required. The calculator works entirely within your web browser and is available instantly whenever you need it.</p>

    <h3>Common Time Calculation Mistakes People Make</h3>

    <p>Time calculations may seem simple at first glance, but several common mistakes frequently occur when calculations are performed manually.</p>

    <ul>
        <li>Confusing AM and PM times.</li>
        <li>Incorrectly converting minutes into decimal hours.</li>
        <li>Forgetting to account for midnight transitions.</li>
        <li>Ignoring time zone differences.</li>
        <li>Using incorrect conversion factors.</li>
        <li>Miscalculating overtime hours.</li>
        <li>Adding or subtracting minutes incorrectly.</li>
    </ul>

    <p>Using an automated calculator helps eliminate these errors and provides reliable results every time.</p>

    <h3>Time Calculation Formulas Used</h3>

    <p>Although the calculator performs calculations automatically, understanding the basic principles can be helpful.</p>

    <ul>
        <li><strong>Time Difference:</strong> End Time − Start Time</li>

        <li><strong>Add Time:</strong> Base Time + Duration</li>

        <li><strong>Subtract Time:</strong> Base Time − Duration</li>

        <li><strong>Seconds to Minutes:</strong> Seconds ÷ 60</li>

        <li><strong>Minutes to Hours:</strong> Minutes ÷ 60</li>

        <li><strong>Hours to Days:</strong> Hours ÷ 24</li>

        <li><strong>Days to Weeks:</strong> Days ÷ 7</li>
    </ul>

    <p>The calculator automatically applies these conversions and presents the results in an easy-to-understand format.</p>

    <h3>Advantages of Using an Online Time Calculator</h3>

    <p>Compared to manual calculations, an online calculator offers several important advantages.</p>

    <ul>
        <li>Instant results.</li>

        <li>Improved accuracy.</li>

        <li>Reduced risk of human error.</li>

        <li>Support for multiple calculation types.</li>

        <li>Convenient access from any device.</li>

        <li>No mathematical expertise required.</li>

        <li>Free and easy to use.</li>
    </ul>

    <p>These benefits make a dedicated time calculator a valuable tool for both personal and professional use.</p>

    <h3>Why Choose Our Time Calculator?</h3>

    <p>There are many time calculators available online, but not all of them offer the same level of flexibility, convenience, and usability.</p>

    <p>Our Time Calculator is designed to handle a wide variety of scenarios while remaining simple enough for everyday users.</p>

    <ul>
        <li>Supports multiple calculation modes.</li>

        <li>Provides clear and detailed results.</li>

        <li>Works instantly without registration.</li>

        <li>Compatible with all modern devices.</li>

        <li>User-friendly interface.</li>

        <li>Suitable for personal, educational, and professional use.</li>

        <li>Completely free of charge.</li>
    </ul>

    <p>Because calculations are performed directly in your browser, your information remains private and secure.</p>

    <h3>Practical Everyday Uses for a Time Calculator</h3>

    <p>The usefulness of a time calculator extends far beyond workplaces and classrooms.</p>

    <p>People use time calculations for countless daily activities, including:</p>

    <ul>
        <li>Scheduling appointments.</li>

        <li>Managing family routines.</li>

        <li>Tracking exercise sessions.</li>

        <li>Planning cooking and baking times.</li>

        <li>Organizing events and celebrations.</li>

        <li>Managing personal productivity goals.</li>

        <li>Tracking hobbies and creative projects.</li>
    </ul>

    <p>Whenever accurate timing matters, a reliable calculator can save effort and improve planning.</p>

    <h3>Final Thoughts</h3>

    <p>Time affects nearly every aspect of life. From managing work schedules and travel plans to tracking study sessions and organizing personal activities, accurate time calculations are essential for staying organized and productive.</p>

    <p>Our Free Online Time Calculator simplifies complex calculations by providing instant, accurate results for time differences, additions, subtractions, conversions, and time zone adjustments. Instead of struggling with manual calculations or worrying about mistakes, you can focus on planning your day with confidence.</p>

    <p>Whether you're a student, professional, traveler, freelancer, project manager, educator, or simply someone who wants to save time, this calculator provides a fast and reliable solution for all your time-related needs.</p>

    <p>Try the calculator whenever you need accurate time calculations and discover how much easier scheduling, planning, and time management can become with the right tools.</p>

</div>
</div>



<script>
  document.addEventListener('DOMContentLoaded', function () {
    const calculatorTypes = document.querySelectorAll('.calculator-type');
    const calculatorInputs = document.querySelectorAll('.calculator-inputs');
    const calculateButton = document.getElementById('calculate-button');
    const nowButton = document.getElementById('now-button');
    const clearButton = document.getElementById('clear-button');
    const copyButton = document.getElementById('copy-button');
    const resultSection = document.getElementById('result-section');
    const resultValue = document.getElementById('result-value');
    const calculationSteps = document.getElementById('calculation-steps');
    const alertContainer = document.getElementById('alertContainer');
    
    // Current time elements
    const currentTimeEl = document.getElementById('currentTime');
    const currentTimezoneEl = document.getElementById('currentTimezone');
    const currentDateEl = document.getElementById('currentDate');
    const currentDayEl = document.getElementById('currentDay');

    let currentCalculatorType = 'time-difference';

    // Initialize current time display
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);

    // Set default times to current time
    setDefaultTimes();

    // Event listeners for calculator type selection
    calculatorTypes.forEach(type => {
      type.addEventListener('click', function () {
        // Remove active class from all types
        calculatorTypes.forEach(t => t.classList.remove('active'));
        // Add active class to clicked type
        this.classList.add('active');
        
        // Update current calculator type
        currentCalculatorType = this.getAttribute('data-type');
        
        // Hide all input sections
        calculatorInputs.forEach(input => {
          input.style.display = 'none';
        });
        
        // Show the selected input section
        document.getElementById(`${currentCalculatorType}-inputs`).style.display = 'block';
        
        // Hide result section
        resultSection.classList.remove('active');
      });
    });

    // Calculate button event listener
    calculateButton.addEventListener('click', function () {
      calculateTime();
    });

    // Now button event listener
    nowButton.addEventListener('click', function () {
      setDefaultTimes();
      showAlert('Times set to current time!', 'success');
    });

    // Clear button event listener
    clearButton.addEventListener('click', function () {
      clearInputs();
    });

    // Copy button event listener
    copyButton.addEventListener('click', function () {
      copyResult();
    });

    function updateCurrentTime() {
      const now = new Date();
      
      // Format time as HH:MM:SS
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      currentTimeEl.textContent = `${hours}:${minutes}:${seconds}`;
      
      // Timezone
      currentTimezoneEl.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      // Format date as YYYY-MM-DD
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      currentDateEl.textContent = `${year}-${month}-${day}`;
      
      // Day of week
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      currentDayEl.textContent = days[now.getDay()];
    }

    function setDefaultTimes() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      
      // Convert to 12-hour format for AM/PM displays
      let period = 'AM';
      if (hours >= 12) {
        period = 'PM';
        if (hours > 12) hours -= 12;
      }
      if (hours === 0) hours = 12;
      
      // Set current time for time difference calculator
      document.getElementById('start-hours').value = hours;
      document.getElementById('start-minutes').value = minutes;
      document.getElementById('start-seconds').value = seconds;
      document.getElementById('start-period').value = period;
      
      // Set end time to current time + 1 hour
      let endHours = now.getHours() + 1;
      if (endHours >= 24) endHours -= 24;
      let endPeriod = 'AM';
      if (endHours >= 12) {
        endPeriod = 'PM';
        if (endHours > 12) endHours -= 12;
      }
      if (endHours === 0) endHours = 12;
      
      document.getElementById('end-hours').value = endHours;
      document.getElementById('end-minutes').value = minutes;
      document.getElementById('end-seconds').value = seconds;
      document.getElementById('end-period').value = endPeriod;
      
      // Set current time for other calculators
      document.getElementById('base-hours').value = hours;
      document.getElementById('base-minutes').value = minutes;
      document.getElementById('base-seconds').value = seconds;
      document.getElementById('base-period').value = period;
      
      document.getElementById('timezone-hours').value = hours;
      document.getElementById('timezone-minutes').value = minutes;
      document.getElementById('timezone-seconds').value = seconds;
      document.getElementById('timezone-period').value = period;
    }

    function calculateTime() {
      let result, steps;
      
      try {
        switch (currentCalculatorType) {
          case 'time-difference':
            result = calculateTimeDifference();
            break;
          case 'add-subtract-time':
            result = calculateAddSubtractTime();
            break;
          case 'time-converter':
            result = calculateTimeConverter();
            break;
          case 'time-zones':
            result = calculateTimeZones();
            break;
          default:
            throw new Error('Unknown calculator type');
        }
        
        if (result && steps) {
          displayResult(result, steps);
        }
      } catch (error) {
        showAlert(error.message, 'error');
      }
    }

    function calculateTimeDifference() {
      const startHours = parseInt(document.getElementById('start-hours').value);
      const startMinutes = parseInt(document.getElementById('start-minutes').value);
      const startSeconds = parseInt(document.getElementById('start-seconds').value);
      const startPeriod = document.getElementById('start-period').value;
      
      const endHours = parseInt(document.getElementById('end-hours').value);
      const endMinutes = parseInt(document.getElementById('end-minutes').value);
      const endSeconds = parseInt(document.getElementById('end-seconds').value);
      const endPeriod = document.getElementById('end-period').value;
      
      // Validate inputs
      if (isNaN(startHours) || isNaN(startMinutes) || isNaN(startSeconds) ||
          isNaN(endHours) || isNaN(endMinutes) || isNaN(endSeconds)) {
        throw new Error('Please enter valid time values');
      }
      
      // Convert to 24-hour format for calculation
      const startTime24 = convertTo24Hour(startHours, startPeriod);
      const endTime24 = convertTo24Hour(endHours, endPeriod);
      
      // Calculate total seconds for each time
      const startTotalSeconds = startTime24 * 3600 + startMinutes * 60 + startSeconds;
      const endTotalSeconds = endTime24 * 3600 + endMinutes * 60 + endSeconds;
      
      let diffSeconds = endTotalSeconds - startTotalSeconds;
      
      // Handle case where end time is on next day
      if (diffSeconds < 0) {
        diffSeconds += 24 * 3600; // Add 24 hours
      }
      
      // Convert back to hours, minutes, seconds
      const diffHours = Math.floor(diffSeconds / 3600);
      const diffMinutes = Math.floor((diffSeconds % 3600) / 60);
      const diffRemainingSeconds = diffSeconds % 60;
      
      const includeSeconds = document.getElementById('include-seconds').checked;
      
      const result = {
        hours: diffHours,
        minutes: diffMinutes,
        seconds: diffRemainingSeconds,
        totalSeconds: diffSeconds
      };
      
      const startTime12 = `${startHours}:${String(startMinutes).padStart(2, '0')}${includeSeconds ? ':' + String(startSeconds).padStart(2, '0') : ''} ${startPeriod}`;
      const endTime12 = `${endHours}:${String(endMinutes).padStart(2, '0')}${includeSeconds ? ':' + String(endSeconds).padStart(2, '0') : ''} ${endPeriod}`;
      
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Start Time: ${startTime12} (${startTime24}:${String(startMinutes).padStart(2, '0')} in 24-hour format)</li>
          <li>End Time: ${endTime12} (${endTime24}:${String(endMinutes).padStart(2, '0')} in 24-hour format)</li>
          <li>Start Total Seconds: ${startTotalSeconds} seconds</li>
          <li>End Total Seconds: ${endTotalSeconds} seconds</li>
          <li>Difference: ${endTotalSeconds} - ${startTotalSeconds} = ${diffSeconds} seconds</li>
          <li>Convert to Hours: ${diffSeconds} ÷ 3600 = ${diffHours} hours ${diffMinutes} minutes ${includeSeconds ? diffRemainingSeconds + ' seconds' : ''}</li>
        </ol>
      `;
      
      let resultText = `${diffHours} hours ${diffMinutes} minutes`;
      if (includeSeconds) {
        resultText += ` ${diffRemainingSeconds} seconds`;
      }
      resultText += ` between ${startTime12} and ${endTime12}`;
      
      return { 
        value: result, 
        text: resultText, 
        steps 
      };
    }

    function calculateAddSubtractTime() {
      const baseHours = parseInt(document.getElementById('base-hours').value);
      const baseMinutes = parseInt(document.getElementById('base-minutes').value);
      const baseSeconds = parseInt(document.getElementById('base-seconds').value);
      const basePeriod = document.getElementById('base-period').value;
      
      const addHours = parseInt(document.getElementById('add-hours').value);
      const addMinutes = parseInt(document.getElementById('add-minutes').value);
      const addSeconds = parseInt(document.getElementById('add-seconds').value);
      const operation = document.getElementById('add-subtract-operation').value;
      
      // Validate inputs
      if (isNaN(baseHours) || isNaN(baseMinutes) || isNaN(baseSeconds) ||
          isNaN(addHours) || isNaN(addMinutes) || isNaN(addSeconds)) {
        throw new Error('Please enter valid time values');
      }
      
      // Convert base time to 24-hour format and then to total seconds
      const baseTime24 = convertTo24Hour(baseHours, basePeriod);
      let baseTotalSeconds = baseTime24 * 3600 + baseMinutes * 60 + baseSeconds;
      
      // Calculate time to add/subtract in seconds
      const addTotalSeconds = addHours * 3600 + addMinutes * 60 + addSeconds;
      
      // Perform operation
      let newTotalSeconds;
      if (operation === 'add') {
        newTotalSeconds = baseTotalSeconds + addTotalSeconds;
      } else {
        newTotalSeconds = baseTotalSeconds - addTotalSeconds;
      }
      
      // Handle overflow/underflow (wrap around 24 hours)
      if (newTotalSeconds < 0) {
        newTotalSeconds += 24 * 3600;
      }
      newTotalSeconds = newTotalSeconds % (24 * 3600);
      
      // Convert back to hours, minutes, seconds
      let newHours24 = Math.floor(newTotalSeconds / 3600);
      const newMinutes = Math.floor((newTotalSeconds % 3600) / 60);
      const newSeconds = newTotalSeconds % 60;
      
      // Convert to 12-hour format for display
      let newHours12 = newHours24;
      let newPeriod = 'AM';
      
      if (newHours24 >= 12) {
        newPeriod = 'PM';
        if (newHours24 > 12) newHours12 = newHours24 - 12;
      }
      if (newHours24 === 0) newHours12 = 12;
      
      const includeSeconds = document.getElementById('include-seconds').checked;
      
      const result = {
        hours: newHours12,
        minutes: newMinutes,
        seconds: newSeconds,
        period: newPeriod,
        totalSeconds: newTotalSeconds
      };
      
      const baseTime12 = `${baseHours}:${String(baseMinutes).padStart(2, '0')}${includeSeconds ? ':' + String(baseSeconds).padStart(2, '0') : ''} ${basePeriod}`;
      const newTime12 = `${newHours12}:${String(newMinutes).padStart(2, '0')}${includeSeconds ? ':' + String(newSeconds).padStart(2, '0') : ''} ${newPeriod}`;
      
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Base Time: ${baseTime12} (${baseTime24}:${String(baseMinutes).padStart(2, '0')} in 24-hour format)</li>
          <li>Time to ${operation === 'add' ? 'Add' : 'Subtract'}: ${addHours}h ${addMinutes}m ${includeSeconds ? addSeconds + 's' : ''} (${addTotalSeconds} seconds)</li>
          <li>Base Total Seconds: ${baseTotalSeconds} seconds</li>
          <li>New Total Seconds: ${baseTotalSeconds} ${operation === 'add' ? '+' : '-'} ${addTotalSeconds} = ${newTotalSeconds} seconds</li>
          <li>New Time: ${newHours24}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')} (24-hour) = ${newTime12} (12-hour)</li>
        </ol>
      `;
      
      const operationText = operation === 'add' ? 'added to' : 'subtracted from';
      return { 
        value: result, 
        text: `${addHours}h ${addMinutes}m ${includeSeconds ? addSeconds + 's ' : ''}${operationText} ${baseTime12} is ${newTime12}`, 
        steps 
      };
    }

    function calculateTimeConverter() {
      const convertValue = parseFloat(document.getElementById('convert-value').value);
      const convertFrom = document.getElementById('convert-from').value;
      const convertTo = document.getElementById('convert-to').value;
      
      if (isNaN(convertValue)) {
        throw new Error('Please enter a valid number to convert');
      }
      
      // Convert to seconds first (base unit)
      let valueInSeconds;
      switch (convertFrom) {
        case 'seconds':
          valueInSeconds = convertValue;
          break;
        case 'minutes':
          valueInSeconds = convertValue * 60;
          break;
        case 'hours':
          valueInSeconds = convertValue * 3600;
          break;
        case 'days':
          valueInSeconds = convertValue * 86400;
          break;
        case 'weeks':
          valueInSeconds = convertValue * 604800;
          break;
      }
      
      // Convert from seconds to target unit
      let convertedValue;
      switch (convertTo) {
        case 'seconds':
          convertedValue = valueInSeconds;
          break;
        case 'minutes':
          convertedValue = valueInSeconds / 60;
          break;
        case 'hours':
          convertedValue = valueInSeconds / 3600;
          break;
        case 'days':
          convertedValue = valueInSeconds / 86400;
          break;
        case 'weeks':
          convertedValue = valueInSeconds / 604800;
          break;
      }
      
      const result = {
        fromValue: convertValue,
        fromUnit: convertFrom,
        toValue: convertedValue,
        toUnit: convertTo
      };
      
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Convert ${convertValue} ${convertFrom} to seconds: ${convertValue} × ${getConversionFactorToSeconds(convertFrom)} = ${valueInSeconds} seconds</li>
          <li>Convert ${valueInSeconds} seconds to ${convertTo}: ${valueInSeconds} ÷ ${getConversionFactorToSeconds(convertTo)} = ${convertedValue.toFixed(6)} ${convertTo}</li>
          <li>Rounded Result: ${convertedValue.toFixed(4)} ${convertTo}</li>
        </ol>
      `;
      
      return { 
        value: result, 
        text: `${convertValue} ${convertFrom} = ${convertedValue.toFixed(4)} ${convertTo}`, 
        steps 
      };
    }

    function calculateTimeZones() {
      const timezoneHours = parseInt(document.getElementById('timezone-hours').value);
      const timezoneMinutes = parseInt(document.getElementById('timezone-minutes').value);
      const timezoneSeconds = parseInt(document.getElementById('timezone-seconds').value);
      const timezonePeriod = document.getElementById('timezone-period').value;
      const fromTimezone = document.getElementById('from-timezone').value;
      const toTimezone = document.getElementById('to-timezone').value;
      
      // Validate inputs
      if (isNaN(timezoneHours) || isNaN(timezoneMinutes) || isNaN(timezoneSeconds)) {
        throw new Error('Please enter valid time values');
      }
      
      // Convert to 24-hour format
      const time24 = convertTo24Hour(timezoneHours, timezonePeriod);
      
      // Get timezone offsets
      const fromOffset = getTimezoneOffset(fromTimezone);
      const toOffset = getTimezoneOffset(toTimezone);
      
      // Calculate time difference between timezones
      const timezoneDiff = toOffset - fromOffset;
      
      // Calculate new time
      let newTime24 = time24 + timezoneDiff;
      
      // Handle overflow/underflow
      if (newTime24 < 0) {
        newTime24 += 24;
      }
      if (newTime24 >= 24) {
        newTime24 -= 24;
      }
      
      // Convert back to 12-hour format
      let newHours12 = newTime24;
      let newPeriod = 'AM';
      
      if (newTime24 >= 12) {
        newPeriod = 'PM';
        if (newTime24 > 12) newHours12 = newTime24 - 12;
      }
      if (newTime24 === 0) newHours12 = 12;
      
      const includeSeconds = document.getElementById('include-seconds').checked;
      
      const result = {
        fromTime: `${timezoneHours}:${String(timezoneMinutes).padStart(2, '0')}${includeSeconds ? ':' + String(timezoneSeconds).padStart(2, '0') : ''} ${timezonePeriod}`,
        fromTimezone: fromTimezone,
        toTime: `${Math.floor(newHours12)}:${String(timezoneMinutes).padStart(2, '0')}${includeSeconds ? ':' + String(timezoneSeconds).padStart(2, '0') : ''} ${newPeriod}`,
        toTimezone: toTimezone,
        timeDifference: timezoneDiff
      };
      
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Original Time: ${timezoneHours}:${String(timezoneMinutes).padStart(2, '0')} ${timezonePeriod} (${fromTimezone})</li>
          <li>Convert to 24-hour: ${time24}:${String(timezoneMinutes).padStart(2, '0')}</li>
          <li>Timezone Offsets: ${fromTimezone} = UTC${fromOffset >= 0 ? '+' : ''}${fromOffset}, ${toTimezone} = UTC${toOffset >= 0 ? '+' : ''}${toOffset}</li>
          <li>Timezone Difference: ${toOffset} - ${fromOffset} = ${timezoneDiff} hours</li>
          <li>New Time: ${time24} + ${timezoneDiff} = ${newTime24} (24-hour) = ${Math.floor(newHours12)}:${String(timezoneMinutes).padStart(2, '0')} ${newPeriod}</li>
        </ol>
      `;
      
      return { 
        value: result, 
        text: `${timezoneHours}:${String(timezoneMinutes).padStart(2, '0')} ${timezonePeriod} ${fromTimezone} = ${Math.floor(newHours12)}:${String(timezoneMinutes).padStart(2, '0')} ${newPeriod} ${toTimezone}`, 
        steps 
      };
    }

    // Helper functions
    function convertTo24Hour(hours, period) {
      if (period === 'AM') {
        if (hours === 12) return 0; // 12 AM = 0 hours
        return hours;
      } else { // PM
        if (hours === 12) return 12; // 12 PM = 12 hours
        return hours + 12;
      }
    }

    function getConversionFactorToSeconds(unit) {
      switch (unit) {
        case 'seconds': return 1;
        case 'minutes': return 60;
        case 'hours': return 3600;
        case 'days': return 86400;
        case 'weeks': return 604800;
        default: return 1;
      }
    }

    function getTimezoneOffset(timezone) {
      const offsets = {
        'UTC': 0,
        'EST': -5,
        'CST': -6,
        'MST': -7,
        'PST': -8,
        'GMT': 0,
        'CET': 1
      };
      return offsets[timezone] || 0;
    }

    function displayResult(result, steps) {
      resultValue.textContent = result.text;
      calculationSteps.innerHTML = steps;
      resultSection.classList.add('active');
      showAlert('Calculation completed successfully!', 'success');
    }

    function clearInputs() {
      // Clear all input fields
      document.querySelectorAll('input').forEach(input => {
        if (input.type !== 'checkbox') {
          input.value = '';
        }
      });
      
      // Reset checkboxes to default
      document.getElementById('include-seconds').checked = true;
      
      // Reset dropdowns to default values
      document.getElementById('start-period').value = 'AM';
      document.getElementById('end-period').value = 'PM';
      document.getElementById('base-period').value = 'PM';
      document.getElementById('add-subtract-operation').value = 'add';
      document.getElementById('convert-from').value = 'hours';
      document.getElementById('convert-to').value = 'minutes';
      document.getElementById('from-timezone').value = 'EST';
      document.getElementById('to-timezone').value = 'PST';
      document.getElementById('timezone-period').value = 'PM';
      
      // Hide result section
      resultSection.classList.remove('active');
      
      showAlert('All inputs cleared!', 'success');
    }

    function copyResult() {
      if (!resultSection.classList.contains('active')) {
        showAlert('No result to copy. Please calculate first.', 'error');
        return;
      }
      
      const textToCopy = resultValue.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showAlert('Result copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy result: ' + err, 'error');
      });
    }

    function showAlert(message, type) {
      // Remove any existing alerts
      const existingAlert = document.querySelector('.alert');
      if (existingAlert) {
        existingAlert.remove();
      }
      
      const alertDiv = document.createElement('div');
      alertDiv.className = `alert alert-${type}`;
      alertDiv.innerHTML = `
        ${message}
        <span class="close">&times;</span>
      `;

      alertContainer.appendChild(alertDiv);

      // Add close functionality
      alertDiv.querySelector('.close').addEventListener('click', function () {
        alertDiv.remove();
      });

      // Auto remove after 5 seconds
      setTimeout(() => {
        if (alertDiv.parentNode) {
          alertDiv.remove();
        }
      }, 5000);
    }
  });
</script>
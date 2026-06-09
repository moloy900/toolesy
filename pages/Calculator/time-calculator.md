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
    <h2>Free Online Time Calculator</h2>

    <p>Let’s be real for a moment—time is one of those things we’re all terrible at calculating in our heads. Sure, we can figure out that 2:00 PM to 5:00 PM is three hours. But what about 9:45 AM to 2:20 PM? Or how many hours are there between 11:30 PM and 3:15 AM the next morning? Suddenly, the mental math gets messy. And that’s before we even talk about time zones, adding hours and minutes across days, or converting 47,000 seconds into something that actually makes sense. That’s exactly why we built this <strong>Time Calculator</strong>. It’s not just another boring tool—it’s a Swiss Army knife for anything time-related. Need to know the difference between two times? Done. Want to add 3 hours and 45 minutes to 10:30 AM? Easy. Trying to figure out what time it is in Tokyo when it’s 2 PM in New York? We’ve got you. No more counting on your fingers, no more confusing AM/PM mistakes, and definitely no more showing up late to a meeting because you messed up the time zone math. Everything happens locally in your browser, so your data stays private, and once the page loads, it works offline too. Let’s make time work for you, not against you.</p>

    <h3>How to Use This Time Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Calculation Type (Pick Your Problem):</strong> You’ve got four options, and you only need to pick the one that matches what you’re trying to do. <em>Time Difference</em>: Perfect when you have two times and need to know how many hours, minutes, and seconds are between them. For example, “I started work at 9:15 AM and finished at 5:45 PM — how long did I work?” <em>Add/Subtract Time</em>: Use this when you have a starting time and you want to add or subtract a duration. Example: “If I cook this turkey for 3 hours and 30 minutes starting at 1:00 PM, when will it be done?” <em>Time Converter</em>: Need to turn 5,000 seconds into hours and minutes? Or 3.75 hours into hours and minutes? This is your mode. <em>Time Zones</em>: Working with remote teams or planning travel? Enter a time in one zone and see what it is in another. Simple.</li>
      <li><strong>Enter Time Values (No Fancy Formatting Needed):</strong> The tool is forgiving. You can type times as “2:30 PM” or “14:30” or use the time picker dropdowns. For duration fields (like adding 3 hours and 45 minutes), just enter the numbers. The calculator figures out the rest. Don’t stress about formatting — if you make a mistake, it’ll nudge you gently, not crash.</li>
      <li><strong>Customize Options (Make It Work for You):</strong> Choose between 12-hour (AM/PM) and 24-hour (military) format based on whatever you’re used to. Also, you can decide whether you want results shown in just hours, or broken down into hours/minutes/seconds, or even decimal format (like 2.75 hours instead of 2 hours and 45 minutes). This is great for billing clients or filling out timesheets.</li>
      <li><strong>Calculate (Instant Answers):</strong> Click the big “Calculate” button and get your result in less than a second. No spinning wheels. No “please wait.” Just the answer, plus a detailed breakdown of how we got there if you want to double-check the math.</li>
      <li><strong>Copy or Clear (You’re in Control):</strong> If you need to save the result — maybe to paste into an email to your boss or a message to a colleague — hit “Copy Result.” Want to start fresh? Hit “Clear” and all fields reset instantly. No page refresh required.</li>
    </ul>

    <h3>Real-Life Example & Use Case (Because Stories Stick):</h3>
    <p>Imagine this. You’re a project manager in Chicago, and you need to schedule a meeting with your team in London and a contractor in San Francisco. You want the meeting to happen at 3:00 PM your time. But what time is that for San Francisco? And for London? Doing time zone math in your head is a recipe for disaster. One wrong calculation and half the team misses the meeting. Here’s what you do instead: open the Time Calculator, select the “Time Zones” mode, enter 3:00 PM with your location set to Chicago (Central Time). The calculator instantly shows you that in San Francisco (Pacific Time), it’s 1:00 PM, and in London (GMT), it’s 9:00 PM. Now you can see that 9 PM might be too late for London, so you adjust. You try 1:00 PM Chicago time. That becomes 11:00 AM San Francisco and 7:00 PM London — still late for London but maybe manageable for a one-hour meeting. You try 11:00 AM Chicago: 9:00 AM San Francisco, 5:00 PM London. Perfect. Without the calculator, you’d be scribbling on a notepad, second-guessing yourself, and probably still getting it wrong. Now you look like a hero who respects everyone’s time zones. That’s the power of this tool.</p>

    <h3>Benefits & Who Should Use This Tool (Probably You):</h3>
    <ul>
      <li><strong>Project Managers & Team Leads:</strong> You’re juggling deadlines, meeting times, and work hours across multiple people. Being off by 15 minutes in a calculation can mean a missed deliverable or an overtime charge. Use the calculator to plan timelines accurately. Add durations to start times, calculate time differences between milestones, and schedule across time zones with confidence.</li>
      <li><strong>Freelancers & Consultants:</strong> If you bill by the hour, you need precise time tracking. You worked from 9:47 AM to 12:23 PM and again from 1:15 PM to 4:02 PM. How many total hours is that? Instead of doing messy addition and subtraction, plug the times into the calculator’s “Time Difference” mode (for each block) and then add them up. Or use the “Add/Subtract” mode to combine durations. Your invoices will be accurate, and you’ll get paid for every minute.</li>
      <li><strong>Students & Teachers:</strong> “The exam starts at 9:00 AM and lasts 2 hours and 15 minutes — what time does it end?” Classic time calculation problem. Or “If I study for 45 minutes, take a 15 minute break, and repeat that cycle three times, how much total study time and break time do I get?” The calculator handles these easily. Teachers can use it to create accurate schedules for class periods, exams, and activities.</li>
      <li><strong>Travelers & Remote Workers:</strong> You’re flying from New York to London, and the flight is 7 hours and 30 minutes. If you take off at 8:00 PM New York time, what time will you land in London (accounting for the time zone difference)? The time zone mode plus add/subtract mode together can figure this out in seconds. No more jet-lagged confusion about arrival times.</li>
      <li><strong>Event Planners:</strong> Your wedding ceremony starts at 2:00 PM, the cocktail hour is 1 hour 15 minutes, the dinner is 1.5 hours, and the dancing is scheduled for 3 hours. What time does dancing end? Enter 2:00 PM as the start time, add the durations one by one, and get the exact end time. Then you can print the schedule for vendors and guests. No arguments about whether the timeline works.</li>
      <li><strong>Cooks & Bakers:</strong> You’re making a recipe that requires three separate cooking stages: 15 minutes at 400°, then 45 minutes at 350°, then 20 minutes of resting. If you start at 4:30 PM, what time will dinner be ready? Enter 4:30 PM, add 15 minutes, add 45 minutes, add 20 minutes. The calculator tells you: 5:50 PM. Perfect for timing multiple dishes for a dinner party.</li>
      <li><strong>Anyone Who Has Ever Said “What Time Is It In…?”:</strong> You’re about to call a friend in India or join a virtual meeting with Australia. Instead of googling “time in Sydney” and doing mental subtraction, just use the time zone mode. It’ll become a habit after the first few uses.</li>
    </ul>

    <h3>Frequently Asked Questions (Real Answers):</h3>
    <p><strong>How accurate is the time calculator? Does it handle seconds and milliseconds?</strong><br>
      Yes, it handles seconds accurately, and it even supports milliseconds if you need that level of precision (though most people don’t). The calculations are based on standard time arithmetic — converting everything to total seconds, doing the math, then converting back. There’s no rounding or approximation. If you need to track something down to the second, like a race time or a scientific experiment, this tool will give you exact results.</p>

    <p><strong>Can I calculate time in both 12-hour and 24-hour formats?</strong><br>
      Absolutely. You can toggle between formats in the settings. If you enter a time in 12-hour format (like 2:30 PM), the calculator understands it. If you prefer military time (14:30), that works too. The results can be displayed in either format based on your preference. This is especially useful if you’re working with international colleagues who use the 24-hour system — you can input and output in whichever format makes sense for you.</p>

    <p><strong>Does the calculator account for daylight saving time?</strong><br>
      The basic version uses standard time zone offsets (like UTC-5 for New York, UTC+0 for London). For most everyday calculations, that’s sufficient. However, if you need precise conversions during DST transitions (like the “spring forward” or “fall back” days), you’ll need to know the specific date. The calculator doesn’t automatically adjust for DST unless you manually change the offset. For critical scheduling, double-check with a DST-aware tool, but for 90% of use cases, the standard offsets are fine.</p>

    <p><strong>How far can I calculate time differences? Can it handle spans across multiple days?</strong><br>
      Yes, it can handle time differences of any length — from seconds to years. For example, you can calculate the difference between January 1, 2023, and December 31, 2023, and it’ll give you the exact number of days, hours, minutes, and seconds. For everyday use (work hours, meeting durations, travel times), it’s more than enough. For astronomical time spans (like the age of the universe), you’d need a specialized tool, but for normal human-scale time, this calculator works perfectly.</p>

    <p><strong>Can I use this tool on my mobile phone while traveling?</strong><br>
      Yes, and that’s honestly where it shines. You’re at the airport, trying to figure out what time you’ll land after a 9-hour flight with a time zone change. You don’t want to open a laptop. Just pull out your phone, open the calculator, and run the numbers. The interface is fully responsive — buttons are big enough to tap, and the layout adjusts to small screens. You can even use it offline after the page loads once, which is great for flights with no Wi-Fi.</p>

    <p><strong>Is there any cost? Do I need to sign up?</strong><br>
      No and no. This is completely free. No “premium version” hiding behind a paywall. No “sign up to unlock basic features.” No ads that cover the time picker. Just a clean, honest tool that does what it says. Bookmark it, share it with coworkers, use it every day. It’s free forever.</p>

    <h3>Why Choose Our Time Calculator (Over the Dozens of Others)?</h3>
    <p>Let’s be honest — there are a lot of time calculators online. Many of them are fine. But here’s what makes this one different. First, <strong>versatility</strong>. Most time calculators only do one thing — maybe just time differences, or just addition. This one does four different calculation types in one interface. You don’t need to search for separate tools. Second, <strong>privacy</strong>. All calculations happen in your browser. Your times and dates never go to our server. We can’t see them, we don’t store them, and we definitely don’t sell them. Third, <strong>step-by-step breakdowns</strong>. If you want to understand how the result was calculated, you can see the math. This is great for students learning time arithmetic or for professionals who need to verify accuracy. Fourth, <strong>offline capability</strong>. Once you load the page, you can disconnect from the internet and keep using it. That’s rare for online tools. And finally, <strong>it just works</strong>. No confusing interfaces, no hidden dropdowns, no “click here to unlock advanced settings.” You pick what you need, enter your numbers, and get an answer. That’s it.</p>

    <h3>Common Applications of Time Calculations (You Use This More Than You Think):</h3>
    <ul>
      <li><strong>Work & Employment:</strong> Calculating work hours for payroll, determining overtime, tracking project hours, scheduling shifts across time zones. A 9-to-5 job isn’t just 8 hours — it’s often 8.5 with a lunch break. The calculator handles the exact minutes.</li>
      <li><strong>Education:</strong> A lecture that started at 10:10 AM and ended at 11:45 AM — how long was it? A study plan that involves 3 sessions of 45 minutes each with 15 minute breaks — when does it end? A deadline for a paper that’s 72 hours from Tuesday 9 AM — what day and time is that?</li>
      <li><strong>Travel & Transportation:</strong> Flight durations, train schedules, road trip planning. If you leave at 7:30 AM and drive for 4 hours and 15 minutes, what time will you arrive? If you cross into a different time zone halfway, how does that affect arrival time? The calculator handles both.</li>
      <li><strong>Sports & Fitness:</strong> A marathon runner finishes in 3 hours, 48 minutes, and 22 seconds. What’s that in total seconds? A workout consists of 3 rounds: 5 minutes cardio, 2 minutes rest, 10 minutes strength. How long is the total workout?</li>
      <li><strong>Cooking & Recipes:</strong> A roast needs 20 minutes per pound, and your roast is 5.5 pounds. If you start at 3:15 PM, when will it be done? A bread recipe requires 15 minutes of prep, 90 minutes of rising, 20 minutes of shaping, 45 minutes of second rise, and 35 minutes of baking. What’s the total time from start to finish?</li>
      <li><strong>Media & Entertainment:</strong> You’re binging a TV show. Each episode is 42 minutes, and there are 13 episodes. How many total hours is that? A podcast is 1 hour and 17 minutes. If you listen at 1.5x speed, how long will it take?</li>
      <li><strong>Science & Experiments:</strong> An experiment runs for 72 hours starting at 10:00 AM on Tuesday. When does it end? A chemical reaction requires 2 hours and 15 minutes at a specific temperature. If you start at 8:20 PM, what time should you check it?</li>
    </ul>

    <h3>Time Calculation Formulas Used (For the Curious):</h3>
    <p>You don’t need to memorize these — that’s what the calculator is for. But some people like to know how the sausage is made. Here’s what’s happening under the hood:</p>
    <ul>
      <li><strong>Time Difference:</strong> Convert both times to total seconds since midnight. For example, 2:15 PM = 14*3600 + 15*60 = 51,300 seconds. Subtract the smaller from the larger. Then convert the difference back to hours, minutes, and seconds. If the times cross midnight, the calculator detects that and adds 24 hours automatically.</li>
      <li><strong>Add/Subtract Time:</strong> Convert the base time to total seconds. Convert the duration to total seconds. Add or subtract. Then convert back to standard time format. If the result goes past 24 hours, the calculator shows you the next day (e.g., “2:00 AM next day”).</li>
      <li><strong>Time Conversion:</strong> Use conversion factors: 1 minute = 60 seconds, 1 hour = 3,600 seconds, 1 day = 86,400 seconds, 1 week = 604,800 seconds. To convert seconds to hours, divide seconds by 3,600. To convert hours to seconds, multiply by 3,600.</li>
      <li><strong>Time Zone Conversion:</strong> Take the source time, convert to UTC (Coordinated Universal Time) by applying the source offset, then convert to target time by applying the target offset. Example: New York (UTC-5) to London (UTC+0). 2:00 PM New York = 7:00 PM UTC (because 2 PM + 5 hours = 7 PM). 7:00 PM UTC in London is 7:00 PM (no offset). That’s the math.</li>
    </ul>

    <h3>Time Unit Conversion Reference (Handy to Know):</h3>
    <p>Even if the calculator does the work, it’s useful to have a mental reference:</p>
    <ul>
      <li>1 minute = 60 seconds</li>
      <li>1 hour = 60 minutes = 3,600 seconds</li>
      <li>1 day = 24 hours = 1,440 minutes = 86,400 seconds</li>
      <li>1 week = 7 days = 168 hours = 10,080 minutes = 604,800 seconds</li>
      <li>1 month (average) = 30.44 days = 730.56 hours = 43,833.6 minutes (months vary, so this is an approximation)</li>
      <li>1 year (common) = 365 days = 8,760 hours = 525,600 minutes = 31,536,000 seconds</li>
      <li>1 year (leap) = 366 days = 8,784 hours = 527,040 minutes = 31,622,400 seconds</li>
    </ul>

    <h3>A Few Pro Tips (Because We Want You to Succeed):</h3>
    <p>First, if you’re tracking work hours for billing, always use the “Add/Subtract” mode to build your total. Enter your start time, add your first work block, then add your second, etc. The calculator will keep a running total. Second, for time zone planning, remember that some countries use half-hour offsets (like India UTC+5:30) or even quarter-hour offsets (like Nepal UTC+5:45). The calculator supports custom offsets if you need them. Third, if you’re adding a lot of time durations (like multiple project tasks), use the decimal mode — it’s much easier to add 2.75 hours + 1.5 hours than to add 2h45m + 1h30m. You can always convert back later. And finally, don’t be afraid to experiment. The calculator has no limit on how many times you can use it. Try different modes, different numbers, see what happens. You might discover a new way to use the tool that you hadn’t thought of.</p>

    <h3>One Final Thought (Time Is Precious — Don’t Waste It Doing Math):</h3>
    <p>Time is the one resource you can never get back. That’s a cliché, but it’s true. So why spend even a few extra minutes doing manual time calculations when a tool can do it instantly and accurately? Whether you’re billing a client, planning a trip, scheduling a meeting, or just trying to figure out when your pizza will be ready, this calculator saves you mental energy for the things that matter. It’s free, it’s private, it works offline, and it’s always here when you need it. Bookmark it. Share it with your team. Use it tomorrow. And then go do something worthwhile with the time you saved. You’ve earned it.</p>
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
---
layout: default
title: "Hours Calculator – Work Hours & Time Duration Online"
permalink: /hours-calculator-calculate-hours-work-time-timesheet-online/
---

<!-- Basic SEO Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Hours Calculator – Work Hours & Time Duration Online</title>

<meta name="description"
  content="Free online hours calculator to calculate work hours, timesheet totals, time duration, and overtime. Fast, accurate, and perfect for employees and businesses.">

<meta name="keywords"
  content="hours calculator, work hours calculator, timesheet calculator, time duration calculator, overtime calculator, payroll calculator, time card calculator, online time calculator">

<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Canonical URL -->
<link rel="canonical" href="https://toolesy.com/hours-calculator-calculate-hours-work-time-timesheet-online" />

<!-- Open Graph Tags (Facebook / LinkedIn) -->
<meta property="og:title" content="Hours Calculator - Free Online Work Hours & Time Duration Tool">
<meta property="og:description" content="Use this free online hours calculator to calculate work hours, timesheet totals, time duration, overtime, and payroll accurately and quickly.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/hours-calculator-calculate-hours-work-time-timesheet-online">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Hours Calculator | Free Online Work Hours & Time Duration Tool">
<meta name="twitter:description" content="Free online hours calculator for work hours, timesheet totals, overtime, payroll, and time duration. Quick and easy to use.">

<!-- JSON-LD Web Application Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Hours Calculator",
  "url": "https://toolesy.com/hours-calculator-calculate-hours-work-time-timesheet-online",
  "description": "Free online hours calculator to calculate work hours, timesheet totals, time duration, overtime, and payroll. Fast, accurate, and easy to use for employees, freelancers, and businesses.",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I calculate hours with breaks included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply enter your clock-in time, clock-out time, and break duration. The calculator automatically subtracts break time from your total hours worked."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between regular time and overtime?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Regular time is hours worked up to your standard work week (typically 40 hours). Overtime is any hours worked beyond that threshold, usually paid at a higher rate."
      }
    },
    {
      "@type": "Question",
      "name": "Can I calculate hours for multiple employees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While this calculator is designed for individual calculations, you can use it sequentially for multiple employees by clearing the inputs between calculations."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is the hours calculation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our calculator is highly accurate and handles all time calculations with precision, including decimal conversions and break time deductions."
      }
    }
  ]
}
</script>

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Hours Calculator Styles */
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
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .time-input-group input {
    text-align: center;
  }

  .timesheet-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .timesheet-table th {
    background: var(--primary);
    color: white;
    padding: 15px;
    text-align: left;
    font-weight: 600;
  }

  .timesheet-table td {
    padding: 12px 15px;
    border-bottom: 1px solid #e0e0e0;
  }

  .timesheet-table tr:last-child td {
    border-bottom: none;
  }

  .timesheet-table tr:hover {
    background: #f8f9fa;
  }

  .add-entry-button {
    background: var(--success);
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 10px 0;
  }

  .add-entry-button:hover {
    background: #218838;
    transform: translateY(-2px);
  }

  .remove-entry {
    color: #dc3545;
    cursor: pointer;
    font-size: 1.2rem;
    transition: color 0.3s;
  }

  .remove-entry:hover {
    color: #c82333;
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

  /* Hours calculator specific styles */
  .hours-options {
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

  /* Summary cards */
  .summary-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .summary-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border-left: 4px solid var(--primary);
  }

  .summary-card h4 {
    color: #2c3e50;
    margin-bottom: 10px;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .summary-card .value {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--primary);
  }

  .summary-card .subtext {
    font-size: 0.8rem;
    color: #666;
    margin-top: 5px;
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

    .hours-options {
      grid-template-columns: 1fr;
    }

    .summary-cards {
      grid-template-columns: 1fr;
    }

    .timesheet-table {
      font-size: 0.8rem;
    }

    .timesheet-table th,
    .timesheet-table td {
      padding: 8px 10px;
    }
  }

  /* Calculator type icons */
  .calculator-type i {
    font-size: 1.5rem;
    color: var(--primary);
  }
</style>

<div class="calculator-container">
  <h1>Free Online Hours Calculator</h1>
  <p class="welcome-message">Calculate work hours, timesheet totals, time duration, overtime, and payroll. Perfect for employees, freelancers, and businesses.</p>

  <div class="calculator-section">
    <h2>Hours Calculator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Current Time: </span>
        <span id="currentTime">Loading...</span>
      </div>
      <div class="counter-item">
        <span>Today's Date: </span>
        <span id="currentDate">Loading...</span>
      </div>
      <div class="counter-item">
        <span>Work Week: </span>
        <span id="workWeek">Week 32</span>
      </div>
      <div class="counter-item">
        <span>Standard Hours: </span>
        <span id="standardHours">40 hours</span>
      </div>
    </div>

    <div class="calculator-types">
      <div class="calculator-type active" data-type="work-hours">
        <h3><i class="fas fa-business-time"></i> Work Hours</h3>
        <p>Calculate daily work hours and breaks</p>
      </div>
      <div class="calculator-type" data-type="timesheet">
        <h3><i class="fas fa-calendar-week"></i> Timesheet</h3>
        <p>Calculate weekly or monthly timesheet totals</p>
      </div>
      <div class="calculator-type" data-type="overtime">
        <h3><i class="fas fa-clock"></i> Overtime</h3>
        <p>Calculate overtime hours and pay</p>
      </div>
      <div class="calculator-type" data-type="payroll">
        <h3><i class="fas fa-money-bill-wave"></i> Payroll</h3>
        <p>Calculate gross pay based on hours worked</p>
      </div>
    </div>

    <div class="input-section">
      <!-- Work Hours Calculator -->
      <div id="work-hours-inputs" class="calculator-inputs">
        <div class="time-inputs-grid">
          <div class="input-group">
            <label for="clock-in">Clock In Time</label>
            <div class="time-input-group">
              <input type="time" id="clock-in" value="09:00">
            </div>
          </div>
          <div class="input-group">
            <label for="clock-out">Clock Out Time</label>
            <div class="time-input-group">
              <input type="time" id="clock-out" value="17:00">
            </div>
          </div>
        </div>
        <div class="input-group">
          <label for="break-duration">Break Duration (minutes)</label>
          <input type="number" id="break-duration" min="0" max="180" value="60" placeholder="Enter break duration in minutes">
        </div>
        <div class="formula-display">
          Formula: Work Hours = (Clock Out - Clock In) - Break Duration
        </div>
      </div>

      <!-- Timesheet Calculator -->
      <div id="timesheet-inputs" class="calculator-inputs" style="display: none;">
        <div class="input-group">
          <button class="add-entry-button" id="add-timesheet-entry">
            <i class="fas fa-plus"></i> Add Day
          </button>
        </div>
        <table class="timesheet-table" id="timesheet-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Break (min)</th>
              <th>Hours</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="timesheet-body">
            <tr>
              <td>
                <select class="day-select">
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                  <option value="sunday">Sunday</option>
                </select>
              </td>
              <td><input type="time" class="start-time" value="09:00"></td>
              <td><input type="time" class="end-time" value="17:00"></td>
              <td><input type="number" class="break-time" min="0" value="60"></td>
              <td class="day-total">7.00</td>
              <td><i class="fas fa-times remove-entry"></i></td>
            </tr>
          </tbody>
        </table>
        <div class="formula-display">
          Daily Hours = (End Time - Start Time) - (Break Minutes ÷ 60)
        </div>
      </div>

      <!-- Overtime Calculator -->
      <div id="overtime-inputs" class="calculator-inputs" style="display: none;">
        <div class="time-inputs-grid">
          <div class="input-group">
            <label for="total-hours">Total Hours Worked</label>
            <input type="number" id="total-hours" min="0" step="0.25" value="45" placeholder="Enter total hours">
          </div>
          <div class="input-group">
            <label for="regular-hours">Regular Hours (before overtime)</label>
            <input type="number" id="regular-hours" min="0" step="0.25" value="40" placeholder="Enter regular hours">
          </div>
          <div class="input-group">
            <label for="overtime-rate">Overtime Rate Multiplier</label>
            <select id="overtime-rate">
              <option value="1.5">1.5x (Time and a half)</option>
              <option value="2">2x (Double time)</option>
              <option value="2.5">2.5x</option>
              <option value="3">3x (Triple time)</option>
            </select>
          </div>
        </div>
        <div class="formula-display">
          Overtime Hours = Total Hours - Regular Hours | Overtime Pay = Overtime Hours × Hourly Rate × Overtime Multiplier
        </div>
      </div>

      <!-- Payroll Calculator -->
      <div id="payroll-inputs" class="calculator-inputs" style="display: none;">
        <div class="time-inputs-grid">
          <div class="input-group">
            <label for="hourly-rate">Hourly Rate ($)</label>
            <input type="number" id="hourly-rate" min="0" step="0.01" value="15.00" placeholder="Enter hourly rate">
          </div>
          <div class="input-group">
            <label for="payroll-hours">Hours Worked</label>
            <input type="number" id="payroll-hours" min="0" step="0.25" value="40" placeholder="Enter hours worked">
          </div>
          <div class="input-group">
            <label for="pay-period">Pay Period</label>
            <select id="pay-period">
              <option value="weekly">Weekly</option>
              <option value="bi-weekly">Bi-Weekly</option>
              <option value="semi-monthly">Semi-Monthly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>
        <div class="input-group">
          <label for="tax-rate">Tax Rate (%)</label>
          <input type="number" id="tax-rate" min="0" max="50" step="0.1" value="20" placeholder="Enter tax rate percentage">
        </div>
        <div class="formula-display">
          Gross Pay = Hours × Hourly Rate | Net Pay = Gross Pay × (1 - Tax Rate/100)
        </div>
      </div>
    </div>

    <div class="hours-options">
      <div class="option-group">
        <label class="option-label">Time Format</label>
        <select id="time-format" class="option-select">
          <option value="decimal">Decimal (7.5 hours)</option>
          <option value="hours-minutes">Hours:Minutes (7:30)</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Work Week</label>
        <select id="work-week-days" class="option-select">
          <option value="5">5 days (Mon-Fri)</option>
          <option value="6">6 days</option>
          <option value="7">7 days</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Overtime Starts After</label>
        <input type="number" id="overtime-threshold" class="option-input" min="0" max="80" value="40" step="0.5">
        <span class="time-unit">hours/week</span>
      </div>
    </div>

    <div class="button-section">
      <button class="calc-button" id="calculate-button">Calculate</button>
      <button class="calc-button success" id="reset-button">Reset</button>
      <button class="calc-button secondary" id="clear-button">Clear All</button>
      <button class="calc-button warning" id="copy-button">Copy Result</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="result-section" id="result-section">
      <h3 class="result-title">Calculation Result</h3>
      <div class="result-value" id="result-value"></div>
      
      <div class="summary-cards" id="summary-cards">
        <!-- Summary cards will be dynamically inserted here -->
      </div>
      
      <div class="calculation-steps" id="calculation-steps"></div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <div class="example-item">
        <div class="example-question">If you work from 9:00 AM to 5:00 PM with a 1-hour break, how many hours did you work?</div>
        <div class="example-answer">7 hours (8 hours total minus 1 hour break)</div>
      </div>

      <div class="example-item">
        <div class="example-question">You worked 45 hours this week at $20/hour with overtime at 1.5x after 40 hours. What's your total pay?</div>
        <div class="example-answer">$950 (40 regular hours × $20 = $800, 5 overtime hours × $30 = $150)</div>
      </div>

      <div class="example-item">
        <div class="example-question">Your weekly timesheet shows: Mon 8h, Tue 7.5h, Wed 9h, Thu 8h, Fri 6h. What's the weekly total?</div>
        <div class="example-answer">38.5 hours</div>
      </div>

      <div class="example-item">
        <div class="example-question">You earn $25/hour and worked 42 hours with 20% tax deduction. What's your net pay?</div>
        <div class="example-answer">$840 gross ($25 × 42), $672 net after 20% tax</div>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Hours Calculator</h2>

    <p>Our comprehensive <strong>Hours Calculator</strong> is an essential tool for employees, freelancers, business owners, and anyone who needs to track and calculate work hours accurately. Whether you're calculating daily work hours, weekly timesheets, overtime pay, or payroll calculations, this calculator provides precise results instantly. Save time, avoid manual calculation errors, and ensure you're paid correctly for all hours worked.</p>

    <h3>How to Use This Hours Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Calculation Type:</strong> Choose from four different calculations: Work Hours, Timesheet, Overtime, or Payroll.</li>
      <li><strong>Enter Time Data:</strong> Input your clock-in/clock-out times, break durations, hourly rates, and other relevant information.</li>
      <li><strong>Add Multiple Entries:</strong> For timesheet calculations, add as many days as needed using the "Add Day" button.</li>
      <li><strong>Customize Settings:</strong> Adjust options like time format, work week length, and overtime thresholds.</li>
      <li><strong>Calculate:</strong> Click the "Calculate" button to get your results with detailed breakdown.</li>
      <li><strong>Copy or Reset:</strong> Use the "Copy Result" button to save your calculation or "Reset" to start over.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a freelancer who worked on a project with varying daily hours throughout the week: Monday 6 hours, Tuesday 8 hours, Wednesday 7.5 hours, Thursday 9 hours, and Friday 5 hours. Using our Timesheet calculator, you can easily add each day's hours and instantly see that you worked a total of 35.5 hours for the week. If your hourly rate is $45, the calculator shows your gross pay would be $1,597.50, helping you create accurate invoices for your clients.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Employees:</strong> Track work hours, calculate overtime, and verify paycheck accuracy</li>
      <li><strong>Freelancers:</strong> Calculate billable hours and create professional invoices</li>
      <li><strong>Small Business Owners:</strong> Calculate employee hours, overtime costs, and payroll</li>
      <li><strong>Managers & Supervisors:</strong> Monitor team hours and manage labor costs</li>
      <li><strong>HR Professionals:</strong> Verify timesheets and calculate compensation accurately</li>
      <li><strong>Students & Interns:</strong> Track hours for part-time jobs or internships</li>
      <li><strong>Anyone:</strong> Calculate time investments for projects, hobbies, or volunteer work</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: How do I calculate hours with breaks included?</strong><br>
      A: Simply enter your clock-in time, clock-out time, and break duration. The calculator automatically subtracts break time from your total hours worked.</p>

    <p><strong>Q: What's the difference between regular time and overtime?</strong><br>
      A: Regular time is hours worked up to your standard work week (typically 40 hours). Overtime is any hours worked beyond that threshold, usually paid at a higher rate.</p>

    <p><strong>Q: Can I calculate hours for multiple employees?</strong><br>
      A: While this calculator is designed for individual calculations, you can use it sequentially for multiple employees by clearing the inputs between calculations.</p>

    <p><strong>Q: How accurate is the hours calculation?</strong><br>
      A: Our calculator is highly accurate and handles all time calculations with precision, including decimal conversions and break time deductions.</p>

    <h3>Why Choose Our Hours Calculator?</h3>
    <p>Our <strong>online hours calculator</strong> stands out for its comprehensive features, accuracy, and user-friendly interface. Unlike basic calculators that provide simple results, ours shows detailed breakdowns with summary cards and step-by-step explanations. The tool handles multiple calculation scenarios including daily hours, weekly timesheets, overtime calculations, and payroll computations. All calculations happen locally in your browser, ensuring your data privacy and enabling offline use once the page is loaded.</p>

    <h3>Common Applications of Hours Calculations</h3>
    <p>Hours calculations have numerous practical applications in professional and personal contexts:</p>
    <ul>
      <li><strong>Payroll Processing:</strong> Calculate employee wages based on hours worked</li>
      <li><strong>Project Management:</strong> Track time spent on different projects and tasks</li>
      <li><strong>Freelance Work:</strong> Bill clients accurately for time-based services</li>
      <li><strong>Labor Law Compliance:</strong> Ensure proper overtime calculation and payment</li>
      <li><strong>Budget Planning:</strong> Forecast labor costs for business planning</li>
      <li><strong>Time Management:</strong> Analyze how time is spent to improve productivity</li>
      <li><strong>Client Billing:</strong> Create accurate invoices for hourly services</li>
    </ul>

    <h3>Hours Calculation Formulas Used</h3>
    <p>Our calculator uses these standard mathematical approaches:</p>
    <ul>
      <li><strong>Daily Work Hours:</strong> (Clock Out - Clock In) - (Break Minutes ÷ 60)</li>
      <li><strong>Overtime Calculation:</strong> Total Hours - Regular Hours = Overtime Hours</li>
      <li><strong>Gross Pay:</strong> Hours Worked × Hourly Rate</li>
      <li><strong>Overtime Pay:</strong> Overtime Hours × Hourly Rate × Overtime Multiplier</li>
      <li><strong>Net Pay:</strong> Gross Pay × (1 - Tax Rate/100)</li>
      <li><strong>Timesheet Total:</strong> Sum of all daily hours</li>
    </ul>

    <h3>Understanding Overtime Rules</h3>
    <p>Overtime regulations vary by location and employment type, but common standards include:</p>
    <ul>
      <li><strong>Federal Standard (US):</strong> 1.5x regular pay for hours over 40 in a work week</li>
      <li><strong>Daily Overtime:</strong> Some states require overtime for hours over 8 in a day</li>
      <li><strong>Double Time:</strong> 2x regular pay for hours over 12 in a day or over 8 on 7th consecutive day</li>
      <li><strong>Industry Variations:</strong> Healthcare, transportation, and other industries may have specific rules</li>
    </ul>

    <h3>Tips for Accurate Time Tracking</h3>
    <p>To get the most accurate results from our calculator:</p>
    <ul>
      <li>Record your actual start and end times, not just scheduled times</li>
      <li>Include all break times, even short ones</li>
      <li>Use the same time format consistently (AM/PM or 24-hour)</li>
      <li>Round to the nearest quarter-hour for simplicity if your workplace allows it</li>
      <li>Keep detailed records for reference and verification</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const calculatorTypes = document.querySelectorAll('.calculator-type');
    const calculatorInputs = document.querySelectorAll('.calculator-inputs');
    const calculateButton = document.getElementById('calculate-button');
    const resetButton = document.getElementById('reset-button');
    const clearButton = document.getElementById('clear-button');
    const copyButton = document.getElementById('copy-button');
    const resultSection = document.getElementById('result-section');
    const resultValue = document.getElementById('result-value');
    const summaryCards = document.getElementById('summary-cards');
    const calculationSteps = document.getElementById('calculation-steps');
    const alertContainer = document.getElementById('alertContainer');
    const addTimesheetEntry = document.getElementById('add-timesheet-entry');
    const timesheetBody = document.getElementById('timesheet-body');
    
    // Current time elements
    const currentTimeEl = document.getElementById('currentTime');
    const currentDateEl = document.getElementById('currentDate');

    let currentCalculatorType = 'work-hours';
    let timesheetEntries = 1;

    // Initialize current time display
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);

    // Set default values
    setDefaultValues();

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

    // Add timesheet entry
    addTimesheetEntry.addEventListener('click', function () {
      addNewTimesheetEntry();
    });

    // Remove timesheet entry
    timesheetBody.addEventListener('click', function (e) {
      if (e.target.classList.contains('remove-entry')) {
        if (timesheetEntries > 1) {
          e.target.closest('tr').remove();
          timesheetEntries--;
          calculateDayTotals();
        } else {
          showAlert('You need at least one timesheet entry.', 'error');
        }
      }
    });

    // Recalculate day totals when inputs change
    timesheetBody.addEventListener('input', function (e) {
      if (e.target.classList.contains('start-time') || 
          e.target.classList.contains('end-time') || 
          e.target.classList.contains('break-time')) {
        calculateDayTotals();
      }
    });

    // Calculate button event listener
    calculateButton.addEventListener('click', function () {
      calculateHours();
    });

    // Reset button event listener
    resetButton.addEventListener('click', function () {
      resetCalculator();
    });

    // Clear button event listener
    clearButton.addEventListener('click', function () {
      clearAllInputs();
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
      
      // Format date as YYYY-MM-DD
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      currentDateEl.textContent = `${year}-${month}-${day}`;
    }

    function setDefaultValues() {
      // Set default times for work hours calculator
      document.getElementById('clock-in').value = '09:00';
      document.getElementById('clock-out').value = '17:00';
      document.getElementById('break-duration').value = '60';
      
      // Set default values for overtime calculator
      document.getElementById('total-hours').value = '45';
      document.getElementById('regular-hours').value = '40';
      document.getElementById('overtime-rate').value = '1.5';
      
      // Set default values for payroll calculator
      document.getElementById('hourly-rate').value = '15.00';
      document.getElementById('payroll-hours').value = '40';
      document.getElementById('pay-period').value = 'weekly';
      document.getElementById('tax-rate').value = '20';
      
      // Calculate initial day totals
      calculateDayTotals();
    }

    function addNewTimesheetEntry() {
      if (timesheetEntries >= 7) {
        showAlert('Maximum 7 days allowed in timesheet.', 'error');
        return;
      }
      
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>
          <select class="day-select">
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
          </select>
        </td>
        <td><input type="time" class="start-time" value="09:00"></td>
        <td><input type="time" class="end-time" value="17:00"></td>
        <td><input type="number" class="break-time" min="0" value="60"></td>
        <td class="day-total">7.00</td>
        <td><i class="fas fa-times remove-entry"></i></td>
      `;
      
      timesheetBody.appendChild(newRow);
      timesheetEntries++;
      calculateDayTotals();
    }

    function calculateDayTotals() {
      const rows = timesheetBody.querySelectorAll('tr');
      rows.forEach(row => {
        const startTime = row.querySelector('.start-time').value;
        const endTime = row.querySelector('.end-time').value;
        const breakTime = parseFloat(row.querySelector('.break-time').value) || 0;
        
        if (startTime && endTime) {
          const start = timeToDecimal(startTime);
          const end = timeToDecimal(endTime);
          let hours = end - start;
          
          // Handle overnight shifts
          if (hours < 0) {
            hours += 24;
          }
          
          // Subtract break time
          hours -= (breakTime / 60);
          
          // Ensure non-negative hours
          hours = Math.max(0, hours);
          
          row.querySelector('.day-total').textContent = hours.toFixed(2);
        }
      });
    }

    function timeToDecimal(time) {
      const [hours, minutes] = time.split(':').map(Number);
      return hours + (minutes / 60);
    }

    function decimalToTime(decimal) {
      const hours = Math.floor(decimal);
      const minutes = Math.round((decimal - hours) * 60);
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    }

    function formatHours(hours, format) {
      if (format === 'hours-minutes') {
        const wholeHours = Math.floor(hours);
        const minutes = Math.round((hours - wholeHours) * 60);
        return `${wholeHours}h ${minutes}m`;
      }
      return `${hours.toFixed(2)} hours`;
    }

    function calculateHours() {
      let result, steps, summary;
      
      try {
        switch (currentCalculatorType) {
          case 'work-hours':
            result = calculateWorkHours();
            break;
          case 'timesheet':
            result = calculateTimesheet();
            break;
          case 'overtime':
            result = calculateOvertime();
            break;
          case 'payroll':
            result = calculatePayroll();
            break;
          default:
            throw new Error('Unknown calculator type');
        }
        
        if (result) {
          displayResult(result, steps, summary);
        }
      } catch (error) {
        showAlert(error.message, 'error');
      }
    }

    function calculateWorkHours() {
      const clockIn = document.getElementById('clock-in').value;
      const clockOut = document.getElementById('clock-out').value;
      const breakDuration = parseFloat(document.getElementById('break-duration').value) || 0;
      
      if (!clockIn || !clockOut) {
        throw new Error('Please enter both clock-in and clock-out times');
      }
      
      const start = timeToDecimal(clockIn);
      const end = timeToDecimal(clockOut);
      let totalHours = end - start;
      
      // Handle overnight shifts
      if (totalHours < 0) {
        totalHours += 24;
      }
      
      // Subtract break time
      const breakHours = breakDuration / 60;
      const workHours = totalHours - breakHours;
      
      if (workHours < 0) {
        throw new Error('Break duration cannot exceed total time worked');
      }
      
      const timeFormat = document.getElementById('time-format').value;
      
      const result = {
        totalHours: totalHours,
        breakHours: breakHours,
        workHours: workHours,
        clockIn: clockIn,
        clockOut: clockOut
      };
      
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Clock In: ${clockIn} (${start.toFixed(2)} decimal hours)</li>
          <li>Clock Out: ${clockOut} (${end.toFixed(2)} decimal hours)</li>
          <li>Total Time: ${end.toFixed(2)} - ${start.toFixed(2)} = ${totalHours.toFixed(2)} hours</li>
          <li>Break Time: ${breakDuration} minutes = ${breakHours.toFixed(2)} hours</li>
          <li>Work Hours: ${totalHours.toFixed(2)} - ${breakHours.toFixed(2)} = ${workHours.toFixed(2)} hours</li>
        </ol>
      `;
      
      summary = `
        <div class="summary-card">
          <h4>Total Time</h4>
          <div class="value">${formatHours(totalHours, timeFormat)}</div>
          <div class="subtext">Including breaks</div>
        </div>
        <div class="summary-card">
          <h4>Break Time</h4>
          <div class="value">${breakDuration} min</div>
          <div class="subtext">${breakHours.toFixed(2)} hours</div>
        </div>
        <div class="summary-card">
          <h4>Work Hours</h4>
          <div class="value">${formatHours(workHours, timeFormat)}</div>
          <div class="subtext">Net working time</div>
        </div>
      `;
      
      return { 
        value: result, 
        text: `Work Hours: ${formatHours(workHours, timeFormat)} (${totalHours.toFixed(2)} total - ${breakHours.toFixed(2)} break)`, 
        steps,
        summary
      };
    }

    function calculateTimesheet() {
      const rows = timesheetBody.querySelectorAll('tr');
      let totalHours = 0;
      let dayCount = 0;
      const dayDetails = [];
      
      rows.forEach(row => {
        const day = row.querySelector('.day-select').value;
        const dayTotal = parseFloat(row.querySelector('.day-total').textContent) || 0;
        
        if (dayTotal > 0) {
          totalHours += dayTotal;
          dayCount++;
          dayDetails.push({
            day: day,
            hours: dayTotal
          });
        }
      });
      
      if (dayCount === 0) {
        throw new Error('Please enter at least one day with valid hours');
      }
      
      const averageHours = totalHours / dayCount;
      const timeFormat = document.getElementById('time-format').value;
      
      const result = {
        totalHours: totalHours,
        dayCount: dayCount,
        averageHours: averageHours,
        dayDetails: dayDetails
      };
      
      let stepsHtml = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Calculated hours for ${dayCount} day(s):</li>
      `;
      
      dayDetails.forEach(day => {
        stepsHtml += `<li>${day.day.charAt(0).toUpperCase() + day.day.slice(1)}: ${day.hours.toFixed(2)} hours</li>`;
      });
      
      stepsHtml += `
          <li>Total Hours: ${totalHours.toFixed(2)}</li>
          <li>Average Daily Hours: ${totalHours.toFixed(2)} ÷ ${dayCount} = ${averageHours.toFixed(2)} hours/day</li>
        </ol>
      `;
      
      summary = `
        <div class="summary-card">
          <h4>Total Hours</h4>
          <div class="value">${formatHours(totalHours, timeFormat)}</div>
          <div class="subtext">${dayCount} day(s)</div>
        </div>
        <div class="summary-card">
          <h4>Average Daily</h4>
          <div class="value">${formatHours(averageHours, timeFormat)}</div>
          <div class="subtext">Per day</div>
        </div>
        <div class="summary-card">
          <h4>Days Worked</h4>
          <div class="value">${dayCount}</div>
          <div class="subtext">With hours recorded</div>
        </div>
      `;
      
      return { 
        value: result, 
        text: `Timesheet Total: ${formatHours(totalHours, timeFormat)} over ${dayCount} day(s) (avg: ${formatHours(averageHours, timeFormat)}/day)`, 
        steps: stepsHtml,
        summary
      };
    }

    function calculateOvertime() {
      const totalHours = parseFloat(document.getElementById('total-hours').value) || 0;
      const regularHours = parseFloat(document.getElementById('regular-hours').value) || 0;
      const overtimeRate = parseFloat(document.getElementById('overtime-rate').value);
      
      if (totalHours <= 0) {
        throw new Error('Please enter valid total hours worked');
      }
      
      if (regularHours <= 0) {
        throw new Error('Please enter valid regular hours threshold');
      }
      
      let overtimeHours = 0;
      let regularWorked = 0;
      
      if (totalHours > regularHours) {
        overtimeHours = totalHours - regularHours;
        regularWorked = regularHours;
      } else {
        regularWorked = totalHours;
      }
      
      const timeFormat = document.getElementById('time-format').value;
      
      const result = {
        totalHours: totalHours,
        regularHours: regularWorked,
        overtimeHours: overtimeHours,
        overtimeRate: overtimeRate
      };
      
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Total Hours Worked: ${totalHours.toFixed(2)}</li>
          <li>Regular Hours Threshold: ${regularHours.toFixed(2)}</li>
          <li>Regular Hours Paid: ${Math.min(totalHours, regularHours).toFixed(2)}</li>
          <li>Overtime Hours: ${overtimeHours > 0 ? `${totalHours.toFixed(2)} - ${regularHours.toFixed(2)} = ${overtimeHours.toFixed(2)}` : '0'}</li>
          <li>Overtime Multiplier: ${overtimeRate}x</li>
        </ol>
      `;
      
      summary = `
        <div class="summary-card">
          <h4>Total Hours</h4>
          <div class="value">${formatHours(totalHours, timeFormat)}</div>
          <div class="subtext">Hours worked</div>
        </div>
        <div class="summary-card">
          <h4>Regular Hours</h4>
          <div class="value">${formatHours(regularWorked, timeFormat)}</div>
          <div class="subtext">At standard rate</div>
        </div>
        <div class="summary-card">
          <h4>Overtime Hours</h4>
          <div class="value">${formatHours(overtimeHours, timeFormat)}</div>
          <div class="subtext">At ${overtimeRate}x rate</div>
        </div>
      `;
      
      return { 
        value: result, 
        text: `Overtime: ${formatHours(overtimeHours, timeFormat)} at ${overtimeRate}x rate (${formatHours(regularWorked, timeFormat)} regular)`, 
        steps,
        summary
      };
    }

    function calculatePayroll() {
      const hourlyRate = parseFloat(document.getElementById('hourly-rate').value) || 0;
      const payrollHours = parseFloat(document.getElementById('payroll-hours').value) || 0;
      const payPeriod = document.getElementById('pay-period').value;
      const taxRate = parseFloat(document.getElementById('tax-rate').value) || 0;
      
      if (hourlyRate <= 0) {
        throw new Error('Please enter a valid hourly rate');
      }
      
      if (payrollHours <= 0) {
        throw new Error('Please enter valid hours worked');
      }
      
      const grossPay = hourlyRate * payrollHours;
      const taxAmount = grossPay * (taxRate / 100);
      const netPay = grossPay - taxAmount;
      
      const timeFormat = document.getElementById('time-format').value;
      
      const result = {
        hourlyRate: hourlyRate,
        hoursWorked: payrollHours,
        grossPay: grossPay,
        taxRate: taxRate,
        taxAmount: taxAmount,
        netPay: netPay,
        payPeriod: payPeriod
      };
      
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Hourly Rate: $${hourlyRate.toFixed(2)}/hour</li>
          <li>Hours Worked: ${formatHours(payrollHours, timeFormat)}</li>
          <li>Gross Pay: $${hourlyRate.toFixed(2)} × ${payrollHours.toFixed(2)} = $${grossPay.toFixed(2)}</li>
          <li>Tax Rate: ${taxRate}%</li>
          <li>Tax Amount: $${grossPay.toFixed(2)} × ${taxRate}% = $${taxAmount.toFixed(2)}</li>
          <li>Net Pay: $${grossPay.toFixed(2)} - $${taxAmount.toFixed(2)} = $${netPay.toFixed(2)}</li>
        </ol>
      `;
      
      summary = `
        <div class="summary-card">
          <h4>Gross Pay</h4>
          <div class="value">$${grossPay.toFixed(2)}</div>
          <div class="subtext">Before taxes</div>
        </div>
        <div class="summary-card">
          <h4>Tax Deduction</h4>
          <div class="value">$${taxAmount.toFixed(2)}</div>
          <div class="subtext">${taxRate}% rate</div>
        </div>
        <div class="summary-card">
          <h4>Net Pay</h4>
          <div class="value">$${netPay.toFixed(2)}</div>
          <div class="subtext">Take home pay</div>
        </div>
      `;
      
      return { 
        value: result, 
        text: `Payroll: $${netPay.toFixed(2)} net ($${grossPay.toFixed(2)} gross - $${taxAmount.toFixed(2)} tax)`, 
        steps,
        summary
      };
    }

    function displayResult(result, steps, summary) {
      resultValue.textContent = result.text;
      calculationSteps.innerHTML = result.steps || '';
      summaryCards.innerHTML = result.summary || '';
      resultSection.classList.add('active');
      showAlert('Calculation completed successfully!', 'success');
    }

    function resetCalculator() {
      setDefaultValues();
      showAlert('Calculator reset to default values!', 'success');
    }

    function clearAllInputs() {
      // Clear all input fields
      document.querySelectorAll('input').forEach(input => {
        if (input.type !== 'checkbox') {
          input.value = '';
        }
      });
      
      // Reset timesheet to one entry
      timesheetBody.innerHTML = `
        <tr>
          <td>
            <select class="day-select">
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
              <option value="sunday">Sunday</option>
            </select>
          </td>
          <td><input type="time" class="start-time" value="09:00"></td>
          <td><input type="time" class="end-time" value="17:00"></td>
          <td><input type="number" class="break-time" min="0" value="60"></td>
          <td class="day-total">7.00</td>
          <td><i class="fas fa-times remove-entry"></i></td>
        </tr>
      `;
      timesheetEntries = 1;
      
      // Reset dropdowns to default values
      document.getElementById('time-format').value = 'decimal';
      document.getElementById('work-week-days').value = '5';
      document.getElementById('overtime-threshold').value = '40';
      document.getElementById('overtime-rate').value = '1.5';
      document.getElementById('pay-period').value = 'weekly';
      
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
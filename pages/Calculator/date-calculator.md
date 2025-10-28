---
layout: default
title: "Date Calculator – Add/Subtract Days & Find Date Online"
permalink: /date-calculator-calculate-dates-addsubtract-days-online/
---

<!-- Basic SEO Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Date Calculator – Add/Subtract Days & Find Date Online</title>

<meta name="description" content="Use our free date calculator to add or subtract days, calculate date differences, and find weekdays instantly. Fast, accurate, and easy date calculation online.">


<meta name="keywords"
  content="date calculator, calculate date, add days to date, subtract days from date, date difference calculator, day calculator, week calculator, month calculator, online date tool">

<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Canonical URL -->
<link rel="canonical" href="https://toolesy.com/date-calculator-calculate-dates-addsubtract-days-online" />

<!-- Open Graph Tags (Facebook / LinkedIn) -->
<meta property="og:title" content="Date Calculator - Free Online Tool to Add, Subtract & Compare Dates">
<meta property="og:description" content="Use this free online date calculator to add or subtract days, calculate date differences, and find weekdays instantly. Simple and accurate tool.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/date-calculator-calculate-dates-addsubtract-days-online">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Date Calculator | Free Online Tool to Add, Subtract & Compare Dates">
<meta name="twitter:description" content="Free online date calculator to add or subtract days, calculate date differences, and find day of the week. Fast and easy to use.">

<!-- JSON-LD Web Application Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Date Calculator",
  "url": "https://toolesy.com/date-calculator-calculate-dates-addsubtract-days-online",
  "description": "Free online date calculator tool to calculate date differences, add or subtract days, and find weekdays. Fast, accurate, and easy to use.",
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
      "name": "How accurate is the date calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our date calculator is highly accurate and accounts for leap years, different month lengths, and time zone considerations. It uses JavaScript's built-in Date object for precise calculations."
      }
    },
    {
      "@type": "Question",
      "name": "Can I calculate business days only (excluding weekends)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can use the option to exclude weekends when calculating date differences or adding/subtracting days from dates."
      }
    },
    {
      "@type": "Question",
      "name": "How far back or forward in time can I calculate dates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The calculator can handle dates from year 1000 to year 9999, covering virtually all practical needs."
      }
    },
    {
      "@type": "Question",
      "name": "Does the calculator account for leap years?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the calculator automatically accounts for leap years in all date calculations, ensuring accurate results."
      }
    }
  ]
}
</script>


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Date Calculator Styles */
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

  .date-inputs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
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

  /* Date calculator specific styles */
  .date-options {
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

  /* Calendar icon for date inputs */
  .date-input-wrapper {
    position: relative;
  }

  .date-input-wrapper i {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--primary);
    pointer-events: none;
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

    .date-inputs-grid {
      grid-template-columns: 1fr;
    }

    .date-options {
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
  <h1>Free Online Date Calculator</h1>
  <p class="welcome-message">Calculate date differences, add or subtract days from dates, find day of the week, and more with our comprehensive date calculator tool.</p>

  <div class="calculator-section">
    <h2>Date Calculator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Today's Date: </span>
        <span id="currentDate">Loading...</span>
      </div>
      <div class="counter-item">
        <span>Current Time: </span>
        <span id="currentTime">Loading...</span>
      </div>
      <div class="counter-item">
        <span>Day of Week: </span>
        <span id="currentDay">Loading...</span>
      </div>
      <div class="counter-item">
        <span>Week Number: </span>
        <span id="currentWeek">Loading...</span>
      </div>
    </div>

    <div class="calculator-types">
      <div class="calculator-type active" data-type="date-difference">
        <h3><i class="fas fa-calendar-alt"></i> Date Difference</h3>
        <p>Calculate the number of days between two dates</p>
      </div>
      <div class="calculator-type" data-type="add-subtract">
        <h3><i class="fas fa-plus-minus"></i> Add/Subtract Days</h3>
        <p>Add or subtract days from a specific date</p>
      </div>
      <div class="calculator-type" data-type="day-of-week">
        <h3><i class="fas fa-calendar-day"></i> Day of Week</h3>
        <p>Find what day of the week a date falls on</p>
      </div>
      <div class="calculator-type" data-type="age-calculator">
        <h3><i class="fas fa-birthday-cake"></i> Age Calculator</h3>
        <p>Calculate age in years, months, and days</p>
      </div>
    </div>

    <div class="input-section">
      <!-- Date Difference Calculator -->
      <div id="date-difference-inputs" class="calculator-inputs">
        <div class="date-inputs-grid">
          <div class="input-group">
            <label for="start-date">Start Date</label>
            <div class="date-input-wrapper">
              <input type="date" id="start-date">
              <i class="fas fa-calendar"></i>
            </div>
          </div>
          <div class="input-group">
            <label for="end-date">End Date</label>
            <div class="date-input-wrapper">
              <input type="date" id="end-date">
              <i class="fas fa-calendar"></i>
            </div>
          </div>
        </div>
        <div class="formula-display">
          Formula: Difference = End Date - Start Date (in days)
        </div>
      </div>

      <!-- Add/Subtract Days Calculator -->
      <div id="add-subtract-inputs" class="calculator-inputs" style="display: none;">
        <div class="date-inputs-grid">
          <div class="input-group">
            <label for="base-date">Base Date</label>
            <div class="date-input-wrapper">
              <input type="date" id="base-date">
              <i class="fas fa-calendar"></i>
            </div>
          </div>
          <div class="input-group">
            <label for="days-to-add">Days to Add/Subtract</label>
            <input type="number" id="days-to-add" placeholder="Enter positive or negative number">
          </div>
        </div>
        <div class="formula-display">
          Formula: New Date = Base Date ± Number of Days
        </div>
      </div>

      <!-- Day of Week Calculator -->
      <div id="day-of-week-inputs" class="calculator-inputs" style="display: none;">
        <div class="input-group">
          <label for="target-date">Enter Date</label>
          <div class="date-input-wrapper">
            <input type="date" id="target-date">
            <i class="fas fa-calendar"></i>
          </div>
        </div>
        <div class="formula-display">
          Formula: Day of Week = Date.getDay() (0=Sunday, 1=Monday, etc.)
        </div>
      </div>

      <!-- Age Calculator -->
      <div id="age-calculator-inputs" class="calculator-inputs" style="display: none;">
        <div class="date-inputs-grid">
          <div class="input-group">
            <label for="birth-date">Birth Date</label>
            <div class="date-input-wrapper">
              <input type="date" id="birth-date">
              <i class="fas fa-calendar"></i>
            </div>
          </div>
          <div class="input-group">
            <label for="age-at-date">Age at Date (Optional)</label>
            <div class="date-input-wrapper">
              <input type="date" id="age-at-date">
              <i class="fas fa-calendar"></i>
            </div>
          </div>
        </div>
        <div class="formula-display">
          Formula: Age = Current Date - Birth Date (in years, months, days)
        </div>
      </div>
    </div>

    <div class="date-options">
      <div class="option-group">
        <label class="option-label">Result Format</label>
        <select id="result-format" class="option-select">
          <option value="detailed">Detailed Breakdown</option>
          <option value="simple">Simple Result</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Include Weekends</label>
        <div class="option-checkbox">
          <input type="checkbox" id="include-weekends" checked>
          <label for="include-weekends">Count all days (including weekends)</label>
        </div>
      </div>
      
      <div class="option-group">
        <label class="option-label">Time Zone</label>
        <select id="timezone" class="option-select">
          <option value="local">Local Time</option>
          <option value="utc">UTC</option>
        </select>
      </div>
    </div>

    <div class="button-section">
      <button class="calc-button" id="calculate-button">Calculate</button>
      <button class="calc-button success" id="today-button">Use Today</button>
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
        <div class="example-question">How many days between January 1, 2023 and December 31, 2023?</div>
        <div class="example-answer">364 days (since 2023 is not a leap year)</div>
      </div>

      <div class="example-item">
        <div class="example-question">What date is 45 days from today?</div>
        <div class="example-answer">The date 45 days from today will be calculated based on current date</div>
      </div>

      <div class="example-item">
        <div class="example-question">What day of the week was July 4, 1776?</div>
        <div class="example-answer">Thursday (US Declaration of Independence)</div>
      </div>

      <div class="example-item">
        <div class="example-question">How old is someone born on January 15, 1990?</div>
        <div class="example-answer">Age calculation based on current date</div>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Date Calculator</h2>

    <p>Our comprehensive <strong>Date Calculator</strong> is an essential tool for anyone who needs to work with dates. Whether you're planning events, calculating deadlines, determining ages, or just curious about date relationships, this calculator provides accurate results instantly. Calculate date differences, add or subtract days from any date, find what day of the week a date falls on, and calculate ages with precision.</p>

    <h3>How to Use This Date Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Calculation Type:</strong> Choose from four different date calculations: Date Difference, Add/Subtract Days, Day of Week, or Age Calculator.</li>
      <li><strong>Enter Dates:</strong> Input the required dates using the date picker or manual entry fields.</li>
      <li><strong>Customize Options:</strong> Adjust calculation options like result format and time zone preferences.</li>
      <li><strong>Calculate:</strong> Click the "Calculate" button to get your result instantly with detailed breakdown.</li>
      <li><strong>Copy or Clear:</strong> Use the "Copy Result" button to copy the answer to your clipboard or "Clear" to start over.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're planning a project that starts on March 15, 2024 and needs to be completed within 90 working days. Using our Date Calculator, you can easily determine the completion date by selecting the "Add/Subtract Days" calculator, entering March 15, 2024 as the base date, and adding 90 days. The calculator instantly shows you that the project completion date would be June 13, 2024, helping you set realistic deadlines and manage your timeline effectively.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Project Managers:</strong> Calculate project timelines, deadlines, and milestones</li>
      <li><strong>HR Professionals:</strong> Determine employee ages, service periods, and benefits eligibility</li>
      <li><strong>Event Planners:</strong> Plan events by calculating dates and counting down to important occasions</li>
      <li><strong>Students & Teachers:</strong> Calculate dates for assignments, exams, and academic calendars</li>
      <li><strong>Financial Professionals:</strong> Determine interest periods, maturity dates, and payment schedules</li>
      <li><strong>Anyone:</strong> Solve everyday date-related problems without manual calculations</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: How accurate is the date calculator?</strong><br>
      A: Our date calculator is highly accurate and accounts for leap years, different month lengths, and time zone considerations. It uses JavaScript's built-in Date object for precise calculations.</p>

    <p><strong>Q: Can I calculate business days only (excluding weekends)?</strong><br>
      A: Yes, you can use the option to exclude weekends when calculating date differences or adding/subtracting days from dates.</p>

    <p><strong>Q: How far back or forward in time can I calculate dates?</strong><br>
      A: The calculator can handle dates from year 1000 to year 9999, covering virtually all practical needs.</p>

    <p><strong>Q: Does the calculator account for leap years?</strong><br>
      A: Yes, the calculator automatically accounts for leap years in all date calculations, ensuring accurate results.</p>

    <h3>Why Choose Our Date Calculator?</h3>
    <p>Our <strong>online date calculator</strong> stands out for its versatility, accuracy, and user-friendly interface. Unlike basic calculators that provide simple results, ours shows detailed breakdowns and step-by-step explanations of how each calculation was performed. The tool handles multiple date calculation scenarios and provides options to customize results based on your specific needs. All calculations happen locally in your browser, ensuring your data privacy and enabling offline use once the page is loaded.</p>

    <h3>Common Applications of Date Calculations</h3>
    <p>Date calculations have numerous practical applications in daily life and professional contexts:</p>
    <ul>
      <li><strong>Project Planning:</strong> Calculate project durations and deadlines</li>
      <li><strong>Financial Planning:</strong> Determine loan periods, investment maturity dates, and payment schedules</li>
      <li><strong>Personal Planning:</strong> Count down to birthdays, anniversaries, vacations, and special events</li>
      <li><strong>Legal & Compliance:</strong> Calculate statutory deadlines, contract periods, and compliance dates</li>
      <li><strong>Academic Use:</strong> Plan semesters, calculate assignment due dates, and schedule exams</li>
      <li><strong>Historical Research:</strong> Determine time periods between historical events</li>
    </ul>

    <h3>Date Calculation Formulas Used</h3>
    <p>Our calculator uses these standard mathematical and programming approaches:</p>
    <ul>
      <li><strong>Date Difference:</strong> Convert both dates to timestamps, calculate difference in milliseconds, then convert to days</li>
      <li><strong>Add/Subtract Days:</strong> Create new Date object with adjusted timestamp based on number of days</li>
      <li><strong>Day of Week:</strong> Use Date.getDay() method returning 0 (Sunday) through 6 (Saturday)</li>
      <li><strong>Age Calculation:</strong> Calculate difference in years, then adjust for months and days not yet completed</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const calculatorTypes = document.querySelectorAll('.calculator-type');
    const calculatorInputs = document.querySelectorAll('.calculator-inputs');
    const calculateButton = document.getElementById('calculate-button');
    const todayButton = document.getElementById('today-button');
    const clearButton = document.getElementById('clear-button');
    const copyButton = document.getElementById('copy-button');
    const resultSection = document.getElementById('result-section');
    const resultValue = document.getElementById('result-value');
    const calculationSteps = document.getElementById('calculation-steps');
    const alertContainer = document.getElementById('alertContainer');
    
    // Current date elements
    const currentDateEl = document.getElementById('currentDate');
    const currentTimeEl = document.getElementById('currentTime');
    const currentDayEl = document.getElementById('currentDay');
    const currentWeekEl = document.getElementById('currentWeek');

    let currentCalculatorType = 'date-difference';

    // Initialize current date display
    updateCurrentDateTime();
    setInterval(updateCurrentDateTime, 1000);

    // Set default dates to today
    setDefaultDates();

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
      calculateDate();
    });

    // Today button event listener
    todayButton.addEventListener('click', function () {
      setDefaultDates();
      showAlert('Dates set to today!', 'success');
    });

    // Clear button event listener
    clearButton.addEventListener('click', function () {
      clearInputs();
    });

    // Copy button event listener
    copyButton.addEventListener('click', function () {
      copyResult();
    });

    function updateCurrentDateTime() {
      const now = new Date();
      
      // Format date as YYYY-MM-DD
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      currentDateEl.textContent = `${year}-${month}-${day}`;
      
      // Format time as HH:MM:SS
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      currentTimeEl.textContent = `${hours}:${minutes}:${seconds}`;
      
      // Day of week
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      currentDayEl.textContent = days[now.getDay()];
      
      // Week number
      currentWeekEl.textContent = getWeekNumber(now);
    }

    function getWeekNumber(date) {
      const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
      const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
      return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    }

    function setDefaultDates() {
      const today = new Date();
      const todayFormatted = formatDateForInput(today);
      
      // Set today as default for all date inputs
      document.getElementById('start-date').value = todayFormatted;
      document.getElementById('end-date').value = todayFormatted;
      document.getElementById('base-date').value = todayFormatted;
      document.getElementById('target-date').value = todayFormatted;
      document.getElementById('birth-date').value = todayFormatted;
      document.getElementById('age-at-date').value = todayFormatted;
      
      // Set days to add/subtract to 0
      document.getElementById('days-to-add').value = '0';
    }

    function formatDateForInput(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    function calculateDate() {
      let result, steps;
      
      try {
        switch (currentCalculatorType) {
          case 'date-difference':
            result = calculateDateDifference();
            break;
          case 'add-subtract':
            result = calculateAddSubtract();
            break;
          case 'day-of-week':
            result = calculateDayOfWeek();
            break;
          case 'age-calculator':
            result = calculateAge();
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

    function calculateDateDifference() {
      const startDateStr = document.getElementById('start-date').value;
      const endDateStr = document.getElementById('end-date').value;
      
      if (!startDateStr || !endDateStr) {
        throw new Error('Please select both start and end dates');
      }
      
      const startDate = new Date(startDateStr);
      const endDate = new Date(endDateStr);
      
      if (startDate > endDate) {
        throw new Error('Start date must be before end date');
      }
      
      // Calculate difference in milliseconds
      const diffTime = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      const includeWeekends = document.getElementById('include-weekends').checked;
      let businessDays = diffDays;
      
      if (!includeWeekends) {
        // Calculate business days (excluding weekends)
        businessDays = calculateBusinessDays(startDate, endDate);
      }
      
      const result = {
        totalDays: diffDays,
        businessDays: businessDays,
        startDate: startDate,
        endDate: endDate
      };
      
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Start Date: ${formatDateDisplay(startDate)}</li>
          <li>End Date: ${formatDateDisplay(endDate)}</li>
          <li>Time Difference: ${diffTime} milliseconds</li>
          <li>Convert to Days: ${diffTime} ÷ (1000 × 60 × 60 × 24) = ${diffDays} days</li>
          ${!includeWeekends ? `<li>Business Days (excluding weekends): ${businessDays} days</li>` : ''}
        </ol>
      `;
      
      return { 
        value: result, 
        text: `${diffDays} total days between ${formatDateDisplay(startDate)} and ${formatDateDisplay(endDate)}${!includeWeekends ? ` (${businessDays} business days)` : ''}`, 
        steps 
      };
    }

    function calculateAddSubtract() {
      const baseDateStr = document.getElementById('base-date').value;
      const daysToAddStr = document.getElementById('days-to-add').value;
      
      if (!baseDateStr || !daysToAddStr) {
        throw new Error('Please select a base date and enter number of days');
      }
      
      const baseDate = new Date(baseDateStr);
      const daysToAdd = parseInt(daysToAddStr);
      
      if (isNaN(daysToAdd)) {
        throw new Error('Please enter a valid number for days to add/subtract');
      }
      
      // Calculate new date
      const newDate = new Date(baseDate);
      newDate.setDate(baseDate.getDate() + daysToAdd);
      
      const operation = daysToAdd >= 0 ? 'added to' : 'subtracted from';
      const absDays = Math.abs(daysToAdd);
      
      const result = {
        baseDate: baseDate,
        newDate: newDate,
        daysChanged: daysToAdd
      };
      
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Base Date: ${formatDateDisplay(baseDate)}</li>
          <li>Days to ${daysToAdd >= 0 ? 'Add' : 'Subtract'}: ${absDays}</li>
          <li>New Date: ${formatDateDisplay(newDate)}</li>
          <li>Day of Week: ${getDayName(newDate)}</li>
        </ol>
      `;
      
      return { 
        value: result, 
        text: `${absDays} days ${operation} ${formatDateDisplay(baseDate)} is ${formatDateDisplay(newDate)} (${getDayName(newDate)})`, 
        steps 
      };
    }

    function calculateDayOfWeek() {
      const targetDateStr = document.getElementById('target-date').value;
      
      if (!targetDateStr) {
        throw new Error('Please select a date');
      }
      
      const targetDate = new Date(targetDateStr);
      const dayOfWeek = targetDate.getDay();
      const dayName = getDayName(targetDate);
      
      const result = {
        date: targetDate,
        dayOfWeek: dayOfWeek,
        dayName: dayName
      };
      
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Selected Date: ${formatDateDisplay(targetDate)}</li>
          <li>JavaScript getDay() returns: ${dayOfWeek} (0=Sunday, 1=Monday, etc.)</li>
          <li>Day Name: ${dayName}</li>
        </ol>
      `;
      
      return { 
        value: result, 
        text: `${formatDateDisplay(targetDate)} falls on a ${dayName}`, 
        steps 
      };
    }

    function calculateAge() {
      const birthDateStr = document.getElementById('birth-date').value;
      const ageAtDateStr = document.getElementById('age-at-date').value || formatDateForInput(new Date());
      
      if (!birthDateStr) {
        throw new Error('Please select a birth date');
      }
      
      const birthDate = new Date(birthDateStr);
      const ageAtDate = new Date(ageAtDateStr);
      
      if (birthDate > ageAtDate) {
        throw new Error('Birth date cannot be after the age calculation date');
      }
      
      let years = ageAtDate.getFullYear() - birthDate.getFullYear();
      let months = ageAtDate.getMonth() - birthDate.getMonth();
      let days = ageAtDate.getDate() - birthDate.getDate();
      
      // Adjust for negative months or days
      if (days < 0) {
        months--;
        // Get days in previous month
        const prevMonth = new Date(ageAtDate.getFullYear(), ageAtDate.getMonth(), 0);
        days += prevMonth.getDate();
      }
      
      if (months < 0) {
        years--;
        months += 12;
      }
      
      const totalDays = Math.floor((ageAtDate - birthDate) / (1000 * 60 * 60 * 24));
      
      const result = {
        years: years,
        months: months,
        days: days,
        totalDays: totalDays,
        birthDate: birthDate,
        ageAtDate: ageAtDate
      };
      
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Birth Date: ${formatDateDisplay(birthDate)}</li>
          <li>Age at Date: ${formatDateDisplay(ageAtDate)}</li>
          <li>Year Difference: ${ageAtDate.getFullYear()} - ${birthDate.getFullYear()} = ${years} years</li>
          <li>Month Adjustment: ${months} months</li>
          <li>Day Adjustment: ${days} days</li>
          <li>Total Days: ${totalDays} days</li>
        </ol>
      `;
      
      return { 
        value: result, 
        text: `Age: ${years} years, ${months} months, ${days} days (${totalDays} total days)`, 
        steps 
      };
    }

    function calculateBusinessDays(startDate, endDate) {
      let businessDays = 0;
      const currentDate = new Date(startDate);
      
      while (currentDate <= endDate) {
        const dayOfWeek = currentDate.getDay();
        // Skip weekends (0 = Sunday, 6 = Saturday)
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
          businessDays++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
      
      return businessDays;
    }

    function formatDateDisplay(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }

    function getDayName(date) {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return days[date.getDay()];
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
      document.getElementById('include-weekends').checked = true;
      
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
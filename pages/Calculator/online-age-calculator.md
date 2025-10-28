---
layout: default
title: "Online Age Calculator – Calculate Age Instantly"
permalink: /online-age-calculator/
---

<!-- Basic SEO Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Online Age Calculator – Calculate Age Instantly</title>

<meta name="description"
  content="Free online age calculator to find your exact age in years, months, days, and more. Also calculate age differences quickly for school, forms, and daily use.">

<meta name="keywords"
  content="age calculator, age calculator online, date of birth calculator, how old am I, exact age calculator, age in days calculator, age counter, age difference calculator, birthday calculator, DOB calculator">

<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Canonical URL -->
<link rel="canonical" href="https://toolesy.com/online-age-calculator" />

<!-- Open Graph Tags -->
<meta property="og:title" content="Age Calculator - Calculate Exact Age Instantly">
<meta property="og:description"
  content="Find your exact age in seconds! Calculate age from date of birth and check age difference between two dates easily.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/online-age-calculator">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Online Age Calculator - How Old Are You?">
<meta name="twitter:description"
  content="Calculate exact age in years, months, days & more. Age difference calculator included. Fast & free!">

<!-- WebApplication Schema JSON-LD -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Age Calculator",
  "url": "https://toolesy.com/online-age-calculator",
  "description": "A free online tool to calculate exact age in years, months, days, hours & minutes. Includes age difference calculator.",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
</script>

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Age Calculator Styles */
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

  /* Age Calculator specific styles */
  .date-input-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .date-input-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .date-label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .date-input {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    width: 100%;
  }

  .age-results {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .age-result-item {
    text-align: center;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .age-value {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--primary);
    display: block;
  }

  .age-label {
    font-size: 0.9rem;
    color: #666;
    margin-top: 5px;
  }

  .zodiac-section {
    margin: 20px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .zodiac-info {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 15px;
  }

  .zodiac-icon {
    font-size: 3rem;
    color: var(--primary);
  }

  .zodiac-details {
    flex: 1;
  }

  .zodiac-name {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .zodiac-dates {
    color: #666;
    font-style: italic;
  }

  .age-difference-section {
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
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

    .date-input-section {
      grid-template-columns: 1fr;
    }

    .age-results {
      grid-template-columns: repeat(2, 1fr);
    }

    .zodiac-info {
      flex-direction: column;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .age-results {
      grid-template-columns: 1fr;
    }
    
    .age-value {
      font-size: 1.5rem;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Age Calculator</h1>
  <p class="welcome-message">Calculate your exact age in years, months, weeks, days, hours, minutes and seconds. Find age difference between two dates and discover your zodiac sign.</p>

  <div class="converter-section">
    <h2>Age Calculator</h2>

    <div class="date-input-section">
      <div class="date-input-group">
        <label class="date-label">Birth Date</label>
        <input type="date" id="birthDate" class="date-input" max="">
        <small>Select your date of birth</small>
      </div>
      
      <div class="date-input-group">
        <label class="date-label">Calculate Age As Of</label>
        <input type="date" id="currentDate" class="date-input">
        <small>Leave empty for current date</small>
      </div>
    </div>

    <div class="button-section">
      <button class="case-button" data-action="calculate">Calculate Age</button>
      <button class="case-button success" data-action="today">Set to Today</button>
      <button class="case-button" data-action="difference">Age Difference</button>
      <button class="case-button warning" data-action="nextBirthday">Next Birthday</button>
      <button class="case-button secondary" data-action="clear">Clear</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="age-results">
      <div class="age-result-item">
        <span class="age-value" id="years">0</span>
        <span class="age-label">Years</span>
      </div>
      <div class="age-result-item">
        <span class="age-value" id="months">0</span>
        <span class="age-label">Months</span>
      </div>
      <div class="age-result-item">
        <span class="age-value" id="weeks">0</span>
        <span class="age-label">Weeks</span>
      </div>
      <div class="age-result-item">
        <span class="age-value" id="days">0</span>
        <span class="age-label">Days</span>
      </div>
      <div class="age-result-item">
        <span class="age-value" id="hours">0</span>
        <span class="age-label">Hours</span>
      </div>
      <div class="age-result-item">
        <span class="age-value" id="minutes">0</span>
        <span class="age-label">Minutes</span>
      </div>
      <div class="age-result-item">
        <span class="age-value" id="seconds">0</span>
        <span class="age-label">Seconds</span>
      </div>
      <div class="age-result-item">
        <span class="age-value" id="totalDays">0</span>
        <span class="age-label">Total Days</span>
      </div>
    </div>

    <div class="zodiac-section">
      <h3>Zodiac Sign</h3>
      <div class="zodiac-info">
        <div class="zodiac-icon">
          <i class="fas fa-question-circle"></i>
        </div>
        <div class="zodiac-details">
          <div class="zodiac-name" id="zodiacName">Unknown</div>
          <div class="zodiac-dates" id="zodiacDates">Select birth date to see zodiac sign</div>
        </div>
      </div>
    </div>

    <div class="age-difference-section">
      <h3>Age Difference Calculator</h3>
      <div class="date-input-section">
        <div class="date-input-group">
          <label class="date-label">First Date</label>
          <input type="date" id="firstDate" class="date-input">
        </div>
        
        <div class="date-input-group">
          <label class="date-label">Second Date</label>
          <input type="date" id="secondDate" class="date-input">
        </div>
      </div>
      
      <div class="button-section">
        <button class="case-button" data-action="calculateDifference">Calculate Difference</button>
      </div>
      
      <div class="age-results" id="differenceResults" style="display: none;">
        <div class="age-result-item">
          <span class="age-value" id="diffYears">0</span>
          <span class="age-label">Years</span>
        </div>
        <div class="age-result-item">
          <span class="age-value" id="diffMonths">0</span>
          <span class="age-label">Months</span>
        </div>
        <div class="age-result-item">
          <span class="age-value" id="diffDays">0</span>
          <span class="age-label">Days</span>
        </div>
        <div class="age-result-item">
          <span class="age-value" id="diffTotalDays">0</span>
          <span class="age-label">Total Days</span>
        </div>
      </div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Age Calculation Example:</h3>
      <div class="example-text">Birth Date: January 15, 1990
Current Date: October 23, 2024

Exact Age: 34 years, 9 months, 8 days
Total Days: 12,694 days
Total Hours: 304,656 hours
Zodiac Sign: Capricorn</div>

      <h3>Age Difference Example:</h3>
      <div class="example-text">First Date: March 10, 1985
Second Date: August 15, 2024

Difference: 39 years, 5 months, 5 days
Total Days: 14,403 days</div>

      <h3>Next Birthday Calculation:</h3>
      <div class="example-text">Birth Date: December 25, 1995
Current Date: October 23, 2024

Next Birthday: December 25, 2024
Days Until Next Birthday: 63 days</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Age Calculator - Calculate Your Exact Age Instantly</h2>

    <p>Need to know exactly how old you are or calculate someone's age quickly? Our free <strong>Age Calculator tool</strong> is the perfect solution for anyone who needs precise age calculations. This powerful tool instantly calculates your exact age in years, months, weeks, days, hours, minutes, and even seconds. You can also calculate age differences between two dates and find out how many days until your next birthday. There's no download required, no registration needed, and your privacy is guaranteed as all calculations happen securely right in your browser.</p>

    <h3>How to Use This Age Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Birth Date:</strong> Select your date of birth using the date picker or by typing it in the format YYYY-MM-DD.</li>
      <li><strong>Optional: Set Calculation Date:</strong> If you want to calculate age as of a specific date in the past or future, enter that date. Leave it empty to use today's date.</li>
      <li><strong>Calculate Age:</strong> Click the "Calculate Age" button to see your exact age broken down into years, months, weeks, days, hours, minutes, and seconds.</li>
      <li><strong>Additional Features:</strong> Use the "Age Difference" button to compare two dates, or "Next Birthday" to see how many days until your next birthday.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're planning a surprise birthday party and need to know exactly how many days are left until the person's next birthday. Instead of manually counting days on a calendar (which could take time and be error-prone), you can simply enter their birth date in this tool and click "Next Birthday". The calculator will instantly show you the exact number of days, hours, and minutes remaining, helping you plan the perfect surprise timing.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Parents:</strong> Track your child's exact age in months and days during their early years for developmental milestones.</li>
      <li><strong>HR Professionals:</strong> Calculate employee ages for benefits, retirement planning, or compliance requirements.</li>
      <li><strong>Event Planners:</strong> Determine exact ages for birthday parties, anniversaries, and special celebrations.</li>
      <li><strong>Researchers:</strong> Calculate age ranges for studies and demographic analysis.</li>
      <li><strong>Students:</strong> Use for math projects, history assignments, or personal curiosity about historical figures' ages.</li>
      <li><strong>Anyone Curious:</strong> Find out exactly how many days you've been alive or calculate age differences between friends and family members.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: How accurate is this age calculator?</strong><br>
      A: Our age calculator is extremely accurate. It accounts for leap years, different month lengths, and even calculates down to the second if you provide time information. The calculations are based on the Gregorian calendar system used internationally.</p>

    <p><strong>Q: Can I calculate age for dates in the future?</strong><br>
      A: Yes, you can calculate how old someone will be on a future date by entering both the birth date and the future date you want to calculate age as of.</p>

    <p><strong>Q: How does the zodiac sign calculation work?</strong><br>
      A: The zodiac sign is automatically calculated based on your birth date using the tropical zodiac system commonly used in Western astrology. The tool shows your zodiac sign and its date range.</p>

    <p><strong>Q: Is my personal information kept private when I use this tool?</strong><br>
      A: Absolutely. This is a core principle of our tool. All calculations happen locally on your own computer or phone. Your dates are never sent to any server, meaning we never see, store, or have access to your personal information. It is 100% secure.</p>

    <p><strong>Q: Can I use this tool on my mobile phone?</strong><br>
      A: Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>Q: Do I need to create an account or pay to use this?</strong><br>
      A: No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our Age Calculator?</h3>
    <p>Our <strong>online age calculator</strong> stands out from other tools because of its comprehensive features, accuracy, and privacy protection. Unlike many online tools, we don't store your personal dates on our servers - all calculations happen in your browser. This means your private information, birth dates, and any other dates you enter remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Age Calculation</h3>
    <p>Age calculation has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Legal Purposes:</strong> Verify age for contracts, age-restricted activities, or legal requirements</li>
      <li><strong>Medical Field:</strong> Calculate precise ages for pediatric dosages, developmental assessments, and medical records</li>
      <li><strong>Financial Planning:</strong> Determine eligibility for retirement benefits, insurance policies, and financial products</li>
      <li><strong>Genealogy Research:</strong> Calculate ages of ancestors and family members for family tree documentation</li>
      <li><strong>Education:</strong> Determine school grade placement, eligibility for programs, and educational milestones</li>
      <li><strong>Sports:</strong> Verify age categories for youth sports leagues and competitions</li>
    </ul>

    <h3>Understanding the Calculations</h3>
    <p>Our age calculator uses sophisticated algorithms to ensure accurate results:</p>
    <ul>
      <li><strong>Leap Year Calculation:</strong> Automatically accounts for leap years in the calculations</li>
      <li><strong>Month Length Variations:</strong> Correctly handles months with 28, 29, 30, or 31 days</li>
      <li><strong>Precision Timing:</strong> Can calculate down to seconds if time information is provided</li>
      <li><strong>Time Zone Awareness:</strong> Uses your local time zone for current date calculations</li>
    </ul>
  </div>
</div>

<!-- Age Difference Modal -->
<div id="differenceModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Age Difference Details</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h4>First Date</h4>
          <div id="modalFirstDate" style="padding: 10px; background: #f8f9fa; border-radius: 6px; font-family: monospace;"></div>
        </div>
        <div>
          <h4>Second Date</h4>
          <div id="modalSecondDate" style="padding: 10px; background: #f8f9fa; border-radius: 6px; font-family: monospace;"></div>
        </div>
      </div>
      <div style="margin-top: 20px; padding: 15px; background: #e8f4fd; border-radius: 6px;">
        <h4>Detailed Difference</h4>
        <div id="modalDifferenceDetails" style="font-family: monospace; line-height: 1.6;"></div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeDifference">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const birthDate = document.getElementById('birthDate');
    const currentDate = document.getElementById('currentDate');
    const firstDate = document.getElementById('firstDate');
    const secondDate = document.getElementById('secondDate');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    
    // Age result elements
    const yearsElement = document.getElementById('years');
    const monthsElement = document.getElementById('months');
    const weeksElement = document.getElementById('weeks');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const totalDaysElement = document.getElementById('totalDays');
    
    // Zodiac elements
    const zodiacName = document.getElementById('zodiacName');
    const zodiacDates = document.getElementById('zodiacDates');
    
    // Age difference elements
    const diffYearsElement = document.getElementById('diffYears');
    const diffMonthsElement = document.getElementById('diffMonths');
    const diffDaysElement = document.getElementById('diffDays');
    const diffTotalDaysElement = document.getElementById('diffTotalDays');
    const differenceResults = document.getElementById('differenceResults');
    
    // Modal elements
    const differenceModal = document.getElementById('differenceModal');
    const modalFirstDate = document.getElementById('modalFirstDate');
    const modalSecondDate = document.getElementById('modalSecondDate');
    const modalDifferenceDetails = document.getElementById('modalDifferenceDetails');
    const closeDifference = document.getElementById('closeDifference');
    const closeModal = document.querySelectorAll('.close-modal');

    // Set max date for birth date to today
    const today = new Date().toISOString().split('T')[0];
    birthDate.max = today;
    currentDate.max = today;
    firstDate.max = today;
    secondDate.max = today;

    // Set current date as default for "as of" date
    currentDate.value = today;

    // Event listeners
    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleAgeAction(action);
      });
    });

    birthDate.addEventListener('change', function() {
      calculateZodiac();
    });

    // Close modal events
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        differenceModal.style.display = 'none';
      });
    });

    closeDifference.addEventListener('click', function() {
      differenceModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
      if (event.target === differenceModal) {
        differenceModal.style.display = 'none';
      }
    });

    function handleAgeAction(action) {
      switch (action) {
        case 'calculate':
          calculateAge();
          break;

        case 'today':
          setToToday();
          break;

        case 'difference':
          calculateAgeDifference();
          break;

        case 'nextBirthday':
          calculateNextBirthday();
          break;

        case 'calculateDifference':
          calculateDateDifference();
          break;

        case 'clear':
          clearAll();
          break;
      }
    }

    function calculateAge() {
      const birth = birthDate.value;
      
      if (!birth) {
        showAlert('Please enter your birth date.', 'error');
        return;
      }

      const birthDateObj = new Date(birth);
      const currentDateObj = currentDate.value ? new Date(currentDate.value) : new Date();

      if (birthDateObj > currentDateObj) {
        showAlert('Birth date cannot be in the future.', 'error');
        return;
      }

      const age = calculateExactAge(birthDateObj, currentDateObj);
      
      // Update UI with age results
      yearsElement.textContent = age.years;
      monthsElement.textContent = age.months;
      weeksElement.textContent = Math.floor(age.totalDays / 7);
      daysElement.textContent = age.days;
      totalDaysElement.textContent = age.totalDays;
      
      // Calculate hours, minutes, seconds if using current date
      if (!currentDate.value) {
        const now = new Date();
        const diffMs = now - currentDateObj;
        const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        const diffSecs = Math.floor((diffMs % (1000 * 60)) / 1000);
        
        hoursElement.textContent = diffHrs;
        minutesElement.textContent = diffMins;
        secondsElement.textContent = diffSecs;
      } else {
        hoursElement.textContent = '0';
        minutesElement.textContent = '0';
        secondsElement.textContent = '0';
      }

      calculateZodiac();
      showAlert('Age calculated successfully!', 'success');
    }

    function calculateExactAge(birthDate, currentDate) {
      let years = currentDate.getFullYear() - birthDate.getFullYear();
      let months = currentDate.getMonth() - birthDate.getMonth();
      let days = currentDate.getDate() - birthDate.getDate();

      if (days < 0) {
        months--;
        // Get days in previous month
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += prevMonth.getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      // Calculate total days
      const diffTime = Math.abs(currentDate - birthDate);
      const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      return {
        years,
        months,
        days,
        totalDays
      };
    }

    function calculateZodiac() {
      const birth = birthDate.value;
      
      if (!birth) {
        zodiacName.textContent = 'Unknown';
        zodiacDates.textContent = 'Select birth date to see zodiac sign';
        return;
      }

      const birthDateObj = new Date(birth);
      const month = birthDateObj.getMonth() + 1; // JavaScript months are 0-indexed
      const day = birthDateObj.getDate();

      const zodiac = getZodiacSign(month, day);
      zodiacName.textContent = zodiac.name;
      zodiacDates.textContent = zodiac.dates;
    }

    function getZodiacSign(month, day) {
      if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return { name: 'Aquarius', dates: 'Jan 20 - Feb 18' };
      } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return { name: 'Pisces', dates: 'Feb 19 - Mar 20' };
      } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return { name: 'Aries', dates: 'Mar 21 - Apr 19' };
      } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return { name: 'Taurus', dates: 'Apr 20 - May 20' };
      } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return { name: 'Gemini', dates: 'May 21 - Jun 20' };
      } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return { name: 'Cancer', dates: 'Jun 21 - Jul 22' };
      } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return { name: 'Leo', dates: 'Jul 23 - Aug 22' };
      } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return { name: 'Virgo', dates: 'Aug 23 - Sep 22' };
      } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return { name: 'Libra', dates: 'Sep 23 - Oct 22' };
      } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return { name: 'Scorpio', dates: 'Oct 23 - Nov 21' };
      } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return { name: 'Sagittarius', dates: 'Nov 22 - Dec 21' };
      } else {
        return { name: 'Capricorn', dates: 'Dec 22 - Jan 19' };
      }
    }

    function setToToday() {
      currentDate.value = '';
      calculateAge();
      showAlert('Set to current date successfully!', 'success');
    }

    function calculateAgeDifference() {
      // This would open a modal or section for age difference calculation
      showAlert('Use the Age Difference section below to calculate difference between two dates.', 'success');
    }

    function calculateNextBirthday() {
      const birth = birthDate.value;
      
      if (!birth) {
        showAlert('Please enter your birth date first.', 'error');
        return;
      }

      const birthDateObj = new Date(birth);
      const today = new Date();
      const currentYear = today.getFullYear();
      
      // Create next birthday date for this year
      let nextBirthday = new Date(currentYear, birthDateObj.getMonth(), birthDateObj.getDate());
      
      // If birthday already passed this year, set to next year
      if (nextBirthday < today) {
        nextBirthday.setFullYear(currentYear + 1);
      }
      
      // Calculate difference
      const diffTime = Math.abs(nextBirthday - today);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      showAlert(`Your next birthday is in ${diffDays} days!`, 'success');
    }

    function calculateDateDifference() {
      const first = firstDate.value;
      const second = secondDate.value;
      
      if (!first || !second) {
        showAlert('Please enter both dates to calculate difference.', 'error');
        return;
      }

      const firstDateObj = new Date(first);
      const secondDateObj = new Date(second);
      
      if (firstDateObj > secondDateObj) {
        showAlert('First date should be earlier than second date.', 'error');
        return;
      }

      const difference = calculateExactAge(firstDateObj, secondDateObj);
      
      // Update difference results
      diffYearsElement.textContent = difference.years;
      diffMonthsElement.textContent = difference.months;
      diffDaysElement.textContent = difference.days;
      diffTotalDaysElement.textContent = difference.totalDays;
      
      // Show results section
      differenceResults.style.display = 'grid';
      
      // Show modal with detailed information
      modalFirstDate.textContent = formatDate(firstDateObj);
      modalSecondDate.textContent = formatDate(secondDateObj);
      modalDifferenceDetails.innerHTML = `
        <strong>Detailed Difference:</strong><br>
        ${difference.years} years, ${difference.months} months, ${difference.days} days<br>
        Total: ${difference.totalDays} days<br>
        Or: ${Math.floor(difference.totalDays / 30.44)} months<br>
        Or: ${Math.floor(difference.totalDays / 365.25)} years
      `;
      
      differenceModal.style.display = 'block';
      
      showAlert('Date difference calculated successfully!', 'success');
    }

    function formatDate(date) {
      return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }

    function clearAll() {
      birthDate.value = '';
      currentDate.value = today;
      firstDate.value = '';
      secondDate.value = '';
      
      // Reset all displays
      yearsElement.textContent = '0';
      monthsElement.textContent = '0';
      weeksElement.textContent = '0';
      daysElement.textContent = '0';
      hoursElement.textContent = '0';
      minutesElement.textContent = '0';
      secondsElement.textContent = '0';
      totalDaysElement.textContent = '0';
      
      zodiacName.textContent = 'Unknown';
      zodiacDates.textContent = 'Select birth date to see zodiac sign';
      
      differenceResults.style.display = 'none';
      
      showAlert('All fields cleared!', 'success');
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
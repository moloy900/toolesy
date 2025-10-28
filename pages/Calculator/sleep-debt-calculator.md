---
layout: default
title: "Sleep Debt Calculator – Track Your Sleep Deficit"
permalink: /sleep-debt-calculator-track-and-calculate-your-sleep-deficit/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Sleep Debt Calculator – Track Your Sleep Deficit</title>

<meta name="description"
  content="Free sleep debt calculator to track your weekly sleep deficit and get tips to recover lost sleep. Improve your sleep health, mood, and daily energy levels.">

<meta name="keywords"
  content="sleep debt calculator, sleep deficit calculator, sleep recovery calculator, how much sleep do I need, sleep tracker, sleep health calculator, sleep balance calculator, sleep deprivation recovery, sleep hours needed">

<meta name="author" content="ToolEsy.com">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://toolesy.com/sleep-debt-calculator-track-and-calculate-your-sleep-deficit">

<!-- ✅ Open Graph / Facebook -->
<meta property="og:title" content="Sleep Debt Calculator | Check Your Sleep Deficit">
<meta property="og:description" content="Track your sleep deficit and learn how much recovery sleep you need for better health and energy.">
<meta property="og:url" content="https://toolesy.com/sleep-debt-calculator-track-and-calculate-your-sleep-deficit">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Sleep Debt Calculator | Calculate Sleep Deficiency">
<meta name="twitter:description" content="Check your sleep debt, restore sleep balance & boost productivity with science-backed calculations.">

<!-- ✅ WebPage Schema -->
<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "WebPage",
 "name": "Sleep Debt Calculator",
 "description": "Free online sleep debt calculator to measure sleep deficit and improve sleep health.",
 "url": "https://toolesy.com/sleep-debt-calculator-track-and-calculate-your-sleep-deficit",
 "publisher": {
  "@type": "Organization",
  "name": "ToolEsy"
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
      "name": "How is sleep debt calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sleep debt is calculated by comparing your actual sleep time with your recommended sleep needs over a specific period. For example, if you need 8 hours but only get 6 hours for 5 days, you accumulate 10 hours of sleep debt (2 hours × 5 days)."
      }
    },
    {
      "@type": "Question",
      "name": "Can I really \"catch up\" on lost sleep?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but with limitations. While extra sleep on weekends can help reduce sleep debt, it doesn't completely reverse all effects of chronic sleep deprivation. Consistent adequate sleep is most beneficial."
      }
    },
    {
      "@type": "Question",
      "name": "How much sleep do I actually need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sleep needs vary by age and individual. Most adults need 7-9 hours, teenagers need 8-10 hours, and younger children need 9-12 hours. Our calculator adjusts recommendations based on your age."
      }
    },
    {
      "@type": "Question",
      "name": "Is napping helpful for reducing sleep debt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Strategic napping (20-30 minutes) can provide temporary alertness benefits, but it doesn't replace the need for consolidated nighttime sleep for debt recovery."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to recover from sleep debt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recovery time depends on the amount of debt accumulated. Generally, it takes several days of adequate sleep to recover from each hour of sleep debt, with longer recovery needed for chronic deprivation."
      }
    }
  ]
}
</script>



<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Sleep Debt Calculator Styles */
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

  .sleep-stats-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    border-left: 4px solid var(--primary);
  }

  .stat-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: white;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .stat-item span:first-child {
    font-weight: 600;
    color: var(--primary);
  }

  .stat-item span:last-child {
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
    min-height: 120px;
    resize: vertical;
    font-family: 'Courier New', monospace;
    transition: border-color 0.3s;
  }

  .input-section textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .sleep-input-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 25px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .input-label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .input-field {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .input-field:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .action-button {
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

  .action-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .action-button:active {
    transform: translateY(0);
  }

  .action-button.success {
    background: var(--success);
  }

  .action-button.success:hover {
    background: #218838;
  }

  .action-button.secondary {
    background: #6c757d;
  }

  .action-button.secondary:hover {
    background: #5a6268;
  }

  .action-button.warning {
    background: #ffc107;
    color: #212529;
  }

  .action-button.warning:hover {
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

  .sleep-history {
    margin-top: 30px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .history-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
  }

  .history-table th,
  .history-table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  .history-table th {
    background-color: #f8f9fa;
    font-weight: 600;
    color: var(--primary);
  }

  .history-table tr:hover {
    background-color: #f5f5f5;
  }

  .recommendations {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .recommendation-card {
    background: white;
    padding: 15px;
    border-radius: 6px;
    border-left: 4px solid var(--primary);
    margin: 10px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .recommendation-card h4 {
    color: var(--primary);
    margin-bottom: 8px;
  }

  .sleep-visualization {
    margin: 30px 0;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .visualization-chart {
    height: 200px;
    background: linear-gradient(90deg, #e3f2fd, #bbdefb);
    border-radius: 8px;
    margin: 15px 0;
    position: relative;
    overflow: hidden;
  }

  .chart-bar {
    position: absolute;
    bottom: 0;
    background: var(--primary);
    transition: all 0.3s ease;
  }

  .chart-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 12px;
    color: #666;
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

  /* Sleep quality indicator */
  .sleep-quality {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
  }

  .quality-indicator {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .quality-excellent { background: #28a745; }
  .quality-good { background: #20c997; }
  .quality-fair { background: #ffc107; }
  .quality-poor { background: #fd7e14; }
  .quality-critical { background: #dc3545; }

  /* Progress bars */
  .progress-container {
    margin: 15px 0;
  }

  .progress-label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  .progress-bar {
    height: 10px;
    background: #e9ecef;
    border-radius: 5px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: var(--primary);
    transition: width 0.5s ease;
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

  /* Sleep calculator specific styles */
  .sleep-options {
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
    width: 80px;
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

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .sleep-stats-wrapper {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .action-button {
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

    .sleep-options {
      grid-template-columns: 1fr;
    }

    .sleep-input-section {
      grid-template-columns: 1fr;
    }

    .history-table {
      font-size: 14px;
    }

    .history-table th,
    .history-table td {
      padding: 8px;
    }
  }
</style>

<div class="calculator-container">
  <h1>Sleep Debt Calculator</h1>
  <p class="welcome-message">Track your sleep patterns, calculate your sleep deficit, and get personalized recommendations for better sleep health and recovery.</p>

  <div class="calculator-section">
    <h2>Sleep Debt Calculator</h2>

    <div class="sleep-stats-wrapper">
      <div class="stat-item">
        <span>Current Sleep Debt: </span>
        <span id="sleepDebt">0 hours</span>
      </div>
      <div class="stat-item">
        <span>Recommended Sleep: </span>
        <span id="recommendedSleep">7-9 hours</span>
      </div>
      <div class="stat-item">
        <span>Sleep Quality: </span>
        <span id="sleepQuality">Good</span>
      </div>
      <div class="stat-item">
        <span>Recovery Time: </span>
        <span id="recoveryTime">0 days</span>
      </div>
    </div>

    <div class="sleep-input-section">
      <div class="input-group">
        <label class="input-label">Your Age</label>
        <input type="number" id="age" class="input-field" min="1" max="120" value="30" placeholder="Enter your age">
      </div>
      
      <div class="input-group">
        <label class="input-label">Recommended Sleep Hours</label>
        <input type="number" id="recommendedHours" class="input-field" min="4" max="12" step="0.5" value="8" placeholder="Recommended hours">
      </div>
      
      <div class="input-group">
        <label class="input-label">Tracking Period (Days)</label>
        <select id="trackingPeriod" class="input-field">
          <option value="7">7 days</option>
          <option value="14" selected>14 days</option>
          <option value="30">30 days</option>
          <option value="90">90 days</option>
        </select>
      </div>
    </div>

    <div class="sleep-options">
      <div class="option-group">
        <label class="option-label">Sleep Pattern</label>
        <select id="sleepPattern" class="option-select">
          <option value="consistent">Consistent</option>
          <option value="irregular">Irregular</option>
          <option value="shift-work">Shift Work</option>
          <option value="weekend-catchup">Weekend Catch-up</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Lifestyle Factors</label>
        <select id="lifestyle" class="option-select">
          <option value="sedentary">Sedentary</option>
          <option value="moderate" selected>Moderately Active</option>
          <option value="active">Very Active</option>
          <option value="athlete">Athlete</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Stress Level</label>
        <select id="stressLevel" class="option-select">
          <option value="low">Low</option>
          <option value="medium" selected>Medium</option>
          <option value="high">High</option>
          <option value="very-high">Very High</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="trackNaps" checked>
          <label for="trackNaps">Include naps in calculation</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="adjustRecommended" checked>
          <label for="adjustRecommended">Adjust recommended sleep by age</label>
        </div>
      </div>
    </div>

    <div class="sleep-history">
      <h3>Sleep History (Last 7 Days)</h3>
      <table class="history-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Hours Slept</th>
            <th>Sleep Debt</th>
            <th>Quality</th>
          </tr>
        </thead>
        <tbody id="sleepHistoryBody">
          <!-- Sleep history will be populated here -->
        </tbody>
      </table>
    </div>

    <div class="sleep-visualization">
      <h3>Sleep Debt Visualization</h3>
      <div class="visualization-chart" id="sleepChart">
        <!-- Chart bars will be added dynamically -->
      </div>
      <div class="chart-labels">
        <span>Day 1</span>
        <span>Day 7</span>
        <span>Day 14</span>
        <span>Day 21</span>
        <span>Day 28</span>
      </div>
    </div>

    <div class="button-section">
      <button class="action-button" data-action="calculate">Calculate Sleep Debt</button>
      <button class="action-button" data-action="addEntry">Add Sleep Entry</button>
      <button class="action-button" data-action="reset">Reset Data</button>
      <button class="action-button success" data-action="save">Save Progress</button>
      <button class="action-button warning" data-action="recommendations">Get Recommendations</button>
      <button class="action-button secondary" data-action="export">Export Data</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="recommendations">
      <h2>Sleep Recommendations</h2>
      
      <div class="recommendation-card">
        <h4>Immediate Recovery</h4>
        <p>Based on your current sleep debt, focus on getting 1-2 extra hours of sleep per night for the next 3-5 days.</p>
      </div>
      
      <div class="recommendation-card">
        <h4>Sleep Schedule</h4>
        <p>Try to maintain a consistent sleep schedule, even on weekends. Go to bed and wake up at the same time every day.</p>
      </div>
      
      <div class="recommendation-card">
        <h4>Sleep Environment</h4>
        <p>Ensure your bedroom is dark, quiet, and cool (around 65°F or 18°C) for optimal sleep quality.</p>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Sleep Debt Calculator - Track and Manage Your Sleep Deficit</h2>

    <p>Are you constantly feeling tired despite thinking you get enough sleep? You might be accumulating <strong>sleep debt</strong> without even realizing it. Our free <strong>Sleep Debt Calculator</strong> helps you track your sleep patterns, calculate your accumulated sleep deficit, and provides personalized recommendations for better sleep health and recovery. Understanding your sleep debt is the first step toward improving your energy levels, cognitive function, and overall wellbeing.</p>

    <h3>How to Use This Sleep Debt Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Your Details:</strong> Start by entering your age, which helps determine your recommended sleep needs as sleep requirements change throughout life.</li>
      <li><strong>Set Tracking Preferences:</strong> Choose your tracking period (7, 14, 30, or 90 days) and lifestyle factors that affect your sleep needs.</li>
      <li><strong>Record Your Sleep:</strong> Use the "Add Sleep Entry" button to log your daily sleep hours. Be honest about your actual sleep time, not just time in bed.</li>
      <li><strong>Calculate & Analyze:</strong> Click "Calculate Sleep Debt" to see your current sleep deficit and understand the impact on your health and performance.</li>
      <li><strong>Follow Recommendations:</strong> Implement the personalized sleep recovery plan provided based on your specific sleep debt situation.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a 35-year-old office worker who needs 7-8 hours of sleep per night for optimal function. During a busy work week, you only manage 6 hours per night from Monday to Friday. By Friday, you've accumulated 5-10 hours of sleep debt (1-2 hours deficit per night × 5 nights). Even if you sleep 9 hours on both weekend nights, you still have 1-4 hours of residual sleep debt carrying into the next week. Our calculator helps you track this accumulation and plan effective recovery.</p>

    <h3>Understanding Sleep Debt & Its Impact:</h3>
    <ul>
      <li><strong>What is Sleep Debt?</strong> Sleep debt is the cumulative effect of not getting enough sleep. It's the difference between the sleep your body needs and the sleep you actually get.</li>
      <li><strong>Short-term Effects:</strong> Impaired cognitive function, reduced attention span, mood swings, and decreased immune function.</li>
      <li><strong>Long-term Consequences:</strong> Increased risk of obesity, diabetes, cardiovascular disease, and mental health issues.</li>
      <li><strong>Recovery Time:</strong> It can take several days of adequate sleep to recover from just one hour of sleep debt, with longer recovery needed for chronic sleep deprivation.</li>
    </ul>

    <h3>Benefits & Who Should Use This Calculator:</h3>
    <ul>
      <li><strong>Busy Professionals:</strong> Track how work stress and long hours affect your sleep and performance.</li>
      <li><strong>Students:</strong> Understand the impact of late-night studying on academic performance and health.</li>
      <li><strong>Parents:</strong> Monitor sleep patterns during demanding phases like newborn care or toddler sleep regression.</li>
      <li><strong>Shift Workers:</strong> Manage the unique sleep challenges of irregular work schedules.</li>
      <li><strong>Health-Conscious Individuals:</strong> Optimize sleep as a fundamental component of overall health and wellness.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: How is sleep debt calculated?</strong><br>
      A: Sleep debt is calculated by comparing your actual sleep time with your recommended sleep needs over a specific period. For example, if you need 8 hours but only get 6 hours for 5 days, you accumulate 10 hours of sleep debt (2 hours × 5 days).</p>

    <p><strong>Q: Can I really "catch up" on lost sleep?</strong><br>
      A: Yes, but with limitations. While extra sleep on weekends can help reduce sleep debt, it doesn't completely reverse all effects of chronic sleep deprivation. Consistent adequate sleep is most beneficial.</p>

    <p><strong>Q: How much sleep do I actually need?</strong><br>
      A: Sleep needs vary by age and individual. Most adults need 7-9 hours, teenagers need 8-10 hours, and younger children need 9-12 hours. Our calculator adjusts recommendations based on your age.</p>

    <p><strong>Q: Is napping helpful for reducing sleep debt?</strong><br>
      A: Strategic napping (20-30 minutes) can provide temporary alertness benefits, but it doesn't replace the need for consolidated nighttime sleep for debt recovery.</p>

    <p><strong>Q: How long does it take to recover from sleep debt?</strong><br>
      A: Recovery time depends on the amount of debt accumulated. Generally, it takes several days of adequate sleep to recover from each hour of sleep debt, with longer recovery needed for chronic deprivation.</p>

    <h3>Why Monitor Your Sleep Debt?</h3>
    <p>Tracking your sleep debt is crucial because sleep deprivation has <strong>cumulative effects</strong> that often go unnoticed until they significantly impact your health and performance. Unlike financial debt where you receive statements, sleep debt silently accumulates, affecting your mood, cognitive abilities, reaction times, and long-term health. Regular monitoring helps you:</p>
    <ul>
      <li>Identify patterns in your sleep habits</li>
      <li>Make informed decisions about your sleep priorities</li>
      <li>Understand the relationship between sleep and daily performance</li>
      <li>Take proactive steps before sleep debt becomes unmanageable</li>
      <li>Improve overall health and quality of life</li>
    </ul>

    <h3>Advanced Sleep Tracking Features</h3>
    <p>Our sleep debt calculator goes beyond basic calculations to provide comprehensive insights:</p>
    <ul>
      <li><strong>Age-Adjusted Recommendations:</strong> Automatically adjusts sleep needs based on scientific age guidelines</li>
      <li><strong>Lifestyle Factor Integration:</strong> Considers your activity level and stress in sleep requirements</li>
      <li><strong>Visual Progress Tracking:</strong> Charts and graphs to visualize your sleep debt accumulation and recovery</li>
      <li><strong>Personalized Recovery Plans:</strong> Custom recommendations based on your specific sleep debt situation</li>
      <li><strong>Long-term Trend Analysis:</strong> Identifies patterns over weeks and months for better sleep management</li>
    </ul>
  </div>
</div>

<!-- Add Sleep Entry Modal -->
<div id="sleepEntryModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Add Sleep Entry</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div class="input-group">
        <label class="input-label">Date</label>
        <input type="date" id="sleepDate" class="input-field">
      </div>
      <div class="input-group">
        <label class="input-label">Hours Slept</label>
        <input type="number" id="sleepHours" class="input-field" min="0" max="24" step="0.5" value="7">
      </div>
      <div class="input-group">
        <label class="input-label">Sleep Quality (1-10)</label>
        <input type="number" id="sleepQualityInput" class="input-field" min="1" max="10" value="7">
      </div>
      <div class="input-group">
        <label class="input-label">Notes (Optional)</label>
        <textarea id="sleepNotes" class="input-field" rows="3" placeholder="Any factors affecting your sleep?"></textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelSleepEntry">Cancel</button>
      <button class="modal-button primary" id="saveSleepEntry">Save Entry</button>
    </div>
  </div>
</div>

<!-- Recommendations Modal -->
<div id="recommendationsModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Personalized Sleep Recommendations</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div id="personalizedRecommendations">
        <!-- Recommendations will be populated here -->
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeRecommendations">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const ageInput = document.getElementById('age');
    const recommendedHoursInput = document.getElementById('recommendedHours');
    const trackingPeriodSelect = document.getElementById('trackingPeriod');
    const sleepPatternSelect = document.getElementById('sleepPattern');
    const lifestyleSelect = document.getElementById('lifestyle');
    const stressLevelSelect = document.getElementById('stressLevel');
    const trackNapsCheckbox = document.getElementById('trackNaps');
    const adjustRecommendedCheckbox = document.getElementById('adjustRecommended');
    
    const actionButtons = document.querySelectorAll('.action-button');
    const alertContainer = document.getElementById('alertContainer');
    const sleepHistoryBody = document.getElementById('sleepHistoryBody');
    const sleepChart = document.getElementById('sleepChart');
    
    // Modal elements
    const sleepEntryModal = document.getElementById('sleepEntryModal');
    const recommendationsModal = document.getElementById('recommendationsModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelSleepEntry = document.getElementById('cancelSleepEntry');
    const saveSleepEntry = document.getElementById('saveSleepEntry');
    const closeRecommendations = document.getElementById('closeRecommendations');
    const personalizedRecommendations = document.getElementById('personalizedRecommendations');

    // Sleep data storage
    let sleepData = JSON.parse(localStorage.getItem('sleepData')) || [];
    let currentSleepDebt = 0;

    // Initialize calculator
    initializeCalculator();

    // Event listeners
    ageInput.addEventListener('change', updateRecommendedSleep);
    adjustRecommendedCheckbox.addEventListener('change', updateRecommendedSleep);
    
    actionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleSleepAction(action);
      });
    });

    // Modal event listeners
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        sleepEntryModal.style.display = 'none';
        recommendationsModal.style.display = 'none';
      });
    });

    cancelSleepEntry.addEventListener('click', function() {
      sleepEntryModal.style.display = 'none';
    });

    saveSleepEntry.addEventListener('click', function() {
      saveSleepEntryHandler();
    });

    closeRecommendations.addEventListener('click', function() {
      recommendationsModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === sleepEntryModal || event.target === recommendationsModal) {
        sleepEntryModal.style.display = 'none';
        recommendationsModal.style.display = 'none';
      }
    });

    function initializeCalculator() {
      updateRecommendedSleep();
      loadSleepHistory();
      calculateSleepDebt();
      updateSleepChart();
    }

    function updateRecommendedSleep() {
      const age = parseInt(ageInput.value);
      let recommendedHours = 8; // Default for adults
      
      if (adjustRecommendedCheckbox.checked) {
        // Age-based sleep recommendations
        if (age <= 1) recommendedHours = 14;
        else if (age <= 2) recommendedHours = 13;
        else if (age <= 5) recommendedHours = 11;
        else if (age <= 13) recommendedHours = 10;
        else if (age <= 17) recommendedHours = 9;
        else if (age <= 64) recommendedHours = 8;
        else recommendedHours = 7;
      }
      
      recommendedHoursInput.value = recommendedHours;
      document.getElementById('recommendedSleep').textContent = `${recommendedHours} hours`;
    }

    function loadSleepHistory() {
      // Clear existing rows
      sleepHistoryBody.innerHTML = '';
      
      // Get last 7 entries or all if less than 7
      const recentEntries = sleepData.slice(-7);
      
      if (recentEntries.length === 0) {
        sleepHistoryBody.innerHTML = '<tr><td colspan="4" style="text-align: center;">No sleep entries yet. Add your first entry!</td></tr>';
        return;
      }
      
      recentEntries.forEach(entry => {
        const row = document.createElement('tr');
        
        // Format date
        const date = new Date(entry.date);
        const formattedDate = date.toLocaleDateString();
        
        // Determine sleep quality indicator
        let qualityClass = 'quality-fair';
        let qualityText = 'Fair';
        
        if (entry.quality >= 9) {
          qualityClass = 'quality-excellent';
          qualityText = 'Excellent';
        } else if (entry.quality >= 7) {
          qualityClass = 'quality-good';
          qualityText = 'Good';
        } else if (entry.quality >= 5) {
          qualityClass = 'quality-fair';
          qualityText = 'Fair';
        } else if (entry.quality >= 3) {
          qualityClass = 'quality-poor';
          qualityText = 'Poor';
        } else {
          qualityClass = 'quality-critical';
          qualityText = 'Critical';
        }
        
        row.innerHTML = `
          <td>${formattedDate}</td>
          <td>${entry.hours} hours</td>
          <td>${entry.debt > 0 ? '+' : ''}${entry.debt.toFixed(1)} hours</td>
          <td>
            <div class="sleep-quality">
              <div class="quality-indicator ${qualityClass}"></div>
              <span>${qualityText}</span>
            </div>
          </td>
        `;
        
        sleepHistoryBody.appendChild(row);
      });
    }

    function calculateSleepDebt() {
      if (sleepData.length === 0) {
        currentSleepDebt = 0;
        updateSleepStats();
        return;
      }
      
      const recommendedHours = parseFloat(recommendedHoursInput.value);
      const trackingPeriod = parseInt(trackingPeriodSelect.value);
      
      // Filter data for tracking period
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - trackingPeriod);
      
      const relevantData = sleepData.filter(entry => {
        const entryDate = new Date(entry.date);
        return entryDate >= cutoffDate;
      });
      
      // Calculate total sleep debt
      let totalDebt = 0;
      relevantData.forEach(entry => {
        totalDebt += entry.debt;
      });
      
      currentSleepDebt = totalDebt;
      updateSleepStats();
    }

    function updateSleepStats() {
      document.getElementById('sleepDebt').textContent = `${currentSleepDebt.toFixed(1)} hours`;
      
      // Update sleep quality based on debt
      let qualityText = 'Excellent';
      let qualityClass = 'quality-excellent';
      
      if (currentSleepDebt > 10) {
        qualityText = 'Critical';
        qualityClass = 'quality-critical';
      } else if (currentSleepDebt > 5) {
        qualityText = 'Poor';
        qualityClass = 'quality-poor';
      } else if (currentSleepDebt > 2) {
        qualityText = 'Fair';
        qualityClass = 'quality-fair';
      } else if (currentSleepDebt > 0) {
        qualityText = 'Good';
        qualityClass = 'quality-good';
      }
      
      document.getElementById('sleepQuality').textContent = qualityText;
      
      // Calculate recovery time (assuming 1 hour of extra sleep recovers 1 hour of debt)
      const recoveryDays = Math.ceil(currentSleepDebt / 1.5); // 1.5 hours extra per day
      document.getElementById('recoveryTime').textContent = `${recoveryDays} days`;
    }

    function updateSleepChart() {
      // Clear existing chart
      sleepChart.innerHTML = '';
      
      if (sleepData.length === 0) return;
      
      // Get last 28 days or all available data
      const chartData = sleepData.slice(-28);
      const maxDebt = Math.max(...chartData.map(entry => Math.abs(entry.debt)), 1);
      
      // Create bars for the chart
      chartData.forEach((entry, index) => {
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        
        // Calculate bar height (percentage of max debt)
        const barHeight = (Math.abs(entry.debt) / maxDebt) * 100;
        bar.style.height = `${barHeight}%`;
        bar.style.width = `${100 / chartData.length}%`;
        bar.style.left = `${(index / chartData.length) * 100}%`;
        
        // Color based on debt (red for positive debt, green for negative/surplus)
        bar.style.background = entry.debt > 0 ? '#dc3545' : '#28a745';
        
        // Tooltip with date and debt amount
        const date = new Date(entry.date);
        bar.title = `${date.toLocaleDateString()}: ${entry.debt > 0 ? '+' : ''}${entry.debt.toFixed(1)} hours`;
        
        sleepChart.appendChild(bar);
      });
    }

    function handleSleepAction(action) {
      switch (action) {
        case 'calculate':
          calculateSleepDebt();
          showAlert('Sleep debt calculated successfully!', 'success');
          break;

        case 'addEntry':
          // Set today's date as default
          const today = new Date().toISOString().split('T')[0];
          document.getElementById('sleepDate').value = today;
          document.getElementById('sleepHours').value = '';
          document.getElementById('sleepQualityInput').value = '7';
          document.getElementById('sleepNotes').value = '';
          sleepEntryModal.style.display = 'block';
          break;

        case 'reset':
          if (confirm('Are you sure you want to reset all sleep data? This cannot be undone.')) {
            sleepData = [];
            localStorage.setItem('sleepData', JSON.stringify(sleepData));
            initializeCalculator();
            showAlert('Sleep data reset successfully!', 'success');
          }
          break;

        case 'save':
          localStorage.setItem('sleepData', JSON.stringify(sleepData));
          showAlert('Sleep progress saved successfully!', 'success');
          break;

        case 'recommendations':
          showPersonalizedRecommendations();
          break;

        case 'export':
          exportSleepData();
          break;
      }
    }

    function saveSleepEntryHandler() {
      const date = document.getElementById('sleepDate').value;
      const hours = parseFloat(document.getElementById('sleepHours').value);
      const quality = parseInt(document.getElementById('sleepQualityInput').value);
      const notes = document.getElementById('sleepNotes').value;
      
      if (!date || isNaN(hours) || hours < 0 || hours > 24) {
        showAlert('Please enter valid sleep data.', 'error');
        return;
      }
      
      const recommendedHours = parseFloat(recommendedHoursInput.value);
      const debt = recommendedHours - hours;
      
      // Add new entry
      const newEntry = {
        date: date,
        hours: hours,
        quality: quality,
        debt: debt,
        notes: notes
      };
      
      sleepData.push(newEntry);
      
      // Sort by date
      sleepData.sort((a, b) => new Date(a.date) - new Date(b.date));
      
      // Save to localStorage
      localStorage.setItem('sleepData', JSON.stringify(sleepData));
      
      // Update UI
      loadSleepHistory();
      calculateSleepDebt();
      updateSleepChart();
      
      sleepEntryModal.style.display = 'none';
      showAlert('Sleep entry added successfully!', 'success');
    }

    function showPersonalizedRecommendations() {
      let recommendationsHTML = '';
      
      if (currentSleepDebt > 10) {
        recommendationsHTML = `
          <div class="recommendation-card">
            <h4>High Sleep Debt Detected</h4>
            <p>Your current sleep debt of ${currentSleepDebt.toFixed(1)} hours is significant. Focus on:</p>
            <ul>
              <li>Adding 1-2 extra hours of sleep each night</li>
              <li>Taking short (20-30 minute) naps when possible</li>
              <li>Prioritizing sleep over non-essential activities</li>
              <li>Consulting a healthcare provider if fatigue persists</li>
            </ul>
          </div>
        `;
      } else if (currentSleepDebt > 5) {
        recommendationsHTML = `
          <div class="recommendation-card">
            <h4>Moderate Sleep Debt</h4>
            <p>Your sleep debt of ${currentSleepDebt.toFixed(1)} hours is manageable with consistent effort:</p>
            <ul>
              <li>Aim for 30-60 minutes of extra sleep nightly</li>
              <li>Maintain a consistent sleep schedule</li>
              <li>Limit caffeine after 2 PM</li>
              <li>Create a relaxing bedtime routine</li>
            </ul>
          </div>
        `;
      } else if (currentSleepDebt > 0) {
        recommendationsHTML = `
          <div class="recommendation-card">
            <h4>Minimal Sleep Debt</h4>
            <p>Your sleep debt of ${currentSleepDebt.toFixed(1)} hours is minimal. Maintain your good habits:</p>
            <ul>
              <li>Continue getting your recommended ${recommendedHoursInput.value} hours</li>
              <li>Stay consistent with your sleep schedule</li>
              <li>Monitor for any changes in sleep patterns</li>
            </ul>
          </div>
        `;
      } else {
        recommendationsHTML = `
          <div class="recommendation-card">
            <h4>Excellent Sleep Health</h4>
            <p>You're meeting or exceeding your sleep needs! Keep up the good work:</p>
            <ul>
              <li>Maintain your current sleep schedule</li>
              <li>Continue prioritizing sleep as part of your health routine</li>
              <li>Share your successful sleep habits with others</li>
            </ul>
          </div>
        `;
      }
      
      // Add lifestyle-specific recommendations
      const lifestyle = lifestyleSelect.value;
      if (lifestyle === 'active' || lifestyle === 'athlete') {
        recommendationsHTML += `
          <div class="recommendation-card">
            <h4>Active Lifestyle Considerations</h4>
            <p>As an active individual, your sleep needs might be higher than average:</p>
            <ul>
              <li>Consider adding 30-60 minutes to your sleep target on intense training days</li>
              <li>Pay attention to recovery sleep after strenuous activity</li>
              <li>Sleep is when muscle repair and growth occur</li>
            </ul>
          </div>
        `;
      }
      
      personalizedRecommendations.innerHTML = recommendationsHTML;
      recommendationsModal.style.display = 'block';
    }

    function exportSleepData() {
      if (sleepData.length === 0) {
        showAlert('No sleep data to export.', 'error');
        return;
      }
      
      // Convert to CSV
      let csv = 'Date,Hours Slept,Sleep Quality,Sleep Debt,Notes\n';
      sleepData.forEach(entry => {
        csv += `"${entry.date}",${entry.hours},${entry.quality},${entry.debt},"${entry.notes || ''}"\n`;
      });
      
      // Create download link
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'sleep_data.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      showAlert('Sleep data exported successfully!', 'success');
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
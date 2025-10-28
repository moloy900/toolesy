---
layout: default
title: "Body Water Percentage Calculator – Check Hydration Level"
permalink: /body-water-percentage-calculator-calculate-your-body-water-percentage/
---

<!-- Basic SEO Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Body Water Percentage Calculator – Check Hydration Level</title>

<meta name="description"
  content="Find your body water percentage with this free online calculator. Get instant results and improve hydration, fitness, and overall health with accurate measurement.">

<meta name="keywords"
  content="body water calculator, hydration calculator, body water percentage, water percentage calculator, body composition calculator, health calculator, fitness calculator, online health tools">

<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Canonical URL -->
<link rel="canonical" href="https://toolesy.com/body-water-percentage-calculator-calculate-your-body-water-percentage" />

<!-- Open Graph Tags (Facebook / LinkedIn) -->
<meta property="og:title" content="Body Water Percentage Calculator - Free Online Health Tool">
<meta property="og:description" content="Use this free online Body Water Percentage Calculator to measure hydration levels and learn about your health. Accurate, fast, and easy to use.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/body-water-percentage-calculator-calculate-your-body-water-percentage">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Body Water Percentage Calculator | Online Health & Fitness Tool">
<meta name="twitter:description" content="Calculate your body water percentage online for free. Quick, accurate & helpful for hydration and fitness tracking.">

<!-- JSON-LD Web Application Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Body Water Percentage Calculator",
  "url": "https://toolesy.com/body-water-percentage-calculator-calculate-your-body-water-percentage",
  "description": "Free online calculator to measure body water percentage based on weight, age, gender, and other factors. Helps track hydration and health.",
  "applicationCategory": "HealthApplication",
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
  /* Body Water Calculator Styles */
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

  .input-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .input-group label {
    font-weight: 600;
    color: #2c3e50;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .input-group label i {
    color: var(--primary);
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

  .unit-toggle {
    display: flex;
    gap: 10px;
    margin: 15px 0;
  }

  .unit-button {
    padding: 10px 20px;
    border: 2px solid var(--primary);
    background: white;
    color: var(--primary);
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .unit-button.active {
    background: var(--primary);
    color: white;
  }

  .result-section {
    background: white;
    padding: 30px;
    border-radius: 12px;
    margin: 30px 0;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .water-percentage {
    font-size: 4rem;
    font-weight: bold;
    color: var(--primary);
    margin: 20px 0;
  }

  .water-amount {
    font-size: 1.5rem;
    color: #2c3e50;
    margin: 15px 0;
  }

  .hydration-status {
    padding: 15px;
    border-radius: 8px;
    margin: 20px 0;
    font-weight: 600;
    font-size: 1.2rem;
  }

  .status-optimal {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  .status-moderate {
    background: #fff3cd;
    color: #856404;
    border: 1px solid #ffeaa7;
  }

  .status-low {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }

  .progress-container {
    width: 100%;
    height: 30px;
    background: #e9ecef;
    border-radius: 15px;
    margin: 25px 0;
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #3498db, #2ecc71);
    border-radius: 15px;
    transition: width 1s ease-in-out;
    position: relative;
  }

  .progress-marker {
    position: absolute;
    top: -5px;
    width: 2px;
    height: 40px;
    background: #e74c3c;
  }

  .marker-label {
    position: absolute;
    top: -30px;
    left: -15px;
    font-size: 12px;
    color: #e74c3c;
    font-weight: 600;
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 25px 0;
  }

  .action-button {
    padding: 15px 20px;
    border: none;
    border-radius: 8px;
    background: var(--primary);
    color: white;
    font-size: 16px;
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

  .comparison-chart {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 25px 0;
  }

  .chart-item {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .chart-value {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--primary);
    margin: 10px 0;
  }

  .chart-label {
    color: #666;
    font-size: 0.9rem;
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

  .history-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
  }

  .history-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #eee;
  }

  .history-item:last-child {
    border-bottom: none;
  }

  .history-date {
    color: #666;
    font-size: 0.9rem;
  }

  .history-value {
    font-weight: bold;
    color: var(--primary);
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

  /* Additional calculator specific styles */
  .info-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 30px 0;
  }

  .info-card {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .info-card i {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 15px;
  }

  .info-card h3 {
    color: #2c3e50;
    margin-bottom: 10px;
  }

  .info-card p {
    color: #666;
    line-height: 1.6;
  }

  .detailed-results {
    background: white;
    padding: 25px;
    border-radius: 10px;
    margin: 25px 0;
  }

  .result-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .result-item {
    text-align: center;
    padding: 15px;
    border-radius: 8px;
    background: #f8f9fa;
  }

  .result-value {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary);
    margin: 10px 0;
  }

  .result-label {
    color: #666;
    font-size: 0.9rem;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .calculator-container {
      padding: 15px;
    }

    .calculator-container h1 {
      font-size: 2rem;
    }

    .calculator-section {
      padding: 20px;
      margin-bottom: 30px;
    }

    .calculator-section h2 {
      font-size: 1.3rem;
    }

    .input-grid {
      grid-template-columns: 1fr;
    }

    .water-percentage {
      font-size: 3rem;
    }

    .button-section {
      grid-template-columns: 1fr;
    }

    .comparison-chart {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
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

    .info-cards {
      grid-template-columns: 1fr;
    }

    .result-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
</style>

<div class="calculator-container">
  <h1>Body Water Percentage Calculator</h1>
  <p class="welcome-message">Calculate your body water percentage based on weight, age, gender, and other factors. Understand your hydration levels and improve your health.</p>

  <div class="calculator-section">
    <h2>Calculate Your Body Water Percentage</h2>

    <div class="unit-toggle">
      <button class="unit-button active" data-unit="metric">Metric (kg, cm)</button>
      <button class="unit-button" data-unit="imperial">Imperial (lbs, ft)</button>
    </div>

    <div class="input-grid">
      <div class="input-group">
        <label for="weight"><i class="fas fa-weight-scale"></i> Weight</label>
        <input type="number" id="weight" placeholder="Enter weight in kg" min="20" max="300" step="0.1">
        <span class="unit-label">kg</span>
      </div>

      <div class="input-group">
        <label for="height"><i class="fas fa-ruler-vertical"></i> Height</label>
        <input type="number" id="height" placeholder="Enter height in cm" min="100" max="250" step="1">
        <span class="unit-label">cm</span>
      </div>

      <div class="input-group">
        <label for="age"><i class="fas fa-birthday-cake"></i> Age</label>
        <input type="number" id="age" placeholder="Enter age in years" min="1" max="120" step="1">
        <span class="unit-label">years</span>
      </div>

      <div class="input-group">
        <label for="gender"><i class="fas fa-venus-mars"></i> Gender</label>
        <select id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div class="input-group">
        <label for="activity"><i class="fas fa-person-running"></i> Activity Level</label>
        <select id="activity">
          <option value="sedentary">Sedentary</option>
          <option value="light">Light Activity</option>
          <option value="moderate">Moderate Activity</option>
          <option value="active">Active</option>
          <option value="athlete">Athlete</option>
        </select>
      </div>

      <div class="input-group">
        <label for="bodyFat"><i class="fas fa-percentage"></i> Body Fat % (Optional)</label>
        <input type="number" id="bodyFat" placeholder="Enter body fat percentage" min="5" max="60" step="0.1">
        <span class="unit-label">%</span>
      </div>
    </div>

    <div class="button-section">
      <button class="action-button" id="calculateBtn">Calculate Body Water</button>
      <button class="action-button secondary" id="resetBtn">Reset</button>
      <button class="action-button success" id="saveBtn">Save Result</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="result-section" id="resultSection" style="display: none;">
      <h2>Your Body Water Analysis</h2>
      
      <div class="water-percentage" id="waterPercentage">0%</div>
      
      <div class="hydration-status" id="hydrationStatus"></div>
      
      <div class="progress-container">
        <div class="progress-bar" id="progressBar"></div>
        <div class="progress-marker" style="left: 50%;">
          <div class="marker-label">Average</div>
        </div>
        <div class="progress-marker" style="left: 60%;">
          <div class="marker-label">Optimal</div>
        </div>
      </div>
      
      <div class="water-amount" id="waterAmount"></div>
      
      <div class="comparison-chart">
        <div class="chart-item">
          <div class="chart-label">Your Result</div>
          <div class="chart-value" id="yourResult">0%</div>
        </div>
        <div class="chart-item">
          <div class="chart-label">Average Male</div>
          <div class="chart-value">60%</div>
        </div>
        <div class="chart-item">
          <div class="chart-label">Average Female</div>
          <div class="chart-value">55%</div>
        </div>
        <div class="chart-item">
          <div class="chart-label">Athlete Range</div>
          <div class="chart-value">65-70%</div>
        </div>
      </div>
    </div>

    <div class="detailed-results" id="detailedResults" style="display: none;">
      <h3>Detailed Analysis</h3>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Total Body Water</div>
          <div class="result-value" id="totalWater">0 L</div>
        </div>
        <div class="result-item">
          <div class="result-label">Intracellular Water</div>
          <div class="result-value" id="intracellular">0 L</div>
        </div>
        <div class="result-item">
          <div class="result-label">Extracellular Water</div>
          <div class="result-value" id="extracellular">0 L</div>
        </div>
        <div class="result-item">
          <div class="result-label">Recommended Daily Intake</div>
          <div class="result-value" id="dailyIntake">0 L</div>
        </div>
      </div>
    </div>

    <div class="history-section" id="historySection" style="display: none;">
      <h3>Previous Calculations</h3>
      <div id="historyList"></div>
    </div>

    {% include share-and-donation.html %}

    <div class="info-cards">
      <div class="info-card">
        <i class="fas fa-tint"></i>
        <h3>Why Body Water Matters</h3>
        <p>Water is essential for every cell and function in your body. Proper hydration affects energy levels, cognitive function, and overall health.</p>
      </div>
      
      <div class="info-card">
        <i class="fas fa-heart-pulse"></i>
        <h3>Health Implications</h3>
        <p>Maintaining optimal body water percentage supports cardiovascular health, joint lubrication, temperature regulation, and nutrient transport.</p>
      </div>
      
      <div class="info-card">
        <i class="fas fa-chart-line"></i>
        <h3>Track Your Progress</h3>
        <p>Regular monitoring helps you understand how lifestyle changes, diet, and exercise affect your hydration levels over time.</p>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Body Water Percentage Calculator - Understand Your Hydration Levels</h2>

    <p>Water is the essence of life, and understanding your body water percentage is crucial for maintaining optimal health. Our free <strong>Body Water Percentage Calculator</strong> helps you determine how much of your body weight consists of water based on scientific formulas that consider your weight, height, age, gender, and activity level. This valuable information can guide your hydration strategy and overall wellness approach.</p>

    <h3>How to Use This Body Water Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Your Details:</strong> Input your weight, height, age, and select your gender from the dropdown menu.</li>
      <li><strong>Specify Activity Level:</strong> Choose your typical activity level from sedentary to athlete for more accurate results.</li>
      <li><strong>Optional Body Fat:</strong> For enhanced accuracy, include your body fat percentage if you know it.</li>
      <li><strong>Calculate:</strong> Click the "Calculate Body Water" button to get your personalized results instantly.</li>
      <li><strong>Review Results:</strong> Analyze your body water percentage, compare with averages, and get hydration recommendations.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a 35-year-old male who weighs 80 kg, is 180 cm tall, and exercises moderately 3-4 times per week. Using our calculator, you discover your body water percentage is 58%. This falls within the healthy range for men (50-65%), but you learn that increasing it to 60% could improve your athletic performance and recovery. The calculator provides specific recommendations for daily water intake and tracks your progress over time.</p>

    <h3>Understanding Body Water Percentage Ranges:</h3>
    <ul>
      <li><strong>Optimal Range (Men):</strong> 50-65% - Varies by age, fitness level, and body composition</li>
      <li><strong>Optimal Range (Women):</strong> 45-60% - Generally lower due to higher body fat percentage</li>
      <li><strong>Athletes:</strong> Often 65-70% due to higher muscle mass and lower body fat</li>
      <li><strong>Concerning Levels:</strong> Below 45% for men or 40% for women may indicate dehydration</li>
    </ul>

    <h3>Benefits & Who Should Use This Calculator:</h3>
    <ul>
      <li><strong>Athletes & Fitness Enthusiasts:</strong> Optimize hydration for peak performance and recovery</li>
      <li><strong>Health-Conscious Individuals:</strong> Monitor hydration as part of overall wellness tracking</li>
      <li><strong>People with Health Conditions:</strong> Those with kidney issues, diabetes, or cardiovascular conditions</li>
      <li><strong>Weight Management:</strong> Understand the role of water in metabolism and appetite regulation</li>
      <li><strong>Elderly Individuals:</strong> Seniors are at higher risk for dehydration and can benefit from monitoring</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What is the average body water percentage?</strong><br>
      A: The average adult male is about 60% water, while the average adult female is about 55% water. These percentages vary based on age, fitness level, and body composition.</p>

    <p><strong>Q: Why do women typically have lower body water percentage than men?</strong><br>
      A: Women naturally have a higher percentage of body fat than men, and fat tissue contains less water than muscle tissue. Therefore, women generally have a lower total body water percentage.</p>

    <p><strong>Q: How accurate is this body water calculator?</strong><br>
      A: Our calculator uses established scientific formulas that provide a reliable estimate of body water percentage. For clinical precision, methods like bioelectrical impedance analysis (BIA) or deuterium dilution are used, but our calculator offers excellent accuracy for personal tracking.</p>

    <p><strong>Q: Can I increase my body water percentage?</strong><br>
      A: Yes, through proper hydration, reducing body fat, increasing muscle mass, and maintaining electrolyte balance. However, dramatic changes require consistent lifestyle adjustments over time.</p>

    <p><strong>Q: How often should I check my body water percentage?</strong><br>
      A: For general wellness, checking monthly is sufficient. Athletes or individuals making significant lifestyle changes might benefit from weekly tracking. Always measure under consistent conditions (same time of day, hydration status).</p>

    <h3>The Science Behind Body Water Calculation</h3>
    <p>Our <strong>body water percentage calculator</strong> uses sophisticated algorithms based on anthropometric data and established physiological principles. The calculations consider that muscle tissue is approximately 75% water, while fat tissue is only about 10% water. By analyzing your body composition through indirect measurements, we can estimate your total body water with remarkable accuracy.</p>

    <h3>Factors That Affect Your Body Water Percentage</h3>
    <p>Several elements influence your hydration status and body water percentage:</p>
    <ul>
      <li><strong>Age:</strong> Body water percentage decreases with age as muscle mass declines and fat mass increases</li>
      <li><strong>Gender:</strong> Biological differences in body composition significantly impact water percentage</li>
      <li><strong>Body Composition:</strong> Muscle holds more water than fat, so lean individuals have higher percentages</li>
      <li><strong>Hydration Status:</strong> Recent fluid intake directly affects your measurements</li>
      <li><strong>Health Conditions:</strong> Certain medications and medical conditions can alter fluid balance</li>
      <li><strong>Climate & Altitude:</strong> Environmental factors influence hydration needs and fluid retention</li>
    </ul>

    <h3>Practical Applications of Body Water Monitoring</h3>
    <p>Understanding your body water percentage has numerous real-world benefits:</p>
    <ul>
      <li><strong>Athletic Performance:</strong> Optimize hydration strategies for training and competition</li>
      <li><strong>Weight Management:</strong> Distinguish between water weight and actual fat loss</li>
      <li><strong>Health Screening:</strong> Identify potential dehydration or fluid retention issues early</li>
      <li><strong>Senior Health:</strong> Monitor hydration in elderly populations at risk for dehydration</li>
      <li><strong>Medical Compliance:</strong> Track fluid balance for conditions requiring strict hydration management</li>
    </ul>
  </div>
</div>

<!-- Information Modal -->
<div id="infoModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">About Body Water Percentage</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Body water percentage refers to the amount of water in your body compared to your total body weight. It's a key indicator of hydration status and overall health.</p>
      <p><strong>Healthy Ranges:</strong></p>
      <ul>
        <li>Men: 50-65%</li>
        <li>Women: 45-60%</li>
        <li>Athletes: 65-70%</li>
      </ul>
      <p>Factors affecting body water percentage include age, gender, body composition, and fitness level.</p>
    </div>
    <div class="modal-footer">
      <button class="modal-button primary" id="closeInfo">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const saveBtn = document.getElementById('saveBtn');
    const unitButtons = document.querySelectorAll('.unit-button');
    const alertContainer = document.getElementById('alertContainer');
    const resultSection = document.getElementById('resultSection');
    const detailedResults = document.getElementById('detailedResults');
    const historySection = document.getElementById('historySection');
    const historyList = document.getElementById('historyList');
    
    // Input elements
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const ageInput = document.getElementById('age');
    const genderSelect = document.getElementById('gender');
    const activitySelect = document.getElementById('activity');
    const bodyFatInput = document.getElementById('bodyFat');
    
    // Result elements
    const waterPercentage = document.getElementById('waterPercentage');
    const hydrationStatus = document.getElementById('hydrationStatus');
    const progressBar = document.getElementById('progressBar');
    const waterAmount = document.getElementById('waterAmount');
    const yourResult = document.getElementById('yourResult');
    const totalWater = document.getElementById('totalWater');
    const intracellular = document.getElementById('intracellular');
    const extracellular = document.getElementById('extracellular');
    const dailyIntake = document.getElementById('dailyIntake');
    
    // Modal elements
    const infoModal = document.getElementById('infoModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const closeInfo = document.getElementById('closeInfo');

    // Initialize
    loadHistory();
    updateUnitLabels('metric');

    // Event listeners
    calculateBtn.addEventListener('click', calculateBodyWater);
    resetBtn.addEventListener('click', resetCalculator);
    saveBtn.addEventListener('click', saveResult);
    
    unitButtons.forEach(button => {
      button.addEventListener('click', function() {
        unitButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        updateUnitLabels(this.dataset.unit);
      });
    });

    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        infoModal.style.display = 'none';
      });
    });

    // Close info modal
    closeInfo.addEventListener('click', function() {
      infoModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === infoModal) {
        infoModal.style.display = 'none';
      }
    });

    function updateUnitLabels(unit) {
      const weightLabel = weightInput.nextElementSibling;
      const heightLabel = heightInput.nextElementSibling;
      
      if (unit === 'metric') {
        weightInput.placeholder = 'Enter weight in kg';
        heightInput.placeholder = 'Enter height in cm';
        weightLabel.textContent = 'kg';
        heightLabel.textContent = 'cm';
      } else {
        weightInput.placeholder = 'Enter weight in lbs';
        heightInput.placeholder = 'Enter height in inches';
        weightLabel.textContent = 'lbs';
        heightLabel.textContent = 'inches';
      }
    }

    function calculateBodyWater() {
      // Get input values
      const weight = parseFloat(weightInput.value);
      const height = parseFloat(heightInput.value);
      const age = parseInt(ageInput.value);
      const gender = genderSelect.value;
      const activity = activitySelect.value;
      const bodyFat = bodyFatInput.value ? parseFloat(bodyFatInput.value) : null;
      
      // Validate inputs
      if (!weight || !height || !age) {
        showAlert('Please fill in all required fields.', 'error');
        return;
      }
      
      if (weight < 20 || weight > 300) {
        showAlert('Please enter a valid weight between 20 and 300 kg.', 'error');
        return;
      }
      
      if (height < 100 || height > 250) {
        showAlert('Please enter a valid height between 100 and 250 cm.', 'error');
        return;
      }
      
      if (age < 1 || age > 120) {
        showAlert('Please enter a valid age between 1 and 120 years.', 'error');
        return;
      }
      
      // Convert to metric if imperial is selected
      let weightKg = weight;
      let heightCm = height;
      
      if (document.querySelector('.unit-button.active').dataset.unit === 'imperial') {
        weightKg = weight * 0.453592; // lbs to kg
        heightCm = height * 2.54; // inches to cm
      }
      
      // Calculate body water percentage using Watson formula
      let bodyWaterPercentage;
      let totalBodyWater;
      
      if (gender === 'male') {
        totalBodyWater = 2.447 - (0.09156 * age) + (0.1074 * heightCm) + (0.3362 * weightKg);
      } else {
        totalBodyWater = -2.097 + (0.1069 * heightCm) + (0.2466 * weightKg);
      }
      
      // Calculate percentage
      bodyWaterPercentage = (totalBodyWater / weightKg) * 100;
      
      // Adjust based on body fat if provided
      if (bodyFat) {
        // Fat contains about 10% water, lean tissue about 73%
        const fatMass = weightKg * (bodyFat / 100);
        const leanMass = weightKg - fatMass;
        const waterFromFat = fatMass * 0.10;
        const waterFromLean = leanMass * 0.73;
        totalBodyWater = waterFromFat + waterFromLean;
        bodyWaterPercentage = (totalBodyWater / weightKg) * 100;
      }
      
      // Adjust based on activity level
      const activityMultipliers = {
        sedentary: 1.0,
        light: 1.02,
        moderate: 1.04,
        active: 1.06,
        athlete: 1.08
      };
      
      bodyWaterPercentage *= activityMultipliers[activity];
      totalBodyWater *= activityMultipliers[activity];
      
      // Ensure percentage is within reasonable bounds
      bodyWaterPercentage = Math.max(40, Math.min(75, bodyWaterPercentage));
      
      // Display results
      displayResults(bodyWaterPercentage, totalBodyWater, gender);
    }
    
    function displayResults(percentage, totalWaterLiters, gender) {
      // Format percentage
      const formattedPercentage = percentage.toFixed(1);
      
      // Update main result
      waterPercentage.textContent = `${formattedPercentage}%`;
      yourResult.textContent = `${formattedPercentage}%`;
      
      // Update progress bar
      const progressWidth = Math.max(40, Math.min(100, percentage));
      progressBar.style.width = `${progressWidth}%`;
      
      // Determine hydration status
      let status, statusClass, statusText;
      
      if (gender === 'male') {
        if (percentage >= 60) {
          status = 'optimal';
          statusClass = 'status-optimal';
          statusText = 'Optimal Hydration Level';
        } else if (percentage >= 50) {
          status = 'moderate';
          statusClass = 'status-moderate';
          statusText = 'Moderate Hydration Level';
        } else {
          status = 'low';
          statusClass = 'status-low';
          statusText = 'Low Hydration Level - Consider Increasing Water Intake';
        }
      } else {
        if (percentage >= 55) {
          status = 'optimal';
          statusClass = 'status-optimal';
          statusText = 'Optimal Hydration Level';
        } else if (percentage >= 45) {
          status = 'moderate';
          statusClass = 'status-moderate';
          statusText = 'Moderate Hydration Level';
        } else {
          status = 'low';
          statusClass = 'status-low';
          statusText = 'Low Hydration Level - Consider Increasing Water Intake';
        }
      }
      
      // Update status
      hydrationStatus.className = `hydration-status ${statusClass}`;
      hydrationStatus.textContent = statusText;
      
      // Update water amount
      const waterLiters = totalWaterLiters.toFixed(1);
      const waterPounds = (totalWaterLiters * 2.20462).toFixed(1);
      waterAmount.textContent = `Total Body Water: ${waterLiters} L (${waterPounds} lbs)`;
      
      // Update detailed results
      totalWater.textContent = `${waterLiters} L`;
      
      // Calculate intracellular and extracellular water (approximate ratios)
      const intracellularWater = (totalWaterLiters * 0.67).toFixed(1);
      const extracellularWater = (totalWaterLiters * 0.33).toFixed(1);
      
      intracellular.textContent = `${intracellularWater} L`;
      extracellular.textContent = `${extracellularWater} L`;
      
      // Calculate recommended daily intake (approximately 30-40 ml per kg)
      const dailyWater = (parseFloat(weightInput.value) * 0.035).toFixed(1);
      dailyIntake.textContent = `${dailyWater} L`;
      
      // Show result sections
      resultSection.style.display = 'block';
      detailedResults.style.display = 'block';
      
      showAlert('Body water percentage calculated successfully!', 'success');
    }
    
    function resetCalculator() {
      weightInput.value = '';
      heightInput.value = '';
      ageInput.value = '';
      genderSelect.value = 'male';
      activitySelect.value = 'sedentary';
      bodyFatInput.value = '';
      
      resultSection.style.display = 'none';
      detailedResults.style.display = 'none';
      
      showAlert('Calculator has been reset.', 'success');
    }
    
    function saveResult() {
      if (!waterPercentage.textContent || waterPercentage.textContent === '0%') {
        showAlert('Please calculate your body water percentage first.', 'error');
        return;
      }
      
      const result = {
        percentage: waterPercentage.textContent,
        date: new Date().toLocaleDateString(),
        timestamp: new Date().getTime()
      };
      
      // Get existing history
      let history = JSON.parse(localStorage.getItem('bodyWaterHistory') || '[]');
      
      // Add new result
      history.unshift(result);
      
      // Keep only last 10 results
      if (history.length > 10) {
        history = history.slice(0, 10);
      }
      
      // Save to localStorage
      localStorage.setItem('bodyWaterHistory', JSON.stringify(history));
      
      // Update display
      loadHistory();
      
      showAlert('Result saved to history!', 'success');
    }
    
    function loadHistory() {
      const history = JSON.parse(localStorage.getItem('bodyWaterHistory') || '[]');
      
      if (history.length === 0) {
        historySection.style.display = 'none';
        return;
      }
      
      historySection.style.display = 'block';
      historyList.innerHTML = '';
      
      history.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
          <div class="history-date">${item.date}</div>
          <div class="history-value">${item.percentage}</div>
        `;
        historyList.appendChild(historyItem);
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
      alertDiv.querySelector('.close').addEventListener('click', function() {
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
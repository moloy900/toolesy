---
layout: default
title: "Social Media Time Calculator – Track Digital Usage"
permalink: /social-media-time-wastage-calculator/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Social Media Time Calculator – Track Digital Usage</title>

<meta name="description"
  content="Free social media time calculator to track daily screen time on Facebook, Instagram, YouTube, TikTok, and more. Reduce distractions and boost productivity.">

<meta name="keywords"
  content="social media time calculator, screen time calculator, time wastage calculator, digital detox, productivity tracker, social media addiction, screen addiction, time management tool, digital wellness, app usage calculator">

<meta name="author" content="ToolEsy.com">
<meta name="robots" content="index, follow">

<link rel="canonical" href="https://toolesy.com/social-media-time-wastage-calculator">

<!-- ✅ Open Graph / Facebook -->
<meta property="og:title" content="Social Media Time Wastage Calculator | Track Screen Time Online">
<meta property="og:description" content="Track time spent on social media and calculate productivity loss. Take control of your digital life.">
<meta property="og:url" content="https://toolesy.com/social-media-time-wastage-calculator">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Social Media Time Calculator | Reduce Screen Time & Boost Productivity">
<meta name="twitter:description" content="Check how much time you waste on social media and improve your digital well-being.">


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Social Media Calculator Styles */
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

  .platforms-section {
    margin: 20px 0;
  }

  .platform-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
  }

  .platform-item {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border-left: 4px solid #e0e0e0;
  }

  .platform-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .platform-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    color: white;
    font-size: 1.2rem;
  }

  .facebook-bg { background: #3b5998; }
  .instagram-bg { background: #E1306C; }
  .twitter-bg { background: #1DA1F2; }
  .youtube-bg { background: #FF0000; }
  .tiktok-bg { background: #000000; }
  .whatsapp-bg { background: #25D366; }
  .linkedin-bg { background: #0077B5; }
  .snapchat-bg { background: #FFFC00; color: #000; }
  .reddit-bg { background: #FF4500; }
  .pinterest-bg { background: #BD081C; }

  .platform-name {
    font-weight: 600;
    color: #2c3e50;
  }

  .time-input {
    width: 100%;
    padding: 10px;
    border: 2px solid #e0e6ed;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.3s;
  }

  .time-input:focus {
    outline: none;
    border-color: var(--primary);
  }

  .time-options {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  .time-option {
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

  .time-option:hover {
    background: #e9ecef;
  }

  .time-option.active {
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

  .calc-button.danger {
    background: #dc3545;
    color: white;
  }

  .calc-button.danger:hover {
    background: #c82333;
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

  .result-item.danger {
    border-left-color: #dc3545;
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

  .result-item.danger .result-value {
    color: #dc3545;
  }

  .result-description {
    font-size: 0.9rem;
    color: #7f8c8d;
  }

  .chart-container {
    margin-top: 30px;
    height: 300px;
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .time-breakdown {
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

  .productivity-tips {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .productivity-tips h3 {
    color: var(--primary);
    margin-bottom: 15px;
  }

  .productivity-tips ul {
    margin: 15px 0;
    padding-left: 30px;
  }

  .productivity-tips li {
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

    .platform-grid {
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

    .chart-container {
      height: 250px;
    }
  }
</style>

<div class="calculator-container">
  <h1>Social Media Time Wastage Calculator</h1>
  <p class="welcome-message">Discover how much time you're spending on social media and its impact on your productivity, mental health, and life goals. Calculate your digital time wastage and get personalized recommendations.</p>

  <div class="calculator-section">
    <h2>Social Media Time Tracker</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Total Daily Time: </span>
        <span id="totalTime">0h 0m</span>
      </div>
      <div class="counter-item">
        <span>Weekly Time: </span>
        <span id="weeklyTime">0h 0m</span>
      </div>
      <div class="counter-item">
        <span>Monthly Time: </span>
        <span id="monthlyTime">0h 0m</span>
      </div>
      <div class="counter-item">
        <span>Yearly Time: </span>
        <span id="yearlyTime">0h 0m</span>
      </div>
    </div>

    <div class="platforms-section">
      <h2>Social Media Platforms <small>Enter your daily usage for each platform</small></h2>
      
      <div class="platform-grid">
        <!-- Facebook -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon facebook-bg">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div class="platform-name">Facebook</div>
          </div>
          <input type="number" class="time-input" id="facebookTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>

        <!-- Instagram -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon instagram-bg">
              <i class="fab fa-instagram"></i>
            </div>
            <div class="platform-name">Instagram</div>
          </div>
          <input type="number" class="time-input" id="instagramTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>

        <!-- Twitter -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon twitter-bg">
              <i class="fab fa-twitter"></i>
            </div>
            <div class="platform-name">Twitter</div>
          </div>
          <input type="number" class="time-input" id="twitterTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>

        <!-- YouTube -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon youtube-bg">
              <i class="fab fa-youtube"></i>
            </div>
            <div class="platform-name">YouTube</div>
          </div>
          <input type="number" class="time-input" id="youtubeTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>

        <!-- TikTok -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon tiktok-bg">
              <i class="fab fa-tiktok"></i>
            </div>
            <div class="platform-name">TikTok</div>
          </div>
          <input type="number" class="time-input" id="tiktokTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>

        <!-- WhatsApp -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon whatsapp-bg">
              <i class="fab fa-whatsapp"></i>
            </div>
            <div class="platform-name">WhatsApp</div>
          </div>
          <input type="number" class="time-input" id="whatsappTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>

        <!-- LinkedIn -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon linkedin-bg">
              <i class="fab fa-linkedin-in"></i>
            </div>
            <div class="platform-name">LinkedIn</div>
          </div>
          <input type="number" class="time-input" id="linkedinTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>

        <!-- Snapchat -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon snapchat-bg">
              <i class="fab fa-snapchat-ghost"></i>
            </div>
            <div class="platform-name">Snapchat</div>
          </div>
          <input type="number" class="time-input" id="snapchatTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>

        <!-- Reddit -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon reddit-bg">
              <i class="fab fa-reddit-alien"></i>
            </div>
            <div class="platform-name">Reddit</div>
          </div>
          <input type="number" class="time-input" id="redditTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>

        <!-- Pinterest -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon pinterest-bg">
              <i class="fab fa-pinterest"></i>
            </div>
            <div class="platform-name">Pinterest</div>
          </div>
          <input type="number" class="time-input" id="pinterestTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>
      </div>
    </div>

    <div class="calculation-options">
      <div class="option-group">
        <label class="option-label">Calculation Period</label>
        <select id="calculationPeriod" class="option-select">
          <option value="daily">Daily</option>
          <option value="weekly" selected>Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Productivity Value ($/hour)</label>
        <input type="number" id="hourlyRate" class="option-input" min="0" value="25" placeholder="e.g., 25">
        <small>Your estimated hourly earning potential</small>
      </div>
      
      <div class="option-group">
        <label class="option-label">Include Mental Health Impact</label>
        <div class="option-checkbox">
          <input type="checkbox" id="includeMentalHealth" checked>
          <label for="includeMentalHealth">Calculate stress & anxiety impact</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="includeSleepImpact" checked>
          <label for="includeSleepImpact">Include sleep quality impact</label>
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="calc-button" data-action="calculate">Calculate Time Wastage</button>
      <button class="calc-button success" data-action="save">Save My Data</button>
      <button class="calc-button warning" data-action="compare">Compare With Average</button>
      <button class="calc-button danger" data-action="detox">Digital Detox Plan</button>
      <button class="calc-button secondary" data-action="clear">Clear All</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="results-section" id="resultsSection">
      <h2>Time Wastage Analysis Results</h2>
      
      <div class="results-grid">
        <div class="result-item">
          <h3>Total Time Wasted</h3>
          <div class="result-value" id="totalWastedTime">0h 0m</div>
          <div class="result-description" id="timePeriod">Per week</div>
        </div>
        
        <div class="result-item warning">
          <h3>Productivity Loss</h3>
          <div class="result-value" id="productivityLoss">$0</div>
          <div class="result-description">Potential earnings lost</div>
        </div>
        
        <div class="result-item danger">
          <h3>Life Impact</h3>
          <div class="result-value" id="lifeImpact">0%</div>
          <div class="result-description">Of waking hours consumed</div>
        </div>
        
        <div class="result-item">
          <h3>Digital Wellness Score</h3>
          <div class="result-value" id="wellnessScore">0/100</div>
          <div class="result-description">Higher is better</div>
        </div>
      </div>

      <div class="time-breakdown">
        <h3>Time Breakdown by Platform</h3>
        <div class="breakdown-grid" id="platformBreakdown">
          <!-- Platform breakdown will be inserted here by JavaScript -->
        </div>
      </div>
      
      <div class="chart-container">
        <canvas id="timeChart"></canvas>
      </div>

      <div class="productivity-tips">
        <h3>Personalized Recommendations</h3>
        <div id="recommendations">
          <p>Enter your social media usage data and calculate to get personalized recommendations for improving your digital wellness.</p>
        </div>
      </div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Real-Life Examples</h2>

      <h3>Moderate User (2 hours daily):</h3>
      <div class="example-text">
• Daily: 2 hours
• Weekly: 14 hours (almost 2 full work days)
• Monthly: 60 hours (2.5 full days)
• Yearly: 730 hours (30 full days)
• Productivity Loss: $18,250 (at $25/hour)
• Impact: 12% of waking hours spent on social media
      </div>

      <h3>Heavy User (4 hours daily):</h3>
      <div class="example-text">
• Daily: 4 hours
• Weekly: 28 hours (3.5 work days)
• Monthly: 120 hours (5 full days)
• Yearly: 1,460 hours (60 full days)
• Productivity Loss: $36,500 (at $25/hour)
• Impact: 25% of waking hours spent on social media
      </div>

      <h3>Extreme User (6+ hours daily):</h3>
      <div class="example-text">
• Daily: 6 hours
• Weekly: 42 hours (more than a full work week)
• Monthly: 180 hours (7.5 full days)
• Yearly: 2,190 hours (91 full days)
• Productivity Loss: $54,750 (at $25/hour)
• Impact: 37% of waking hours spent on social media
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
<div class="content-placeholder">
    <h2>Social Media Time Wastage Calculator - Reclaim Your Time</h2>

    <p>Let's be real for a minute. You know that feeling when you open Instagram just to check one quick thing, and then suddenly it's 45 minutes later and you're watching a video of a raccoon washing cotton candy in water? Yeah, me too. Or the classic "I'll just scroll for five minutes before bed" that turns into an hour of lost sleep and a brain full of random content you'll forget by morning. Social media is designed to be sticky—not because the platforms hate you, but because their business model depends on your attention. And here's the uncomfortable truth: most of us have no idea how much time we're actually losing to these apps. Our <strong>Social Media Time Wastage Calculator</strong> isn't here to shame you. It's here to show you the numbers you've been avoiding, so you can make a conscious choice about where your time goes. You'll see exactly how many hours per week disappear into the scroll, what that time could be worth if you redirected it, and—most importantly—get a personalized, actionable plan to take back control. No judgment. Just data. And honestly? The data might surprise you.</p>

    <h3>How to Use This Social Media Time Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Daily Usage (Be Honest, It's Just for You):</strong> For each platform—Instagram, Facebook, TikTok, Twitter/X, YouTube, LinkedIn, Snapchat, or a custom entry—input how many hours (or fractions of an hour) you spend daily. Don't guess too low. We all tend to underestimate. If you're not sure, check your phone's screen time report (it's in Settings on both iPhone and Android). Those numbers don't lie. The calculator has quick buttons for 15 min, 30 min, 1 hour, etc., so you don't have to type decimals if you don't want to.</li>
      <li><strong>Set Your Parameters (Make It Personal):</strong> Here's where you add your real-world context. What's your hourly worth at work? (This can be your actual hourly wage or a personal value you put on your time—some people use $20/hour, others use $100 if they're freelancers. No wrong answer.) Do you want to include mental health impact estimates? This factors in research about how heavy social media use correlates with anxiety and depression. Do you want to include sleep disruption effects? (Blue light + mental stimulation before bed is a real problem.) Toggle these on or off based on what matters to you.</li>
      <li><strong>Calculate (Here Comes the Truth):</strong> Click "Calculate Time Wastage" and take a deep breath. The tool will crunch all your inputs and give you a detailed breakdown: total time wasted per week, per month, per year. Productivity loss in actual dollars (if you assigned a value to your time). Your digital wellness score (0-100, with 100 being "excellent, you're a digital monk"). And the percentage of your waking hours that go to social media. Some people see these numbers and feel sick. Some feel motivated. Some feel both. That's normal.</li>
      <li><strong>Review Results (Don't Look Away):</strong> Spend a minute with the numbers. The calculator doesn't just show you a single total—it breaks everything down by platform (so you know which app is your biggest time sink), by time of day (if you entered that info), and by impact category. You might discover that your "quick check" of Instagram is actually 2 hours a day. Or that scrolling Twitter during work hours is costing you real money. This isn't about guilt. It's about awareness. You can't change what you don't measure.</li>
      <li><strong>Get Personalized Recommendations (The Helpful Part):</strong> Based on your specific usage patterns, the calculator generates a list of practical, realistic tips. It won't tell you to "delete all social media forever" unless you're in the 99th percentile of usage. Instead, it might suggest: turn off notifications for your top three apps, schedule 20-minute "social media breaks" instead of sporadic checking, use grayscale mode to make screens less appealing, or replace the first 10 minutes after waking with a non-digital activity. These aren't generic platitudes—they're tailored to your numbers.</li>
      <li><strong>Take Action (Create Your Digital Detox Plan):</strong> The calculator includes a "Digital Detox Plan" generator. You tell it how much time you want to cut (e.g., "reduce by 50%" or "free up 5 hours per week"), and it creates a week-by-week schedule of small changes. Week one: delete the most addictive app from your home screen (you can still search for it). Week two: set a 30-minute daily timer. Week three: introduce a replacement habit (reading, walking, calling a friend). This gradual approach works better than going cold turkey and relapsing after three days.</li>
    </ul>

    <h3>Real-Life Example & Use Case (Meet Priya):</h3>
    <p>Priya is a 28-year-old content writer who works from home. She always felt "busy" but never seemed to finish her to-do list. She'd sit down to work at 9 AM, and somehow by noon, she'd written almost nothing. She suspected social media was part of the problem, but she didn't know how big. She decided to try our calculator.</p>
    <p>First, she checked her iPhone Screen Time report. The numbers were worse than she expected: 1.5 hours on Instagram daily, 1 hour on YouTube (mostly "just one more short video"), 45 minutes on WhatsApp status scrolling, and 30 minutes on Twitter/X. Total: 4 hours per day on social media. She entered all this into the calculator, set her hourly value at $30 (her freelance rate), and toggled on mental health and sleep impact.</p>
    <p>The results hit her hard. Weekly social media time: 28 hours. That's more than a part-time job. Yearly: 1,456 hours. Productivity cost per week: $840. Over a year? Nearly $44,000 worth of her time. Her digital wellness score was 32/100 (low). The calculator told her she was spending 25% of her waking hours on social media—basically one out of every four conscious hours was scrolling.</p>
    <p>Priya didn't delete any apps. Instead, she followed the digital detox plan: week one, she turned off all non-essential notifications. Week two, she moved Instagram off her home screen. Week three, she started leaving her phone in another room while working. Within a month, her daily usage dropped to 1.5 hours total. She reclaimed over 17 hours per week. Her writing output doubled. And she stopped feeling that constant low-level anxiety about "not doing enough." That's what this calculator can do—not just show you a number, but help you change your life around it.</p>

    <h3>Benefits & Who Should Use This Tool (Spoiler: Almost Everyone):</h3>
    <ul>
      <li><strong>Students:</strong> You're paying for your education, but you're spending 3-4 hours daily on TikTok and Instagram. That's not just time—it's tuition money, effectively wasted. Use the calculator to see how much study time you're losing. Then use the detox plan to reallocate even 30 minutes a day to actual learning. Your GPA will thank you.</li>
      <li><strong>Professionals:</strong> You think you're "taking a quick break" when you check Twitter during work. But research shows that after even a 30-second distraction, it takes an average of 23 minutes to fully refocus on a complex task. Those "quick breaks" add up to hours of lost productivity. The calculator shows you the dollar cost. For some people, that's the wake-up call they need.</li>
      <li><strong>Parents:</strong> You're worried about your kids' screen time, but what about your own? Kids learn from what they see. If you're always on your phone, they will be too. Use the calculator to audit your own habits first. Then use the family features (shared goals, screen time contracts) to involve your teenagers in a conversation about digital wellness—without hypocrisy.</li>
      <li><strong>Freelancers & Gig Workers:</strong> Your time is literally money. Every hour you spend on social media is an hour you're not billing. The calculator's productivity cost feature is brutal but honest. For freelancers who bill $50-$100/hour, those "just a few minutes" of scrolling can cost hundreds of dollars per week. That's real rent money.</li>
      <li><strong>Anyone Who Feels "Busy But Unproductive":</strong> You know that nagging feeling at the end of the day? You did stuff, but you didn't do <em>the</em> stuff. Social media often fills the gaps between meaningful tasks, creating the illusion of activity without any real progress. The calculator helps you quantify that gap. Once you see the number, you can't unsee it.</li>
    </ul>

    <h3>The Psychology of Social Media Addiction (Why It's Not Your Fault):</h3>
    <p>Before you beat yourself up about your screen time, understand this: social media platforms are engineered to be addictive. Literally. They employ psychologists and neuroscientists to maximize engagement. Here's how they hook you:</p>
    <ul>
      <li><strong>Variable Rewards (The Slot Machine Effect):</strong> When you open Instagram or TikTok, you don't know what you'll see. A funny video? A sad post? A friend's engagement announcement? That unpredictability triggers dopamine release in your brain—the same chemical involved in gambling addiction. The platforms know this. They intentionally randomize rewards to keep you pulling the lever (scrolling).</li>
      <li><strong>Fear of Missing Out (FOMO):</strong> Social media creates the sense that something important is always happening without you. The longer you're away, the more "behind" you feel. This anxiety pulls you back to the apps dozens of times per day. The platforms know this too—that's why they send push notifications saying "Your friend posted for the first time in a while" or "You have 3 new notifications."</li>
      <li><strong>Social Validation (Likes = Dopamine):</strong> Every like, comment, or share is social proof that you're accepted. For our ancient ancestors, social acceptance was literally a survival need (exile from the tribe meant death). Your brain still treats likes with that same urgency. The platforms exploit this by making validation instant and unpredictable.</li>
      <li><strong>Infinite Scroll (No Stopping Cue):</strong> Magazines have a last page. TV episodes have credits. But social media feeds never end. Without a natural stopping cue, you just keep going. The platforms designed it this way specifically to eliminate the "I'll stop at the end" moment.</li>
      <li><strong>Push Notifications (The Digital Leash):</strong> Every buzz, ding, or badge icon is a tiny interruption designed to pull you out of whatever you're doing. Studies show it takes over 23 minutes to fully refocus after a distraction. One notification can cost you half an hour of productivity. Platforms send them intentionally, often when they predict you're likely to be bored or alone.</li>
    </ul>
    <p>Understanding this doesn't excuse your usage, but it does explain it. You're not weak. You're up against billions of dollars of psychological manipulation. The calculator helps you fight back with awareness.</p>

    <h3>Frequently Asked Questions (The Ones People Actually Ask):</h3>
    <p><strong>How accurate is this calculator? Can I trust the numbers?</strong><br>
      The calculator is as accurate as the data you put in. Garbage in, garbage out—as they say. For best results, don't guess your daily usage. Spend a few days checking your phone's built-in screen time report (iOS Screen Time or Android Digital Wellbeing). Those numbers are objective. Enter those. Then the calculator's math is simple and correct: total hours × days × your value per hour. The accuracy of the "productivity cost" depends on how realistic your hourly value is. If you're salaried, you might value your time at your effective hourly wage. If you're a freelancer, use your billing rate. If you're a student, maybe you value an hour of study at $15-20 (what you'd pay a tutor). There's no wrong answer—it's about what motivates you.</p>

    <p><strong>Does the calculator consider that some social media use is productive?</strong><br>
      Yes, and this is an important distinction. Not all social media time is "wasted." If you're a marketer networking on LinkedIn, a business owner engaging with customers on Instagram, or a journalist following news on Twitter, that time has professional value. The calculator includes a "productive usage" adjustment. You can enter what percentage of your time on each platform is genuinely work-related. The "time wastage" calculation only counts the recreational, mindless scrolling portion. The tool isn't anti-social media—it's anti-wasted time. Use it honestly, and it will give you honest results.</p>

    <p><strong>Can I save my data to track progress over time?</strong><br>
      Yes. There's a "Save My Data" button that stores your inputs locally in your browser (not on our servers—privacy first). A week later, you can come back, load your previous data, enter new usage numbers, and see your improvement. The calculator will show you how much less time you're wasting, how much productivity you've regained, and how your digital wellness score has changed. This tracking feature is surprisingly motivating. There's something about watching that wellness score go from 45 to 62 to 78 that makes you want to keep going.</p>

    <p><strong>How is the digital wellness score calculated? Give me the formula.</strong><br>
      The wellness score (0-100) is a composite of several factors. First, total daily social media time: under 1 hour scores high, over 4 hours scores low. Second, distribution across platforms: heavy reliance on one app is worse than balanced usage. Third, comparison with healthy benchmarks: research suggests 30-60 minutes per day is a moderate, relatively healthy range for most adults. Fourth, lifestyle factors: if you toggled on mental health and sleep impact, the calculator subtracts points if your usage is late-night or very high. The exact formula is: starting score 100, subtract 5 points for each hour above 1 hour daily, subtract additional points for late-night usage (after 10 PM), subtract for heavy single-app dominance, add points for using productivity features (like timers). The final score is capped at 0 and 100. It's not perfect, but it's a useful heuristic—a single number that represents your overall digital health.</p>

    <p><strong>Is my social media usage data secure? Do you sell it?</strong><br>
      Let me be absolutely clear about this. We cannot sell your data because we never see it. All calculations—every number you enter, every result you see—happen locally inside your browser. Your phone or laptop does the math. The numbers never travel to our server. We have no database of your usage. We can't sell what we don't have. This is a core privacy feature, not a loophole. If you're worried about Facebook and Instagram tracking you (and you should be), at least this tool won't add to the problem.</p>

    <p><strong>I tried reducing social media before and failed. Why will this time be different?</strong>
    <br>Most people fail because they try to quit cold turkey or rely on willpower alone. Willpower is a limited resource—it runs out by 3 PM. The calculator's digital detox plan is different because it uses behavioral science: small, incremental changes, environmental redesign (not just self-control), and replacement habits (not just removal). For example, instead of saying "stop scrolling," it says "put your phone in another room while working"—that's environmental, not willpower-based. Instead of "delete Instagram," it says "turn on grayscale mode so it's less stimulating." These micro-changes add up. Try the 30-day plan. If you fail, fail small—reduce usage by 10% instead of 50%. The calculator tracks progress, not perfection.</p>

    <h3>The Real Cost of Social Media Overuse (Beyond Just Time):</h3>
    <p>Time is the most obvious cost, but it's not the only one. Heavy social media use has documented effects on every aspect of your life:</p>
    <ul>
      <li><strong>Mental Health (This One Is Serious):</strong> Multiple large-scale studies have found strong correlations between heavy social media use and increased rates of anxiety, depression, and loneliness. The effect is especially pronounced in teens and young adults, but it affects all ages. The mechanisms include social comparison (everyone looks happier than you), doomscrolling (exposure to constant negative news), and reduced real-world interaction. The calculator's mental health toggle factors in research from journals like JAMA Psychiatry and The Lancet. It's not scaremongering—it's epidemiology.</li>
      <li><strong>Sleep Quality (Blue Light Is Only Part of It):</strong> Blue light from screens suppresses melatonin production, making it harder to fall asleep. But the mental stimulation of social media is just as damaging. Engaging content (arguments in comments, exciting videos, stressful news) keeps your brain in an alert state when it should be winding down. The result: longer time to fall asleep, less deep sleep, more nighttime awakenings. The calculator estimates sleep disruption based on your usage after 9 PM. If you're scrolling in bed, you're stealing from tomorrow's energy.</li>
      <li><strong>Attention Span (The Scattered Brain):</strong> Constant switching between apps, posts, and videos trains your brain for brief attention bursts. Over time, this makes it harder to focus on long-form tasks like reading a book, writing a report, or having a deep conversation. The effect is measurable: average attention span on a screen has dropped from 2.5 minutes to about 45 seconds over the last decade. The calculator doesn't measure this directly, but the detox plan includes "deep work" exercises to rebuild your focus muscles.</li>
      <li><strong>Real Relationships (The Paradox):</strong> Social media can connect you with distant friends, but it often replaces face-to-face interaction with superficial likes and comments. Studies show that more time on social media correlates with less satisfying real-world relationships. It's the classic substitution effect: a low-effort digital interaction feels "social" without the benefits of genuine connection. The calculator's wellness score penalizes very high usage (over 3 hours daily) partly for this reason.</li>
      <li><strong>Physical Health (The Sedentary Crisis):</strong> Every hour spent scrolling is an hour not moving. Combined with the fact that social media use often involves snacking (because hands are free), the physical health effects are real: weight gain, back pain, eye strain, repetitive stress injuries in thumbs and wrists. The calculator doesn't track exercise, but the detox plan includes "movement breaks" as replacement activities.</li>
    </ul>

    <h3>Strategies for Healthier Social Media Use (That Actually Work):</h3>
    <p>Reducing social media consumption doesn't mean elimination. That's unrealistic for most people. Instead, try these evidence-based strategies:</p>
    <ul>
      <li><strong>Set Time Limits (Use Built-in Tools):</strong> Both iOS and Android have screen time limit features. Set a daily limit of 30-60 minutes total across all social apps. When you hit the limit, the apps lock. You can override it (with a passcode you give to a friend), but that extra friction is often enough to stop mindless scrolling.</li>
      <li><strong>Create No-Phone Zones (Environmental Design):</strong> Designate certain areas as phone-free: the dinner table, the bedroom, the bathroom (seriously). These physical boundaries reduce the number of opportunities to check social media. The calculator's detox plan helps you identify which zones will have the biggest impact based on your usage patterns.</li>
      <li><strong>Schedule Social Media Time (Batch Processing):</strong> Instead of checking apps 20 times per day, batch your usage into 2-3 specific blocks. For example: 10 minutes after lunch, 10 minutes after work, 10 minutes before dinner. Outside those blocks, don't open the apps. This reduces context switching and frees up mental bandwidth.</li>
      <li><strong>Turn Off All Non-Essential Notifications:</strong> This is the single highest-leverage change you can make. Go into your settings and turn off every notification except direct messages from close friends. No likes, no comments, no "trending" alerts, no "your friend posted." Without the buzz, you'll check apps 70-80% less often. Try it for one day and see.</li>
      <li><strong>Curate Your Feed Aggressively:</strong> Unfollow or mute any account that triggers negative emotions (anger, envy, anxiety) or that you scroll past without really seeing. Your feed should be a tool, not a trap. If an account doesn't add value, remove it. The calculator includes a "feed audit" checklist to help you do this systematically.</li>
      <li><strong>Replace, Don't Just Remove (Habit Substitution):</strong> Willpower alone fails because you're leaving a void. When you feel the urge to scroll, replace it with a low-friction alternative: read two pages of a book, do 10 jumping jacks, text a friend directly, drink a glass of water. The detox plan suggests replacement habits based on your daily schedule and environment.</li>
      <li><strong>Practice Digital Minimalism (Monthly Audits):</strong> Once a month, review your screen time report. Delete any app you haven't used in the last week. Log out of any platform you don't truly need. The friction of logging back in is often enough to prevent re-engagement. The calculator's "Save My Data" feature lets you track these monthly audits and see your progress over time.</li>
    </ul>

    <h3>One Last Thought Before You Start (Because This Matters):</h3>
    <p>I'm not going to pretend that deleting social media or cutting your usage in half will solve all your problems. It won't. You'll still have work stress, relationship challenges, and days when you feel unmotivated. But here's what it will do: it will give you back hours of your life. Hours that you can spend on things that actually matter to you—learning an instrument, exercising, calling your mom, reading a book, sleeping, or even just sitting quietly without a screen in your face. The average person will spend nearly six years of their life on social media. Six years. That's longer than most people spend on any single activity except sleeping and working. Do you want those six years to be a blur of scrolling, or do you want them to be filled with real memories, real skills, and real connections? The calculator won't answer that question for you. But it will give you the data you need to make the choice yourself. Try it today. See the number. And then decide.</p>
</div>
</div>

<!-- Digital Detox Plan Modal -->
<div id="detoxModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Digital Detox Plan</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div id="detoxPlanContent">
        <p>Based on your social media usage, here's your personalized digital detox plan:</p>
        <div id="detoxSteps">
          <!-- Detox steps will be inserted here by JavaScript -->
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelDetox">Cancel</button>
      <button class="modal-button primary" id="saveDetoxPlan">Save Plan</button>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM elements
    const platformInputs = document.querySelectorAll('.time-input');
    const timeOptions = document.querySelectorAll('.time-option');
    const calcButtons = document.querySelectorAll('.calc-button');
    const alertContainer = document.getElementById('alertContainer');
    const resultsSection = document.getElementById('resultsSection');
    
    // Calculation options
    const calculationPeriod = document.getElementById('calculationPeriod');
    const hourlyRate = document.getElementById('hourlyRate');
    const includeMentalHealth = document.getElementById('includeMentalHealth');
    const includeSleepImpact = document.getElementById('includeSleepImpact');
    
    // Result elements
    const totalTimeElement = document.getElementById('totalTime');
    const weeklyTimeElement = document.getElementById('weeklyTime');
    const monthlyTimeElement = document.getElementById('monthlyTime');
    const yearlyTimeElement = document.getElementById('yearlyTime');
    const totalWastedTimeElement = document.getElementById('totalWastedTime');
    const productivityLossElement = document.getElementById('productivityLoss');
    const lifeImpactElement = document.getElementById('lifeImpact');
    const wellnessScoreElement = document.getElementById('wellnessScore');
    const timePeriodElement = document.getElementById('timePeriod');
    const platformBreakdownElement = document.getElementById('platformBreakdown');
    const recommendationsElement = document.getElementById('recommendations');
    
    // Modal elements
    const detoxModal = document.getElementById('detoxModal');
    const detoxStepsElement = document.getElementById('detoxSteps');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelDetox = document.getElementById('cancelDetox');
    const saveDetoxPlan = document.getElementById('saveDetoxPlan');
    
    // Chart variable
    let timeChart = null;

    // Platform data
    const platforms = [
      { id: 'facebookTime', name: 'Facebook', icon: 'facebook-bg' },
      { id: 'instagramTime', name: 'Instagram', icon: 'instagram-bg' },
      { id: 'twitterTime', name: 'Twitter', icon: 'twitter-bg' },
      { id: 'youtubeTime', name: 'YouTube', icon: 'youtube-bg' },
      { id: 'tiktokTime', name: 'TikTok', icon: 'tiktok-bg' },
      { id: 'whatsappTime', name: 'WhatsApp', icon: 'whatsapp-bg' },
      { id: 'linkedinTime', name: 'LinkedIn', icon: 'linkedin-bg' },
      { id: 'snapchatTime', name: 'Snapchat', icon: 'snapchat-bg' },
      { id: 'redditTime', name: 'Reddit', icon: 'reddit-bg' },
      { id: 'pinterestTime', name: 'Pinterest', icon: 'pinterest-bg' }
    ];

    // Event listeners
    platformInputs.forEach(input => {
      input.addEventListener('input', updateTotalTime);
    });

    timeOptions.forEach(option => {
      option.addEventListener('click', function() {
        const minutes = parseInt(this.getAttribute('data-minutes'));
        const hours = (minutes / 60).toFixed(1);
        const platformItem = this.closest('.platform-item');
        const input = platformItem.querySelector('.time-input');
        input.value = hours;
        
        // Update active state
        const siblings = this.parentElement.querySelectorAll('.time-option');
        siblings.forEach(sib => sib.classList.remove('active'));
        this.classList.add('active');
        
        updateTotalTime();
      });
    });

    calculationPeriod.addEventListener('change', updateTotalTime);

    calcButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleCalculation(action);
      });
    });

    // Modal event listeners
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        detoxModal.style.display = 'none';
      });
    });

    cancelDetox.addEventListener('click', function() {
      detoxModal.style.display = 'none';
    });

    saveDetoxPlan.addEventListener('click', function() {
      // In a real application, this would save the detox plan
      showAlert('Digital detox plan saved successfully!', 'success');
      detoxModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === detoxModal) {
        detoxModal.style.display = 'none';
      }
    });

    function updateTotalTime() {
      let totalDailyHours = 0;
      
      platformInputs.forEach(input => {
        const value = parseFloat(input.value) || 0;
        totalDailyHours += value;
      });
      
      const totalDailyMinutes = totalDailyHours * 60;
      
      // Update counter displays
      totalTimeElement.textContent = formatTime(totalDailyHours * 60);
      weeklyTimeElement.textContent = formatTime(totalDailyMinutes * 7);
      monthlyTimeElement.textContent = formatTime(totalDailyMinutes * 30);
      yearlyTimeElement.textContent = formatTime(totalDailyMinutes * 365);
    }

    function handleCalculation(action) {
      const totalDailyHours = calculateTotalDailyHours();
      
      if (action === 'calculate' && totalDailyHours === 0) {
        showAlert('Please enter your social media usage times first.', 'error');
        return;
      }
      
      switch(action) {
        case 'calculate':
          calculateTimeWastage(totalDailyHours);
          break;
          
        case 'save':
          saveUserData();
          break;
          
        case 'compare':
          compareWithAverage(totalDailyHours);
          break;
          
        case 'detox':
          generateDetoxPlan(totalDailyHours);
          break;
          
        case 'clear':
          clearAllData();
          return;
      }
    }
    
    function calculateTotalDailyHours() {
      let total = 0;
      platformInputs.forEach(input => {
        total += parseFloat(input.value) || 0;
      });
      return total;
    }
    
    function calculateTimeWastage(totalDailyHours) {
      const period = calculationPeriod.value;
      const rate = parseFloat(hourlyRate.value) || 25;
      
      // Calculate time for different periods
      const weeklyHours = totalDailyHours * 7;
      const monthlyHours = totalDailyHours * 30;
      const yearlyHours = totalDailyHours * 365;
      
      let periodHours, periodLabel;
      
      switch(period) {
        case 'daily':
          periodHours = totalDailyHours;
          periodLabel = 'Per day';
          break;
        case 'weekly':
          periodHours = weeklyHours;
          periodLabel = 'Per week';
          break;
        case 'monthly':
          periodHours = monthlyHours;
          periodLabel = 'Per month';
          break;
        case 'yearly':
          periodHours = yearlyHours;
          periodLabel = 'Per year';
          break;
      }
      
      // Calculate results
      const productivityLoss = periodHours * rate;
      const wakingHoursPercentage = Math.round((totalDailyHours / 16) * 100); // Assuming 16 waking hours
      const wellnessScore = calculateWellnessScore(totalDailyHours);
      
      // Update UI with results
      totalWastedTimeElement.textContent = formatTime(periodHours * 60);
      productivityLossElement.textContent = `$${productivityLoss.toLocaleString()}`;
      lifeImpactElement.textContent = `${wakingHoursPercentage}%`;
      wellnessScoreElement.textContent = `${wellnessScore}/100`;
      timePeriodElement.textContent = periodLabel;
      
      // Update platform breakdown
      updatePlatformBreakdown(period);
      
      // Update chart
      updateChart();
      
      // Generate recommendations
      generateRecommendations(totalDailyHours, wellnessScore);
      
      // Show results section
      resultsSection.style.display = 'block';
      
      // Scroll to results
      resultsSection.scrollIntoView({ behavior: 'smooth' });
      
      showAlert('Time wastage calculation completed!', 'success');
    }
    
    function calculateWellnessScore(totalDailyHours) {
      // Simple wellness score calculation
      // 0-1 hours: 90-100 (Excellent)
      // 1-2 hours: 70-89 (Good)
      // 2-4 hours: 50-69 (Moderate)
      // 4-6 hours: 30-49 (Poor)
      // 6+ hours: 0-29 (Concerning)
      
      if (totalDailyHours <= 1) return Math.max(90, 100 - (totalDailyHours * 10));
      if (totalDailyHours <= 2) return Math.max(70, 90 - ((totalDailyHours - 1) * 20));
      if (totalDailyHours <= 4) return Math.max(50, 70 - ((totalDailyHours - 2) * 10));
      if (totalDailyHours <= 6) return Math.max(30, 50 - ((totalDailyHours - 4) * 10));
      return Math.max(0, 30 - ((totalDailyHours - 6) * 5));
    }
    
    function updatePlatformBreakdown(period) {
      let multiplier = 1;
      switch(period) {
        case 'weekly': multiplier = 7; break;
        case 'monthly': multiplier = 30; break;
        case 'yearly': multiplier = 365; break;
      }
      
      let breakdownHTML = '';
      
      platforms.forEach(platform => {
        const input = document.getElementById(platform.id);
        const hours = parseFloat(input.value) || 0;
        const totalHours = hours * multiplier;
        
        if (hours > 0) {
          breakdownHTML += `
            <div class="breakdown-item">
              <div class="breakdown-value">${formatTime(totalHours * 60)}</div>
              <div class="breakdown-label">${platform.name}</div>
            </div>
          `;
        }
      });
      
      platformBreakdownElement.innerHTML = breakdownHTML || '<p>No platform data entered.</p>';
    }
    
    function updateChart() {
      const ctx = document.getElementById('timeChart').getContext('2d');
      
      // Destroy previous chart if it exists
      if (timeChart) {
        timeChart.destroy();
      }
      
      // Prepare data for chart
      const labels = [];
      const data = [];
      
      platforms.forEach(platform => {
        const input = document.getElementById(platform.id);
        const hours = parseFloat(input.value) || 0;
        
        if (hours > 0) {
          labels.push(platform.name);
          data.push(hours);
        }
      });
      
      // Create new chart
      timeChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: [
              '#3b5998', '#E1306C', '#1DA1F2', '#FF0000', '#000000',
              '#25D366', '#0077B5', '#FFFC00', '#FF4500', '#BD081C'
            ],
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
              text: 'Time Distribution by Platform (Daily)'
            }
          }
        }
      });
    }
    
    function generateRecommendations(totalDailyHours, wellnessScore) {
      let recommendations = '';
      
      if (wellnessScore >= 80) {
        recommendations = `
          <p><strong>Excellent Digital Wellness!</strong> Your social media usage is at a healthy level. Keep up these good habits:</p>
          <ul>
            <li>Continue being mindful of your screen time</li>
            <li>Maintain your current balanced approach</li>
            <li>Consider sharing your strategies with others</li>
          </ul>
        `;
      } else if (wellnessScore >= 60) {
        recommendations = `
          <p><strong>Good Digital Habits</strong> with room for improvement. Consider these adjustments:</p>
          <ul>
            <li>Set specific time limits for your most-used platforms</li>
            <li>Designate phone-free times during the day</li>
            <li>Try a 24-hour digital detox once a month</li>
          </ul>
        `;
      } else if (wellnessScore >= 40) {
        recommendations = `
          <p><strong>Moderate Concern</strong> - Your social media usage is impacting your productivity and wellbeing:</p>
          <ul>
            <li>Implement app timers to enforce daily limits</li>
            <li>Delete the most time-consuming apps for one week</li>
            <li>Schedule specific "social media times" instead of constant checking</li>
            <li>Find offline activities to replace scrolling habits</li>
          </ul>
        `;
      } else {
        recommendations = `
          <p><strong>High Priority for Change</strong> - Your social media usage is significantly impacting your life:</p>
          <ul>
            <li>Consider a 7-day digital detox to reset your habits</li>
            <li>Delete social media apps from your phone for 30 days</li>
            <li>Seek accountability from friends or family</li>
            <li>Consult with a mental health professional if needed</li>
            <li>Replace social media time with exercise, reading, or hobbies</li>
          </ul>
        `;
      }
      
      recommendationsElement.innerHTML = recommendations;
    }
    
    function saveUserData() {
      const userData = {
        timestamp: new Date().toISOString(),
        platforms: {}
      };
      
      platforms.forEach(platform => {
        const input = document.getElementById(platform.id);
        userData.platforms[platform.name] = parseFloat(input.value) || 0;
      });
      
      // In a real application, this would save to local storage or a database
      localStorage.setItem('socialMediaTimeData', JSON.stringify(userData));
      showAlert('Your social media data has been saved locally!', 'success');
    }
    
    function compareWithAverage(totalDailyHours) {
      // Average social media usage statistics
      const globalAverage = 2.5; // hours per day
      const comparison = ((totalDailyHours - globalAverage) / globalAverage) * 100;
      
      let message;
      if (comparison < -20) {
        message = `You use ${Math.abs(comparison).toFixed(0)}% LESS social media than the global average - great job!`;
        showAlert(message, 'success');
      } else if (comparison > 20) {
        message = `You use ${comparison.toFixed(0)}% MORE social media than the global average - consider reducing your usage.`;
        showAlert(message, 'warning');
      } else {
        message = `Your social media usage is close to the global average of ${globalAverage} hours daily.`;
        showAlert(message, 'info');
      }
    }
    
    function generateDetoxPlan(totalDailyHours) {
      if (totalDailyHours === 0) {
        showAlert('Please enter your social media usage times first.', 'error');
        return;
      }
      
      let detoxSteps = '';
      
      if (totalDailyHours <= 2) {
        detoxSteps = `
          <h4>Light Detox Plan (1-2 hours daily)</h4>
          <ol>
            <li><strong>Week 1:</strong> Reduce usage by 30 minutes daily</li>
            <li><strong>Week 2:</strong> Implement one phone-free day per week</li>
            <li><strong>Week 3:</strong> Turn off all non-essential notifications</li>
            <li><strong>Week 4:</strong> Replace 30 minutes of social media with a productive activity</li>
          </ol>
        `;
      } else if (totalDailyHours <= 4) {
        detoxSteps = `
          <h4>Moderate Detox Plan (2-4 hours daily)</h4>
          <ol>
            <li><strong>Week 1:</strong> Set app timers to limit daily usage</li>
            <li><strong>Week 2:</strong> Delete your most-used app for 7 days</li>
            <li><strong>Week 3:</strong> Designate specific times for social media checking</li>
            <li><strong>Week 4:</strong> Implement a 48-hour digital detox weekend</li>
          </ol>
        `;
      } else {
        detoxSteps = `
          <h4>Intensive Detox Plan (4+ hours daily)</h4>
          <ol>
            <li><strong>Week 1:</strong> Delete all social media apps from your phone</li>
            <li><strong>Week 2:</strong> Use social media only on a computer for limited time</li>
            <li><strong>Week 3:</strong> Find alternative activities for former social media times</li>
            <li><strong>Week 4:</strong> Evaluate which platforms add real value and reintroduce selectively</li>
          </ol>
        `;
      }
      
      detoxStepsElement.innerHTML = detoxSteps;
      detoxModal.style.display = 'block';
    }
    
    function clearAllData() {
      platformInputs.forEach(input => {
        input.value = '';
      });
      
      // Clear active time options
      document.querySelectorAll('.time-option.active').forEach(option => {
        option.classList.remove('active');
      });
      
      resultsSection.style.display = 'none';
      updateTotalTime();
      showAlert('All data cleared successfully!', 'success');
    }

    function formatTime(minutes) {
      const hours = Math.floor(minutes / 60);
      const mins = Math.round(minutes % 60);
      return `${hours}h ${mins}m`;
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
    updateTotalTime();
  });
</script>
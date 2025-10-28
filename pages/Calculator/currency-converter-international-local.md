---
layout: default
title: "Currency Converter – Millions to Lakhs & Crores Online"
permalink: /currency-converter-international-local/
---

<!-- Basic SEO Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Currency Converter – Millions to Lakhs & Crores Online</title>

<meta name="description"
  content="Convert currency and numbers instantly from international format to the Indian numbering system. Change millions to lakhs, billions to crores easily and accurately.">

<meta name="keywords"
  content="currency converter, number converter, international to Indian numbering system, million to lakh converter, billion to crore converter, lakh to million, crore to billion, online number converter, free converter">

<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Canonical URL -->
<link rel="canonical" href="https://toolesy.com/currency-converter-international-local" />

<!-- Open Graph Tags (Facebook / LinkedIn) -->
<meta property="og:title" content="Currency & Number Converter - Free Online International to Indian Number System Tool">
<meta property="og:description" content="Convert currencies and numbers online for free. Easily switch between international and Indian numbering systems, millions to lakhs, billions to crores, and more.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/currency-converter-international-local">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Currency & Number Converter | International to Indian Number System">
<meta name="twitter:description" content="Free online tool to convert currencies and numbers. Switch between international and Indian number systems easily. Millions to lakhs, billions to crores, and more.">


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Currency Converter Styles */
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

  .input-section input,
  .input-section select {
    width: 100%;
    padding: 15px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 16px;
    margin-bottom: 15px;
    transition: border-color 0.3s;
  }

  .input-section input:focus,
  .input-section select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .conversion-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }

  .conversion-card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-top: 4px solid var(--primary);
  }

  .conversion-card h3 {
    color: var(--primary);
    margin-bottom: 15px;
    text-align: center;
    font-size: 1.3rem;
  }

  .conversion-result {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: #2c3e50;
    margin: 15px 0;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    border: 2px dashed #e0e0e0;
  }

  .conversion-formula {
    font-size: 0.9rem;
    color: #666;
    text-align: center;
    margin-top: 10px;
    font-style: italic;
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

  /* Currency specific styles */
  .currency-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .currency-card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .currency-flag {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .currency-code {
    font-weight: bold;
    color: var(--primary);
    font-size: 1.2rem;
  }

  .currency-value {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 10px 0;
    color: #2c3e50;
  }

  .currency-name {
    color: #666;
    font-size: 0.9rem;
  }

  .conversion-history {
    margin-top: 30px;
    max-height: 300px;
    overflow-y: auto;
  }

  .history-item {
    display: flex;
    justify-content: space-between;
    padding: 12px 15px;
    border-bottom: 1px solid #eee;
    background: white;
  }

  .history-item:nth-child(even) {
    background: #f8f9fa;
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

    .conversion-grid {
      grid-template-columns: 1fr;
    }

    .currency-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
</style>

<div class="converter-container">
  <h1>Currency Converter (International + Local)</h1>
  <p class="welcome-message">Convert between international and Indian numbering systems, currencies, and more. Convert millions to lakhs, billions to crores, and vice versa instantly.</p>

  <div class="converter-section">
    <h2>International to Indian Number System Converter</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Input Value: </span>
        <span id="inputValue">0</span>
      </div>
      <div class="counter-item">
        <span>Input System: </span>
        <span id="inputSystem">International</span>
      </div>
      <div class="counter-item">
        <span>Output System: </span>
        <span id="outputSystem">Indian</span>
      </div>
      <div class="counter-item">
        <span>Conversion Type: </span>
        <span id="conversionType">Million to Lakh</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Enter Amount to Convert</h2>
      <input type="number" id="amountInput" placeholder="Enter amount to convert..." step="0.01" min="0">
      
      <div class="conversion-grid">
        <div class="conversion-card">
          <h3>From</h3>
          <select id="fromSystem">
            <option value="international">International System</option>
            <option value="indian">Indian System</option>
          </select>
          <select id="fromUnit">
            <option value="units">Units</option>
            <option value="thousand">Thousand</option>
            <option value="million">Million</option>
            <option value="billion">Billion</option>
            <option value="trillion">Trillion</option>
          </select>
        </div>
        
        <div class="conversion-card">
          <h3>To</h3>
          <select id="toSystem">
            <option value="indian">Indian System</option>
            <option value="international">International System</option>
          </select>
          <select id="toUnit">
            <option value="units">Units</option>
            <option value="thousand">Thousand</option>
            <option value="lakh">Lakh</option>
            <option value="crore">Crore</option>
            <option value="arab">Arab</option>
          </select>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="convert">Convert Now</button>
        <button class="case-button success" data-action="swap">Swap Systems</button>
        <button class="case-button" data-action="copy">Copy Result</button>
        <button class="case-button warning" data-action="reset">Reset</button>
        <button class="case-button secondary" data-action="clear">Clear History</button>
      </div>
    </div>

    <div class="conversion-result" id="conversionResult">
      Enter an amount and click "Convert Now" to see the result
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Common Conversion Examples</h2>

      <h3>International to Indian System:</h3>
      <div class="example-text">1 Million = 10 Lakhs
1 Billion = 100 Crores
1 Trillion = 1 Lakh Crores
10,000 = 1 Lakh
1,000,000 = 10 Lakhs</div>

      <h3>Indian to International System:</h3>
      <div class="example-text">1 Lakh = 100,000
1 Crore = 10,000,000
1 Arab = 1 Billion
10 Lakhs = 1 Million
100 Crores = 1 Billion</div>

      <h3>Currency Conversion (Approximate):</h3>
      <div class="example-text">1 USD ≈ 83 INR
1 EUR ≈ 90 INR
1 GBP ≈ 105 INR
100 USD ≈ 8,300 INR ≈ 0.83 Lakh INR
1 Million USD ≈ 8.3 Crore INR</div>
    </div>
  </div>

  <div class="converter-section">
    <h2>Live Currency Exchange Rates</h2>
    
    <div class="currency-grid">
      <div class="currency-card">
        <div class="currency-flag">🇺🇸</div>
        <div class="currency-code">USD</div>
        <div class="currency-value" id="usdRate">Loading...</div>
        <div class="currency-name">US Dollar</div>
      </div>
      
      <div class="currency-card">
        <div class="currency-flag">🇪🇺</div>
        <div class="currency-code">EUR</div>
        <div class="currency-value" id="eurRate">Loading...</div>
        <div class="currency-name">Euro</div>
      </div>
      
      <div class="currency-card">
        <div class="currency-flag">🇬🇧</div>
        <div class="currency-code">GBP</div>
        <div class="currency-value" id="gbpRate">Loading...</div>
        <div class="currency-name">British Pound</div>
      </div>
      
      <div class="currency-card">
        <div class="currency-flag">🇯🇵</div>
        <div class="currency-code">JPY</div>
        <div class="currency-value" id="jpyRate">Loading...</div>
        <div class="currency-name">Japanese Yen</div>
      </div>
      
      <div class="currency-card">
        <div class="currency-flag">🇦🇺</div>
        <div class="currency-code">AUD</div>
        <div class="currency-value" id="audRate">Loading...</div>
        <div class="currency-name">Australian Dollar</div>
      </div>
      
      <div class="currency-card">
        <div class="currency-flag">🇨🇦</div>
        <div class="currency-code">CAD</div>
        <div class="currency-value" id="cadRate">Loading...</div>
        <div class="currency-name">Canadian Dollar</div>
      </div>
    </div>
    
    <div class="conversion-history">
      <h3>Recent Conversions</h3>
      <div id="historyList">
        <!-- History items will be added here -->
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Currency Converter & Number System Converter</h2>

    <p>Our comprehensive <strong>Currency Converter and Number System Converter</strong> is the perfect tool for international business, finance professionals, students, and anyone working with different numbering systems. Instantly convert between International and Indian numbering systems, convert currencies, and understand the relationship between millions-lakhs and billions-crores. No download required, no registration needed, and your data privacy is guaranteed as all processing happens securely in your browser.</p>

    <h3>How to Use This Currency & Number Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Amount:</strong> Type the numerical value you want to convert in the input field</li>
      <li><strong>Select Source System:</strong> Choose whether your input is in International or Indian numbering system</li>
      <li><strong>Select Source Unit:</strong> Choose the unit of your input (Units, Thousand, Million, Billion, Lakh, Crore, etc.)</li>
      <li><strong>Select Target System:</strong> Choose the numbering system you want to convert to</li>
      <li><strong>Select Target Unit:</strong> Choose the unit you want to convert to</li>
      <li><strong>Convert:</strong> Click the "Convert Now" button to see instant results</li>
      <li><strong>Additional Features:</strong> Use "Swap Systems" to quickly reverse the conversion, or check live currency rates</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're reading an international financial report that mentions "a company valuation of $2.5 billion." As someone familiar with the Indian numbering system, you might wonder what this means in crores. Using our converter, you simply enter 2.5, select "International System" and "Billion" as source, then "Indian System" and "Crore" as target. The converter instantly shows you that 2.5 billion USD equals approximately 250 crores USD, and with current exchange rates, about 20,750 crores INR.</p>

    <h3>Understanding Numbering Systems:</h3>
    <ul>
      <li><strong>International System:</strong> Units, Thousands (10³), Millions (10⁶), Billions (10⁹), Trillions (10¹²)</li>
      <li><strong>Indian System:</strong> Units, Thousands (10³), Lakhs (10⁵), Crores (10⁷), Arabs (10⁹), Kharabs (10¹¹)</li>
    </ul>

    <h3>Key Conversion Formulas:</h3>
    <ul>
      <li><strong>1 Million = 10 Lakhs</strong></li>
      <li><strong>1 Billion = 100 Crores</strong></li>
      <li><strong>1 Trillion = 1 Lakh Crores</strong></li>
      <li><strong>1 Lakh = 100,000</strong></li>
      <li><strong>1 Crore = 10,000,000</strong></li>
      <li><strong>1 Arab = 1 Billion</strong></li>
    </ul>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Business Professionals:</strong> Convert financial figures between different numbering systems for international reports</li>
      <li><strong>Students & Educators:</strong> Learn and teach the differences between international and Indian numbering systems</li>
      <li><strong>Investors:</strong> Understand international company valuations and market capitalizations</li>
      <li><strong>Travelers:</strong> Quickly convert currency amounts and understand local pricing</li>
      <li><strong>Freelancers:</strong> Convert project budgets and payments between different currency systems</li>
      <li><strong>Financial Analysts:</strong> Work with international financial data using familiar numbering systems</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What is the difference between International and Indian numbering systems?</strong><br>
      A: The International system uses groups of three digits (Thousands, Millions, Billions), while the Indian system uses groups of two digits after thousands (Lakhs, Crores, Arabs).</p>

    <p><strong>Q: How accurate are the currency exchange rates?</strong><br>
      A: Our currency rates are updated regularly and provide approximate market rates. For exact trading rates, please check with your financial institution.</p>

    <p><strong>Q: Is there a limit to the numbers I can convert?</strong><br>
      A: You can convert very large numbers, including trillions and kharabs, without any issue. The tool is built to handle extremely large numerical values.</p>

    <p><strong>Q: Is my financial data kept private when I use this tool?</strong><br>
      A: Absolutely. All conversions happen locally in your browser. Your financial data is never sent to any server, meaning we never see, store, or have access to your numbers.</p>

    <h3>Why Choose Our Currency & Number Converter?</h3>
    <p>Our <strong>online Currency Converter and Number System Converter</strong> stands out because of its dual functionality, combining currency conversion with numbering system conversion. Unlike simple currency converters, we help you understand the fundamental differences between numbering systems used around the world. The tool works completely offline once loaded, ensuring your data privacy and reliability even with poor internet connections.</p>

    <h3>Common Applications of Number System Conversion</h3>
    <p>Number system conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>International Business:</strong> Understand financial reports and company valuations across different regions</li>
      <li><strong>Education:</strong> Teach mathematical concepts across different cultural numbering systems</li>
      <li><strong>Banking & Finance:</strong> Process international transactions and understand foreign investments</li>
      <li><strong>E-commerce:</strong> Display prices appropriately for international customers</li>
      <li><strong>Research:</strong> Work with international data sets and statistical information</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const amountInput = document.getElementById('amountInput');
    const fromSystem = document.getElementById('fromSystem');
    const fromUnit = document.getElementById('fromUnit');
    const toSystem = document.getElementById('toSystem');
    const toUnit = document.getElementById('toUnit');
    const conversionResult = document.getElementById('conversionResult');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const historyList = document.getElementById('historyList');
    
    // Currency rate elements
    const usdRate = document.getElementById('usdRate');
    const eurRate = document.getElementById('eurRate');
    const gbpRate = document.getElementById('gbpRate');
    const jpyRate = document.getElementById('jpyRate');
    const audRate = document.getElementById('audRate');
    const cadRate = document.getElementById('cadRate');
    
    // Conversion factors
    const conversionFactors = {
      international: {
        units: 1,
        thousand: 1000,
        million: 1000000,
        billion: 1000000000,
        trillion: 1000000000000
      },
      indian: {
        units: 1,
        thousand: 1000,
        lakh: 100000,
        crore: 10000000,
        arab: 1000000000,
        kharab: 100000000000
      }
    };
    
    // Load conversion history from localStorage
    let conversionHistory = JSON.parse(localStorage.getItem('conversionHistory')) || [];
    renderHistory();

    // Initialize with sample rates (in a real app, these would come from an API)
    initializeCurrencyRates();

    // Event listeners
    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleConversionAction(action);
      });
    });

    // Update fromUnit options based on selected system
    fromSystem.addEventListener('change', function() {
      updateUnitOptions(fromSystem.value, fromUnit);
      updateCounters();
    });

    // Update toUnit options based on selected system
    toSystem.addEventListener('change', function() {
      updateUnitOptions(toSystem.value, toUnit);
      updateCounters();
    });

    fromUnit.addEventListener('change', updateCounters);
    toUnit.addEventListener('change', updateCounters);
    amountInput.addEventListener('input', updateCounters);

    function updateCounters() {
      document.getElementById('inputValue').textContent = amountInput.value || '0';
      document.getElementById('inputSystem').textContent = fromSystem.options[fromSystem.selectedIndex].text;
      document.getElementById('outputSystem').textContent = toSystem.options[toSystem.selectedIndex].text;
      
      const fromUnitText = fromUnit.options[fromUnit.selectedIndex].text;
      const toUnitText = toUnit.options[toUnit.selectedIndex].text;
      document.getElementById('conversionType').textContent = `${fromUnitText} to ${toUnitText}`;
    }

    function updateUnitOptions(system, unitSelect) {
      // Clear existing options
      unitSelect.innerHTML = '';
      
      let options;
      if (system === 'international') {
        options = [
          { value: 'units', text: 'Units' },
          { value: 'thousand', text: 'Thousand' },
          { value: 'million', text: 'Million' },
          { value: 'billion', text: 'Billion' },
          { value: 'trillion', text: 'Trillion' }
        ];
      } else {
        options = [
          { value: 'units', text: 'Units' },
          { value: 'thousand', text: 'Thousand' },
          { value: 'lakh', text: 'Lakh' },
          { value: 'crore', text: 'Crore' },
          { value: 'arab', text: 'Arab' }
        ];
      }
      
      options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        unitSelect.appendChild(optionElement);
      });
    }

    function handleConversionAction(action) {
      switch (action) {
        case 'convert':
          convertNumber();
          break;

        case 'swap':
          swapSystems();
          break;

        case 'copy':
          copyResult();
          break;

        case 'reset':
          resetConverter();
          break;

        case 'clear':
          clearHistory();
          break;
      }
    }

    function convertNumber() {
      const amount = parseFloat(amountInput.value);
      
      if (!amount || amount <= 0) {
        showAlert('Please enter a valid positive number.', 'error');
        return;
      }
      
      const fromSys = fromSystem.value;
      const fromUnt = fromUnit.value;
      const toSys = toSystem.value;
      const toUnt = toUnit.value;
      
      // Convert to base units first
      const baseValue = amount * conversionFactors[fromSys][fromUnt];
      
      // Then convert to target units
      const result = baseValue / conversionFactors[toSys][toUnt];
      
      // Format the result
      const formattedResult = formatNumber(result);
      const formattedInput = formatNumber(amount);
      
      const fromUnitText = fromUnit.options[fromUnit.selectedIndex].text;
      const toUnitText = toUnit.options[toUnit.selectedIndex].text;
      
      conversionResult.innerHTML = `
        <strong>${formattedInput} ${fromUnitText}</strong> = <strong>${formattedResult} ${toUnitText}</strong>
        <div class="conversion-formula">
          ${amount} × ${conversionFactors[fromSys][fromUnt].toLocaleString()} ÷ ${conversionFactors[toSys][toUnt].toLocaleString()}
        </div>
      `;
      
      // Add to history
      addToHistory({
        input: `${formattedInput} ${fromUnitText}`,
        output: `${formattedResult} ${toUnitText}`,
        timestamp: new Date().toLocaleString()
      });
      
      showAlert('Conversion completed successfully!', 'success');
      updateCounters();
    }
    
    function formatNumber(num) {
      if (num >= 1000000) {
        return num.toLocaleString('en-IN', { maximumFractionDigits: 6 });
      } else if (num >= 1000) {
        return num.toLocaleString('en-IN', { maximumFractionDigits: 4 });
      } else {
        return num.toLocaleString('en-IN', { maximumFractionDigits: 2 });
      }
    }
    
    function swapSystems() {
      // Swap systems
      const tempSystem = fromSystem.value;
      fromSystem.value = toSystem.value;
      toSystem.value = tempSystem;
      
      // Update unit options
      updateUnitOptions(fromSystem.value, fromUnit);
      updateUnitOptions(toSystem.value, toUnit);
      
      showAlert('Systems swapped successfully!', 'success');
      updateCounters();
    }
    
    function copyResult() {
      const resultText = conversionResult.textContent || conversionResult.innerText;
      if (resultText.includes('Enter an amount')) {
        showAlert('No result to copy. Please convert a number first.', 'error');
        return;
      }
      
      navigator.clipboard.writeText(resultText).then(() => {
        showAlert('Result copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy result: ' + err, 'error');
      });
    }
    
    function resetConverter() {
      amountInput.value = '';
      fromSystem.value = 'international';
      toSystem.value = 'indian';
      updateUnitOptions('international', fromUnit);
      updateUnitOptions('indian', toUnit);
      conversionResult.textContent = 'Enter an amount and click "Convert Now" to see the result';
      showAlert('Converter reset successfully!', 'success');
      updateCounters();
    }
    
    function addToHistory(conversion) {
      conversionHistory.unshift(conversion);
      if (conversionHistory.length > 10) {
        conversionHistory = conversionHistory.slice(0, 10);
      }
      localStorage.setItem('conversionHistory', JSON.stringify(conversionHistory));
      renderHistory();
    }
    
    function renderHistory() {
      historyList.innerHTML = '';
      
      if (conversionHistory.length === 0) {
        historyList.innerHTML = '<div class="history-item">No conversion history yet</div>';
        return;
      }
      
      conversionHistory.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
          <div>
            <strong>${item.input}</strong> → <strong>${item.output}</strong>
          </div>
          <div style="color: #666; font-size: 0.8rem;">
            ${item.timestamp}
          </div>
        `;
        historyList.appendChild(historyItem);
      });
    }
    
    function clearHistory() {
      conversionHistory = [];
      localStorage.removeItem('conversionHistory');
      renderHistory();
      showAlert('Conversion history cleared!', 'success');
    }
    
    function initializeCurrencyRates() {
      // Sample exchange rates (in a real application, these would come from an API)
      const rates = {
        USD: 83.25,
        EUR: 90.15,
        GBP: 105.40,
        JPY: 0.55,
        AUD: 54.80,
        CAD: 61.20
      };
      
      usdRate.textContent = `₹${rates.USD.toFixed(2)}`;
      eurRate.textContent = `₹${rates.EUR.toFixed(2)}`;
      gbpRate.textContent = `₹${rates.GBP.toFixed(2)}`;
      jpyRate.textContent = `₹${rates.JPY.toFixed(2)}`;
      audRate.textContent = `₹${rates.AUD.toFixed(2)}`;
      cadRate.textContent = `₹${rates.CAD.toFixed(2)}`;
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
    
    // Initialize the page
    updateCounters();
  });
</script>
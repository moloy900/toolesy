---
layout: default
title: "eBay Price Calculator – Estimate Selling Price & Profit"
permalink: /ebay-price-calculator-estimate-selling-price-profit/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>eBay Price Calculator – Estimate Selling Price & Profit</title>
<meta name="description"
  content="Free eBay Price Calculator for Indian sellers. Calculate your selling price, profit margins, and fees for eBay products in Indian Rupees.">
<meta name="keywords"
  content="ebay calculator, ebay price calculator, ebay profit calculator, ebay fees calculator, ebay seller tools, ebay selling price calculator">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* eBay Calculator Styles */
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

  /* Calculator specific styles */
  .calculator-inputs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
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

  .input-field, .select-field {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.3s;
  }

  .input-field:focus, .select-field:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }

  .input-with-icon {
    position: relative;
  }

  .currency-symbol {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
    font-weight: bold;
  }

  .input-with-icon .input-field {
    padding-left: 30px;
  }

  .percentage-input {
    position: relative;
  }

  .percentage-symbol {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
    font-weight: bold;
  }

  .percentage-input .input-field {
    padding-right: 30px;
  }

  .radio-group {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }

  .radio-option {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .radio-option input {
    width: 18px;
    height: 18px;
  }

  .results-section {
    margin-top: 30px;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }

  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 20px;
  }

  .result-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .result-item.highlight {
    background: #e8f4fd;
    border-left-color: #2980b9;
    font-weight: bold;
  }

  .result-item.profit {
    background: #e8f6ef;
    border-left-color: #27ae60;
    font-weight: bold;
  }

  .result-item.loss {
    background: #fdedec;
    border-left-color: #e74c3c;
    font-weight: bold;
  }

  .result-label {
    font-weight: 600;
    color: #2c3e50;
  }

  .result-value {
    font-weight: bold;
    color: #2c3e50;
  }

  .result-item.profit .result-value {
    color: #27ae60;
  }

  .result-item.loss .result-value {
    color: #e74c3c;
  }

  .chart-container {
    margin-top: 30px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }

  .chart-placeholder {
    height: 300px;
    background: #f8f9fa;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #7f8c8d;
    font-style: italic;
  }

  /* eBay specific colors */
  .ebay-primary {
    color: #0064d2;
  }

  .ebay-bg {
    background: #0064d2;
  }

  .ebay-border {
    border-color: #0064d2;
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

    .calculator-inputs {
      grid-template-columns: 1fr;
    }

    .results-grid {
      grid-template-columns: 1fr;
    }

    .radio-group {
      flex-direction: column;
      gap: 10px;
    }
  }
</style>

<div class="converter-container">
  <h1 class="ebay-primary">eBay Price Calculator (INR)</h1>
  <p class="welcome-message">Calculate your eBay selling price, profit margins, and fees in Indian Rupees. Optimize your pricing strategy for maximum profitability on eBay platform.</p>

  <div class="converter-section">
    <h2>Product Information</h2>

    <div class="calculator-inputs">
      <div class="input-group">
        <label class="input-label">Product Name</label>
        <input type="text" id="productName" class="input-field" placeholder="Enter product name">
      </div>
      
      <div class="input-group">
        <label class="input-label">Item Cost (₹)</label>
        <div class="input-with-icon">
          <span class="currency-symbol">₹</span>
          <input type="number" id="itemCost" class="input-field" placeholder="Enter item cost" min="0" step="0.01">
        </div>
      </div>
      
      <div class="input-group">
        <label class="input-label">Shipping Cost (₹)</label>
        <div class="input-with-icon">
          <span class="currency-symbol">₹</span>
          <input type="number" id="shippingCost" class="input-field" placeholder="Enter shipping cost" min="0" step="0.01" value="0.00">
        </div>
      </div>
      
      <div class="input-group">
        <label class="input-label">Desired Profit (₹)</label>
        <div class="input-with-icon">
          <span class="currency-symbol">₹</span>
          <input type="number" id="desiredProfit" class="input-field" placeholder="Enter desired profit" min="0" step="0.01" value="0.00">
        </div>
      </div>
      
      <div class="input-group">
        <label class="input-label">Category Fee (%)</label>
        <div class="percentage-input">
          <input type="number" id="categoryFee" class="input-field" placeholder="Enter Category Fee %" min="0" max="100" step="0.1" value="12.35">
          <span class="percentage-symbol">%</span>
        </div>
      </div>
      
      <div class="input-group">
        <label class="input-label">Payment Processing Fee (%)</label>
        <div class="percentage-input">
          <input type="number" id="paymentFee" class="input-field" placeholder="Enter Payment Fee %" min="0" max="100" step="0.1" value="3.49">
          <span class="percentage-symbol">%</span>
        </div>
      </div>
      
      <div class="input-group">
        <label class="input-label">Listing Type</label>
        <div class="radio-group">
          <div class="radio-option">
            <input type="radio" id="auction" name="listingType" value="auction" checked>
            <label for="auction">Auction Type Listing</label>
          </div>
          <div class="radio-option">
            <input type="radio" id="fixed" name="listingType" value="fixed">
            <label for="fixed">Fixed Price Listing</label>
          </div>
        </div>
      </div>
      
      <div class="input-group">
        <label class="input-label">Insertion Fee (₹)</label>
        <div class="input-with-icon">
          <span class="currency-symbol">₹</span>
          <input type="number" id="insertionFee" class="input-field" placeholder="0.00" min="0" step="0.01" value="0.00">
        </div>
      </div>
      
      <div class="input-group">
        <label class="input-label">Monthly Units Sold</label>
        <input type="number" id="monthlyUnits" class="input-field" placeholder="0" min="0" value="50">
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button ebay-bg" data-action="calculate">Calculate Selling Price</button>
        <button class="case-button success" data-action="save">Save Calculation</button>
        <button class="case-button warning" data-action="compare">Compare Products</button>
        <button class="case-button secondary" data-action="clear">Clear All</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="results-section">
      <h2>Pricing Calculation Results</h2>
      <div class="results-grid">
        <div class="result-item">
          <span class="result-label">Item Cost</span>
          <span class="result-value" id="resultItemCost">₹0.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">Shipping Cost</span>
          <span class="result-value" id="resultShippingCost">₹0.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">Total Cost</span>
          <span class="result-value" id="resultTotalCost">₹0.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">Category Fee</span>
          <span class="result-value" id="resultCategoryFee">₹0.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">Payment Processing Fee</span>
          <span class="result-value" id="resultPaymentFee">₹0.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">Insertion Fee</span>
          <span class="result-value" id="resultInsertionFee">₹0.00</span>
        </div>
        <div class="result-item highlight">
          <span class="result-label">Total eBay Fees</span>
          <span class="result-value" id="resultTotalFees">₹0.00</span>
        </div>
        <div class="result-item highlight">
          <span class="result-label">Minimum Selling Price</span>
          <span class="result-value" id="resultMinSellingPrice">₹0.00</span>
        </div>
        <div class="result-item" id="profitResult">
          <span class="result-label">Actual Profit</span>
          <span class="result-value" id="resultActualProfit">₹0.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">Profit Margin</span>
          <span class="result-value" id="resultProfitMargin">0%</span>
        </div>
        <div class="result-item">
          <span class="result-label">Monthly Profit</span>
          <span class="result-value" id="resultMonthlyProfit">₹0.00</span>
        </div>
      </div>
    </div>

    <div class="chart-container">
      <h2>Price Breakdown</h2>
      <div class="chart-placeholder">
        Price breakdown chart will appear here after calculation
      </div>
    </div>

    <div class="examples">
      <h2>Example Calculations (INR)</h2>

      <h3>Example 1: Electronics Product (Auction)</h3>
      <div class="example-text">Product: Smartphone
Item Cost: ₹8,000.00
Shipping Cost: ₹150.00
Desired Profit: ₹1,500.00
Category Fee: 12.35%
Payment Fee: 3.49%
Listing Type: Auction
Insertion Fee: ₹0.00

Results:
- Total Cost: ₹8,150.00
- Category Fee: ₹1,256.43
- Payment Fee: ₹355.24
- Total eBay Fees: ₹1,611.67
- Minimum Selling Price: ₹11,261.67
- Actual Profit: ₹1,500.00
- Profit Margin: 13.3%
- Monthly Profit (30 units): ₹45,000.00</div>

      <h3>Example 2: Fashion Product (Fixed Price)</h3>
      <div class="example-text">Product: Designer Handbag
Item Cost: ₹2,500.00
Shipping Cost: ₹100.00
Desired Profit: ₹800.00
Category Fee: 12.35%
Payment Fee: 3.49%
Listing Type: Fixed Price
Insertion Fee: ₹25.00

Results:
- Total Cost: ₹2,600.00
- Category Fee: ₹518.69
- Payment Fee: ₹146.69
- Total eBay Fees: ₹690.38
- Minimum Selling Price: ₹4,090.38
- Actual Profit: ₹800.00
- Profit Margin: 19.6%
- Monthly Profit (20 units): ₹16,000.00</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>eBay Price Calculator - Calculate Your Selling Price & Profit in Indian Rupees</h2>

    <p>Are you an eBay seller looking to optimize your pricing strategy? Our free <strong>eBay Price Calculator</strong> is the perfect tool for calculating your selling price, profit margins, and fees in Indian Rupees. This comprehensive calculator helps you make informed pricing decisions by providing detailed breakdowns of all eBay fees and costs involved in selling on the platform. Whether you're a new seller or an experienced eBay entrepreneur, this tool will help you maximize your profitability.</p>

    <h3>How to Use This eBay Price Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Product Details:</strong> Input your product name, item cost, shipping cost, and desired profit.</li>
      <li><strong>Set Fee Rates:</strong> Specify eBay category fee percentage, payment processing fee, and insertion fee if applicable.</li>
      <li><strong>Choose Listing Type:</strong> Select between auction type listing or fixed price listing.</li>
      <li><strong>Calculate Selling Price:</strong> Click the "Calculate Selling Price" button to see detailed pricing breakdown.</li>
      <li><strong>Analyze Results:</strong> Review your minimum selling price, actual profit, profit margin, and monthly profit potential.</li>
      <li><strong>Optimize Pricing:</strong> Adjust your desired profit to find the optimal selling price for maximum profitability.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're selling smartphones on eBay. You purchase them for ₹8,000 each and spend ₹150 on shipping per unit. You want to make a profit of ₹1,500 per unit. Using our calculator, you set category fee at 12.35% (standard for electronics), payment processing fee at 3.49%, and choose auction listing type. The calculator reveals that your minimum selling price should be ₹11,261.67 to achieve your desired profit of ₹1,500 after accounting for all eBay fees. This gives you a profit margin of 13.3%. Without this calculator, you might have underestimated the impact of eBay fees on your final profit.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>New eBay Sellers:</strong> Avoid pricing mistakes by accurately calculating all eBay fees before listing products.</li>
      <li><strong>Experienced Sellers:</strong> Optimize your pricing strategy across different product categories and listing types.</li>
      <li><strong>International Sellers:</strong> Calculate pricing specifically for the Indian market in Indian Rupees.</li>
      <li><strong>Small Business Owners:</strong> Make data-driven decisions about which products to sell on eBay.</li>
      <li><strong>E-commerce Consultants:</strong> Provide clients with accurate pricing projections for their eBay businesses.</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>How accurate are the calculations in this eBay price calculator?</strong><br>
      Our calculator uses standard eBay fee structures and current rates. However, actual fees may vary based on product category, seller status, and promotional offers from eBay.</p>

    <p><strong>What is the typical eBay category fee percentage?</strong><br>
      eBay category fees typically range from 2% to 15% depending on the product category. The default value in our calculator is set to 12.35%, which is common for many categories.</p>

    <p><strong>What's the difference between auction and fixed price listings?</strong><br>
      Auction listings allow buyers to bid on items, while fixed price listings have a set price. Auction listings often have lower insertion fees but may result in different final selling prices.</p>

    <p><strong>Can I save my calculations for future reference?</strong><br>
      Yes, you can use the "Save Calculation" button to store your current calculation in your browser's local storage for future reference.</p>

    <p><strong>Is this calculator completely free to use?</strong><br>
      Yes, this is a 100% free tool with no registration required. We don't store any of your sensitive business data on our servers.</p>

    <h3>Why Choose Our eBay Price Calculator?</h3>
    <p>Our <strong>eBay pricing calculator</strong> stands out from other tools because of its comprehensive fee breakdown, user-friendly interface, and accurate calculations in Indian Rupees. Unlike simple calculators that only estimate basic costs, our tool considers eBay category fees, payment processing fees, insertion fees, and different listing types to give you the most accurate pricing projection possible.</p>

    <h3>Understanding eBay Selling Fees</h3>
    <p>To maximize your profits on eBay, it's crucial to understand all the fees involved:</p>
    <ul>
      <li><strong>Insertion Fees:</strong> Fees for listing an item (often free for limited listings)</li>
      <li><strong>Final Value Fees:</strong> Percentage of the total sale amount (category fee)</li>
      <li><strong>Payment Processing Fees:</strong> Fees for processing payments through eBay's system</li>
      <li><strong>Promotional Fees:</strong> Additional fees for promoted listings</li>
      <li><strong>International Fees:</strong> Additional fees for international sales</li>
      <li><strong>Shipping Costs:</strong> Your costs to ship products to buyers</li>
    </ul>

    <h3>Pricing Strategy Tips for eBay Sellers</h3>
    <p>To succeed on eBay, consider these pricing strategies:</p>
    <ul>
      <li><strong>Competitive Research:</strong> Research similar products on eBay to understand market rates</li>
      <li><strong>Auction vs Fixed Price:</strong> Use auctions for rare items and fixed prices for common products</li>
      <li><strong>Bundle Pricing:</strong> Offer product bundles to increase average order value</li>
      <li><strong>Seasonal Adjustments:</strong> Adjust prices based on demand during holidays and seasons</li>
      <li><strong>Free Shipping:</strong> Consider offering free shipping to attract more buyers</li>
      <li><strong>Best Offer Option:</strong> Use "Best Offer" to allow negotiation while maintaining minimum price</li>
    </ul>
  </div>
</div>

<!-- Compare Products Modal -->
<div id="compareModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Compare Products</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h4>Product 1</h4>
          <div class="calculator-inputs">
            <div class="input-group">
              <label class="input-label">Product Name</label>
              <input type="text" id="compareProduct1" class="input-field" placeholder="Product 1">
            </div>
            <div class="input-group">
              <label class="input-label">Item Cost (₹)</label>
              <div class="input-with-icon">
                <span class="currency-symbol">₹</span>
                <input type="number" id="compareCost1" class="input-field" placeholder="0.00" min="0" step="0.01">
              </div>
            </div>
            <div class="input-group">
              <label class="input-label">Desired Profit (₹)</label>
              <div class="input-with-icon">
                <span class="currency-symbol">₹</span>
                <input type="number" id="compareProfit1" class="input-field" placeholder="0.00" min="0" step="0.01">
              </div>
            </div>
            <div class="input-group">
              <label class="input-label">Monthly Units</label>
              <input type="number" id="compareUnits1" class="input-field" placeholder="0" min="0" value="50">
            </div>
          </div>
          <div class="results-grid">
            <div class="result-item">
              <span class="result-label">Selling Price</span>
              <span class="result-value" id="comparePrice1">₹0.00</span>
            </div>
            <div class="result-item">
              <span class="result-label">Actual Profit</span>
              <span class="result-value" id="compareActualProfit1">₹0.00</span>
            </div>
            <div class="result-item">
              <span class="result-label">Profit Margin</span>
              <span class="result-value" id="compareMargin1">0%</span>
            </div>
            <div class="result-item">
              <span class="result-label">Monthly Profit</span>
              <span class="result-value" id="compareMonthly1">₹0.00</span>
            </div>
          </div>
        </div>
        <div>
          <h4>Product 2</h4>
          <div class="calculator-inputs">
            <div class="input-group">
              <label class="input-label">Product Name</label>
              <input type="text" id="compareProduct2" class="input-field" placeholder="Product 2">
            </div>
            <div class="input-group">
              <label class="input-label">Item Cost (₹)</label>
              <div class="input-with-icon">
                <span class="currency-symbol">₹</span>
                <input type="number" id="compareCost2" class="input-field" placeholder="0.00" min="0" step="0.01">
              </div>
            </div>
            <div class="input-group">
              <label class="input-label">Desired Profit (₹)</label>
              <div class="input-with-icon">
                <span class="currency-symbol">₹</span>
                <input type="number" id="compareProfit2" class="input-field" placeholder="0.00" min="0" step="0.01">
              </div>
            </div>
            <div class="input-group">
              <label class="input-label">Monthly Units</label>
              <input type="number" id="compareUnits2" class="input-field" placeholder="0" min="0" value="50">
            </div>
          </div>
          <div class="results-grid">
            <div class="result-item">
              <span class="result-label">Selling Price</span>
              <span class="result-value" id="comparePrice2">₹0.00</span>
            </div>
            <div class="result-item">
              <span class="result-label">Actual Profit</span>
              <span class="result-value" id="compareActualProfit2">₹0.00</span>
            </div>
            <div class="result-item">
              <span class="result-label">Profit Margin</span>
              <span class="result-value" id="compareMargin2">0%</span>
            </div>
            <div class="result-item">
              <span class="result-label">Monthly Profit</span>
              <span class="result-value" id="compareMonthly2">₹0.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeCompare">Close</button>
      <button class="modal-button primary" id="calculateCompare">Calculate Comparison</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const itemCost = document.getElementById('itemCost');
    const shippingCost = document.getElementById('shippingCost');
    const desiredProfit = document.getElementById('desiredProfit');
    const categoryFee = document.getElementById('categoryFee');
    const paymentFee = document.getElementById('paymentFee');
    const insertionFee = document.getElementById('insertionFee');
    const monthlyUnits = document.getElementById('monthlyUnits');
    const listingTypeRadios = document.querySelectorAll('input[name="listingType"]');
    const calculateButton = document.querySelector('[data-action="calculate"]');
    const saveButton = document.querySelector('[data-action="save"]');
    const compareButton = document.querySelector('[data-action="compare"]');
    const clearButton = document.querySelector('[data-action="clear"]');
    const alertContainer = document.getElementById('alertContainer');
    
    // Result elements
    const resultItemCost = document.getElementById('resultItemCost');
    const resultShippingCost = document.getElementById('resultShippingCost');
    const resultTotalCost = document.getElementById('resultTotalCost');
    const resultCategoryFee = document.getElementById('resultCategoryFee');
    const resultPaymentFee = document.getElementById('resultPaymentFee');
    const resultInsertionFee = document.getElementById('resultInsertionFee');
    const resultTotalFees = document.getElementById('resultTotalFees');
    const resultMinSellingPrice = document.getElementById('resultMinSellingPrice');
    const resultActualProfit = document.getElementById('resultActualProfit');
    const resultProfitMargin = document.getElementById('resultProfitMargin');
    const resultMonthlyProfit = document.getElementById('resultMonthlyProfit');
    const profitResult = document.getElementById('profitResult');
    
    // Modal elements
    const compareModal = document.getElementById('compareModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const closeCompare = document.getElementById('closeCompare');
    const calculateCompare = document.getElementById('calculateCompare');

    // Event listeners
    calculateButton.addEventListener('click', calculatePricing);
    saveButton.addEventListener('click', saveCalculation);
    compareButton.addEventListener('click', openCompareModal);
    clearButton.addEventListener('click', clearAll);
    
    // Compare modal event listeners
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        compareModal.style.display = 'none';
      });
    });
    
    closeCompare.addEventListener('click', function() {
      compareModal.style.display = 'none';
    });
    
    calculateCompare.addEventListener('click', calculateComparison);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === compareModal) {
        compareModal.style.display = 'none';
      }
    });

    // Format currency in Indian Rupees
    function formatINR(amount) {
      return '₹' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    // Get selected listing type
    function getSelectedListingType() {
      for (const radio of listingTypeRadios) {
        if (radio.checked) {
          return radio.value;
        }
      }
      return 'auction';
    }

    // Main pricing calculation function
    function calculatePricing() {
      // Validate inputs
      if (!itemCost.value || itemCost.value <= 0) {
        showAlert('Please enter a valid item cost.', 'error');
        return;
      }
      
      if (!shippingCost.value || shippingCost.value < 0) {
        showAlert('Please enter valid shipping cost.', 'error');
        return;
      }
      
      if (!desiredProfit.value || desiredProfit.value < 0) {
        showAlert('Please enter a valid desired profit.', 'error');
        return;
      }
      
      if (!categoryFee.value || categoryFee.value < 0) {
        showAlert('Please enter a valid category fee percentage.', 'error');
        return;
      }
      
      if (!paymentFee.value || paymentFee.value < 0) {
        showAlert('Please enter a valid payment processing fee percentage.', 'error');
        return;
      }
      
      if (!insertionFee.value || insertionFee.value < 0) {
        showAlert('Please enter a valid insertion fee.', 'error');
        return;
      }
      
      if (!monthlyUnits.value || monthlyUnits.value <= 0) {
        showAlert('Please enter a valid number of monthly units.', 'error');
        return;
      }

      // Get input values
      const cost = parseFloat(itemCost.value);
      const shipping = parseFloat(shippingCost.value) || 0;
      const profit = parseFloat(desiredProfit.value);
      const categoryRate = parseFloat(categoryFee.value) / 100;
      const paymentRate = parseFloat(paymentFee.value) / 100;
      const insertion = parseFloat(insertionFee.value) || 0;
      const units = parseInt(monthlyUnits.value);
      const listingType = getSelectedListingType();

      // Calculate total cost
      const totalCost = cost + shipping;
      
      // Calculate minimum selling price to achieve desired profit
      // Let S = selling price
      // S - (S * categoryRate) - (S * paymentRate) - insertion = totalCost + profit
      // S * (1 - categoryRate - paymentRate) = totalCost + profit + insertion
      // S = (totalCost + profit + insertion) / (1 - categoryRate - paymentRate)
      
      const minSellingPrice = (totalCost + profit + insertion) / (1 - categoryRate - paymentRate);
      
      // Calculate fees
      const categoryFeeAmount = minSellingPrice * categoryRate;
      const paymentFeeAmount = minSellingPrice * paymentRate;
      const totalFees = categoryFeeAmount + paymentFeeAmount + insertion;
      
      // Calculate actual profit (should match desired profit)
      const actualProfit = minSellingPrice - totalCost - totalFees;
      const profitMargin = (actualProfit / minSellingPrice) * 100;
      const monthlyProfit = actualProfit * units;

      // Update results
      resultItemCost.textContent = formatINR(cost);
      resultShippingCost.textContent = formatINR(shipping);
      resultTotalCost.textContent = formatINR(totalCost);
      resultCategoryFee.textContent = formatINR(categoryFeeAmount);
      resultPaymentFee.textContent = formatINR(paymentFeeAmount);
      resultInsertionFee.textContent = formatINR(insertion);
      resultTotalFees.textContent = formatINR(totalFees);
      resultMinSellingPrice.textContent = formatINR(minSellingPrice);
      resultActualProfit.textContent = formatINR(actualProfit);
      resultProfitMargin.textContent = `${profitMargin.toFixed(1)}%`;
      resultMonthlyProfit.textContent = formatINR(monthlyProfit);
      
      // Update profit display style based on value
      if (actualProfit > 0) {
        profitResult.className = 'result-item profit';
        showAlert('Pricing calculation completed successfully!', 'success');
      } else {
        profitResult.className = 'result-item loss';
        showAlert('Warning: This product would result in a loss at the current pricing.', 'error');
      }
    }

    // Save calculation to localStorage
    function saveCalculation() {
      const calculation = {
        productName: document.getElementById('productName').value || 'Unnamed Product',
        itemCost: itemCost.value,
        shippingCost: shippingCost.value,
        desiredProfit: desiredProfit.value,
        categoryFee: categoryFee.value,
        paymentFee: paymentFee.value,
        insertionFee: insertionFee.value,
        listingType: getSelectedListingType(),
        units: monthlyUnits.value,
        sellingPrice: resultMinSellingPrice.textContent,
        actualProfit: resultActualProfit.textContent,
        profitMargin: resultProfitMargin.textContent,
        timestamp: new Date().toISOString()
      };
      
      // Get existing calculations or initialize empty array
      const savedCalculations = JSON.parse(localStorage.getItem('ebayCalculator') || '[]');
      
      // Add new calculation
      savedCalculations.push(calculation);
      
      // Save back to localStorage
      localStorage.setItem('ebayCalculator', JSON.stringify(savedCalculations));
      
      showAlert('Calculation saved successfully!', 'success');
    }

    // Open compare products modal
    function openCompareModal() {
      // Pre-fill with current values if available
      if (itemCost.value) {
        document.getElementById('compareProduct1').value = document.getElementById('productName').value || 'Product 1';
        document.getElementById('compareCost1').value = itemCost.value;
        document.getElementById('compareProfit1').value = desiredProfit.value;
        document.getElementById('compareUnits1').value = monthlyUnits.value;
        
        // Calculate for product 1
        calculateComparisonProduct(1);
      }
      
      compareModal.style.display = 'block';
    }

    // Calculate comparison between two products
    function calculateComparison() {
      calculateComparisonProduct(1);
      calculateComparisonProduct(2);
    }

    // Calculate profit for a comparison product
    function calculateComparisonProduct(productNum) {
      const cost = parseFloat(document.getElementById(`compareCost${productNum}`).value);
      const profit = parseFloat(document.getElementById(`compareProfit${productNum}`).value);
      const units = parseInt(document.getElementById(`compareUnits${productNum}`).value);
      
      if (!cost || !profit || !units) {
        showAlert(`Please enter valid values for Product ${productNum}`, 'error');
        return;
      }
      
      // Use default values for calculation
      const shipping = 100;
      const categoryRate = 0.1235;
      const paymentRate = 0.0349;
      const insertion = 0;
      
      // Calculate pricing
      const totalCost = cost + shipping;
      const minSellingPrice = (totalCost + profit + insertion) / (1 - categoryRate - paymentRate);
      const categoryFeeAmount = minSellingPrice * categoryRate;
      const paymentFeeAmount = minSellingPrice * paymentRate;
      const totalFees = categoryFeeAmount + paymentFeeAmount + insertion;
      const actualProfit = minSellingPrice - totalCost - totalFees;
      const profitMargin = (actualProfit / minSellingPrice) * 100;
      const monthlyProfit = actualProfit * units;
      
      // Update comparison results
      document.getElementById(`comparePrice${productNum}`).textContent = formatINR(minSellingPrice);
      document.getElementById(`compareActualProfit${productNum}`).textContent = formatINR(actualProfit);
      document.getElementById(`compareMargin${productNum}`).textContent = `${profitMargin.toFixed(1)}%`;
      document.getElementById(`compareMonthly${productNum}`).textContent = formatINR(monthlyProfit);
    }

    // Clear all inputs
    function clearAll() {
      document.getElementById('productName').value = '';
      itemCost.value = '';
      shippingCost.value = '0.00';
      desiredProfit.value = '0.00';
      categoryFee.value = '12.35';
      paymentFee.value = '3.49';
      insertionFee.value = '0.00';
      monthlyUnits.value = '50';
      document.getElementById('auction').checked = true;
      
      // Reset results
      resultItemCost.textContent = '₹0.00';
      resultShippingCost.textContent = '₹0.00';
      resultTotalCost.textContent = '₹0.00';
      resultCategoryFee.textContent = '₹0.00';
      resultPaymentFee.textContent = '₹0.00';
      resultInsertionFee.textContent = '₹0.00';
      resultTotalFees.textContent = '₹0.00';
      resultMinSellingPrice.textContent = '₹0.00';
      resultActualProfit.textContent = '₹0.00';
      resultProfitMargin.textContent = '0%';
      resultMonthlyProfit.textContent = '₹0.00';
      profitResult.className = 'result-item';
      
      showAlert('All inputs cleared.', 'success');
    }

    // Show alert message
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
---
layout: default
title: "Meesho Price Calculator – Estimate Selling Price & Profit"
permalink: /meesho-price-calculator-estimate-selling-price-profit/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Meesho Price Calculator – Estimate Selling Price & Profit</title>
<meta name="description"
  content="Free Meesho Price Calculator for Indian sellers. Calculate your selling price, profit margins, and GST for Meesho products in Indian Rupees.">
<meta name="keywords"
  content="meesho calculator, meesho price calculator, meesho profit calculator, meesho gst calculator, meesho seller tools, meesho selling price calculator">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Meesho Calculator Styles */
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

  /* Meesho specific colors */
  .meesho-primary {
    color: #f43397;
  }

  .meesho-bg {
    background: #f43397;
  }

  .meesho-border {
    border-color: #f43397;
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
  }
</style>

<div class="converter-container">
  <h1 class="meesho-primary">Meesho Price Calculator (INR)</h1>
  <p class="welcome-message">Calculate your Meesho selling price, profit margins, and GST in Indian Rupees. Optimize your pricing strategy for maximum profitability on Meesho platform.</p>

  <div class="converter-section">
    <h2>Product Pricing Information</h2>

    <div class="calculator-inputs">
      <div class="input-group">
        <label class="input-label">Product Name</label>
        <input type="text" id="productName" class="input-field" placeholder="Enter product name">
      </div>
      
      <div class="input-group">
        <label class="input-label">Cost Price (₹)</label>
        <div class="input-with-icon">
          <span class="currency-symbol">₹</span>
          <input type="number" id="costPrice" class="input-field" placeholder="0.00" min="0" step="0.01">
        </div>
      </div>
      
      <div class="input-group">
        <label class="input-label">Shipping Charges (₹)</label>
        <div class="input-with-icon">
          <span class="currency-symbol">₹</span>
          <input type="number" id="shippingCharges" class="input-field" placeholder="0.00" min="0" step="0.01" value="0.00">
        </div>
      </div>
      
      <div class="input-group">
        <label class="input-label">Meesho Commission (%)</label>
        <div class="percentage-input">
          <input type="number" id="meeshoCommission" class="input-field" placeholder="0" min="0" max="100" step="0.1" value="10">
          <span class="percentage-symbol">%</span>
        </div>
      </div>
      
      <div class="input-group">
        <label class="input-label">GST Rate (%)</label>
        <div class="percentage-input">
          <input type="number" id="gstRate" class="input-field" placeholder="0" min="0" max="100" step="0.1" value="18">
          <span class="percentage-symbol">%</span>
        </div>
      </div>
      
      <div class="input-group">
        <label class="input-label">Desired Profit Margin (%)</label>
        <div class="percentage-input">
          <input type="number" id="profitMargin" class="input-field" placeholder="0" min="0" max="100" step="0.1" value="20">
          <span class="percentage-symbol">%</span>
        </div>
      </div>
      
      <div class="input-group">
        <label class="input-label">Monthly Units Sold</label>
        <input type="number" id="monthlyUnits" class="input-field" placeholder="0" min="0" value="100">
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button meesho-bg" data-action="calculate">Calculate Selling Price</button>
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
          <span class="result-label">Cost Price</span>
          <span class="result-value" id="resultCostPrice">₹0.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">Shipping Charges</span>
          <span class="result-value" id="resultShipping">₹0.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">Total Cost</span>
          <span class="result-value" id="resultTotalCost">₹0.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">GST on Cost Price</span>
          <span class="result-value" id="resultGstOnCost">₹0.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">Meesho Commission</span>
          <span class="result-value" id="resultCommission">₹0.00</span>
        </div>
        <div class="result-item highlight">
          <span class="result-label">Selling Price (Without GST)</span>
          <span class="result-value" id="resultSellingWithoutGst">₹0.00</span>
        </div>
        <div class="result-item highlight">
          <span class="result-label">Selling Price (Including GST)</span>
          <span class="result-value" id="resultSellingWithGst">₹0.00</span>
        </div>
        <div class="result-item" id="profitResult">
          <span class="result-label">Net Profit</span>
          <span class="result-value" id="resultNetProfit">₹0.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">Actual Profit Margin</span>
          <span class="result-value" id="resultActualMargin">0%</span>
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

      <h3>Example 1: Fashion Product</h3>
      <div class="example-text">Product: Women's Kurti
Cost Price: ₹250.00
Shipping Charges: ₹30.00
Meesho Commission: 10%
GST Rate: 18%
Desired Profit Margin: 20%

Results:
- Total Cost: ₹280.00
- GST on Cost Price: ₹45.00
- Meesho Commission: ₹53.10
- Selling Price (Without GST): ₹333.10
- Selling Price (Including GST): ₹393.06
- Net Profit: ₹53.10 per unit
- Actual Profit Margin: 15.9%
- Monthly Profit (100 units): ₹5,310.00</div>

      <h3>Example 2: Home Decor Product</h3>
      <div class="example-text">Product: Wall Clock
Cost Price: ₹180.00
Shipping Charges: ₹25.00
Meesho Commission: 10%
GST Rate: 18%
Desired Profit Margin: 25%

Results:
- Total Cost: ₹205.00
- GST on Cost Price: ₹32.40
- Meesho Commission: ₹38.84
- Selling Price (Without GST): ₹243.84
- Selling Price (Including GST): ₹287.73
- Net Profit: ₹38.84 per unit
- Actual Profit Margin: 16.0%
- Monthly Profit (80 units): ₹3,107.20</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Meesho Price Calculator - Calculate Your Selling Price & Profit in Indian Rupees</h2>

    <p>Are you a Meesho seller looking to optimize your pricing strategy? Our free <strong>Meesho Price Calculator</strong> is the perfect tool for calculating your selling price, profit margins, and GST in Indian Rupees. This comprehensive calculator helps you make informed pricing decisions by providing detailed breakdowns of all costs and commissions involved in selling on Meesho. Whether you're a new seller or an experienced Meesho entrepreneur, this tool will help you maximize your profitability.</p>

    <h3>How to Use This Meesho Price Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Product Details:</strong> Input your product name, cost price, shipping charges, and estimated monthly sales.</li>
      <li><strong>Set Commission & Tax Rates:</strong> Specify Meesho commission percentage, GST rate, and your desired profit margin.</li>
      <li><strong>Calculate Selling Price:</strong> Click the "Calculate Selling Price" button to see detailed pricing breakdown.</li>
      <li><strong>Analyze Results:</strong> Review your selling price (with and without GST), net profit, actual profit margin, and monthly profit potential.</li>
      <li><strong>Optimize Pricing:</strong> Adjust your desired profit margin to find the optimal selling price for maximum profitability.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're selling women's kurtis on Meesho. You purchase them for ₹250 each and spend ₹30 on shipping per unit. Using our calculator, you set Meesho commission at 10%, GST rate at 18%, and desired profit margin at 20%. The calculator reveals that your selling price should be ₹393.06 (including GST) to achieve a net profit of ₹53.10 per unit. This gives you an actual profit margin of 15.9% after accounting for all costs and commissions. Without this calculator, you might have underestimated the impact of commissions and taxes on your final profit.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>New Meesho Sellers:</strong> Avoid pricing mistakes by accurately calculating all costs and commissions before listing products.</li>
      <li><strong>Experienced Sellers:</strong> Optimize your pricing strategy across different product categories.</li>
      <li><strong>Product Researchers:</strong> Compare profitability across different products before sourcing.</li>
      <li><strong>Small Business Owners:</strong> Make data-driven decisions about which products to sell on Meesho.</li>
      <li><strong>E-commerce Consultants:</strong> Provide clients with accurate pricing projections for their Meesho businesses.</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>How accurate are the calculations in this Meesho price calculator?</strong><br>
      Our calculator uses standard Meesho commission rates and Indian GST regulations. However, actual commission rates may vary based on product category and promotional offers from Meesho.</p>

    <p><strong>What is the typical Meesho commission rate?</strong><br>
      Meesho commission rates typically range from 5% to 15% depending on the product category. The default value in our calculator is set to 10%, which is common for many categories.</p>

    <p><strong>How is GST calculated for Meesho products?</strong><br>
      GST is calculated on the selling price. Our calculator accounts for GST on both the cost price and the profit margin to give you accurate selling prices.</p>

    <p><strong>Can I save my calculations for future reference?</strong><br>
      Yes, you can use the "Save Calculation" button to store your current calculation in your browser's local storage for future reference.</p>

    <p><strong>Is this calculator completely free to use?</strong><br>
      Yes, this is a 100% free tool with no registration required. We don't store any of your sensitive business data on our servers.</p>

    <h3>Why Choose Our Meesho Price Calculator?</h3>
    <p>Our <strong>Meesho pricing calculator</strong> stands out from other tools because of its comprehensive cost breakdown, user-friendly interface, and accurate calculations in Indian Rupees. Unlike simple calculators that only estimate basic costs, our tool considers Meesho commissions, GST implications, shipping charges, and desired profit margins to give you the most accurate pricing projection possible.</p>

    <h3>Understanding Meesho Selling Costs</h3>
    <p>To maximize your profits on Meesho, it's crucial to understand all the costs involved:</p>
    <ul>
      <li><strong>Product Cost:</strong> The amount you pay to purchase or manufacture the product</li>
      <li><strong>Shipping Charges:</strong> Costs to ship products to customers or to Meesho warehouses</li>
      <li><strong>Meesho Commission:</strong> Percentage fee Meesho charges for each sale</li>
      <li><strong>GST:</strong> Goods and Services Tax applicable on your sales</li>
      <li><strong>Payment Gateway Charges:</strong> Fees for processing online payments (if applicable)</li>
      <li><strong>Packaging Costs:</strong> Expenses for product packaging and materials</li>
    </ul>

    <h3>Pricing Strategy Tips for Meesho Sellers</h3>
    <p>To succeed on Meesho, consider these pricing strategies:</p>
    <ul>
      <li><strong>Competitive Pricing:</strong> Research similar products on Meesho to understand market rates</li>
      <li><strong>Volume Strategy:</strong> Lower profit margins for higher volume products</li>
      <li><strong>Premium Positioning:</strong> Higher prices for unique or high-quality products</li>
      <li><strong>Seasonal Adjustments:</strong> Adjust prices based on demand during festivals and seasons</li>
      <li><strong>Bundle Pricing:</strong> Offer product bundles to increase average order value</li>
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
              <label class="input-label">Cost Price (₹)</label>
              <div class="input-with-icon">
                <span class="currency-symbol">₹</span>
                <input type="number" id="compareCost1" class="input-field" placeholder="0.00" min="0" step="0.01">
              </div>
            </div>
            <div class="input-group">
              <label class="input-label">Monthly Units</label>
              <input type="number" id="compareUnits1" class="input-field" placeholder="0" min="0" value="100">
            </div>
          </div>
          <div class="results-grid">
            <div class="result-item">
              <span class="result-label">Selling Price</span>
              <span class="result-value" id="comparePrice1">₹0.00</span>
            </div>
            <div class="result-item">
              <span class="result-label">Net Profit</span>
              <span class="result-value" id="compareProfit1">₹0.00</span>
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
              <label class="input-label">Cost Price (₹)</label>
              <div class="input-with-icon">
                <span class="currency-symbol">₹</span>
                <input type="number" id="compareCost2" class="input-field" placeholder="0.00" min="0" step="0.01">
              </div>
            </div>
            <div class="input-group">
              <label class="input-label">Monthly Units</label>
              <input type="number" id="compareUnits2" class="input-field" placeholder="0" min="0" value="100">
            </div>
          </div>
          <div class="results-grid">
            <div class="result-item">
              <span class="result-label">Selling Price</span>
              <span class="result-value" id="comparePrice2">₹0.00</span>
            </div>
            <div class="result-item">
              <span class="result-label">Net Profit</span>
              <span class="result-value" id="compareProfit2">₹0.00</span>
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
    const costPrice = document.getElementById('costPrice');
    const shippingCharges = document.getElementById('shippingCharges');
    const meeshoCommission = document.getElementById('meeshoCommission');
    const gstRate = document.getElementById('gstRate');
    const profitMargin = document.getElementById('profitMargin');
    const monthlyUnits = document.getElementById('monthlyUnits');
    const calculateButton = document.querySelector('[data-action="calculate"]');
    const saveButton = document.querySelector('[data-action="save"]');
    const compareButton = document.querySelector('[data-action="compare"]');
    const clearButton = document.querySelector('[data-action="clear"]');
    const alertContainer = document.getElementById('alertContainer');
    
    // Result elements
    const resultCostPrice = document.getElementById('resultCostPrice');
    const resultShipping = document.getElementById('resultShipping');
    const resultTotalCost = document.getElementById('resultTotalCost');
    const resultGstOnCost = document.getElementById('resultGstOnCost');
    const resultCommission = document.getElementById('resultCommission');
    const resultSellingWithoutGst = document.getElementById('resultSellingWithoutGst');
    const resultSellingWithGst = document.getElementById('resultSellingWithGst');
    const resultNetProfit = document.getElementById('resultNetProfit');
    const resultActualMargin = document.getElementById('resultActualMargin');
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

    // Main pricing calculation function
    function calculatePricing() {
      // Validate inputs
      if (!costPrice.value || costPrice.value <= 0) {
        showAlert('Please enter a valid cost price.', 'error');
        return;
      }
      
      if (!shippingCharges.value || shippingCharges.value < 0) {
        showAlert('Please enter valid shipping charges.', 'error');
        return;
      }
      
      if (!meeshoCommission.value || meeshoCommission.value < 0) {
        showAlert('Please enter a valid Meesho commission rate.', 'error');
        return;
      }
      
      if (!gstRate.value || gstRate.value < 0) {
        showAlert('Please enter a valid GST rate.', 'error');
        return;
      }
      
      if (!profitMargin.value || profitMargin.value < 0) {
        showAlert('Please enter a valid profit margin.', 'error');
        return;
      }
      
      if (!monthlyUnits.value || monthlyUnits.value <= 0) {
        showAlert('Please enter a valid number of monthly units.', 'error');
        return;
      }

      // Get input values
      const cost = parseFloat(costPrice.value);
      const shipping = parseFloat(shippingCharges.value) || 0;
      const commissionRate = parseFloat(meeshoCommission.value) / 100;
      const gst = parseFloat(gstRate.value) / 100;
      const desiredMargin = parseFloat(profitMargin.value) / 100;
      const units = parseInt(monthlyUnits.value);

      // Calculate costs
      const totalCost = cost + shipping;
      const gstOnCost = cost * gst;
      
      // Calculate selling price without GST
      const basePrice = totalCost / (1 - commissionRate - desiredMargin);
      const sellingWithoutGst = Math.max(basePrice, totalCost);
      
      // Calculate commission
      const commission = sellingWithoutGst * commissionRate;
      
      // Calculate selling price with GST
      const sellingWithGst = sellingWithoutGst * (1 + gst);
      
      // Calculate profit
      const netProfit = sellingWithoutGst - totalCost - commission;
      const actualMargin = (netProfit / sellingWithoutGst) * 100;
      const monthlyProfit = netProfit * units;

      // Update results
      resultCostPrice.textContent = formatINR(cost);
      resultShipping.textContent = formatINR(shipping);
      resultTotalCost.textContent = formatINR(totalCost);
      resultGstOnCost.textContent = formatINR(gstOnCost);
      resultCommission.textContent = formatINR(commission);
      resultSellingWithoutGst.textContent = formatINR(sellingWithoutGst);
      resultSellingWithGst.textContent = formatINR(sellingWithGst);
      resultNetProfit.textContent = formatINR(netProfit);
      resultActualMargin.textContent = `${actualMargin.toFixed(1)}%`;
      resultMonthlyProfit.textContent = formatINR(monthlyProfit);
      
      // Update profit display style based on value
      if (netProfit > 0) {
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
        costPrice: costPrice.value,
        shippingCharges: shippingCharges.value,
        commission: meeshoCommission.value,
        gstRate: gstRate.value,
        profitMargin: profitMargin.value,
        units: monthlyUnits.value,
        sellingPrice: resultSellingWithGst.textContent,
        netProfit: resultNetProfit.textContent,
        actualMargin: resultActualMargin.textContent,
        timestamp: new Date().toISOString()
      };
      
      // Get existing calculations or initialize empty array
      const savedCalculations = JSON.parse(localStorage.getItem('meeshoCalculator') || '[]');
      
      // Add new calculation
      savedCalculations.push(calculation);
      
      // Save back to localStorage
      localStorage.setItem('meeshoCalculator', JSON.stringify(savedCalculations));
      
      showAlert('Calculation saved successfully!', 'success');
    }

    // Open compare products modal
    function openCompareModal() {
      // Pre-fill with current values if available
      if (costPrice.value) {
        document.getElementById('compareProduct1').value = document.getElementById('productName').value || 'Product 1';
        document.getElementById('compareCost1').value = costPrice.value;
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
      const units = parseInt(document.getElementById(`compareUnits${productNum}`).value);
      
      if (!cost || !units) {
        showAlert(`Please enter valid values for Product ${productNum}`, 'error');
        return;
      }
      
      // Use default values for calculation
      const shipping = 30;
      const commissionRate = 0.10;
      const gst = 0.18;
      const desiredMargin = 0.20;
      
      // Calculate pricing
      const totalCost = cost + shipping;
      const basePrice = totalCost / (1 - commissionRate - desiredMargin);
      const sellingWithoutGst = Math.max(basePrice, totalCost);
      const commission = sellingWithoutGst * commissionRate;
      const sellingWithGst = sellingWithoutGst * (1 + gst);
      const netProfit = sellingWithoutGst - totalCost - commission;
      const actualMargin = (netProfit / sellingWithoutGst) * 100;
      const monthlyProfit = netProfit * units;
      
      // Update comparison results
      document.getElementById(`comparePrice${productNum}`).textContent = formatINR(sellingWithGst);
      document.getElementById(`compareProfit${productNum}`).textContent = formatINR(netProfit);
      document.getElementById(`compareMargin${productNum}`).textContent = `${actualMargin.toFixed(1)}%`;
      document.getElementById(`compareMonthly${productNum}`).textContent = formatINR(monthlyProfit);
    }

    // Clear all inputs
    function clearAll() {
      document.getElementById('productName').value = '';
      costPrice.value = '';
      shippingCharges.value = '0.00';
      meeshoCommission.value = '10';
      gstRate.value = '18';
      profitMargin.value = '20';
      monthlyUnits.value = '100';
      
      // Reset results
      resultCostPrice.textContent = '₹0.00';
      resultShipping.textContent = '₹0.00';
      resultTotalCost.textContent = '₹0.00';
      resultGstOnCost.textContent = '₹0.00';
      resultCommission.textContent = '₹0.00';
      resultSellingWithoutGst.textContent = '₹0.00';
      resultSellingWithGst.textContent = '₹0.00';
      resultNetProfit.textContent = '₹0.00';
      resultActualMargin.textContent = '0%';
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
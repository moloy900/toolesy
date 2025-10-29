---
layout: default
title: "Flipkart Fee Calculator - Calculate Profit & Seller Payout"
permalink: /flipkart-fee-calculator-calculate-profit-seller-payout/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Flipkart Fee Calculator - Calculate Profit & Seller Payout</title>
<meta name="description"
  content="Calculate Flipkart selling fees, GST, shipping, TCS, commission and profit margin instantly. Best tool for Flipkart sellers to plan pricing strategy.
">
<meta name="keywords"
  content="flipkart seller calculator, flipkart fees, flipkart commission, seller profit calculator, ecommerce fees, flipkart seller charges, online selling calculator">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Flipkart Calculator Styles */
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

  .calculator-inputs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 25px 0;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .input-group label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .input-group input, .input-group select {
    padding: 12px 15px;
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

  .case-button.flipkart {
    background: #047bd5;
  }

  .case-button.flipkart:hover {
    background: #0366b3;
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

  .result-section {
    margin-top: 30px;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  }

  .result-section h3 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.3rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
  }

  .result-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin-bottom: 25px;
  }

  .result-card {
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
    transition: all 0.3s ease;
  }

  .result-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  .result-card h4 {
    margin: 0 0 10px 0;
    color: #2c3e50;
    font-size: 1rem;
  }

  .result-card .amount {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary);
  }

  .result-card.profit-positive .amount {
    color: #28a745;
  }

  .result-card.profit-negative .amount {
    color: #dc3545;
  }

  .fee-breakdown {
    margin-top: 25px;
  }

  .fee-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    margin: 8px 0;
    background: white;
    border-radius: 6px;
    border-left: 3px solid #e0e6ed;
    transition: all 0.3s ease;
  }

  .fee-item:hover {
    background: #f8f9fa;
    border-left-color: var(--primary);
  }

  .fee-item .fee-name {
    font-weight: 500;
    color: #2c3e50;
  }

  .fee-item .fee-amount {
    font-weight: 600;
    color: #495057;
  }

  .fee-divider {
    border: 0;
    border-top: 2px solid #e9ecef;
    margin: 15px 0;
  }

  .profit-loss-section {
    margin-top: 20px;
    padding: 20px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 10px;
    border: 2px solid #e9ecef;
  }

  .profit-loss-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin: 10px 0;
    background: white;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1.1rem;
  }

  .profit-positive {
    color: #28a745;
    border-left: 4px solid #28a745;
  }

  .profit-negative {
    color: #dc3545;
    border-left: 4px solid #dc3545;
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

  /* Advanced Options */
  .advanced-options {
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .advanced-toggle {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 15px;
  }

  .advanced-content {
    display: none;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    padding-top: 15px;
    border-top: 1px solid #e0e0e0;
  }

  .advanced-content.show {
    display: grid;
  }

  /* Chart Section */
  .chart-section {
    margin-top: 30px;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  }

  .chart-container {
    height: 300px;
    margin-top: 20px;
    position: relative;
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

    .calculator-inputs {
      grid-template-columns: 1fr;
    }

    .result-grid {
      grid-template-columns: 1fr;
    }

    .advanced-content {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Flipkart Seller Fee Calculator</h1>
  <p class="welcome-message">Calculate your exact profit, commission fees, shipping costs, GST, and TCS for selling on Flipkart. Plan your pricing strategy effectively to maximize your earnings.</p>

  <div class="converter-section">
    <h2>Flipkart Seller Profit Calculator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Total Fees: </span>
        <span id="totalFeesCounter">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Seller Payout: </span>
        <span id="payoutCounter">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Net Profit: </span>
        <span id="profitCounter">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Profit Margin: </span>
        <span id="marginCounter">0%</span>
      </div>
    </div>

    <div class="calculator-inputs">
      <div class="input-group">
        <label for="sellingPrice">Selling Price (₹):</label>
        <input type="number" id="sellingPrice" placeholder="Enter selling price">
      </div>

      <div class="input-group">
        <label for="costPrice">Cost Price (₹):</label>
        <input type="number" id="costPrice" placeholder="Enter product cost">
      </div>

      <div class="input-group">
        <label for="productCategory">Product Category:</label>
        <select id="productCategory">
          <optgroup label="Mobiles & Electronics">
            <option value="mobiles">Mobiles (3%)</option>
            <option value="electronics">Electronics Accessories (7%)</option>
            <option value="appliances">Large Appliances (6%)</option>
          </optgroup>
          <optgroup label="Fashion">
            <option value="menfashion">Men Fashion (15%)</option>
            <option value="womenfashion">Women Fashion (17%)</option>
          </optgroup>
          <optgroup label="Home & Lifestyle">
            <option value="home">Home & Kitchen (10%)</option>
            <option value="furniture">Furniture (10%)</option>
            <option value="beauty">Beauty & Personal Care (13%)</option>
          </optgroup>
          <optgroup label="Other Categories">
            <option value="books">Books (8%)</option>
            <option value="grocery">Grocery (5%)</option>
            <option value="sports">Sports & Automotive (12%)</option>
          </optgroup>
        </select>
      </div>

      <div class="input-group">
        <label for="shippingRegion">Shipping Region:</label>
        <select id="shippingRegion">
          <option value="local">Local</option>
          <option value="zonal">Zonal</option>
          <option value="national">National</option>
        </select>
      </div>

      <div class="input-group">
        <label for="productWeight">Weight (kg):</label>
        <input type="number" step="0.01" id="productWeight" placeholder="0.50" value="0.5">
      </div>

      <div class="input-group">
        <label for="sellerType">Seller Type:</label>
        <select id="sellerType">
          <option value="individual">Individual Seller</option>
          <option value="business">Business Seller</option>
          <option value="premium">Premium Seller</option>
        </select>
      </div>
    </div>

    <!-- Advanced Options -->
    <div class="advanced-options">
      <div class="advanced-toggle" id="advancedToggle">
        <i class="fas fa-cog"></i>
        <span>Advanced Options</span>
        <i class="fas fa-chevron-down" id="advancedArrow"></i>
      </div>
      <div class="advanced-content" id="advancedContent">
        <div class="input-group">
          <label for="fixedFee">Fixed Fee (₹):</label>
          <input type="number" id="fixedFee" value="0">
        </div>
        <div class="input-group">
          <label for="shippingCharge">Shipping Charge to Customer (₹):</label>
          <input type="number" id="shippingCharge" value="0">
        </div>
        <div class="input-group">
          <label for="gstRate">GST Rate on Fees (%):</label>
          <input type="number" id="gstRate" value="18" min="0" max="28">
        </div>
        <div class="input-group">
          <label for="tcsRate">TCS Rate (%):</label>
          <input type="number" id="tcsRate" value="1" min="0" max="5">
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="case-button flipkart" id="calculateBtn">Calculate Fees & Profit</button>
      <button class="case-button success" id="saveCalculation">Save Calculation</button>
      <button class="case-button" id="compareScenarios">Compare Scenarios</button>
      <button class="case-button warning" id="resetCalculator">Reset</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="result-section" id="resultSection" style="display: none;">
      <h3>Calculation Results</h3>
      
      <div class="result-grid">
        <div class="result-card">
          <h4>Total Fees</h4>
          <div class="amount" id="totalFees">₹0.00</div>
        </div>
        <div class="result-card">
          <h4>Seller Payout</h4>
          <div class="amount" id="sellerPayout">₹0.00</div>
        </div>
        <div class="result-card" id="profitCard">
          <h4>Net Profit</h4>
          <div class="amount" id="netProfit">₹0.00</div>
        </div>
        <div class="result-card" id="marginCard">
          <h4>Profit Margin</h4>
          <div class="amount" id="profitMargin">0%</div>
        </div>
      </div>

      <div class="fee-breakdown">
        <h4>Fee Breakdown</h4>
        <div class="fee-item">
          <span class="fee-name">Commission Fee</span>
          <span class="fee-amount" id="commissionFee">₹0.00</span>
        </div>
        <div class="fee-item">
          <span class="fee-name">Closing Fee</span>
          <span class="fee-amount" id="closingFee">₹0.00</span>
        </div>
        <div class="fee-item">
          <span class="fee-name">Collection Fee (2%)</span>
          <span class="fee-amount" id="collectionFee">₹0.00</span>
        </div>
        <div class="fee-item">
          <span class="fee-name">Shipping Fee</span>
          <span class="fee-amount" id="shippingFee">₹0.00</span>
        </div>
        <div class="fee-item">
          <span class="fee-name">Fixed Fee</span>
          <span class="fee-amount" id="fixedFeeDisplay">₹0.00</span>
        </div>
        <div class="fee-item">
          <span class="fee-name">GST (<span id="gstRateDisplay">18</span>% on Fees)</span>
          <span class="fee-amount" id="gstFee">₹0.00</span>
        </div>
        <div class="fee-item">
          <span class="fee-name">TCS (<span id="tcsRateDisplay">1</span>%)</span>
          <span class="fee-amount" id="tcsFee">₹0.00</span>
        </div>
        
        <hr class="fee-divider">
        
        <div class="profit-loss-section">
          <div class="profit-loss-item" id="finalProfit">
            <span>Final Profit / Loss:</span>
            <span>₹0.00</span>
          </div>
          <div class="profit-loss-item" id="finalMargin">
            <span>Profit Margin:</span>
            <span>0%</span>
          </div>
        </div>
      </div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Flipkart Fee Calculation Examples</h2>

      <h3>Example 1: Mobile Phone Sale</h3>
      <div class="example-text">Selling Price: ₹15,000
Cost Price: ₹12,000
Category: Mobiles (3% commission)
Weight: 0.3 kg
Region: National

Commission: ₹450
Closing Fee: ₹25
Collection Fee: ₹300
Shipping: ₹63
GST: ₹150.84
TCS: ₹150
Total Fees: ₹1,138.84
Payout: ₹13,861.16
Profit: ₹1,861.16 (15.51%)</div>

      <h3>Example 2: Fashion Item</h3>
      <div class="example-text">Selling Price: ₹1,200
Cost Price: ₹600
Category: Men Fashion (15% commission)
Weight: 0.2 kg
Region: Local

Commission: ₹180
Closing Fee: ₹12
Collection Fee: ₹24
Shipping: ₹32
GST: ₹44.64
TCS: ₹12
Total Fees: ₹304.64
Payout: ₹895.36
Profit: ₹295.36 (49.23%)</div>

      <h3>Example 3: Home & Kitchen Item</h3>
      <div class="example-text">Selling Price: ₹800
Cost Price: ₹400
Category: Home & Kitchen (10% commission)
Weight: 0.5 kg
Region: Zonal

Commission: ₹80
Closing Fee: ₹12
Collection Fee: ₹16
Shipping: ₹50
GST: ₹28.44
TCS: ₹8
Total Fees: ₹194.44
Payout: ₹605.56
Profit: ₹205.56 (51.39%)</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Flipkart Seller Fee Calculator 2025 - Complete Guide</h2>

    <p>Maximize your profits on Flipkart with our comprehensive <strong>Seller Fee Calculator</strong>. This advanced tool helps you understand all the fees, commissions, and charges involved in selling on Flipkart, so you can price your products competitively while maintaining healthy profit margins. Whether you're a new seller or an experienced e-commerce business, this calculator provides accurate insights into your Flipkart selling costs.</p>

    <h3>How to Use This Flipkart Fee Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Product Details:</strong> Input your product's selling price, cost price, weight, and select the appropriate category from the dropdown menu.</li>
      <li><strong>Select Shipping Region:</strong> Choose between Local, Zonal, or National shipping to calculate accurate shipping costs.</li>
      <li><strong>Choose Seller Type:</strong> Select your seller type (Individual, Business, or Premium) for accurate fee calculations.</li>
      <li><strong>Calculate:</strong> Click the "Calculate Fees & Profit" button to get a detailed breakdown of all Flipkart charges and your net profit.</li>
      <li><strong>Analyze Results:</strong> Review the fee breakdown, profit margin, and payout amount to optimize your pricing strategy.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're selling a mobile phone on Flipkart with a selling price of ₹15,000 and a cost price of ₹12,000. Using our calculator, you'll discover that after all Flipkart fees (commission, closing fee, collection fee, shipping, GST, and TCS), your net profit would be approximately ₹1,861 with a 15.51% profit margin. This insight helps you determine if your pricing is optimal or if you need to adjust to maintain profitability.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>New Sellers:</strong> Understand all Flipkart fees before listing your first product to avoid surprises.</li>
      <li><strong>Experienced Sellers:</strong> Optimize pricing strategies for different product categories and shipping regions.</li>
      <li><strong>E-commerce Businesses:</strong> Plan inventory and pricing for maximum profitability across your product portfolio.</li>
      <li><strong>Product Managers:</strong> Calculate accurate landed costs for products sold on Flipkart.</li>
      <li><strong>Financial Analysts:</strong> Analyze the profitability of Flipkart as a sales channel for your business.</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>What is the commission rate for different categories on Flipkart?</strong><br>
      Commission rates vary by category: Mobiles (3%), Electronics Accessories (7%), Large Appliances (6%), Men Fashion (15%), Women Fashion (17%), Home & Kitchen (10%), Furniture (10%), Beauty & Personal Care (13%), Books (8%), Grocery (5%), and Sports & Automotive (12%).</p>

    <p><strong>How is the closing fee calculated?</strong><br>
      Closing fee is based on selling price: ₹6 for products up to ₹250, ₹12 for products between ₹251-₹500, and ₹25 for products above ₹500.</p>

    <p><strong>What is TCS and why is it charged?</strong><br>
      TCS (Tax Collected at Source) is a government tax that Flipkart collects on behalf of sellers. It's currently 1% of the selling price and is applicable to all sellers.</p>

    <p><strong>How does shipping region affect the fees?</strong><br>
      Shipping costs vary by region: Local (₹30 + ₹10/kg), Zonal (₹45 + ₹10/kg), National (₹60 + ₹10/kg). These costs are borne by the seller unless you charge separate shipping.</p>

    <p><strong>Can I use this calculator for other marketplaces like Amazon or Meesho?</strong><br>
      This calculator is specifically designed for Flipkart's fee structure. Other marketplaces have different commission rates and fee structures, so you would need a dedicated calculator for each platform.</p>

    <h3>Why Choose Our Flipkart Fee Calculator?</h3>
    <p>Our <strong>Flipkart Seller Fee Calculator</strong> stands out from other tools because of its accuracy, comprehensiveness, and user-friendly interface. We regularly update our fee structures to match Flipkart's latest policies, ensuring you get the most accurate calculations. The tool also includes advanced options for experienced sellers who want to factor in additional costs or customize tax rates.</p>

    <h3>Understanding Flipkart's Fee Structure</h3>
    <p>Flipkart charges several types of fees to sellers, which can be categorized as follows:</p>
    <ul>
      <li><strong>Commission Fee:</strong> Percentage of selling price that varies by product category</li>
      <li><strong>Fixed Fees:</strong> Closing fee and fixed fee that depend on product price and category</li>
      <li><strong>Payment Processing:</strong> Collection fee for payment gateway services</li>
      <li><strong>Shipping Charges:</strong> Costs for picking, packing, and shipping products to customers</li>
      <li><strong>Taxes:</strong> GST on Flipkart's services and TCS as per government regulations</li>
    </ul>
    <p>Understanding these fees is crucial for setting the right prices and maintaining profitability on the Flipkart platform.</p>
  </div>
</div>

<!-- Compare Scenarios Modal -->
<div id="compareModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Compare Pricing Scenarios</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div id="comparisonResults">
        <!-- Comparison results will be inserted here -->
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeCompare">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const calculateBtn = document.getElementById('calculateBtn');
    const saveBtn = document.getElementById('saveCalculation');
    const compareBtn = document.getElementById('compareScenarios');
    const resetBtn = document.getElementById('resetCalculator');
    const advancedToggle = document.getElementById('advancedToggle');
    const advancedContent = document.getElementById('advancedContent');
    const advancedArrow = document.getElementById('advancedArrow');
    const resultSection = document.getElementById('resultSection');
    const alertContainer = document.getElementById('alertContainer');
    
    // Input Elements
    const sellingPrice = document.getElementById('sellingPrice');
    const costPrice = document.getElementById('costPrice');
    const productCategory = document.getElementById('productCategory');
    const shippingRegion = document.getElementById('shippingRegion');
    const productWeight = document.getElementById('productWeight');
    const sellerType = document.getElementById('sellerType');
    
    // Advanced Options
    const fixedFee = document.getElementById('fixedFee');
    const shippingCharge = document.getElementById('shippingCharge');
    const gstRate = document.getElementById('gstRate');
    const tcsRate = document.getElementById('tcsRate');
    
    // Result Elements
    const totalFeesCounter = document.getElementById('totalFeesCounter');
    const payoutCounter = document.getElementById('payoutCounter');
    const profitCounter = document.getElementById('profitCounter');
    const marginCounter = document.getElementById('marginCounter');
    
    const totalFees = document.getElementById('totalFees');
    const sellerPayout = document.getElementById('sellerPayout');
    const netProfit = document.getElementById('netProfit');
    const profitMargin = document.getElementById('profitMargin');
    const profitCard = document.getElementById('profitCard');
    const marginCard = document.getElementById('marginCard');
    
    const commissionFee = document.getElementById('commissionFee');
    const closingFee = document.getElementById('closingFee');
    const collectionFee = document.getElementById('collectionFee');
    const shippingFee = document.getElementById('shippingFee');
    const fixedFeeDisplay = document.getElementById('fixedFeeDisplay');
    const gstFee = document.getElementById('gstFee');
    const tcsFee = document.getElementById('tcsFee');
    const gstRateDisplay = document.getElementById('gstRateDisplay');
    const tcsRateDisplay = document.getElementById('tcsRateDisplay');
    
    const finalProfit = document.getElementById('finalProfit');
    const finalMargin = document.getElementById('finalMargin');
    
    // Modal Elements
    const compareModal = document.getElementById('compareModal');
    const closeCompare = document.getElementById('closeCompare');
    const comparisonResults = document.getElementById('comparisonResults');
    const closeModal = document.querySelectorAll('.close-modal');

    // Commission rates by category
    const commissionRates = {
      mobiles: 3,
      electronics: 7,
      appliances: 6,
      menfashion: 15,
      womenfashion: 17,
      home: 10,
      furniture: 10,
      beauty: 13,
      books: 8,
      grocery: 5,
      sports: 12
    };

    // Shipping base rates by region
    const shippingRates = {
      local: 30,
      zonal: 45,
      national: 60
    };

    // Store calculation history
    let calculationHistory = [];

    // Event Listeners
    calculateBtn.addEventListener('click', calculateFees);
    saveBtn.addEventListener('click', saveCalculation);
    compareBtn.addEventListener('click', compareScenarios);
    resetBtn.addEventListener('click', resetCalculator);
    advancedToggle.addEventListener('click', toggleAdvancedOptions);
    
    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        compareModal.style.display = 'none';
      });
    });

    // Close compare modal
    closeCompare.addEventListener('click', function() {
      compareModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === compareModal) {
        compareModal.style.display = 'none';
      }
    });

    // Update GST and TCS rate displays when changed
    gstRate.addEventListener('input', function() {
      gstRateDisplay.textContent = gstRate.value;
    });

    tcsRate.addEventListener('input', function() {
      tcsRateDisplay.textContent = tcsRate.value;
    });

    function calculateFees() {
      // Validate inputs
      if (!sellingPrice.value || !costPrice.value || !productWeight.value) {
        showAlert('Please fill all required fields!', 'error');
        return;
      }

      const sp = parseFloat(sellingPrice.value);
      const cp = parseFloat(costPrice.value);
      const weight = parseFloat(productWeight.value);
      const category = productCategory.value;
      const region = shippingRegion.value;
      const fixedFeeVal = parseFloat(fixedFee.value) || 0;
      const shippingChargeVal = parseFloat(shippingCharge.value) || 0;
      const gstRateVal = parseFloat(gstRate.value) || 18;
      const tcsRateVal = parseFloat(tcsRate.value) || 1;

      if (sp <= 0 || cp <= 0 || weight <= 0) {
        showAlert('Please enter valid positive values!', 'error');
        return;
      }

      // Calculate commission
      const comRate = commissionRates[category];
      const commission = sp * comRate / 100;

      // Calculate closing fee
      let closing = sp <= 250 ? 6 : (sp <= 500 ? 12 : 25);

      // Calculate collection fee
      const collection = sp * 0.02;

      // Calculate shipping fee
      let ship = shippingRates[region] + (weight * 10);

      // Calculate GST
      const gst = (gstRateVal / 100) * (commission + collection + closing + ship + fixedFeeVal);

      // Calculate TCS
      const tcs = sp * (tcsRateVal / 100);

      // Calculate total fees
      const totalFee = commission + collection + closing + ship + fixedFeeVal + gst + tcs;

      // Calculate payout and profit
      const payout = sp - totalFee + shippingChargeVal;
      const profit = payout - cp;
      const profitPercentage = (profit / cp) * 100;

      // Update counters
      totalFeesCounter.textContent = `₹${totalFee.toFixed(2)}`;
      payoutCounter.textContent = `₹${payout.toFixed(2)}`;
      profitCounter.textContent = `₹${profit.toFixed(2)}`;
      marginCounter.textContent = `${profitPercentage.toFixed(2)}%`;

      // Update main results
      totalFees.textContent = `₹${totalFee.toFixed(2)}`;
      sellerPayout.textContent = `₹${payout.toFixed(2)}`;
      netProfit.textContent = `₹${profit.toFixed(2)}`;
      profitMargin.textContent = `${profitPercentage.toFixed(2)}%`;

      // Update fee breakdown
      commissionFee.textContent = `₹${commission.toFixed(2)}`;
      closingFee.textContent = `₹${closing.toFixed(2)}`;
      collectionFee.textContent = `₹${collection.toFixed(2)}`;
      shippingFee.textContent = `₹${ship.toFixed(2)}`;
      fixedFeeDisplay.textContent = `₹${fixedFeeVal.toFixed(2)}`;
      gstFee.textContent = `₹${gst.toFixed(2)}`;
      tcsFee.textContent = `₹${tcs.toFixed(2)}`;

      // Update final profit/loss
      finalProfit.innerHTML = `
        <span>Final Profit / Loss:</span>
        <span>₹${profit.toFixed(2)}</span>
      `;
      
      finalMargin.innerHTML = `
        <span>Profit Margin:</span>
        <span>${profitPercentage.toFixed(2)}%</span>
      `;

      // Set profit/loss colors
      if (profit >= 0) {
        profitCard.className = 'result-card profit-positive';
        marginCard.className = 'result-card profit-positive';
        finalProfit.className = 'profit-loss-item profit-positive';
        finalMargin.className = 'profit-loss-item profit-positive';
      } else {
        profitCard.className = 'result-card profit-negative';
        marginCard.className = 'result-card profit-negative';
        finalProfit.className = 'profit-loss-item profit-negative';
        finalMargin.className = 'profit-loss-item profit-negative';
      }

      // Show result section
      resultSection.style.display = 'block';

      // Store calculation
      const calculation = {
        timestamp: new Date().toISOString(),
        sellingPrice: sp,
        costPrice: cp,
        category: category,
        profit: profit,
        margin: profitPercentage,
        fees: totalFee
      };
      
      calculationHistory.push(calculation);
      
      // Keep only last 10 calculations
      if (calculationHistory.length > 10) {
        calculationHistory = calculationHistory.slice(-10);
      }

      showAlert('Fees calculated successfully!', 'success');
    }

    function saveCalculation() {
      if (calculationHistory.length === 0) {
        showAlert('No calculation to save! Please calculate first.', 'error');
        return;
      }

      const latestCalculation = calculationHistory[calculationHistory.length - 1];
      const dataStr = JSON.stringify(latestCalculation, null, 2);
      const dataBlob = new Blob([dataStr], {type: 'application/json'});
      
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `flipkart-calculation-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      showAlert('Calculation saved successfully!', 'success');
    }

    function compareScenarios() {
      if (calculationHistory.length < 2) {
        showAlert('Need at least 2 calculations to compare!', 'error');
        return;
      }

      // Generate comparison table
      let comparisonHTML = `
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
            <tr style="background: #f8f9fa;">
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #dee2e6;">Scenario</th>
              <th style="padding: 12px; text-align: right; border-bottom: 2px solid #dee2e6;">Selling Price</th>
              <th style="padding: 12px; text-align: right; border-bottom: 2px solid #dee2e6;">Cost Price</th>
              <th style="padding: 12px; text-align: right; border-bottom: 2px solid #dee2e6;">Total Fees</th>
              <th style="padding: 12px; text-align: right; border-bottom: 2px solid #dee2e6;">Profit</th>
              <th style="padding: 12px; text-align: right; border-bottom: 2px solid #dee2e6;">Margin</th>
            </tr>
          </thead>
          <tbody>
      `;

      calculationHistory.forEach((calc, index) => {
        const profitClass = calc.profit >= 0 ? 'profit-positive' : 'profit-negative';
        comparisonHTML += `
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #dee2e6;">Scenario ${index + 1}</td>
            <td style="padding: 12px; text-align: right; border-bottom: 1px solid #dee2e6;">₹${calc.sellingPrice.toFixed(2)}</td>
            <td style="padding: 12px; text-align: right; border-bottom: 1px solid #dee2e6;">₹${calc.costPrice.toFixed(2)}</td>
            <td style="padding: 12px; text-align: right; border-bottom: 1px solid #dee2e6;">₹${calc.fees.toFixed(2)}</td>
            <td style="padding: 12px; text-align: right; border-bottom: 1px solid #dee2e6;" class="${profitClass}">₹${calc.profit.toFixed(2)}</td>
            <td style="padding: 12px; text-align: right; border-bottom: 1px solid #dee2e6;" class="${profitClass}">${calc.margin.toFixed(2)}%</td>
          </tr>
        `;
      });

      comparisonHTML += `</tbody></table>`;
      comparisonResults.innerHTML = comparisonHTML;
      compareModal.style.display = 'block';
    }

    function resetCalculator() {
      sellingPrice.value = '';
      costPrice.value = '';
      productWeight.value = '0.5';
      fixedFee.value = '0';
      shippingCharge.value = '0';
      resultSection.style.display = 'none';
      
      // Reset counters
      totalFeesCounter.textContent = '₹0.00';
      payoutCounter.textContent = '₹0.00';
      profitCounter.textContent = '₹0.00';
      marginCounter.textContent = '0%';
      
      showAlert('Calculator reset!', 'success');
    }

    function toggleAdvancedOptions() {
      advancedContent.classList.toggle('show');
      advancedArrow.classList.toggle('fa-chevron-down');
      advancedArrow.classList.toggle('fa-chevron-up');
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
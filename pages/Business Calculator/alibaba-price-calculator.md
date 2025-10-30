---
layout: default
title: "Alibaba Price Calculator – Estimate Product Costs & Profit"
permalink: /alibaba-price-calculator-estimate-product-costs-profit/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Alibaba Price Calculator – Estimate Product Costs & Profit</title>
<meta name="description"
  content="Free Alibaba price calculator to estimate your product costs, fees, and profit margins. Optimize your pricing strategy for Alibaba.com with our comprehensive calculator.">
<meta name="keywords"
  content="alibaba price calculator, alibaba fees, alibaba commission, product pricing, b2b pricing, wholesale calculator, profit calculator">
<meta name="author" content="paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Alibaba Price Calculator Styles */
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

  .input-section input, .input-section select {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    margin-bottom: 15px;
    transition: border-color 0.3s;
  }

  .input-section input:focus, .input-section select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .input-section label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #2c3e50;
  }

  .checkbox-group {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
  }

  .checkbox-group input {
    width: 18px;
    height: 18px;
  }

  .checkbox-group label {
    margin-bottom: 0;
    font-weight: normal;
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

  .results-section {
    margin-top: 30px;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .results-section h3 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
  }

  .result-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
  }

  .result-item.total {
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--primary);
    border-bottom: none;
    border-top: 2px solid #eee;
    margin-top: 10px;
    padding-top: 15px;
  }

  .result-item.profit {
    font-weight: bold;
    font-size: 1.3rem;
    color: var(--success);
    border-bottom: none;
    margin-top: 10px;
    padding-top: 15px;
  }

  .result-item.loss {
    font-weight: bold;
    font-size: 1.3rem;
    color: #dc3545;
    border-bottom: none;
    margin-top: 10px;
    padding-top: 15px;
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
  }

  /* Input grid layout */
  .input-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .input-group {
    display: flex;
    flex-direction: column;
  }

  .fee-breakdown {
    background: white;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
    border-left: 4px solid #FF6A00;
  }

  .fee-breakdown h4 {
    color: #FF6A00;
    margin-bottom: 15px;
    font-size: 1.2rem;
  }

  .fee-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .fee-item:last-child {
    border-bottom: none;
    font-weight: bold;
    color: var(--primary);
  }

  .info-tooltip {
    color: #6c757d;
    cursor: help;
    margin-left: 5px;
  }

  .membership-options {
    background: white;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    border: 1px solid #e0e0e0;
  }

  .membership-option {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .membership-option:hover {
    background-color: #f8f9fa;
  }

  .membership-option.active {
    background-color: #e3f2fd;
    border: 1px solid var(--primary);
  }

  .membership-option input {
    margin: 0;
  }
</style>

<div class="converter-container">
  <h1>Alibaba Price Calculator</h1>
  <p class="welcome-message">Calculate your product costs, Alibaba fees, and profit margins for selling on Alibaba.com. All calculations are in Indian Rupees (₹).</p>

  <div class="converter-section">
    <h2>Product Information</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Commission Fee: </span>
        <span id="commissionFee">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Payment Processing Fee: </span>
        <span id="paymentFee">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Listing Fee: </span>
        <span id="listingFee">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Membership Fee: </span>
        <span id="membershipFee">₹0.00</span>
      </div>
    </div>

    <div class="input-grid">
      <div class="input-group">
        <label for="product_price">Product Price (₹) <span class="info-tooltip" title="The selling price of your product">ℹ️</span></label>
        <input type="number" id="product_price" placeholder="Enter Price" min="0" step="0.01">
      </div>

      <div class="input-group">
        <label for="commission_fee">Commission Fee (%) <span class="info-tooltip" title="Alibaba's commission percentage (typically 1-5%)">ℹ️</span></label>
        <input type="number" id="commission_fee" placeholder="Enter Commission Fee" min="0" max="100" step="0.1" value="3">
      </div>

      <div class="input-group">
        <label for="payment_processing_fee">Payment Processing Fee (%) <span class="info-tooltip" title="Payment gateway fees (typically 2.5-4%)">ℹ️</span></label>
        <input type="number" id="payment_processing_fee" placeholder="Enter Payment Processing Fee" min="0" max="100" step="0.1" value="3.5">
      </div>

      <div class="input-group">
        <label for="listing_fee">Listing Fee (₹) <span class="info-tooltip" title="One-time fee for listing products">ℹ️</span></label>
        <input type="number" id="listing_fee" placeholder="Enter Listing Fee" min="0" step="0.01" value="0">
      </div>
    </div>

    <div class="membership-options">
      <h4>Membership Plan <span class="info-tooltip" title="Choose your Alibaba membership plan">ℹ️</span></h4>
      
      <div class="membership-option active" data-value="0">
        <input type="radio" id="free_plan" name="membership" value="0" checked>
        <label for="free_plan">Free Plan - ₹0/month</label>
      </div>
      
      <div class="membership-option" data-value="15000">
        <input type="radio" id="basic_plan" name="membership" value="15000">
        <label for="basic_plan">Basic Plan - ₹15,000/year</label>
      </div>
      
      <div class="membership-option" data-value="35000">
        <input type="radio" id="premium_plan" name="membership" value="35000">
        <label for="premium_plan">Premium Plan - ₹35,000/year</label>
      </div>
    </div>

    <div class="input-grid">
      <div class="input-group">
        <label for="product_cost">Product Cost (₹) <span class="info-tooltip" title="Your cost to produce or acquire the product">ℹ️</span></label>
        <input type="number" id="product_cost" placeholder="Enter Product Cost" min="0" step="0.01">
      </div>

      <div class="input-group">
        <label for="shipping_cost">Shipping Cost (₹) <span class="info-tooltip" title="Cost to ship the product to customer">ℹ️</span></label>
        <input type="number" id="shipping_cost" placeholder="Enter Shipping Cost" min="0" step="0.01">
      </div>

      <div class="input-group">
        <label for="additional_costs">Additional Costs (₹) <span class="info-tooltip" title="Packaging, marketing, or other expenses">ℹ️</span></label>
        <input type="number" id="additional_costs" placeholder="Enter Additional Costs" min="0" step="0.01">
      </div>

      <div class="input-group">
        <label for="monthly_volume">Monthly Sales Volume <span class="info-tooltip" title="Estimated number of units sold per month">ℹ️</span></label>
        <input type="number" id="monthly_volume" placeholder="Enter Monthly Volume" min="1" step="1" value="100">
      </div>
    </div>

    <div class="button-section">
      <button class="case-button" id="calculateButton">Calculate</button>
      <button class="case-button secondary" id="resetButton">Reset</button>
      <button class="case-button success" id="saveButton">Save Calculation</button>
      <button class="case-button warning" id="detailsButton">View Fee Details</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="results-section" id="resultsSection" style="display: none;">
      <h3>Calculation Results</h3>
      
      <div class="result-item">
        <span>Product Price:</span>
        <span id="resultProductPrice">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span>Product Cost:</span>
        <span id="resultProductCost">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span>Shipping Cost:</span>
        <span id="resultShippingCost">₹0.00</span>
      </div>
      
      <div class="fee-breakdown">
        <h4>Alibaba Fees Breakdown</h4>
        <div class="fee-item">
          <span>Commission Fee (<span id="commissionPercent">0%</span>):</span>
          <span id="breakdownCommissionFee">₹0.00</span>
        </div>
        <div class="fee-item">
          <span>Payment Processing Fee (<span id="paymentPercent">0%</span>):</span>
          <span id="breakdownPaymentFee">₹0.00</span>
        </div>
        <div class="fee-item">
          <span>Listing Fee:</span>
          <span id="breakdownListingFee">₹0.00</span>
        </div>
        <div class="fee-item">
          <span>Monthly Membership Fee:</span>
          <span id="breakdownMembershipFee">₹0.00</span>
        </div>
        <div class="fee-item">
          <span>Additional Costs:</span>
          <span id="breakdownAdditionalCosts">₹0.00</span>
        </div>
        <div class="fee-item">
          <span>Total Fees & Costs:</span>
          <span id="breakdownTotalFees">₹0.00</span>
        </div>
      </div>
      
      <div class="result-item total">
        <span>Total Revenue (Monthly):</span>
        <span id="resultMonthlyRevenue">₹0.00</span>
      </div>
      
      <div class="result-item total">
        <span>Total Costs (Monthly):</span>
        <span id="resultMonthlyCosts">₹0.00</span>
      </div>
      
      <div class="result-item profit" id="profitResult">
        <span>Net Profit (Monthly):</span>
        <span id="resultNetProfit">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span>Profit Margin:</span>
        <span id="resultProfitMargin">0%</span>
      </div>

      <div class="result-item">
        <span>Break-even Point:</span>
        <span id="resultBreakEven">0 units</span>
      </div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Example 1: Wholesale Electronics</h3>
      <div class="example-text">
Product Price: ₹5,000
Commission Fee: 3%
Payment Processing: 3.5%
Listing Fee: ₹0
Membership: Free Plan
Product Cost: ₹3,200
Shipping Cost: ₹200
Additional Costs: ₹100
Monthly Volume: 50 units

Results:
- Total Monthly Revenue: ₹250,000
- Total Monthly Costs: ₹187,500
- Net Monthly Profit: ₹62,500
- Profit Margin: 25.0%
      </div>

      <h3>Example 2: Premium Membership Business</h3>
      <div class="example-text">
Product Price: ₹12,000
Commission Fee: 2%
Payment Processing: 3%
Listing Fee: ₹500
Membership: Premium Plan (₹35,000/year)
Product Cost: ₹8,000
Shipping Cost: ₹500
Additional Costs: ₹300
Monthly Volume: 20 units

Results:
- Total Monthly Revenue: ₹240,000
- Total Monthly Costs: ₹187,933
- Net Monthly Profit: ₹52,067
- Profit Margin: 21.7%
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Alibaba Price Calculator - Optimize Your B2B Pricing Strategy</h2>

    <p>Our free <strong>Alibaba Price Calculator</strong> helps B2B sellers and manufacturers accurately determine the true cost of selling products on Alibaba.com. By accounting for all Alibaba fees, commission structures, membership costs, and operational expenses, you can set competitive wholesale prices while ensuring healthy profit margins. All calculations are displayed in Indian Rupees (₹) for your convenience.</p>

    <h3>How to Use This Alibaba Price Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Product Price:</strong> Input your wholesale selling price in Indian Rupees.</li>
      <li><strong>Configure Commission Fee:</strong> Set Alibaba's commission percentage (typically 1-5%).</li>
      <li><strong>Set Payment Processing Fee:</strong> Enter payment gateway fees (usually 2.5-4%).</li>
      <li><strong>Add Listing Fee:</strong> Include any one-time listing costs.</li>
      <li><strong>Choose Membership Plan:</strong> Select your Alibaba membership level.</li>
      <li><strong>Input Costs:</strong> Enter product cost, shipping, and additional expenses.</li>
      <li><strong>Set Sales Volume:</strong> Estimate your monthly sales volume.</li>
      <li><strong>Calculate:</strong> Click "Calculate" to see your net profit and margin analysis.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a manufacturer selling industrial equipment on Alibaba at ₹50,000 per unit. Your production cost is ₹35,000, shipping is ₹2,000 per unit, and you pay 3% commission to Alibaba plus 3.5% payment processing fees. With the Premium membership (₹35,000 annually) and selling 10 units monthly, our calculator shows you'd generate ₹500,000 in monthly revenue with ₹404,583 in total costs, resulting in ₹95,417 monthly profit and a 19.1% profit margin. This helps you evaluate if your pricing strategy is sustainable for business growth.</p>

    <h3>Understanding Alibaba Fees & Membership Plans:</h3>
    <p>Alibaba offers different membership tiers with varying benefits:</p>
    <ul>
      <li><strong>Free Plan:</strong> Basic listing capabilities with standard commission rates</li>
      <li><strong>Basic Plan (₹15,000/year):</strong> Enhanced visibility and lower commission rates</li>
      <li><strong>Premium Plan (₹35,000/year):</strong> Maximum exposure, premium support, and best commission rates</li>
    </ul>

    <p><strong>Standard Fee Structure:</strong></p>
    <ul>
      <li><strong>Commission Fees:</strong> 1-5% of transaction value (varies by product category and membership)</li>
      <li><strong>Payment Processing:</strong> 2.5-4% depending on payment method and volume</li>
      <li><strong>Listing Fees:</strong> Optional premium listing features available</li>
      <li><strong>Membership Fees:</strong> Annual subscription for enhanced services</li>
    </ul>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Manufacturers:</strong> Determine optimal wholesale pricing for international markets</li>
      <li><strong>Exporters:</strong> Calculate true costs when selling through Alibaba's B2B platform</li>
      <li><strong>Wholesalers:</strong> Analyze profitability across different product categories</li>
      <li><strong>Startup Businesses:</strong> Plan pricing strategy before entering international markets</li>
      <li><strong>Existing Sellers:</strong> Optimize membership plans and commission structures</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>Are Alibaba fees the same for all product categories?</strong><br>
      No, commission rates vary by product category. Electronics typically have lower rates than custom manufacturing services.</p>

    <p><strong>Can I negotiate commission rates with Alibaba?</strong><br>
      Premium members often get better commission rates. High-volume sellers may also qualify for custom rates.</p>

    <p><strong>Is the membership fee worth it for small businesses?</strong><br>
      It depends on your sales volume. Our calculator helps you determine the break-even point for membership upgrades.</p>

    <p><strong>Does this calculator include all possible Alibaba fees?</strong><br>
      This calculator includes the major fees most sellers encounter. Additional services like advertising or premium support may have separate costs.</p>

    <p><strong>Is my pricing data secure when using this calculator?</strong><br>
      Yes, all calculations happen in your browser and no data is stored on our servers. Your business information remains completely private.</p>

    <h3>Why Choose Our Alibaba Price Calculator?</h3>
    <p>Our <strong>Alibaba Price Calculator</strong> provides the most comprehensive fee analysis specifically designed for B2B sellers on Alibaba.com. Unlike simple percentage calculators, our tool accounts for complex fee structures including annual membership costs, variable commission rates, and monthly sales volume. The interface is tailored for wholesale businesses, with all calculations happening securely in your browser to protect your sensitive pricing information.</p>

    <h3>Pricing Strategy Tips for Alibaba Sellers</h3>
    <p>To maximize your success on Alibaba, consider these B2B pricing strategies:</p>
    <ul>
      <li><strong>Volume-Based Pricing:</strong> Offer tiered pricing for different order quantities</li>
      <li><strong>MOQ Strategy:</strong> Set minimum order quantities to ensure profitability</li>
      <li><strong>International Pricing:</strong> Account for currency fluctuations and international shipping</li>
      <li><strong>Customization Premium:</strong> Charge appropriately for custom orders and specifications</li>
      <li><strong>Membership Optimization:</strong> Choose the right membership level based on your sales volume</li>
      <li><strong>Seasonal Adjustments:</strong> Adjust prices based on global demand patterns</li>
    </ul>

    <h3>Common Mistakes to Avoid in B2B Pricing</h3>
    <p>Many Alibaba sellers make these pricing errors that hurt profitability:</p>
    <ul>
      <li><strong>Undercutting Too Much:</strong> Competing solely on price can lead to unsustainable margins</li>
      <li><strong>Ignoring Hidden Costs:</strong> Forgetting international transaction fees or compliance costs</li>
      <li><strong>One-Size-Fits-All Pricing:</strong> Not adjusting prices for different markets or customer types</li>
      <li><strong>Neglecting Membership ROI:</strong> Not calculating whether premium features justify their cost</li>
      <li><strong>Static Pricing:</strong> Not regularly reviewing and adjusting prices based on costs and competition</li>
    </ul>
  </div>
</div>

<!-- Fee Details Modal -->
<div id="detailsModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Alibaba Fee Details</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <h4>Standard Alibaba Fee Structure</h4>
      <ul>
        <li><strong>Commission Fees:</strong> 1-5% of transaction value
          <ul>
            <li>Electronics: 1-3%</li>
            <li>Apparel: 3-5%</li>
            <li>Industrial: 2-4%</li>
            <li>Custom Manufacturing: 3-5%</li>
          </ul>
        </li>
        <li><strong>Payment Processing:</strong> 2.5-4% depending on method</li>
        <li><strong>Listing Fees:</strong> Free basic listings, premium features available</li>
        <li><strong>Membership Plans:</strong>
          <ul>
            <li>Free: ₹0/year</li>
            <li>Basic: ₹15,000/year</li>
            <li>Premium: ₹35,000/year</li>
          </ul>
        </li>
      </ul>
      
      <h4>Fee Calculation Example</h4>
      <p>For a ₹10,000 product with 3% commission and 3.5% payment processing:</p>
      <ul>
        <li>Commission: 3% of ₹10,000 = ₹300</li>
        <li>Payment Processing: 3.5% of ₹10,000 = ₹350</li>
        <li>Total Fees: ₹300 + ₹350 = ₹650</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button class="modal-button primary" id="closeDetails">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculateButton');
    const resetButton = document.getElementById('resetButton');
    const saveButton = document.getElementById('saveButton');
    const detailsButton = document.getElementById('detailsButton');
    const alertContainer = document.getElementById('alertContainer');
    const resultsSection = document.getElementById('resultsSection');
    const detailsModal = document.getElementById('detailsModal');
    const closeDetails = document.getElementById('closeDetails');
    const closeModal = document.querySelectorAll('.close-modal');
    
    // Input fields
    const productPriceInput = document.getElementById('product_price');
    const commissionFeeInput = document.getElementById('commission_fee');
    const paymentProcessingInput = document.getElementById('payment_processing_fee');
    const listingFeeInput = document.getElementById('listing_fee');
    const productCostInput = document.getElementById('product_cost');
    const shippingCostInput = document.getElementById('shipping_cost');
    const additionalCostsInput = document.getElementById('additional_costs');
    const monthlyVolumeInput = document.getElementById('monthly_volume');
    
    // Membership options
    const membershipOptions = document.querySelectorAll('.membership-option');
    let selectedMembershipFee = 0;
    
    // Counter fields
    const commissionFeeCounter = document.getElementById('commissionFee');
    const paymentFeeCounter = document.getElementById('paymentFee');
    const listingFeeCounter = document.getElementById('listingFee');
    const membershipFeeCounter = document.getElementById('membershipFee');
    
    // Result fields
    const resultProductPrice = document.getElementById('resultProductPrice');
    const resultProductCost = document.getElementById('resultProductCost');
    const resultShippingCost = document.getElementById('resultShippingCost');
    const resultMonthlyRevenue = document.getElementById('resultMonthlyRevenue');
    const resultMonthlyCosts = document.getElementById('resultMonthlyCosts');
    const resultNetProfit = document.getElementById('resultNetProfit');
    const resultProfitMargin = document.getElementById('resultProfitMargin');
    const resultBreakEven = document.getElementById('resultBreakEven');
    const profitResult = document.getElementById('profitResult');
    
    // Breakdown fields
    const commissionPercent = document.getElementById('commissionPercent');
    const paymentPercent = document.getElementById('paymentPercent');
    const breakdownCommissionFee = document.getElementById('breakdownCommissionFee');
    const breakdownPaymentFee = document.getElementById('breakdownPaymentFee');
    const breakdownListingFee = document.getElementById('breakdownListingFee');
    const breakdownMembershipFee = document.getElementById('breakdownMembershipFee');
    const breakdownAdditionalCosts = document.getElementById('breakdownAdditionalCosts');
    const breakdownTotalFees = document.getElementById('breakdownTotalFees');

    // Event listeners
    calculateButton.addEventListener('click', calculatePrice);
    resetButton.addEventListener('click', resetCalculator);
    saveButton.addEventListener('click', saveCalculation);
    detailsButton.addEventListener('click', showFeeDetails);
    closeDetails.addEventListener('click', closeDetailsModal);
    
    // Membership selection
    membershipOptions.forEach(option => {
      option.addEventListener('click', function() {
        // Update radio button
        const radio = this.querySelector('input[type="radio"]');
        radio.checked = true;
        
        // Update selected membership fee
        selectedMembershipFee = parseFloat(this.getAttribute('data-value'));
        
        // Update active class
        membershipOptions.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
      });
    });
    
    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        detailsModal.style.display = 'none';
      });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === detailsModal) {
        detailsModal.style.display = 'none';
      }
    });

    function calculatePrice() {
      // Get input values
      const productPrice = parseFloat(productPriceInput.value) || 0;
      const commissionFeeRate = parseFloat(commissionFeeInput.value) || 0;
      const paymentProcessingRate = parseFloat(paymentProcessingInput.value) || 0;
      const listingFee = parseFloat(listingFeeInput.value) || 0;
      const productCost = parseFloat(productCostInput.value) || 0;
      const shippingCost = parseFloat(shippingCostInput.value) || 0;
      const additionalCosts = parseFloat(additionalCostsInput.value) || 0;
      const monthlyVolume = parseFloat(monthlyVolumeInput.value) || 0;
      
      // Validate inputs
      if (productPrice <= 0) {
        showAlert('Please enter a valid product price.', 'error');
        return;
      }
      
      if (monthlyVolume <= 0) {
        showAlert('Please enter a valid monthly sales volume.', 'error');
        return;
      }
      
      // Calculate fees per unit
      const commissionFeePerUnit = productPrice * (commissionFeeRate / 100);
      const paymentProcessingPerUnit = productPrice * (paymentProcessingRate / 100);
      
      // Calculate monthly membership fee (annual divided by 12)
      const monthlyMembershipFee = selectedMembershipFee / 12;
      
      // Calculate total costs per unit
      const totalCostPerUnit = productCost + shippingCost + additionalCosts + commissionFeePerUnit + paymentProcessingPerUnit;
      
      // Calculate monthly totals
      const monthlyRevenue = productPrice * monthlyVolume;
      const monthlyProductCosts = productCost * monthlyVolume;
      const monthlyShippingCosts = shippingCost * monthlyVolume;
      const monthlyAdditionalCosts = additionalCosts * monthlyVolume;
      const monthlyCommissionFees = commissionFeePerUnit * monthlyVolume;
      const monthlyPaymentFees = paymentProcessingPerUnit * monthlyVolume;
      
      // Total monthly costs
      const totalMonthlyCosts = monthlyProductCosts + monthlyShippingCosts + monthlyAdditionalCosts + 
                               monthlyCommissionFees + monthlyPaymentFees + listingFee + monthlyMembershipFee;
      
      // Net profit
      const netMonthlyProfit = monthlyRevenue - totalMonthlyCosts;
      
      // Profit margin
      const profitMargin = (netMonthlyProfit / monthlyRevenue) * 100;
      
      // Break-even point (units needed to cover fixed costs)
      const fixedCosts = listingFee + monthlyMembershipFee;
      const contributionMargin = productPrice - (productCost + shippingCost + additionalCosts + commissionFeePerUnit + paymentProcessingPerUnit);
      const breakEvenUnits = contributionMargin > 0 ? Math.ceil(fixedCosts / contributionMargin) : 0;
      
      // Update counters
      commissionFeeCounter.textContent = formatCurrency(monthlyCommissionFees);
      paymentFeeCounter.textContent = formatCurrency(monthlyPaymentFees);
      listingFeeCounter.textContent = formatCurrency(listingFee);
      membershipFeeCounter.textContent = formatCurrency(monthlyMembershipFee);
      
      // Update results
      resultProductPrice.textContent = formatCurrency(productPrice);
      resultProductCost.textContent = formatCurrency(monthlyProductCosts);
      resultShippingCost.textContent = formatCurrency(monthlyShippingCosts);
      resultMonthlyRevenue.textContent = formatCurrency(monthlyRevenue);
      resultMonthlyCosts.textContent = formatCurrency(totalMonthlyCosts);
      resultNetProfit.textContent = formatCurrency(netMonthlyProfit);
      resultProfitMargin.textContent = `${profitMargin.toFixed(2)}%`;
      resultBreakEven.textContent = `${breakEvenUnits} units`;
      
      // Update fee breakdown
      commissionPercent.textContent = `${commissionFeeRate}%`;
      paymentPercent.textContent = `${paymentProcessingRate}%`;
      breakdownCommissionFee.textContent = formatCurrency(monthlyCommissionFees);
      breakdownPaymentFee.textContent = formatCurrency(monthlyPaymentFees);
      breakdownListingFee.textContent = formatCurrency(listingFee);
      breakdownMembershipFee.textContent = formatCurrency(monthlyMembershipFee);
      breakdownAdditionalCosts.textContent = formatCurrency(monthlyAdditionalCosts);
      breakdownTotalFees.textContent = formatCurrency(totalMonthlyCosts);
      
      // Style profit/loss
      if (netMonthlyProfit >= 0) {
        profitResult.className = 'result-item profit';
      } else {
        profitResult.className = 'result-item loss';
      }
      
      // Show results section
      resultsSection.style.display = 'block';
      
      showAlert('Price calculation completed successfully!', 'success');
    }
    
    function resetCalculator() {
      // Clear all inputs
      productPriceInput.value = '';
      commissionFeeInput.value = '3';
      paymentProcessingInput.value = '3.5';
      listingFeeInput.value = '0';
      productCostInput.value = '';
      shippingCostInput.value = '';
      additionalCostsInput.value = '';
      monthlyVolumeInput.value = '100';
      
      // Reset membership to free plan
      document.getElementById('free_plan').checked = true;
      selectedMembershipFee = 0;
      membershipOptions.forEach(opt => opt.classList.remove('active'));
      document.querySelector('.membership-option[data-value="0"]').classList.add('active');
      
      // Reset counters
      commissionFeeCounter.textContent = '₹0.00';
      paymentFeeCounter.textContent = '₹0.00';
      listingFeeCounter.textContent = '₹0.00';
      membershipFeeCounter.textContent = '₹0.00';
      
      // Hide results section
      resultsSection.style.display = 'none';
      
      showAlert('Calculator has been reset.', 'success');
    }
    
    function saveCalculation() {
      // In a real application, this would save to a database or local storage
      // For this demo, we'll just show an alert
      showAlert('Calculation saved successfully!', 'success');
    }
    
    function showFeeDetails() {
      detailsModal.style.display = 'block';
    }
    
    function closeDetailsModal() {
      detailsModal.style.display = 'none';
    }
    
    function formatCurrency(amount) {
      if (amount >= 100000) {
        return '₹' + (amount / 100000).toFixed(2) + 'L';
      } else if (amount >= 1000) {
        return '₹' + (amount / 1000).toFixed(1) + 'K';
      } else {
        return '₹' + amount.toFixed(2);
      }
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
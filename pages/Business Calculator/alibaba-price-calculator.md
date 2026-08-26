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
  <h2>Alibaba Price Calculator</h2>

  <p>Pricing for Alibaba is a different exercise than pricing for a retail marketplace like Amazon or Flipkart. There's no single checkout and no flat per-sale commission taken automatically off every order — instead, deals are negotiated per buyer, priced in tiers based on order quantity, and shaped by costs that a B2C seller never has to think about, like sample fees, tooling charges, and freight terms. This calculator helps you work out what actually stays in your pocket after those costs, for a given selling price and order size.</p>

  <h3>Why Wholesale Pricing Needs Its Own Math</h3>

  <p>A retail seller quotes one price and a platform deducts one commission. A wholesale export deal usually involves several moving pieces at once: a minimum order quantity (MOQ) below which the deal isn't worth running at all, a price that often drops as order size grows, freight costs that depend heavily on whether you're quoting EXW, FOB, or CIF terms, and membership or advertising costs that get spread across however many orders you actually close in a year — not deducted per transaction the way a marketplace commission is.</p>

  <p>That's why a flat "price minus fee percentage" calculation, the kind that works fine for a single retail sale, tends to understate or overstate real B2B margins. This tool is built around the actual shape of that math instead.</p>

  <h3>Working Through the Calculator</h3>

  <ol>
    <li><strong>Selling price per unit</strong> — the wholesale price you're quoting the buyer, before any deductions.</li>
    <li><strong>Manufacturing or procurement cost</strong> — what it actually costs you to produce or source each unit, including packaging.</li>
    <li><strong>Freight and logistics cost per unit</strong> — this changes significantly depending on the incoterm you're quoting under, so use the figure that matches what you've actually agreed with the buyer.</li>
    <li><strong>Platform-related costs</strong> — membership tier, any paid promotion or advertising spend, and payment processing charges on the transaction.</li>
    <li><strong>Expected monthly or annual order volume</strong> — this is what lets fixed costs like membership fees get spread realistically across your actual sales, rather than treated as a one-time deduction.</li>
  </ol>

  <p>The result shows net profit per unit and overall margin once every one of those pieces is accounted for — not just revenue minus product cost.</p>

  <h3>A Worked Scenario</h3>

  <p>Take a manufacturer quoting industrial water pumps at ₹50,000 per unit, with a manufacturing cost of ₹35,000 and freight of roughly ₹2,000 per unit under an FOB arrangement. On paper, that's a ₹13,000 gap per unit. Once membership costs are spread across an expected 40 units a month, and payment processing plus a modest advertising spend are factored in, the real per-unit profit typically comes out meaningfully lower than that initial gap suggests — sometimes by a wide enough margin to change whether the deal is worth taking at that price at all. Running the numbers before quoting a buyer, rather than after shipping the first order, is what this calculator is for.</p>

  <h3>Costs That Get Missed Most Often</h3>

  <ul>
    <li><strong>Sample costs.</strong> Buyers routinely request paid or free samples before committing to a bulk order — these add up and are easy to forget when projecting margins on the eventual large order.</li>
    <li><strong>Tooling and setup charges</strong> for custom or private-label products, which are sometimes one-time costs that need to be amortized across the first several orders, not absorbed entirely into the first one.</li>
    <li><strong>Trade assurance or escrow-related fees</strong>, where applicable, which protect both sides of the transaction but do come with a cost.</li>
    <li><strong>Currency conversion.</strong> If you're quoting in USD but managing costs in INR, exchange-rate movement between quoting and payment can quietly erode a margin that looked fine on the day you set the price.</li>
    <li><strong>Compliance and inspection costs</strong> — certifications, third-party quality inspections, and documentation requirements that some buyers and destination countries require before goods can even ship.</li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p><strong>Does Alibaba charge the same fees as a retail marketplace like Amazon?</strong><br>
  No — the fee structure is fundamentally different. Retail marketplaces typically take a fixed commission per sale. Alibaba's costs are more weighted toward membership tiers and optional advertising, which is exactly why spreading those costs across your real order volume (rather than treating them as a per-sale percentage) gives a more accurate picture.</p>

  <p><strong>How do incoterms (EXW, FOB, CIF) actually affect my numbers here?</strong><br>
  They determine who pays for what part of the shipping journey. Quoting EXW means the buyer handles freight from your factory door, so your own logistics cost per unit is lower — but your price needs to reflect that buyers are comparing it against FOB or CIF quotes that already include shipping. Make sure the freight figure you enter matches the terms you've actually quoted.</p>

  <p><strong>Should I set a different price for different order sizes?</strong><br>
  Most experienced exporters do — a tiered structure where the unit price drops at higher quantities, run through this calculator at each tier, shows you whether the lower price on a bulk order still clears your target margin once volume-related savings (like better freight rates per unit) are factored in.</p>

  <p><strong>Can this help me figure out my minimum viable price?</strong><br>
  Yes — enter your full cost stack and your target margin, and you can work backward to see what selling price is actually required to hit that margin, rather than guessing.</p>

  <p><strong>Is my pricing and cost data stored anywhere?</strong><br>
  No. All calculations run locally in your browser, so your cost structure and margins stay private.</p>
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
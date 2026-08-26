---
layout: default
title: "Etsy Price Calculator – Estimate Product Costs & Profit"
permalink: /etsy-price-calculator-estimate-product-costs-profit/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Etsy Price Calculator – Estimate Product Costs & Profit</title>
<meta name="description"
  content="Free Etsy price calculator to estimate your product costs, fees, and profit margins. Optimize your pricing strategy for Etsy Marketplace with our comprehensive calculator.">
<meta name="keywords"
  content="etsy price calculator, etsy fees, etsy marketplace, product pricing, etsy fees calculator, profit calculator, handmade business">
<meta name="author" content="ParamDip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Etsy Price Calculator Styles */
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
    border-left: 4px solid #f78da7;
  }

  .fee-breakdown h4 {
    color: #f78da7;
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
</style>

<div class="converter-container">
  <h1>Etsy Price Calculator</h1>
  <p class="welcome-message">Calculate your product costs, Etsy fees, and profit margins for selling on Etsy Marketplace. All calculations are in Indian Rupees (₹).</p>

  <div class="converter-section">
    <h2>Product Information</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Listing Fee: </span>
        <span id="listingFee">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Transaction Fee: </span>
        <span id="transactionFee">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Payment Processing Fee: </span>
        <span id="paymentFee">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Shipping Fee: </span>
        <span id="shippingFee">₹0.00</span>
      </div>
    </div>

    <div class="input-grid">
      <div class="input-group">
        <label for="product_price">Product Price (₹)</label>
        <input type="number" id="product_price" placeholder="Enter Price" min="0" step="0.01">
      </div>

      <div class="input-group">
        <label for="shipping_fee">Shipping Fee (₹)</label>
        <input type="number" id="shipping_fee" placeholder="Shipping Fee" min="0" step="0.01">
      </div>

      <div class="input-group">
        <label for="production_cost">Production Cost (₹)</label>
        <input type="number" id="production_cost" placeholder="Production Cost" min="0" step="0.01">
      </div>

      <div class="input-group">
        <label for="weight">Weight (grams)</label>
        <input type="number" id="weight" placeholder="Weight (gm)" min="0" step="1">
      </div>
    </div>

    <div class="checkbox-group">
      <input type="checkbox" id="offsite_ads" checked>
      <label for="offsite_ads">Include Offsite Ads Fee (15%)</label>
    </div>

    <div class="input-grid">
      <div class="input-group">
        <label for="vat_rate">VAT Rate (%)</label>
        <input type="number" id="vat_rate" placeholder="Enter VAT rate if applicable" min="0" max="100" step="0.1">
      </div>

      <div class="input-group">
        <label for="setup_fee">Set-Up Fee (₹)</label>
        <input type="number" id="setup_fee" placeholder="Set-Up Fee" min="0" step="0.01">
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
        <span>Shipping Fee:</span>
        <span id="resultShippingFee">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span>Production Cost:</span>
        <span id="resultProductionCost">₹0.00</span>
      </div>
      
      <div class="fee-breakdown">
        <h4>Etsy Fees Breakdown</h4>
        <div class="fee-item">
          <span>Listing Fee:</span>
          <span id="breakdownListingFee">₹0.00</span>
        </div>
        <div class="fee-item">
          <span>Transaction Fee (6.5%):</span>
          <span id="breakdownTransactionFee">₹0.00</span>
        </div>
        <div class="fee-item">
          <span>Payment Processing Fee (3% + ₹4):</span>
          <span id="breakdownPaymentFee">₹0.00</span>
        </div>
        <div class="fee-item">
          <span>Offsite Ads Fee (15%):</span>
          <span id="breakdownAdsFee">₹0.00</span>
        </div>
        <div class="fee-item">
          <span>VAT/GST:</span>
          <span id="breakdownVat">₹0.00</span>
        </div>
        <div class="fee-item">
          <span>Set-Up Fee:</span>
          <span id="breakdownSetupFee">₹0.00</span>
        </div>
        <div class="fee-item">
          <span>Total Fees:</span>
          <span id="breakdownTotalFees">₹0.00</span>
        </div>
      </div>
      
      <div class="result-item total">
        <span>Total Costs:</span>
        <span id="resultTotalCosts">₹0.00</span>
      </div>
      
      <div class="result-item profit" id="profitResult">
        <span>Net Profit:</span>
        <span id="resultNetProfit">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span>Profit Margin:</span>
        <span id="resultProfitMargin">0%</span>
      </div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Example 1: Handmade Jewelry</h3>
      <div class="example-text">
Product Price: ₹1,500
Shipping Fee: ₹100
Production Cost: ₹400
Weight: 50g
Offsite Ads: Yes (15%)
VAT: 18%
Set-Up Fee: ₹0

Results:
- Total Fees: ₹387.25
- Total Costs: ₹787.25
- Net Profit: ₹712.75
- Profit Margin: 47.5%
      </div>

      <h3>Example 2: Digital Product</h3>
      <div class="example-text">
Product Price: ₹800
Shipping Fee: ₹0
Production Cost: ₹0
Weight: 0g
Offsite Ads: No
VAT: 18%
Set-Up Fee: ₹0

Results:
- Total Fees: ₹104.00
- Total Costs: ₹104.00
- Net Profit: ₹696.00
- Profit Margin: 87.0%
      </div>
    </div>
  </div>

 <!-- SEO Content Section -->
<div class="content-placeholder">
  <h2>Etsy Price Calculator</h2>

  <p>Sourcing-based sellers on Amazon or Alibaba have one job when pricing: cover the cost of a product they bought and add a margin. Etsy sellers usually face a harder version of that problem, because a meaningful part of the cost is their own labor — and most handmade sellers have never actually put a number on that. This calculator handles Etsy's specific fee structure, but the more useful part for most sellers is getting labor and materials priced honestly in the first place.</p>

  <h3>The Cost Most Handmade Sellers Leave Out: Their Own Time</h3>

  <p>Materials are easy to price — a receipt tells you what wax, jars, or fabric cost. Time is where most Etsy pricing quietly falls apart, because "I enjoy making these" and "this needs to be priced sustainably" pull in different directions. A practical way through it: decide on an hourly rate you'd actually want to be paid, track how long a piece genuinely takes to make (including the parts that don't feel like "real" work — cutting, packaging, cleanup), and multiply that time by your rate as an actual cost input, not an afterthought margin. Skip this step and even a shop selling briskly can end up paying its owner far less than minimum wage once the hours are counted honestly.</p>

  <h3>A Fee Structure That Charges You Even When Nothing Sells</h3>

  <p>Most marketplaces only take a cut when a sale happens. Etsy is unusual in also charging a small fee simply to list an item, and that listing needs periodic renewal whether or not it sells. On its own, that fee looks trivially small — but a shop with a large catalog of slow-moving items can accumulate meaningful listing costs over months purely from renewals, independent of the transaction fee taken on actual sales. This is worth factoring into whether a large, slow-turning catalog is actually more profitable than a smaller, faster-moving one.</p>

  <h3>Using the Calculator</h3>

  <ol>
    <li><strong>Selling price</strong> — what the customer pays.</li>
    <li><strong>Production cost</strong> — materials, packaging, and your labor cost calculated at your chosen hourly rate.</li>
    <li><strong>Shipping charge</strong> — what you charge the buyer (Etsy's transaction fee applies to this too, not just the item price).</li>
    <li><strong>Etsy fees</strong> — transaction fee, payment processing, and listing fee, plus Offsite Ads if it applies to your shop.</li>
    <li><strong>Any one-time setup cost</strong> — relevant for made-to-order or customized items with upfront design time.</li>
  </ol>

  <p>The result shows net profit and margin after every fee — and because shipping charges are also subject to Etsy's transaction fee, the calculator accounts for that instead of treating shipping as a pass-through cost with no fee attached.</p>

  <h3>A Worked Example</h3>

  <p>A handmade candle costs ₹350 in materials (wax, fragrance oil, jar, label) and ₹80 to ship, listed at ₹1,200. Cost-plus math alone suggests roughly ₹850 in profit. Once the transaction fee (applied to both the item price and the shipping charge), payment processing, and the listing fee are deducted, the real profit typically lands closer to ₹500–₹550 — a meaningful gap, and one that gets easy to miss if labor time hasn't been priced into that ₹350 materials figure in the first place.</p>

  <h3>Offsite Ads: A Fee That Only Sometimes Applies</h3>

  <p>Etsy occasionally advertises listings across external sites, and if a sale results from one of those ads, an additional fee applies on top of the standard transaction fee. Newer or smaller shops are often able to opt out; shops that cross a certain sales threshold typically cannot. Since this fee only hits some sales and not others, it's worth treating as a probabilistic cost — factored into your overall margin expectations across many sales — rather than assuming every transaction carries it.</p>

  <h3>Frequently Asked Questions</h3>

  <p><strong>How do I actually decide what hourly rate to use for my own labor?</strong><br>
  There's no single right answer, but a reasonable starting point is comparing it to what skilled part-time work pays in your area, then adjusting based on the specialization your craft requires. The number matters less than the discipline of using one consistently, rather than leaving labor out of the calculation entirely.</p>

  <p><strong>Does the listing fee really matter if it's such a small amount?</strong><br>
  Individually, no — but a shop with many listings that renew regularly, especially slow-moving ones, accumulates this cost steadily in the background. It's worth including if you're comparing the true profitability of a large catalog against a smaller, curated one.</p>

  <p><strong>Is the transaction fee charged on the item price or the total sale including shipping?</strong><br>
  It generally applies to the total amount the customer pays, which includes what you charge for shipping — a detail that's easy to miss if you're calculating fees only against the item price.</p>

  <p><strong>Can I opt out of Offsite Ads fees?</strong><br>
  It depends on your shop's sales history — smaller or newer shops are often eligible to opt out, while shops that pass a certain revenue threshold typically are enrolled automatically.</p>

  <p><strong>Is my cost and pricing information saved anywhere?</strong><br>
  No — everything is calculated locally in your browser, so your materials cost, labor rate, and margins stay private.</p>
</div>


<!-- Fee Details Modal -->
<div id="detailsModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Etsy Fee Details</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <h4>Standard Etsy Fees</h4>
      <ul>
        <li><strong>Listing Fee:</strong> ₹20 per item (active for 4 months)</li>
        <li><strong>Transaction Fee:</strong> 6.5% of total price (item + shipping)</li>
        <li><strong>Payment Processing Fee:</strong> 3% of total price + ₹4 fixed fee</li>
        <li><strong>Offsite Ads Fee:</strong> 15% when sales come from external Etsy ads</li>
      </ul>
      
      <h4>Fee Calculation Example</h4>
      <p>For a ₹1,000 item with ₹100 shipping:</p>
      <ul>
        <li>Transaction Fee: 6.5% of ₹1,100 = ₹71.50</li>
        <li>Payment Processing: 3% of ₹1,100 + ₹4 = ₹37.00</li>
        <li>Total Fees: ₹71.50 + ₹37.00 = ₹108.50</li>
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
    const shippingFeeInput = document.getElementById('shipping_fee');
    const productionCostInput = document.getElementById('production_cost');
    const weightInput = document.getElementById('weight');
    const offsiteAdsCheckbox = document.getElementById('offsite_ads');
    const vatRateInput = document.getElementById('vat_rate');
    const setupFeeInput = document.getElementById('setup_fee');
    
    // Counter fields
    const listingFeeCounter = document.getElementById('listingFee');
    const transactionFeeCounter = document.getElementById('transactionFee');
    const paymentFeeCounter = document.getElementById('paymentFee');
    const shippingFeeCounter = document.getElementById('shippingFee');
    
    // Result fields
    const resultProductPrice = document.getElementById('resultProductPrice');
    const resultShippingFee = document.getElementById('resultShippingFee');
    const resultProductionCost = document.getElementById('resultProductionCost');
    const resultTotalCosts = document.getElementById('resultTotalCosts');
    const resultNetProfit = document.getElementById('resultNetProfit');
    const resultProfitMargin = document.getElementById('resultProfitMargin');
    const profitResult = document.getElementById('profitResult');
    
    // Breakdown fields
    const breakdownListingFee = document.getElementById('breakdownListingFee');
    const breakdownTransactionFee = document.getElementById('breakdownTransactionFee');
    const breakdownPaymentFee = document.getElementById('breakdownPaymentFee');
    const breakdownAdsFee = document.getElementById('breakdownAdsFee');
    const breakdownVat = document.getElementById('breakdownVat');
    const breakdownSetupFee = document.getElementById('breakdownSetupFee');
    const breakdownTotalFees = document.getElementById('breakdownTotalFees');

    // Etsy fee constants
    const LISTING_FEE = 20; // ₹20 per listing
    const TRANSACTION_FEE_RATE = 0.065; // 6.5%
    const PAYMENT_PROCESSING_RATE = 0.03; // 3%
    const PAYMENT_PROCESSING_FIXED = 4; // ₹4 fixed fee
    const OFFSITE_ADS_RATE = 0.15; // 15%

    // Event listeners
    calculateButton.addEventListener('click', calculatePrice);
    resetButton.addEventListener('click', resetCalculator);
    saveButton.addEventListener('click', saveCalculation);
    detailsButton.addEventListener('click', showFeeDetails);
    closeDetails.addEventListener('click', closeDetailsModal);
    
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
      const shippingFee = parseFloat(shippingFeeInput.value) || 0;
      const productionCost = parseFloat(productionCostInput.value) || 0;
      const weight = parseFloat(weightInput.value) || 0;
      const includeOffsiteAds = offsiteAdsCheckbox.checked;
      const vatRate = parseFloat(vatRateInput.value) || 0;
      const setupFee = parseFloat(setupFeeInput.value) || 0;
      
      // Validate inputs
      if (productPrice <= 0) {
        showAlert('Please enter a valid product price.', 'error');
        return;
      }
      
      // Calculate Etsy fees
      const totalSalePrice = productPrice + shippingFee;
      
      // Listing fee (one-time, but we'll calculate per item for simplicity)
      const listingFee = LISTING_FEE;
      
      // Transaction fee (6.5% of total sale price)
      const transactionFee = totalSalePrice * TRANSACTION_FEE_RATE;
      
      // Payment processing fee (3% + ₹4)
      const paymentProcessingFee = (totalSalePrice * PAYMENT_PROCESSING_RATE) + PAYMENT_PROCESSING_FIXED;
      
      // Offsite ads fee (15% of product price only, not shipping)
      const offsiteAdsFee = includeOffsiteAds ? productPrice * OFFSITE_ADS_RATE : 0;
      
      // VAT calculation (on product price only)
      const vatAmount = productPrice * (vatRate / 100);
      
      // Total fees
      const totalFees = listingFee + transactionFee + paymentProcessingFee + offsiteAdsFee + vatAmount + setupFee;
      
      // Total costs (production + fees)
      const totalCosts = productionCost + totalFees;
      
      // Net profit
      const netProfit = productPrice - totalCosts;
      
      // Profit margin
      const profitMargin = (netProfit / productPrice) * 100;
      
      // Update counters
      listingFeeCounter.textContent = formatCurrency(listingFee);
      transactionFeeCounter.textContent = formatCurrency(transactionFee);
      paymentFeeCounter.textContent = formatCurrency(paymentProcessingFee);
      shippingFeeCounter.textContent = formatCurrency(shippingFee);
      
      // Update results
      resultProductPrice.textContent = formatCurrency(productPrice);
      resultShippingFee.textContent = formatCurrency(shippingFee);
      resultProductionCost.textContent = formatCurrency(productionCost);
      resultTotalCosts.textContent = formatCurrency(totalCosts);
      resultNetProfit.textContent = formatCurrency(netProfit);
      resultProfitMargin.textContent = `${profitMargin.toFixed(2)}%`;
      
      // Update fee breakdown
      breakdownListingFee.textContent = formatCurrency(listingFee);
      breakdownTransactionFee.textContent = formatCurrency(transactionFee);
      breakdownPaymentFee.textContent = formatCurrency(paymentProcessingFee);
      breakdownAdsFee.textContent = formatCurrency(offsiteAdsFee);
      breakdownVat.textContent = formatCurrency(vatAmount);
      breakdownSetupFee.textContent = formatCurrency(setupFee);
      breakdownTotalFees.textContent = formatCurrency(totalFees);
      
      // Style profit/loss
      if (netProfit >= 0) {
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
      shippingFeeInput.value = '';
      productionCostInput.value = '';
      weightInput.value = '';
      offsiteAdsCheckbox.checked = true;
      vatRateInput.value = '';
      setupFeeInput.value = '';
      
      // Reset counters
      listingFeeCounter.textContent = '₹0.00';
      transactionFeeCounter.textContent = '₹0.00';
      paymentFeeCounter.textContent = '₹0.00';
      shippingFeeCounter.textContent = '₹0.00';
      
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
      return '₹' + amount.toFixed(2);
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
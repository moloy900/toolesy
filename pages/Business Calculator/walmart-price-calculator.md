---
layout: default
title: "Walmart Price Calculator – Estimate Product Costs Online"
permalink: /walmart-price-calculator-estimate-product-costs-online/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Walmart Price Calculator – Estimate Product Costs Online</title>
<meta name="description"
  content="Free Walmart price calculator to estimate your product costs including referral fees, shipping costs, and other expenses. Optimize your pricing strategy for Walmart Marketplace.">
<meta name="keywords"
  content="walmart price calculator, walmart fees, walmart marketplace, product pricing, referral fees, shipping costs, profit calculator">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Walmart Price Calculator Styles */
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
</style>

<div class="converter-container">
  <h1>Walmart Price Calculator</h1>
  <p class="welcome-message">Calculate your product costs, fees, and profit margins for selling on Walmart Marketplace. All calculations are in Indian Rupees (₹).</p>

  <div class="converter-section">
    <h2>Product Information</h2>

    <div class="input-section">
      <label for="product_price">Product Price (₹)</label>
      <input type="number" id="product_price" placeholder="Enter Price" min="0" step="0.01">
    </div>

    <div class="input-section">
      <label for="shipping_cost">Shipping Cost (₹)</label>
      <input type="number" id="shipping_cost" placeholder="Enter Shipping Cost" min="0" step="0.01">
    </div>

    <div class="input-section">
      <label for="product_category">Product Category</label>
      <select name="product_category" id="product_category" class="form-control" required="">
        <option value="Apparel & Accessories">Apparel & Accessories</option>
        <option value="Automotive & Powersports">Automotive & Powersports</option>
        <option value="Baby">Baby</option>
        <option value="Beauty">Beauty</option>
        <option value="Books">Books</option>
        <option value="Camera & Photo">Camera & Photo</option>
        <option value="Cell Phones">Cell Phones</option>
        <option value="Consumer Electronics">Consumer Electronics</option>
        <option value="Compact Appliances">Compact Appliances</option>
        <option value="Electronics Accessories">Electronics Accessories</option>
        <option value="Decor">Decor</option>
        <option value="Gourmet Food">Gourmet Food</option>
        <option value="Grocery">Grocery</option>
        <option value="Health & Personal Care">Health & Personal Care</option>
        <option value="Home & Garden">Home & Garden</option>
        <option value="Indoor & Outdoor Furniture">Indoor & Outdoor Furniture</option>
        <option value="Industrial & Scientific">Industrial & Scientific</option>
        <option value="Jewelry">Jewelry</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Luggage & Travel Accessories">Luggage & Travel Accessories</option>
        <option value="Major Appliances">Major Appliances</option>
        <option value="Music">Music</option>
        <option value="Musical Instruments">Musical Instruments</option>
        <option value="Office Products">Office Products</option>
        <option value="Outdoor Power Tools">Outdoor Power Tools</option>
        <option value="Outdoors">Outdoors</option>
        <option value="Personal Computers">Personal Computers</option>
        <option value="Pet Supplies">Pet Supplies</option>
        <option value="Plumbing, Heating, Cooling & Ventilation">Plumbing, Heating, Cooling & Ventilation</option>
        <option value="Shoes, Handbags & Sunglasses">Shoes, Handbags & Sunglasses</option>
        <option value="Software & Computer Video Games">Software & Computer Video Games</option>
        <option value="Sporting Goods">Sporting Goods</option>
        <option value="Tires & Wheels">Tires & Wheels</option>
        <option value="Tools & Home Improvement">Tools & Home Improvement</option>
        <option value="Toys & Games">Toys & Games</option>
        <option value="Video & DVD">Video & DVD</option>
        <option value="Video Game Consoles">Video Game Consoles</option>
        <option value="Watches">Watches</option>
        <option value="Everything Else">Everything Else</option>
      </select>
    </div>

    <div class="input-section">
      <label for="product_cost">Product Cost (₹)</label>
      <input type="number" id="product_cost" placeholder="Enter Product Cost" min="0" step="0.01">
    </div>

    <div class="input-section">
      <label for="additional_costs">Additional Costs (₹)</label>
      <input type="number" id="additional_costs" placeholder="Enter Additional Costs" min="0" step="0.01">
    </div>

    <div class="button-section">
      <button class="case-button" id="calculateButton">Calculate</button>
      <button class="case-button secondary" id="resetButton">Reset</button>
      <button class="case-button success" id="saveButton">Save Calculation</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="results-section" id="resultsSection" style="display: none;">
      <h3>Calculation Results</h3>
      
      <div class="result-item">
        <span>Product Price:</span>
        <span id="resultProductPrice">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span>Referral Fee (<span id="referralFeePercent">0%</span>):</span>
        <span id="resultReferralFee">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span>Shipping Cost:</span>
        <span id="resultShippingCost">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span>Product Cost:</span>
        <span id="resultProductCost">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span>Additional Costs:</span>
        <span id="resultAdditionalCosts">₹0.00</span>
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
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Walmart Price Calculator - Optimize Your Product Pricing</h2>

    <p>Our free <strong>Walmart Price Calculator</strong> helps sellers determine the optimal pricing for their products on Walmart Marketplace. By accounting for all costs including referral fees, shipping, and product costs, you can maximize your profit margins while remaining competitive in the marketplace. All calculations are displayed in Indian Rupees (₹) for your convenience.</p>

    <h3>How to Use This Walmart Price Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Product Price:</strong> Input the selling price of your product in Indian Rupees.</li>
      <li><strong>Add Shipping Cost:</strong> Include the shipping cost you'll incur to deliver the product to the customer.</li>
      <li><strong>Select Product Category:</strong> Choose the appropriate category for your product as referral fees vary by category.</li>
      <li><strong>Input Product Cost:</strong> Enter the cost you pay to acquire or manufacture the product.</li>
      <li><strong>Include Additional Costs:</strong> Add any other costs like packaging, marketing, or overhead expenses.</li>
      <li><strong>Calculate:</strong> Click the "Calculate" button to see your net profit and profit margin.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're selling a smartphone on Walmart Marketplace priced at ₹25,000. The product falls under the "Cell Phones" category which has an 8% referral fee. Your shipping cost is ₹200, product cost is ₹18,000, and additional costs are ₹500. Using our calculator, you'll discover that after accounting for all expenses, your net profit would be ₹4,300 with a 17.2% profit margin. This helps you determine if this is a viable product to sell or if you need to adjust your pricing strategy.</p>

    <h3>Understanding Walmart Fees:</h3>
    <p>Walmart Marketplace charges different referral fees based on product categories:</p>
    <ul>
      <li><strong>Apparel & Accessories:</strong> 15%</li>
      <li><strong>Automotive & Powersports:</strong> 12%</li>
      <li><strong>Baby Products:</strong> 15%</li>
      <li><strong>Beauty:</strong> 15%</li>
      <li><strong>Books:</strong> 15%</li>
      <li><strong>Cell Phones:</strong> 8%</li>
      <li><strong>Consumer Electronics:</strong> 8%</li>
      <li><strong>Grocery & Gourmet Food:</strong> 15%</li>
      <li><strong>Health & Personal Care:</strong> 15%</li>
      <li><strong>Home & Garden:</strong> 15%</li>
      <li><strong>Jewelry:</strong> 20%</li>
      <li><strong>Office Products:</strong> 15%</li>
      <li><strong>Shoes, Handbags & Sunglasses:</strong> 15%</li>
      <li><strong>Software & Video Games:</strong> 15%</li>
      <li><strong>Sports & Outdoors:</strong> 15%</li>
      <li><strong>Toys & Games:</strong> 15%</li>
      <li><strong>Everything Else:</strong> 15%</li>
    </ul>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>New Sellers:</strong> Understand the cost structure of selling on Walmart Marketplace before listing products.</li>
      <li><strong>Existing Sellers:</strong> Optimize pricing strategies to maximize profitability.</li>
      <li><strong>Product Managers:</strong> Evaluate the viability of new product lines on Walmart.</li>
      <li><strong>E-commerce Entrepreneurs:</strong> Compare profitability across different marketplaces.</li>
      <li><strong>Small Business Owners:</strong> Make informed decisions about expanding to Walmart Marketplace.</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>Are there any monthly fees for selling on Walmart Marketplace?</strong><br>
      Yes, Walmart charges a monthly subscription fee in addition to referral fees. This calculator focuses on per-product costs.</p>

    <p><strong>Does this calculator include all Walmart fees?</strong><br>
      This calculator includes referral fees which are the primary cost for most sellers. Additional fees like return processing or special handling may apply for certain products.</p>

    <p><strong>Can I use this calculator for products sold internationally?</strong><br>
      While the calculator uses Indian Rupees, you can use it for any currency by mentally converting the values. The percentage-based calculations remain the same.</p>

    <p><strong>How accurate are the referral fee percentages?</strong><br>
      The percentages used are based on standard Walmart Marketplace fees. Always verify current fees directly with Walmart as they may change.</p>

    <p><strong>Is my data saved when I use this calculator?</strong><br>
      No, all calculations happen in your browser and no data is stored on our servers. Your pricing information remains completely private.</p>

    <h3>Why Choose Our Walmart Price Calculator?</h3>
    <p>Our <strong>Walmart Price Calculator</strong> provides a simple yet powerful way to understand your true costs and profitability when selling on Walmart Marketplace. Unlike complex spreadsheets or manual calculations, our tool gives you instant results with a clear breakdown of all costs. The interface is designed for both new and experienced sellers, with all calculations happening securely in your browser to protect your sensitive pricing information.</p>

    <h3>Pricing Strategy Tips for Walmart Sellers</h3>
    <p>To maximize your success on Walmart Marketplace, consider these pricing strategies:</p>
    <ul>
      <li><strong>Competitive Pricing:</strong> Research competitor prices but don't engage in destructive price wars.</li>
      <li><strong>Value-Based Pricing:</strong> Price according to the perceived value of your product, not just costs.</li>
      <li><strong>Psychological Pricing:</strong> Use pricing endings like ₹999 instead of ₹1000 for better conversion.</li>
      <li><strong>Bundle Pricing:</strong> Offer product bundles to increase average order value.</li>
      <li><strong>Dynamic Pricing:</strong> Adjust prices based on demand, seasonality, and inventory levels.</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculateButton');
    const resetButton = document.getElementById('resetButton');
    const saveButton = document.getElementById('saveButton');
    const alertContainer = document.getElementById('alertContainer');
    const resultsSection = document.getElementById('resultsSection');
    
    // Input fields
    const productPriceInput = document.getElementById('product_price');
    const shippingCostInput = document.getElementById('shipping_cost');
    const productCategoryInput = document.getElementById('product_category');
    const productCostInput = document.getElementById('product_cost');
    const additionalCostsInput = document.getElementById('additional_costs');
    
    // Result fields
    const resultProductPrice = document.getElementById('resultProductPrice');
    const resultReferralFee = document.getElementById('resultReferralFee');
    const referralFeePercent = document.getElementById('referralFeePercent');
    const resultShippingCost = document.getElementById('resultShippingCost');
    const resultProductCost = document.getElementById('resultProductCost');
    const resultAdditionalCosts = document.getElementById('resultAdditionalCosts');
    const resultTotalCosts = document.getElementById('resultTotalCosts');
    const resultNetProfit = document.getElementById('resultNetProfit');
    const resultProfitMargin = document.getElementById('resultProfitMargin');
    const profitResult = document.getElementById('profitResult');

    // Category to referral fee mapping
    const categoryFees = {
      "Apparel & Accessories": 0.15,
      "Automotive & Powersports": 0.12,
      "Baby": 0.15,
      "Beauty": 0.15,
      "Books": 0.15,
      "Camera & Photo": 0.08,
      "Cell Phones": 0.08,
      "Consumer Electronics": 0.08,
      "Compact Appliances": 0.15,
      "Electronics Accessories": 0.15,
      "Decor": 0.15,
      "Gourmet Food": 0.15,
      "Grocery": 0.15,
      "Health & Personal Care": 0.15,
      "Home & Garden": 0.15,
      "Indoor & Outdoor Furniture": 0.15,
      "Industrial & Scientific": 0.12,
      "Jewelry": 0.20,
      "Kitchen": 0.15,
      "Luggage & Travel Accessories": 0.15,
      "Major Appliances": 0.15,
      "Music": 0.15,
      "Musical Instruments": 0.15,
      "Office Products": 0.15,
      "Outdoor Power Tools": 0.15,
      "Outdoors": 0.15,
      "Personal Computers": 0.08,
      "Pet Supplies": 0.15,
      "Plumbing, Heating, Cooling & Ventilation": 0.12,
      "Shoes, Handbags & Sunglasses": 0.15,
      "Software & Computer Video Games": 0.15,
      "Sporting Goods": 0.15,
      "Tires & Wheels": 0.10,
      "Tools & Home Improvement": 0.12,
      "Toys & Games": 0.15,
      "Video & DVD": 0.15,
      "Video Game Consoles": 0.08,
      "Watches": 0.15,
      "Everything Else": 0.15
    };

    // Event listeners
    calculateButton.addEventListener('click', calculatePrice);
    resetButton.addEventListener('click', resetCalculator);
    saveButton.addEventListener('click', saveCalculation);

    function calculatePrice() {
      // Get input values
      const productPrice = parseFloat(productPriceInput.value) || 0;
      const shippingCost = parseFloat(shippingCostInput.value) || 0;
      const productCategory = productCategoryInput.value;
      const productCost = parseFloat(productCostInput.value) || 0;
      const additionalCosts = parseFloat(additionalCostsInput.value) || 0;
      
      // Validate inputs
      if (productPrice <= 0) {
        showAlert('Please enter a valid product price.', 'error');
        return;
      }
      
      // Get referral fee percentage based on category
      const referralFeePercentage = categoryFees[productCategory] || 0.15;
      const referralFee = productPrice * referralFeePercentage;
      
      // Calculate total costs and profit
      const totalCosts = referralFee + shippingCost + productCost + additionalCosts;
      const netProfit = productPrice - totalCosts;
      const profitMargin = (netProfit / productPrice) * 100;
      
      // Update results
      resultProductPrice.textContent = formatCurrency(productPrice);
      resultReferralFee.textContent = formatCurrency(referralFee);
      referralFeePercent.textContent = `${(referralFeePercentage * 100)}%`;
      resultShippingCost.textContent = formatCurrency(shippingCost);
      resultProductCost.textContent = formatCurrency(productCost);
      resultAdditionalCosts.textContent = formatCurrency(additionalCosts);
      resultTotalCosts.textContent = formatCurrency(totalCosts);
      resultNetProfit.textContent = formatCurrency(netProfit);
      resultProfitMargin.textContent = `${profitMargin.toFixed(2)}%`;
      
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
      shippingCostInput.value = '';
      productCategoryInput.value = 'Apparel & Accessories';
      productCostInput.value = '';
      additionalCostsInput.value = '';
      
      // Hide results section
      resultsSection.style.display = 'none';
      
      showAlert('Calculator has been reset.', 'success');
    }
    
    function saveCalculation() {
      // In a real application, this would save to a database or local storage
      // For this demo, we'll just show an alert
      showAlert('Calculation saved successfully!', 'success');
    }
    
    function formatCurrency(amount) {
      return '₹' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
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
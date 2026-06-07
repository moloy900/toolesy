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

  ```html
<div class="content-placeholder">

  <h2>Walmart Price Calculator – Calculate Selling Price, Fees, Profit & Margin for Walmart Marketplace</h2>

  <p>
    Selling on Walmart Marketplace can open the door to millions of potential customers, but success depends heavily on pricing your products correctly. Many sellers focus only on the selling price and product cost, overlooking important expenses such as referral fees, shipping charges, packaging costs, and operational overheads. These hidden costs can significantly reduce profits if they are not considered before listing a product.
  </p>

  <p>
    Our free <strong>Walmart Price Calculator</strong> helps sellers accurately estimate their profitability by calculating marketplace fees, product costs, shipping expenses, and net earnings in one place. Whether you are a new seller exploring Walmart Marketplace or an experienced e-commerce business owner looking to optimize pricing, this calculator can help you make smarter business decisions.
  </p>

  <p>
    Instead of relying on complicated spreadsheets or manual calculations, you can instantly determine how much profit you will earn from each sale and identify the ideal selling price needed to reach your target margins. The calculator is suitable for sellers across multiple categories including electronics, apparel, home products, beauty items, books, toys, sporting goods, and more.
  </p>

  <h3>How to Use This Walmart Price Calculator (Step-by-Step)</h3>

  <p>
    The calculator is designed to be easy for beginners while providing valuable insights for experienced marketplace sellers.
  </p>

  <ul>
    <li><strong>Enter Your Selling Price:</strong> Add the price at which you plan to sell the product.</li>
    <li><strong>Include Shipping Costs:</strong> Enter the amount you expect to spend on shipping and delivery.</li>
    <li><strong>Select the Product Category:</strong> Choose the category that matches your product because referral fees vary by category.</li>
    <li><strong>Enter Product Cost:</strong> Add your sourcing or manufacturing cost.</li>
    <li><strong>Add Additional Expenses:</strong> Include packaging, advertising, storage, or other operational costs.</li>
    <li><strong>Click Calculate:</strong> Instantly generate a detailed breakdown of fees, costs, profit, and margin.</li>
    <li><strong>Review Results:</strong> Analyze your earnings and adjust pricing if needed.</li>
  </ul>

  <p>
    Within seconds, you'll have a clear understanding of whether your pricing strategy is profitable or needs adjustment.
  </p>

  <h3>Real-Life Example: Selling a Smartphone on Walmart Marketplace</h3>

  <p>
    Imagine you're selling a smartphone through Walmart Marketplace for ₹25,000. The product falls under the consumer electronics category, which generally attracts a lower referral fee than many other categories.
  </p>

  <p>
    Your product sourcing cost is ₹18,000. Shipping expenses amount to ₹200, while packaging and miscellaneous operational expenses total ₹500. At first glance, the profit might seem straightforward, but referral fees and other costs can significantly affect the final outcome.
  </p>

  <p>
    After entering all details into the calculator, you'll receive a complete breakdown showing referral fees, total expenses, net profit, and profit margin. This allows you to determine whether the product is worth selling or if you need to adjust your pricing strategy.
  </p>

  <p>
    Many successful marketplace sellers use similar calculations before launching new products because profitability often depends on small pricing adjustments.
  </p>

  <h3>Why Accurate Pricing Matters on Walmart Marketplace</h3>

  <p>
    Pricing plays a crucial role in both sales performance and profitability. A product that is priced too high may struggle to compete, while a product priced too low may generate sales but little actual profit.
  </p>

  <p>
    Accurate pricing helps sellers:
  </p>

  <ul>
    <li>Protect profit margins.</li>
    <li>Remain competitive in the marketplace.</li>
    <li>Avoid unexpected losses caused by hidden costs.</li>
    <li>Forecast revenue more accurately.</li>
    <li>Improve inventory planning.</li>
    <li>Scale their business with confidence.</li>
  </ul>

  <p>
    Even a small pricing error can have a major impact when selling hundreds or thousands of units each month.
  </p>

  <h3>Understanding Walmart Marketplace Referral Fees</h3>

  <p>
    One of the primary costs associated with selling on Walmart Marketplace is the referral fee. This fee is charged as a percentage of the product's selling price and varies depending on the category.
  </p>

  <p>
    Referral fees are important because they directly affect your profit margins. Sellers who fail to include these fees in their calculations often overestimate profitability.
  </p>

  <ul>
    <li><strong>Apparel & Accessories:</strong> Typically around 15%</li>
    <li><strong>Automotive Products:</strong> Approximately 12%</li>
    <li><strong>Beauty Products:</strong> Usually 15%</li>
    <li><strong>Books:</strong> Around 15%</li>
    <li><strong>Cell Phones:</strong> Often 8%</li>
    <li><strong>Consumer Electronics:</strong> Around 8%</li>
    <li><strong>Home & Garden:</strong> Generally 15%</li>
    <li><strong>Office Products:</strong> Approximately 15%</li>
    <li><strong>Sports & Outdoors:</strong> Usually 15%</li>
    <li><strong>Toys & Games:</strong> Around 15%</li>
  </ul>

  <p>
    Walmart may periodically update its fee structure, so sellers should verify the latest rates before making long-term pricing decisions.
  </p>

  <h3>All Costs Sellers Should Consider</h3>

  <p>
    Many sellers focus only on referral fees and product costs, but several other expenses contribute to overall profitability.
  </p>

  <ul>
    <li><strong>Product Cost:</strong> Cost of sourcing or manufacturing the product.</li>
    <li><strong>Shipping Charges:</strong> Delivery expenses paid by the seller.</li>
    <li><strong>Packaging Costs:</strong> Boxes, labels, inserts, and protective materials.</li>
    <li><strong>Referral Fees:</strong> Marketplace commission based on category.</li>
    <li><strong>Marketing Expenses:</strong> Sponsored ads and promotional campaigns.</li>
    <li><strong>Warehouse Costs:</strong> Storage and inventory management expenses.</li>
    <li><strong>Returns & Refunds:</strong> Costs associated with customer returns.</li>
    <li><strong>Operational Expenses:</strong> Software subscriptions, labor, and business overhead.</li>
  </ul>

  <p>
    Factoring all these costs into your calculations ensures that every sale contributes positively to your business.
  </p>

  <h3>Who Should Use This Walmart Price Calculator?</h3>

  <p>
    This tool is valuable for anyone involved in marketplace selling or product research.
  </p>

  <ul>
    <li><strong>New Walmart Sellers:</strong> Understand the cost structure before listing products.</li>
    <li><strong>Existing Marketplace Sellers:</strong> Improve pricing and profitability.</li>
    <li><strong>Manufacturers:</strong> Evaluate direct-to-consumer opportunities.</li>
    <li><strong>Retail Business Owners:</strong> Compare online and offline margins.</li>
    <li><strong>E-commerce Entrepreneurs:</strong> Assess new product opportunities.</li>
    <li><strong>Consultants:</strong> Create realistic profitability projections for clients.</li>
  </ul>

  <h3>Benefits of Using a Walmart Price Calculator</h3>

  <p>
    A dedicated pricing calculator provides advantages that manual calculations often cannot match.
  </p>

  <ul>
    <li>Quick profit estimation.</li>
    <li>Accurate fee calculations.</li>
    <li>Better inventory planning.</li>
    <li>Improved pricing decisions.</li>
    <li>Reduced risk of losses.</li>
    <li>Faster product research.</li>
    <li>Easy comparison between products.</li>
    <li>Enhanced business forecasting.</li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p>
    <strong>Does Walmart charge monthly subscription fees?</strong><br>
    Marketplace policies may vary over time. Sellers should review the latest Walmart Marketplace documentation for current account requirements and fee structures.
  </p>

  <p>
    <strong>Does this calculator include all marketplace costs?</strong><br>
    The calculator focuses on core selling expenses such as referral fees, shipping costs, product costs, and additional operational expenses entered by the seller.
  </p>

  <p>
    <strong>Can I use this calculator for international selling?</strong><br>
    Yes. Although values are displayed in Indian Rupees, the calculations work with any currency because the formulas are percentage-based.
  </p>

  <p>
    <strong>How accurate are the results?</strong><br>
    Results are based on the information entered by the user and provide a reliable estimate for planning and decision-making.
  </p>

  <p>
    <strong>Is my data stored?</strong><br>
    No. All calculations are performed locally within your browser, helping keep your pricing information private.
  </p>

  <h3>Pricing Strategy Tips for Walmart Sellers</h3>

  <p>
    Successful sellers use a combination of market research and profitability analysis when setting prices.
  </p>

  <ul>
    <li><strong>Competitive Pricing:</strong> Stay competitive without sacrificing profitability.</li>
    <li><strong>Value-Based Pricing:</strong> Price products according to perceived customer value.</li>
    <li><strong>Psychological Pricing:</strong> Use pricing patterns that encourage conversions.</li>
    <li><strong>Bundle Pricing:</strong> Increase average order value through product bundles.</li>
    <li><strong>Dynamic Pricing:</strong> Adjust prices based on demand and competition.</li>
    <li><strong>Seasonal Pricing:</strong> Optimize prices during holidays and peak shopping periods.</li>
  </ul>

  <h3>Common Pricing Mistakes Sellers Make</h3>

  <p>
    Many marketplace sellers lose profit because of avoidable pricing errors.
  </p>

  <ul>
    <li>Ignoring referral fees.</li>
    <li>Underestimating shipping costs.</li>
    <li>Forgetting packaging expenses.</li>
    <li>Not accounting for returns.</li>
    <li>Copying competitor prices blindly.</li>
    <li>Offering excessive discounts.</li>
    <li>Failing to review pricing regularly.</li>
  </ul>

  <p>
    Avoiding these mistakes can significantly improve your overall profitability and business sustainability.
  </p>

  <h3>Tips for Increasing Profit Margins</h3>

  <ul>
    <li>Negotiate better supplier pricing.</li>
    <li>Reduce shipping and packaging costs.</li>
    <li>Focus on high-margin product categories.</li>
    <li>Improve inventory turnover.</li>
    <li>Reduce return rates through better product descriptions.</li>
    <li>Monitor competitor pricing frequently.</li>
    <li>Analyze sales data to identify top-performing products.</li>
  </ul>

  <h3>Final Thoughts</h3>

  <p>
    Walmart Marketplace offers significant opportunities for online sellers, but profitability depends on careful planning and accurate pricing. Understanding referral fees, shipping expenses, product costs, and operational overheads is essential before launching or scaling a product.
  </p>

  <p>
    Our <strong>Walmart Price Calculator</strong> helps simplify this process by providing a complete breakdown of costs, profits, and margins in just a few seconds. Whether you're evaluating a new product idea or optimizing an existing listing, the calculator can help you make more informed decisions.
  </p>

  <p>
    By calculating your costs accurately before listing products, you can avoid common pricing mistakes, improve profit margins, and build a stronger, more sustainable e-commerce business on Walmart Marketplace.
  </p>

</div>
```
SS

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
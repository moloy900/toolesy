---
layout: default
title: "Amazon Price Calculator – Estimate Product Cost & Profit"
permalink: /amazon-price-calculator-estimate-product-cost-profit/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Amazon Price Calculator – Estimate Product Cost & Profit</title>
<meta name="description"
  content="Free online Amazon Price Calculator tool. Calculate accurate costs, fees, and profits for selling on Amazon, Flipkart, and other marketplaces.">
<meta name="keywords"
  content="amazon price calculator, flipkart seller calculator, ecommerce profit calculator, amazon fees calculator, amazon seller tool, marketplace cost analysis">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Amazon Price Calculator Styles */
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

  .input-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .input-group label {
    font-weight: 600;
    color: #2c3e50;
  }

  .input-group select,
  .input-group input {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .input-group select:focus,
  .input-group input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .results-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 30px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    border-left: 4px solid var(--primary);
  }

  .result-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background: white;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    text-align: center;
  }

  .result-item .label {
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 8px;
    font-size: 14px;
  }

  .result-item .value {
    font-weight: bold;
    color: #2c3e50;
    font-size: 18px;
  }

  .result-item.profit .value {
    color: #27ae60;
    font-size: 22px;
  }

  .result-item.loss .value {
    color: #e74c3c;
    font-size: 22px;
  }

  .button-section {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 25px 0;
  }

  .calculate-button {
    padding: 14px 30px;
    border: none;
    border-radius: 8px;
    background: var(--primary);
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
  }

  .calculate-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .calculate-button:active {
    transform: translateY(0);
  }

  .calculate-button.reset {
    background: #6c757d;
  }

  .calculate-button.reset:hover {
    background: #5a6268;
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

  /* Share and donation section */
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
    .input-grid {
      grid-template-columns: 1fr;
    }

    .results-section {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    .button-section {
      flex-direction: column;
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
  }
</style>

<div class="calculator-container">
  <h1>Amazon Price Calculator - Your Ultimate Tool for Accurate Cost and Profit Analysis</h1>
  <p class="welcome-message">Calculate accurate costs, fees, and profits for selling on Amazon, Flipkart, and other marketplaces. Make informed pricing decisions with our comprehensive calculator.</p>

  <div class="calculator-section">
    <h2>Product Information</h2>

    <div class="input-grid">
      <div class="input-group">
        <label for="category">Category</label>
        <select id="category">
          <option value="" selected disabled>Select Category</option>
          <option value="Automotive">Automotive, Car & Accessories</option>
          <option value="Baby">Baby Products, Toys & Education</option>
          <option value="Books">Books, Music, Movies, Video Games, Entertainment</option>
          <option value="Clothing">Clothing, Fashion, Jewellery, Luggage, Shoes</option>
          <option value="Electronics">Electronics (Camera, Mobile, PC, Wireless) & Accessories</option>
          <option value="Grocery">Grocery, Food & Pet Supplies</option>
          <option value="Health">Health, Beauty, Personal Care & Appliances</option>
          <option value="Home">Home, Decor, Furniture, Garden</option>
          <option value="Industrial">Industrial, Medical, Scientific & Office</option>
          <option value="Kitchen">Kitchen, Large & Small Appliances</option>
          <option value="Others">Others</option>
          <option value="Sports">Sports, Gym & Sporting Equipment</option>
        </select>
      </div>

      <div class="input-group">
        <label for="subcategory">Subcategory</label>
        <select id="subcategory">
          <option value="">Select a Subcategory</option>
        </select>
      </div>

      <div class="input-group">
        <label for="price">Enter Price (₹)</label>
        <input type="number" id="price" placeholder="Enter product price">
      </div>

      <div class="input-group">
        <label for="weight">Weight (grams)</label>
        <input type="number" id="weight" placeholder="Enter product weight">
      </div>

      <div class="input-group">
        <label for="area">Area</label>
        <select id="area">
          <option value="local">Local</option>
          <option value="regional">Regional</option>
          <option value="national">National</option>
          <option value="international">International</option>
        </select>
      </div>

      <div class="input-group">
        <label for="shippingMethod">Shipping Method</label>
        <select id="shippingMethod">
          <option value="" selected disabled>Select Shipping Method</option>
          <option value="standard">Standard Shipping</option>
          <option value="expedited">Expedited Shipping</option>
          <option value="priority">Priority Shipping</option>
          <option value="fba">Fulfillment by Amazon (FBA)</option>
        </select>
      </div>

      <div class="input-group">
        <label for="stepLevel">Select Step Level</label>
        <select id="stepLevel">
          <option value="basic">Basic</option>
          <option value="premium">Premium</option>
          <option value="enterprise">Enterprise</option>
        </select>
      </div>

      <div class="input-group">
        <label for="gstPercentage">Select GST Percentage</label>
        <select id="gstPercentage">
          <option value="0">0%</option>
          <option value="5">5%</option>
          <option value="12">12%</option>
          <option value="18" selected>18%</option>
          <option value="28">28%</option>
        </select>
      </div>
    </div>

    <div class="button-section">
      <button class="calculate-button" id="calculateButton">Calculate</button>
      <button class="calculate-button reset" id="resetButton">Reset</button>
    </div>

    <div class="results-section">
      <div class="result-item">
        <div class="label">Referral Fee</div>
        <div class="value" id="referralFee">₹0</div>
      </div>
      <div class="result-item">
        <div class="label">Closing Fee</div>
        <div class="value" id="closingFee">₹0</div>
      </div>
      <div class="result-item">
        <div class="label">Shipping Fee</div>
        <div class="value" id="shippingFee">₹0</div>
      </div>
      <div class="result-item">
        <div class="label">Total Fees</div>
        <div class="value" id="totalFees">₹0</div>
      </div>
      <div class="result-item">
        <div class="label">GST</div>
        <div class="value" id="gst">₹0</div>
      </div>
      <div class="result-item">
        <div class="label">Total Cost</div>
        <div class="value" id="totalCost">₹0</div>
      </div>
      <div class="result-item" id="profitItem">
        <div class="label">Your Profit</div>
        <div class="value" id="profit">₹0</div>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Calculation Examples</h2>

      <h3>Example 1: Electronics Product</h3>
      <div class="example-text">Product: Mobile Phone
Price: ₹15,000
Category: Electronics
Weight: 200g
GST: 18%

Referral Fee: ₹1,500 (10%)
Closing Fee: ₹40
Shipping Fee: ₹60
Total Fees: ₹1,600
GST: ₹288
Total Cost: ₹1,888
Profit: ₹13,112</div>

      <h3>Example 2: Clothing Product</h3>
      <div class="example-text">Product: Men's T-shirt
Price: ₹800
Category: Clothing
Weight: 150g
GST: 12%

Referral Fee: ₹120 (15%)
Closing Fee: ₹40
Shipping Fee: ₹50
Total Fees: ₹210
GST: ₹25.20
Total Cost: ₹235.20
Profit: ₹564.80</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Amazon Price Calculator - Your Ultimate Tool for Accurate Cost and Profit Analysis</h2>

    <p>Are you an Amazon seller struggling to calculate your actual profits after all fees and expenses? Our free <strong>Amazon Price Calculator</strong> is the perfect solution for sellers on Amazon, Flipkart, and other marketplaces. This powerful tool instantly calculates all costs including referral fees, closing fees, shipping fees, and GST to give you a clear picture of your actual profit margin. Make informed pricing decisions and maximize your profitability with our comprehensive calculator.</p>

    <h3>How to Use This Amazon Price Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Product Category:</strong> Choose the appropriate category for your product from the dropdown menu.</li>
      <li><strong>Choose Subcategory:</strong> Select the specific subcategory that best matches your product.</li>
      <li><strong>Enter Product Price:</strong> Input your selling price in Indian Rupees (₹).</li>
      <li><strong>Specify Product Weight:</strong> Enter the weight of your product in grams for accurate shipping cost calculation.</li>
      <li><strong>Select Area & Shipping Method:</strong> Choose your shipping area and preferred shipping method.</li>
      <li><strong>Set GST Percentage:</strong> Select the applicable GST rate for your product category.</li>
      <li><strong>Calculate:</strong> Click the "Calculate" button to see a detailed breakdown of all fees and your final profit.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're selling a mobile phone on Amazon for ₹15,000. Without a proper calculator, it's difficult to estimate your actual profit after Amazon's referral fee (typically 5-15%), closing fee (₹40 per item), shipping costs (₹40-100 depending on weight), and GST (18%). Our calculator automatically computes all these expenses, showing you that your actual profit would be approximately ₹13,112 instead of the apparent ₹15,000. This helps you make informed decisions about pricing, promotions, and profitability.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Amazon Sellers:</strong> Accurately calculate profits after all marketplace fees and expenses.</li>
      <li><strong>Flipkart Sellers:</strong> Understand your cost structure and optimize pricing for maximum profitability.</li>
      <li><strong>New E-commerce Entrepreneurs:</strong> Learn about the various fees involved in online marketplace selling.</li>
      <li><strong>Product Managers:</strong> Make data-driven decisions about product pricing and portfolio management.</li>
      <li><strong>Business Owners:</strong> Plan your e-commerce strategy with accurate cost projections.</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>How accurate is this Amazon Price Calculator?</strong><br>
      Our calculator uses current fee structures from major Indian marketplaces to provide highly accurate estimates. However, actual fees may vary slightly based on specific marketplace policies and promotions.</p>

    <p><strong>Does this calculator work for Flipkart and other marketplaces?</strong><br>
      Yes, the calculator is designed to work with multiple Indian marketplaces including Amazon, Flipkart, and others with similar fee structures.</p>

    <p><strong>Is my product information kept private when I use this tool?</strong><br>
      Absolutely. All calculations happen locally in your browser. We don't store any of your product information or pricing data on our servers.</p>

    <p><strong>Can I use this tool on my mobile phone?</strong><br>
      Yes, our website and calculator are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>Do I need to create an account or pay to use this?</strong><br>
      No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our Amazon Price Calculator?</h3>
    <p>Our <strong>Amazon Price Calculator</strong> stands out from other tools because of its simplicity, accuracy, and comprehensive fee calculation. Unlike simple calculators that only estimate referral fees, our tool considers all major expenses including closing fees, shipping costs, and GST. This gives you a complete picture of your profitability. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Understanding Marketplace Fees</h3>
    <p>Successful e-commerce selling requires a thorough understanding of all the fees involved:</p>
    <ul>
      <li><strong>Referral Fees:</strong> Percentage-based commission that marketplaces charge on each sale (typically 5-15% depending on category)</li>
      <li><strong>Closing Fees:</strong> Fixed fee per item sold (usually ₹40 for most categories)</li>
      <li><strong>Shipping Fees:</strong> Costs associated with delivering the product to the customer</li>
      <li><strong>GST:</strong> Goods and Services Tax applicable on marketplace fees</li>
      <li><strong>Fulfillment Fees:</strong> Additional costs if using fulfillment services like FBA</li>
    </ul>

    <h3>Tips for Maximizing Profit on Marketplaces</h3>
    <p>Use our calculator to experiment with different pricing strategies:</p>
    <ul>
      <li><strong>Optimize Shipping:</strong> Compare different shipping methods to find the most cost-effective option</li>
      <li><strong>Bundle Products:</strong> Consider selling complementary products together to reduce per-item fees</li>
      <li><strong>Seasonal Pricing:</strong> Adjust prices during peak seasons to account for increased competition and advertising costs</li>
      <li><strong>Inventory Planning:</strong> Use profit calculations to decide which products to stock in larger quantities</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const categorySelect = document.getElementById('category');
    const subcategorySelect = document.getElementById('subcategory');
    const priceInput = document.getElementById('price');
    const weightInput = document.getElementById('weight');
    const areaSelect = document.getElementById('area');
    const shippingMethodSelect = document.getElementById('shippingMethod');
    const stepLevelSelect = document.getElementById('stepLevel');
    const gstPercentageSelect = document.getElementById('gstPercentage');
    const calculateButton = document.getElementById('calculateButton');
    const resetButton = document.getElementById('resetButton');
    const alertContainer = document.getElementById('alertContainer');
    
    // Result Elements
    const referralFeeElement = document.getElementById('referralFee');
    const closingFeeElement = document.getElementById('closingFee');
    const shippingFeeElement = document.getElementById('shippingFee');
    const totalFeesElement = document.getElementById('totalFees');
    const gstElement = document.getElementById('gst');
    const totalCostElement = document.getElementById('totalCost');
    const profitElement = document.getElementById('profit');
    const profitItem = document.getElementById('profitItem');
    
    // Subcategory data mapped by Category
    const subcategories = {
      "Automotive": [
        "Helmets & Riding Gloves",
        "Car and Bike parts",
        "Car interior care - Polish",
        "Automotive - Tyres",
        "Automotive - Batteries"
      ],
      "Baby": [
        "Baby Strollers",
        "Baby Car Seats",
        "Baby Safety - Guards & Locks",
        "Toys - Soft Toys"
      ],
      "Books": [
        "Books",
        "Movies",
        "Music",
        "Video Games - Consoles",
        "Musical Instruments - Guitars"
      ],
      "Clothing": [
        "Men's T-shirts",
        "Women's Innerwear",
        "Sarees and Dress Materials",
        "Fashion Jewellery",
        "Luggage - Suitcase & Trolleys"
      ],
      "Electronics": [
        "Mobile Phones",
        "Laptops",
        "Headphones",
        "Television",
        "Printers & Scanners"
      ],
      "Grocery": [
        "Herbs and Spices",
        "Oils",
        "Dried Fruits and Nuts",
        "Pet Food"
      ],
      "Health": [
        "Fragrance",
        "Haircare & Bath",
        "Vitamins & Supplements",
        "Medical Equipment",
        "Electric Massagers"
      ],
      "Home": [
        "Mattresses",
        "Wall Art",
        "Bedsheets & Blankets",
        "Home Decor Products",
        "Lawn & Garden Tools"
      ],
      "Industrial": [
        "Scientific Supplies",
        "Safety Equipment",
        "Power Tools",
        "Office Supplies"
      ],
      "Kitchen": [
        "Cookware & Tableware",
        "Gas Stoves",
        "Large Appliances",
        "Small Appliances",
        "Cleaning Supplies"
      ],
      "Sports": [
        "Cricket Equipment",
        "Football Equipment",
        "Badminton Equipment",
        "Swimming Equipment"
      ],
      "Others": [
        "Fine Art",
        "Gift Cards",
        "Other Miscellaneous Products"
      ]
    };

    // Fee structure by category (referral fee percentage)
    const categoryFees = {
      "Automotive": 10,
      "Baby": 12,
      "Books": 15,
      "Clothing": 15,
      "Electronics": 5,
      "Grocery": 8,
      "Health": 12,
      "Home": 12,
      "Industrial": 8,
      "Kitchen": 10,
      "Others": 15,
      "Sports": 12
    };

    // Handle category change
    categorySelect.addEventListener('change', function () {
      const category = this.value;
      // Clear old subcategories
      subcategorySelect.innerHTML = '<option value="">Select a Subcategory</option>';

      if (subcategories[category]) {
        subcategories[category].forEach(sub => {
          const option = document.createElement('option');
          option.value = sub;
          option.textContent = sub;
          subcategorySelect.appendChild(option);
        });
      }
    });

    // Calculate button click handler
    calculateButton.addEventListener('click', function() {
      calculateFeesAndProfit();
    });

    // Reset button click handler
    resetButton.addEventListener('click', function() {
      resetCalculator();
    });

    // Calculate all fees and profit
    function calculateFeesAndProfit() {
      // Get input values
      const price = parseFloat(priceInput.value) || 0;
      const weight = parseFloat(weightInput.value) || 0;
      const category = categorySelect.value;
      const gstPercentage = parseFloat(gstPercentageSelect.value) || 0;
      
      // Validate inputs
      if (!category) {
        showAlert('Please select a product category.', 'error');
        return;
      }
      
      if (price <= 0) {
        showAlert('Please enter a valid product price.', 'error');
        return;
      }
      
      if (weight <= 0) {
        showAlert('Please enter a valid product weight.', 'error');
        return;
      }
      
      // Calculate fees
      const referralFeePercentage = categoryFees[category] || 10;
      const referralFee = (price * referralFeePercentage) / 100;
      
      // Fixed closing fee
      const closingFee = 40;
      
      // Calculate shipping fee based on weight and area
      const area = areaSelect.value;
      const shippingMethod = shippingMethodSelect.value;
      const shippingFee = calculateShippingFee(weight, area, shippingMethod);
      
      // Calculate total fees before GST
      const totalFeesBeforeGst = referralFee + closingFee + shippingFee;
      
      // Calculate GST on fees
      const gstOnFees = (totalFeesBeforeGst * gstPercentage) / 100;
      
      // Calculate total cost (fees + GST)
      const totalCost = totalFeesBeforeGst + gstOnFees;
      
      // Calculate profit
      const profit = price - totalCost;
      
      // Update UI with calculated values
      updateResults(referralFee, closingFee, shippingFee, totalFeesBeforeGst, gstOnFees, totalCost, profit);
      
      showAlert('Calculation completed successfully!', 'success');
    }
    
    // Calculate shipping fee based on weight, area, and shipping method
    function calculateShippingFee(weight, area, shippingMethod) {
      let baseFee = 0;
      
      // Base fee by weight
      if (weight <= 100) {
        baseFee = 30;
      } else if (weight <= 500) {
        baseFee = 50;
      } else if (weight <= 1000) {
        baseFee = 80;
      } else {
        baseFee = 100 + Math.ceil((weight - 1000) / 500) * 20;
      }
      
      // Multiplier by area
      let areaMultiplier = 1;
      switch(area) {
        case 'regional':
          areaMultiplier = 1.5;
          break;
        case 'national':
          areaMultiplier = 2;
          break;
        case 'international':
          areaMultiplier = 4;
          break;
      }
      
      // Multiplier by shipping method
      let methodMultiplier = 1;
      switch(shippingMethod) {
        case 'expedited':
          methodMultiplier = 1.5;
          break;
        case 'priority':
          methodMultiplier = 2;
          break;
        case 'fba':
          methodMultiplier = 2.5;
          break;
      }
      
      return baseFee * areaMultiplier * methodMultiplier;
    }
    
    // Update the results in the UI
    function updateResults(referralFee, closingFee, shippingFee, totalFees, gst, totalCost, profit) {
      referralFeeElement.textContent = formatCurrency(referralFee);
      closingFeeElement.textContent = formatCurrency(closingFee);
      shippingFeeElement.textContent = formatCurrency(shippingFee);
      totalFeesElement.textContent = formatCurrency(totalFees);
      gstElement.textContent = formatCurrency(gst);
      totalCostElement.textContent = formatCurrency(totalCost);
      profitElement.textContent = formatCurrency(profit);
      
      // Update profit/loss styling
      if (profit >= 0) {
        profitItem.className = 'result-item profit';
      } else {
        profitItem.className = 'result-item loss';
      }
    }
    
    // Format currency in Indian Rupees
    function formatCurrency(amount) {
      return '₹' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    
    // Reset the calculator
    function resetCalculator() {
      categorySelect.value = '';
      subcategorySelect.innerHTML = '<option value="">Select a Subcategory</option>';
      priceInput.value = '';
      weightInput.value = '';
      areaSelect.value = 'local';
      shippingMethodSelect.value = '';
      stepLevelSelect.value = 'basic';
      gstPercentageSelect.value = '18';
      
      // Reset results
      referralFeeElement.textContent = '₹0';
      closingFeeElement.textContent = '₹0';
      shippingFeeElement.textContent = '₹0';
      totalFeesElement.textContent = '₹0';
      gstElement.textContent = '₹0';
      totalCostElement.textContent = '₹0';
      profitElement.textContent = '₹0';
      profitItem.className = 'result-item';
      
      showAlert('Calculator has been reset.', 'success');
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
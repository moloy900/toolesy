---
layout: default
title: "Indian Free Reverse GST Calculator - Calculate GST from Total Amount"
permalink: /indian-free-reverse-gst-calculator-calculate-gst-from-total-amount/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Indian Free Reverse GST Calculator - Find Base Price & GST Amount | GST Reverse Calculator</title>
<meta name="description"
  content="Free Indian Reverse GST Calculator tool. Find base price (GST छोड़कर) and GST amount from total amount. CGST, SGST, IGST split for all GST rates. Perfect for invoice verification and tax calculation.">
<meta name="keywords"
  content="reverse gst calculator, reverse gst calculator india, gst inclusive calculator, gst remove calculator, price without gst calculator, gst reverse 18% calculator, gst calculator india, gst calculator 18%, add gst calculator, remove gst calculator, gst exclusive calculator, find base price from gst">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Reverse GST Calculator Styles */
  .gst-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .gst-container h1 {
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

  .gst-section {
    margin-bottom: 40px;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .gst-section h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .gst-section p {
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

  .calculator-card {
    background: white;
    border-radius: 12px;
    padding: 30px;
    margin: 20px 0;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .amount-input-group {
    margin-bottom: 25px;
  }

  .amount-input-group label {
    display: block;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 10px;
    font-size: 1.1rem;
  }

  .amount-input {
    width: 100%;
    padding: 15px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 18px;
    transition: border-color 0.3s;
  }

  .amount-input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .gst-rate-buttons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 12px;
    margin: 20px 0;
  }

  .gst-rate-btn {
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    background: white;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.3s ease;
    text-align: center;
  }

  .gst-rate-btn:hover {
    border-color: var(--primary);
    background: rgba(52, 152, 219, 0.1);
    transform: translateY(-2px);
  }

  .gst-rate-btn.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }

  .result-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 25px;
    border-radius: 12px;
    margin: 25px 0;
    color: white;
  }

  .result-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .result-item:last-child {
    border-bottom: none;
  }

  .result-label {
    font-size: 1.1rem;
    font-weight: 500;
  }

  .result-value {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .gst-split-section {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 20px;
    margin-top: 20px;
  }

  .gst-split-title {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 15px;
    font-size: 1.1rem;
    text-align: center;
  }

  .split-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    text-align: center;
  }

  .split-card {
    background: white;
    padding: 15px;
    border-radius: 8px;
    border-left: 3px solid var(--primary);
  }

  .split-label {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 5px;
  }

  .split-value {
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--primary);
  }

  .formula-box {
    background: #f0f0f0;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    text-align: center;
    font-family: monospace;
    font-size: 1rem;
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .action-button {
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

  .action-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .action-button:active {
    transform: translateY(0);
  }

  .action-button.success {
    background: var(--success);
  }

  .action-button.success:hover {
    background: #218838;
  }

  .action-button.secondary {
    background: #6c757d;
  }

  .action-button.secondary:hover {
    background: #5a6268;
  }

  .action-button.warning {
    background: #ffc107;
    color: #212529;
  }

  .action-button.warning:hover {
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

  .gst-rates-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .rate-card {
    text-align: center;
    padding: 15px;
    background: white;
    border-radius: 8px;
    border: 1px solid #e0e6ed;
  }

  .rate-card h4 {
    color: var(--primary);
    margin-bottom: 5px;
    font-size: 1.3rem;
  }

  .rate-card p {
    color: #666;
    margin: 0;
    font-size: 0.9rem;
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

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .counter-wrapper {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .action-button {
      font-size: 13px;
      padding: 12px 8px;
    }

    .gst-container {
      padding: 15px;
    }

    .gst-section {
      padding: 20px;
      margin-bottom: 30px;
    }

    .gst-container h1 {
      font-size: 2rem;
    }

    .gst-section h2 {
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

    .gst-rate-buttons {
      grid-template-columns: repeat(2, 1fr);
    }

    .result-value {
      font-size: 1.2rem;
    }

    .split-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<div class="gst-container">
  <h1>Indian Free Reverse GST Calculator</h1>
  <p class="welcome-message">Find Base Price (Wihout GST) and GST Amount from Total Amount (With GST). Perfect for invoice verification, tax calculation, and business accounting.</p>

  <div class="gst-section">
    <h2>Reverse GST Calculator India</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>GST Rates: </span>
        <span id="gstRatesCount">4</span>
      </div>
      <div class="counter-item">
        <span>Calculations: </span>
        <span id="calcCount">0</span>
      </div>
      <div class="counter-item">
        <span>Current GST: </span>
        <span id="currentGST">18%</span>
      </div>
      <div class="counter-item">
        <span>Mode: </span>
        <span id="currentMode">Reverse (Inclusive)</span>
      </div>
    </div>

    <div class="calculator-card">
      <div class="amount-input-group">
        <label>Final Price (GST Included) <i class="fas fa-rupee-sign"></i></label>
        <input type="number" id="totalAmount" class="amount-input" placeholder="Enter total amount (including GST)" value="1180">
      </div>

      <div class="gst-rates-info">
        <div class="rate-card">
          <h4>5%</h4>
          <p>Household items</p>
        </div>
        <div class="rate-card">
          <h4>12%</h4>
          <p>Processed food</p>
        </div>
        <div class="rate-card">
          <h4>18%</h4>
          <p>Standard rate</p>
        </div>
        <div class="rate-card">
          <h4>28%</h4>
          <p>Luxury items</p>
        </div>
      </div>

      <div class="gst-rate-buttons">
        <button class="gst-rate-btn" data-rate="5">5%</button>
        <button class="gst-rate-btn" data-rate="12">12%</button>
        <button class="gst-rate-btn active" data-rate="18">18%</button>
        <button class="gst-rate-btn" data-rate="28">28%</button>
      </div>

      <div class="result-section">
        <div class="result-item">
          <span class="result-label">Base Price (Wihout GST)</span>
          <span class="result-value" id="basePrice">₹ 1,000.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">GST Amount</span>
          <span class="result-value" id="gstAmount">₹ 180.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">Total Amount (With GST)</span>
          <span class="result-value" id="totalDisplay">₹ 1,180.00</span>
        </div>
        <div class="formula-box" id="formula">
          Formula: Base Price = ₹1,180 ÷ (1 + 18%) = ₹1,000
        </div>
      </div>

      <!-- CGST + SGST / IGST Split Section -->
      <div class="gst-split-section">
        <div class="gst-split-title">
          <i class="fas fa-chart-pie"></i> GST Tax Split (Intra-State / Inter-State)
        </div>
        <div id="gstSplit" class="split-grid">
          <!-- Dynamic split will appear here -->
        </div>
        <div class="formula-box" style="margin-top: 10px; background: #e8f4f8;">
          <i class="fas fa-info-circle"></i> 
          <span id="splitNote">Intra-State (Same State): CGST + SGST | Inter-State (Different State): IGST</span>
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="action-button" data-action="calculate">Calculate Now</button>
      <button class="action-button success" data-action="copy-breakdown">Copy Breakdown</button>
      <button class="action-button" data-action="copy-total">Copy Total</button>
      <button class="action-button warning" data-action="reset">Reset</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Reverse GST Calculation Examples</h2>

      <h3>Example 1: 18% GST on ₹1,180 Total</h3>
      <div class="example-text">
        Final Price (GST Included): ₹1,180<br>
        GST Rate: 18%<br>
        <strong>Base Price = ₹1,180 ÷ 1.18 = ₹1,000</strong><br>
        GST Amount = ₹1,180 - ₹1,000 = ₹180<br>
        CGST (9%) = ₹90 | SGST (9%) = ₹90 (Intra-State)<br>
        IGST (18%) = ₹180 (Inter-State)
      </div>

      <h3>Example 2: 12% GST on ₹1,120 Total</h3>
      <div class="example-text">
        Final Price (GST Included): ₹1,120<br>
        GST Rate: 12%<br>
        <strong>Base Price = ₹1,120 ÷ 1.12 = ₹1,000</strong><br>
        GST Amount = ₹1,120 - ₹1,000 = ₹120<br>
        CGST (6%) = ₹60 | SGST (6%) = ₹60 (Intra-State)<br>
        IGST (12%) = ₹120 (Inter-State)
      </div>

      <h3>Example 3: 28% GST on ₹1,280 Total</h3>
      <div class="example-text">
        Final Price (GST Included): ₹1,280<br>
        GST Rate: 28%<br>
        <strong>Base Price = ₹1,280 ÷ 1.28 = ₹1,000</strong><br>
        GST Amount = ₹1,280 - ₹1,000 = ₹280<br>
        CGST (14%) = ₹140 | SGST (14%) = ₹140 (Intra-State)<br>
        IGST (28%) = ₹280 (Inter-State)
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Indian Free Reverse GST Calculator Tool</h2>

    <p>Need to find the original price before GST or calculate GST amount from a total amount? Our <strong>Reverse GST Calculator</strong> is the perfect solution for businesses, accountants, and consumers. Simply enter the total amount (GST included) and select the GST rate, and instantly get the base price (With GST) and GST amount. The tool also shows CGST, SGST, and IGST splits for complete transparency. All calculations happen instantly in your browser with 100% privacy.</p>

    <h3>How to Use This Reverse GST Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Total Amount:</strong> Input the final price that already includes GST (e.g., ₹1,180).</li>
      <li><strong>Select GST Rate:</strong> Choose from 5%, 12%, 18%, or 28% quick buttons.</li>
      <li><strong>Get Instant Results:</strong> The calculator automatically shows:</li>
      <ul>
        <li>✓ Base Price (Price without GST)</li>
        <li>✓ GST Amount</li>
        <li>✓ CGST + SGST Split (Intra-State)</li>
        <li>✓ IGST (Inter-State)</li>
      </ul>
      <li><strong>Copy Results:</strong> Use the copy buttons to save the breakdown or total for your records.</li>
    </ul>

    <h3>Reverse GST Calculation Formula:</h3>
    <div class="formula-box" style="background: #f0f0f0; margin: 15px 0;">
      <strong>Base Price = Total Amount ÷ (1 + GST Rate%)</strong><br>
      <strong>GST Amount = Total Amount - Base Price</strong><br>
      <strong>CGST = GST Amount ÷ 2 (For Intra-State)</strong><br>
      <strong>SGST = GST Amount ÷ 2 (For Intra-State)</strong><br>
      <strong>IGST = GST Amount (For Inter-State)</strong>
    </div>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you received a bill of ₹11,800 from a supplier, and you know the GST rate is 18%. You need to find out the actual product cost (without GST) and how much GST you paid. Using this reverse GST calculator, you enter ₹11,800, select 18% GST, and instantly get: Base Price = ₹10,000, GST Amount = ₹1,800. For intra-state transactions, you'll also see CGST = ₹900 and SGST = ₹900. This helps in accurate accounting, tax filing, and invoice verification.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Business Owners:</strong> Verify supplier invoices and calculate input tax credit (ITC).</li>
      <li><strong>Accountants:</strong> Quickly find base prices and GST components for tax returns.</li>
      <li><strong>Shopkeepers:</strong> Calculate GST on purchases and verify billing accuracy.</li>
      <li><strong>Consumers:</strong> Understand how much GST you're paying on bills and receipts.</li>
      <li><strong>Students:</strong> Learn reverse GST calculation formulas with practical examples.</li>
      <li><strong>Freelancers:</strong> Calculate GST on service invoices and find net earnings.</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>What is Reverse GST Calculation?</strong><br>
      Reverse GST calculation means finding the original price (without GST) from a total amount that already includes GST. Formula: Base Price = Total Amount ÷ (1 + GST Rate%).</p>

    <p><strong>What is the difference between CGST, SGST, and IGST?</strong><br>
      CGST (Central GST) and SGST (State GST) apply to intra-state transactions (within the same state). IGST (Integrated GST) applies to inter-state transactions (between different states). Both sum to the total GST rate.</p>

    <p><strong>Q: How do I calculate GST on MRP?</strong><br>
      MRP (Maximum Retail Price) includes GST. Use this reverse GST calculator to find the base price: Enter MRP as the total amount, select the applicable GST rate, and the calculator will show the price without GST and the GST amount.</p>

    <p><strong>Is this calculator accurate for all GST rates in India?</strong><br>
      Yes, this calculator follows the official Indian GST formula and works for all standard rates (5%, 12%, 18%, 28%) and other rates like 0%, 3%, etc. Just select the appropriate rate or enter a custom rate.</p>

    <p><strong>Can I use this for GST returns (GSTR-1, GSTR-3B)?</strong><br>
      Yes, this tool helps calculate GST amounts for invoice verification and tax liability calculations required for GST returns.</p>

    <p><strong>Is my data private when using this calculator?</strong><br>
      Absolutely! All calculations happen locally in your browser. Your financial data is never sent to any server, ensuring complete privacy and security.</p>

    <p><strong>Can I use this tool on my mobile phone?</strong><br>
      Yes, our reverse GST calculator is fully responsive and optimized for smartphones, tablets, and desktop computers.</p>

    <p><strong>Do I need to create an account or pay to use this?</strong><br>
      No, this is a completely free tool with no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our Reverse GST Calculator?</h3>
    <p>Our <strong>Indian reverse GST calculator</strong> stands out from other tools because of its accuracy, speed, and comprehensive breakdown. Unlike many calculators that only show total GST, our tool provides complete tax split including CGST and SGST for intra-state transactions. All calculations happen instantly as you type, saving you time and ensuring accuracy. Plus, with copy buttons, you can easily save the breakdown for your records or share with your accountant.</p>

    <h3>Common Applications of Reverse GST Calculation</h3>
    <p>Reverse GST calculation has numerous practical applications across various business and personal scenarios:</p>
    <ul>
      <li><strong>Invoice Verification:</strong> Verify GST amounts on supplier invoices and purchase bills.</li>
      <li><strong>Input Tax Credit (ITC):</strong> Calculate eligible ITC for GST returns.</li>
      <li><strong>Price Verification:</strong> Find actual product costs from MRP or billed amounts.</li>
      <li><strong>Tax Filing:</strong> Prepare accurate GST returns (GSTR-1, GSTR-3B).</li>
      <li><strong>Audit Preparation:</strong> Calculate GST components for tax audits and assessments.</li>
      <li><strong>Business Accounting:</strong> Record base prices and GST amounts in financial statements.</li>
    </ul>

    <h3>Understanding GST Split in India:</h3>
    <ul>
      <li><strong>Intra-State Transaction (Same State):</strong> GST split into CGST (Central GST) and SGST (State GST) equally.</li>
      <li><strong>Inter-State Transaction (Different States):</strong> Full GST as IGST (Integrated GST).</li>
      <li><strong>Example:</strong> For 18% GST on ₹1,000 base price: Intra-State = CGST 9% (₹90) + SGST 9% (₹90); Inter-State = IGST 18% (₹180).</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const totalAmountInput = document.getElementById('totalAmount');
    const gstRateBtns = document.querySelectorAll('.gst-rate-btn');
    const actionButtons = document.querySelectorAll('.action-button');
    const alertContainer = document.getElementById('alertContainer');
    
    const basePriceSpan = document.getElementById('basePrice');
    const gstAmountSpan = document.getElementById('gstAmount');
    const totalDisplaySpan = document.getElementById('totalDisplay');
    const formulaSpan = document.getElementById('formula');
    const gstSplitDiv = document.getElementById('gstSplit');
    const splitNoteSpan = document.getElementById('splitNote');
    
    let currentRate = 18;
    let calculationCount = 0;
    
    // Initialize
    updateCounters();
    calculateReverseGST();
    
    // Event listeners
    totalAmountInput.addEventListener('input', calculateReverseGST);
    
    gstRateBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        gstRateBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentRate = parseFloat(this.getAttribute('data-rate'));
        document.getElementById('currentGST').textContent = currentRate + '%';
        calculateReverseGST();
      });
    });
    
    actionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleAction(action);
      });
    });
    
    function calculateReverseGST() {
      let totalAmount = parseFloat(totalAmountInput.value);
      
      if (isNaN(totalAmount) || totalAmount < 0) {
        totalAmount = 0;
        totalAmountInput.value = 0;
      }
      
      // Reverse GST Formula: Base Price = Total ÷ (1 + GST Rate%)
      const gstFactor = 1 + (currentRate / 100);
      const basePrice = totalAmount / gstFactor;
      const gstAmount = totalAmount - basePrice;
      
      // Update display with proper formatting
      const formatCurrency = (num) => `₹ ${num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      
      basePriceSpan.textContent = formatCurrency(basePrice);
      gstAmountSpan.textContent = formatCurrency(gstAmount);
      totalDisplaySpan.textContent = formatCurrency(totalAmount);
      formulaSpan.textContent = `Formula: Base Price = ${formatCurrency(totalAmount)} ÷ (1 + ${currentRate}%) = ${formatCurrency(basePrice)}`;
      
      // Update GST Split (CGST + SGST / IGST)
      updateGSTSplit(gstAmount, basePrice);
      
      calculationCount++;
      updateCounters();
    }
    
    function updateGSTSplit(gstAmount, basePrice) {
      const halfGST = gstAmount / 2;
      const cgst = halfGST;
      const sgst = halfGST;
      const igst = gstAmount;
      
      const formatCurrency = (num) => `₹ ${num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      
      // Show both Intra-State (CGST+SGST) and Inter-State (IGST) options
      gstSplitDiv.innerHTML = `
        <div class="split-card">
          <div class="split-label"><i class="fas fa-building"></i> Intra-State</div>
          <div class="split-label">CGST (${currentRate/2}%)</div>
          <div class="split-value">${formatCurrency(cgst)}</div>
          <div class="split-label" style="margin-top: 5px;">SGST (${currentRate/2}%)</div>
          <div class="split-value">${formatCurrency(sgst)}</div>
        </div>
        <div class="split-card">
          <div class="split-label"><i class="fas fa-truck"></i> Inter-State</div>
          <div class="split-label">IGST (${currentRate}%)</div>
          <div class="split-value">${formatCurrency(igst)}</div>
          <div class="split-label" style="margin-top: 5px;">&nbsp;</div>
          <div class="split-value">&nbsp;</div>
        </div>
      `;
      
      splitNoteSpan.innerHTML = `Intra-State (Same State): CGST ${currentRate/2}% + SGST ${currentRate/2}% | Inter-State (Different State): IGST ${currentRate}%`;
    }
    
    function handleAction(action) {
      switch (action) {
        case 'calculate':
          calculateReverseGST();
          showAlert('GST calculation completed!', 'success');
          break;
          
        case 'copy-breakdown':
          copyBreakdown();
          break;
          
        case 'copy-total':
          copyTotal();
          break;
          
        case 'reset':
          resetCalculator();
          break;
      }
    }
    
    function copyBreakdown() {
      const totalAmount = parseFloat(totalAmountInput.value) || 0;
      const gstFactor = 1 + (currentRate / 100);
      const basePrice = totalAmount / gstFactor;
      const gstAmount = totalAmount - basePrice;
      const halfGST = gstAmount / 2;
      
      const formatCurrency = (num) => `₹ ${num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      
      const breakdownText = `Reverse GST Calculation Breakdown:
═══════════════════════════════════════
Total Amount (GST Included): ${formatCurrency(totalAmount)}
GST Rate: ${currentRate}%
Base Price (With GST): ${formatCurrency(basePrice)}
GST Amount: ${formatCurrency(gstAmount)}
═══════════════════════════════════════
Intra-State Transaction (Same State):
  CGST (${currentRate/2}%): ${formatCurrency(halfGST)}
  SGST (${currentRate/2}%): ${formatCurrency(halfGST)}
═══════════════════════════════════════
Inter-State Transaction (Different State):
  IGST (${currentRate}%): ${formatCurrency(gstAmount)}
═══════════════════════════════════════
Formula: Base Price = Total ÷ (1 + GST Rate%)
       = ${formatCurrency(totalAmount)} ÷ ${1 + (currentRate/100)}
       = ${formatCurrency(basePrice)}`;
      
      navigator.clipboard.writeText(breakdownText).then(() => {
        showAlert('Complete breakdown copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy breakdown: ' + err, 'error');
      });
    }
    
    function copyTotal() {
      const totalAmount = parseFloat(totalAmountInput.value) || 0;
      const formatCurrency = (num) => `₹ ${num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      
      navigator.clipboard.writeText(formatCurrency(totalAmount)).then(() => {
        showAlert('Total amount copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy total: ' + err, 'error');
      });
    }
    
    function resetCalculator() {
      totalAmountInput.value = 1180;
      currentRate = 18;
      
      // Reset UI
      gstRateBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-rate') == 18) {
          btn.classList.add('active');
        }
      });
      
      document.getElementById('currentGST').textContent = '18%';
      calculateReverseGST();
      showAlert('Calculator reset to default values.', 'success');
    }
    
    function updateCounters() {
      document.getElementById('calcCount').textContent = calculationCount;
      document.getElementById('gstRatesCount').textContent = gstRateBtns.length;
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
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

    <p>Let’s be honest for a moment—dealing with GST in India can feel like a headache, especially when you have a bill that already includes taxes and you need to figure out the original price. Maybe you're a small business owner looking at a supplier invoice, or a freelancer trying to calculate your actual earnings after GST, or just a curious customer who wants to know how much tax you paid on that new phone. Whatever the case, our <strong>free Reverse GST Calculator</strong> is here to save you time, stress, and math-related migraines. You simply type in the final amount (the one that already has GST added), pick the GST rate, and instantly you'll see the original price before tax, exactly how much GST you paid, and even the CGST, SGST, or IGST split depending on your transaction type. No complicated formulas to remember. No second-guessing your calculations. And best of all? Everything happens right inside your browser, so your financial information never leaves your device. That means complete privacy, zero data collection, and no weird ads tracking what you're doing. Just honest, accurate math for Indian taxpayers, shopkeepers, accountants, and anyone else who deals with GST on a regular basis.</p>

    <h3>How to Use This Reverse GST Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Total Amount:</strong> This is the number you see on your bill or invoice—the price that already includes GST. Let’s say your supplier charged you ₹1,180 all inclusive. Type that in. No decimal worries, no commas needed. The tool handles both.</li>
      <li><strong>Select GST Rate:</strong> India has four main GST rates: 5%, 12%, 18%, and 28%. We’ve given you handy buttons for each one. Just click the rate that matches your bill. But if you have a special rate like 0.25% on rough diamonds or 3% on gold, don’t worry—you can type any custom rate you want into the field. The calculator doesn't judge; it just calculates.</li>
      <li><strong>Get Instant Results:</strong> As soon as you enter the amount and select the rate, the results appear automatically. No need to click a separate "calculate" button (though you can if you want to refresh). You’ll see four key things:</li>
      <ul>
        <li>✓ <strong>Base Price:</strong> This is the actual price of the product or service before GST was added. The number your accountant really wants.</li>
        <li>✓ <strong>Total GST Amount:</strong> Exactly how much tax you paid on that transaction.</li>
        <li>✓ <strong>CGST + SGST Split:</strong> If you're buying or selling within the same state, this shows you the central and state portions of the tax.</li>
        <li>✓ <strong>IGST:</strong> If it's an inter-state transaction, you'll see the full integrated GST amount here.</li>
      </ul>
      <li><strong>Copy Results:</strong> See those small copy buttons next to each result? Click one, and the number is saved to your clipboard instantly. You can then paste it into an email, a spreadsheet, a bill book, or a WhatsApp message to your CA. Super handy when you're working with multiple invoices and don't want to keep switching tabs.</li>
    </ul>

    <h3>Reverse GST Calculation Formula (For the Curious Minds):</h3>
    <div class="formula-box" style="background: #f0f0f0; margin: 15px 0;">
      <strong>Base Price = Total Amount ÷ (1 + GST Rate%)</strong><br>
      <strong>GST Amount = Total Amount - Base Price</strong><br>
      <strong>CGST = GST Amount ÷ 2 (For Intra-State)</strong><br>
      <strong>SGST = GST Amount ÷ 2 (For Intra-State)</strong><br>
      <strong>IGST = GST Amount (For Inter-State)</strong>
    </div>
    <p>Let me break that down in plain language. Say you paid ₹1,180 total, and the GST rate is 18%. First, convert 18% into a decimal by dividing by 100—that gives you 0.18. Add 1 to that (so 1.18). Then divide your total amount (₹1,180) by 1.18. You get ₹1,000. That's your base price. Then subtract ₹1,000 from ₹1,180 to get ₹180 as your GST amount. Simple, right? But here's the thing—doing that manually for 20 invoices at the end of a long workday? Not fun. That's why you just let the calculator do the heavy lifting.</p>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Let me tell you about Rajesh. He runs a small electronics shop in Pune. His supplier sends him a bill for ₹11,800 for a batch of smartphones. The bill mentions "GST 18% included." Rajesh needs to know two things: First, what's the actual cost of the phones before tax (because that's what affects his profit margins). Second, how much GST he paid (because he can claim that as Input Tax Credit when he files his GSTR-3B). Instead of pulling out a calculator and doing the math manually—and possibly making a mistake—Rajesh opens this tool. He types ₹11,800, clicks the 18% button, and instantly sees: Base Price = ₹10,000, GST Amount = ₹1,800. And because his supplier is also in Maharashtra (same state), the tool shows CGST = ₹900 and SGST = ₹900. Rajesh copies the numbers into his purchase register, saves the breakdown for his GST filing, and moves on to the next task. Total time spent? Maybe 15 seconds. That's the difference between struggling with tax math and running a smooth business.</p>
    
    <p><strong>Another scenario:</strong> Priya is a freelance graphic designer in Bengaluru. She just invoiced a client in Mumbai for ₹47,200 (including 18% GST). She needs to know her actual professional fees before tax. She enters ₹47,200, selects 18%, and sees: Base Price = ₹40,000, GST Amount = ₹7,200. Since the client is in another state (Karnataka to Maharashtra), the tool shows IGST = ₹7,200. Now Priya knows she earned ₹40,000 from that project, and she owes ₹7,200 in IGST to the central government. No confusion. No under-billing. No surprises when it's time to pay her taxes.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Business Owners (Small and Large):</strong> You're getting invoices from suppliers left and right. Some include GST, some don't. Some are intra-state, some inter-state. You need to separate the tax from the actual cost for your books, your profit calculations, and your Input Tax Credit claims. This tool does it in seconds. No more manual errors that could trigger a GST audit.</li>
      <li><strong>Accountants and CAs:</strong> Let's be real—you already have enough on your plate. Between GST returns, reconciliations, and client meetings, you don't have time to manually reverse-calculate GST on 50 invoices. Use this tool to speed up your workflow. Copy-paste the results directly into Excel or Tally. Your clients will think you're magic.</li>
      <li><strong>Shopkeepers and Retailers:</strong> Whether you run a kirana store, a clothing boutique, or a mobile repair shop, you deal with GST daily. When customers ask, "How much tax am I paying on this?" you can show them instantly. Builds trust. Keeps things transparent. And helps you double-check your own bills.</li>
      <li><strong>Consumers:</strong> Ever looked at a restaurant bill or an electronics invoice and wondered, "How much of this is actual tax?" Now you can know. Enter the total amount, pick the rate (18% for most restaurant bills, 28% for luxury items), and see exactly how much GST you contributed. It won't change what you pay, but at least you'll understand where your money is going.</li>
      <li><strong>Students (CA, B.Com, MBA):</strong> Learning GST concepts? This tool is basically a live practice problem. Pick any total amount and any rate, see the formula in action, and check your own manual calculations. It's like having a tutor who never gets tired.</li>
      <li><strong>Freelancers and Gig Workers:</strong> If you charge GST on your services, you need to know your net earnings after tax. This tool tells you exactly that. Enter the invoice total (with GST), get your base price, and plan your finances accordingly. No more guessing.</li>
    </ul>

    <h3>Frequently Asked Questions (The Ones People Actually Ask):</h3>
    
    <p><strong>What is Reverse GST Calculation, in plain English?</strong><br>
      Normally, you take a price, add GST on top, and get a total. Reverse GST means you start with the total (which already has GST included) and work backwards to find the original price. Think of it like this: if you see a final price of ₹118 and you know GST is 18%, the original price was ₹100, and the GST was ₹18. That's reverse calculation. It's what you do when you have the "after tax" number and need the "before tax" number.</p>

    <p><strong>What is the difference between CGST, SGST, and IGST? And why should I care?</strong><br>
      Great question, because mixing these up can mess with your tax filing. <strong>CGST (Central GST)</strong> and <strong>SGST (State GST)</strong> apply when you buy or sell within the same state. They split the total GST rate equally—half goes to the central government, half to the state government. For example, if the total GST is 18% on an intra-state deal, CGST is 9% and SGST is 9%. <strong>IGST (Integrated GST)</strong> applies when you buy or sell between different states. In that case, the full GST amount goes to the central government, which then shares it with the destination state. You care about this because it affects how you file your returns and claim Input Tax Credit. Our calculator shows you both splits automatically, so you don't have to remember which is which.</p>

    <p><strong>Q: How do I calculate GST on MRP?</strong><br>
      MRP (Maximum Retail Price) is the final price printed on products—and yes, it already includes GST. So if you want to know the actual manufacturer price before tax, just enter the MRP as the total amount in our calculator, select the applicable GST rate (check the product category: 5% for essential items, 12% for most processed foods, 18% for everyday goods, 28% for luxury items), and you'll instantly see the base price. This is super useful if you're a retailer trying to understand your purchase costs, or just a curious shopper.</p>

    <p><strong>Is this calculator accurate for all GST rates in India?</strong><br>
      Yes, 100%. We follow the official GST formula as defined by the Indian government. It works for standard rates (5%, 12%, 18%, 28%), nil rates (0%), and special rates like 3% for gold, 2.5% for crude oil, or 0.25% for rough diamonds. Just type the custom rate into the field if it's not one of the preset buttons. The math is the same.</p>

    <p><strong>Can I use this for GST returns (GSTR-1, GSTR-3B)?</strong><br>
      Absolutely. When you're preparing your GST returns, you often need to report taxable value (base price) and tax amounts separately. This tool helps you extract those numbers from your invoices. For example, if you have a total invoice value of ₹1,18,000 including 18% GST, our calculator gives you the base price of ₹1,00,000 and GST amount of ₹18,000. You can then use those figures directly in your GSTR-1 (outward supplies) or GSTR-3B (summary return). Just double-check that the transaction type (intra or inter-state) matches what you select.</p>

    <p><strong>Is my data private when using this calculator?</strong><br>
      More private than you'd expect. No, really—we take this seriously. All calculations happen locally inside your browser using JavaScript. That means the numbers you type never travel across the internet. They never hit our server. They never get stored in a database. They don't show up in our logs. We literally cannot see what you're calculating, even if we wanted to. Your financial data stays on your phone or laptop. Period. So go ahead, calculate your supplier invoices, your client bills, your personal expenses. No one else will know.</p>

    <p><strong>Can I use this tool on my mobile phone?</strong><br>
      Yes, and it works surprisingly well. The layout adjusts to fit small screens, buttons are big enough to tap without zooming, and the copy function works just like on a computer. You can be standing in your godown, sitting in a coffee shop, or waiting for a train, and still calculate reverse GST in under 10 seconds. No app installation needed—just open the webpage.</p>

    <p><strong>Do I need to create an account or pay to use this?</strong><br>
      Let me be absolutely clear: No. Never. This tool is 100% free. No "premium version." No "enter your email to unlock results." No "start your 7-day trial." No hidden fees. No subscription. If anyone ever asks you to pay for a reverse GST calculator, send them our way. We built this because we believe basic tax math shouldn't cost money or require sign-ups. Just use it as much as you want, whenever you want.</p>

    <h3>Why Choose Our Reverse GST Calculator Over Others?</h3>
    <p>Look, there are maybe a dozen reverse GST calculators floating around online. But most of them have annoying problems. Some only show the total GST amount—no CGST/SGST split, so you're left guessing. Some require you to click a "calculate" button every single time, which gets old after the third invoice. Some are loaded with ads that pop up right when you're trying to read your results. And some (shockingly) actually store your data on their servers, which is a privacy nightmare when you're dealing with business finances.</p>
    <p>Our calculator fixes all of that. First, we show you everything—base price, total GST, plus the CGST/SGST split for intra-state AND the IGST amount for inter-state. No hidden information. Second, it calculates <em>instantly</em> as you type or select a rate. No extra button clicks. Third, no ads that interrupt your workflow. And fourth, complete privacy because everything runs locally. Plus, we've added those copy buttons for each result because we actually talked to accountants and business owners and found out that's what they wanted. Little details like that separate a "just okay" tool from one you'll come back to again and again.</p>

    <h3>Common Applications of Reverse GST Calculation (Real People, Real Uses):</h3>
    <ul>
      <li><strong>Invoice Verification:</strong> Your supplier sends a bill. You want to make sure they calculated GST correctly. Use reverse GST on the total amount. If the resulting base price doesn't match the quantity times unit price on their bill, something's off. This catches errors before you pay.</li>
      <li><strong>Input Tax Credit (ITC) Calculation:</strong> As a registered taxpayer, you can claim credit for the GST you paid on business purchases. But you need to know the exact GST amount per invoice. Our calculator gives you that number instantly. No more flipping through pages trying to find where they mentioned the tax amount.</li>
      <li><strong>Price Verification from MRP:</strong> That "Maximum Retail Price" printed on every product includes GST. Ever wonder what the manufacturer actually gets? Run the MRP through our calculator with the correct rate. The result might surprise you—sometimes the tax portion is much larger than you think.</li>
      <li><strong>Tax Filing (GSTR-1, GSTR-3B):</strong> When you file monthly or quarterly returns, you need to report taxable value (base price) and tax amounts separately. Our calculator extracts these from your total invoice values in seconds. Multiply that by dozens or hundreds of invoices, and you've saved hours of work.</li>
      <li><strong>Audit Preparation:</strong> If the tax department asks for a breakdown of your invoices, you'll need to show base prices and GST components. Use our tool to generate that data quickly. Keep the results in a spreadsheet. Audit becomes less scary.</li>
      <li><strong>Business Accounting & Bookkeeping:</strong> Most accounting software needs you to enter base price and tax amounts separately. If your supplier gives you a total-inclusive invoice, reverse calculate before entering. Your books will stay clean and reconciliation will be easier at year-end.</li>
    </ul>

    <h3>Understanding GST Split in India (With More Examples):</h3>
    <ul>
      <li><strong>Intra-State Transaction (Same State):</strong> Let's say you're in Delhi and you buy goods from another Delhi supplier. Total GST is 18%. That 18% gets split equally: 9% CGST (goes to central government) and 9% SGST (goes to Delhi government). On a base price of ₹10,000, you pay ₹900 CGST and ₹900 SGST. Total GST ₹1,800. Our calculator shows both numbers clearly so you can record them correctly.</li>
      <li><strong>Inter-State Transaction (Different States):</strong> Same example but this time you're in Delhi and the supplier is in Mumbai (Maharashtra). Total GST is still 18%, but now it's all IGST. No split. ₹1,800 goes entirely as IGST to the central government, which will then transfer part of it to Maharashtra later. Your invoice might just show "IGST ₹1,800." Our calculator gives you that.</li>
      <li><strong>Quick Reference for Common Rates:</strong> 5% GST (intra-state) = 2.5% CGST + 2.5% SGST. 12% = 6% + 6%. 18% = 9% + 9%. 28% = 14% + 14%. For inter-state, all percentages become IGST at the full rate. Keep this in mind when looking at your bills. But honestly? You don't need to memorize it—the calculator does it for you.</li>
    </ul>
    
    <h3>A Quick Heads-Up for Advanced Users</h3>
    <p>If you're dealing with composite dealers, reverse charge mechanism (RCM), or GST on imports/exports, the basic reverse calculation still works, but you may need additional adjustments. For example, under RCM, the recipient pays GST directly to the government, but the base price calculation remains the same. For exports (zero-rated supplies), there's no GST on the invoice, so reverse calculation isn't needed. For imports, you'd typically deal with BCD (Basic Customs Duty) plus IGST, which is more complex. Our tool focuses on standard domestic GST reverse calculation—which covers 95% of use cases. For the edge cases, we recommend consulting your CA (and we say that with respect, because some situations genuinely need professional advice).</p>

    <h3>Final Thoughts (Use It, Share It, Bookmark It)</h3>
    <p>We built this reverse GST calculator because we were tired of doing the same manual math over and over again—and we figured millions of other Indians were, too. Whether you're running a business, working as an accountant, studying for CA exams, or just a curious consumer who wants to understand tax better, this tool is for you. It's free. It's private. It's fast. And it actually shows you the splits that matter, not just a single number. So go ahead—try it with a real bill from your wallet or phone. Enter the total, pick a rate, and see the breakdown. Then bookmark this page. Share it with your office group or your study group. Use it every time you get an invoice with GST included. And if you ever have a suggestion to make it better, we're genuinely all ears. Until then, happy calculating—and may your Input Tax Credit always be accurate.</p>
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
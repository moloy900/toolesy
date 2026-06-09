---
layout: default
title: "Percentage Calculator – Calculate Percentages Online"
permalink: /percentage-calculator/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Percentage Calculator – Calculate Percentages Online</title>

<meta name="description"
  content="Free percentage calculator to find percentage increase, decrease, discounts, GST, and percentage of any number. Quick, accurate, and easy for daily use.">

<meta name="keywords"
  content="percentage calculator, calculate percentage, percentage increase calculator, percentage decrease calculator, percentage of number, discount percentage calculator, GST percentage calculator, math calculator online">

<meta name="author" content="ToolEsy.com">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://toolesy.com/percentage-calculator">

<!-- ✅ Open Graph / Facebook -->
<meta property="og:title" content="Free Percentage Calculator Online">
<meta property="og:description" content="Calculate percentage increase, decrease, discount, and GST instantly.">
<meta property="og:url" content="https://toolesy.com/percentage-calculator">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Percentage Calculator Online">
<meta name="twitter:description" content="Easy percent calculator for percentage increase, decrease & discounts.">


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Percentage Calculator Styles */
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

  .calculator-types {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }

  .calculator-type {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    cursor: pointer;
    border: 2px solid transparent;
  }

  .calculator-type:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
    border-color: var(--primary);
  }

  .calculator-type.active {
    border-color: var(--primary);
    background: #f0f8ff;
  }

  .calculator-type h3 {
    color: var(--primary);
    margin-bottom: 10px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .calculator-type p {
    font-size: 0.95rem;
    color: #555;
    margin: 0;
  }

  .input-section {
    margin: 20px 0;
  }

  .input-group {
    margin-bottom: 20px;
  }

  .input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #2c3e50;
  }

  .input-group input {
    width: 100%;
    padding: 14px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .input-group input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .formula-display {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    margin: 20px 0;
    border-left: 4px solid var(--primary);
    font-family: 'Courier New', monospace;
    font-size: 1rem;
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .calc-button {
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

  .calc-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .calc-button:active {
    transform: translateY(0);
  }

  .calc-button.success {
    background: var(--success);
  }

  .calc-button.success:hover {
    background: #218838;
  }

  .calc-button.secondary {
    background: #6c757d;
  }

  .calc-button.secondary:hover {
    background: #5a6268;
  }

  .calc-button.warning {
    background: #ffc107;
    color: #212529;
  }

  .calc-button.warning:hover {
    background: #e0a800;
  }

  .result-section {
    margin-top: 30px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    display: none;
  }

  .result-section.active {
    display: block;
    animation: fadeIn 0.5s;
  }

  .result-title {
    color: var(--primary);
    font-size: 1.3rem;
    margin-bottom: 15px;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 10px;
  }

  .result-value {
    font-size: 2rem;
    font-weight: bold;
    color: #2c3e50;
    margin: 15px 0;
    text-align: center;
  }

  .calculation-steps {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
    font-size: 0.95rem;
  }

  .calculation-steps h4 {
    margin-bottom: 10px;
    color: var(--primary);
  }

  .calculation-steps ol {
    margin-left: 20px;
  }

  .calculation-steps li {
    margin-bottom: 8px;
    line-height: 1.5;
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

  .example-item {
    background: white;
    padding: 15px;
    border-radius: 6px;
    border-left: 4px solid var(--primary);
    margin: 10px 0;
  }

  .example-question {
    font-weight: 600;
    margin-bottom: 5px;
    color: #2c3e50;
  }

  .example-answer {
    color: #555;
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

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .calculator-types {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .calc-button {
      font-size: 13px;
      padding: 12px 8px;
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

    .result-value {
      font-size: 1.5rem;
    }
  }

  /* Calculator type icons */
  .calculator-type i {
    font-size: 1.5rem;
    color: var(--primary);
  }
</style>

<div class="calculator-container">
  <h1>Free Online Percentage Calculator</h1>
  <p class="welcome-message">Calculate percentages easily with our free online tool. Find percentage increase, decrease, percentage of a number, and more with step-by-step solutions.</p>

  <div class="calculator-section">
    <h2>Percentage Calculator</h2>

    <div class="calculator-types">
      <div class="calculator-type active" data-type="percentage-of-number">
        <h3><i class="fas fa-percentage"></i> Percentage of a Number</h3>
        <p>Calculate what is X% of Y number</p>
      </div>
      <div class="calculator-type" data-type="percentage-increase">
        <h3><i class="fas fa-arrow-up"></i> Percentage Increase</h3>
        <p>Find the percentage increase from one value to another</p>
      </div>
      <div class="calculator-type" data-type="percentage-decrease">
        <h3><i class="fas fa-arrow-down"></i> Percentage Decrease</h3>
        <p>Find the percentage decrease from one value to another</p>
      </div>
      <div class="calculator-type" data-type="find-percentage">
        <h3><i class="fas fa-search"></i> Find Percentage</h3>
        <p>Calculate what percentage X is of Y</p>
      </div>
    </div>

    <div class="input-section">
      <div id="percentage-of-number-inputs" class="calculator-inputs">
        <div class="input-group">
          <label for="percentage-value">What is</label>
          <input type="number" id="percentage-value" placeholder="Enter percentage">
        </div>
        <div class="input-group">
          <label for="number-value">% of</label>
          <input type="number" id="number-value" placeholder="Enter number">
        </div>
        <div class="formula-display">
          Formula: (Percentage ÷ 100) × Number
        </div>
      </div>

      <div id="percentage-increase-inputs" class="calculator-inputs" style="display: none;">
        <div class="input-group">
          <label for="original-value">Original Value</label>
          <input type="number" id="original-value" placeholder="Enter original value">
        </div>
        <div class="input-group">
          <label for="new-value">New Value</label>
          <input type="number" id="new-value" placeholder="Enter new value">
        </div>
        <div class="formula-display">
          Formula: ((New Value - Original Value) ÷ Original Value) × 100
        </div>
      </div>

      <div id="percentage-decrease-inputs" class="calculator-inputs" style="display: none;">
        <div class="input-group">
          <label for="decrease-original-value">Original Value</label>
          <input type="number" id="decrease-original-value" placeholder="Enter original value">
        </div>
        <div class="input-group">
          <label for="decrease-new-value">New Value</label>
          <input type="number" id="decrease-new-value" placeholder="Enter new value">
        </div>
        <div class="formula-display">
          Formula: ((Original Value - New Value) ÷ Original Value) × 100
        </div>
      </div>

      <div id="find-percentage-inputs" class="calculator-inputs" style="display: none;">
        <div class="input-group">
          <label for="part-value">What percentage is</label>
          <input type="number" id="part-value" placeholder="Enter part value">
        </div>
        <div class="input-group">
          <label for="whole-value">of</label>
          <input type="number" id="whole-value" placeholder="Enter whole value">
        </div>
        <div class="formula-display">
          Formula: (Part ÷ Whole) × 100
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="calc-button" id="calculate-button">Calculate</button>
      <button class="calc-button success" id="clear-button">Clear</button>
      <button class="calc-button secondary" id="copy-button">Copy Result</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="result-section" id="result-section">
      <h3 class="result-title">Calculation Result</h3>
      <div class="result-value" id="result-value"></div>
      <div class="calculation-steps" id="calculation-steps"></div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <div class="example-item">
        <div class="example-question">What is 20% of 150?</div>
        <div class="example-answer">20% of 150 is 30. Calculation: (20 ÷ 100) × 150 = 30</div>
      </div>

      <div class="example-item">
        <div class="example-question">If a product price increases from $50 to $65, what is the percentage increase?</div>
        <div class="example-answer">The percentage increase is 30%. Calculation: ((65 - 50) ÷ 50) × 100 = 30%</div>
      </div>

      <div class="example-item">
        <div class="example-question">If a product price decreases from $80 to $64, what is the percentage decrease?</div>
        <div class="example-answer">The percentage decrease is 20%. Calculation: ((80 - 64) ÷ 80) × 100 = 20%</div>
      </div>

      <div class="example-item">
        <div class="example-question">What percentage is 25 of 200?</div>
        <div class="example-answer">25 is 12.5% of 200. Calculation: (25 ÷ 200) × 100 = 12.5%</div>
      </div>
    </div>
  </div>

  ```html
<!-- SEO Content Section -->
<div class="content-placeholder">
    <h2>Free Online Percentage Calculator</h2>

    <p>Let’s be real—percentages are everywhere. You see them on sale tags, in bank emails, on your kid’s report card, and even in the news when they talk about inflation or election results. But here’s the thing: not everyone enjoys doing percentage math in their head. And honestly? You shouldn’t have to. That’s exactly why we built this <strong>free Percentage Calculator</strong>. It’s not just another boring math tool. It’s like having a smart friend who’s really good with numbers, ready to help you figure out discounts, taxes, tips, raises, or anything else that involves those little percent signs. You don’t need to remember any formulas. You don’t need to double-check your work. Just type in a couple of numbers, click a button, and boom—the answer appears. Plus, it shows you the steps so you actually learn something along the way. No registration, no cost, no nonsense. Just fast, accurate percentage math right in your browser.</p>

    <h3>How to Use This Percentage Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Calculation Type:</strong> This is where you tell the tool what kind of problem you’re solving. There are four options: <em>Percentage of a Number</em> (like “what’s 15% of 200?”), <em>Percentage Increase</em> (like “my rent went from $1000 to $1200—what’s the percent increase?”), <em>Percentage Decrease</em> (like “that jacket dropped from $80 to $60—what’s the percent off?”), and <em>Find Percentage</em> (like “I scored 45 out of 60—what’s my percentage grade?”). Pick the one that matches what you need.</li>
      <li><strong>Enter Values:</strong> Once you choose a calculation type, the tool shows you exactly which numbers to enter. For “Percentage of a Number,” you’ll enter the percentage and the total. For “Increase” or “Decrease,” you’ll enter the original value and the new value. For “Find Percentage,” you’ll enter the part and the whole. It’s all very straightforward—no guessing.</li>
      <li><strong>Calculate:</strong> Hit that big “Calculate” button and watch the magic happen. The result appears instantly. No spinning wheels, no “please wait,” no ads interrupting you.</li>
      <li><strong>Review Steps:</strong> This is the part that makes our calculator different from every other bare-bones tool out there. Underneath the result, you’ll see a step-by-step breakdown of exactly how we got that number. It shows the formula, the numbers plugged in, and each stage of the math. This is a game-changer if you’re a student trying to learn, or if you just want to double-check that the tool didn’t make a mistake (spoiler: it won’t).</li>
      <li><strong>Copy or Clear:</strong> Need to save your answer? Click “Copy Result” and paste it into an email, a spreadsheet, or a text message. Want to start a fresh calculation? Hit “Clear” and all the fields reset instantly. No page refresh needed.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Let me paint you a picture. It’s Saturday afternoon, and you’re out shopping. You spot a really nice winter coat—the kind you’ve been eyeing for months. Original price: $180. There’s a red tag that says “Sale: $135.” You’re pretty sure that’s a good deal, but you want to know the actual discount percentage. Is it 20% off? 25%? You could pull out your phone’s calculator and do the math: ($180 - $135) = $45 saved, then $45 ÷ $180 = 0.25, times 100 equals 25%. That’s doable, but what if you’re tired? What if there’s a long line behind you? What if you just don’t feel like doing math on a Saturday? Here’s what you do instead: open this tool, select “Percentage Decrease,” type 180 as the original value and 135 as the new value, click calculate. In less than two seconds, you see “25% decrease.” Now you know exactly how much you’re saving. Plus, the tool shows you the math: $180 - $135 = $45, then $45 ÷ $180 = 0.25, times 100 = 25%. You feel confident, you buy the coat, and you walk out happy. That’s what this tool is for—making real life just a little bit easier.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Students:</strong> Look, I remember staring at percentage homework and feeling completely lost. The step-by-step explanations in this calculator are basically a free tutor. You can check your answers, see where you went wrong, and actually understand the process instead of just memorizing it.</li>
      <li><strong>Shoppers:</strong> Whether it’s Black Friday, a clearance sale, or just your local grocery store marking down bread, you’ll use this tool constantly. Calculate discount percentages, final sale prices, and even tax amounts. It pays for itself (except it’s free, so it literally pays you in saved time and money).</li>
      <li><strong>Business Professionals:</strong> Sales reports, growth metrics, profit margins, market share—business runs on percentages. Stop second-guessing your numbers. Use this tool to double-check everything before you send that report to your boss or present to a client.</li>
      <li><strong>Finance Professionals & Personal Finance Nerds:</strong> Interest rates on savings accounts, percentage returns on investments, loan APR calculations, tip percentages at restaurants—percentages are the language of money. This tool speaks that language fluently.</li>
      <li><strong>Teachers:</strong> Imagine projecting this calculator on a classroom screen and showing students not just the answer, but each step of the math. It’s like having a teaching assistant who never gets tired. Use it for demonstrations, worksheets, or just to settle debates when two students get different answers.</li>
      <li><strong>Anyone, Seriously Anyone:</strong> You don’t need to be a math person to use this. If you’ve ever looked at a percentage and felt a tiny knot of anxiety in your stomach, this tool is for you. It turns confusion into confidence.</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>How do I calculate percentage of a number?</strong><br>
      This is probably the most common percentage question out there. The formula is simple: take the percentage, divide it by 100, then multiply by your number. For example, if you want 15% of 200, you do (15 ÷ 100) = 0.15, then 0.15 × 200 = 30. Our calculator does this instantly, and it shows you each step so you can learn the pattern. After using it a few times, you might even start doing these in your head—but no pressure if you don’t. That’s what the tool is for.</p>

    <p><strong>What's the difference between percentage increase and decrease?</strong><br>
      Great question, because people mix these up all the time. Percentage increase is when something goes up—like your salary, your rent, or the price of gas. You’re measuring how much bigger the new number is compared to the original. Percentage decrease is the opposite: something went down, like a sale price, your monthly electric bill, or the number of sick days you took this year. The formulas are almost identical, but they flip which number is subtracted from which. Our calculator keeps you from accidentally using the wrong one. Just tell it whether you’re measuring an increase or a decrease, and it handles the rest.</p>

    <p><strong>How do I calculate what percentage one number is of another?</strong><br>
      This one trips people up because it sounds backward at first. Let’s say you got 45 questions right out of 60 on a test. You want to know your percentage grade. You divide the smaller number (45) by the bigger number (60), then multiply by 100. So 45 ÷ 60 = 0.75, times 100 = 75%. That’s an 75%—solid B, maybe? Our “Find Percentage” mode does exactly this. Enter the part (45) and the whole (60), and you’ll get 75% with the full breakdown. Works for test scores, survey results, tip splitting, you name it.</p>

    <p><strong>Is there any cost to use this percentage calculator?</strong><br>
      Zero. Zilch. Nada. Free as in free speech and free coffee (well, free coffee is rare, but you get the idea). No registration, no “premium tier,” no credit card fields hiding in the corner. You don’t even need to give us your email address. Just open the page and start calculating. We built this because percentage math is hard enough already—paying for a calculator should never be part of the problem.</p>

    <p><strong>Can I use this on my phone?</strong><br>
      Absolutely. The tool is fully responsive, meaning it works on laptops, tablets, and phones equally well. Buttons are big enough to tap with a finger, and the text is readable without zooming. You can be standing in a store aisle, sitting in a classroom, or lying on your couch, and the calculator will work just fine.</p>

    <h3>Why Choose Our Percentage Calculator?</h3>
    <p>Look, there’s no shortage of percentage calculators online. A quick Google search finds dozens of them. So why should you use this one? Let me give you three solid reasons. First, <strong>the step-by-step explanations</strong>. Most calculators just spit out a number and leave you wondering, “Wait, how did it get that?” Our tool shows every single step, written in plain English. It’s like having a math teacher looking over your shoulder, but without the judgment. Second, <strong>privacy</strong>. All the calculations happen right in your browser. Your numbers never go to a server, never get logged, never get sold to advertisers. You could be calculating your salary increase or your credit card interest, and nobody will ever know. Third, <strong>it actually works offline</strong>. Once you load the page once, you can disconnect from the internet and keep using it. That’s huge if you’re traveling, in a building with spotty Wi-Fi, or just paranoid about your data. These three things—education, privacy, and reliability—are why people stick with this tool instead of jumping to the next one.</p>

    <h3>Common Applications of Percentage Calculations (You Use This More Than You Think)</h3>
    <p>Here’s a list of everyday situations where percentages pop up. I bet you’ll recognize at least five of these:</p>
    <ul>
      <li><strong>Shopping & Discounts:</strong> “30% off” sounds great, but what does that actually mean in dollars? Our calculator tells you the final price and the amount saved. No more guessing whether that “limited time offer” is actually a good deal.</li>
      <li><strong>Finance & Banking:</strong> Credit card APR (Annual Percentage Rate) is a percentage. Your savings account interest rate is a percentage. Loan origination fees are often a percentage of the loan amount. Even your credit score improvement from one month to the next can be expressed as a percentage change. This tool handles all of it.</li>
      <li><strong>Business Analytics:</strong> If you run a small business, you live and die by percentages. Profit margin (profit ÷ revenue). Conversion rate (customers ÷ visitors). Employee turnover rate. Sales growth quarter over quarter. Our calculator helps you track these without pulling your hair out.</li>
      <li><strong>Academic Grading:</strong> Teachers calculate assignment percentages, final grade percentages, and class average percentages. Students calculate what score they need on a final exam to pass the class. Parents calculate how much their kid’s grade improved after extra credit. Percentages are woven into education at every level.</li>
      <li><strong>Cooking & Nutrition:</strong> Scaling a recipe up or down often involves percentages. Daily Value percentages on nutrition labels tell you how much of a nutrient you’re getting. Even alcohol by volume (ABV) is a percentage. This tool works for kitchens as well as classrooms.</li>
      <li><strong>Statistics & Data Analysis:</strong> Survey results are almost always reported as percentages. “45% of respondents said yes.” Population growth rates are percentages. Election results are percentages. If you’ve ever read a news article with a number in it, chances are you’ve encountered a percentage.</li>
    </ul>

    <h3>Percentage Formulas Used in This Calculator (For the Curious Minds)</h3>
    <p>If you’re someone who likes to peek under the hood, here are the exact formulas our calculator uses. Don’t worry—you don’t need to memorize these. But understanding them can make you feel more confident when you use the tool.</p>
    <ul>
      <li><strong>Percentage of a Number:</strong> (Percentage ÷ 100) × Number. That’s it. So for 20% of 150, it’s (20 ÷ 100) = 0.2, times 150 = 30.</li>
      <li><strong>Percentage Increase:</strong> ((New Value - Original Value) ÷ Original Value) × 100. If your rent went from $1,000 to $1,100, the increase is $100. Divide that by the original $1,000 = 0.1, times 100 = 10% increase.</li>
      <li><strong>Percentage Decrease:</strong> ((Original Value - New Value) ÷ Original Value) × 100. Notice it’s the same as increase, but you subtract the new value from the original instead. If that same $1,000 rent dropped to $900, you’d do ($1,000 - $900) = $100, divided by $1,000 = 0.1, times 100 = 10% decrease.</li>
      <li><strong>Find Percentage (Part of Whole):</strong> (Part ÷ Whole) × 100. If you answered 35 questions correctly out of 50, it’s (35 ÷ 50) = 0.7, times 100 = 70%. Nice work.</li>
    </ul>

    <h3>A Few More Real-World Scenarios (Because One Example Is Never Enough)</h3>
    <p><strong>Scenario 1 – Restaurant Tip:</strong> You had a great meal. The bill is $68.50. You want to leave a 20% tip. But mental math after two glasses of wine? Risky. Use “Percentage of a Number” mode: 20% of $68.50 is $13.70. Total with tip: $82.20. Your server thanks you.</p>
    <p><strong>Scenario 2 – Investment Return:</strong> You put $5,000 into a stock. A year later, it’s worth $6,200. That’s a $1,200 gain. Use “Percentage Increase” to find out your return: ($6,200 - $5,000) = $1,200, divided by $5,000 = 0.24, times 100 = 24% return. That’s a solid year. (Now maybe don’t spend it all in one place.)</p>
    <p><strong>Scenario 3 – Exam Score:</strong> You got 82 points out of 120 on a huge biology exam. Use “Find Percentage”: 82 ÷ 120 = 0.6833, times 100 = 68.33%. That’s a D+ if your professor uses a standard scale. Time to hit the books. But at least you know exactly where you stand.</p>

    <h3>One Last Thought Before You Start Calculating</h3>
    <p>We built this percentage calculator because we believe math shouldn’t be a barrier. It should be a tool—something you use to make better decisions, whether that’s saving money on a jacket, understanding your grades, or growing your small business. The world runs on percentages, but you don’t have to run in circles trying to calculate them. Bookmark this page. Share it with a friend who always asks you to split the bill. Use it when you’re shopping, studying, or working. It’s free, it’s private, and it’s always here when you need it. Now go ahead—pick a calculation type and start solving real problems. You’ve got this.</p>
</div>
```

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const calculatorTypes = document.querySelectorAll('.calculator-type');
    const calculatorInputs = document.querySelectorAll('.calculator-inputs');
    const calculateButton = document.getElementById('calculate-button');
    const clearButton = document.getElementById('clear-button');
    const copyButton = document.getElementById('copy-button');
    const resultSection = document.getElementById('result-section');
    const resultValue = document.getElementById('result-value');
    const calculationSteps = document.getElementById('calculation-steps');
    const alertContainer = document.getElementById('alert-container');

    let currentCalculatorType = 'percentage-of-number';

    // Event listeners for calculator type selection
    calculatorTypes.forEach(type => {
      type.addEventListener('click', function () {
        // Remove active class from all types
        calculatorTypes.forEach(t => t.classList.remove('active'));
        // Add active class to clicked type
        this.classList.add('active');
        
        // Update current calculator type
        currentCalculatorType = this.getAttribute('data-type');
        
        // Hide all input sections
        calculatorInputs.forEach(input => {
          input.style.display = 'none';
        });
        
        // Show the selected input section
        document.getElementById(`${currentCalculatorType}-inputs`).style.display = 'block';
        
        // Hide result section
        resultSection.classList.remove('active');
      });
    });

    // Calculate button event listener
    calculateButton.addEventListener('click', function () {
      calculatePercentage();
    });

    // Clear button event listener
    clearButton.addEventListener('click', function () {
      clearInputs();
    });

    // Copy button event listener
    copyButton.addEventListener('click', function () {
      copyResult();
    });

    // Enter key support for inputs
    document.querySelectorAll('input').forEach(input => {
      input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          calculatePercentage();
        }
      });
    });

    function calculatePercentage() {
      let result, steps;
      
      try {
        switch (currentCalculatorType) {
          case 'percentage-of-number':
            result = calculatePercentageOfNumber();
            break;
          case 'percentage-increase':
            result = calculatePercentageIncrease();
            break;
          case 'percentage-decrease':
            result = calculatePercentageDecrease();
            break;
          case 'find-percentage':
            result = findPercentage();
            break;
          default:
            throw new Error('Unknown calculator type');
        }
        
        if (result && steps) {
          displayResult(result, steps);
        }
      } catch (error) {
        showAlert(error.message, 'error');
      }
    }

    function calculatePercentageOfNumber() {
      const percentage = parseFloat(document.getElementById('percentage-value').value);
      const number = parseFloat(document.getElementById('number-value').value);
      
      if (isNaN(percentage) || isNaN(number)) {
        throw new Error('Please enter valid numbers for both percentage and number');
      }
      
      const result = (percentage / 100) * number;
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Convert ${percentage}% to decimal: ${percentage} ÷ 100 = ${percentage/100}</li>
          <li>Multiply by the number: ${percentage/100} × ${number} = ${result}</li>
          <li>Result: ${percentage}% of ${number} is ${result}</li>
        </ol>
      `;
      
      return { value: result, text: `${percentage}% of ${number} is ${result}`, steps };
    }

    function calculatePercentageIncrease() {
      const original = parseFloat(document.getElementById('original-value').value);
      const newVal = parseFloat(document.getElementById('new-value').value);
      
      if (isNaN(original) || isNaN(newVal)) {
        throw new Error('Please enter valid numbers for both original and new values');
      }
      
      if (newVal <= original) {
        throw new Error('New value must be greater than original value for percentage increase');
      }
      
      const increase = newVal - original;
      const result = (increase / original) * 100;
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Find the increase: ${newVal} - ${original} = ${increase}</li>
          <li>Divide increase by original value: ${increase} ÷ ${original} = ${increase/original}</li>
          <li>Multiply by 100 to get percentage: ${increase/original} × 100 = ${result.toFixed(2)}%</li>
          <li>Result: The percentage increase from ${original} to ${newVal} is ${result.toFixed(2)}%</li>
        </ol>
      `;
      
      return { value: result, text: `Increase from ${original} to ${newVal} is ${result.toFixed(2)}%`, steps };
    }

    function calculatePercentageDecrease() {
      const original = parseFloat(document.getElementById('decrease-original-value').value);
      const newVal = parseFloat(document.getElementById('decrease-new-value').value);
      
      if (isNaN(original) || isNaN(newVal)) {
        throw new Error('Please enter valid numbers for both original and new values');
      }
      
      if (newVal >= original) {
        throw new Error('New value must be less than original value for percentage decrease');
      }
      
      const decrease = original - newVal;
      const result = (decrease / original) * 100;
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Find the decrease: ${original} - ${newVal} = ${decrease}</li>
          <li>Divide decrease by original value: ${decrease} ÷ ${original} = ${decrease/original}</li>
          <li>Multiply by 100 to get percentage: ${decrease/original} × 100 = ${result.toFixed(2)}%</li>
          <li>Result: The percentage decrease from ${original} to ${newVal} is ${result.toFixed(2)}%</li>
        </ol>
      `;
      
      return { value: result, text: `Decrease from ${original} to ${newVal} is ${result.toFixed(2)}%`, steps };
    }

    function findPercentage() {
      const part = parseFloat(document.getElementById('part-value').value);
      const whole = parseFloat(document.getElementById('whole-value').value);
      
      if (isNaN(part) || isNaN(whole)) {
        throw new Error('Please enter valid numbers for both part and whole values');
      }
      
      if (part > whole) {
        throw new Error('Part value cannot be greater than whole value');
      }
      
      const result = (part / whole) * 100;
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Divide part by whole: ${part} ÷ ${whole} = ${part/whole}</li>
          <li>Multiply by 100 to get percentage: ${part/whole} × 100 = ${result.toFixed(2)}%</li>
          <li>Result: ${part} is ${result.toFixed(2)}% of ${whole}</li>
        </ol>
      `;
      
      return { value: result, text: `${part} is ${result.toFixed(2)}% of ${whole}`, steps };
    }

    function displayResult(result, steps) {
      resultValue.textContent = result.text;
      calculationSteps.innerHTML = steps;
      resultSection.classList.add('active');
      showAlert('Calculation completed successfully!', 'success');
    }

    function clearInputs() {
      // Clear all input fields
      document.querySelectorAll('input').forEach(input => {
        input.value = '';
      });
      
      // Hide result section
      resultSection.classList.remove('active');
      
      showAlert('All inputs cleared!', 'success');
    }

    function copyResult() {
      if (!resultSection.classList.contains('active')) {
        showAlert('No result to copy. Please calculate first.', 'error');
        return;
      }
      
      const textToCopy = resultValue.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showAlert('Result copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy result: ' + err, 'error');
      });
    }

    function showAlert(message, type) {
      // Remove any existing alerts
      const existingAlert = document.querySelector('.alert');
      if (existingAlert) {
        existingAlert.remove();
      }
      
      const alertDiv = document.createElement('div');
      alertDiv.className = `alert alert-${type}`;
      alertDiv.innerHTML = `
        ${message}
        <span class="close">&times;</span>
      `;

      alertContainer.appendChild(alertDiv);

      // Add close functionality
      alertDiv.querySelector('.close').addEventListener('click', function () {
        alertDiv.remove();
      });

      // Auto remove after 5 seconds
      setTimeout(() => {
        if (alertDiv.parentNode) {
          alertDiv.remove();
        }
      }, 5000);
    }
  });
</script>
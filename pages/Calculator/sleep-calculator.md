---
layout: default
title: "Sleep Calculator - Find Your Perfect Bedtime"
permalink: /sleep-calculator-find-your-perfect-bedtime/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sleep Calculator - Find Your Perfect Bedtime</title>
<meta name="description"
  content="Free online sleep calculator tool. Calculate your ideal bedtime or wake-up time based on sleep cycles for better rest and productivity.">
<meta name="keywords"
  content="sleep calculator, bedtime calculator, sleep cycles, wake up time, sleep schedule, sleep optimization, sleep health">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Sleep Calculator Styles */
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

  .time-selector {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    align-items: center;
    justify-content: center;
    margin: 25px 0;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  }

  .time-selector select {
    padding: 12px 15px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    background: white;
    transition: border-color 0.3s;
  }

  .time-selector select:focus {
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
    margin-bottom: 15px;
    font-size: 1.3rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
  }

  .result-item {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    margin: 10px 0;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
    transition: all 0.3s ease;
  }

  .result-item:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .result-item .icon {
    margin-right: 15px;
    font-size: 1.5rem;
  }

  .result-item .time {
    font-weight: bold;
    font-size: 1.2rem;
    color: #2c3e50;
  }

  .result-item .cycles {
    margin-left: auto;
    color: #7f8c8d;
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

    .time-selector {
      flex-direction: column;
      align-items: stretch;
    }

    .time-selector select {
      width: 100%;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Sleep Calculator</h1>
  <p class="welcome-message">Calculate your ideal bedtime or wake-up time based on sleep cycles for better rest and productivity. Wake up feeling refreshed!</p>

  <div class="converter-section">
    <h2>Sleep Calculator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Current Time: </span>
        <span id="currentTime">Loading...</span>
      </div>
      <div class="counter-item">
        <span>Sleep Cycles: </span>
        <span id="cycleCount">6</span>
      </div>
      <div class="counter-item">
        <span>Cycle Duration: </span>
        <span id="cycleDuration">90 minutes</span>
      </div>
      <div class="counter-item">
        <span>Total Sleep Range: </span>
        <span id="sleepRange">7.5 - 9 hours</span>
      </div>
    </div>

    <div class="time-selector">
      <h3>What time do you want to wake up?</h3>
      
      <!-- Hour -->
      <select id="hour">
        <script>
          for (let i = 1; i <= 12; i++) {
            document.write(`<option value="${i}">${i}</option>`);
          }
        </script>
      </select>

      <!-- Minute -->
      <select id="minute">
        <script>
          for (let i = 0; i < 60; i++) {
            let m = i < 10 ? "0" + i : i;
            document.write(`<option value="${m}">${m}</option>`);
          }
        </script>
      </select>

      <!-- AM/PM -->
      <select id="ampm">
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>

    <div class="button-section">
      <button class="case-button" id="calculateBedtime">Calculate Bedtime</button>
      <button class="case-button success" id="calculateWakeup">Calculate Wake-Up Time</button>
      <button class="case-button secondary" id="resetCalculator">Reset</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="result-section">
      <h3>Sleep Schedule Recommendations</h3>
      <div id="result"></div>
    </div>

   {% include share-and-donation.html %}

    <div class="examples">
      <h2>How Sleep Cycles Work</h2>

      <h3>Understanding Sleep Cycles:</h3>
      <div class="example-text">A complete sleep cycle lasts about 90 minutes and includes both REM (rapid eye movement) and non-REM sleep stages. Waking up at the end of a sleep cycle (after 6, 7.5, or 9 hours) helps you feel more refreshed than waking up in the middle of a cycle.</div>

      <h3>Recommended Sleep Durations:</h3>
      <div class="example-text">• 6 hours = 4 sleep cycles
• 7.5 hours = 5 sleep cycles
• 9 hours = 6 sleep cycles

Most adults need 7-9 hours of sleep per night, which equals 5-6 complete sleep cycles.</div>

      <h3>Tips for Better Sleep:</h3>
      <div class="example-text">• Maintain a consistent sleep schedule
• Avoid screens 1 hour before bedtime
• Create a relaxing bedtime routine
• Keep your bedroom cool, dark, and quiet
• Avoid caffeine and heavy meals before bed</div>
    </div>
  </div>

  <!-- SEO Content Section -->
<div class="content-placeholder">
    <h2>Free Online Sleep Calculator Tool</h2>

    <p>Let me ask you something—have you ever woken up after a full eight hours of sleep and still felt like you got hit by a truck? Or maybe you've had nights where you only slept for five or six hours but bounced out of bed feeling like a million bucks. If that sounds familiar, you're not crazy, and you're definitely not alone. The secret isn't just about how <em>long</em> you sleep—it's about <em>when</em> you wake up. Our free <strong>Sleep Calculator tool</strong> is built around that exact idea. Instead of guessing your bedtime or setting a random alarm, this tool helps you plan your sleep around your body's natural 90-minute sleep cycles. Wake up at the end of a cycle, and you feel refreshed. Wake up in the middle of deep sleep, and you feel like a zombie. It's that simple—and that powerful. No downloads, no accounts, no creepy data collection. Just a clean, private tool that helps you take control of your sleep. And honestly? Better sleep changes everything—your mood, your focus, your patience, even your immune system. Let's get you sleeping smarter, not just longer.</p>

    <h3>How to Use This Sleep Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Choose Calculation Type:</strong> The tool gives you two options, because life has two common sleep problems. Option one: "I need to wake up at a specific time—when should I go to bed?" Pick this if you have a fixed wake-up time (like for work, school, or a flight). Option two: "I'm going to sleep now—when should I set my alarm?" Pick this if you're getting ready for bed and want to know the best wake-up times from this moment.</li>
      <li><strong>Set Your Time:</strong> Depending on what you chose, you'll either pick your desired wake-up time (using a simple time selector) or see your current time automatically filled in. Don't overthink this—just pick the time that matters to you. The calculator does the heavy lifting.</li>
      <li><strong>Calculate:</strong> Hit the button that matches your choice. In less than a second, you'll get a list of optimal bedtimes or wake-up times. Each one is based on completing full 90-minute sleep cycles, plus the roughly 15 minutes it usually takes to actually fall asleep.</li>
      <li><strong>Follow Recommendations:</strong> You'll see multiple options—usually for different numbers of sleep cycles (4 cycles = 6 hours, 5 cycles = 7.5 hours, 6 cycles = 9 hours, etc.). Pick the one that fits your schedule. If you have an early morning, go with the earlier bedtime. If you're a night owl, maybe the shorter cycle works better. The key is to <em>try</em> to wake up exactly when the calculator suggests. That's how you avoid the dreaded middle-of-deep-sleep wake-up.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Let me paint a picture that might feel painfully familiar. Meet Sarah. She's a marketing manager who has to be at her desk by 8:30 AM. To make it on time, she needs to wake up at 7:00 AM sharp. For months, she's been going to bed around 11:00 PM, getting about eight hours of sleep—or so she thought. But almost every morning, her alarm rips her out of a deep, vivid dream, and she spends the first hour of her day in a fog, chugging coffee, snapping at her family, and staring blankly at her email inbox. The problem isn't the amount of sleep. It's the timing.</p>
    <p>Here's what happens when Sarah uses our sleep calculator. She selects "calculate bedtime," enters 7:00 AM as her wake-up time, and clicks the button. The calculator instantly shows her three optimal bedtimes: 10:00 PM (which gives her 6 cycles / 9 hours of sleep), 11:30 PM (5 cycles / 7.5 hours), and 1:00 AM (4 cycles / 6 hours). Wait—1:00 AM? That's later than her usual bedtime, with less total sleep, but it still promises a refreshed wake-up? Yes, because it aligns with the end of a sleep cycle. Sarah decides to try the 11:30 PM bedtime. She goes to bed at 11:30, falls asleep around 11:45, and wakes up at 7:00 AM feeling… weirdly awake. No fog. No grogginess. Just clear-headed and ready. Within a week, she's cut her coffee intake in half and stopped hitting snooze. That's not magic. That's sleep cycle math.</p>
    <p><strong>Another example:</strong> It's 10:00 PM, you're lying in bed scrolling on your phone, and you realize you need to be up at 6:00 AM tomorrow for an early meeting. Instead of panicking, you open this tool, select "I'm going to sleep now," and see your optimal alarm times. The calculator might suggest waking up at 5:15 AM (for 6 full cycles? no, that's too long from now), 6:45 AM (too late), or—wait, it shows 5:15 AM, 6:45 AM, and 4:00 AM if you want fewer cycles. You pick the one that fits your morning. Now you have a plan. No more lying there doing anxious math about how many hours of sleep you'll get. Just a clear, science-backed target.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Working Professionals:</strong> You know that feeling when you drag yourself into the office and it takes two hours to actually function? That's sleep inertia—and it's avoidable. Use the sleep calculator to plan your bedtime around your morning alarm. You'll be surprised how much better you feel in that 9 AM meeting.</li>
      <li><strong>Students:</strong> Between late-night study sessions and early classes, students have some of the worst sleep schedules. This tool helps you minimize the damage. If you have to stay up until midnight, at least you can plan a wake-up time that won't leave you brain-dead during your exam.</li>
      <li><strong>Parents (Yes, You Exhausted Humans):</strong> I see you. You're running on broken sleep and coffee fumes. While a sleep calculator won't fix a crying baby, it can help you plan your own sleep around the windows you actually get. If you know the baby usually wakes at 2 AM and 5 AM, you can time your sleep cycles in between. Every little bit helps.</li>
      <li><strong>Shift Workers:</strong> Your schedule is already a mess. Night shifts, rotating shifts, early mornings—it's brutal. Use this tool to adapt your sleep timing to whatever shift you're working. It won't make shift work easy, but it can make it slightly more bearable.</li>
      <li><strong>Frequent Travelers:</strong> Jet lag is basically your sleep cycles getting wrecked by a time zone change. Use the sleep calculator to help you adjust to the new destination. Time your first few nights' sleep according to local time and your cycles. It's not a cure, but it's a helpful tool in the fight.</li>
      <li><strong>Anyone Who Wakes Up Tired for No Reason:</strong> You get 7-8 hours. You don't have sleep apnea (that you know of). You don't drink caffeine after noon. So why do you still feel like garbage in the morning? The answer might be as simple as waking up at the wrong point in your sleep cycle. Give the calculator a try for a week. You might be shocked.</li>
    </ul>

    <h3>Frequently Asked Questions (Real Answers, Not Robot Speak):</h3>
    <p><strong>How does the sleep calculator actually work?</strong><br>
      At the heart of it, this calculator uses the science of sleep cycles. A complete cycle—from light sleep to deep sleep to REM (dreaming) and back up to light sleep—takes about 90 minutes on average. When you wake up naturally during light sleep (at the end of a cycle), you feel rested. When an alarm jolts you out of deep sleep or REM, you feel terrible. The calculator works backwards from your desired wake-up time, subtracting full 90-minute cycles (plus a 15-minute buffer for falling asleep) to suggest bedtimes. Or it works forwards from your bedtime to suggest optimal alarm times. It's not guessing. It's just math based on decades of sleep research.</p>

    <p><strong>What if I don't fall asleep immediately?</strong><br>
      Great question, because almost no one falls asleep the second their head hits the pillow. The calculator builds in about 15 minutes of "falling asleep time." That's the average for most people. But if you know you take 30 minutes or even an hour to drift off, you should adjust accordingly. For example, if the calculator suggests a bedtime of 11:30 PM and you usually take 30 minutes to fall asleep, go to bed at 11:00 PM instead. The goal is to <em>actually be asleep</em> at the start of your first cycle. Listen to your own body—the calculator is a starting point, not a dictator.</p>

    <p><strong>Are sleep cycles really the same for everyone?</strong><br>
      Short answer: no. Long answer: 90 minutes is the average, but individual cycles can range anywhere from 80 to 110 minutes. Some people naturally have shorter cycles, some have longer. That means the calculator's suggestions might not be perfect for you on the very first try. Use it as a baseline, then experiment. If the suggested bedtime leaves you feeling groggy, try shifting it by 15-20 minutes earlier or later. Keep notes for a week. You'll find your personal sweet spot. The important thing is the concept—waking at the end of a cycle—even if your exact cycle length is a bit different.</p>

    <p><strong>Can I use this tool on my mobile phone?</strong><br>
      Absolutely. And honestly, that's where it's most useful—right next to your bed. The tool is fully responsive, so it looks good on a small screen. The time pickers work fine on touch. You can bookmark it on your phone's home screen like a mini-app. No app store needed, no permissions requested. Just open, use, and close.</p>

    <p><strong>Do I need to create an account or pay to use this?</strong><br>
      No. Never. Let me say it louder for the people in the back: THIS IS COMPLETELY FREE. No sign-up, no email capture, no "free trial" that asks for your credit card later. No premium tier that unlocks "advanced features" (there are no advanced features—it's a sleep calculator, not a spaceship). Just a tool that works, forever, for zero rupees or dollars. If you want to buy me a coffee someday, great, but you don't have to.</p>
      
    <p><strong>Does this work for naps too?</strong><br>
      Yes! The same principle applies. A full sleep cycle is 90 minutes, but for naps, you often don't want a full cycle. Power naps of 20 minutes (before deep sleep kicks in) or 90 minutes (a full cycle) both work well. Avoid waking up in the middle of deep sleep during a nap—that's how you get that weird, disoriented, "what year is it?" feeling. If you're using the calculator for a nap, just treat it as a short sleep session and aim for the 90-minute mark if you have time.</p>

    <h3>Why Choose Our Sleep Calculator?</h3>
    <p>Look, there's no shortage of sleep tools out there. There are expensive wearables, subscription apps, and even smart alarms that try to guess your sleep stage. And some of them work! But a lot of them also cost money, drain your phone battery, or collect your personal sleep data to sell to who-knows-who. Our <strong>online sleep calculator</strong> does one simple thing really well: it tells you when to sleep or wake up based on 90-minute cycles. No fluff, no marketing nonsense, no data harvesting. All calculations happen locally in your browser—your sleep schedule never touches our server. That means you can use it without worrying about privacy. Plus, once the page loads, it works offline. No internet? No problem. That's especially useful if you're traveling, camping, or just have spotty Wi-Fi. It's simple, it's private, and it's based on real sleep science. What more do you need?</p>

    <h3>The Science Behind Sleep Cycles (For the Curious Ones):</h3>
    <p>Sleep isn't just one long, flat state. It's actually a beautifully organized series of repeating cycles, each lasting about 90 minutes in adults. Here's what happens inside each cycle:</p>
    <ul>
      <li><strong>Stage 1 (N1) – Light Sleep:</strong> This is the "dozing off" stage. You can be easily woken up. Your muscles relax, your heartbeat slows, and your eye movements stop. It only lasts about 5-10 minutes per cycle. If you wake up during this stage, you'll feel fine—a little sleepy maybe, but not disoriented.</li>
      <li><strong>Stage 2 (N2) – Slightly Deeper:</strong> Your body temperature drops. Your heart rate slows even more. Your brain starts producing sleep spindles (little bursts of activity) that help protect your sleep from outside noise. This stage takes up about 45-55% of your total sleep time. Waking up here isn't terrible, but you might feel a bit foggy.</li>
      <li><strong>Stage 3 (N3) – Deep Sleep (Slow Wave):</strong> This is the big one. Deep sleep is when your body repairs itself—muscles grow, tissues regenerate, your immune system strengthens. It's very hard to wake someone from deep sleep. And if you do wake them (or an alarm does), they'll be extremely groggy, confused, and irritable. That's sleep inertia. This is what you want to avoid.</li>
      <li><strong>REM Sleep (Rapid Eye Movement):</strong> This is when most dreaming happens. Your brain is almost as active as when you're awake, but your body is paralyzed (to stop you from acting out dreams). REM sleep is crucial for memory consolidation and emotional regulation. Waking during REM is better than deep sleep but still often leaves you feeling disoriented or like you're mid-dream.</li>
    </ul>
    <p>Here's the key insight: these stages repeat in a predictable order. If you wake up naturally at the end of a cycle—during light Stage 1 or early Stage 2—you'll feel refreshed. If you're jolted out of Stage 3 (deep sleep) or REM sleep, you'll feel terrible. Our calculator's whole job is to help you schedule your alarm for the end of a cycle. It's not magic. It's just respecting the way your brain is built.</p>

    <h3>A Few More Tips to Actually Improve Your Sleep (Because the Calculator Is Just One Piece):</h3>
    <p>The sleep calculator is a powerful tool, but it works best when combined with basic sleep hygiene. Here are a few things that make a real difference:</p>
    <ul>
      <li><strong>Stick to a consistent schedule.</strong> Even on weekends. Your body craves routine. Going to bed and waking up at the same times (calculator-optimized, ideally) trains your internal clock.</li>
      <li><strong>Get morning sunlight.</strong> Bright light in the morning tells your brain "it's daytime, stop producing melatonin." This helps you feel alert in the morning and sleepy at night.</li>
      <li><strong>Stop caffeine by 2 PM.</strong> Caffeine has a half-life of about 5-6 hours. That afternoon coffee can still be messing with your sleep at 10 PM.</li>
      <li><strong>Dim the lights an hour before bed.</strong> Blue light from screens suppresses melatonin. Use night mode on your phone, better yet, put the phone down entirely.</li>
      <li><strong>Make your bedroom cool, dark, and quiet.</strong> Around 18-20°C (65-68°F) is ideal for most people. Blackout curtains and white noise machines help.</li>
    </ul>
    <p>The calculator gives you the <em>when</em>. These habits give you the <em>how</em>. Together, they'll change your mornings.</p>

    <h3>One Last Story (Because Stories Stick)</h3>
    <p>A few years ago, I was that person who woke up tired every single day. I thought I just wasn't a "morning person." I thought I needed 10 hours of sleep. I blamed my alarm clock, my mattress, my neighbors, everything. Then I learned about sleep cycles. I started using a sleep calculator (honestly, a much uglier version than this one) and within a week, I was waking up at 6:00 AM without wanting to throw my phone across the room. My wife noticed. My boss noticed. I stopped needing an energy drink at 3 PM. It wasn't a miracle cure for all of life's problems—but it was a small change that made a huge difference. That's what I want for you. Not perfection. Just better mornings. Give the tool a try tonight. What do you have to lose? (Besides that groggy, awful feeling you've gotten used to.) Sleep well, my friend.</p>
</div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const hourSelect = document.getElementById('hour');
    const minuteSelect = document.getElementById('minute');
    const ampmSelect = document.getElementById('ampm');
    const calculateBedtimeBtn = document.getElementById('calculateBedtime');
    const calculateWakeupBtn = document.getElementById('calculateWakeup');
    const resetBtn = document.getElementById('resetCalculator');
    const resultDiv = document.getElementById('result');
    const alertContainer = document.getElementById('alertContainer');
    const currentTimeSpan = document.getElementById('currentTime');

    // Update current time
    function updateCurrentTime() {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      
      hours = hours % 12 || 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      
      currentTimeSpan.textContent = `${hours}:${minutes} ${ampm}`;
    }
    
    // Update time every minute
    updateCurrentTime();
    setInterval(updateCurrentTime, 60000);

    // Set default wake-up time to 7:00 AM
    hourSelect.value = '7';
    minuteSelect.value = '00';
    ampmSelect.value = 'AM';

    // Event listeners
    calculateBedtimeBtn.addEventListener('click', calculateBedtime);
    calculateWakeupBtn.addEventListener('click', calculateWakeup);
    resetBtn.addEventListener('click', resetCalculator);

    function timeToMinutes(h, m, ap) {
      h = parseInt(h);
      m = parseInt(m);
      if (ap === "PM" && h !== 12) h += 12;
      if (ap === "AM" && h === 12) h = 0;
      return h * 60 + m;
    }

    function minutesToTime(minute) {
      minute = (minute + 1440) % 1440;
      let h = Math.floor(minute / 60);
      let m = minute % 60;
      let ap = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      if (m < 10) m = "0" + m;
      return `${h}:${m} ${ap}`;
    }

    function calculateBedtime() {
      let h = hourSelect.value;
      let m = minuteSelect.value;
      let ap = ampmSelect.value;

      let wakeMinutes = timeToMinutes(h, m, ap);
      let cycles = [90, 180, 270, 360, 450, 540]; // 1-6 sleep cycles

      let result = "";
      cycles.forEach((c, index) => {
        const cycleCount = index + 1;
        const sleepHours = (c / 60).toFixed(1);
        result += `
          <div class="result-item">
            <div class="icon">🛏️</div>
            <div class="time">${minutesToTime(wakeMinutes - c)}</div>
            <div class="cycles">${cycleCount} cycle${cycleCount > 1 ? 's' : ''} (${sleepHours} hours)</div>
          </div>
        `;
      });
      
      resultDiv.innerHTML = `
        <h3>You should fall asleep at one of these times:</h3>
        <p>To wake up at ${h}:${m} ${ap}, aim to fall asleep at one of these times to complete full sleep cycles:</p>
        ${result}
      `;
      
      showAlert('Bedtime calculated successfully!', 'success');
    }

    function calculateWakeup() {
      let now = new Date();
      let nowMinutes = now.getHours() * 60 + now.getMinutes();
      let cycles = [90, 180, 270, 360, 450, 540];

      let result = "";
      cycles.forEach((c, index) => {
        const cycleCount = index + 1;
        const sleepHours = (c / 60).toFixed(1);
        result += `
          <div class="result-item">
            <div class="icon">⏰</div>
            <div class="time">${minutesToTime(nowMinutes + c)}</div>
            <div class="cycles">${cycleCount} cycle${cycleCount > 1 ? 's' : ''} (${sleepHours} hours)</div>
          </div>
        `;
      });
      
      resultDiv.innerHTML = `
        <h3>If you go to sleep now, wake up at one of these times:</h3>
        <p>Based on the current time (${currentTimeSpan.textContent}), here are optimal wake-up times:</p>
        ${result}
      `;
      
      showAlert('Wake-up times calculated successfully!', 'success');
    }

    function resetCalculator() {
      hourSelect.value = '7';
      minuteSelect.value = '00';
      ampmSelect.value = 'AM';
      resultDiv.innerHTML = '';
      showAlert('Calculator reset!', 'success');
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
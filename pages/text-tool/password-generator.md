---
layout: default
title: "Free Random Strong Password Generator Online"
permalink: /free-random-strong-password-generator-online/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Random Strong Password Generator Online</title>
<meta name="description"
  content="Generate secure, random, and strong passwords instantly. Use this free password generator to protect your online accounts with unique passwords.">
<meta name="keywords"
  content="password generator, strong password, secure password, random password, password creator, online security, password strength, password tool">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Password Generator Styles */
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
    min-height: 120px;
    resize: vertical;
    font-family: 'Courier New', monospace;
    transition: border-color 0.3s;
  }

  .input-section textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .password-display {
    position: relative;
    margin: 20px 0;
  }

  .password-field {
    width: 100%;
    padding: 18px 50px 18px 18px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 18px;
    font-family: 'Courier New', monospace;
    background: white;
    transition: border-color 0.3s;
  }

  .password-field:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .copy-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--primary);
    font-size: 1.2rem;
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .copy-password:hover {
    background: rgba(52, 152, 219, 0.1);
    transform: translateY(-50%) scale(1.1);
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

  .options-section {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
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

  /* Password strength indicator */
  .strength-meter {
    margin: 15px 0;
  }

  .strength-bar {
    height: 10px;
    border-radius: 5px;
    background: #e0e0e0;
    margin-bottom: 5px;
    overflow: hidden;
  }

  .strength-fill {
    height: 100%;
    width: 0%;
    transition: all 0.3s ease;
    border-radius: 5px;
  }

  .strength-text {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }

  .strength-weak {
    background: #e74c3c;
    width: 25%;
  }

  .strength-fair {
    background: #f39c12;
    width: 50%;
  }

  .strength-good {
    background: #3498db;
    width: 75%;
  }

  .strength-strong {
    background: #2ecc71;
    width: 100%;
  }

  /* Password generator specific styles */
  .generator-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .option-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .option-label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .option-select, .option-input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
  }

  .option-input {
    width: 80px;
  }

  .option-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .option-checkbox input {
    width: 18px;
    height: 18px;
  }

  .password-history {
    margin-top: 20px;
  }

  .history-list {
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    padding: 10px;
    background: white;
  }

  .history-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid #f0f0f0;
    font-family: 'Courier New', monospace;
  }

  .history-item:last-child {
    border-bottom: none;
  }

  .history-copy {
    background: none;
    border: none;
    color: var(--primary);
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .history-copy:hover {
    background: rgba(52, 152, 219, 0.1);
  }

  /* Modal styles */
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.3s;
  }

  .modal-content {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 30px;
    border-radius: 12px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    animation: slideIn 0.3s;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
  }

  .modal-title {
    font-size: 1.5rem;
    color: var(--primary);
    margin: 0;
  }

  .close-modal {
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s;
  }

  .close-modal:hover {
    color: #000;
  }

  .modal-body {
    margin-bottom: 20px;
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  .modal-button {
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
  }

  .modal-button.primary {
    background: var(--primary);
    color: white;
  }

  .modal-button.secondary {
    background: #6c757d;
    color: white;
  }

  .modal-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideIn {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
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

    .modal-content {
      margin: 20% auto;
      width: 95%;
      padding: 20px;
    }

    .generator-options {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Random Strong Password Generator</h1>
  <p class="welcome-message">Create secure, random passwords with custom length and character types. Enhance your online security with unique, strong passwords for all your accounts.</p>

  <div class="converter-section">
    <h2>Password Generator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Password Length: </span>
        <span id="lengthCount">12</span>
      </div>
      <div class="counter-item">
        <span>Character Types: </span>
        <span id="typeCount">4</span>
      </div>
      <div class="counter-item">
        <span>Possible Combinations: </span>
        <span id="combinationCount">Trillions</span>
      </div>
      <div class="counter-item">
        <span>Strength: </span>
        <span id="strengthCount">Strong</span>
      </div>
    </div>

    <div class="password-display">
      <input type="text" id="passwordOutput" class="password-field" readonly placeholder="Your generated password will appear here">
      <button class="copy-password" id="copyPasswordBtn" title="Copy password">
        <i class="far fa-copy"></i>
      </button>
    </div>

    <div class="strength-meter">
      <div class="strength-bar">
        <div class="strength-fill" id="strengthFill"></div>
      </div>
      <div class="strength-text" id="strengthText">Password strength will appear here</div>
    </div>

    <div class="generator-options">
      <div class="option-group">
        <label class="option-label">Password Length</label>
        <input type="range" id="passwordLength" min="8" max="50" value="12" class="option-input">
        <div style="display: flex; justify-content: space-between;">
          <span>8</span>
          <span id="lengthValue">12</span>
          <span>50</span>
        </div>
      </div>
      
      <div class="option-group">
        <label class="option-label">Character Types</label>
        <div class="option-checkbox">
          <input type="checkbox" id="includeUppercase" checked>
          <label for="includeUppercase">Uppercase Letters (A-Z)</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="includeLowercase" checked>
          <label for="includeLowercase">Lowercase Letters (a-z)</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="includeNumbers" checked>
          <label for="includeNumbers">Numbers (0-9)</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="includeSymbols" checked>
          <label for="includeSymbols">Symbols (!@#$%^&*)</label>
        </div>
      </div>
      
      <div class="option-group">
        <label class="option-label">Additional Options</label>
        <div class="option-checkbox">
          <input type="checkbox" id="excludeSimilar" checked>
          <label for="excludeSimilar">Exclude Similar Characters (i, l, 1, L, o, 0, O)</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="excludeAmbiguous">
          <label for="excludeAmbiguous">Exclude Ambiguous Characters ({ } [ ] ( ) / \ ' " ` ~ , ; : . < >)</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="generate">Generate Password</button>
        <button class="case-button success" data-action="generateMultiple">Generate Multiple</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button warning" data-action="strengthTest">Test Strength</button>
        <button class="case-button secondary" data-action="clear">Clear History</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="password-history">
      <h3>Password History</h3>
      <div class="history-list" id="passwordHistory">
        <!-- Password history will be populated here -->
      </div>
    </div>

   {% include share-and-donation.html %}

    <div class="examples">
      <h2>Password Examples</h2>

      <h3>Weak Passwords (Avoid These):</h3>
      <div class="example-text">password
12345678
qwerty123
letmein
admin123</div>

      <h3>Strong Passwords (Recommended):</h3>
      <div class="example-text">G7#mKp9$vRn2
bL8@xQ3!fTq*
jP5&hW2^dMs9
kR6$nZ8#vXp1
tY4%cB7*mLq0</div>

      <h3>Passphrases (Easy to Remember):</h3>
      <div class="example-text">Correct-Horse-Battery-Staple-42
Purple-Elephant-Dances-Under-Moon-7
Sunny-Rainbow-Jumps-Over-Cloud-9</div>
    </div>
  </div>


<!-- SEO Content Section -->
<div class="content-placeholder">
  <h2>Free Online Strong Password Generator</h2>

  <p>In today's digital world, having a strong password is one of the most important steps you can take to protect your personal information. From email accounts and online banking to social media profiles and business platforms, almost every online service requires a password. Unfortunately, many people still use weak passwords that can be guessed or cracked within seconds. Our free <strong>Strong Password Generator</strong> helps solve this problem by creating highly secure and completely random passwords that are difficult for hackers, automated bots, and cybercriminals to predict.</p>

  <p>Whether you're creating a new account, updating an old password, or managing multiple online profiles, this tool makes the process simple. You can instantly generate passwords that include uppercase letters, lowercase letters, numbers, and special symbols. Best of all, everything happens directly inside your browser, meaning your generated passwords remain private and are never stored on any server.</p>

  <h3>How to Use This Password Generator (Step-by-Step):</h3>

  <ul>
    <li><strong>Choose Password Length:</strong> Select how long you want your password to be. Longer passwords generally provide better security and are harder to crack.</li>

    <li><strong>Select Character Types:</strong> Decide whether you want to include uppercase letters, lowercase letters, numbers, symbols, or a combination of all available character sets.</li>

    <li><strong>Adjust Additional Settings:</strong> If desired, exclude confusing characters such as O and 0 or l and I to improve readability.</li>

    <li><strong>Generate Instantly:</strong> Click the generate button and the tool will create a completely random password within seconds.</li>

    <li><strong>Copy and Use:</strong> Copy the generated password and use it immediately for your account, application, website, or secure login system.</li>
  </ul>

  <h3>Why Strong Passwords Matter More Than Ever</h3>

  <p>Cybersecurity threats continue to grow every year. Hackers use advanced software capable of testing millions of password combinations in a short amount of time. Weak passwords such as "password123", "admin", "123456", or birthdays can often be cracked almost instantly.</p>

  <p>A strong password acts as the first line of defense against unauthorized access. Even if attackers obtain your email address or username, a properly generated password makes it significantly harder for them to gain access to your account.</p>

  <p>For example, a simple six-character password containing only lowercase letters may be vulnerable to brute-force attacks. In contrast, a sixteen-character password containing a mix of letters, numbers, and symbols can take an extraordinarily long time to crack using current technology.</p>

  <h3>Real-Life Example & Use Case</h3>

  <p>Imagine you're opening a new online banking account. The bank recommends a password containing at least 14 characters with uppercase letters, lowercase letters, numbers, and symbols. Instead of trying to invent a password yourself, you can use this tool to instantly create something like:</p>

  <p><code>R#7pLm2!Qx9@Tv4K</code></p>

  <p>This password contains multiple character types, follows modern security recommendations, and is difficult for both humans and automated programs to guess. Within seconds, you have a password that provides significantly stronger protection than a typical user-created password.</p>

  <h3>Benefits & Who Should Use This Tool?</h3>

  <ul>
    <li><strong>Everyday Internet Users:</strong> Create safer passwords for email accounts, social media platforms, streaming services, and shopping websites.</li>

    <li><strong>Business Professionals:</strong> Protect corporate accounts, cloud services, communication platforms, and confidential business data.</li>

    <li><strong>Students:</strong> Secure educational portals, online learning platforms, and university accounts.</li>

    <li><strong>Developers:</strong> Generate credentials for databases, testing environments, APIs, and administrative systems.</li>

    <li><strong>IT Administrators:</strong> Create secure temporary passwords for employees and system users.</li>

    <li><strong>Remote Workers:</strong> Protect work-related accounts accessed from different devices and locations.</li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p><strong>What makes a password strong?</strong><br>
  A strong password is long, random, and contains a mixture of character types. It should avoid predictable words, names, birthdays, and common patterns.</p>

  <p><strong>How long should my password be?</strong><br>
  Security experts generally recommend at least 12 characters. For sensitive accounts such as banking, financial services, or business systems, 16 characters or more is even better.</p>

  <p><strong>Can hackers guess randomly generated passwords?</strong><br>
  Randomly generated passwords are significantly harder to guess because they don't follow predictable patterns. The longer and more complex the password, the more secure it becomes.</p>

  <p><strong>Is this password generator safe to use?</strong><br>
  Yes. Passwords are generated locally in your browser. Nothing is transmitted to external servers, helping ensure privacy and security.</p>

  <p><strong>Can I use generated passwords on mobile devices?</strong><br>
  Absolutely. The tool works smoothly on smartphones, tablets, laptops, and desktop computers.</p>

  <p><strong>Do I need to register?</strong><br>
  No. The tool is completely free and does not require account creation, subscriptions, or downloads.</p>

  <h3>Why Choose Our Strong Password Generator?</h3>

  <p>Many online password generators provide only basic functionality. Our tool focuses on security, usability, and privacy. You have full control over password length and character selection while enjoying fast generation speeds and a clean interface.</p>

  <p>Because all processing occurs directly within your browser, your generated passwords remain under your control. No account creation is necessary, and there are no hidden restrictions or premium requirements.</p>

  <p>Whether you need a single password or dozens of unique passwords for multiple accounts, this tool delivers reliable results instantly.</p>

  <h3>Password Security Best Practices</h3>

  <p>Creating a strong password is only the first step. Following good security habits is equally important.</p>

  <ul>
    <li><strong>Use Unique Passwords:</strong> Every account should have its own password. Reusing passwords increases risk.</li>

    <li><strong>Enable Two-Factor Authentication:</strong> Whenever possible, activate an additional verification method.</li>

    <li><strong>Store Passwords Securely:</strong> Consider using a reputable password manager to organize your credentials.</li>

    <li><strong>Avoid Sharing Passwords:</strong> Never send passwords through unsecured messages or emails.</li>

    <li><strong>Update Critical Passwords:</strong> Regularly change passwords for banking, work, and important personal accounts.</li>

    <li><strong>Monitor Account Activity:</strong> Watch for suspicious login attempts and unusual account behavior.</li>
  </ul>

  <h3>Common Threats That Weak Passwords Cannot Stop</h3>

  <p>Weak passwords expose users to numerous cybersecurity risks. Attackers frequently use automated software to test millions of common password combinations against popular websites. This technique, known as a brute-force attack, is especially effective against short and predictable passwords.</p>

  <p>Credential stuffing is another major threat. If one website suffers a data breach, criminals may attempt to use the same username and password combination across many other services. This is why using unique passwords for every account is essential.</p>

  <p>Phishing attacks, malware infections, and social engineering tactics also become more dangerous when accounts are protected by weak passwords. Strong, randomly generated passwords provide an important layer of defense against these threats.</p>

  <h3>Final Thoughts</h3>

  <p>Online security starts with strong passwords. A few seconds spent generating a secure password today can prevent serious problems in the future, including account theft, financial loss, identity fraud, and unauthorized access to sensitive information.</p>

  <p>Our free <strong>Strong Password Generator</strong> gives you a quick, reliable, and privacy-focused way to create secure passwords whenever you need them. Whether you're protecting a personal account or an entire business system, generating strong passwords should always be part of your cybersecurity strategy.</p>
</div>


<!-- Multiple Passwords Modal -->
<div id="multipleModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Generate Multiple Passwords</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div class="option-group">
        <label class="option-label">Number of Passwords</label>
        <input type="number" id="passwordCount" class="option-input" min="2" max="20" value="5">
      </div>
      <div id="multiplePasswords" style="margin-top: 20px; max-height: 300px; overflow-y: auto;">
        <!-- Multiple passwords will be displayed here -->
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelMultiple">Cancel</button>
      <button class="modal-button primary" id="generateMultiple">Generate</button>
      <button class="modal-button success" id="copyAllPasswords">Copy All</button>
    </div>
  </div>
</div>

<!-- Strength Test Modal -->
<div id="strengthModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Password Strength Test</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div class="input-section">
        <textarea id="testPassword" rows="3" placeholder="Enter a password to test its strength..."></textarea>
      </div>
      <div class="strength-meter">
        <div class="strength-bar">
          <div class="strength-fill" id="testStrengthFill"></div>
        </div>
        <div class="strength-text" id="testStrengthText">Enter a password to test</div>
      </div>
      <div id="strengthDetails" style="margin-top: 15px; font-size: 14px;">
        <!-- Strength details will appear here -->
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeStrengthTest">Close</button>
      <button class="modal-button primary" id="testPasswordBtn">Test Password</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const passwordOutput = document.getElementById('passwordOutput');
    const copyPasswordBtn = document.getElementById('copyPasswordBtn');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    
    // Password options
    const passwordLength = document.getElementById('passwordLength');
    const lengthValue = document.getElementById('lengthValue');
    const includeUppercase = document.getElementById('includeUppercase');
    const includeLowercase = document.getElementById('includeLowercase');
    const includeNumbers = document.getElementById('includeNumbers');
    const includeSymbols = document.getElementById('includeSymbols');
    const excludeSimilar = document.getElementById('excludeSimilar');
    const excludeAmbiguous = document.getElementById('excludeAmbiguous');
    
    // Strength meter
    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');
    
    // Password history
    const passwordHistory = document.getElementById('passwordHistory');
    
    // Modal elements
    const multipleModal = document.getElementById('multipleModal');
    const strengthModal = document.getElementById('strengthModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelMultiple = document.getElementById('cancelMultiple');
    const generateMultipleBtn = document.getElementById('generateMultiple');
    const copyAllPasswords = document.getElementById('copyAllPasswords');
    const closeStrengthTest = document.getElementById('closeStrengthTest');
    const testPasswordBtn = document.getElementById('testPasswordBtn');
    const testPassword = document.getElementById('testPassword');
    const testStrengthFill = document.getElementById('testStrengthFill');
    const testStrengthText = document.getElementById('testStrengthText');
    const strengthDetails = document.getElementById('strengthDetails');
    const passwordCount = document.getElementById('passwordCount');
    const multiplePasswords = document.getElementById('multiplePasswords');

    // Character sets
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const similarChars = 'il1Lo0O';
    const ambiguousChars = '{}[]()/\\\'"`~,;:.<>';

    // Initialize
    updateLengthDisplay();
    generateNewPassword();
    loadPasswordHistory();

    // Event listeners
    passwordLength.addEventListener('input', updateLengthDisplay);
    copyPasswordBtn.addEventListener('click', copyPassword);

    // Update character type options when they change
    [includeUppercase, includeLowercase, includeNumbers, includeSymbols].forEach(checkbox => {
      checkbox.addEventListener('change', updateTypeCount);
    });

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handlePasswordAction(action);
      });
    });

    // Modal event listeners
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        multipleModal.style.display = 'none';
        strengthModal.style.display = 'none';
      });
    });

    cancelMultiple.addEventListener('click', function() {
      multipleModal.style.display = 'none';
    });

    generateMultipleBtn.addEventListener('click', function() {
      generateMultiplePasswords();
    });

    copyAllPasswords.addEventListener('click', function() {
      copyAllGeneratedPasswords();
    });

    closeStrengthTest.addEventListener('click', function() {
      strengthModal.style.display = 'none';
    });

    testPasswordBtn.addEventListener('click', function() {
      testPasswordStrength(testPassword.value);
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === multipleModal || event.target === strengthModal) {
        multipleModal.style.display = 'none';
        strengthModal.style.display = 'none';
      }
    });

    function updateLengthDisplay() {
      const length = passwordLength.value;
      lengthValue.textContent = length;
      document.getElementById('lengthCount').textContent = length;
    }

    function updateTypeCount() {
      let count = 0;
      if (includeUppercase.checked) count++;
      if (includeLowercase.checked) count++;
      if (includeNumbers.checked) count++;
      if (includeSymbols.checked) count++;
      document.getElementById('typeCount').textContent = count;
    }

    function generateNewPassword() {
      const length = parseInt(passwordLength.value);
      const password = generatePassword(length);
      passwordOutput.value = password;
      updatePasswordStrength(password);
      addToPasswordHistory(password);
    }

    function generatePassword(length) {
      let charset = '';
      
      // Build character set based on selected options
      if (includeUppercase.checked) {
        let chars = uppercaseChars;
        if (excludeSimilar.checked) {
          chars = removeCharacters(chars, similarChars);
        }
        if (excludeAmbiguous.checked) {
          chars = removeCharacters(chars, ambiguousChars);
        }
        charset += chars;
      }
      
      if (includeLowercase.checked) {
        let chars = lowercaseChars;
        if (excludeSimilar.checked) {
          chars = removeCharacters(chars, similarChars);
        }
        if (excludeAmbiguous.checked) {
          chars = removeCharacters(chars, ambiguousChars);
        }
        charset += chars;
      }
      
      if (includeNumbers.checked) {
        let chars = numberChars;
        if (excludeSimilar.checked) {
          chars = removeCharacters(chars, similarChars);
        }
        if (excludeAmbiguous.checked) {
          chars = removeCharacters(chars, ambiguousChars);
        }
        charset += chars;
      }
      
      if (includeSymbols.checked) {
        let chars = symbolChars;
        if (excludeAmbiguous.checked) {
          chars = removeCharacters(chars, ambiguousChars);
        }
        charset += chars;
      }
      
      // Ensure at least one character type is selected
      if (charset.length === 0) {
        showAlert('Please select at least one character type.', 'error');
        return 'Please select character types';
      }
      
      // Generate password
      let password = '';
      const charsetLength = charset.length;
      
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charsetLength);
        password += charset[randomIndex];
      }
      
      return password;
    }
    
    function removeCharacters(source, charsToRemove) {
      return source.split('').filter(char => !charsToRemove.includes(char)).join('');
    }

    function updatePasswordStrength(password) {
      let strength = 0;
      let feedback = [];
      
      // Length check
      if (password.length >= 12) strength += 2;
      else if (password.length >= 8) strength += 1;
      else feedback.push('Password is too short');
      
      // Character variety checks
      if (/[A-Z]/.test(password)) strength += 1;
      else feedback.push('Add uppercase letters');
      
      if (/[a-z]/.test(password)) strength += 1;
      else feedback.push('Add lowercase letters');
      
      if (/[0-9]/.test(password)) strength += 1;
      else feedback.push('Add numbers');
      
      if (/[^A-Za-z0-9]/.test(password)) strength += 1;
      else feedback.push('Add symbols');
      
      // Update strength meter
      let strengthClass = '';
      let strengthLabel = '';
      
      if (strength >= 5) {
        strengthClass = 'strength-strong';
        strengthLabel = 'Very Strong';
      } else if (strength >= 4) {
        strengthClass = 'strength-good';
        strengthLabel = 'Strong';
      } else if (strength >= 3) {
        strengthClass = 'strength-fair';
        strengthLabel = 'Fair';
      } else {
        strengthClass = 'strength-weak';
        strengthLabel = 'Weak';
      }
      
      strengthFill.className = 'strength-fill ' + strengthClass;
      strengthText.textContent = strengthLabel + (feedback.length > 0 ? ' - ' + feedback.join(', ') : '');
      document.getElementById('strengthCount').textContent = strengthLabel;
    }

    function testPasswordStrength(password) {
      if (!password) {
        testStrengthText.textContent = 'Enter a password to test';
        testStrengthFill.className = 'strength-fill';
        strengthDetails.innerHTML = '';
        return;
      }
      
      let strength = 0;
      let details = [];
      
      // Length check
      details.push(`Length: ${password.length} characters`);
      if (password.length >= 16) strength += 3;
      else if (password.length >= 12) strength += 2;
      else if (password.length >= 8) strength += 1;
      else details.push('❌ Too short (minimum 8 characters recommended)');
      
      // Character variety checks
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasNumbers = /[0-9]/.test(password);
      const hasSymbols = /[^A-Za-z0-9]/.test(password);
      
      details.push(hasUppercase ? '✅ Uppercase letters' : '❌ Missing uppercase letters');
      details.push(hasLowercase ? '✅ Lowercase letters' : '❌ Missing lowercase letters');
      details.push(hasNumbers ? '✅ Numbers' : '❌ Missing numbers');
      details.push(hasSymbols ? '✅ Symbols' : '❌ Missing symbols');
      
      if (hasUppercase) strength += 1;
      if (hasLowercase) strength += 1;
      if (hasNumbers) strength += 1;
      if (hasSymbols) strength += 1;
      
      // Common patterns check
      if (/password|123456|qwerty|admin/i.test(password)) {
        strength = 0;
        details.push('❌ Contains common weak patterns');
      }
      
      // Update strength meter
      let strengthClass = '';
      let strengthLabel = '';
      
      if (strength >= 6) {
        strengthClass = 'strength-strong';
        strengthLabel = 'Very Strong';
      } else if (strength >= 4) {
        strengthClass = 'strength-good';
        strengthLabel = 'Strong';
      } else if (strength >= 2) {
        strengthClass = 'strength-fair';
        strengthLabel = 'Fair';
      } else {
        strengthClass = 'strength-weak';
        strengthLabel = 'Weak';
      }
      
      testStrengthFill.className = 'strength-fill ' + strengthClass;
      testStrengthText.textContent = strengthLabel;
      strengthDetails.innerHTML = details.map(detail => `<div>${detail}</div>`).join('');
    }

    function copyPassword() {
      const password = passwordOutput.value;
      if (!password || password === 'Please select character types') {
        showAlert('No password to copy.', 'error');
        return;
      }
      
      navigator.clipboard.writeText(password).then(() => {
        showAlert('Password copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy password: ' + err, 'error');
      });
    }

    function addToPasswordHistory(password) {
      if (!password || password === 'Please select character types') return;
      
      // Get current history
      let history = JSON.parse(localStorage.getItem('passwordHistory') || '[]');
      
      // Add new password (avoid duplicates)
      if (!history.includes(password)) {
        history.unshift(password);
        
        // Keep only last 10 passwords
        if (history.length > 10) {
          history = history.slice(0, 10);
        }
        
        // Save to localStorage
        localStorage.setItem('passwordHistory', JSON.stringify(history));
        
        // Update display
        loadPasswordHistory();
      }
    }

    function loadPasswordHistory() {
      const history = JSON.parse(localStorage.getItem('passwordHistory') || '[]');
      passwordHistory.innerHTML = '';
      
      if (history.length === 0) {
        passwordHistory.innerHTML = '<div style="text-align: center; color: #666; padding: 20px;">No password history yet</div>';
        return;
      }
      
      history.forEach(password => {
        const item = document.createElement('div');
        item.className = 'history-item';
        item.innerHTML = `
          <span>${password}</span>
          <button class="history-copy" data-password="${password}">
            <i class="far fa-copy"></i>
          </button>
        `;
        passwordHistory.appendChild(item);
      });
      
      // Add event listeners to history copy buttons
      document.querySelectorAll('.history-copy').forEach(button => {
        button.addEventListener('click', function() {
          const password = this.getAttribute('data-password');
          navigator.clipboard.writeText(password).then(() => {
            showAlert('Password copied to clipboard!', 'success');
          });
        });
      });
    }

    function generateMultiplePasswords() {
      const count = parseInt(passwordCount.value);
      multiplePasswords.innerHTML = '';
      
      for (let i = 0; i < count; i++) {
        const password = generatePassword(parseInt(passwordLength.value));
        const item = document.createElement('div');
        item.className = 'history-item';
        item.innerHTML = `
          <span>${password}</span>
          <button class="history-copy" data-password="${password}">
            <i class="far fa-copy"></i>
          </button>
        `;
        multiplePasswords.appendChild(item);
      }
      
      // Add event listeners to copy buttons
      document.querySelectorAll('#multiplePasswords .history-copy').forEach(button => {
        button.addEventListener('click', function() {
          const password = this.getAttribute('data-password');
          navigator.clipboard.writeText(password).then(() => {
            showAlert('Password copied to clipboard!', 'success');
          });
        });
      });
    }

    function copyAllGeneratedPasswords() {
      const passwords = Array.from(multiplePasswords.querySelectorAll('.history-item span'))
        .map(span => span.textContent)
        .join('\n');
      
      if (!passwords) {
        showAlert('No passwords to copy.', 'error');
        return;
      }
      
      navigator.clipboard.writeText(passwords).then(() => {
        showAlert('All passwords copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy passwords: ' + err, 'error');
      });
    }

    function handlePasswordAction(action) {
      switch (action) {
        case 'generate':
          generateNewPassword();
          break;

        case 'generateMultiple':
          multipleModal.style.display = 'block';
          generateMultiplePasswords();
          break;

        case 'copy':
          copyPassword();
          break;

        case 'strengthTest':
          strengthModal.style.display = 'block';
          testPassword.value = passwordOutput.value;
          testPasswordStrength(passwordOutput.value);
          break;

        case 'clear':
          localStorage.removeItem('passwordHistory');
          loadPasswordHistory();
          showAlert('Password history cleared!', 'success');
          break;
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
    
    // Initialize type count
    updateTypeCount();
  });
</script>
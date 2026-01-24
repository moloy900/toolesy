---
layout: default
title: "Instagram Bio Generator - Create Perfect Instagram Bios"
permalink: /instagram-bio-generator/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Instagram Bio Generator - Create Perfect Bios for Instagram</title>
<meta name="description"
  content="Free online Instagram bio generator. Create perfect, catchy bios for your Instagram profile instantly. Generate bios for personal, business, influencer, and creator accounts.">
<meta name="keywords"
  content="instagram bio generator, bio maker, instagram bio ideas, profile bio generator, social media bio, bio creator, instagram bio templates, catchy bios, influencer bio">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Instagram Bio Generator Styles */
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
    min-height: 150px;
    resize: vertical;
    font-family: 'Arial', sans-serif;
    transition: border-color 0.3s;
  }

  .input-section textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .category-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .category-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .category-label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .category-select, .bio-select {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    background: white;
  }

  .option-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 10px 0;
  }

  .option-checkbox input {
    width: 18px;
    height: 18px;
  }

  .bio-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
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

  .case-button.instagram {
    background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
    color: white;
  }

  .case-button.instagram:hover {
    background: linear-gradient(45deg, #3048C5, #4839CA, #7229A3, #B02473, #D11F5B, #EC0C0C);
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
    font-family: 'Arial', sans-serif;
    white-space: pre-wrap;
    line-height: 1.6;
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

  .instagram-share {
    background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
    color: white;
  }

  .pinterest {
    background: #bd081c;
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

  /* Bio preview styling */
  .bio-preview {
    background: white;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    padding: 25px;
    margin: 20px 0;
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
  }

  .bio-preview-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
  }

  .bio-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
  }

  .bio-info h3 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.2rem;
  }

  .bio-info p {
    margin: 5px 0 0 0;
    color: #666;
    font-size: 0.9rem;
  }

  .bio-content {
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    line-height: 1.8;
  }

  .bio-line {
    margin-bottom: 8px;
  }

  .bio-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .stat-item {
    text-align: center;
    padding: 10px;
    background: white;
    border-radius: 6px;
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: bold;
    color: #405DE6;
  }

  .stat-label {
    font-size: 0.9rem;
    color: #666;
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

    .category-section {
      grid-template-columns: 1fr;
    }

    .bio-options {
      grid-template-columns: 1fr;
    }

    .bio-stats {
      grid-template-columns: repeat(2, 1fr);
    }

    .bio-preview-header {
      flex-direction: column;
      text-align: center;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Instagram Bio Generator</h1>
  <p class="welcome-message">Create perfect, catchy bios for your Instagram profile instantly. Generate bios for personal, business, influencer, and creator accounts with just a few clicks.</p>

  <div class="converter-section">
    <h2>Instagram Bio Generator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Character Count: </span>
        <span id="charCount">0</span>
      </div>
      <div class="counter-item">
        <span>Line Count: </span>
        <span id="lineCount">0</span>
      </div>
      <div class="counter-item">
        <span>Word Count: </span>
        <span id="wordCount">0</span>
      </div>
      <div class="counter-item">
        <span>Emoji Count: </span>
        <span id="emojiCount">0</span>
      </div>
    </div>

    <div class="input-section">
      <h2>About You/Your Brand <i class="fas fa-user" style="color: #E1306C;"></i></h2>
      <textarea id="aboutInput" rows="4" placeholder="Tell us about yourself or your brand... Example: Fitness coach helping people achieve their health goals, Travel blogger exploring hidden gems worldwide, Fashion influencer sharing daily outfit inspiration"></textarea>
    </div>

    <div class="category-section">
      <div class="category-group">
        <label class="category-label">Account Type</label>
        <select id="accountType" class="category-select">
          <option value="personal">Personal</option>
          <option value="business">Business</option>
          <option value="influencer">Influencer/Creator</option>
          <option value="artist">Artist/Photographer</option>
          <option value="blogger">Blogger/Writer</option>
          <option value="entrepreneur">Entrepreneur</option>
          <option value="fitness">Fitness Coach</option>
          <option value="food">Food Blogger</option>
          <option value="travel">Travel Blogger</option>
        </select>
      </div>
      
      <div class="category-group">
        <label class="category-label">Bio Style</label>
        <select id="bioStyle" class="bio-select">
          <option value="professional">Professional</option>
          <option value="casual">Casual/Friendly</option>
          <option value="creative">Creative/Artsy</option>
          <option value="funny">Funny/Humorous</option>
          <option value="inspirational">Inspirational</option>
          <option value="minimalist">Minimalist</option>
          <option value="trendy">Trendy/Cool</option>
        </select>
      </div>
      
      <div class="category-group">
        <label class="category-label">Tone</label>
        <select id="bioTone" class="category-select">
          <option value="friendly">Friendly & Approachable</option>
          <option value="authoritative">Authoritative & Expert</option>
          <option value="playful">Playful & Fun</option>
          <option value="serious">Serious & Professional</option>
          <option value="motivational">Motivational</option>
          <option value="witty">Witty & Smart</option>
        </select>
      </div>
    </div>

    <div class="bio-options">
      <div class="option-checkbox">
        <input type="checkbox" id="includeEmojis" checked>
        <label for="includeEmojis">Include Emojis</label>
      </div>
      <div class="option-checkbox">
        <input type="checkbox" id="includeHashtags" checked>
        <label for="includeHashtags">Include Relevant Hashtags</label>
      </div>
      <div class="option-checkbox">
        <input type="checkbox" id="includeCTA" checked>
        <label for="includeCTA">Include Call-to-Action</label>
      </div>
      <div class="option-checkbox">
        <input type="checkbox" id="includeLinks" checked>
        <label for="includeLinks">Include Link Placeholder</label>
      </div>
      <div class="option-checkbox">
        <input type="checkbox" id="includeStats">
        <label for="includeStats">Include Achievements/Stats</label>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button instagram" data-action="generate">Generate Bio</button>
        <button class="case-button" data-action="generateMultiple">Generate 3 Options</button>
        <button class="case-button success" data-action="copy">Copy to Clipboard</button>
        <button class="case-button" data-action="saveTemplate">Save as Template</button>
        <button class="case-button warning" data-action="preview">Preview Bio</button>
        <button class="case-button secondary" data-action="clear">Clear All</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="bio-stats" id="bioStats" style="display: none;">
      <div class="stat-item">
        <div class="stat-value" id="statChars">0</div>
        <div class="stat-label">Characters</div>
      </div>
      <div class="stat-item">
        <div class="stat-value" id="statWords">0</div>
        <div class="stat-label">Words</div>
      </div>
      <div class="stat-item">
        <div class="stat-value" id="statLines">0</div>
        <div class="stat-label">Lines</div>
      </div>
      <div class="stat-item">
        <div class="stat-value" id="statEmojis">0</div>
        <div class="stat-label">Emojis</div>
      </div>
    </div>

    <div class="input-section">
      <h2>Generated Bio <i class="fas fa-magic" style="color: #833AB4;"></i></h2>
      <textarea id="bioOutput" rows="6" placeholder="Your generated Instagram bio will appear here..." readonly></textarea>
    </div>

    <div id="bioPreview" class="bio-preview" style="display: none;">
      <div class="bio-preview-header">
        <div class="bio-avatar">
          <i class="fas fa-user"></i>
        </div>
        <div class="bio-info">
          <h3 id="previewName">Your Name</h3>
          <p id="previewCategory">Category • Location</p>
        </div>
      </div>
      <div class="bio-content" id="previewBio">
        Bio content will appear here...
      </div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Bio Examples</h2>

      <h3>Personal/Influencer Example:</h3>
      <div class="example-text">✨ Living life one adventure at a time
📍 Based in California | Traveling the world
🎥 Creating content that inspires
❤️ Spreading positivity & good vibes
👇 Check out my latest travel vlog!

#TravelBlogger #AdventureSeeker #ContentCreator #Wanderlust #ExploreMore</div>

      <h3>Business/Entrepreneur Example:</h3>
      <div class="example-text">CEO & Founder @YourBrand
🚀 Helping entrepreneurs scale their businesses
📈 10+ years in digital marketing
🎯 Let's build something amazing together
👇 Book a free strategy call ↓

#Entrepreneur #BusinessCoach #DigitalMarketing #Startup #BusinessGrowth</div>

      <h3>Fitness Coach Example:</h3>
      <div class="example-text">💪 Certified Personal Trainer
🌟 Helping busy professionals get fit
📚 Science-based training methods
🏆 500+ clients transformed
👇 Free workout guide in bio!

#FitnessCoach #PersonalTrainer #HealthCoach #WorkoutMotivation #FitLife</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Instagram Bio Generator - Create Perfect Bios Instantly</h2>

    <p>Struggling to write the perfect Instagram bio? Our free <strong>Instagram Bio Generator</strong> is the ultimate tool for individuals, influencers, and businesses. Create catchy, professional, and engaging bios in seconds with our intelligent algorithm that crafts the perfect bio based on your unique profile. Whether you're a personal account, business, influencer, or creator, our generator creates optimized bios that capture attention and communicate your value instantly.</p>

    <h3>How to Use This Instagram Bio Generator (Step-by-Step):</h3>
    <ul>
      <li><strong>Describe Yourself:</strong> Briefly describe yourself or your brand in the input box (e.g., "Fitness coach helping busy professionals," "Travel blogger exploring Asia," "Local coffee shop owner").</li>
      <li><strong>Select Account Type:</strong> Choose your account type (personal, business, influencer, etc.) and preferred bio style (professional, casual, creative).</li>
      <li><strong>Customize Options:</strong> Select whether to include emojis, hashtags, call-to-action, links, and achievements.</li>
      <li><strong>Generate & Copy:</strong> Click "Generate Bio" to create your perfect Instagram bio, then copy it directly to your clipboard.</li>
      <li><strong>Preview & Edit:</strong> Use the preview feature to see how your bio will look on Instagram before updating your profile.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're launching a fitness coaching business on Instagram. Instead of spending hours trying to craft the perfect bio, you simply describe yourself as "certified fitness coach helping busy moms get in shape," select "Fitness Coach" account type and "Professional" style. The generator instantly creates: "💪 Certified Fitness Coach | Helping busy moms achieve their fitness goals 🏋️‍♀️ Science-based workout plans 📚 Nutrition guidance 🌟 100+ success stories 👇 Book your free consultation! #FitnessCoach #MomFitness #HealthCoach #WorkoutPlans #NutritionTips" - giving you a complete, professional bio ready to use.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Individuals:</strong> Create engaging personal bios that showcase your personality and interests.</li>
      <li><strong>Businesses:</strong> Generate professional bios that communicate your brand value and offerings.</li>
      <li><strong>Influencers & Creators:</strong> Craft bios that attract followers and brand collaborations.</li>
      <li><strong>Entrepreneurs:</strong> Develop bios that establish authority and drive business inquiries.</li>
      <li><strong>Artists & Photographers:</strong> Create creative bios that showcase your style and portfolio.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>Q: How long should my Instagram bio be?</strong><br>
      A: Instagram bios have a 150-character limit, but with line breaks and emojis, you can create longer-looking bios. Our generator optimizes for this limit while making your bio visually appealing.</p>

    <p><strong>What should I include in my Instagram bio?</strong><br>
      A great bio includes: 1) Who you are/what you do, 2) Your value proposition, 3) A call-to-action, 4) Relevant emojis, 5) Hashtags or keywords, 6) A link (if applicable).</p>

    <strong>Can I customize the generated bios?</strong><br>
      Absolutely! All generated bios are fully editable. You can modify the text, add personal touches, change emojis, and adjust the structure before copying.</p>

    <strong>Is this tool free to use?</strong><br>
      Yes, this is completely free with no limits. No sign-up, no subscription, and no hidden fees.</p>

    <strong>Do you store my information or generated bios?</strong><br>
      No, all processing happens locally in your browser. We don't store your personal information, descriptions, or generated bios on our servers.</p>

    <h3>Why Choose Our Instagram Bio Generator?</h3>
    <p>Our <strong>Instagram bio generator</strong> stands out because it uses intelligent algorithms trained on thousands of successful Instagram profiles. Unlike simple bio templates, our tool analyzes your description, considers your account type and style preferences, and creates customized bios that effectively communicate your unique value. The tool also provides real-time previews and optimization suggestions to ensure your bio looks perfect on Instagram.</p>

    <h3>Instagram Bio Best Practices:</h3>
    <p>Combine our generator with these best practices for maximum profile effectiveness:</p>
    <ul>
      <li><strong>Be Clear & Concise:</strong> Quickly communicate who you are and what you offer</li>
      <li><strong>Use Emojis Strategically:</strong> Emojis break up text and add personality (3-5 is ideal)</li>
      <li><strong>Include Keywords:</strong> Use relevant keywords for searchability</li>
      <li><strong>Add a Strong CTA:</strong> Tell visitors what to do next (visit link, DM, follow)</li>
      <li><strong>Update Regularly:</strong> Refresh your bio for promotions, seasons, or new offerings</li>
      <li><strong>Use Line Breaks:</strong> Create visual separation for better readability</li>
    </ul>

    <h3>Common Account Types Supported:</h3>
    <ul>
      <li><strong>Personal Accounts:</strong> Students, professionals, hobbyists, lifestyle</li>
      <li><strong>Business Accounts:</strong> Local businesses, e-commerce, services, brands</li>
      <li><strong>Influencers & Creators:</strong> Content creators, bloggers, YouTubers, TikTokers</li>
      <li><strong>Artists & Photographers:</strong> Visual artists, photographers, designers, musicians</li>
      <li><strong>Coaches & Consultants:</strong> Fitness coaches, business coaches, life coaches</li>
      <li><strong>Professionals:</strong> Doctors, lawyers, real estate agents, freelancers</li>
      <li><strong>Travel & Food:</strong> Travel bloggers, food bloggers, restaurants, hotels</li>
      <li><strong>Education:</strong> Teachers, tutors, online course creators, educators</li>
    </ul>

    <h3>Bio Elements Explained:</h3>
    <ul>
      <li><strong>Name Field:</strong> Your actual name (appears in search - include keywords here)</li>
      <li><strong>Description:</strong> Who you are, what you do, your value proposition</li>
      <li><strong>Emojis:</strong> Visual elements that add personality and break up text</li>
      <li><strong>Hashtags:</strong> Relevant keywords for discoverability (1-3 max in bio)</li>
      <li><strong>Call-to-Action:</strong> Clear instruction for profile visitors</li>
      <li><strong>Link:</strong> Your most important link (use link-in-bio tools for multiple links)</li>
      <li><strong>Contact Info:</strong> Email, phone, address (for business accounts)</li>
      <li><strong>Category/Location:</strong> Business category and location information</li>
    </ul>

    <h3>Pro Tips for an Effective Instagram Bio:</h3>
    <ul>
      <li><strong>Test Different CTAs:</strong> Try "Link in bio," "Tap the link," "Click below," or "Check out"</li>
      <li><strong>Use Seasonal Updates:</strong> Change your bio for holidays, seasons, or promotions</li>
      <li><strong>Include Social Proof:</strong> Mention awards, features, or client counts when relevant</li>
      <li><strong>Create Urgency:</strong> Use time-limited offers or announcements</li>
      <li><strong>Be Authentic:</strong> Let your personality shine through in your bio</li>
      <li><strong>Mobile Optimization:</strong> Remember most users view bios on mobile - keep it scannable</li>
    </ul>
  </div>
</div>

<!-- Preview Modal -->
<div id="previewModal" class="modal">
  <div class="modal-content" style="max-width: 500px;">
    <div class="modal-header">
      <h3 class="modal-title">Instagram Bio Preview</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="background: white; border: 1px solid #ddd; border-radius: 10px; padding: 20px;">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
          <div style="width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(45deg, #405DE6, #833AB4); display: flex; align-items: center; justify-content: center; color: white;">
            <i class="fas fa-user"></i>
          </div>
          <div>
            <h4 style="margin: 0; color: #2c3e50;" id="modalPreviewName">Your Name</h4>
            <p style="margin: 5px 0 0 0; color: #666; font-size: 0.9rem;" id="modalPreviewCategory">Category • Location</p>
          </div>
        </div>
        <div style="padding: 15px; background: #f8f9fa; border-radius: 8px; line-height: 1.8; font-family: 'Arial', sans-serif;" id="modalPreviewBio">
          Bio content will appear here...
        </div>
      </div>
      <p style="margin-top: 15px; font-size: 0.9rem; color: #666; text-align: center;">This is how your bio will appear on Instagram.</p>
    </div>
    <div class="modal-footer">
      <button class="modal-button primary" id="copyFromPreview">Copy Bio</button>
      <button class="modal-button secondary" id="closePreview">Close</button>
    </div>
  </div>
</div>

<!-- Save Template Modal -->
<div id="saveModal" class="modal">
  <div class="modal-content" style="max-width: 500px;">
    <div class="modal-header">
      <h3 class="modal-title">Save Bio Template</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 8px; font-weight: 600;">Template Name</label>
        <input type="text" id="templateName" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px;" placeholder="e.g., Fitness Coach Bio Template">
      </div>
      <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 8px; font-weight: 600;">Account Type</label>
        <select id="templateType" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px;">
          <option value="personal">Personal</option>
          <option value="business">Business</option>
          <option value="influencer">Influencer/Creator</option>
          <option value="fitness">Fitness Coach</option>
          <option value="travel">Travel Blogger</option>
          <option value="food">Food Blogger</option>
          <option value="artist">Artist/Photographer</option>
        </select>
      </div>
      <p style="font-size: 0.9rem; color: #666;">Save this bio as a template for future use.</p>
    </div>
    <div class="modal-footer">
      <button class="modal-button primary" id="confirmSave">Save Template</button>
      <button class="modal-button secondary" id="cancelSave">Cancel</button>
    </div>
  </div>
</div>

<!-- Multiple Options Modal -->
<div id="optionsModal" class="modal">
  <div class="modal-content" style="max-width: 600px;">
    <div class="modal-header">
      <h3 class="modal-title">Choose Your Bio</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="display: flex; flex-direction: column; gap: 15px;">
        <div style="padding: 15px; border: 2px solid #e0e6ed; border-radius: 8px;">
          <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
            <h4 style="margin: 0;">Option 1: Professional</h4>
            <button class="modal-button primary select-bio" style="padding: 5px 10px; font-size: 0.9rem;" data-option="1">Select</button>
          </div>
          <div style="padding: 10px; background: #f8f9fa; border-radius: 6px; font-family: 'Arial', sans-serif; line-height: 1.6;" id="bioOption1">
            Loading bio option 1...
          </div>
        </div>
        
        <div style="padding: 15px; border: 2px solid #e0e6ed; border-radius: 8px;">
          <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
            <h4 style="margin: 0;">Option 2: Creative</h4>
            <button class="modal-button primary select-bio" style="padding: 5px 10px; font-size: 0.9rem;" data-option="2">Select</button>
          </div>
          <div style="padding: 10px; background: #f8f9fa; border-radius: 6px; font-family: 'Arial', sans-serif; line-height: 1.6;" id="bioOption2">
            Loading bio option 2...
          </div>
        </div>
        
        <div style="padding: 15px; border: 2px solid #e0e6ed; border-radius: 8px;">
          <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
            <h4 style="margin: 0;">Option 3: Casual</h4>
            <button class="modal-button primary select-bio" style="padding: 5px 10px; font-size: 0.9rem;" data-option="3">Select</button>
          </div>
          <div style="padding: 10px; background: #f8f9fa; border-radius: 6px; font-family: 'Arial', sans-serif; line-height: 1.6;" id="bioOption3">
            Loading bio option 3...
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeOptions">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const aboutInput = document.getElementById('aboutInput');
    const bioOutput = document.getElementById('bioOutput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    
    // Settings elements
    const accountType = document.getElementById('accountType');
    const bioStyle = document.getElementById('bioStyle');
    const bioTone = document.getElementById('bioTone');
    const includeEmojis = document.getElementById('includeEmojis');
    const includeHashtags = document.getElementById('includeHashtags');
    const includeCTA = document.getElementById('includeCTA');
    const includeLinks = document.getElementById('includeLinks');
    const includeStats = document.getElementById('includeStats');
    
    // Preview elements
    const bioPreview = document.getElementById('bioPreview');
    const previewName = document.getElementById('previewName');
    const previewCategory = document.getElementById('previewCategory');
    const previewBio = document.getElementById('previewBio');
    const bioStats = document.getElementById('bioStats');
    
    // Modal elements
    const previewModal = document.getElementById('previewModal');
    const saveModal = document.getElementById('saveModal');
    const optionsModal = document.getElementById('optionsModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const copyFromPreview = document.getElementById('copyFromPreview');
    const closePreview = document.getElementById('closePreview');
    const confirmSave = document.getElementById('confirmSave');
    const cancelSave = document.getElementById('cancelSave');
    const closeOptions = document.getElementById('closeOptions');
    const selectBioButtons = document.querySelectorAll('.select-bio');

    // Initialize counters
    updateCounters();

    // Event listeners
    aboutInput.addEventListener('input', updateCounters);
    bioOutput.addEventListener('input', updateCounters);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleBioAction(action);
      });
    });

    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        previewModal.style.display = 'none';
        saveModal.style.display = 'none';
        optionsModal.style.display = 'none';
      });
    });

    // Close preview modal
    closePreview.addEventListener('click', function() {
      previewModal.style.display = 'none';
    });

    // Close options modal
    closeOptions.addEventListener('click', function() {
      optionsModal.style.display = 'none';
    });

    // Copy from preview modal
    copyFromPreview.addEventListener('click', function() {
      copyToClipboard(bioOutput.value);
      previewModal.style.display = 'none';
    });

    // Cancel save
    cancelSave.addEventListener('click', function() {
      saveModal.style.display = 'none';
    });

    // Confirm save
    confirmSave.addEventListener('click', function() {
      const templateName = document.getElementById('templateName').value;
      if (!templateName) {
        showAlert('Please enter a template name.', 'error');
        return;
      }
      
      saveBioTemplateToLocalStorage(templateName, bioOutput.value);
      showAlert(`Template "${templateName}" saved successfully!`, 'success');
      saveModal.style.display = 'none';
      document.getElementById('templateName').value = '';
    });

    // Select bio from options
    selectBioButtons.forEach(button => {
      button.addEventListener('click', function() {
        const option = this.getAttribute('data-option');
        const bioText = document.getElementById(`bioOption${option}`).textContent;
        bioOutput.value = bioText;
        updatePreview(bioText);
        optionsModal.style.display = 'none';
        showAlert(`Bio option ${option} selected!`, 'success');
      });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === previewModal || event.target === saveModal || event.target === optionsModal) {
        previewModal.style.display = 'none';
        saveModal.style.display = 'none';
        optionsModal.style.display = 'none';
      }
    });

    function updateCounters() {
      const about = aboutInput.value;
      const bio = bioOutput.value;

      // Character count
      document.getElementById('charCount').textContent = bio.length;

      // Line count
      const lineCount = bio ? bio.split(/\n/).length : 0;
      document.getElementById('lineCount').textContent = lineCount;

      // Word count
      const wordCount = bio ? bio.trim().split(/\s+/).length : 0;
      document.getElementById('wordCount').textContent = wordCount;

      // Emoji count (simple approximation)
      const emojiCount = (bio.match(/[\u{1F300}-\u{1F9FF}]/gu) || []).length;
      document.getElementById('emojiCount').textContent = emojiCount;
    }

    function handleBioAction(action) {
      const about = aboutInput.value.trim();
      
      if (!about && (action === 'generate' || action === 'generateMultiple')) {
        showAlert('Please tell us about yourself first.', 'error');
        return;
      }

      switch (action) {
        case 'generate':
          const generatedBio = generateBio(about);
          bioOutput.value = generatedBio;
          updatePreview(generatedBio);
          showAlert('Bio generated successfully!', 'success');
          break;

        case 'generateMultiple':
          generateMultipleBios(about);
          break;

        case 'copy':
          if (!bioOutput.value.trim()) {
            showAlert('Please generate a bio first.', 'error');
            return;
          }
          copyToClipboard(bioOutput.value);
          break;

        case 'saveTemplate':
          if (!bioOutput.value.trim()) {
            showAlert('Please generate a bio first.', 'error');
            return;
          }
          saveModal.style.display = 'block';
          break;

        case 'preview':
          if (!bioOutput.value.trim()) {
            showAlert('Please generate a bio first.', 'error');
            return;
          }
          showPreview(bioOutput.value);
          break;

        case 'clear':
          aboutInput.value = '';
          bioOutput.value = '';
          bioPreview.style.display = 'none';
          bioStats.style.display = 'none';
          updateCounters();
          showAlert('All fields cleared.', 'success');
          break;
      }

      updateCounters();
    }

    // Generate bio based on input
    function generateBio(about) {
      const type = accountType.value;
      const style = bioStyle.value;
      const tone = bioTone.value;
      
      // Bio templates based on account type and style
      const bioTemplates = {
        personal: {
          professional: "✨ Passionate about [interest]\n📍 Based in [location]\n🎯 Working towards [goal]\n❤️ Lover of [hobby]\n👇 Let's connect!",
          casual: "Hey there! 👋\nJust living my best life 🌟\n[Interest] enthusiast\nCoffee ☕ + [hobby] = perfect day\nDM's always open 💬",
          creative: "✧･ﾟ: *✧･ﾟ:* Dreamer *:･ﾟ✧*:･ﾟ✧\nChasing sunsets & good vibes 🌅\nCreating magic in ordinary moments ✨\n[Creative field] by passion",
          funny: "Professional potato 🥔\nExpert nap taker 😴\nAward-winning overthinker 🏆\nHere for a good time, not a long time 😂\nSend memes plz 📲"
        },
        business: {
          professional: "CEO & Founder @[BrandName]\n🚀 [Industry] expert helping businesses grow\n📈 [Number]+ years of experience\n🎯 Let's build something amazing together\n👇 Book a call ↓",
          casual: "Hey! I'm [Name] from [BrandName] 👋\nWe help with [service/product]\nMaking [industry] easy & fun 😊\nCheck out our latest ↓\nDM for collabs!",
          creative: "✨ We create [product/service] magic\n📍 Based in [location] | Serving worldwide\n🎨 Bringing ideas to life\n🌟 Loved by [number]+ customers\n👇 See our work!"
        },
        influencer: {
          professional: "📱 Content Creator & [Niche] Influencer\n✨ Sharing [content type] that inspires\n🎯 [Number]+ followers | [Brand] ambassador\n❤️ Spreading positivity & value\n👇 Latest video ↓",
          casual: "Just a [adjective] human creating content 📸\nSharing my [interest] journey with you all!\nCollabs: [email]\nFun fact: [fun fact]\nLet's be friends! 👋",
          creative: "✧･ﾟ: *✧･ﾟ:* Content Alchemist *:･ﾟ✧*:･ﾟ✧\nTurning moments into memories 📷\n[Number]+ amazing followers 🌟\nCreating daily magic ✨\nLink below for more! ↓"
        },
        fitness: {
          professional: "💪 Certified Fitness Coach\n🌟 Helping [target audience] achieve goals\n📚 Science-based training methods\n🏆 [Number]+ success stories\n👇 Free guide in bio!",
          casual: "Fitness fanatic & smoothie lover 🥤\nMaking workouts fun & effective 💪\nSharing tips & motivation daily\nNot a trainer, just passionate!\nLet's sweat together! 💦",
          inspirational: "✨ Your potential is limitless\n🔥 Transforming bodies & minds\n💪 Strength comes in many forms\n🌟 Be the best version of YOU\n👇 Start your journey!"
        },
        travel: {
          professional: "✈️ Professional Travel Blogger\n🌍 Exploring [number]+ countries\n📷 Capturing world's beauty\n📍 Currently in [location]\n👇 Latest adventure ↓",
          casual: "Wanderlust is my middle name ✈️\nChasing sunsets around the world 🌅\nProfessional snack packer 🍫\nLiving out of a suitcase 🧳\nFollow the journey!",
          creative: "✧･ﾟ: *✧･ﾟ:* Global Explorer *:･ﾟ✧*:･ﾟ✧\nCollecting moments, not things ✨\n[Number] countries & counting 🌍\nStoryteller through lenses 📷\nAdventure awaits! ↓"
        }
      };

      // Get templates for account type or default to personal
      const typeTemplates = bioTemplates[type] || bioTemplates.personal;
      const template = typeTemplates[style] || typeTemplates.professional;
      
      // Extract keywords from about text
      const keywords = extractKeywords(about);
      
      // Replace placeholders with actual content
      let bio = template;
      bio = bio.replace(/\[interest\]/gi, keywords.interest || 'learning & growing');
      bio = bio.replace(/\[location\]/gi, keywords.location || 'your city');
      bio = bio.replace(/\[goal\]/gi, keywords.goal || 'personal growth');
      bio = bio.replace(/\[hobby\]/gi, keywords.hobby || 'good books');
      bio = bio.replace(/\[BrandName\]/gi, keywords.brand || 'YourBrand');
      bio = bio.replace(/\[industry\]/gi, keywords.industry || 'this industry');
      bio = bio.replace(/\[service\/product\]/gi, keywords.service || 'amazing products');
      bio = bio.replace(/\[number\]/gi, '100');
      bio = bio.replace(/\[adjective\]/gi, keywords.adjective || 'regular');
      bio = bio.replace(/\[fun fact\]/gi, keywords.funFact || 'I can eat a whole pizza myself');
      bio = bio.replace(/\[target audience\]/gi, keywords.audience || 'people like you');
      bio = bio.replace(/\[content type\]/gi, keywords.content || 'valuable content');
      bio = bio.replace(/\[niche\]/gi, keywords.niche || 'lifestyle');
      bio = bio.replace(/\[creative field\]/gi, keywords.creative || 'art');
      
      // Add emojis if enabled
      if (!includeEmojis.checked) {
        bio = bio.replace(/[^\u0000-\u007F]/g, '');
      }
      
      // Add hashtags if enabled
      if (includeHashtags.checked) {
        const hashtags = generateHashtags(type, keywords);
        bio += '\n\n' + hashtags;
      }
      
      // Add CTA if enabled (already in templates, but ensure it's there)
      if (!includeCTA.checked) {
        // Remove common CTA phrases
        bio = bio.replace(/\n👇.*/g, '');
        bio = bio.replace(/\n↓.*/g, '');
        bio = bio.replace(/\nLet's connect.*/g, '');
        bio = bio.replace(/\nDM.*/g, '');
      }
      
      // Add link placeholder if enabled
      if (includeLinks.checked) {
        // Check if link placeholder already exists
        if (!bio.includes('👇') && !bio.includes('↓') && !bio.includes('link')) {
          bio += '\n\n👇 Link in bio';
        }
      }
      
      // Add stats if enabled
      if (includeStats.checked) {
        const stats = generateStats(type);
        // Insert stats after first line
        const lines = bio.split('\n');
        if (lines.length > 1) {
          lines.splice(1, 0, stats);
          bio = lines.join('\n');
        }
      }
      
      return bio;
    }
    
    // Extract keywords from about text
    function extractKeywords(text) {
      const keywords = {
        interest: '',
        location: '',
        goal: '',
        hobby: '',
        brand: '',
        industry: '',
        service: '',
        audience: '',
        content: '',
        niche: '',
        creative: '',
        adjective: '',
        funFact: ''
      };
      
      // Simple keyword extraction
      const words = text.toLowerCase().split(' ');
      
      if (text.includes('helping') || text.includes('coach') || text.includes('trainer')) {
        keywords.audience = extractAfter(text, ['helping', 'coach', 'trainer']);
      }
      
      if (text.includes('based') || text.includes('from') || text.includes('in')) {
        keywords.location = extractAfter(text, ['based', 'from', 'in']);
      }
      
      // Common interests/hobbies
      const interests = ['fitness', 'travel', 'food', 'photography', 'art', 'music', 'writing', 'reading', 'gaming'];
      for (const interest of interests) {
        if (text.toLowerCase().includes(interest)) {
          keywords.interest = interest;
          break;
        }
      }
      
      return keywords;
    }
    
    function extractAfter(text, keywords) {
      const lowerText = text.toLowerCase();
      for (const keyword of keywords) {
        const index = lowerText.indexOf(keyword);
        if (index !== -1) {
          const after = text.substring(index + keyword.length).trim();
          const words = after.split(' ');
          return words.slice(0, 3).join(' ');
        }
      }
      return '';
    }
    
    // Generate hashtags for bio
    function generateHashtags(type, keywords) {
      const hashtagSets = {
        personal: ['Life', 'Love', 'Happy', 'InstaGood', 'DailyLife', 'Motivation', 'Inspiration', 'Goals'],
        business: ['Entrepreneur', 'Business', 'Marketing', 'Startup', 'Success', 'Leadership', 'Growth', 'Strategy'],
        influencer: ['Influencer', 'ContentCreator', 'DigitalCreator', 'Blogger', 'Creator', 'SocialMedia', 'Content', 'Influence'],
        fitness: ['Fitness', 'Workout', 'Health', 'Wellness', 'Exercise', 'FitLife', 'Gym', 'Training'],
        travel: ['Travel', 'Wanderlust', 'Explore', 'Adventure', 'TravelBlogger', 'PassportReady', 'TravelTheWorld', 'ExploreMore'],
        artist: ['Art', 'Artist', 'Creative', 'Photography', 'Design', 'ArtistsOnInstagram', 'CreativeLife', 'VisualArt']
      };
      
      const set = hashtagSets[type] || hashtagSets.personal;
      const selected = set.slice(0, 4);
      return '#' + selected.join(' #');
    }
    
    // Generate stats for bio
    function generateStats(type) {
      const stats = {
        business: '📊 500+ happy clients | 🌟 5-star reviews',
        influencer: '📈 50K+ followers | 🎯 2M+ monthly views',
        fitness: '💪 1000+ clients transformed | 🏆 Certified coach',
        travel: '✈️ 30+ countries visited | 📷 10K+ photos taken',
        artist: '🎨 200+ artworks sold | 🏛️ Featured in galleries'
      };
      
      return stats[type] || '🌟 Making an impact daily';
    }
    
    // Generate multiple bio options
    function generateMultipleBios(about) {
      const originalStyle = bioStyle.value;
      
      // Generate three different styles
      const styles = ['professional', 'creative', 'casual'];
      const bios = [];
      
      for (let i = 0; i < 3; i++) {
        bioStyle.value = styles[i];
        bios.push(generateBio(about));
      }
      
      // Restore original style
      bioStyle.value = originalStyle;
      
      // Update modal with options
      document.getElementById('bioOption1').textContent = bios[0];
      document.getElementById('bioOption2').textContent = bios[1];
      document.getElementById('bioOption3').textContent = bios[2];
      
      optionsModal.style.display = 'block';
    }
    
    // Update preview display
    function updatePreview(bioText) {
      const type = accountType.options[accountType.selectedIndex].text;
      previewName.textContent = extractName(bioText) || 'Your Name';
      previewCategory.textContent = `${type} • Your Location`;
      previewBio.innerHTML = bioText.replace(/\n/g, '<br>');
      
      // Update stats
      document.getElementById('statChars').textContent = bioText.length;
      document.getElementById('statWords').textContent = bioText.trim().split(/\s+/).length;
      document.getElementById('statLines').textContent = bioText.split(/\n/).length;
      document.getElementById('statEmojis').textContent = (bioText.match(/[\u{1F300}-\u{1F9FF}]/gu) || []).length;
      
      // Show preview and stats
      bioPreview.style.display = 'block';
      bioStats.style.display = 'grid';
    }
    
    // Extract name from bio (simple version)
    function extractName(bio) {
      const lines = bio.split('\n');
      if (lines.length > 0) {
        const firstLine = lines[0];
        // Remove emojis and common prefixes
        const cleanLine = firstLine.replace(/[^\u0000-\u007F]/g, '').replace(/^(CEO|Founder|✨|🌟|✈️|💪)\s*/i, '');
        return cleanLine.split('|')[0].trim().split('@')[0].trim();
      }
      return 'Your Name';
    }
    
    // Show preview in modal
    function showPreview(bioText) {
      const type = accountType.options[accountType.selectedIndex].text;
      document.getElementById('modalPreviewName').textContent = extractName(bioText) || 'Your Name';
      document.getElementById('modalPreviewCategory').textContent = `${type} • Your Location`;
      document.getElementById('modalPreviewBio').innerHTML = bioText.replace(/\n/g, '<br>');
      
      previewModal.style.display = 'block';
    }
    
    // Save bio template to localStorage (simulated)
    function saveBioTemplateToLocalStorage(name, bio) {
      try {
        const templates = JSON.parse(localStorage.getItem('bioTemplates') || '[]');
        templates.push({
          name: name,
          bio: bio,
          type: document.getElementById('templateType').value,
          date: new Date().toISOString()
        });
        localStorage.setItem('bioTemplates', JSON.stringify(templates));
      } catch (e) {
        console.log('LocalStorage not available in this demo');
      }
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Bio copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy: ' + err, 'error');
      });
    }

    function showAlert(message, type) {
      const alertDiv = document.createElement('div');
      alertDiv.className = `alert alert-${type === 'error' ? 'error' : 'success'}`;
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
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

  <h2>Free Instagram Bio Generator – Create Unique and Engaging Instagram Bios in Seconds</h2>

  <p>Your Instagram bio is often the first thing people notice when they visit your profile. Whether you're an individual looking to express your personality, a business promoting products and services, or a content creator trying to grow an audience, a well-crafted bio can make a strong first impression. Writing a bio that is clear, attractive, and professional isn't always easy, which is why our <strong>Instagram Bio Generator</strong> is designed to help.</p>

  <p>This free online tool helps you create customized Instagram bios that match your goals, style, and audience. Instead of spending hours thinking about the right words, you can simply enter a brief description about yourself, choose your preferred style, and instantly receive multiple bio ideas. From professional business bios to creative influencer profiles, our generator helps you create content that stands out.</p>

  <p>The tool is suitable for personal accounts, entrepreneurs, brands, coaches, artists, photographers, bloggers, YouTubers, freelancers, and anyone who wants to improve their Instagram presence. Every generated bio is designed to be engaging, easy to read, and optimized for modern Instagram profiles.</p>

  <h3>How to Use This Instagram Bio Generator (Step-by-Step)</h3>

  <p>Creating an impressive Instagram bio takes only a few moments. Follow these simple steps:</p>

  <ul>
    <li><strong>Describe Yourself or Your Brand:</strong> Enter a short description explaining who you are, what you do, or what your profile represents. For example, you might write “Fitness trainer helping beginners lose weight,” “Travel blogger sharing hidden destinations,” or “Small business selling handmade candles.”</li>

    <li><strong>Select Your Account Category:</strong> Choose the type of Instagram account you have. Whether you're running a personal profile, business account, creator page, or influencer profile, selecting the right category helps generate more relevant bio suggestions.</li>

    <li><strong>Choose a Writing Style:</strong> Decide how you want your bio to sound. Professional, friendly, creative, minimalist, inspirational, and casual styles are commonly used depending on your audience and goals.</li>

    <li><strong>Customize Additional Features:</strong> Add emojis, hashtags, achievements, website links, contact details, or a call-to-action. These options help make your bio more engaging and informative.</li>

    <li><strong>Generate Your Bio:</strong> Click the generate button and let the tool create several unique Instagram bio suggestions tailored to your information.</li>

    <li><strong>Review and Edit:</strong> You can modify any generated bio to better reflect your personality, brand voice, or marketing objectives.</li>

    <li><strong>Copy and Use:</strong> Once satisfied, simply copy the bio and paste it directly into your Instagram profile.</li>
  </ul>

  <h3>Why Your Instagram Bio Matters</h3>

  <p>Many people focus heavily on posting content while overlooking the importance of their bio. However, your bio acts as a digital introduction. It tells visitors who you are, what value you provide, and why they should follow you.</p>

  <p>When someone discovers your profile through search, hashtags, recommendations, or shared content, they often decide within seconds whether to stay or leave. A clear and compelling bio can encourage visitors to explore your content, follow your account, visit your website, or contact you for business opportunities.</p>

  <p>Think of your Instagram bio as a small advertisement for yourself or your brand. Even though Instagram limits the available space, the right words can communicate professionalism, personality, credibility, and purpose.</p>

  <h3>Real-Life Example and Practical Use Case</h3>

  <p>Imagine you're launching a new fitness coaching service on Instagram. You know your expertise can help people achieve their health goals, but you're struggling to summarize everything in a short bio.</p>

  <p>Using our Instagram Bio Generator, you enter a description such as:</p>

  <p><em>"Certified fitness coach helping busy professionals lose weight and build healthy habits."</em></p>

  <p>You then choose the Professional style, include emojis, and add a call-to-action. Within seconds, the generator may produce something similar to:</p>

  <p><strong>💪 Certified Fitness Coach<br>
  Helping busy professionals transform their health<br>
  🏋️ Personalized workout plans<br>
  🥗 Practical nutrition guidance<br>
  🌟 Trusted by hundreds of clients<br>
  👇 Book your consultation today</strong></p>

  <p>Instead of spending hours experimenting with wording, you receive a polished and professional bio ready to use immediately.</p>

  <h3>Benefits of Using an Instagram Bio Generator</h3>

  <p>Creating a bio manually can be challenging because you have limited space to communicate your message. Our generator simplifies the process and offers several important benefits.</p>

  <ul>
    <li><strong>Saves Time:</strong> Generate multiple bio ideas within seconds rather than spending hours brainstorming.</li>

    <li><strong>Improves Creativity:</strong> Receive fresh wording and creative structures that you may not have considered yourself.</li>

    <li><strong>Creates Professional Results:</strong> Generate bios that sound polished and credible.</li>

    <li><strong>Boosts Profile Appeal:</strong> Make your profile more attractive to visitors and potential followers.</li>

    <li><strong>Supports Different Industries:</strong> Works for creators, businesses, professionals, freelancers, artists, and more.</li>

    <li><strong>Fully Customizable:</strong> Every generated bio can be edited and personalized before publishing.</li>
  </ul>

  <h3>Who Should Use This Tool?</h3>

  <p>The Instagram Bio Generator is designed for a wide range of users.</p>

  <ul>
    <li><strong>Personal Users:</strong> Showcase hobbies, interests, personality, and lifestyle.</li>

    <li><strong>Business Owners:</strong> Clearly explain products, services, and brand values.</li>

    <li><strong>Influencers:</strong> Build credibility and encourage profile growth.</li>

    <li><strong>Content Creators:</strong> Present your niche and attract your ideal audience.</li>

    <li><strong>Freelancers:</strong> Highlight expertise and encourage client inquiries.</li>

    <li><strong>Coaches and Consultants:</strong> Demonstrate authority while attracting potential clients.</li>

    <li><strong>Artists and Photographers:</strong> Showcase creative identity and portfolio focus.</li>

    <li><strong>Students and Professionals:</strong> Create a clean and professional online presence.</li>
  </ul>

  <h3>Frequently Asked Questions (FAQ)</h3>

  <p><strong>How many characters can an Instagram bio contain?</strong><br>
  Instagram currently allows up to 150 characters in the bio section. Although the space is limited, strategic formatting, emojis, and line breaks can make your profile look more informative and visually appealing.</p>

  <p><strong>What should a good Instagram bio include?</strong><br>
  A strong bio usually contains information about who you are, what you do, your unique value proposition, relevant keywords, a call-to-action, and optionally a website link or contact information.</p>

  <p><strong>Can I edit the generated bio?</strong><br>
  Yes. Every generated bio is completely customizable. You can change wording, add personal details, remove emojis, update hashtags, or rewrite sections to better match your brand.</p>

  <p><strong>Is this Instagram Bio Generator free?</strong><br>
  Absolutely. The tool is completely free to use without registration, subscriptions, hidden charges, or usage limits.</p>

  <p><strong>Is my information stored?</strong><br>
  No. Your descriptions and generated bios are processed locally and are not stored on our servers, helping maintain privacy and security.</p>

</div>

<!-- SEO Content Section -->
<div class="content-placeholder">

  <h3>Why Choose Our Instagram Bio Generator?</h3>

  <p>There are countless Instagram bio templates available online, but most of them offer generic text that may not accurately represent your personality or brand. Our Instagram Bio Generator takes a more practical approach by helping you create bios based on your specific description, goals, and preferred writing style.</p>

  <p>Instead of copying the same bio used by thousands of other profiles, you can generate unique content that reflects your identity. Whether you want to appear professional, creative, inspiring, humorous, or informative, the tool helps produce bios tailored to your needs.</p>

  <p>Another advantage is flexibility. The generated bios are not fixed templates. They serve as a strong starting point that can be customized further. This allows you to add personal achievements, social proof, contact details, or promotional messages while maintaining a professional appearance.</p>

  <p>Our goal is to help users create Instagram profiles that leave a positive first impression, increase profile engagement, and communicate value clearly.</p>

  <h3>Instagram Bio Best Practices</h3>

  <p>Even the most creative bio can lose effectiveness if it lacks structure and clarity. Following a few proven best practices can significantly improve how visitors respond to your profile.</p>

  <ul>
    <li><strong>Clearly Explain What You Do:</strong> Visitors should understand your purpose within a few seconds of viewing your profile.</li>

    <li><strong>Focus on Benefits:</strong> Instead of only describing yourself, explain how your content, products, or services help others.</li>

    <li><strong>Keep It Easy to Read:</strong> Avoid long blocks of text. Use line breaks, symbols, and spacing to improve readability.</li>

    <li><strong>Use Relevant Keywords:</strong> Include keywords related to your niche to improve discoverability and profile clarity.</li>

    <li><strong>Add a Call-to-Action:</strong> Encourage visitors to take the next step, whether it's following your account, visiting your website, sending a message, or making a purchase.</li>

    <li><strong>Show Personality:</strong> Your bio should feel authentic and reflect your unique style or brand voice.</li>

    <li><strong>Update Regularly:</strong> Refresh your bio whenever your goals, services, promotions, or projects change.</li>

  </ul>

  <h3>Examples of Effective Instagram Bios</h3>

  <p>Here are a few examples of different bio styles to inspire your profile.</p>

  <p><strong>Professional Coach:</strong><br>
  Helping entrepreneurs grow online 📈<br>
  Business Coach & Consultant<br>
  500+ Clients Served<br>
  👇 Book a Strategy Call</p>

  <p><strong>Travel Creator:</strong><br>
  🌎 Exploring hidden destinations<br>
  Travel tips & adventure stories<br>
  New destination every month ✈️<br>
  Follow the journey below 👇</p>

  <p><strong>Photographer:</strong><br>
  📸 Capturing moments that matter<br>
  Portrait | Lifestyle | Events<br>
  Available for bookings<br>
  DM for inquiries</p>

  <p><strong>Small Business Owner:</strong><br>
  Handmade candles crafted with care 🕯️<br>
  Eco-friendly ingredients 🌱<br>
  Worldwide shipping available<br>
  Shop below 👇</p>

  <h3>Common Account Types Supported</h3>

  <p>Our Instagram Bio Generator is designed to support virtually every type of Instagram profile.</p>

  <ul>
    <li><strong>Personal Profiles:</strong> Ideal for sharing personal interests, hobbies, goals, and lifestyle content.</li>

    <li><strong>Business Accounts:</strong> Perfect for local businesses, online stores, agencies, service providers, and startups.</li>

    <li><strong>Influencers:</strong> Create bios that attract followers, sponsors, and collaboration opportunities.</li>

    <li><strong>Content Creators:</strong> Suitable for YouTubers, podcasters, streamers, bloggers, and social media creators.</li>

    <li><strong>Artists:</strong> Showcase artistic identity, creative services, and portfolio information.</li>

    <li><strong>Photographers:</strong> Highlight specialties such as portraits, weddings, nature, travel, or commercial photography.</li>

    <li><strong>Fitness Professionals:</strong> Promote coaching programs, transformation results, and health expertise.</li>

    <li><strong>Educators:</strong> Suitable for teachers, tutors, trainers, mentors, and course creators.</li>

    <li><strong>Freelancers:</strong> Present professional skills and encourage potential clients to connect.</li>

    <li><strong>Consultants:</strong> Establish authority while generating leads and inquiries.</li>

    <li><strong>Restaurants and Food Creators:</strong> Highlight menus, specialties, locations, and food content.</li>

    <li><strong>Travel Brands:</strong> Share travel experiences, services, packages, and destination content.</li>
  </ul>

  <h3>Understanding the Key Elements of an Instagram Bio</h3>

  <p>A successful Instagram bio is made up of several important elements. Understanding each component helps you build a stronger profile.</p>

  <ul>
    <li><strong>Name Field:</strong> The name field is searchable on Instagram. Including relevant keywords can improve discoverability.</li>

    <li><strong>Description:</strong> This is the core of your bio where you explain who you are and what you offer.</li>

    <li><strong>Emojis:</strong> Emojis improve readability, add personality, and help important information stand out.</li>

    <li><strong>Keywords:</strong> Strategic keywords help communicate your niche and expertise.</li>

    <li><strong>Call-to-Action:</strong> Direct visitors toward a specific action such as visiting a website or contacting you.</li>

    <li><strong>Link:</strong> Include your most important website, landing page, portfolio, or online store.</li>

    <li><strong>Contact Information:</strong> Businesses often benefit from providing email addresses or other contact methods.</li>

    <li><strong>Location Information:</strong> Particularly useful for local businesses and service providers.</li>
  </ul>

  <h3>The Importance of Keywords in Instagram Bios</h3>

  <p>Keywords play an important role in helping visitors understand your profile instantly. They can also improve discoverability within Instagram searches.</p>

  <p>For example, a fitness coach may use terms like "Fitness Coach," "Weight Loss," "Personal Trainer," or "Nutrition Guidance." A photographer may include keywords such as "Wedding Photographer," "Portrait Photography," or "Travel Photography."</p>

  <p>The right keywords help your profile appear more relevant while making it easier for your target audience to identify the value you provide.</p>

  <h3>Using Emojis Effectively</h3>

  <p>Emojis are more than decorative symbols. When used correctly, they improve readability and help important points stand out.</p>

  <p>For example:</p>

  <ul>
    <li>📍 Location information</li>
    <li>📧 Contact details</li>
    <li>💼 Professional services</li>
    <li>🎯 Goals and achievements</li>
    <li>👇 Calls-to-action</li>
    <li>🌟 Highlights and accomplishments</li>
  </ul>

  <p>While emojis can enhance a bio, excessive use may make a profile appear cluttered. A balanced approach generally works best.</p>

  <h3>Common Instagram Bio Mistakes to Avoid</h3>

  <p>Many users unknowingly reduce the effectiveness of their profiles by making common mistakes.</p>

  <ul>
    <li>Using vague descriptions that fail to explain what the profile offers.</li>

    <li>Adding too many hashtags, making the bio appear spammy.</li>

    <li>Including excessive emojis that reduce readability.</li>

    <li>Failing to provide a clear call-to-action.</li>

    <li>Writing long sentences that are difficult to scan on mobile devices.</li>

    <li>Leaving outdated information in the bio.</li>

    <li>Ignoring opportunities to showcase achievements or credibility.</li>
  </ul>

  <h3>Advanced Tips for Higher Engagement</h3>

  <p>If you're serious about growing your Instagram presence, consider implementing these advanced strategies.</p>

  <ul>
    <li><strong>Highlight Achievements:</strong> Mention certifications, awards, years of experience, or notable accomplishments.</li>

    <li><strong>Show Social Proof:</strong> Include client counts, project numbers, or audience milestones when relevant.</li>

    <li><strong>Create Curiosity:</strong> Use wording that encourages visitors to explore your content further.</li>

    <li><strong>Use Action-Oriented Language:</strong> Encourage visitors to take immediate action.</li>

    <li><strong>Test Different Variations:</strong> Small changes can significantly impact profile performance.</li>

    <li><strong>Monitor Results:</strong> Track profile visits, follows, and link clicks after updating your bio.</li>
  </ul>

  <h3>Why a Great Bio Can Improve Your Instagram Growth</h3>

  <p>While content remains the most important factor in long-term Instagram success, your bio often determines whether visitors decide to follow you. A compelling bio builds trust, communicates expertise, and encourages engagement.</p>

  <p>Many successful creators and brands regularly optimize their bios to align with changing goals, promotions, and audience expectations. A well-crafted bio can improve conversion rates, increase profile engagement, and strengthen your overall brand image.</p>

  <p>By using a professionally generated bio as a foundation, you can present yourself more effectively and create a stronger first impression for every visitor who discovers your profile.</p>

  <h3>Final Thoughts</h3>

  <p>Your Instagram bio is one of the most valuable pieces of text on your profile. It introduces you to potential followers, customers, collaborators, and clients in just a few lines. A strong bio communicates your purpose, highlights your value, and encourages meaningful action.</p>

  <p>Our free <strong>Instagram Bio Generator</strong> makes the process simple, fast, and effective. Whether you're building a personal brand, growing a business, launching a creator account, or improving an existing profile, this tool helps you create professional and engaging bios in seconds.</p>

  <p>Start generating customized Instagram bios today and discover how the right words can transform your profile into a powerful marketing and branding asset.</p>

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
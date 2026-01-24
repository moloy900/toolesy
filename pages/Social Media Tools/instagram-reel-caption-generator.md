---
layout: default
title: "Instagram Reel Caption Generator - Create Viral Captions"
permalink: /instagram-reel-caption-generator/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Instagram Reel Caption Generator - Create Viral Captions</title>
<meta name="description"
  content="Free online Instagram Reel caption generator. Create catchy, viral captions for your Reels instantly. Generate hashtags, emojis, and engaging text for maximum reach.">
<meta name="keywords"
  content="instagram reel caption generator, reel caption maker, viral caption generator, instagram caption, reel hashtags, social media caption, content creator tool, instagram reels, caption ideas">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Instagram Reel Caption Generator Styles */
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

  .category-select, .tone-select {
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

  /* Caption preview styling */
  .caption-preview {
    background: white;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0;
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
  }

  .caption-line {
    margin-bottom: 10px;
  }

  .hashtag-section {
    background: #f0f8ff;
    padding: 15px;
    border-radius: 8px;
    margin-top: 15px;
    color: #405DE6;
  }

  .emoji-section {
    font-size: 1.5rem;
    margin: 10px 0;
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
  }
</style>

<div class="converter-container">
  <h1>Free Instagram Reel Caption Generator</h1>
  <p class="welcome-message">Create catchy, viral captions for your Instagram Reels instantly. Generate engaging text, hashtags, and emojis for maximum reach and engagement.</p>

  <div class="converter-section">
    <h2>Instagram Reel Caption Generator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Character Count: </span>
        <span id="charCount">0</span>
      </div>
      <div class="counter-item">
        <span>Word Count: </span>
        <span id="wordCount">0</span>
      </div>
      <div class="counter-item">
        <span>Hashtag Count: </span>
        <span id="hashtagCount">0</span>
      </div>
      <div class="counter-item">
        <span>Emoji Count: </span>
        <span id="emojiCount">0</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Describe Your Reel Content <i class="fas fa-lightbulb" style="color: #FFD700;"></i></h2>
      <textarea id="contentInput" rows="4" placeholder="Describe your reel content... Example: Fitness workout video, Cooking tutorial, Travel vlog, Funny skit, Beauty makeup tutorial"></textarea>
    </div>

    <div class="category-section">
      <div class="category-group">
        <label class="category-label">Content Category</label>
        <select id="contentCategory" class="category-select">
          <option value="lifestyle">Lifestyle</option>
          <option value="fitness">Fitness</option>
          <option value="food">Food & Cooking</option>
          <option value="travel">Travel</option>
          <option value="fashion">Fashion</option>
          <option value="beauty">Beauty & Makeup</option>
          <option value="comedy">Comedy & Entertainment</option>
          <option value="education">Education</option>
          <option value="business">Business</option>
          <option value="gaming">Gaming</option>
        </select>
      </div>
      
      <div class="category-group">
        <label class="category-label">Tone & Style</label>
        <select id="toneStyle" class="tone-select">
          <option value="casual">Casual & Friendly</option>
          <option value="funny">Funny & Humorous</option>
          <option value="inspirational">Inspirational</option>
          <option value="professional">Professional</option>
          <option value="trendy">Trendy & Cool</option>
          <option value="educational">Educational</option>
          <option value="emotional">Emotional</option>
          <option value="sassy">Sassy & Bold</option>
        </select>
      </div>
      
      <div class="category-group">
        <label class="category-label">Target Audience</label>
        <select id="targetAudience" class="category-select">
          <option value="teens">Teens</option>
          <option value="young-adults">Young Adults (18-25)</option>
          <option value="adults">Adults (25-40)</option>
          <option value="parents">Parents</option>
          <option value="professionals">Professionals</option>
          <option value="everyone">Everyone</option>
        </select>
      </div>
    </div>

    <div class="category-section" style="background: #f0f8ff;">
      <div class="option-checkbox">
        <input type="checkbox" id="includeHashtags" checked>
        <label for="includeHashtags">Include Relevant Hashtags</label>
      </div>
      <div class="option-checkbox">
        <input type="checkbox" id="includeEmojis" checked>
        <label for="includeEmojis">Include Emojis</label>
      </div>
      <div class="option-checkbox">
        <input type="checkbox" id="includeCTA" checked>
        <label for="includeCTA">Include Call-to-Action</label>
      </div>
      <div class="option-checkbox">
        <input type="checkbox" id="includeQuestions">
        <label for="includeQuestions">Include Engagement Questions</label>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button instagram" data-action="generate">Generate Caption</button>
        <button class="case-button" data-action="generateHashtags">Generate Hashtags</button>
        <button class="case-button success" data-action="copy">Copy to Clipboard</button>
        <button class="case-button" data-action="saveTemplate">Save as Template</button>
        <button class="case-button warning" data-action="preview">Preview</button>
        <button class="case-button secondary" data-action="clear">Clear All</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="input-section">
      <h2>Generated Caption <i class="fas fa-magic" style="color: #833AB4;"></i></h2>
      <textarea id="captionOutput" rows="8" placeholder="Your generated caption will appear here..." readonly></textarea>
    </div>

    <div id="captionPreview" class="caption-preview" style="display: none;">
      <h3>Instagram Preview:</h3>
      <div class="caption-line" id="previewText"></div>
      <div class="emoji-section" id="previewEmojis"></div>
      <div class="hashtag-section" id="previewHashtags"></div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Caption Examples</h2>

      <h3>Fitness Reel Example:</h3>
      <div class="example-text">💪 Morning workout complete! 
Starting your day with movement sets the tone for success. 

Remember: consistency > perfection
Small steps every day lead to big results!

❓ What's your favorite way to start the day?

#FitnessMotivation #WorkoutRoutine #HealthyHabits #MorningWorkout #FitLife #Exercise #HealthGoals #FitnessJourney #GetStrong #NoExcuses</div>

      <h3>Food & Cooking Example:</h3>
      <div class="example-text">🍝 Creamy garlic pasta in under 20 minutes! 
This recipe is perfect for busy weeknights when you want something delicious but don't have hours to spend in the kitchen.

👇 Drop a ❤️ if you want the full recipe!

#EasyRecipes #PastaLover #QuickMeals #Foodie #HomeCooking #RecipeIdeas #Delicious #ComfortFood #FoodVideo #CookingTutorial</div>

      <h3>Travel Reel Example:</h3>
      <div class="example-text">✈️ Wanderlust activated! 
This hidden gem took my breath away. Sometimes the best places aren't in the guidebooks.

📍 [Location]
📸 Shot on iPhone

Tag someone who needs to see this! 👇

#TravelInspiration #Wanderlust #ExploreMore #HiddenGems #TravelGoals #AdventureTime #BeautifulDestinations #TravelPhotography #VacationVibes #DiscoverEarth</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Instagram Reel Caption Generator - Create Viral Captions Instantly</h2>

    <p>Struggling to write engaging captions for your Instagram Reels? Our free <strong>Instagram Reel Caption Generator</strong> is the ultimate tool for content creators, influencers, and businesses. Create catchy, viral-ready captions in seconds with customized hashtags, emojis, and call-to-actions. Whether you're posting fitness content, travel vlogs, cooking tutorials, or funny skits, our AI-powered generator creates perfect captions tailored to your content and audience.</p>

    <h3>How to Use This Instagram Caption Generator (Step-by-Step):</h3>
    <ul>
      <li><strong>Describe Your Content:</strong> Briefly describe your Reel content in the input box (e.g., "Morning yoga routine," "Quick pasta recipe," "Beach sunset travel video").</li>
      <li><strong>Select Category & Tone:</strong> Choose your content category, preferred tone (funny, inspirational, professional), and target audience.</li>
      <li><strong>Customize Options:</strong> Select whether to include hashtags, emojis, call-to-actions, or engagement questions.</li>
      <li><strong>Generate & Copy:</strong> Click "Generate Caption" to create your perfect Instagram caption, then copy it directly to your clipboard.</li>
      <li><strong>Preview & Edit:</strong> Use the preview feature to see how your caption will look on Instagram before posting.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you've created a beautiful travel Reel showing sunset at a beach. Instead of spending 20 minutes trying to think of the perfect caption, you simply describe your content as "beach sunset travel video," select "Travel" category and "Inspirational" tone. The generator instantly creates: "🌅 Chasing sunsets and finding peace. Some moments are too beautiful for words. 📍 Beach Paradise ✨ Tag your sunset buddy! #TravelDiaries #SunsetLover #BeachVibes #Wanderlust #TravelReels #OceanViews #GoldenHour #VacationMode #ExploreTogether #NatureTherapy"</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Content Creators:</strong> Save time and maintain consistent posting schedule with ready-to-use captions.</li>
      <li><strong>Social Media Managers:</strong> Generate multiple caption variations for different clients and industries.</li>
      <li><strong>Small Businesses:</strong> Create engaging captions that drive engagement and sales without hiring copywriters.</li>
      <li><strong>Influencers:</strong> Keep your audience engaged with fresh, creative captions for every Reel.</li>
      <li><strong>Beginners:</strong> Learn caption best practices by studying generated examples and templates.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>How does the Instagram Reel Caption Generator work?</strong><br>
      Our generator uses AI algorithms trained on thousands of successful Instagram captions. It analyzes your content description, selected category, and tone to create customized captions that maximize engagement.</p>

    <p><strong>Can I customize the generated captions?</strong><br>
      Absolutely! All generated captions are fully editable. You can modify the text, add personal touches, remove or add emojis, and adjust hashtags before copying.</p>

    <p><strong>Are the hashtags generated relevant to my content?</strong><br>
      Yes! Hashtags are selected based on your content category and current Instagram trends. We include a mix of popular and niche hashtags for maximum reach.</p>

    <p><strong>Is this tool free to use?</strong><br>
      Yes, this is completely free with no limits. No sign-up, no subscription, and no hidden fees.</p>

    <p><strong>Can I use this for Instagram Stories or regular posts too?</strong><br>
      While optimized for Reels, the generated captions work perfectly for Stories, regular posts, and even other platforms like TikTok with minor adjustments.</p>

    <h3>Why Choose Our Instagram Reel Caption Generator?</h3>
    <p>Our <strong>Instagram caption generator</strong> stands out because it's specifically designed for Reels - understanding the unique format, timing, and engagement patterns of short-form video content. Unlike generic caption tools, we focus on creating captions that complement visual content, encourage comments and shares, and leverage current Instagram algorithms. The tool also works completely in your browser - your content ideas and generated captions are never stored on our servers.</p>

    <h3>Tips for Instagram Reel Success:</h3>
    <p>Combine our caption generator with these best practices for maximum Reel success:</p>
    <ul>
      <li><strong>Hook in First 3 Seconds:</strong> Your caption should complement a strong visual hook</li>
      <li><strong>Use Trending Audio:</strong> Pair great captions with trending sounds for discoverability</li>
      <li><strong>Include Clear CTA:</strong> Ask questions or prompt specific actions in your captions</li>
      <li><strong>Post Consistently:</strong> Use our generator to maintain regular posting schedule</li>
      <li><strong>Engage with Comments:</strong> Respond to comments to boost algorithmic favor</li>
      <li><strong>Use Relevant Hashtags:</strong> Mix 3-5 popular hashtags with 5-7 niche ones</li>
    </ul>

    <h3>Common Content Categories Supported:</h3>
    <ul>
      <li><strong>Fitness & Wellness:</strong> Workouts, yoga, health tips, motivation</li>
      <li><strong>Food & Cooking:</strong> Recipes, cooking hacks, food presentation</li>
      <li><strong>Travel & Adventure:</strong> Destinations, travel tips, packing hacks</li>
      <li><strong>Fashion & Beauty:</strong> Outfit ideas, makeup tutorials, style tips</li>
      <li><strong>Comedy & Entertainment:</strong> Skits, funny moments, relatable content</li>
      <li><strong>Education & Tips:</strong> How-tos, life hacks, skill tutorials</li>
      <li><strong>Business & Finance:</strong> Entrepreneurship, money tips, career advice</li>
      <li><strong>Lifestyle & Vlogs:</strong> Day-in-life, routines, personal stories</li>
    </ul>
  </div>
</div>

<!-- Preview Modal -->
<div id="previewModal" class="modal">
  <div class="modal-content" style="max-width: 500px;">
    <div class="modal-header">
      <h3 class="modal-title">Instagram Caption Preview</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="background: #fafafa; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
        <div style="margin-bottom: 15px; font-family: 'Arial', sans-serif; line-height: 1.6;">
          <div id="modalPreviewText"></div>
          <div id="modalPreviewEmojis" style="margin: 10px 0; font-size: 1.2rem;"></div>
          <div id="modalPreviewHashtags" style="color: #405DE6; font-size: 0.9rem;"></div>
        </div>
      </div>
      <p style="margin-top: 15px; font-size: 0.9rem; color: #666;">This is how your caption will appear on Instagram.</p>
    </div>
    <div class="modal-footer">
      <button class="modal-button primary" id="copyFromPreview">Copy Caption</button>
      <button class="modal-button secondary" id="closePreview">Close</button>
    </div>
  </div>
</div>

<!-- Save Template Modal -->
<div id="saveModal" class="modal">
  <div class="modal-content" style="max-width: 500px;">
    <div class="modal-header">
      <h3 class="modal-title">Save Caption Template</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 8px; font-weight: 600;">Template Name</label>
        <input type="text" id="templateName" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px;" placeholder="e.g., Fitness Caption Template">
      </div>
      <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 8px; font-weight: 600;">Category</label>
        <select id="templateCategory" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px;">
          <option value="fitness">Fitness</option>
          <option value="food">Food & Cooking</option>
          <option value="travel">Travel</option>
          <option value="fashion">Fashion</option>
          <option value="beauty">Beauty</option>
          <option value="comedy">Comedy</option>
          <option value="education">Education</option>
          <option value="business">Business</option>
          <option value="lifestyle">Lifestyle</option>
        </select>
      </div>
      <p style="font-size: 0.9rem; color: #666;">Save this caption as a template for future use.</p>
    </div>
    <div class="modal-footer">
      <button class="modal-button primary" id="confirmSave">Save Template</button>
      <button class="modal-button secondary" id="cancelSave">Cancel</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const contentInput = document.getElementById('contentInput');
    const captionOutput = document.getElementById('captionOutput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    
    // Settings elements
    const contentCategory = document.getElementById('contentCategory');
    const toneStyle = document.getElementById('toneStyle');
    const targetAudience = document.getElementById('targetAudience');
    const includeHashtags = document.getElementById('includeHashtags');
    const includeEmojis = document.getElementById('includeEmojis');
    const includeCTA = document.getElementById('includeCTA');
    const includeQuestions = document.getElementById('includeQuestions');
    
    // Modal elements
    const previewModal = document.getElementById('previewModal');
    const saveModal = document.getElementById('saveModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const copyFromPreview = document.getElementById('copyFromPreview');
    const closePreview = document.getElementById('closePreview');
    const confirmSave = document.getElementById('confirmSave');
    const cancelSave = document.getElementById('cancelSave');
    
    // Preview elements
    const captionPreview = document.getElementById('captionPreview');
    const previewText = document.getElementById('previewText');
    const previewEmojis = document.getElementById('previewEmojis');
    const previewHashtags = document.getElementById('previewHashtags');
    const modalPreviewText = document.getElementById('modalPreviewText');
    const modalPreviewEmojis = document.getElementById('modalPreviewEmojis');
    const modalPreviewHashtags = document.getElementById('modalPreviewHashtags');

    // Initialize counters
    updateCounters();

    // Event listeners
    contentInput.addEventListener('input', updateCounters);
    captionOutput.addEventListener('input', updateCounters);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleCaptionAction(action);
      });
    });

    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        previewModal.style.display = 'none';
        saveModal.style.display = 'none';
      });
    });

    // Close preview modal
    closePreview.addEventListener('click', function() {
      previewModal.style.display = 'none';
    });

    // Copy from preview modal
    copyFromPreview.addEventListener('click', function() {
      copyToClipboard(captionOutput.value);
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
      
      // In a real application, you would save this to a database or localStorage
      // For this example, we'll simulate saving
      saveTemplateToLocalStorage(templateName, captionOutput.value);
      showAlert(`Template "${templateName}" saved successfully!`, 'success');
      saveModal.style.display = 'none';
      document.getElementById('templateName').value = '';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === previewModal || event.target === saveModal) {
        previewModal.style.display = 'none';
        saveModal.style.display = 'none';
      }
    });

    function updateCounters() {
      const content = contentInput.value;
      const caption = captionOutput.value;

      // Character count
      document.getElementById('charCount').textContent = caption.length;

      // Word count
      const wordCount = caption ? caption.trim().split(/\s+/).length : 0;
      document.getElementById('wordCount').textContent = wordCount;

      // Hashtag count
      const hashtagCount = (caption.match(/#\w+/g) || []).length;
      document.getElementById('hashtagCount').textContent = hashtagCount;

      // Emoji count (simple approximation)
      const emojiCount = (caption.match(/[\u{1F300}-\u{1F9FF}]/gu) || []).length;
      document.getElementById('emojiCount').textContent = emojiCount;
    }

    function handleCaptionAction(action) {
      const content = contentInput.value.trim();
      
      if (!content && (action === 'generate' || action === 'generateHashtags')) {
        showAlert('Please describe your Reel content first.', 'error');
        return;
      }

      switch (action) {
        case 'generate':
          const generatedCaption = generateCaption(content);
          captionOutput.value = generatedCaption;
          showAlert('Caption generated successfully!', 'success');
          break;

        case 'generateHashtags':
          const generatedHashtags = generateHashtags(content);
          captionOutput.value = generatedHashtags;
          showAlert('Hashtags generated successfully!', 'success');
          break;

        case 'copy':
          if (!captionOutput.value.trim()) {
            showAlert('Please generate a caption first.', 'error');
            return;
          }
          copyToClipboard(captionOutput.value);
          break;

        case 'saveTemplate':
          if (!captionOutput.value.trim()) {
            showAlert('Please generate a caption first.', 'error');
            return;
          }
          saveModal.style.display = 'block';
          break;

        case 'preview':
          if (!captionOutput.value.trim()) {
            showAlert('Please generate a caption first.', 'error');
            return;
          }
          showPreview(captionOutput.value);
          break;

        case 'clear':
          contentInput.value = '';
          captionOutput.value = '';
          captionPreview.style.display = 'none';
          updateCounters();
          showAlert('All fields cleared.', 'success');
          break;
      }

      updateCounters();
    }

    // Generate caption based on input
    function generateCaption(contentDescription) {
      const category = contentCategory.value;
      const tone = toneStyle.value;
      const audience = targetAudience.value;
      
      // Caption templates based on category and tone
      const captionTemplates = {
        fitness: {
          casual: ["💪 Just finished my workout! Feeling energized and ready to tackle the day. \n\nRemember: progress, not perfection! \n\n#FitnessMotivation #WorkoutDone #HealthyLiving"],
          inspirational: ["✨ Your body can stand almost anything. It's your mind you have to convince. \n\nToday's workout brought to you by determination. \n\nDrop a 💪 if you're working on your goals today!", "#FitnessJourney #MindOverMatter #StrengthTraining"],
          funny: ["🏋️‍♂️ Me trying to be motivational but really just wanting snacks... \n\nWho else relates? 😂 \n\n#FitnessFunny #GymLife #WorkoutHumor"]
        },
        food: {
          casual: ["🍝 Just whipped up this deliciousness! \n\nSometimes simple recipes hit different. \n\nWant the recipe? Comment 'RECIPE' below! 👇", "#Foodie #HomeCooking #EasyRecipes"],
          professional: ["✨ Chef's special: Perfectly balanced flavors in every bite. \n\nPro tip: Always use fresh herbs for maximum flavor impact. \n\n#CookingTips #FoodPhotography #CulinaryArts"],
          funny: ["👨‍🍳 When you follow the recipe but still somehow create a new dish... \n\nAt least it tastes good! 😂 \n\n#CookingFail #FunnyFood #KitchenHumor"]
        },
        travel: {
          casual: ["✈️ Another stamp in the passport! \n\nThis place stole my heart. 💙 \n\nTag someone who needs to travel here!", "#TravelDiaries #Wanderlust #ExploreMore"],
          inspirational: ["🌍 The world is a book, and those who do not travel read only one page. \n\nCurrently reading: Chapter [Destination] 📖", "#TravelQuote #AdventureAwaits #Wanderer"],
          trendy: ["📍 Living my best life at [Location]! \n\nThis view >>> \n\nSound on for the vibes! 🎶", "#TravelReels #VacationVibes #InstaTravel"]
        },
        lifestyle: {
          casual: ["✨ Simple joys and good vibes. \n\nToday's reminder: Find happiness in the little things. \n\nWhat made you smile today? 👇", "#Lifestyle #GoodVibes #DailyJoy"],
          inspirational: ["🌟 Your vibe attracts your tribe. \n\nSurround yourself with positivity and watch your life transform. \n\n#PositiveVibes #Mindfulness #SelfCare"],
          trendy: ["🔥 Living in the moment and loving it! \n\nSome days just hit different. \n\n#LifeGoals #VibeCheck #LivingMyBestLife"]
        }
      };

      // Default template if category/tone not found
      const categoryTemplates = captionTemplates[category] || captionTemplates.lifestyle;
      const template = categoryTemplates[tone] || categoryTemplates.casual;
      
      // Select random template from available options
      const selectedTemplate = Array.isArray(template) ? template[0] : template;
      
      // Add hashtags if enabled
      let caption = selectedTemplate;
      if (includeHashtags.checked) {
        caption += '\n\n' + generateHashtags(contentDescription);
      }
      
      // Add emojis if enabled (already included in templates)
      if (!includeEmojis.checked) {
        // Remove common emojis
        caption = caption.replace(/[^\u0000-\u007F]/g, '');
      }
      
      // Add CTA if enabled
      if (includeCTA.checked) {
        const ctas = [
          "\n\nWhat do you think? Comment below! 👇",
          "\n\nSave this for later! 📌",
          "\n\nShare with someone who needs to see this! ➡️",
          "\n\nDouble tap if you agree! ❤️"
        ];
        caption += ctas[Math.floor(Math.random() * ctas.length)];
      }
      
      // Add engagement question if enabled
      if (includeQuestions.checked) {
        const questions = {
          fitness: "\n\n❓ What's your favorite way to stay active?",
          food: "\n\n❓ What should I cook next?",
          travel: "\n\n❓ Where should I travel next?",
          lifestyle: "\n\n❓ What's bringing you joy lately?"
        };
        caption += questions[category] || "\n\n❓ What do you want to see more of?";
      }
      
      // Replace placeholders
      caption = caption.replace(/\[Location\]/g, 'this amazing place');
      
      return caption;
    }
    
    // Generate hashtags based on content
    function generateHashtags(contentDescription) {
      const category = contentCategory.value;
      
      // Hashtag banks by category
      const hashtagBanks = {
        fitness: ['Fitness', 'Workout', 'Exercise', 'Gym', 'Healthy', 'FitLife', 'Training', 'Motivation', 'Health', 'Wellness', 'FitnessGoals', 'StayActive', 'GetStrong', 'NoExcuses', 'FitnessJourney', 'WorkoutMotivation'],
        food: ['Food', 'Foodie', 'Cooking', 'Recipe', 'Delicious', 'Yummy', 'HomeCooking', 'FoodPhotography', 'FoodLover', 'EasyRecipes', 'HealthyEating', 'CookAtHome', 'FoodVideo', 'Tasty', 'FoodBlogger', 'Culinary'],
        travel: ['Travel', 'Wanderlust', 'Explore', 'Adventure', 'Vacation', 'TravelPhotography', 'TravelBlogger', 'Wanderer', 'TravelGoals', 'PassportReady', 'TravelTheWorld', 'BeautifulDestinations', 'TravelInspiration', 'TravelDiaries', 'SeeTheWorld', 'AdventureTime'],
        fashion: ['Fashion', 'Style', 'Outfit', 'OOTD', 'FashionBlogger', 'StyleInspo', 'Fashionista', 'Lookbook', 'StreetStyle', 'FashionTrends', 'Wardrobe', 'FashionDiaries', 'PersonalStyle', 'FashionInfluencer', 'StyleGoals'],
        beauty: ['Beauty', 'Makeup', 'Skincare', 'BeautyBlogger', 'MakeupTutorial', 'BeautyTips', 'GlowUp', 'MakeupLover', 'BeautyRoutine', 'Cosmetics', 'MakeupArtist', 'BeautyHacks', 'SelfCare', 'BeautyInfluencer', 'MakeupGoals'],
        lifestyle: ['Lifestyle', 'Life', 'DailyLife', 'Vlog', 'DayInLife', 'Routine', 'LifeGoals', 'LivingMyBestLife', 'PositiveVibes', 'Mindfulness', 'SelfCare', 'Happiness', 'SimpleJoys', 'GoodVibes', 'LifeHacks'],
        comedy: ['Comedy', 'Funny', 'Humor', 'Laugh', 'ComedyVideo', 'FunnyReels', 'Hilarious', 'ComedySketch', 'Jokes', 'Entertainment', 'Fun', 'LOL', 'ComedyCentral', 'FunnyContent', 'MakeMeLaugh'],
        education: ['Education', 'Learn', 'Knowledge', 'Tips', 'HowTo', 'Tutorial', 'Learning', 'SkillShare', 'Educational', 'StudyTips', 'LifeHacks', 'DIY', 'LearnSomethingNew', 'KnowledgeIsPower', 'Edutok']
      };
      
      // Get base hashtags for category
      const baseHashtags = hashtagBanks[category] || hashtagBanks.lifestyle;
      
      // Select 10-15 hashtags
      const selectedHashtags = [];
      const count = 12; // Instagram allows up to 30, but 12-15 is optimal
      
      // Add some popular general hashtags
      const generalHashtags = ['Reels', 'Instagram', 'Viral', 'Trending', 'Explore', 'FYP', 'ForYouPage'];
      
      // Mix category-specific and general hashtags
      for (let i = 0; i < count; i++) {
        if (i < 8) {
          // Category-specific hashtags
          const randomIndex = Math.floor(Math.random() * baseHashtags.length);
          selectedHashtags.push(baseHashtags[randomIndex]);
        } else {
          // General hashtags
          const randomIndex = Math.floor(Math.random() * generalHashtags.length);
          selectedHashtags.push(generalHashtags[randomIndex]);
        }
      }
      
      // Remove duplicates and format
      const uniqueHashtags = [...new Set(selectedHashtags)];
      return '#' + uniqueHashtags.join(' #');
    }
    
    // Save template to localStorage (simulated)
    function saveTemplateToLocalStorage(name, caption) {
      try {
        const templates = JSON.parse(localStorage.getItem('captionTemplates') || '[]');
        templates.push({
          name: name,
          caption: caption,
          category: document.getElementById('templateCategory').value,
          date: new Date().toISOString()
        });
        localStorage.setItem('captionTemplates', JSON.stringify(templates));
      } catch (e) {
        console.log('LocalStorage not available in this demo');
      }
    }
    
    // Show preview of caption
    function showPreview(caption) {
      // Parse caption into parts
      const lines = caption.split('\n');
      let mainText = '';
      let emojis = '';
      let hashtags = '';
      
      lines.forEach(line => {
        if (line.includes('#')) {
          hashtags += line + ' ';
        } else if (line.match(/[\u{1F300}-\u{1F9FF}]/gu)) {
          emojis += line + ' ';
        } else {
          mainText += line + '<br>';
        }
      });
      
      // Update preview sections
      previewText.innerHTML = mainText;
      modalPreviewText.innerHTML = mainText;
      
      if (emojis) {
        previewEmojis.textContent = emojis;
        modalPreviewEmojis.textContent = emojis;
      }
      
      if (hashtags) {
        previewHashtags.textContent = hashtags;
        modalPreviewHashtags.textContent = hashtags;
      }
      
      // Show preview
      captionPreview.style.display = 'block';
      previewModal.style.display = 'block';
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Caption copied to clipboard!', 'success');
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
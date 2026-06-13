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
  <h2>Free Instagram Reel Caption Generator – Create Engaging Captions in Seconds</h2>

  <p>Creating an amazing Instagram Reel is only half the job. Even if your video looks great and uses trending audio, a weak caption can reduce engagement and limit your reach. Captions provide context, encourage interaction, and help viewers connect with your content. That's why having the right caption can make a significant difference in how your Reel performs.</p>

  <p>Our free <strong>Instagram Reel Caption Generator</strong> helps content creators, influencers, marketers, small business owners, and everyday Instagram users create compelling captions within seconds. Instead of spending valuable time staring at a blank screen trying to think of something creative, you can generate engaging captions that match your content style, audience, and goals.</p>

  <p>Whether you're sharing a fitness transformation, travel adventure, recipe tutorial, educational tip, comedy skit, fashion inspiration, or daily lifestyle vlog, this tool helps you create captions that capture attention and encourage engagement.</p>

  <h3>How to Use This Instagram Reel Caption Generator (Step-by-Step)</h3>

  <p>The tool is designed to be simple, fast, and beginner-friendly. You don't need copywriting experience or social media expertise to create high-quality captions.</p>

  <ul>
    <li><strong>Describe Your Reel:</strong> Enter a short description of your video. For example, "easy home workout," "street food review," or "morning productivity routine."</li>

    <li><strong>Select Your Category:</strong> Choose the category that best matches your content. This helps the generator understand the context of your Reel.</li>

    <li><strong>Choose a Tone:</strong> Select a writing style such as inspirational, funny, professional, educational, casual, or motivational.</li>

    <li><strong>Add Optional Features:</strong> Include hashtags, emojis, engagement questions, call-to-actions, or location references based on your preferences.</li>

    <li><strong>Generate Your Caption:</strong> Click the generate button and instantly receive a customized caption tailored to your content.</li>

    <li><strong>Edit and Personalize:</strong> Make adjustments if needed to better reflect your personality, brand voice, or audience.</li>

    <li><strong>Copy and Post:</strong> Copy the caption and use it directly on Instagram Reels, Stories, or feed posts.</li>
  </ul>

  <h3>Why Captions Matter for Instagram Reels</h3>

  <p>Many creators focus entirely on visuals and audio while overlooking captions. However, captions play an important role in helping viewers understand your message and encouraging them to interact with your content.</p>

  <p>A well-written caption can increase watch time, boost comments, encourage shares, and create stronger connections with your audience. It can also provide additional context that isn't fully explained within the video itself.</p>

  <p>For example, a travel Reel may show beautiful scenery, but the caption can tell the story behind the destination, share useful travel tips, or encourage viewers to share their own experiences.</p>

  <p>Similarly, a fitness Reel may demonstrate exercises, while the caption provides motivation, instructions, or encouragement that inspires viewers to take action.</p>

  <h3>Real-Life Example: Travel Content Creator</h3>

  <p>Imagine you've created a Reel featuring a stunning sunset on a tropical beach. The visuals are beautiful, but you're struggling to write a caption that captures the moment.</p>

  <p>Instead of spending twenty minutes brainstorming ideas, you enter a simple description such as "sunset beach travel Reel" and choose the Travel category with an Inspirational tone.</p>

  <p>The generator might create a caption like:</p>

  <p>🌅 Watching the sun disappear beyond the horizon reminds us how beautiful simple moments can be. Sometimes the best memories aren't planned—they just happen. ✨ Tag someone you'd love to watch this sunset with. 🌊 #TravelMoments #SunsetViews #BeachLife #TravelInspiration #OceanVibes #WanderMore #NatureLovers #ExploreTheWorld</p>

  <p>This type of caption combines storytelling, emotion, engagement prompts, emojis, and relevant hashtags to create a complete posting package.</p>

  <h3>Benefits of Using an Instagram Reel Caption Generator</h3>

  <ul>
    <li><strong>Save Valuable Time:</strong> Stop spending unnecessary time trying to come up with fresh caption ideas for every Reel.</li>

    <li><strong>Maintain Consistency:</strong> Keep a consistent posting schedule without creative burnout.</li>

    <li><strong>Improve Engagement:</strong> Generate captions designed to encourage likes, comments, shares, and saves.</li>

    <li><strong>Overcome Writer's Block:</strong> Never struggle with blank captions again.</li>

    <li><strong>Create Professional Content:</strong> Produce captions that feel polished and audience-focused.</li>

    <li><strong>Generate Multiple Variations:</strong> Test different caption styles to discover what resonates best with your followers.</li>
  </ul>

  <h3>Who Should Use This Tool?</h3>

  <p>The Instagram Reel Caption Generator is designed for a wide variety of users.</p>

  <ul>
    <li><strong>Content Creators:</strong> Create engaging captions quickly while focusing more energy on content production.</li>

    <li><strong>Influencers:</strong> Maintain audience engagement with fresh and creative caption ideas.</li>

    <li><strong>Small Businesses:</strong> Promote products and services through compelling captions that encourage action.</li>

    <li><strong>Social Media Managers:</strong> Generate caption variations for multiple brands and campaigns.</li>

    <li><strong>Coaches and Educators:</strong> Share valuable knowledge while keeping content engaging and easy to understand.</li>

    <li><strong>Beginners:</strong> Learn caption-writing techniques by studying generated examples and structures.</li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p><strong>How does the Instagram Reel Caption Generator work?</strong><br>
  The generator analyzes your content description, selected category, and preferred tone to create captions that match your goals and audience.</p>

  <p><strong>Can I edit generated captions?</strong><br>
  Yes. Every generated caption is fully customizable. You can add personal stories, adjust wording, change emojis, or include additional information.</p>

  <p><strong>Will the captions include hashtags?</strong><br>
  If enabled, the tool can generate relevant hashtags that align with your content category and posting goals.</p>

  <p><strong>Is the tool free?</strong><br>
  Yes. The Instagram Reel Caption Generator is completely free to use with no sign-up requirements or subscription fees.</p>

  <p><strong>Can I use the captions on other platforms?</strong><br>
  Absolutely. The captions can be adapted for TikTok, Facebook Reels, YouTube Shorts, Pinterest Idea Pins, and other social media platforms.</p>

<h3>Different Types of Instagram Reel Captions</h3>

<p>Not every Reel requires the same type of caption. The best captions are those that match both the content and the audience. Understanding different caption styles can help you create more engaging and effective posts.</p>

<ul>
  <li><strong>Inspirational Captions:</strong> Perfect for fitness journeys, travel adventures, personal growth stories, and motivational content. These captions encourage viewers and create emotional connections.</li>

  <li><strong>Funny Captions:</strong> Ideal for comedy videos, relatable situations, and entertaining content. Humor often increases shares and saves because people enjoy sharing content that makes them laugh.</li>

  <li><strong>Educational Captions:</strong> Useful for tutorials, tips, how-to videos, and informative content. These captions often provide additional value beyond what appears in the Reel itself.</li>

  <li><strong>Storytelling Captions:</strong> Great for travel creators, lifestyle influencers, and personal brands. Stories help audiences connect emotionally with your content.</li>

  <li><strong>Promotional Captions:</strong> Designed for businesses promoting products, services, events, or special offers. These captions typically include strong calls-to-action.</li>

  <li><strong>Question-Based Captions:</strong> Encourage comments and discussions by asking viewers to share their opinions, experiences, or recommendations.</li>
</ul>

<h3>How Great Captions Improve Engagement</h3>

<p>Instagram's algorithm considers engagement signals such as likes, comments, shares, saves, and watch time. While the Reel itself plays a major role, the caption often influences whether someone interacts with your content.</p>

<p>A strong caption can encourage viewers to leave comments, answer questions, share opinions, tag friends, or save the post for later. These actions signal to Instagram that your content is valuable, which may help increase its reach.</p>

<p>For example, instead of simply writing "Beautiful sunset," a more engaging caption might ask, "What's the most beautiful sunset you've ever seen?" This small change creates an opportunity for conversation.</p>

<h3>Instagram Reel Caption Ideas for Different Niches</h3>

<p>Different content categories benefit from different caption approaches. Here are some examples.</p>

<h4>Fitness & Wellness</h4>

<p>Fitness captions often focus on motivation, progress, consistency, and healthy habits. A good caption might encourage viewers to stay committed to their goals or share their own fitness journey.</p>

<h4>Food & Cooking</h4>

<p>Recipe creators can use captions to list ingredients, share cooking tips, or ask followers about their favorite dishes. This creates additional value and encourages engagement.</p>

<h4>Travel & Adventure</h4>

<p>Travel captions work best when they tell a story or share a memorable experience. Adding personal insights often makes travel content more relatable and authentic.</p>

<h4>Fashion & Beauty</h4>

<p>Fashion creators can discuss styling choices, trends, favorite products, or confidence tips while encouraging audience participation.</p>

<h4>Business & Entrepreneurship</h4>

<p>Business-focused Reels often perform well when captions provide actionable advice, practical lessons, or insights that viewers can immediately apply.</p>

<h3>Why Calls-to-Action Matter</h3>

<p>A call-to-action (CTA) is a simple instruction that encourages viewers to take a specific action. Effective CTAs help increase engagement and improve overall Reel performance.</p>

<p>Examples of strong CTAs include:</p>

<ul>
  <li>What do you think?</li>
  <li>Tag a friend who needs to see this.</li>
  <li>Save this for later.</li>
  <li>Share your experience below.</li>
  <li>Which option would you choose?</li>
  <li>Follow for more tips.</li>
</ul>

<p>Adding a natural CTA can significantly increase comments, shares, and saves.</p>

<h3>Using Emojis Effectively</h3>

<p>Emojis can make captions more visually appealing and easier to read. They help break up text and add personality without requiring additional words.</p>

<p>However, balance is important. Too many emojis can make captions look cluttered and difficult to understand. The most effective captions use emojis strategically to highlight important points and complement the message.</p>

<p>For example, a travel caption may use 🌍 ✈️ 🌅, while a fitness caption may use 💪 🏋️ 🔥. Choosing emojis that match the content helps maintain relevance and professionalism.</p>

<h3>Should You Use Long or Short Captions?</h3>

<p>Both long and short captions can perform well depending on the content and audience.</p>

<p>Short captions are quick to read and often work well for entertaining Reels, comedy content, and highly visual videos.</p>

<p>Long captions can be effective when telling stories, sharing educational information, or providing detailed explanations. Many successful creators use longer captions to build stronger connections with their audience.</p>

<p>The key is choosing a caption length that supports the content rather than following a fixed rule.</p>

<h3>How Businesses Can Benefit from Better Captions</h3>

<p>Businesses often underestimate the power of captions. A well-written caption can educate customers, build trust, highlight product benefits, and encourage purchases.</p>

<p>For example, a skincare brand may use captions to explain ingredients and benefits, while a restaurant may use captions to showcase menu items and encourage reservations.</p>

<p>The right caption helps transform viewers into engaged customers by creating a stronger connection with the brand.</p>


<h3>Common Caption Mistakes to Avoid</h3>

<p>Even great Reels can underperform when paired with weak captions. Avoiding common mistakes can help improve engagement and audience response.</p>

<ul>
  <li>Writing captions that don't match the video content.</li>
  <li>Using excessive hashtags that feel spammy.</li>
  <li>Ignoring calls-to-action.</li>
  <li>Overusing emojis.</li>
  <li>Posting generic captions without personality.</li>
  <li>Failing to encourage audience interaction.</li>
</ul>

<p>Authenticity and relevance are often more effective than trying to sound overly promotional or trendy.</p>

<h3>Instagram Reel Caption Writing Tips</h3>

<p>Creating high-performing captions doesn't have to be complicated. Following a few simple principles can dramatically improve results.</p>

<ul>
  <li><strong>Start Strong:</strong> Capture attention with an interesting first sentence.</li>

  <li><strong>Keep It Relevant:</strong> Make sure the caption supports and enhances the Reel.</li>

  <li><strong>Add Personality:</strong> Let your unique voice and style come through.</li>

  <li><strong>Encourage Interaction:</strong> Ask questions or invite opinions.</li>

  <li><strong>Provide Value:</strong> Share useful tips, insights, or experiences.</li>

  <li><strong>End with Action:</strong> Include a clear and natural call-to-action.</li>
</ul>

<h3>Popular Content Categories Supported</h3>

<p>Our Instagram Reel Caption Generator supports a wide range of content niches and industries.</p>

<ul>
  <li><strong>Fitness & Wellness:</strong> Workouts, nutrition advice, wellness routines, motivation, and healthy living.</li>

  <li><strong>Food & Cooking:</strong> Recipes, restaurant reviews, cooking tutorials, meal preparation, and food photography.</li>

  <li><strong>Travel & Adventure:</strong> Travel experiences, destination guides, packing tips, and adventure stories.</li>

  <li><strong>Fashion & Beauty:</strong> Outfit inspiration, style advice, makeup tutorials, and product recommendations.</li>

  <li><strong>Comedy & Entertainment:</strong> Funny videos, relatable moments, skits, and entertainment content.</li>

  <li><strong>Education & Tutorials:</strong> Learning resources, skill development, tips, and instructional content.</li>

  <li><strong>Business & Finance:</strong> Entrepreneurship advice, productivity tips, career guidance, and financial education.</li>

  <li><strong>Lifestyle & Vlogs:</strong> Daily routines, personal experiences, family moments, and life updates.</li>
</ul>

<h3>Building a Consistent Instagram Presence</h3>

<p>Consistency is one of the most important factors in social media growth. Posting regularly helps keep your audience engaged and signals to Instagram that your account is active.</p>

<p>One challenge many creators face is maintaining a steady flow of caption ideas. This is where a caption generator becomes especially useful. Instead of struggling with every new post, you can generate ideas quickly and focus more on content creation.</p>

<p>Having access to fresh caption inspiration helps reduce creative burnout while maintaining a professional and engaging social media presence.</p>

<h3>Frequently Asked Questions</h3>

<p><strong>Can captions increase Reel views?</strong><br>
Yes. While captions alone don't guarantee more views, they can improve engagement, encourage interaction, and provide context that helps viewers connect with the content.</p>

<p><strong>Should I include hashtags in my Reel captions?</strong><br>
Yes. A balanced mix of relevant hashtags can help improve discoverability and connect your content with interested audiences.</p>

<p><strong>How many hashtags should I use?</strong><br>
Many creators find success using between 5 and 15 relevant hashtags rather than filling the caption with dozens of tags.</p>

<p><strong>Can I use generated captions without editing?</strong><br>
Yes. However, adding personal touches often makes captions feel more authentic and relatable.</p>

<p><strong>Will this tool help beginners?</strong><br>
Absolutely. The generator is designed for users of all experience levels and can help beginners learn effective caption-writing techniques.</p>

<h3>Why Choose Our Instagram Reel Caption Generator?</h3>

<p>Unlike generic caption tools, our Instagram Reel Caption Generator is designed specifically for short-form video content. It understands the unique engagement patterns of Reels and helps create captions that complement visual storytelling.</p>

<p>The tool focuses on creating captions that encourage interaction, support audience growth, and save creators valuable time. Whether you're an influencer, entrepreneur, educator, marketer, or casual Instagram user, the generator provides inspiration whenever you need it.</p>

<p>Everything happens instantly, allowing you to create high-quality captions without spending hours brainstorming ideas.</p>

<h3>Start Creating Better Instagram Reel Captions Today</h3>

<p>Great captions help transform ordinary Reels into engaging content that attracts attention, starts conversations, and encourages sharing. They add personality, context, and value while helping viewers connect with your message.</p>

<p>Our free <strong>Instagram Reel Caption Generator</strong> makes caption creation faster, easier, and more effective. Simply describe your content, choose your preferences, generate a caption, and start posting with confidence.</p>

<p>Whether you're growing a personal brand, promoting a business, building a community, or simply sharing moments from your life, the right caption can make all the difference. Use our generator to save time, stay consistent, and create captions that help your Reels stand out from the crowd.</p>

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
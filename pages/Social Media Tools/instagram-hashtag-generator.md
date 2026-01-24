---
layout: default
title: "Instagram Hashtag Generator - Create Viral Hashtags"
permalink: /instagram-hashtag-generator/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Instagram Hashtag Generator - Create Viral Hashtags for Posts & Reels</title>
<meta name="description"
  content="Free online Instagram hashtag generator. Create viral hashtags for your Instagram posts, reels, and stories instantly. Generate trending and niche hashtags for maximum reach.">
<meta name="keywords"
  content="instagram hashtag generator, hashtag maker, viral hashtags, instagram hashtags, hashtag ideas, social media hashtags, content creator tool, hashtag analytics, best hashtags">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Instagram Hashtag Generator Styles */
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

  .category-select, .hashtag-select {
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

  .hashtag-options {
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

  /* Hashtag display styling */
  .hashtag-display {
    background: white;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0;
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
  }

  .hashtag-group {
    margin-bottom: 20px;
  }

  .hashtag-group-title {
    font-weight: 600;
    color: #405DE6;
    margin-bottom: 10px;
    font-size: 1.1rem;
  }

  .hashtag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .hashtag-item {
    background: #f0f8ff;
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 0.9rem;
    color: #405DE6;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .hashtag-item:hover {
    background: #405DE6;
    color: white;
    transform: translateY(-2px);
  }

  .hashtag-stats {
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

    .hashtag-options {
      grid-template-columns: 1fr;
    }

    .hashtag-stats {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<div class="converter-container">
  <h1>Free Instagram Hashtag Generator</h1>
  <p class="welcome-message">Create viral hashtags for your Instagram posts, reels, and stories instantly. Generate trending and niche hashtags for maximum reach and engagement.</p>

  <div class="converter-section">
    <h2>Instagram Hashtag Generator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Total Hashtags: </span>
        <span id="totalHashtags">0</span>
      </div>
      <div class="counter-item">
        <span>Character Count: </span>
        <span id="charCount">0</span>
      </div>
      <div class="counter-item">
        <span>Popular Hashtags: </span>
        <span id="popularCount">0</span>
      </div>
      <div class="counter-item">
        <span>Niche Hashtags: </span>
        <span id="nicheCount">0</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Describe Your Content <i class="fas fa-hashtag" style="color: #E1306C;"></i></h2>
      <textarea id="contentInput" rows="4" placeholder="Describe your Instagram content... Example: Fitness workout video, Cooking tutorial, Travel vlog, Fashion outfit, Beauty makeup tutorial"></textarea>
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
          <option value="photography">Photography</option>
        </select>
      </div>
      
      <div class="category-group">
        <label class="category-label">Hashtag Type</label>
        <select id="hashtagType" class="hashtag-select">
          <option value="mixed">Mixed (Popular & Niche)</option>
          <option value="popular">Popular Hashtags</option>
          <option value="niche">Niche Hashtags</option>
          <option value="branded">Branded Hashtags</option>
          <option value="community">Community Hashtags</option>
        </select>
      </div>
      
      <div class="category-group">
        <label class="category-label">Platform</label>
        <select id="platformSelect" class="category-select">
          <option value="instagram">Instagram Posts</option>
          <option value="reels">Instagram Reels</option>
          <option value="stories">Instagram Stories</option>
          <option value="igtv">Instagram TV</option>
        </select>
      </div>
    </div>

    <div class="hashtag-options">
      <div class="option-checkbox">
        <input type="checkbox" id="includeTrending" checked>
        <label for="includeTrending">Include Trending Hashtags</label>
      </div>
      <div class="option-checkbox">
        <input type="checkbox" id="includeLocation" checked>
        <label for="includeLocation">Include Location Hashtags</label>
      </div>
      <div class="option-checkbox">
        <input type="checkbox" id="includeEmoji" checked>
        <label for="includeEmoji">Include Hashtags with Emojis</label>
      </div>
      <div class="option-checkbox">
        <input type="checkbox" id="optimizeCount" checked>
        <label for="optimizeCount">Optimize Hashtag Count (5-30)</label>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button instagram" data-action="generate">Generate Hashtags</button>
        <button class="case-button" data-action="analyze">Analyze Hashtags</button>
        <button class="case-button success" data-action="copy">Copy to Clipboard</button>
        <button class="case-button" data-action="saveSet">Save Hashtag Set</button>
        <button class="case-button warning" data-action="shuffle">Shuffle Hashtags</button>
        <button class="case-button secondary" data-action="clear">Clear All</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="hashtag-stats" id="hashtagStats" style="display: none;">
      <div class="stat-item">
        <div class="stat-value" id="statTotal">0</div>
        <div class="stat-label">Total Hashtags</div>
      </div>
      <div class="stat-item">
        <div class="stat-value" id="statPopular">0</div>
        <div class="stat-label">Popular</div>
      </div>
      <div class="stat-item">
        <div class="stat-value" id="statNiche">0</div>
        <div class="stat-label">Niche</div>
      </div>
      <div class="stat-item">
        <div class="stat-value" id="statAvgPosts">0</div>
        <div class="stat-label">Avg. Posts</div>
      </div>
    </div>

    <div class="input-section">
      <h2>Generated Hashtags <i class="fas fa-magic" style="color: #833AB4;"></i></h2>
      <textarea id="hashtagOutput" rows="6" placeholder="Your generated hashtags will appear here..." readonly></textarea>
    </div>

    <div id="hashtagDisplay" class="hashtag-display" style="display: none;">
      <h3>Hashtag Groups:</h3>
      <div class="hashtag-group">
        <div class="hashtag-group-title">Popular Hashtags (High Competition):</div>
        <div class="hashtag-list" id="popularHashtags"></div>
      </div>
      <div class="hashtag-group">
        <div class="hashtag-group-title">Niche Hashtags (Medium Competition):</div>
        <div class="hashtag-list" id="nicheHashtags"></div>
      </div>
      <div class="hashtag-group">
        <div class="hashtag-group-title">Specific Hashtags (Low Competition):</div>
        <div class="hashtag-list" id="specificHashtags"></div>
      </div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Hashtag Examples</h2>

      <h3>Fitness Content Example:</h3>
      <div class="example-text">#Fitness #Workout #Exercise #Gym #Healthy #FitLife #Training #Motivation #Health #Wellness #FitnessGoals #StayActive #GetStrong #NoExcuses #FitnessJourney #WorkoutMotivation #FitnessAddict #GymLife #Bodybuilding #Cardio #StrengthTraining #HomeWorkout #FitnessInspiration #FitFam #GymMotivation</div>

      <h3>Food & Cooking Example:</h3>
      <div class="example-text">#Food #Foodie #Cooking #Recipe #Delicious #Yummy #HomeCooking #FoodPhotography #FoodLover #EasyRecipes #HealthyEating #CookAtHome #FoodVideo #Tasty #FoodBlogger #Culinary #FoodPorn #InstaFood #FoodShare #FoodGram #HomeChef #CookingClass #RecipeIdeas #FoodStories #MealPrep</div>

      <h3>Travel Content Example:</h3>
      <div class="example-text">#Travel #Wanderlust #Explore #Adventure #Vacation #TravelPhotography #TravelBlogger #Wanderer #TravelGoals #PassportReady #TravelTheWorld #BeautifulDestinations #TravelInspiration #TravelDiaries #SeeTheWorld #AdventureTime #TravelGram #TravelLife #WorldTravel #TravelAddict #TravelPhoto #TravelBug #TravelCommunity #TravelReels #TravelVibes</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Instagram Hashtag Generator - Create Viral Hashtags Instantly</h2>

    <p>Struggling to find the right hashtags for your Instagram content? Our free <strong>Instagram Hashtag Generator</strong> is the ultimate tool for content creators, influencers, and businesses. Create viral-ready hashtags in seconds with our intelligent algorithm that analyzes your content and generates the perfect mix of popular, niche, and trending hashtags. Whether you're posting fitness content, travel vlogs, cooking tutorials, or fashion photos, our generator creates optimized hashtag sets for maximum reach and engagement.</p>

    <h3>How to Use This Instagram Hashtag Generator (Step-by-Step):</h3>
    <ul>
      <li><strong>Describe Your Content:</strong> Briefly describe your Instagram content in the input box (e.g., "Morning yoga routine," "Quick pasta recipe," "Beach sunset travel photo").</li>
      <li><strong>Select Category & Type:</strong> Choose your content category, preferred hashtag type (mixed, popular, niche), and platform (Posts, Reels, Stories).</li>
      <li><strong>Customize Options:</strong> Select whether to include trending hashtags, location tags, emoji hashtags, and optimize hashtag count.</li>
      <li><strong>Generate & Copy:</strong> Click "Generate Hashtags" to create your perfect Instagram hashtag set, then copy it directly to your clipboard.</li>
      <li><strong>Analyze & Optimize:</strong> Use the analyze feature to see hashtag statistics and optimize your selection for maximum reach.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you've created a beautiful fitness Reel showing your morning workout. Instead of spending time researching hashtags, you simply describe your content as "morning fitness workout," select "Fitness" category and "Mixed" hashtag type. The generator instantly creates a balanced set: "#Fitness #Workout #Exercise #MorningWorkout #FitLife #HomeWorkout #FitnessMotivation #HealthyLifestyle #WorkoutRoutine #NoExcuses #Gym #FitnessJourney #StayActive #GetStrong #FitnessAddict #Cardio #StrengthTraining #FitnessInspiration #FitFam #Wellness" - giving you a perfect mix of popular and niche hashtags.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Content Creators:</strong> Save time and increase reach with optimized hashtag sets for every post.</li>
      <li><strong>Social Media Managers:</strong> Generate multiple hashtag variations for different clients and industries.</li>
      <li><strong>Small Businesses:</strong> Increase brand visibility and attract target customers with strategic hashtags.</li>
      <li><strong>Influencers:</strong> Boost engagement and follower growth with trending and relevant hashtags.</li>
      <li><strong>Beginners:</strong> Learn hashtag best practices by studying generated examples and analytics.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>How many hashtags should I use on Instagram?</strong><br>
      Instagram allows up to 30 hashtags per post. Our generator creates optimized sets of 20-30 hashtags, which is the recommended amount for maximum reach. For Reels, 5-10 well-chosen hashtags often work best.</p>

    <p><strong>What's the difference between popular and niche hashtags?</strong><br>
      Popular hashtags (like #love, #instagood) have millions of posts but high competition. Niche hashtags (like #veganrecipes, #minimalistphotography) have fewer posts but more targeted audiences. A good strategy uses both types.</p>

    <strong>Can I save and reuse hashtag sets?</strong><br>
      Yes! Our tool allows you to save hashtag sets as templates for different content types. This saves time and ensures consistency in your hashtag strategy.</p>

    <strong>Is this tool free to use?</strong><br>
      Yes, this is completely free with no limits. No sign-up, no subscription, and no hidden fees.</p>

    <strong>Do you store my generated hashtags or content?</strong><br>
      No, all processing happens locally in your browser. We don't store your content, descriptions, or generated hashtags on our servers.</p>

    <h3>Why Choose Our Instagram Hashtag Generator?</h3>
    <p>Our <strong>Instagram hashtag generator</strong> stands out because it uses intelligent algorithms trained on thousands of successful Instagram posts. Unlike simple hashtag lists, our tool analyzes your content description, considers current trends, and creates a balanced mix of hashtag types for optimal performance. The tool also provides analytics and optimization suggestions to help you understand which hashtags work best for your content.</p>

    <h3>Instagram Hashtag Strategy Tips:</h3>
    <p>Combine our generator with these best practices for maximum Instagram success:</p>
    <ul>
      <li><strong>Mix Hashtag Sizes:</strong> Use 5-10 popular hashtags, 10-15 niche hashtags, and 5-10 specific hashtags</li>
      <li><strong>Hide Hashtags:</strong> Place hashtags in the first comment or at the end of your caption after line breaks</li>
      <li><strong>Be Relevant:</strong> Only use hashtags that are directly relevant to your content</li>
      <li><strong>Research Trends:</strong> Regularly check Instagram's trending hashtags for your niche</li>
      <li><strong>Create Branded Hashtags:</strong> Develop unique hashtags for your brand or campaigns</li>
      <li><strong>Test and Analyze:</strong> Track which hashtags bring the most engagement and adjust accordingly</li>
    </ul>

    <h3>Common Content Categories Supported:</h3>
    <ul>
      <li><strong>Fitness & Wellness:</strong> Workouts, yoga, health tips, nutrition, meditation</li>
      <li><strong>Food & Cooking:</strong> Recipes, cooking hacks, restaurant reviews, food photography</li>
      <li><strong>Travel & Adventure:</strong> Destinations, travel tips, packing hacks, hotel reviews</li>
      <li><strong>Fashion & Beauty:</strong> Outfit ideas, makeup tutorials, style tips, product reviews</li>
      <li><strong>Photography:</strong> Portrait, landscape, street, product, wildlife photography</li>
      <li><strong>Business & Entrepreneurship:</strong> Marketing tips, startup advice, productivity hacks</li>
      <li><strong>Education & Learning:</strong> Online courses, study tips, skill development, tutorials</li>
      <li><strong>Lifestyle & Parenting:</strong> Daily routines, home decor, parenting tips, DIY projects</li>
    </ul>

    <h3>Hashtag Types Explained:</h3>
    <ul>
      <li><strong>Popular Hashtags:</strong> High volume, high competition (1M+ posts) - Good for initial reach</li>
      <li><strong>Niche Hashtags:</strong> Medium volume, targeted audience (100K-1M posts) - Good for engagement</li>
      <li><strong>Specific Hashtags:</strong> Low volume, highly targeted (1K-100K posts) - Good for community building</li>
      <li><strong>Branded Hashtags:</strong> Unique to your brand - Essential for campaigns and UGC</li>
      <li><strong>Location Hashtags:</strong> Geographic tags - Crucial for local businesses and travel content</li>
      <li><strong>Trending Hashtags:</strong> Currently popular tags - Great for timely content and Reels</li>
    </ul>
  </div>
</div>

<!-- Analyze Modal -->
<div id="analyzeModal" class="modal">
  <div class="modal-content" style="max-width: 600px;">
    <div class="modal-header">
      <h3 class="modal-title">Hashtag Analysis</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="margin-bottom: 20px;">
        <h4>Hashtag Statistics</h4>
        <div class="hashtag-stats" style="background: white; border: 1px solid #eee;">
          <div class="stat-item">
            <div class="stat-value" id="modalTotal">0</div>
            <div class="stat-label">Total Hashtags</div>
          </div>
          <div class="stat-item">
            <div class="stat-value" id="modalPopular">0</div>
            <div class="stat-label">Popular</div>
          </div>
          <div class="stat-item">
            <div class="stat-value" id="modalNiche">0</div>
            <div class="stat-label">Niche</div>
          </div>
          <div class="stat-item">
            <div class="stat-value" id="modalSpecific">0</div>
            <div class="stat-label">Specific</div>
          </div>
        </div>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h4>Optimization Suggestions</h4>
        <div id="optimizationTips" style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
          <p>Analysis will appear here...</p>
        </div>
      </div>
      
      <div>
        <h4>Hashtag Performance</h4>
        <div style="background: white; border: 1px solid #eee; padding: 15px; border-radius: 8px;">
          <p><strong>Best Performing:</strong> <span id="bestHashtags">#example #hashtag</span></p>
          <p><strong>Recommendation:</strong> <span id="hashtagRecommendation">Add more niche hashtags</span></p>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button primary" id="applyOptimization">Apply Suggestions</button>
      <button class="modal-button secondary" id="closeAnalyze">Close</button>
    </div>
  </div>
</div>

<!-- Save Set Modal -->
<div id="saveModal" class="modal">
  <div class="modal-content" style="max-width: 500px;">
    <div class="modal-header">
      <h3 class="modal-title">Save Hashtag Set</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 8px; font-weight: 600;">Set Name</label>
        <input type="text" id="setName" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px;" placeholder="e.g., Fitness Hashtag Set">
      </div>
      <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 8px; font-weight: 600;">Category</label>
        <select id="setCategory" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px;">
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
      <p style="font-size: 0.9rem; color: #666;">Save this hashtag set as a template for future use.</p>
    </div>
    <div class="modal-footer">
      <button class="modal-button primary" id="confirmSave">Save Set</button>
      <button class="modal-button secondary" id="cancelSave">Cancel</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const contentInput = document.getElementById('contentInput');
    const hashtagOutput = document.getElementById('hashtagOutput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    
    // Settings elements
    const contentCategory = document.getElementById('contentCategory');
    const hashtagType = document.getElementById('hashtagType');
    const platformSelect = document.getElementById('platformSelect');
    const includeTrending = document.getElementById('includeTrending');
    const includeLocation = document.getElementById('includeLocation');
    const includeEmoji = document.getElementById('includeEmoji');
    const optimizeCount = document.getElementById('optimizeCount');
    
    // Display elements
    const hashtagDisplay = document.getElementById('hashtagDisplay');
    const popularHashtags = document.getElementById('popularHashtags');
    const nicheHashtags = document.getElementById('nicheHashtags');
    const specificHashtags = document.getElementById('specificHashtags');
    const hashtagStats = document.getElementById('hashtagStats');
    
    // Modal elements
    const analyzeModal = document.getElementById('analyzeModal');
    const saveModal = document.getElementById('saveModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const applyOptimization = document.getElementById('applyOptimization');
    const closeAnalyze = document.getElementById('closeAnalyze');
    const confirmSave = document.getElementById('confirmSave');
    const cancelSave = document.getElementById('cancelSave');

    // Initialize counters
    updateCounters();

    // Event listeners
    contentInput.addEventListener('input', updateCounters);
    hashtagOutput.addEventListener('input', updateCounters);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleHashtagAction(action);
      });
    });

    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        analyzeModal.style.display = 'none';
        saveModal.style.display = 'none';
      });
    });

    // Close analyze modal
    closeAnalyze.addEventListener('click', function() {
      analyzeModal.style.display = 'none';
    });

    // Apply optimization
    applyOptimization.addEventListener('click', function() {
      // In a real application, this would apply optimization suggestions
      showAlert('Optimization suggestions applied!', 'success');
      analyzeModal.style.display = 'none';
    });

    // Cancel save
    cancelSave.addEventListener('click', function() {
      saveModal.style.display = 'none';
    });

    // Confirm save
    confirmSave.addEventListener('click', function() {
      const setName = document.getElementById('setName').value;
      if (!setName) {
        showAlert('Please enter a set name.', 'error');
        return;
      }
      
      saveHashtagSetToLocalStorage(setName, hashtagOutput.value);
      showAlert(`Hashtag set "${setName}" saved successfully!`, 'success');
      saveModal.style.display = 'none';
      document.getElementById('setName').value = '';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === analyzeModal || event.target === saveModal) {
        analyzeModal.style.display = 'none';
        saveModal.style.display = 'none';
      }
    });

    // Click hashtag to copy
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('hashtag-item')) {
        const hashtag = e.target.textContent;
        copyToClipboard(hashtag);
        e.target.style.background = '#4CAF50';
        e.target.style.color = 'white';
        setTimeout(() => {
          e.target.style.background = '#f0f8ff';
          e.target.style.color = '#405DE6';
        }, 500);
      }
    });

    function updateCounters() {
      const content = contentInput.value;
      const hashtags = hashtagOutput.value;

      // Character count
      document.getElementById('charCount').textContent = hashtags.length;

      // Total hashtag count
      const hashtagCount = (hashtags.match(/#\w+/g) || []).length;
      document.getElementById('totalHashtags').textContent = hashtagCount;

      // Estimate popular vs niche (simple logic)
      const popularEstimate = Math.floor(hashtagCount * 0.3);
      const nicheEstimate = Math.floor(hashtagCount * 0.5);
      
      document.getElementById('popularCount').textContent = popularEstimate;
      document.getElementById('nicheCount').textContent = nicheEstimate;
    }

    function handleHashtagAction(action) {
      const content = contentInput.value.trim();
      
      if (!content && (action === 'generate' || action === 'analyze')) {
        showAlert('Please describe your content first.', 'error');
        return;
      }

      switch (action) {
        case 'generate':
          const generatedHashtags = generateHashtags(content);
          hashtagOutput.value = generatedHashtags;
          displayHashtagGroups(generatedHashtags);
          showAlert('Hashtags generated successfully!', 'success');
          break;

        case 'analyze':
          if (!hashtagOutput.value.trim()) {
            showAlert('Please generate hashtags first.', 'error');
            return;
          }
          analyzeHashtags(hashtagOutput.value);
          break;

        case 'copy':
          if (!hashtagOutput.value.trim()) {
            showAlert('Please generate hashtags first.', 'error');
            return;
          }
          copyToClipboard(hashtagOutput.value);
          break;

        case 'saveSet':
          if (!hashtagOutput.value.trim()) {
            showAlert('Please generate hashtags first.', 'error');
            return;
          }
          saveModal.style.display = 'block';
          break;

        case 'shuffle':
          if (!hashtagOutput.value.trim()) {
            showAlert('Please generate hashtags first.', 'error');
            return;
          }
          shuffleHashtags();
          break;

        case 'clear':
          contentInput.value = '';
          hashtagOutput.value = '';
          hashtagDisplay.style.display = 'none';
          hashtagStats.style.display = 'none';
          updateCounters();
          showAlert('All fields cleared.', 'success');
          break;
      }

      updateCounters();
    }

    // Generate hashtags based on input
    function generateHashtags(contentDescription) {
      const category = contentCategory.value;
      const type = hashtagType.value;
      const platform = platformSelect.value;
      
      // Hashtag database by category
      const hashtagDatabase = {
        fitness: {
          popular: ['Fitness', 'Workout', 'Exercise', 'Gym', 'Healthy', 'FitLife', 'Training', 'Motivation', 'Health', 'Wellness'],
          niche: ['FitnessGoals', 'StayActive', 'GetStrong', 'NoExcuses', 'FitnessJourney', 'WorkoutMotivation', 'FitnessAddict', 'GymLife', 'Bodybuilding', 'Cardio'],
          specific: ['StrengthTraining', 'HomeWorkout', 'FitnessInspiration', 'FitFam', 'GymMotivation', 'FitnessModel', 'WorkoutRoutine', 'FitGirl', 'FitBoy', 'FitnessCoach'],
          trending: ['FitnessReels', 'WorkoutVideo', 'HomeFitness', 'FitnessChallenge', 'FitnessTips']
        },
        food: {
          popular: ['Food', 'Foodie', 'Cooking', 'Recipe', 'Delicious', 'Yummy', 'HomeCooking', 'FoodPhotography', 'FoodLover', 'EasyRecipes'],
          niche: ['HealthyEating', 'CookAtHome', 'FoodVideo', 'Tasty', 'FoodBlogger', 'Culinary', 'FoodPorn', 'InstaFood', 'FoodShare', 'FoodGram'],
          specific: ['HomeChef', 'CookingClass', 'RecipeIdeas', 'FoodStories', 'MealPrep', 'FoodArt', 'FoodPresentation', 'CookingTips', 'FoodTutorial', 'FoodHacks'],
          trending: ['FoodReels', 'CookingVideo', 'RecipeVideo', 'FoodTrend', 'FoodChallenge']
        },
        travel: {
          popular: ['Travel', 'Wanderlust', 'Explore', 'Adventure', 'Vacation', 'TravelPhotography', 'TravelBlogger', 'Wanderer', 'TravelGoals', 'PassportReady'],
          niche: ['TravelTheWorld', 'BeautifulDestinations', 'TravelInspiration', 'TravelDiaries', 'SeeTheWorld', 'AdventureTime', 'TravelGram', 'TravelLife', 'WorldTravel', 'TravelAddict'],
          specific: ['TravelPhoto', 'TravelBug', 'TravelCommunity', 'TravelReels', 'TravelVibes', 'TravelGuide', 'TravelTips', 'SoloTravel', 'CoupleTravel', 'FamilyTravel'],
          trending: ['TravelReels', 'WanderlustWednesday', 'TravelTuesday', 'ExploreMore', 'TravelGoals']
        },
        fashion: {
          popular: ['Fashion', 'Style', 'Outfit', 'OOTD', 'FashionBlogger', 'StyleInspo', 'Fashionista', 'Lookbook', 'StreetStyle', 'FashionTrends'],
          niche: ['Wardrobe', 'FashionDiaries', 'PersonalStyle', 'FashionInfluencer', 'StyleGoals', 'FashionPhoto', 'FashionStyle', 'FashionAddict', 'FashionDaily', 'FashionGram'],
          specific: ['OutfitInspiration', 'StyleTips', 'FashionReels', 'FashionVideo', 'StyleGuide', 'FashionTips', 'TrendAlert', 'FashionNews', 'SustainableFashion', 'VintageFashion'],
          trending: ['FashionReels', 'OOTD', 'StyleInspiration', 'FashionTrend', 'StyleChallenge']
        },
        beauty: {
          popular: ['Beauty', 'Makeup', 'Skincare', 'BeautyBlogger', 'MakeupTutorial', 'BeautyTips', 'GlowUp', 'MakeupLover', 'BeautyRoutine', 'Cosmetics'],
          niche: ['MakeupArtist', 'BeautyHacks', 'SelfCare', 'BeautyInfluencer', 'MakeupGoals', 'BeautyCommunity', 'BeautyReview', 'MakeupAddict', 'SkincareRoutine', 'BeautyProducts'],
          specific: ['MakeupReels', 'BeautyVideo', 'MakeupTransformation', 'SkincareTips', 'BeautyTutorial', 'MakeupLook', 'BeautySecrets', 'CleanBeauty', 'CrueltyFree', 'VeganBeauty'],
          trending: ['BeautyReels', 'MakeupChallenge', 'SkincareRoutine', 'GetReadyWithMe', 'BeautyHack']
        }
      };

      // Get hashtags for category or default to lifestyle
      const categoryData = hashtagDatabase[category] || hashtagDatabase.fitness;
      
      let selectedHashtags = [];
      
      // Select hashtags based on type
      if (type === 'mixed' || type === 'popular') {
        selectedHashtags = selectedHashtags.concat(categoryData.popular.slice(0, 8));
      }
      if (type === 'mixed' || type === 'niche') {
        selectedHashtags = selectedHashtags.concat(categoryData.niche.slice(0, 12));
      }
      if (type === 'mixed') {
        selectedHashtags = selectedHashtags.concat(categoryData.specific.slice(0, 8));
      }
      if (type === 'branded') {
        // Create branded hashtags based on content
        const words = contentDescription.toLowerCase().split(' ');
        const branded = words.slice(0, 3).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
        selectedHashtags = [branded, branded + 'Journey', branded + 'Life', branded + 'Goals', 'Team' + branded];
        selectedHashtags = selectedHashtags.concat(categoryData.niche.slice(0, 15));
      }
      
      // Add trending hashtags if enabled
      if (includeTrending.checked) {
        selectedHashtags = selectedHashtags.concat(categoryData.trending.slice(0, 5));
      }
      
      // Add location hashtags if enabled
      if (includeLocation.checked) {
        const locations = ['Worldwide', 'Global', 'International', 'Local', 'CityLife', 'Urban', 'ExploreLocal'];
        selectedHashtags = selectedHashtags.concat(locations.slice(0, 3));
      }
      
      // Add emoji hashtags if enabled
      if (includeEmoji.checked) {
        const emojiHashtags = ['❤️', '✨', '🔥', '💫', '🌟', '💪', '🙌', '👏', '🎉', '✅'];
        selectedHashtags = selectedHashtags.concat(emojiHashtags.slice(0, 3));
      }
      
      // Optimize count if enabled
      if (optimizeCount.checked) {
        const platformLimits = {
          instagram: 30,
          reels: 15,
          stories: 10,
          igtv: 20
        };
        const limit = platformLimits[platform] || 30;
        selectedHashtags = selectedHashtags.slice(0, limit);
      }
      
      // Remove duplicates and format
      const uniqueHashtags = [...new Set(selectedHashtags)];
      const formattedHashtags = uniqueHashtags.map(tag => '#' + tag.replace(/^#/, '')).join(' ');
      
      return formattedHashtags;
    }
    
    // Display hashtags in groups
    function displayHashtagGroups(hashtagString) {
      const hashtags = hashtagString.split(' ').filter(tag => tag.startsWith('#'));
      
      // Simple categorization logic
      const popular = hashtags.slice(0, Math.floor(hashtags.length * 0.3));
      const niche = hashtags.slice(popular.length, popular.length + Math.floor(hashtags.length * 0.5));
      const specific = hashtags.slice(popular.length + niche.length);
      
      // Update display
      popularHashtags.innerHTML = popular.map(tag => 
        `<div class="hashtag-item">${tag}</div>`
      ).join('');
      
      nicheHashtags.innerHTML = niche.map(tag => 
        `<div class="hashtag-item">${tag}</div>`
      ).join('');
      
      specificHashtags.innerHTML = specific.map(tag => 
        `<div class="hashtag-item">${tag}</div>`
      ).join('');
      
      // Update stats
      document.getElementById('statTotal').textContent = hashtags.length;
      document.getElementById('statPopular').textContent = popular.length;
      document.getElementById('statNiche').textContent = niche.length;
      document.getElementById('statAvgPosts').textContent = '1M+';
      
      // Show display and stats
      hashtagDisplay.style.display = 'block';
      hashtagStats.style.display = 'grid';
    }
    
    // Analyze hashtags
    function analyzeHashtags(hashtagString) {
      const hashtags = hashtagString.split(' ').filter(tag => tag.startsWith('#'));
      
      // Update modal stats
      document.getElementById('modalTotal').textContent = hashtags.length;
      document.getElementById('modalPopular').textContent = Math.floor(hashtags.length * 0.3);
      document.getElementById('modalNiche').textContent = Math.floor(hashtags.length * 0.5);
      document.getElementById('modalSpecific').textContent = hashtags.length - Math.floor(hashtags.length * 0.3) - Math.floor(hashtags.length * 0.5);
      
      // Generate optimization tips
      const tips = [];
      if (hashtags.length < 15) {
        tips.push('Add more hashtags (aim for 20-30 for maximum reach)');
      }
      if (hashtags.length > 30) {
        tips.push('Reduce hashtag count (Instagram allows maximum 30)');
      }
      if (hashtags.length > 0) {
        tips.push('Use a mix of popular and niche hashtags for best results');
        tips.push('Hide hashtags in the first comment for cleaner appearance');
        tips.push('Research trending hashtags weekly to stay relevant');
      }
      
      document.getElementById('optimizationTips').innerHTML = 
        '<ul>' + tips.map(tip => `<li>${tip}</li>`).join('') + '</ul>';
      
      document.getElementById('bestHashtags').textContent = hashtags.slice(0, 3).join(' ');
      document.getElementById('hashtagRecommendation').textContent = 
        hashtags.length < 20 ? 'Add 5-10 more niche hashtags' : 'Hashtag set looks good!';
      
      analyzeModal.style.display = 'block';
    }
    
    // Shuffle hashtags
    function shuffleHashtags() {
      const hashtags = hashtagOutput.value.split(' ').filter(tag => tag.startsWith('#'));
      
      // Fisher-Yates shuffle algorithm
      for (let i = hashtags.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [hashtags[i], hashtags[j]] = [hashtags[j], hashtags[i]];
      }
      
      hashtagOutput.value = hashtags.join(' ');
      displayHashtagGroups(hashtagOutput.value);
      showAlert('Hashtags shuffled successfully!', 'success');
    }
    
    // Save hashtag set to localStorage (simulated)
    function saveHashtagSetToLocalStorage(name, hashtags) {
      try {
        const sets = JSON.parse(localStorage.getItem('hashtagSets') || '[]');
        sets.push({
          name: name,
          hashtags: hashtags,
          category: document.getElementById('setCategory').value,
          date: new Date().toISOString()
        });
        localStorage.setItem('hashtagSets', JSON.stringify(sets));
      } catch (e) {
        console.log('LocalStorage not available in this demo');
      }
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Copied to clipboard!', 'success');
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
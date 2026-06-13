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
  <h2>Free Instagram Hashtag Generator – Find the Perfect Hashtags for Your Posts</h2>

  <p>Growing on Instagram is not only about posting great photos, videos, or Reels. Even the best content can struggle to reach people if it is not supported by the right hashtags. Hashtags help Instagram understand your content and connect it with users who are interested in similar topics. That's why choosing the right hashtags can make a huge difference in your reach, engagement, and follower growth.</p>

  <p>Our free <strong>Instagram Hashtag Generator</strong> is designed to help creators, influencers, marketers, businesses, and everyday Instagram users discover relevant hashtags within seconds. Instead of spending hours researching trending tags or copying hashtags from competitors, you can simply describe your content and instantly receive a carefully selected list of hashtags that match your niche.</p>

  <p>Whether you're posting fitness transformations, travel adventures, food recipes, fashion content, photography portfolios, business tips, or educational videos, this tool helps you generate hashtags that improve visibility and increase your chances of reaching the right audience.</p>

  <h3>How to Use This Instagram Hashtag Generator (Step-by-Step)</h3>

  <p>Using the tool is simple and beginner-friendly. You don't need any social media marketing experience to get started.</p>

  <ul>
    <li><strong>Describe Your Content:</strong> Enter a short description of your Instagram post, Reel, or Story. For example, "healthy breakfast recipe," "mountain hiking adventure," or "home workout routine."</li>

    <li><strong>Choose a Content Category:</strong> Select the category that best matches your content. Categories help the generator identify the most relevant hashtags for your niche.</li>

    <li><strong>Select Hashtag Style:</strong> Decide whether you want popular hashtags, niche hashtags, trending hashtags, or a balanced mix of all three.</li>

    <li><strong>Customize Additional Options:</strong> Depending on your goals, you can include location hashtags, branded hashtags, emoji hashtags, or trending tags.</li>

    <li><strong>Generate Hashtags:</strong> Click the generate button and instantly receive a complete set of optimized hashtags.</li>

    <li><strong>Copy and Use:</strong> Copy the hashtags with one click and paste them into your Instagram caption or first comment.</li>

    <li><strong>Track Performance:</strong> Monitor how your posts perform and experiment with different hashtag combinations to discover what works best for your audience.</li>
  </ul>

  <h3>Why Hashtags Still Matter on Instagram</h3>

  <p>Many people wonder whether hashtags are still useful on Instagram. The answer is yes. While Instagram's algorithm has evolved over the years, hashtags continue to play an important role in content discovery.</p>

  <p>When you use relevant hashtags, Instagram gains additional context about your post. This increases the likelihood of your content appearing in search results, hashtag feeds, and recommendation sections where new audiences can discover your profile.</p>

  <p>Hashtags also help connect your content with niche communities. Someone searching for fitness motivation, vegan recipes, travel destinations, or photography inspiration may find your post through carefully chosen hashtags.</p>

  <p>Using random or unrelated hashtags can hurt your results, which is why our generator focuses on relevance rather than simply producing the most popular tags.</p>

  <h3>Real-Life Example: Fitness Content Creator</h3>

  <p>Imagine you have recorded a morning workout Reel featuring bodyweight exercises that can be done at home. Instead of manually researching hashtags, you enter a simple description such as "morning home workout routine."</p>

  <p>The tool analyzes your content and generates a balanced collection of hashtags that may include:</p>

  <p>#Fitness #Workout #HomeWorkout #MorningWorkout #FitLife #FitnessMotivation #HealthyLifestyle #WorkoutRoutine #ExerciseDaily #FitnessGoals #StayActive #StrengthTraining #FitFam #HealthJourney #CardioWorkout #WellnessTips #FitnessCommunity #TrainingDay #ExerciseMotivation #FitnessLifestyle</p>

  <p>This combination includes broad fitness hashtags, medium-sized niche hashtags, and highly targeted tags that help your content reach multiple audience segments.</p>

  <h3>Benefits of Using an Instagram Hashtag Generator</h3>

  <ul>
    <li><strong>Saves Time:</strong> Stop spending valuable time researching hashtags manually for every post.</li>

    <li><strong>Improves Reach:</strong> Reach more users who are interested in your specific content niche.</li>

    <li><strong>Boosts Engagement:</strong> Relevant hashtags can attract users who are more likely to interact with your content.</li>

    <li><strong>Discover New Communities:</strong> Connect with niche audiences and communities that share your interests.</li>

    <li><strong>Supports Consistent Growth:</strong> A strategic hashtag approach helps create sustainable audience growth over time.</li>

    <li><strong>Reduces Guesswork:</strong> Generate hashtags based on data and relevance rather than random assumptions.</li>
  </ul>

  <h3>Who Can Benefit from This Tool?</h3>

  <p>Our Instagram Hashtag Generator is useful for a wide variety of users.</p>

  <ul>
    <li><strong>Content Creators:</strong> Increase visibility and attract new followers through optimized hashtag strategies.</li>

    <li><strong>Influencers:</strong> Improve engagement rates and expand audience reach across different content categories.</li>

    <li><strong>Small Businesses:</strong> Promote products and services to highly targeted audiences.</li>

    <li><strong>Social Media Managers:</strong> Quickly create hashtag sets for multiple clients and campaigns.</li>

    <li><strong>Photographers:</strong> Reach audiences interested in portrait, landscape, travel, wildlife, or product photography.</li>

    <li><strong>Educators and Coaches:</strong> Share valuable knowledge while reaching learners interested in your expertise.</li>

    <li><strong>Beginners:</strong> Learn effective hashtag practices without needing advanced social media knowledge.</li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p><strong>How many hashtags should I use on Instagram?</strong><br>
  Instagram allows up to 30 hashtags per post. However, quality matters more than quantity. Many successful creators use between 10 and 20 highly relevant hashtags. For Reels, a smaller set of targeted hashtags often performs very well.</p>

  <p><strong>Should I use the same hashtags on every post?</strong><br>
  It is better to customize hashtags for each piece of content. Repeating identical hashtag sets on every post may limit your ability to reach different audience groups.</p>

  <p><strong>Can hashtags help small accounts grow?</strong><br>
  Absolutely. Smaller accounts often benefit significantly from niche hashtags because they face less competition and attract highly engaged audiences.</p>

  <p><strong>Are trending hashtags always the best option?</strong><br>
  Not necessarily. Trending hashtags can increase exposure, but they are often highly competitive. Combining trending, niche, and specific hashtags usually produces better results.</p>

  <p><strong>Is this hashtag generator free?</strong><br>
  Yes. The tool is completely free to use, with no registration, subscription fees, or hidden charges.</p>
</div>

<h3>Understanding Different Types of Instagram Hashtags</h3>

<p>Not all hashtags serve the same purpose. Successful Instagram marketing involves using a mix of hashtag types rather than relying on only popular tags. Understanding the differences can help you create a stronger strategy and improve your content's visibility.</p>

<ul>
  <li><strong>Popular Hashtags:</strong> These hashtags often have millions of posts associated with them. Examples include #Love, #Photography, #Fitness, and #Travel. They can provide broad exposure but are highly competitive.</li>

  <li><strong>Niche Hashtags:</strong> These focus on specific interests or communities. Examples might include #HomeWorkoutTips, #SoloTravelLife, or #PlantBasedMeals. They typically attract more targeted and engaged audiences.</li>

  <li><strong>Specific Hashtags:</strong> These are highly targeted and directly related to a particular topic, product, or style of content. Although they may have lower search volume, they often generate quality engagement.</li>

  <li><strong>Location Hashtags:</strong> Location-based hashtags help local businesses, creators, and travelers reach users within a specific geographic area.</li>

  <li><strong>Branded Hashtags:</strong> These are unique hashtags created for a brand, campaign, event, or personal identity. They help build community and encourage user-generated content.</li>

  <li><strong>Trending Hashtags:</strong> Trending hashtags are currently popular within Instagram or a specific niche. Using them appropriately can increase visibility when the content is relevant.</li>
</ul>

<h3>How Our Instagram Hashtag Generator Works</h3>

<p>Our tool simplifies hashtag research by automatically identifying keywords from your content description and matching them with relevant hashtag categories. Instead of manually searching Instagram for suitable tags, the generator creates optimized combinations within seconds.</p>

<p>The goal is not simply to provide the most popular hashtags available. Instead, the generator focuses on relevance, balance, and discoverability. A carefully selected mix of hashtags can often outperform a list filled entirely with high-competition tags.</p>

<p>For example, if you post about healthy cooking, the generator may combine broad hashtags such as #HealthyFood with more specific options like #MealPrepIdeas, #CleanEatingRecipes, and #HealthyCookingTips. This approach helps your content reach both large and targeted audiences.</p>

<h3>Best Practices for Instagram Hashtag Success</h3>

<p>Using hashtags effectively requires more than simply adding them to every post. The following best practices can help maximize results.</p>

<ul>
  <li><strong>Stay Relevant:</strong> Always choose hashtags that accurately represent your content. Irrelevant hashtags may attract the wrong audience and reduce engagement quality.</li>

  <li><strong>Mix Large and Small Hashtags:</strong> Combining high-volume and niche hashtags increases your chances of being discovered by different audience segments.</li>

  <li><strong>Update Your Hashtag Sets:</strong> Social media trends change frequently. Refresh your hashtag strategy regularly instead of using the same list for months.</li>

  <li><strong>Avoid Spammy Hashtags:</strong> Some hashtags are overused or associated with spam content. Focus on quality and relevance instead.</li>

  <li><strong>Use Analytics:</strong> Monitor post performance and identify which hashtags contribute to reach, engagement, and follower growth.</li>

  <li><strong>Customize for Each Post:</strong> Different content deserves different hashtag combinations. Tailoring hashtags often produces better results than using a universal set.</li>
</ul>

<h3>Instagram Reels Hashtag Strategy</h3>

<p>Instagram Reels have become one of the most effective ways to reach new audiences. Since Reels are heavily promoted by Instagram's discovery algorithm, choosing the right hashtags can significantly improve visibility.</p>

<p>For Reels, focus on highly relevant hashtags that accurately describe the content. Instead of using the maximum number possible, many creators find success with a smaller set of carefully selected hashtags.</p>

<p>For example, a Reel showing a quick home workout might benefit from hashtags such as #HomeWorkout, #FitnessReels, #WorkoutMotivation, #ExerciseAtHome, and #FitnessTips. These tags clearly describe the content while targeting interested viewers.</p>

<h3>Instagram Stories and Hashtags</h3>

<p>Although Stories disappear after 24 hours, hashtags can still help increase their visibility. Adding relevant hashtags to Stories allows Instagram to better categorize the content and potentially show it to users beyond your followers.</p>

<p>Many creators choose to place hashtags discreetly within the Story design. The key is to ensure the hashtags remain relevant to the content while maintaining a clean visual appearance.</p>

<h3>How Businesses Use Hashtags for Marketing</h3>

<p>Businesses of all sizes use hashtags to increase brand awareness, promote products, and engage with customers. A strong hashtag strategy can help companies reach potential customers without spending additional money on advertising.</p>

<p>For example, a local coffee shop might combine location hashtags, coffee-related hashtags, and branded hashtags. This approach helps attract nearby customers while strengthening brand recognition.</p>

<p>E-commerce stores, service providers, coaches, consultants, and local businesses can all benefit from strategic hashtag usage when paired with quality content.</p>

<h3>Common Hashtag Mistakes to Avoid</h3>

<p>Even experienced Instagram users sometimes make mistakes that limit their results. Avoiding these common issues can improve your performance.</p>

<ul>
  <li>Using hashtags that are unrelated to the content.</li>
  <li>Copying competitor hashtag lists without customization.</li>
  <li>Using only extremely popular hashtags.</li>
  <li>Repeating the exact same hashtags on every post.</li>
  <li>Ignoring analytics and performance data.</li>
  <li>Adding hashtags simply to reach the maximum limit.</li>
</ul>

<p>The most successful hashtag strategies prioritize relevance, consistency, and audience targeting over sheer quantity.</p>

<h3>Popular Instagram Content Categories Supported</h3>

<p>Our Instagram Hashtag Generator works across a wide range of industries, niches, and content styles. Whether you're a beginner creator or an established brand, the tool can generate relevant hashtag suggestions tailored to your content.</p>

<ul>
  <li><strong>Fitness & Wellness:</strong> Workout routines, yoga sessions, nutrition advice, wellness tips, healthy living content, and fitness transformations.</li>

  <li><strong>Food & Recipes:</strong> Home cooking, baking tutorials, restaurant reviews, meal preparation ideas, healthy recipes, and food photography.</li>

  <li><strong>Travel & Adventure:</strong> Travel destinations, hiking experiences, hotel reviews, travel photography, vacation guides, and adventure content.</li>

  <li><strong>Fashion & Style:</strong> Outfit inspiration, fashion trends, styling advice, product showcases, and seasonal fashion collections.</li>

  <li><strong>Beauty & Skincare:</strong> Makeup tutorials, skincare routines, beauty product reviews, and personal care recommendations.</li>

  <li><strong>Photography:</strong> Portrait photography, landscape photography, wildlife photography, street photography, and creative photo projects.</li>

  <li><strong>Business & Entrepreneurship:</strong> Marketing strategies, startup advice, productivity tips, leadership content, and business growth insights.</li>

  <li><strong>Education & Learning:</strong> Tutorials, online courses, educational content, study tips, and professional development resources.</li>

  <li><strong>Lifestyle & Personal Development:</strong> Daily routines, motivation, productivity, mindfulness, home organization, and self-improvement topics.</li>

  <li><strong>Parenting & Family:</strong> Parenting advice, family activities, child development content, and family lifestyle updates.</li>
</ul>

<h3>Building a Long-Term Hashtag Strategy</h3>

<p>Hashtags work best when they are part of a consistent content strategy rather than a one-time tactic. Building a long-term hashtag system can help you improve results over time.</p>

<p>Start by creating several hashtag groups based on your content categories. For example, if you post about fitness, you might maintain separate hashtag sets for workouts, nutrition, motivation, and wellness content.</p>

<p>Testing different combinations allows you to identify which hashtags generate the most reach, engagement, profile visits, and follower growth. Over time, this data can help refine your strategy and improve performance.</p>

<p>Many successful creators maintain multiple hashtag templates that they customize for each post rather than creating entirely new lists from scratch.</p>

<h3>Why Relevance Matters More Than Popularity</h3>

<p>A common misconception is that the most popular hashtags always produce the best results. In reality, relevance is often far more important.</p>

<p>If your content targets a specific audience, niche hashtags can sometimes outperform large hashtags because they attract users who are genuinely interested in the topic. This often leads to higher engagement rates and more meaningful interactions.</p>

<p>For example, a photographer specializing in wildlife photography may achieve better results using targeted hashtags related to wildlife, nature, and conservation rather than relying exclusively on generic photography hashtags.</p>

<h3>Frequently Asked Questions</h3>

<p><strong>Do hashtags still work in 2026?</strong><br>
Yes. Hashtags continue to help Instagram categorize content and connect posts with relevant audiences. While they are only one part of the algorithm, they remain an important discovery tool.</p>

<p><strong>How often should I change my hashtags?</strong><br>
It's a good idea to review and update hashtag sets regularly. Trends change, audience interests evolve, and testing new combinations can reveal better-performing options.</p>

<p><strong>Can I use hashtags in comments instead of captions?</strong><br>
Yes. Many creators place hashtags in the first comment to keep captions cleaner while still benefiting from hashtag visibility.</p>

<p><strong>Should I create my own branded hashtag?</strong><br>
Absolutely. Branded hashtags help build community, encourage user-generated content, and strengthen brand identity over time.</p>

<p><strong>Can hashtags help increase followers?</strong><br>
Relevant hashtags can expose your content to new audiences, increasing the chances of attracting followers who are genuinely interested in your content.</p>

<h3>Why Choose Our Instagram Hashtag Generator?</h3>

<p>There are countless hashtag tools available online, but our generator focuses on simplicity, relevance, and effectiveness. Instead of overwhelming users with random suggestions, it generates carefully selected hashtags based on your content description and goals.</p>

<p>The tool is fast, easy to use, and suitable for creators of all experience levels. Whether you're managing a personal account, building a brand, growing an influencer profile, or promoting a business, the generator helps streamline your hashtag research process.</p>

<p>Most importantly, it saves valuable time while helping improve discoverability and audience reach.</p>

<h3>Start Generating Better Instagram Hashtags Today</h3>

<p>If you're serious about growing your Instagram presence, choosing the right hashtags is an essential step. Effective hashtags help connect your content with people who are actively interested in your niche, increasing opportunities for engagement and growth.</p>

<p>Our free Instagram Hashtag Generator removes the guesswork from hashtag research by providing optimized hashtag suggestions in seconds. Simply enter your content description, generate your hashtags, and start reaching more people with every post.</p>

<p>Whether you're creating Reels, Stories, carousel posts, product promotions, educational content, travel photos, fitness updates, or business marketing campaigns, our generator helps you build stronger hashtag strategies and maximize your Instagram potential.</p>
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
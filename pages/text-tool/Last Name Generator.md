---
layout: default
title: "Last Name Generator - Generate Surnames from Around the World"
permalink: /last-name-generator-generate-surnames-from-around-the-world/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Last Name Generator - Generate Surnames from Around the World</title>
<meta name="description"
  content="Free online last name generator tool. Generate realistic surnames from different cultures, regions, and ethnicities. Perfect for character creation, writing, and research.">
<meta name="keywords"
  content="last name generator, surname generator, family name generator, random last names, surnames, character last names, fictional surnames, ethnic surnames, ancestry names">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Last Name Generator Styles */
  .generator-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .generator-container h1 {
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

  .generator-section {
    margin-bottom: 40px;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .generator-section h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .generator-section p {
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
    font-family: 'Courier New', monospace;
    transition: border-color 0.3s;
  }

  .input-section textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .options-section {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
  }

  .generation-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
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
    font-size: 1rem;
  }

  .option-select, .option-input, .option-number {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    background: white;
  }

  .option-number {
    width: 100px;
  }

  .origin-buttons {
    display: flex;
    gap: 10px;
    margin-top: 5px;
    flex-wrap: wrap;
  }

  .origin-button {
    padding: 10px 15px;
    border: 2px solid #ddd;
    border-radius: 6px;
    background: white;
    cursor: pointer;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
    flex: 1;
    min-width: 120px;
  }

  .origin-button:hover {
    border-color: var(--primary);
    background: rgba(52, 152, 219, 0.1);
  }

  .origin-button.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }

  .option-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
  }

  .option-checkbox input {
    width: 20px;
    height: 20px;
  }

  .option-checkbox label {
    font-weight: 500;
    color: #333;
  }

  .region-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 10px;
    margin-top: 10px;
  }

  .region-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .region-item:hover {
    border-color: var(--primary);
    background: rgba(52, 152, 219, 0.05);
  }

  .region-item.selected {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }

  .region-item input {
    margin: 0;
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .action-button {
    padding: 14px 10px;
    border: none;
    border-radius: 8px;
    background: var(--primary);
    color: white;
    font-size: 16px;
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

  .results-section {
    margin-top: 30px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    border: 2px solid #e0e6ed;
  }

  .results-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid #f0f0f0;
  }

  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 20px;
  }

  .surname-card {
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    text-align: center;
    border-left: 4px solid var(--primary);
    transition: all 0.3s ease;
    position: relative;
  }

  .surname-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .surname-text {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .surname-details {
    font-size: 0.9rem;
    color: #666;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .surname-meaning {
    font-size: 0.85rem;
    color: #7f8c8d;
    margin-top: 8px;
    font-style: italic;
    text-align: left;
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
    max-width: 600px;
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
    max-height: 400px;
    overflow-y: auto;
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
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    .action-button {
      font-size: 14px;
      padding: 12px 8px;
    }

    .generator-container {
      padding: 15px;
    }

    .generator-section {
      padding: 20px;
      margin-bottom: 30px;
    }

    .generator-container h1 {
      font-size: 2rem;
    }

    .generator-section h2 {
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

    .generation-options {
      grid-template-columns: 1fr;
    }

    .region-grid {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }

    .results-grid {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }

    .origin-buttons {
      flex-direction: column;
    }

    .origin-button {
      min-width: 100%;
    }
  }
</style>

<div class="generator-container">
  <h1>Last Name Generator</h1>
  <p class="welcome-message">Generate realistic surnames from different cultures, regions, and ethnicities. Perfect for character creation, genealogy research, and creative writing projects.</p>

  <div class="generator-section">
    <h2>Last Name Generator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Surnames Generated: </span>
        <span id="surnamesCount">0</span>
      </div>
      <div class="counter-item">
        <span>Cultures Available: </span>
        <span id="culturesCount">15</span>
      </div>
      <div class="counter-item">
        <span>European Surnames: </span>
        <span id="europeanCount">250+</span>
      </div>
      <div class="counter-item">
        <span>Asian Surnames: </span>
        <span id="asianCount">150+</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Custom Surname List (Optional)</h2>
      <textarea id="customSurnames" rows="4" placeholder="Enter your custom surnames here, one per line..."></textarea>
      <p style="color: #666; font-size: 0.9rem; margin-top: 5px;">Add your own surnames to pick randomly from. One surname per line.</p>
    </div>

    <div class="generation-options">
      <div class="option-group">
        <label class="option-label">Surname Type:</label>
        <select id="surnameType" class="option-select">
          <option value="realistic">Realistic Surnames</option>
          <option value="custom">Pick from my list</option>
          <option value="fantasy">Fantasy Surnames</option>
          <option value="historical">Historical Surnames</option>
          <option value="royal">Royal/Noble Surnames</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Name Origin:</label>
        <div class="origin-buttons">
          <button class="origin-button active" data-origin="all">All Origins</button>
          <button class="origin-button" data-origin="european">European</button>
          <button class="origin-button" data-origin="asian">Asian</button>
          <button class="origin-button" data-origin="african">African</button>
          <button class="origin-button" data-origin="hispanic">Hispanic</button>
        </div>
      </div>
      
      <div class="option-group">
        <label class="option-label">How many surnames:</label>
        <input type="number" id="surnameCount" class="option-number" min="1" max="100" value="10">
        <div class="option-checkbox">
          <input type="checkbox" id="includeMeaning" checked>
          <label for="includeMeaning">Include meaning/origin</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="includeVariations">
          <label for="includeVariations">Include name variations</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <h3>Select Specific Regions:</h3>
      <div class="region-grid" id="regionGrid">
        <label class="region-item">
          <input type="checkbox" name="region" value="english" checked>
          <span>English</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="irish" checked>
          <span>Irish</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="scottish" checked>
          <span>Scottish</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="german" checked>
          <span>German</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="french" checked>
          <span>French</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="spanish" checked>
          <span>Spanish</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="italian" checked>
          <span>Italian</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="chinese" checked>
          <span>Chinese</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="japanese" checked>
          <span>Japanese</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="korean" checked>
          <span>Korean</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="indian" checked>
          <span>Indian</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="russian" checked>
          <span>Russian</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="scandinavian" checked>
          <span>Scandinavian</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="arabic" checked>
          <span>Arabic</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="jewish" checked>
          <span>Jewish</span>
        </label>
      </div>
    </div>

    <div class="button-section">
      <button class="action-button" data-action="generate">Generate Surnames</button>
      <button class="action-button success" data-action="generate-more">Generate More</button>
      <button class="action-button" data-action="copy">Copy to Clipboard</button>
      <button class="action-button warning" data-action="export">Export as CSV</button>
      <button class="action-button secondary" data-action="clear">Clear Results</button>
      <button class="action-button" data-action="save-list">Save Surname List</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="results-section">
      <div class="results-header">
        <h3>Generated Surnames</h3>
        <button class="action-button secondary" data-action="refresh">Refresh All</button>
      </div>
      <div id="resultsGrid" class="results-grid">
        <!-- Surnames will be dynamically inserted here -->
      </div>
    </div>

    <div class="examples">
      <h2>Example Surname Categories</h2>

      <h3>Occupational Surnames:</h3>
      <div class="example-text">Smith (blacksmith)
Miller (grain miller)
Taylor (tailor)
Baker (baker)
Cooper (barrel maker)
Fisher (fisherman)
Carter (cart driver)
Wright (craftsman)</div>

      <h3>Patronymic Surnames:</h3>
      <div class="example-text">Johnson (son of John)
MacDonald (son of Donald)
O'Brien (descendant of Brian)
Fitzgerald (son of Gerald)
Petrov (son of Peter)
Ivanov (son of Ivan)
Ben David (son of David)
Al-Rashid (descendant of Rashid)</div>

      <h3>Geographical Surnames:</h3>
      <div class="example-text">Hill (from a hill)
Ford (from a river crossing)
Brooks (from near brooks)
Woods (from the woods)
Field (from open fields)
Stone (from stony area)
Lake (from near a lake)
Forest (from the forest)</div>
    </div>
  </div>


<!-- SEO Content Section -->
<div class="content-placeholder">

  <h2>Free Last Name Generator – Find Unique, Realistic & Meaningful Surnames Instantly</h2>

  <p>
    Choosing the right last name can be just as important as choosing a first name. Whether you're creating a memorable character for a novel, building a fantasy world, developing a video game, researching family history, or simply looking for inspiration, finding the perfect surname can sometimes be surprisingly difficult. Our <strong>Free Last Name Generator</strong> is designed to make that process fast, easy, and enjoyable.
  </p>

  <p>
    With thousands of surname possibilities inspired by different cultures, regions, languages, and historical traditions, this tool helps you discover names that feel authentic and meaningful. Instead of spending hours searching through genealogy websites or historical records, you can generate realistic surnames in seconds and focus on what matters most—your creative project.
  </p>

  <p>
    The generator includes a wide variety of naming styles, including traditional family names, occupational surnames, noble surnames, fantasy-inspired names, historical surnames, and culturally specific last names from around the world. Whether you need a common English surname, a medieval Scottish clan name, a Japanese family name, or a completely original fantasy surname, you'll find plenty of inspiration here.
  </p>

  <p>
    Best of all, everything happens directly in your browser. No registration is required, no software needs to be installed, and your searches remain completely private.
  </p>

  <h3>What Is a Last Name Generator?</h3>

  <p>
    A Last Name Generator is an online tool that automatically creates surnames based on selected criteria such as culture, language, historical period, naming tradition, or style. Instead of manually researching hundreds of possibilities, users can instantly generate relevant surname suggestions that match their specific needs.
  </p>

  <p>
    For example, if you're writing a Victorian-era mystery novel set in London, you may want authentic English surnames like "Bennett," "Whitmore," or "Harrington." If you're creating a fantasy kingdom, you might prefer surnames such as "Stormrider," "Silverthorn," or "Nightshade." A surname generator helps you quickly explore these possibilities without interrupting your creative workflow.
  </p>

  <p>
    These tools are especially useful because surnames often carry cultural, historical, and social significance. The right surname can make a fictional character feel believable and add depth to a story or project.
  </p>

  <h3>How to Use the Last Name Generator</h3>

  <p>
    Using the generator is simple, even if you've never used a naming tool before.
  </p>

  <ul>
    <li>
      <strong>Choose a Surname Category</strong><br>
      Select the type of surname you want, such as realistic, fantasy, historical, noble, royal, modern, or custom-generated surnames.
    </li>

    <li>
      <strong>Select a Cultural Origin</strong><br>
      Choose from various regions and cultures including English, Scottish, Irish, German, French, Spanish, Italian, Chinese, Japanese, Korean, Indian, African, and many more.
    </li>

    <li>
      <strong>Set the Number of Results</strong><br>
      Generate a single surname or create a large list of names for bigger projects.
    </li>

    <li>
      <strong>Apply Additional Filters</strong><br>
      Refine your search by surname meaning, historical period, linguistic style, or cultural background.
    </li>

    <li>
      <strong>Generate and Save</strong><br>
      Click the generate button to instantly receive surname suggestions. Copy your favorites or save them for future use.
    </li>
  </ul>

  <h3>Why Last Names Matter</h3>

  <p>
    Many people focus heavily on first names while overlooking the importance of surnames. However, a surname often tells a story. It can reveal family heritage, occupation, geographical origins, social status, or cultural identity.
  </p>

  <p>
    In fiction writing, the right surname can immediately communicate something about a character. A surname such as "Blackwood" may create a mysterious impression, while a surname like "Baker" suggests ordinary working-class origins. In historical settings, culturally accurate surnames can help immerse readers in the world you've created.
  </p>

  <p>
    For genealogy researchers, surnames can provide valuable clues about migration patterns, family history, and ancestral origins. Understanding surname traditions often helps uncover connections that may otherwise remain hidden.
  </p>

  <h3>Real-Life Example</h3>

  <p>
    Imagine you're writing a fantasy novel featuring a noble family that rules a mountain kingdom. The first name of the main character is already chosen, but you need a surname that sounds powerful and memorable.
  </p>

  <p>
    Instead of randomly inventing names, you can use the Last Name Generator to produce options such as:
  </p>

  <ul>
    <li>Stoneheart</li>
    <li>Ironcrest</li>
    <li>Silverpeak</li>
    <li>Stormhold</li>
    <li>Frostbane</li>
  </ul>

  <p>
    Each surname creates a different atmosphere and helps define the identity of the family. Within seconds, you can discover names that fit perfectly within your fictional world.
  </p>

  <h3>Who Uses a Last Name Generator?</h3>

  <ul>
    <li>
      <strong>Novelists and Authors</strong><br>
      Create believable characters with culturally appropriate family names.
    </li>

    <li>
      <strong>Screenwriters</strong><br>
      Develop memorable character names for films, television shows, and web series.
    </li>

    <li>
      <strong>Game Developers</strong><br>
      Generate surnames for NPCs, factions, clans, and playable characters.
    </li>

    <li>
      <strong>Role-Playing Gamers</strong><br>
      Find names for Dungeons & Dragons campaigns and tabletop adventures.
    </li>

    <li>
      <strong>Genealogy Enthusiasts</strong><br>
      Research surname meanings and historical origins.
    </li>

    <li>
      <strong>Students and Researchers</strong><br>
      Explore naming traditions for academic studies and projects.
    </li>

    <li>
      <strong>Content Creators</strong><br>
      Develop unique online identities, usernames, and fictional personas.
    </li>
  </ul>

  <h3>Major Categories of Surnames</h3>

  <p>
    Surnames around the world generally fall into several major categories. Understanding these categories can help you choose names that fit your intended purpose.
  </p>

  <ul>
    <li>
      <strong>Occupational Surnames</strong><br>
      Derived from professions and trades. Examples include Smith, Baker, Miller, Cooper, and Carpenter.
    </li>

    <li>
      <strong>Patronymic Surnames</strong><br>
      Based on a parent's name. Examples include Johnson, Anderson, MacDonald, and O'Brien.
    </li>

    <li>
      <strong>Topographical Surnames</strong><br>
      Based on landscape features such as hills, rivers, forests, or valleys.
    </li>

    <li>
      <strong>Geographical Surnames</strong><br>
      Derived from towns, villages, regions, or countries.
    </li>

    <li>
      <strong>Descriptive Surnames</strong><br>
      Based on physical traits, personality characteristics, or social attributes.
    </li>

    <li>
      <strong>Noble and Aristocratic Surnames</strong><br>
      Traditionally associated with royalty, nobility, and influential families.
    </li>
  </ul>

  <h3>Why Choose Our Last Name Generator?</h3>

  <p>
    Our tool combines simplicity, flexibility, and authenticity. Instead of generating random letter combinations, it focuses on surnames that reflect genuine naming traditions and believable linguistic patterns.
  </p>

  <p>
    Whether you're creating a fantasy empire, researching family history, building a game world, or simply exploring surname origins, you'll find a wide variety of options suitable for every project.
  </p>

  <p>
    The tool is completely free, works on desktop and mobile devices, and protects your privacy by processing everything locally in your browser.
  </p>

  <h3>Frequently Asked Questions</h3>

  <p>
    <strong>Are the generated surnames real?</strong><br>
    Many generated surnames are based on real naming traditions, while fantasy and fictional options are designed to sound natural and believable.
  </p>

  <p>
    <strong>Can I use generated surnames commercially?</strong><br>
    Yes. Generated surnames can typically be used in books, games, stories, and creative projects.
  </p>

  <p>
    <strong>Can I generate surnames from specific countries?</strong><br>
    Yes. The generator supports a wide variety of cultural and regional naming traditions.
  </p>

  <p>
    <strong>Is there a limit on how many surnames I can generate?</strong><br>
    No. You can generate as many surname lists as you need.
  </p>

  <p>
    <strong>Do I need an account?</strong><br>
    No. The tool is completely free and does not require registration.
  </p>

  <h3>Final Thoughts</h3>

  <p>
    A great surname can add personality, authenticity, and depth to a character, family, or creative project. Whether you're searching for realistic family names, fantasy surnames, historical last names, or culturally inspired options, our Free Last Name Generator provides thousands of possibilities to explore.
  </p>

  <p>
    Start generating today and discover unique surnames that perfectly match your story, game, research project, or creative vision.
  </p>

</div>


<!-- Save List Modal -->
<div id="saveListModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Save Custom Surname List</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Enter a name for your custom list:</p>
      <input type="text" id="listName" placeholder="e.g., Fantasy Characters, Historical Figures, etc." style="width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ddd; border-radius: 6px;">
      <p>Current list contains <span id="listCount">0</span> surnames.</p>
      <textarea id="modalSurnameList" rows="6" style="width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ddd; border-radius: 6px; font-family: monospace;" readonly></textarea>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelSave">Cancel</button>
      <button class="modal-button primary" id="confirmSave">Save List</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const customSurnames = document.getElementById('customSurnames');
    const surnameType = document.getElementById('surnameType');
    const surnameCount = document.getElementById('surnameCount');
    const originButtons = document.querySelectorAll('.origin-button');
    const regionCheckboxes = document.querySelectorAll('input[name="region"]');
    const actionButtons = document.querySelectorAll('.action-button');
    const resultsGrid = document.getElementById('resultsGrid');
    const alertContainer = document.getElementById('alertContainer');
    const includeMeaning = document.getElementById('includeMeaning');
    const includeVariations = document.getElementById('includeVariations');
    
    // Modal elements
    const saveListModal = document.getElementById('saveListModal');
    const listName = document.getElementById('listName');
    const modalSurnameList = document.getElementById('modalSurnameList');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelSave = document.getElementById('cancelSave');
    const confirmSave = document.getElementById('confirmSave');
    
    // Statistics
    let surnamesGenerated = 0;
    
    // Surname databases
    const surnameDatabase = {
      english: [
        { name: "Smith", meaning: "Blacksmith or metalworker", variations: ["Smyth", "Smythe"] },
        { name: "Johnson", meaning: "Son of John", variations: ["Johnston", "Johnstone"] },
        { name: "Williams", meaning: "Son of William", variations: ["Williamson", "Wilson"] },
        { name: "Brown", meaning: "Brown-haired or dark-skinned", variations: ["Browne", "Braun"] },
        { name: "Jones", meaning: "Son of John (Welsh)", variations: [] },
        { name: "Taylor", meaning: "Tailor or clothing maker", variations: ["Tayler", "Tailor"] },
        { name: "Miller", meaning: "Grain miller", variations: ["Müller", "Millar"] },
        { name: "Wilson", meaning: "Son of William", variations: ["Willson", "Wills"] },
        { name: "Davis", meaning: "Son of David", variations: ["Davies", "Davison"] },
        { name: "Clark", meaning: "Clerk or scholar", variations: ["Clarke", "Clerk"] }
      ],
      irish: [
        { name: "Murphy", meaning: "Sea warrior", variations: ["O'Murphy", "MacMurphy"] },
        { name: "O'Brien", meaning: "Descendant of Brian", variations: ["Brien", "Bryan"] },
        { name: "Kelly", meaning: "Warrior or bright-headed", variations: ["O'Kelly", "Kelley"] },
        { name: "Sullivan", meaning: "Dark-eyed one", variations: ["O'Sullivan", "Sullavan"] },
        { name: "Walsh", meaning: "Welshman", variations: ["Welsh", "Walshe"] },
        { name: "Fitzgerald", meaning: "Son of Gerald", variations: ["Fitz", "Gerald"] },
        { name: "Connolly", meaning: "Fierce as a hound", variations: ["Connelly", "O'Connolly"] },
        { name: "Doyle", meaning: "Dark stranger", variations: ["O'Doyle", "Doyles"] },
        { name: "McCarthy", meaning: "Loving person", variations: ["MacCarthy", "Carthy"] },
        { name: "Gallagher", meaning: "Descendant of the foreign helper", variations: ["Gallacher", "Gallager"] }
      ],
      scottish: [
        { name: "MacDonald", meaning: "Son of Donald", variations: ["McDonald", "Donaldson"] },
        { name: "Campbell", meaning: "Crooked mouth", variations: ["MacCampbell", "Cambell"] },
        { name: "Stewart", meaning: "Steward or caretaker", variations: ["Stuart", "Steward"] },
        { name: "MacKenzie", meaning: "Son of Coinneach", variations: ["McKenzie", "Kenzies"] },
        { name: "Ross", meaning: "Headland or peninsula", variations: ["Rosse", "MacRoss"] },
        { name: "MacGregor", meaning: "Son of Gregor", variations: ["McGregor", "Gregor"] },
        { name: "Fraser", meaning: "Strawberry or currant", variations: ["Frazier", "Frasier"] },
        { name: "Morrison", meaning: "Son of Morris", variations: ["Morison", "Morrice"] },
        { name: "Scott", meaning: "From Scotland", variations: ["Scots", "Scot"] },
        { name: "Grant", meaning: "Tall or large", variations: ["Grandt", "Graunt"] }
      ],
      german: [
        { name: "Müller", meaning: "Miller", variations: ["Mueller", "Miller"] },
        { name: "Schmidt", meaning: "Smith or metalworker", variations: ["Schmitt", "Schmid"] },
        { name: "Schneider", meaning: "Tailor", variations: ["Schneid", "Snider"] },
        { name: "Fischer", meaning: "Fisherman", variations: ["Fisher", "Fisch"] },
        { name: "Weber", meaning: "Weaver", variations: ["Webber", "Weber"] },
        { name: "Wagner", meaning: "Wagon maker", variations: ["Wagoner", "Waggoner"] },
        { name: "Becker", meaning: "Baker", variations: ["Bäcker", "Bekker"] },
        { name: "Hoffmann", meaning: "Steward or farm manager", variations: ["Hofmann", "Hoffman"] },
        { name: "Schulz", meaning: "Magistrate or mayor", variations: ["Schultze", "Schulze"] },
        { name: "Meyer", meaning: "Farmer or bailiff", variations: ["Meier", "Mayr"] }
      ],
      french: [
        { name: "Martin", meaning: "Of Mars or warlike", variations: ["Martine", "Martins"] },
        { name: "Bernard", meaning: "Bear-hardy", variations: ["Bernhard", "Bernard"] },
        { name: "Dubois", meaning: "From the woods", variations: ["Dubois", "Bois"] },
        { name: "Thomas", meaning: "Twin", variations: ["Thomass", "Thomas"] },
        { name: "Robert", meaning: "Bright fame", variations: ["Rober", "Robard"] },
        { name: "Richard", meaning: "Powerful ruler", variations: ["Ricard", "Richard"] },
        { name: "Petit", meaning: "Small or little", variations: ["Petite", "Petits"] },
        { name: "Durand", meaning: "Enduring", variations: ["Durand", "Durant"] },
        { name: "Leroy", meaning: "The king", variations: ["LeRoy", "Roy"] },
        { name: "Moreau", meaning: "Dark-skinned", variations: ["Morel", "Moreau"] }
      ],
      spanish: [
        { name: "García", meaning: "Descendant of García", variations: ["Garcia", "Garcías"] },
        { name: "Fernández", meaning: "Son of Fernando", variations: ["Fernandez", "Hernández"] },
        { name: "González", meaning: "Son of Gonzalo", variations: ["Gonzalez", "Gonçalves"] },
        { name: "López", meaning: "Son of Lope", variations: ["Lopez", "Lopes"] },
        { name: "Martínez", meaning: "Son of Martín", variations: ["Martinez", "Martín"] },
        { name: "Rodríguez", meaning: "Son of Rodrigo", variations: ["Rodriguez", "Rodrigues"] },
        { name: "Sánchez", meaning: "Son of Sancho", variations: ["Sanchez", "Sancho"] },
        { name: "Pérez", meaning: "Son of Pedro", variations: ["Perez", "Peres"] },
        { name: "Romero", meaning: "Pilgrim or traveler", variations: ["Romera", "Romer"] },
        { name: "Alvarez", meaning: "Son of Álvaro", variations: ["Álvarez", "Alvares"] }
      ],
      italian: [
        { name: "Rossi", meaning: "Red-haired", variations: ["Rosso", "Russ"] },
        { name: "Russo", meaning: "Red-haired (Southern)", variations: ["Russa", "Russi"] },
        { name: "Ferrari", meaning: "Blacksmith", variations: ["Ferraro", "Ferro"] },
        { name: "Esposito", meaning: "Exposed or foundling", variations: ["Esposto", "Sposto"] },
        { name: "Bianchi", meaning: "White or fair-haired", variations: ["Bianco", "Bianca"] },
        { name: "Romano", meaning: "From Rome", variations: ["Romani", "Roman"] },
        { name: "Colombo", meaning: "Dove or pigeon", variations: ["Colomba", "Colum"] },
        { name: "Ricci", meaning: "Curly-haired", variations: ["Riccio", "Rizzo"] },
        { name: "Marino", meaning: "From the sea", variations: ["Marini", "Mari"] },
        { name: "Greco", meaning: "Greek", variations: ["Grechi", "Greca"] }
      ],
      chinese: [
        { name: "Wang", meaning: "King or monarch", variations: ["Wong", "Wang"] },
        { name: "Li", meaning: "Plum tree", variations: ["Lee", "Lei"] },
        { name: "Zhang", meaning: "To stretch or bow", variations: ["Chang", "Cheung"] },
        { name: "Liu", meaning: "Willow tree", variations: ["Lau", "Liew"] },
        { name: "Chen", meaning: "Exhibit or ancient", variations: ["Chan", "Cheng"] },
        { name: "Yang", meaning: "Aspen or poplar", variations: ["Young", "Yeung"] },
        { name: "Huang", meaning: "Yellow", variations: ["Wong", "Hwang"] },
        { name: "Zhao", meaning: "To surpass", variations: ["Chiu", "Zhao"] },
        { name: "Wu", meaning: "Military or martial", variations: ["Ng", "Woo"] },
        { name: "Xu", meaning: "Empty or void", variations: ["Hsu", "Chui"] }
      ],
      japanese: [
        { name: "Sato", meaning: "Help + wisteria", variations: ["Satō", "Sato"] },
        { name: "Suzuki", meaning: "Bell tree", variations: ["Suzuki", "Suzuki"] },
        { name: "Takahashi", meaning: "High bridge", variations: ["Takahas", "Tak"] },
        { name: "Tanaka", meaning: "Rice field + middle", variations: ["Tanaka", "Tanak"] },
        { name: "Watanabe", meaning: "Travel + boundary", variations: ["Watanab", "Wata"] },
        { name: "Ito", meaning: "This + wisteria", variations: ["Itō", "Itoh"] },
        { name: "Yamamoto", meaning: "Mountain + base", variations: ["Yamamo", "Yama"] },
        { name: "Nakamura", meaning: "Middle village", variations: ["Nakamur", "Naka"] },
        { name: "Kobayashi", meaning: "Small forest", variations: ["Kobayash", "Koba"] },
        { name: "Kato", meaning: "Add + wisteria", variations: ["Katō", "Kato"] }
      ],
      korean: [
        { name: "Kim", meaning: "Gold", variations: ["Gim", "Kym"] },
        { name: "Lee", meaning: "Plum tree", variations: ["Li", "Yi", "Rhee"] },
        { name: "Park", meaning: "Gourd", variations: ["Pak", "Bak"] },
        { name: "Choi", meaning: "Top or peak", variations: ["Choe", "Che"] },
        { name: "Jung", meaning: "Right or proper", variations: ["Jeong", "Chung"] },
        { name: "Kang", meaning: "River", variations: ["Gang", "Kang"] },
        { name: "Cho", meaning: "Dynasty", variations: ["Jo", "Choh"] },
        { name: "Yoon", meaning: "Govern or rule", variations: ["Yun", "Youn"] },
        { name: "Jang", meaning: "Archer", variations: ["Chang", "Jahn"] },
        { name: "Lim", meaning: "Forest", variations: ["Im", "Rim"] }
      ],
      indian: [
        { name: "Patel", meaning: "Village headman", variations: ["Patil", "Patal"] },
        { name: "Sharma", meaning: "Joy or comfort", variations: ["Sarma", "Sharman"] },
        { name: "Singh", meaning: "Lion", variations: ["Sinha", "Sing"] },
        { name: "Kumar", meaning: "Prince or son", variations: ["Kumara", "Kum"] },
        { name: "Das", meaning: "Servant", variations: ["Dass", "Dasa"] },
        { name: "Gupta", meaning: "Protected", variations: ["Gupt", "Guft"] },
        { name: "Choudhury", meaning: "Lord or master", variations: ["Chowdhury", "Chaudhry"] },
        { name: "Banerjee", meaning: "Teacher from Bandoghat", variations: ["Banerji", "Bannerjee"] },
        { name: "Nair", meaning: "Leader or head", variations: ["Nayar", "Nair"] },
        { name: "Menon", meaning: "Accountant", variations: ["Menon", "Menon"] }
      ],
      russian: [
        { name: "Ivanov", meaning: "Son of Ivan", variations: ["Ivanova", "Ivanoff"] },
        { name: "Smirnov", meaning: "Peaceful or quiet", variations: ["Smirnova", "Smirnoff"] },
        { name: "Kuznetsov", meaning: "Son of blacksmith", variations: ["Kuznetsova", "Kuznetsoff"] },
        { name: "Popov", meaning: "Son of priest", variations: ["Popova", "Popoff"] },
        { name: "Vasilyev", meaning: "Son of Vasily", variations: ["Vasilyeva", "Vasiliev"] },
        { name: "Petrov", meaning: "Son of Peter", variations: ["Petrova", "Petroff"] },
        { name: "Sokolov", meaning: "Falcon", variations: ["Sokolova", "Sokoloff"] },
        { name: "Mikhailov", meaning: "Son of Mikhail", variations: ["Mikhailova", "Mikhailoff"] },
        { name: "Novikov", meaning: "Newcomer", variations: ["Novikova", "Novikoff"] },
        { name: "Fedorov", meaning: "Son of Fedor", variations: ["Fedorova", "Fedoroff"] }
      ],
      scandinavian: [
        { name: "Andersen", meaning: "Son of Anders", variations: ["Andersson", "Anderssen"] },
        { name: "Johansen", meaning: "Son of Johan", variations: ["Johansson", "Johannsen"] },
        { name: "Nielsen", meaning: "Son of Niels", variations: ["Nilsson", "Nielson"] },
        { name: "Hansen", meaning: "Son of Hans", variations: ["Hansson", "Hansen"] },
        { name: "Pedersen", meaning: "Son of Peder", variations: ["Petersen", "Pederson"] },
        { name: "Christensen", meaning: "Son of Christen", variations: ["Kristensen", "Christiansen"] },
        { name: "Larsen", meaning: "Son of Lars", variations: ["Larsson", "Larsen"] },
        { name: "Jensen", meaning: "Son of Jens", variations: ["Jenssen", "Jensen"] },
        { name: "Olsen", meaning: "Son of Ole", variations: ["Olsson", "Olsen"] },
        { name: "Berg", meaning: "Mountain", variations: ["Berger", "Bergs"] }
      ],
      arabic: [
        { name: "Al-Rashid", meaning: "The rightly guided", variations: ["Rashid", "Rashed"] },
        { name: "Hassan", meaning: "Handsome or good", variations: ["Hasan", "Hassen"] },
        { name: "Hussein", meaning: "Little handsome one", variations: ["Hussain", "Husayn"] },
        { name: "Ali", meaning: "Exalted or noble", variations: ["Aly", "Ally"] },
        { name: "Mohammed", meaning: "Praiseworthy", variations: ["Muhammad", "Mohamed"] },
        { name: "Ibrahim", meaning: "Father of many", variations: ["Ibraheem", "Abraham"] },
        { name: "Abdullah", meaning: "Servant of God", variations: ["Abdalla", "Abdallah"] },
        { name: "Omar", meaning: "Flourishing or long-lived", variations: ["Umar", "Omer"] },
        { name: "Said", meaning: "Happy or fortunate", variations: ["Saeed", "Saïd"] },
        { name: "Karim", meaning: "Generous or noble", variations: ["Kareem", "Créme"] }
      ],
      jewish: [
        { name: "Cohen", meaning: "Priest", variations: ["Kohen", "Kohn"] },
        { name: "Levi", meaning: "Attached or joined", variations: ["Levy", "Levie"] },
        { name: "Goldberg", meaning: "Golden mountain", variations: ["Gold", "Goldburg"] },
        { name: "Friedman", meaning: "Peaceful man", variations: ["Freedman", "Friedmann"] },
        { name: "Rosenberg", meaning: "Rose mountain", variations: ["Rosemberg", "Rosenburg"] },
        { name: "Katz", meaning: "Righteous priest", variations: ["Katzman", "Katz"] },
        { name: "Kaplan", meaning: "Priest's assistant", variations: ["Kaplon", "Caplan"] },
        { name: "Schwartz", meaning: "Black", variations: ["Schwarz", "Schwartze"] },
        { name: "Weiss", meaning: "White", variations: ["Weisz", "Weissman"] },
        { name: "Shapiro", meaning: "Beautiful or pleasant", variations: ["Sapiro", "Shapira"] }
      ]
    };
    
    // Fantasy surname database
    const fantasySurnames = [
      { name: "Stormborn", meaning: "Born during a storm", variations: [] },
      { name: "Ironheart", meaning: "Strong-willed and brave", variations: ["Ironhart"] },
      { name: "Shadowmere", meaning: "From the shadow lake", variations: ["Shademere"] },
      { name: "Firebrand", meaning: "Torch or passionate", variations: ["Firebrandt"] },
      { name: "Winterfell", meaning: "From the winter hill", variations: ["Wynterfell"] },
      { name: "Silverwood", meaning: "From the silver forest", variations: ["Silverbough"] },
      { name: "Blackthorn", meaning: "Dark thorn bush", variations: ["Blackthorne"] },
      { name: "Goldweaver", meaning: "Weaver of gold", variations: ["Goldweber"] },
      { name: "Dragonheart", meaning: "Heart of a dragon", variations: ["Drakonheart"] },
      { name: "Moonshadow", meaning: "Shadow of the moon", variations: ["Moonshade"] },
      { name: "Starseeker", meaning: "One who seeks stars", variations: ["Starsearcher"] },
      { name: "Whisperwind", meaning: "Whispering wind", variations: ["Whisperwynd"] },
      { name: "Oakenshield", meaning: "Shield made of oak", variations: ["Oakshield"] },
      { name: "Bloodaxe", meaning: "Bloody axe", variations: ["Blutaxe"] },
      { name: "Stormcrow", meaning: "Crow of storms", variations: ["Stormraven"] }
    ];
    
    // Royal surnames
    const royalSurnames = [
      { name: "Plantagenet", meaning: "Royal dynasty of England", variations: ["Plantagent"] },
      { name: "Tudor", meaning: "Welsh royal dynasty", variations: ["Tudor"] },
      { name: "Stuart", meaning: "Scottish royal house", variations: ["Stewart"] },
      { name: "Habsburg", meaning: "Austrian royal house", variations: ["Hapsburg"] },
      { name: "Bourbon", meaning: "French royal house", variations: ["Borbón"] },
      { name: "Romanov", meaning: "Russian imperial house", variations: ["Romanoff"] },
      { name: "Hohenzollern", meaning: "German royal house", variations: [] },
      { name: "Savoy", meaning: "Italian royal house", variations: ["Savoie"] },
      { name: "Bernadotte", meaning: "Swedish royal house", variations: [] },
      { name: "Windsor", meaning: "British royal house", variations: ["Windsor"] }
    ];
    
    // Initialize
    updateCounters();
    setActiveOrigin('all');
    
    // Event listeners
    originButtons.forEach(button => {
      button.addEventListener('click', function () {
        const origin = this.getAttribute('data-origin');
        setActiveOrigin(origin);
      });
    });
    
    surnameType.addEventListener('change', function() {
      if (this.value === 'custom') {
        customSurnames.style.display = 'block';
        showAlert('Enter your custom surnames list above, one per line.', 'success');
      } else {
        customSurnames.style.display = 'block';
      }
    });
    
    actionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleAction(action);
      });
    });
    
    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        saveListModal.style.display = 'none';
        listName.value = '';
      });
    });
    
    // Close modal when clicking cancel
    cancelSave.addEventListener('click', function() {
      saveListModal.style.display = 'none';
      listName.value = '';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === saveListModal) {
        saveListModal.style.display = 'none';
        listName.value = '';
      }
    });
    
    // Confirm save button
    confirmSave.addEventListener('click', function() {
      const name = listName.value.trim();
      if (!name) {
        showAlert('Please enter a name for your list.', 'error');
        return;
      }
      
      // In a real implementation, you would save to localStorage or a database
      showAlert(`List "${name}" saved successfully!`, 'success');
      saveListModal.style.display = 'none';
      listName.value = '';
    });
    
    function setActiveOrigin(origin) {
      originButtons.forEach(button => {
        if (button.getAttribute('data-origin') === origin) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    }
    
    function getSelectedOrigin() {
      const activeButton = document.querySelector('.origin-button.active');
      return activeButton ? activeButton.getAttribute('data-origin') : 'all';
    }
    
    function getSelectedRegions() {
      const selected = [];
      regionCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
          selected.push(checkbox.value);
        }
      });
      return selected;
    }
    
    function handleAction(action) {
      switch (action) {
        case 'generate':
          generateSurnames();
          break;
          
        case 'generate-more':
          generateSurnames();
          break;
          
        case 'copy':
          copySurnamesToClipboard();
          break;
          
        case 'export':
          exportSurnamesAsCSV();
          break;
          
        case 'clear':
          clearResults();
          break;
          
        case 'save-list':
          saveCustomList();
          break;
          
        case 'refresh':
          generateSurnames(true);
          break;
      }
    }
    
    function generateSurnames(refresh = false) {
      const type = surnameType.value;
      const count = parseInt(surnameCount.value) || 10;
      const origin = getSelectedOrigin();
      const regions = getSelectedRegions();
      const showMeaning = includeMeaning.checked;
      const showVariations = includeVariations.checked;
      
      // Clear previous results if refreshing
      if (refresh) {
        resultsGrid.innerHTML = '';
      }
      
      // Generate surnames based on type
      if (type === 'custom') {
        generateCustomSurnames(count);
      } else if (type === 'fantasy') {
        generateFantasySurnames(count, showMeaning, showVariations);
      } else if (type === 'royal') {
        generateRoyalSurnames(count, showMeaning, showVariations);
      } else if (type === 'historical') {
        generateHistoricalSurnames(count, showMeaning, showVariations);
      } else {
        generateRealisticSurnames(count, origin, regions, showMeaning, showVariations);
      }
      
      updateCounters();
      showAlert(`Generated ${count} surname${count > 1 ? 's' : ''} successfully!`, 'success');
    }
    
    function generateRealisticSurnames(count, origin, regions, showMeaning, showVariations) {
      let availableRegions = [];
      
      if (origin === 'european') {
        availableRegions = ['english', 'irish', 'scottish', 'german', 'french', 'spanish', 'italian', 'russian', 'scandinavian'];
      } else if (origin === 'asian') {
        availableRegions = ['chinese', 'japanese', 'korean', 'indian'];
      } else if (origin === 'african') {
        // Add African regions when available
        availableRegions = ['arabic'];
      } else if (origin === 'hispanic') {
        availableRegions = ['spanish', 'mexican'];
      } else {
        availableRegions = regions.length > 0 ? regions : Object.keys(surnameDatabase);
      }
      
      for (let i = 0; i < count; i++) {
        const region = availableRegions[Math.floor(Math.random() * availableRegions.length)];
        const regionSurnames = surnameDatabase[region];
        
        if (regionSurnames && regionSurnames.length > 0) {
          const surname = regionSurnames[Math.floor(Math.random() * regionSurnames.length)];
          createSurnameCard(surname, region, showMeaning, showVariations);
          surnamesGenerated++;
        }
      }
    }
    
    function generateFantasySurnames(count, showMeaning, showVariations) {
      for (let i = 0; i < count; i++) {
        const surname = fantasySurnames[Math.floor(Math.random() * fantasySurnames.length)];
        createSurnameCard(surname, 'fantasy', showMeaning, showVariations);
        surnamesGenerated++;
      }
    }
    
    function generateRoyalSurnames(count, showMeaning, showVariations) {
      for (let i = 0; i < count; i++) {
        const surname = royalSurnames[Math.floor(Math.random() * royalSurnames.length)];
        createSurnameCard(surname, 'royal', showMeaning, showVariations);
        surnamesGenerated++;
      }
    }
    
    function generateHistoricalSurnames(count, showMeaning, showVariations) {
      // Mix of historical surnames from various periods
      const historical = [
        ...royalSurnames,
        ...surnameDatabase.english.slice(0, 5),
        ...surnameDatabase.german.slice(0, 5),
        ...surnameDatabase.french.slice(0, 5)
      ];
      
      for (let i = 0; i < count; i++) {
        const surname = historical[Math.floor(Math.random() * historical.length)];
        createSurnameCard(surname, 'historical', showMeaning, showVariations);
        surnamesGenerated++;
      }
    }
    
    function generateCustomSurnames(count) {
      const customList = customSurnames.value.trim();
      if (!customList) {
        showAlert('Please enter some surnames in your custom list first.', 'error');
        return;
      }
      
      const names = customList.split('\n').filter(name => name.trim().length > 0);
      if (names.length === 0) {
        showAlert('No valid surnames found in your custom list.', 'error');
        return;
      }
      
      for (let i = 0; i < count; i++) {
        const randomName = names[Math.floor(Math.random() * names.length)];
        
        // Create surname card
        const surnameCard = document.createElement('div');
        surnameCard.className = 'surname-card';
        surnameCard.innerHTML = `
          <div class="surname-text">${randomName}</div>
          <div class="surname-details">
            <span>Custom List</span>
            <span>Random</span>
          </div>
        `;
        
        resultsGrid.appendChild(surnameCard);
        surnamesGenerated++;
      }
    }
    
    function createSurnameCard(surname, category, showMeaning, showVariations) {
      const surnameCard = document.createElement('div');
      surnameCard.className = 'surname-card';
      
      let details = `<div class="surname-text">${surname.name}</div>`;
      details += `<div class="surname-details">`;
      details += `<span>${getRegionName(category)}</span>`;
      details += `</div>`;
      
      if (showMeaning && surname.meaning) {
        details += `<div class="surname-meaning">${surname.meaning}</div>`;
      }
      
      if (showVariations && surname.variations && surname.variations.length > 0) {
        const variations = surname.variations.slice(0, 2).join(', ');
        details += `<div class="surname-meaning" style="color: #3498db;">Variations: ${variations}</div>`;
      }
      
      surnameCard.innerHTML = details;
      resultsGrid.appendChild(surnameCard);
    }
    
    function getRegionName(code) {
      const regionNames = {
        english: 'English',
        irish: 'Irish',
        scottish: 'Scottish',
        german: 'German',
        french: 'French',
        spanish: 'Spanish',
        italian: 'Italian',
        chinese: 'Chinese',
        japanese: 'Japanese',
        korean: 'Korean',
        indian: 'Indian',
        russian: 'Russian',
        scandinavian: 'Scandinavian',
        arabic: 'Arabic',
        jewish: 'Jewish',
        fantasy: 'Fantasy',
        royal: 'Royal/Noble',
        historical: 'Historical',
        'all': 'All Origins',
        'european': 'European',
        'asian': 'Asian',
        'african': 'African',
        'hispanic': 'Hispanic'
      };
      return regionNames[code] || code;
    }
    
    function copySurnamesToClipboard() {
      const surnameCards = resultsGrid.querySelectorAll('.surname-text');
      if (surnameCards.length === 0) {
        showAlert('No surnames to copy. Generate some surnames first.', 'error');
        return;
      }
      
      const names = Array.from(surnameCards).map(card => card.textContent).join('\n');
      
      navigator.clipboard.writeText(names).then(() => {
        showAlert(`${surnameCards.length} surname${surnameCards.length > 1 ? 's' : ''} copied to clipboard!`, 'success');
      }).catch(err => {
        showAlert('Failed to copy surnames: ' + err, 'error');
      });
    }
    
    function exportSurnamesAsCSV() {
      const surnameCards = resultsGrid.querySelectorAll('.surname-card');
      if (surnameCards.length === 0) {
        showAlert('No surnames to export. Generate some surnames first.', 'error');
        return;
      }
      
      let csvContent = "Surname,Origin,Meaning\n";
      
      surnameCards.forEach(card => {
        const name = card.querySelector('.surname-text').textContent;
        const details = card.querySelectorAll('.surname-details span');
        const origin = details.length > 0 ? details[0].textContent : 'Unknown';
        
        let meaning = '';
        const meaningElement = card.querySelector('.surname-meaning:not([style*="color"])');
        if (meaningElement) {
          meaning = meaningElement.textContent;
        }
        
        csvContent += `"${name}","${origin}","${meaning}"\n`;
      });
      
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'generated_surnames.csv';
      a.click();
      
      showAlert(`Exported ${surnameCards.length} surname${surnameCards.length > 1 ? 's' : ''} as CSV file!`, 'success');
    }
    
    function clearResults() {
      resultsGrid.innerHTML = '';
      surnamesGenerated = 0;
      updateCounters();
      showAlert('All surnames cleared.', 'success');
    }
    
    function saveCustomList() {
      const surnameCards = resultsGrid.querySelectorAll('.surname-text');
      if (surnameCards.length === 0) {
        showAlert('No surnames to save. Generate some surnames first.', 'error');
        return;
      }
      
      const names = Array.from(surnameCards).map(card => card.textContent).join('\n');
      modalSurnameList.value = names;
      document.getElementById('listCount').textContent = surnameCards.length;
      saveListModal.style.display = 'block';
    }
    
    function updateCounters() {
      document.getElementById('surnamesCount').textContent = surnamesGenerated;
      document.getElementById('culturesCount').textContent = Object.keys(surnameDatabase).length;
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
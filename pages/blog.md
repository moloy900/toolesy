---
layout: default
title: Blog
permalink: /blog/
---




<style>
    /* Blog Posting System Styles */
    .blog-container {
        padding: 20px;
        max-width: 1400px;
        margin: 0 auto;
    }

    .blog-container h1 {
        color: var(--primary);
        text-align: center;
        margin-bottom: 10px;
        font-size: 2.5rem;
        border-bottom: 3px solid var(--primary);
        padding-bottom: 15px;
    }

    .blog-intro {
        text-align: center;
        color: #666;
        margin-bottom: 40px;
        font-size: 1.1rem;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }

    .blog-content {
        display: grid;
        grid-template-columns: 1fr 350px;
        gap: 40px;
        margin-bottom: 40px;
    }

    /* Blog Posts Section */
    .blog-posts-section h2,
    .blog-sidebar h2,
    .create-post-section h2 {
        color: var(--primary);
        margin-bottom: 20px;
        font-size: 1.5rem;
        border-bottom: 2px solid #f0f0f0;
        padding-bottom: 10px;
    }

    /* Blog Cards */
    .blog-posts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 25px;
    }

    .blog-card {
        background: #f8f9fa;
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.3s ease;
        border: 1px solid #e0e6ed;
        cursor: pointer;
        position: relative;
    }

    .blog-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        border-color: var(--primary);
    }

    .blog-card-header {
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        padding: 20px;
        color: white;
    }

    .blog-card-header h3 {
        margin: 0;
        font-size: 1.3rem;
        line-height: 1.4;
    }

    .blog-card-meta {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        font-size: 0.85rem;
        opacity: 0.9;
    }

    .blog-card-body {
        padding: 20px;
    }

    .blog-card-excerpt {
        color: #666;
        line-height: 1.6;
        margin-bottom: 15px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .blog-card-footer {
        padding: 15px 20px;
        border-top: 1px solid #e0e6ed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
    }

    .read-more {
        color: var(--primary);
        font-weight: 600;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 5px;
    }

    .read-more:hover {
        gap: 10px;
    }

    .blog-category {
        background: #e8f4f8;
        padding: 4px 10px;
        border-radius: 20px;
        font-size: 0.75rem;
        color: var(--primary);
    }

    /* Sidebar */
    .blog-sidebar {
        position: sticky;
        top: 20px;
        align-self: start;
    }

    .sidebar-card {
        background: #f8f9fa;
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 25px;
        border-left: 4px solid var(--primary);
    }

    .sidebar-card h3 {
        margin-top: 0;
        margin-bottom: 15px;
        color: var(--primary);
        font-size: 1.2rem;
    }

    .category-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .category-list li {
        margin-bottom: 10px;
    }

    .category-list a {
        color: #555;
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        transition: all 0.3s ease;
    }

    .category-list a:hover {
        color: var(--primary);
        padding-left: 10px;
    }

    .recent-post-item {
        display: flex;
        flex-direction: column;
        padding: 12px 0;
        border-bottom: 1px solid #e0e6ed;
    }

    .recent-post-item:last-child {
        border-bottom: none;
    }

    .recent-post-title {
        font-weight: 600;
        color: #333;
        text-decoration: none;
        margin-bottom: 5px;
    }

    .recent-post-title:hover {
        color: var(--primary);
    }

    .recent-post-date {
        font-size: 0.75rem;
        color: #999;
    }

    /* Create Post Section (Admin) */
    .create-post-section {
        background: #f8f9fa;
        padding: 30px;
        border-radius: 12px;
        border-left: 4px solid var(--primary);
        margin-bottom: 40px;
    }

    .create-post-form .form-group {
        margin-bottom: 20px;
    }

    .create-post-form label {
        display: block;
        margin-bottom: 8px;
        font-weight: 600;
        color: #333;
    }

    .create-post-form input,
    .create-post-form select,
    .create-post-form textarea {
        width: 100%;
        padding: 12px 15px;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 16px;
        font-family: inherit;
        transition: all 0.3s ease;
    }

    .create-post-form input:focus,
    .create-post-form select:focus,
    .create-post-form textarea:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
    }

    .submit-post-btn {
        background: var(--primary);
        color: white;
        padding: 12px 25px;
        border: none;
        border-radius: 6px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .submit-post-btn:hover {
        background: var(--secondary);
        transform: translateY(-2px);
    }

    .admin-toggle {
        text-align: center;
        margin-bottom: 20px;
    }

    .admin-toggle-btn {
        background: #6c757d;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
    }

    .admin-panel {
        display: none;
    }

    .admin-panel.active {
        display: block;
    }

    /* Modal for Viewing Full Post */
    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        animation: fadeIn 0.3s;
    }

    .modal-content {
        background-color: #fefefe;
        margin: 5% auto;
        padding: 0;
        border-radius: 12px;
        width: 90%;
        max-width: 800px;
        max-height: 85vh;
        overflow-y: auto;
        animation: slideIn 0.3s;
    }

    .modal-header {
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        color: white;
        padding: 20px;
        border-radius: 12px 12px 0 0;
        position: sticky;
        top: 0;
    }

    .modal-header h2 {
        margin: 0 0 10px 0;
    }

    .modal-meta {
        display: flex;
        gap: 15px;
        font-size: 0.85rem;
        opacity: 0.9;
    }

    .modal-body {
        padding: 25px;
        line-height: 1.8;
        color: #333;
    }

    .modal-body img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin: 15px 0;
    }

    .modal-footer {
        padding: 15px 20px;
        border-top: 1px solid #eee;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }

    .close-modal {
        color: white;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        position: absolute;
        right: 20px;
        top: 15px;
    }

    .close-modal:hover {
        opacity: 0.8;
    }

    .modal-button {
        padding: 10px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
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

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideIn {
        from { transform: translateY(-50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }

    .form-message {
        padding: 15px;
        border-radius: 6px;
        margin-top: 20px;
        display: none;
    }

    .form-message.success {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
        display: block;
    }

    .form-message.error {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
        display: block;
    }

    .delete-post {
        background: #dc3545;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
    }

    .delete-post:hover {
        background: #c82333;
    }

    .edit-post {
        background: #ffc107;
        color: #212529;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
        margin-right: 5px;
    }

    .edit-post:hover {
        background: #e0a800;
    }

    .admin-actions {
        display: flex;
        gap: 5px;
    }

    @media (max-width: 768px) {
        .blog-content {
            grid-template-columns: 1fr;
        }

        .blog-container {
            padding: 15px;
        }

        .blog-container h1 {
            font-size: 2rem;
        }

        .blog-posts-grid {
            grid-template-columns: 1fr;
        }

        .create-post-section {
            padding: 20px;
        }

        .modal-content {
            margin: 10% auto;
            width: 95%;
        }
    }
</style>

<div class="blog-container">
    <h1>Toolsy Blog</h1>
    <p class="blog-intro">Welcome to toolsy.com blog! Read our latest articles, tutorials, and updates about our tools and services.</p>

    <!-- Admin Toggle Button -->
    <div class="admin-toggle">
        <button class="admin-toggle-btn" onclick="toggleAdminPanel()">
            <i class="fas fa-user-shield"></i> Admin Panel (Create Post)
        </button>
    </div>

    <!-- Create Post Section (Admin Only) -->
    <div id="adminPanel" class="admin-panel">
        <div class="create-post-section">
            <h2>Create New Blog Post</h2>
            <form id="createPostForm" class="create-post-form">
                <div class="form-group">
                    <label for="postTitle">Post Title *</label>
                    <input type="text" id="postTitle" name="postTitle" placeholder="Enter post title" required>
                </div>

                <div class="form-group">
                    <label for="postCategory">Category *</label>
                    <select id="postCategory" name="postCategory" required>
                        <option value="">Select Category</option>
                        <option value="Tools">Tools</option>
                        <option value="Tutorials">Tutorials</option>
                        <option value="Updates">Updates</option>
                        <option value="News">News</option>
                        <option value="Tips">Tips & Tricks</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="postExcerpt">Short Excerpt (Summary) *</label>
                    <textarea id="postExcerpt" rows="3" placeholder="Write a short summary of your post..." required></textarea>
                </div>

                <div class="form-group">
                    <label for="postContent">Full Content *</label>
                    <textarea id="postContent" rows="8" placeholder="Write your full blog post content here..." required></textarea>
                </div>

                <div class="form-group">
                    <label for="postImage">Featured Image URL (Optional)</label>
                    <input type="text" id="postImage" placeholder="https://example.com/image.jpg">
                </div>

                <button type="submit" class="submit-post-btn">Publish Post</button>
                <div id="postFormMessage" class="form-message"></div>
            </form>
        </div>
    </div>

    <div class="blog-content">
        <!-- Blog Posts Section -->
        <div class="blog-posts-section">
            <h2>Latest Blog Posts</h2>
            <div id="blogPostsGrid" class="blog-posts-grid">
                <!-- Posts will be loaded here dynamically -->
                <div style="text-align: center; color: #999; padding: 40px; grid-column: 1/-1;">
                    <i class="fas fa-spinner fa-spin" style="font-size: 48px; margin-bottom: 15px; display: block;"></i>
                    Loading posts...
                </div>
            </div>
        </div>

        <!-- Sidebar -->
        <div class="blog-sidebar">
            <div class="sidebar-card">
                <h3><i class="fas fa-tags"></i> Categories</h3>
                <ul id="categoryList" class="category-list">
                    <li><a href="#" data-category="all">All Posts <span id="allCount">(0)</span></a></li>
                    <li><a href="#" data-category="Tools">Tools <span id="toolsCount">(0)</span></a></li>
                    <li><a href="#" data-category="Tutorials">Tutorials <span id="tutorialsCount">(0)</span></a></li>
                    <li><a href="#" data-category="Updates">Updates <span id="updatesCount">(0)</span></a></li>
                    <li><a href="#" data-category="News">News <span id="newsCount">(0)</span></a></li>
                    <li><a href="#" data-category="Tips">Tips & Tricks <span id="tipsCount">(0)</span></a></li>
                </ul>
            </div>

            <div class="sidebar-card">
                <h3><i class="fas fa-clock"></i> Recent Posts</h3>
                <div id="recentPostsList">
                    <!-- Recent posts will be loaded here -->
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal for Viewing Full Post -->
<div id="postModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <span class="close-modal" onclick="closeModal()">&times;</span>
            <h2 id="modalTitle">Post Title</h2>
            <div class="modal-meta">
                <span id="modalCategory"><i class="fas fa-folder"></i> Category</span>
                <span id="modalDate"><i class="fas fa-calendar"></i> Date</span>
            </div>
        </div>
        <div class="modal-body" id="modalBody">
            Post content will appear here...
        </div>
        <div class="modal-footer">
            <button class="modal-button secondary" onclick="closeModal()">Close</button>
        </div>
    </div>
</div>

<script>
    // Blog Posting System
    let allPosts = [];
    let currentCategory = 'all';

    // Load posts from localStorage
    function loadPosts() {
        const stored = localStorage.getItem('blogPosts');
        if (stored) {
            allPosts = JSON.parse(stored);
        } else {
            // Sample posts for demo
            allPosts = [
                {
                    id: 'post_1',
                    title: 'Welcome to toolsy.com Blog!',
                    category: 'News',
                    excerpt: 'We are excited to launch our new blog platform where we will share updates, tutorials, and tips about our tools.',
                    content: '<p>Welcome to the official toolsy.com blog! We are thrilled to have you here. This blog will serve as a central hub for all things related to our tools and services.</p><p>Stay tuned for regular updates, in-depth tutorials, and useful tips that will help you get the most out of our tools. Whether you are a new user or a long-time customer, there will be something for everyone.</p><p>We value your feedback, so please feel free to reach out to us with any suggestions or topics you would like us to cover!</p>',
                    image: '',
                    date: new Date().toISOString(),
                    timestamp: Date.now()
                }
              
            ];
            savePosts();
        }
        
        // Sort posts by date (newest first)
        allPosts.sort((a, b) => b.timestamp - a.timestamp);
        displayPosts();
        updateSidebar();
    }

    // Save posts to localStorage
    function savePosts() {
        localStorage.setItem('blogPosts', JSON.stringify(allPosts));
    }

    // Display posts based on current category
    function displayPosts() {
        const grid = document.getElementById('blogPostsGrid');
        let filteredPosts = allPosts;
        
        if (currentCategory !== 'all') {
            filteredPosts = allPosts.filter(post => post.category === currentCategory);
        }
        
        if (filteredPosts.length === 0) {
            grid.innerHTML = '<div style="text-align: center; color: #999; padding: 40px; grid-column: 1/-1;"><i class="fas fa-newspaper" style="font-size: 48px; margin-bottom: 15px; display: block;"></i>No posts found in this category.</div>';
            return;
        }
        
        let html = '';
        filteredPosts.forEach(post => {
            const date = new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
            
            html += `
                <div class="blog-card" onclick="viewPost('${post.id}')">
                    <div class="blog-card-header">
                        <h3>${escapeHtml(post.title)}</h3>
                        <div class="blog-card-meta">
                            <span><i class="fas fa-folder"></i> ${post.category}</span>
                            <span><i class="fas fa-calendar"></i> ${date}</span>
                        </div>
                    </div>
                    <div class="blog-card-body">
                        <div class="blog-card-excerpt">${escapeHtml(post.excerpt)}</div>
                    </div>
                    <div class="blog-card-footer">
                        <span class="blog-category">${post.category}</span>
                        <a href="#" class="read-more" onclick="event.stopPropagation(); viewPost('${post.id}')">Read More <i class="fas fa-arrow-right"></i></a>
                        ${isAdminMode() ? `<div class="admin-actions" onclick="event.stopPropagation()">
                            <button class="edit-post" onclick="editPost('${post.id}')"><i class="fas fa-edit"></i> Edit</button>
                            <button class="delete-post" onclick="deletePost('${post.id}')"><i class="fas fa-trash"></i> Delete</button>
                        </div>` : ''}
                    </div>
                </div>
            `;
        });
        
        grid.innerHTML = html;
    }

    // Update sidebar with categories and recent posts
    function updateSidebar() {
        // Update category counts
        const counts = {
            all: allPosts.length,
            Tools: allPosts.filter(p => p.category === 'Tools').length,
            Tutorials: allPosts.filter(p => p.category === 'Tutorials').length,
            Updates: allPosts.filter(p => p.category === 'Updates').length,
            News: allPosts.filter(p => p.category === 'News').length,
            Tips: allPosts.filter(p => p.category === 'Tips').length
        };
        
        document.getElementById('allCount').innerHTML = `(${counts.all})`;
        document.getElementById('toolsCount').innerHTML = `(${counts.Tools})`;
        document.getElementById('tutorialsCount').innerHTML = `(${counts.Tutorials})`;
        document.getElementById('updatesCount').innerHTML = `(${counts.Updates})`;
        document.getElementById('newsCount').innerHTML = `(${counts.News})`;
        document.getElementById('tipsCount').innerHTML = `(${counts.Tips})`;
        
        // Update recent posts (last 5)
        const recentPosts = [...allPosts].sort((a, b) => b.timestamp - a.timestamp).slice(0, 5);
        let recentHtml = '';
        recentPosts.forEach(post => {
            const date = new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            recentHtml += `
                <div class="recent-post-item">
                    <a href="#" class="recent-post-title" onclick="viewPost('${post.id}'); return false;">${escapeHtml(post.title)}</a>
                    <span class="recent-post-date">${date}</span>
                </div>
            `;
        });
        document.getElementById('recentPostsList').innerHTML = recentHtml;
    }

    // View full post in modal
    function viewPost(postId) {
        const post = allPosts.find(p => p.id === postId);
        if (!post) return;
        
        const date = new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        document.getElementById('modalTitle').innerHTML = escapeHtml(post.title);
        document.getElementById('modalCategory').innerHTML = `<i class="fas fa-folder"></i> ${post.category}`;
        document.getElementById('modalDate').innerHTML = `<i class="fas fa-calendar"></i> ${date}`;
        
        let content = post.content;
        if (post.image) {
            content = `<img src="${post.image}" alt="${escapeHtml(post.title)}" style="max-width: 100%; border-radius: 8px; margin-bottom: 20px;">${content}`;
        }
        
        document.getElementById('modalBody').innerHTML = content;
        document.getElementById('postModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Close modal
    function closeModal() {
        document.getElementById('postModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Create new post
    function createPost(title, category, excerpt, content, image) {
        const newPost = {
            id: 'post_' + Date.now(),
            title: title.trim(),
            category: category,
            excerpt: excerpt.trim(),
            content: content.trim(),
            image: image.trim(),
            date: new Date().toISOString(),
            timestamp: Date.now()
        };
        
        allPosts.unshift(newPost);
        savePosts();
        displayPosts();
        updateSidebar();
        return newPost;
    }

    // Edit post
    function editPost(postId) {
        const post = allPosts.find(p => p.id === postId);
        if (!post) return;
        
        // Fill the admin form with post data for editing
        document.getElementById('postTitle').value = post.title;
        document.getElementById('postCategory').value = post.category;
        document.getElementById('postExcerpt').value = post.excerpt;
        document.getElementById('postContent').value = post.content;
        document.getElementById('postImage').value = post.image || '';
        
        // Remove old post and create new one on submit
        const form = document.getElementById('createPostForm');
        const originalSubmit = form.onsubmit;
        
        form.onsubmit = function(e) {
            e.preventDefault();
            // Delete old post
            allPosts = allPosts.filter(p => p.id !== postId);
            // Create new post with updated data
            createPost(
                document.getElementById('postTitle').value,
                document.getElementById('postCategory').value,
                document.getElementById('postExcerpt').value,
                document.getElementById('postContent').value,
                document.getElementById('postImage').value
            );
            showPostMessage('Post updated successfully!', 'success');
            form.reset();
            form.onsubmit = originalSubmit;
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        
        // Show indication that we're in edit mode
        showPostMessage('Editing post: "' + post.title + '". Update the fields and click Publish to save changes.', 'success');
        
        // Scroll to form
        document.getElementById('adminPanel').classList.add('active');
        document.getElementById('createPostForm').scrollIntoView({ behavior: 'smooth' });
    }

    // Delete post
    function deletePost(postId) {
        if (confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
            allPosts = allPosts.filter(p => p.id !== postId);
            savePosts();
            displayPosts();
            updateSidebar();
            showAlert('Post deleted successfully!', 'success');
        }
    }

    // Filter by category
    function filterByCategory(category) {
        currentCategory = category;
        displayPosts();
        
        // Update active state in category list
        document.querySelectorAll('#categoryList a').forEach(link => {
            link.style.fontWeight = link.getAttribute('data-category') === category ? 'bold' : 'normal';
            link.style.color = link.getAttribute('data-category') === category ? 'var(--primary)' : '#555';
        });
    }

    // Toggle admin panel
    function toggleAdminPanel() {
        const panel = document.getElementById('adminPanel');
        panel.classList.toggle('active');
        
        if (panel.classList.contains('active')) {
            // Check if admin password is needed (simple check)
            const adminPassword = prompt('Enter admin password to access post creation:');
            if (adminPassword !== 'admin123') {
                panel.classList.remove('active');
                showAlert('Incorrect password! Access denied.', 'error');
            }
        }
    }

    // Check if admin mode is active
    function isAdminMode() {
        return document.getElementById('adminPanel').classList.contains('active');
    }

    // Helper functions
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type}`;
        alertDiv.innerHTML = `${message}<span class="close">&times;</span>`;
        alertDiv.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 9999; padding: 15px 20px; border-radius: 8px; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.15);';
        alertDiv.style.backgroundColor = type === 'success' ? '#d4edda' : '#f8d7da';
        alertDiv.style.color = type === 'success' ? '#155724' : '#721c24';
        alertDiv.style.border = type === 'success' ? '1px solid #c3e6cb' : '1px solid #f5c6cb';
        
        document.body.appendChild(alertDiv);
        
        alertDiv.querySelector('.close').addEventListener('click', () => alertDiv.remove());
        setTimeout(() => alertDiv.remove(), 4000);
    }

    function showPostMessage(message, type) {
        const messageDiv = document.getElementById('postFormMessage');
        messageDiv.textContent = message;
        messageDiv.className = `form-message ${type}`;
        
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 4000);
    }

    // Form submission handler
    document.addEventListener('DOMContentLoaded', function() {
        loadPosts();
        
        // Category filter click handlers
        document.querySelectorAll('#categoryList a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const category = this.getAttribute('data-category');
                filterByCategory(category);
            });
        });
        
        // Create post form
        const createForm = document.getElementById('createPostForm');
        createForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('postTitle').value;
            const category = document.getElementById('postCategory').value;
            const excerpt = document.getElementById('postExcerpt').value;
            const content = document.getElementById('postContent').value;
            const image = document.getElementById('postImage').value;
            
            if (!title || !category || !excerpt || !content) {
                showPostMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            createPost(title, category, excerpt, content, image);
            showPostMessage('Post published successfully!', 'success');
            createForm.reset();
            
            // Scroll to top to see new post
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(e) {
            const modal = document.getElementById('postModal');
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Add CSS for alerts if not present
        if (!document.querySelector('#blogAlertStyles')) {
            const style = document.createElement('style');
            style.id = 'blogAlertStyles';
            style.textContent = `
                .alert .close {
                    margin-left: 15px;
                    cursor: pointer;
                    font-weight: bold;
                }
            `;
            document.head.appendChild(style);
        }
    });
</script>
```
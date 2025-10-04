 // Theme toggle functionality
    document.addEventListener('DOMContentLoaded', function() {
      const themeToggle = document.getElementById('theme-toggle');
      const themeToggleMobile = document.getElementById('theme-toggle-mobile');
      
      // Set initial theme
      if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.checked = true;
        if (themeToggleMobile) themeToggleMobile.checked = true;
      }
      
      // Desktop theme toggle
      if (themeToggle) {
        themeToggle.addEventListener('change', function() {
          if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
          } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
          }
        });
      }
      
      // Mobile theme toggle
      if (themeToggleMobile) {
        themeToggleMobile.addEventListener('change', function() {
          if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
          } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
          }
        });
      }
      
      // Mobile menu functionality
      const menuToggle = document.querySelector('.menu-toggle');
      const nav = document.querySelector('nav');
      const closeBtn = document.querySelector('.close-btn');
      
      if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
          nav.classList.add('active');
        });
      }
      
      if (closeBtn && nav) {
        closeBtn.addEventListener('click', function() {
          nav.classList.remove('active');
        });
      }
      
      // Close menu when clicking outside
      document.addEventListener('click', function(event) {
        if (nav && nav.classList.contains('active') && 
            !nav.contains(event.target) && 
            event.target !== menuToggle) {
          nav.classList.remove('active');
        }
      });
      
      // Dropdown functionality for mobile
      const dropdownParents = document.querySelectorAll('.main-menu li:has(.dropdown-menu)');
      
      dropdownParents.forEach(parent => {
        const link = parent.querySelector('a');
        
        link.addEventListener('click', function(e) {
          if (window.innerWidth < 768) {
            e.preventDefault();
            const dropdown = parent.querySelector('.dropdown-menu');
            dropdown.classList.toggle('active');
          }
        });
      });
    });
  

    
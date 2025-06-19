document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const menuClose = document.getElementById('menu-close');
    const nav = document.querySelector('nav');
    const navItems = document.querySelectorAll('.nav-items a');

    // Open mobile menu
    menuButton.addEventListener('click', function() {
        nav.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Close mobile menu
    menuClose.addEventListener('click', function() {
        nav.classList.remove('open');
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Close menu when clicking on nav items
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            nav.classList.remove('open');
            document.body.style.overflow = 'auto';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (nav.classList.contains('open') && 
            !nav.contains(event.target) && 
            !menuButton.contains(event.target)) {
            nav.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });

    // Handle escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && nav.classList.contains('open')) {
            nav.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

<script>
    // 1. Initialize Animations
    AOS.init({ duration: 1000, once: true });

    // 2. Mobile Menu Toggle - THIS IS WHAT MAKES THE ICON WORK
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    
    if(menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            // This changes the icon from 3 lines to an 'X'
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }
</script>

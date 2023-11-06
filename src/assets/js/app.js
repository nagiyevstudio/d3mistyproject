// not transparet menu during scroll
document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        var navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };    
});
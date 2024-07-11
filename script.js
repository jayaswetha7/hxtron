document.addEventListener('DOMContentLoaded', function() {
    var hamburgerIcon = document.getElementById('hamburger-icon');
    var navbarCollapse = document.getElementById('navbarSupportedContent');

    hamburgerIcon.addEventListener('click', function() {
        // Toggle the collapse class to show/hide the navbar links
        navbarCollapse.classList.toggle('collapse');
    });

    // Hide navbar links when clicking anywhere on the page outside the navbar
    document.addEventListener('click', function(event) {
        if (!navbarCollapse.contains(event.target) && !hamburgerIcon.contains(event.target)) {
            navbarCollapse.classList.add('collapse');
        }
    });
});

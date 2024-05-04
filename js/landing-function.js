document.addEventListener("DOMContentLoaded", function() {
    var toggler = document.querySelector('.custom-toggler.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    toggler.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });
});
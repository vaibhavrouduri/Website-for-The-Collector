// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Example functionality: scroll smoothly to section when nav link is clicked
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example functionality: show an alert when important message is clicked
    document.querySelector('.important-message').addEventListener('click', function() {
        alert('Remember to refresh any open pages after installing the extension.');
    });
});

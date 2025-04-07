const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

hamburger.addEventListener('click', () => {
    if (menuOpen == false) {
        navLinks.style.display = "block";
        menuOpen = true;
    }
    else if (menuOpen == true) {
        navLinks.style.display = "none";
        menuOpen = false;
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) { 
        navLinks.classList.remove('active'); // Reset menu for large screens
    }
});
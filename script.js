// simple function
document.getElementById("BuyNow").addEventListener("click", () => {
    alert("Here you can buy new and old cars");
})

// Navbar toggle for mobile
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.getElementById('primary-navigation');

    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!isExpanded));
            navList.classList.toggle('show');
        });

        // Close nav when a link is clicked (mobile)
        navList.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                navList.classList.remove('show');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});
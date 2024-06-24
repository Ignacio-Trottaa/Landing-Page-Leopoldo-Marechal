document.addEventListener("DOMContentLoaded", function () {
    const openMenuButton = document.getElementById("open-menu-button");
    const closeMenuButton = document.getElementById("close-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    openMenuButton.addEventListener("click", function () {
        mobileMenu.classList.remove("hidden");
    });

    closeMenuButton.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
    });
});


function toggleFAQ(id) {
    const faq = document.getElementById(id);
    faq.classList.toggle('hidden');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

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
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetID = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetID);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        }

        if (!document.querySelector(".lg\\:flex")) {
            document.getElementById("mobile-menu").classList.add("hidden");
        }
    });
});
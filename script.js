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



"use strict";

/* Toggle Password plain text / masked*/
const input = document.getElementById("password");
const togglePasswordBtn = document.querySelector(".toggle-password");

togglePasswordBtn.addEventListener("click", () => {
    const isPassword = input.type === "password";

    input.type = isPassword ? "text" : "password";
    togglePasswordBtn.classList.toggle("is-visible");
});

/* toggle hamburger menu */
const toggleHamburgerMenuBtn = document.querySelector(".toggle-hamburger");
const header = document.querySelector(".section-header");
const navCTA = document.querySelector(".header-nav-link.nav-cta");
const colorTextOnPrimary = getComputedStyle(
    document.documentElement,
).getPropertyValue("--color-text-on-primary");
const colorPrimary = getComputedStyle(
    document.documentElement,
).getPropertyValue("--color-primary");

toggleHamburgerMenuBtn.addEventListener("click", () => {
    header.classList.toggle("nav-open");
    if (navCTA.classList.contains("nav-cta")) {
        navCTA.classList.remove("nav-cta");
        navCTA.classList.add("btn", "btn-cta-primary");
        navCTA.style.color = colorTextOnPrimary;
    } else {
        navCTA.classList.add("nav-cta");
        navCTA.classList.remove("btn", "btn-cta-primary");
        navCTA.style.color = colorPrimary;
    }
});

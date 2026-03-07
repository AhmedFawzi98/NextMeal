"use strict";

/* Toggle Password plain text / masked*/
const input = document.getElementById("password");
const togglePasswordBtn = document.querySelector(".toggle-password");

togglePasswordBtn.addEventListener("click", () => {
    const isPassword = input.type === "password";

    input.type = isPassword ? "text" : "password";
    togglePasswordBtn.classList.toggle("is-visible");
});

/* hamburger menu */
const toggleHamburgerMenuBtn = document.querySelector(".toggle-hamburger");
const header = document.querySelector(".section-header");
const navCTA = document.querySelector(".header-nav-link.nav-cta");
const headerNavLinks = document.querySelectorAll(".header-nav-link");
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

headerNavLinks.forEach((headerNavLink) => {
    headerNavLink.addEventListener("click", () => {
        header.classList.remove("nav-open");
    });
});

/*adjust copyright year*/
const currentYearSpan = document.querySelector(".current-year");
const currentYear = new Date().getFullYear().toString();
currentYearSpan.textContent = currentYear;

/* smooth scrolling*/
const allLinks = document.querySelectorAll("a");
allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); //prevent default behaviour of instant go to.
        // const href = link.href; //this will return full url! http://localhost:5000/#  we don't want full url!
        const href = link.getAttribute("href");
        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else if (href !== "#" && href.startsWith("#")) {
            const section = document.querySelector(href);
            section.scrollIntoView({
                behavior: "smooth",
            });
        }
    });
});

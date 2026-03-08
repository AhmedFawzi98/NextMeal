"use strict";
// ============================================================================
// PASSWORD VISIBILITY TOGGLE
// ============================================================================
const input = document.getElementById("password");
const togglePasswordBtn = document.querySelector(".toggle-password");

togglePasswordBtn.addEventListener("click", () => {
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    togglePasswordBtn.classList.toggle("is-visible");
});

// ============================================================================
// HAMBURGER MENU & NAVIGATION
// ============================================================================
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

// Toggle hamburger menu open/close state
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

// Close menu when navigating to a link
headerNavLinks.forEach((headerNavLink) => {
    headerNavLink.addEventListener("click", () => {
        header.classList.remove("nav-open");
    });
});

// ============================================================================
// STICKY HEADER
// ============================================================================
const body = document.querySelector("body");
const hero = document.querySelector(".section-hero");
const headerHeight = header.getBoundingClientRect().height;

const heroObserverCallback = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        //does not mean "the threshold condition is achieved", it means literally Is any part of the observed element(hero) inside the viewport (the modified viewport! because we used rootMargin ion options, so isIntersecting respects rootMargin
        body.classList.add("sticky");
    } else {
        body.classList.remove("sticky");
    }
};
const heroObserverOptions = {
    root: null,
    threshold: 0, //this means call the callback function when 0% of the observed element intersect with the root (the viewport in this case)
    rootMargin: `${-headerHeight}px`, // this means call the callback function even before the 0 threshold by a distance = nav.height (-ve because we want the margin to be upward not downward) so the header gets sticky even earlier (just as the last little bit(height = header height) of the of the hero is starting to disapper from the viewport), just a better visual effect :D
};

const heroObserver = new IntersectionObserver(
    heroObserverCallback,
    heroObserverOptions,
);
heroObserver.observe(hero);

// ============================================================================
// SECTIONS REVEAL ON SCROLL
// ============================================================================
const sectionsRevelaedOnScroll = document.querySelectorAll(
    "section:not(.section-hero):not(section-featured-in)",
);

const sectionObserverOptions = {
    root: null,
    threshold: 0.1,
};
const sectionObserverCallBack = function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
        entry.target.classList.remove("section-hidden");
        sectionObserver.unobserve(entry.target);
    }
};

const sectionObserver = new IntersectionObserver(
    sectionObserverCallBack,
    sectionObserverOptions,
);
sectionsRevelaedOnScroll.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add("section-hidden");
});

// ============================================================================
// SMOOTH SCROLLING
// ============================================================================
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
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

// ============================================================================
// FOOTER - UPDATE COPYRIGHT YEAR
// ============================================================================
const currentYearSpan = document.querySelector(".current-year");
const currentYear = new Date().getFullYear().toString();
currentYearSpan.textContent = currentYear;

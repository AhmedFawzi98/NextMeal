"use strict";

/* Toggle Password plain text / masked*/
const input = document.getElementById("password");
const toggle = document.querySelector(".toggle-password");

toggle.addEventListener("click", () => {
    const isPassword = input.type === "password";

    input.type = isPassword ? "text" : "password";
    toggle.classList.toggle("is-visible");
});

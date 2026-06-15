// ===============================
// Mobile Menu Toggle
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ===============================
// Typing Effect
// ===============================

const typing = document.getElementById("typing");

if (typing) {

    const words = [
        "Web Developer",
        "Full Stack Web Developer",
        "Frontend Developer",
        "B.Tech Student",
        "Programmer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {
            typing.textContent = currentWord.substring(0, charIndex++);
        } else {
            typing.textContent = currentWord.substring(0, charIndex--);
        }

        let speed = deleting ? 60 : 120;

        if (!deleting && charIndex === currentWord.length + 1) {
            deleting = true;
            speed = 1200;
        }

        if (deleting && charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
}

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// ===============================
// Scroll to Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.display = "none";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
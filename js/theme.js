// Dark Mode (Future Ready)

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

// You can add a dark mode toggle button later.
// This file is kept for future enhancement.
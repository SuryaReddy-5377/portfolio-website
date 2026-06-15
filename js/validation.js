const contactForm = document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        const name = document.querySelector("input[name='name']").value.trim();
        const email = document.querySelector("input[name='email']").value.trim();
        const subject = document.querySelector("input[name='subject']").value.trim();
        const message = document.querySelector("textarea[name='message']").value.trim();

        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Please fill in all fields.");
            e.preventDefault();
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            e.preventDefault();
        }

    });

}
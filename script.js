document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedback = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    let messages = [];

    if (username.length < 3) {
        isValid = false;
        messages.push("Username must be at least 3 characters long.");
    }

    if (!email.includes("@") || !email.includes(".")) {
        isValid = false;
        messages.push("Please enter a valid email address.");
    }

    if (password.length < 8) {
        isValid = false;
        messages.push("Password must be at least 8 characters long.")
    }

    feedback.style.display = "block";

    if(isValid) {
        feedback.textContent = "Registration successful!";
        feedback.style.color = "#28a745";
    }


    else {
        feedback.innerHTML = messages.join("<br>");
        feedback.style.color = "#dc3545"
    }

  });
});

function checkPassword() {

    let password = document.getElementById("password").value;

    let length = document.getElementById("length");
    let uppercase = document.getElementById("uppercase");
    let lowercase = document.getElementById("lowercase");
    let number = document.getElementById("number");
    let special = document.getElementById("special");

    let strengthBar = document.getElementById("strengthBar");
    let strengthText = document.getElementById("strengthText");
    let suggestionText = document.getElementById("suggestionText");

    let score = 0;

    if (password.length >= 8) {

        length.innerHTML = "✓ At least 8 characters";
        score++;

    } else {

        length.innerHTML = "✗ At least 8 characters";

    }

    if (/[A-Z]/.test(password)) {

        uppercase.innerHTML = "✓ Contains uppercase letter";
        score++;

    } else {

        uppercase.innerHTML = "✗ Contains uppercase letter";

    }

    if (/[a-z]/.test(password)) {

        lowercase.innerHTML = "✓ Contains lowercase letter";
        score++;

    } else {

        lowercase.innerHTML = "✗ Contains lowercase letter";

    }

    if (/[0-9]/.test(password)) {

        number.innerHTML = "✓ Contains a number";
        score++;

    } else {

        number.innerHTML = "✗ Contains a number";

    }

    if (/[^A-Za-z0-9]/.test(password)) {

        special.innerHTML = "✓ Contains special character";
        score++;

    } else {

        special.innerHTML = "✗ Contains special character";

    }


    if (password.length === 0) {

        strengthBar.style.width = "0%";
        strengthText.innerHTML = "Enter a password";
        suggestionText.innerHTML =
            "Enter a password to get suggestions.";

        return;
    }


    if (score <= 2) {

        strengthBar.style.width = "30%";
        strengthText.innerHTML = "Weak";

        suggestionText.innerHTML =
            "Use at least 8 characters with uppercase, lowercase, numbers and special characters.";

    }

    else if (score === 3 || score === 4) {

        strengthBar.style.width = "65%";
        strengthText.innerHTML = "Medium";

        suggestionText.innerHTML =
            "Your password is good, but adding more characters can make it stronger.";

    }

    else {

        strengthBar.style.width = "100%";
        strengthText.innerHTML = "Strong";

        suggestionText.innerHTML =
            "Good password! It contains different types of characters.";

    }
}


function showPassword() {

    let password = document.getElementById("password");

    let button = document.getElementById("showButton");

    if (password.type === "password") {

        password.type = "text";

        button.innerHTML = "Hide";

    } else {

        password.type = "password";

        button.innerHTML = "Show";

    }
}
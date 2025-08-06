// Handles the form validation and submission logic

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    // Outer control structure: form submission handler
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const fullName = document.getElementById("fullName").value.trim();
        const emailAddress = document.getElementById("emailAddress").value.trim();
        const phoneNumber = document.getElementById("phoneNumber").value.trim();
        const userAge = parseInt(document.getElementById("userAge").value);
        const userGender = document.getElementById("userGender").value;
        const interests = Array.from(document.querySelectorAll('input[name="interest"]:checked')).map(el => el.value);

        // Validation checks
        if (!fullName || !emailAddress || !phoneNumber || !userAge || !userGender) {
            alert("All fields are required!");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!/^[0-9]{10}$/.test(phoneNumber)) {
            alert("Phone number must be exactly 10 digits.");
            return;
        }

        if (userAge < 18) {
            alert("You must be at least 18 years old to register.");
            return;
        }

        if (interests.length === 0) {
            alert("Please select at least one interest.");
            return;
        }

        // If all validations pass
        alert("The form has been filled successfully!");
    });
});

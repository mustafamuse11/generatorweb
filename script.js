// script.js

document.getElementById("akanForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get user input
    const birthday = document.getElementById("birthday").value;
    const gender = document.getElementById("gender").value;

    // Validate inputs
    if (!birthday || !gender) {
        alert("Please enter a valid date and select your gender.");
        return;
    }

    // Parse date input
    const date = new Date(birthday);
    const day = date.getDay(); // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

    // Akan names
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // Get Akan name based on gender and day
    let akanName = "";
    if (gender === "male") {
        akanName = maleNames[day];
    } else if (gender === "female") {
        akanName = femaleNames[day];
    }

    // Display result
    document.getElementById("result").textContent = `Your Akan name is ${akanName}. You were born on a ${date.toLocaleString('en-us', { weekday: 'long' })}.`;
});

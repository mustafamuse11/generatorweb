// Select the form and result area
const form = document.getElementById("akanForm");
const resultDiv = document.getElementById("result");

// Add event listener to the form
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page refresh

  // Get user inputs
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.getElementById("gender").value;

  // Validate inputs
  if (!day || !month || !year || !gender) {
    resultDiv.textContent = "Please fill in all fields.";
    return;
  }
  if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2100) {
    resultDiv.textContent = "Please enter valid day, month, and year.";
    return;
  }

  // Calculate the day of the week
  const date = new Date(year, month - 1, day); // Month is 0-based
  const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

  // Akan names
  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  // Determine the Akan name
  let akanName = "";
  if (gender === "male") {
    akanName = maleNames[dayOfWeek];
  } else if (gender === "female") {
    akanName = femaleNames[dayOfWeek];
  }

  // Display the result with the full sentence
  resultDiv.textContent = `Your Akan name is ${akanName}.`;
});

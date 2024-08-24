/* Write a JavaScript program that prompts a user to enter their year of birth and in turn prints a string in the console stating whether the user is a minor, a youth, or an elder.  Anyone below 18 years is a minor, anyone between 18 and 36 years is a youth and the rest are elders. */

// Function to determine the user's age category
function determineAgeCategory(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;

    if (age < 18) {
        return "You are a minor.";
    } else if (age <= 36) {
        return "You are a youth.";
    } else {
        return "You are an elder.";
    }
}

// Prompt the user to enter their year of birth
const yearOfBirth = prompt("Please enter your year of birth:");

// Ensure the input is a valid number
if (!isNaN(yearOfBirth) && yearOfBirth > 0) {
    const message = determineAgeCategory(Number(yearOfBirth));
    console.log(message);
} else {
    console.log("Invalid input. Please enter a valid year.");
}
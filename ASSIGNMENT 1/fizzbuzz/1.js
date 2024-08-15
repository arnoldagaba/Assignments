function fizzBuzz(firstName, lastName) {
    // Combine the lengths of the two parameters
    const combinedLength = firstName.length + lastName.length;
    
    // Determine the appropriate return value
    if (combinedLength % 3 === 0 && combinedLength % 5 === 0) {
        return "FizzBuzz";
    } else if (combinedLength % 3 === 0) {
        return "Fizz";
    } else if (combinedLength % 5 === 0) {
        return "Buzz";
    } else {
        return "Not divisible by 3 or 5";
    }
}

// Example usage:
console.log(fizzBuzz("seventh", "palindro"));

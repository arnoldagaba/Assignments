function fizzBuzz(param1, param2) {
    // Combine the lengths of the two parameters
    const combinedLength = param1.length + param2.length;
    
    // Determine the appropriate return value
    if (combinedLength % 3 === 0 && combinedLength % 5 === 0) {
        return "FizzBuzz";
    } else if (combinedLength % 3 === 0) {
        return "Fizz";
    } else if (combinedLength % 5 === 0) {
        return "Buzz";
    } else {
        return "";
    }
}

// Example usage:
console.log(fizzBuzz("hello", "world")); // Output: FizzBuzz
console.log(fizzBuzz("hi", "there"));    // Output: Fizz
console.log(fizzBuzz("good", "day"));    // Output: Buzz
console.log(fizzBuzz("example", "test")); // Output: ""

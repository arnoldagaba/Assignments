function addDigits(num) {
    // Helper function to calculate the sum of digits of a number
    function sumOfDigits(n) {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        return sum;
    }

    // Repeatedly add the digits until the result has only one digit
    while (num >= 10) {
        num = sumOfDigits(num);
    }

    return num;
}

// Example usage:
console.log(addDigits(38));  // Output: 2 (3 + 8 = 11, 1 + 1 = 2)
console.log(addDigits(123)); // Output: 6 (1 + 2 + 3 = 6)
console.log(addDigits(0));   // Output: 0 (0 is already a single digit)

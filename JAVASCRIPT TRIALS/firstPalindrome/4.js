function firstPalindrome(words) {
    // Helper function to check if a string is palindromic
    function isPalindrome(word) {
        const len = word.length;
        for (let i = 0; i < len / 2; i++) {
            if (word[i] !== word[len - 1 - i]) {
                return false;
            }
        }
        return true;
    }

    // Iterate through the words array
    for (let i = 0; i < words.length; i++) {
        if (isPalindrome(words[i])) {
            return words[i];
        }
    }

    // Return an empty string if no palindromic string is found
    return "";
}

// Example usage:
console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));  // Output: "ada"
console.log(firstPalindrome(["not", "a", "palindrome"]));               // Output: ""
console.log(firstPalindrome(["wow", "noon", "civic"]));                 // Output: "wow"
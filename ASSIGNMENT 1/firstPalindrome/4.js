/* Write a function named firstPalindrome which takes a parameter: words. Given an array of string words, return the first palindromic string in the array. If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.
 */

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
console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"])); // Output: "ada"
console.log(firstPalindrome(["not", "ant", "palindrome"])); // Output: ""
console.log(firstPalindrome(["wow", "noon", "civic"])); // Output: "wow"



/* // Alternative answer
function firstPalindrome(words) {
	for (let element of words) {
		//turn elemet into array
		let reversedElement = element.split("").reverse("").join("");

		if (reversedElement == element) {
			return element;
		}
	}
}

let someArray = ["abc", "car", "ada", "racecar", "cool"];

firstPalindrome(someArray);
 */
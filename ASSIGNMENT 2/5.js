/* Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "". */

function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    // Start with the first string in the array as the prefix
    let prefix = strs[0];

    // Iterate through the array of strings
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            // Shorten the prefix by removing the last character
            prefix = prefix.substring(0, prefix.length - 1);
            // If there's no common prefix
            if (prefix === "") return "";
        }
    }

    return prefix;
}

// Example usage
const strs1 = ["flower", "flow", "flight"];
const strs2 = ["dog", "racecar", "car"];

console.log(longestCommonPrefix(strs1)); // Output: "fl"
console.log(longestCommonPrefix(strs2)); // Output: ""

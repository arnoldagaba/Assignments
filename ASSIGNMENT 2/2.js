/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. */

function containsDuplicate(nums) {
    let seen = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return true; // Duplicate found
        }
        seen.add(nums[i]);
    }
    
    return false; // No duplicates found
}

// Example usage
const nums1 = [1, 2, 3, 4];
const nums2 = [1, 2, 3, 1];

console.log(containsDuplicate(nums1)); // Output: false
console.log(containsDuplicate(nums2)); // Output: true

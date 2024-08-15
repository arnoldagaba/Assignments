/* Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array. */

function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

// Example usage
const nums1 = [3, 2, 3];
const nums2 = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(nums1)); // Output: 3
console.log(majorityElement(nums2)); // Output: 2

/* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. */

function singleNumber(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
    return result;
}

// Example usage
const nums1 = [2, 2, 1];
const nums2 = [4, 1, 2, 1, 2];

console.log(singleNumber(nums1)); // Output: 1
console.log(singleNumber(nums2)); // Output: 4

function twoSum(nums, target) {
    // Create a map to store the indices of the elements
    const numIndices = new Map();

    // Iterate through the nums array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement of the current number
        const complement = target - nums[i];

        // Check if the complement exists in the map
        if (numIndices.has(complement)) {
            // Return the indices of the complement and the current number
            return [numIndices.get(complement), i];
        }

        // Store the index of the current number in the map
        numIndices.set(nums[i], i);
    }

    // Return an empty array if no solution is found (shouldn't happen per the problem statement)
    return [];
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9));  // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));       // Output: [1, 2]
console.log(twoSum([3, 3], 6));          // Output: [0, 1]

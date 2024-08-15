/* Given an Array containing integers, floats, and one character strings, write a function that takes an Array as a parameter and returns an Object with keys evens, odds, and chars. The value for evens is an array of sorted even numbers, the value for odds is a list of sorted odd numbers and chars is a list of sorted single-character strings.
Caution: DO NOT use the sort array method */

function categorizeArray(arr) {
    let result = {
        evens: [],
        odds: [],
        chars: []
    };

    // Separate elements into evens, odds, and chars
    arr.forEach(item => {
        if (typeof item === 'number') {
            if (item % 2 === 0) {
                result.evens.push(item);
            } else {
                result.odds.push(item);
            }
        } else if (typeof item === 'string' && item.length === 1) {
            result.chars.push(item);
        }
    });

    // Sorting functions
    const bubbleSort = (array) => {
        let n = array.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    };

    // Sort each array using bubble sort
    bubbleSort(result.evens);
    bubbleSort(result.odds);
    bubbleSort(result.chars);

    return result;
}

// Example usage
const inputArray = [5, 2, 3.5, 8, 'a', 'c', 7, 'b', 4];
const output = categorizeArray(inputArray);
console.log(output);

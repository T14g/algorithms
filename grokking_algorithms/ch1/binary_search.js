// A simple binary search in a array 
// O(log(n))
// Only works on sorted lists

/**
 * 
 * @param {*} list 
 * @param {*} item 
 * @returns {Int} index of array where item is found or Null
 */
function binary_search(list, item) {

    let low = 0;
    let high = list.length - 1;

    while (low <= high) {

        let mid = Math.round((low + high) / 2);
        let guess = list[mid];

        if (guess === item) {
            return mid;
        }

        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null; // item doesn't exist

}

let testArray = [1, 2, 4, 11, 20, 50];
let n = 11;
let result = binary_search(testArray, n);

console.log(result);
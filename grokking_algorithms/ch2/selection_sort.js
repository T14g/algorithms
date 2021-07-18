/**
 * Implementing a selection sort
 *  O(n²)
 */

/**
 * 
 * @param {Array} arr 
 * @returns {Int} index of the smallest number in array
 */

function findSmallest(arr) {

    let smallest = Number.MAX_SAFE_INTEGER;
    let smallestIndex = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

/**
 * 
 * @param {Array} arr 
 * @returns {Array} sorted array in ascending order
 */

function selectionSort(arr) {
    let newArray = [];

    while (arr.length > 0) {
        let smallest = findSmallest(arr);
        newArray.push(arr[smallest]);
        arr.splice(smallest, 1);
    }

    return newArray;
}

let testArray = [10, 88, 111, 2, 10, 2, 200, 300, 500];
let sortedArray = selectionSort(testArray);
console.log(sortedArray);
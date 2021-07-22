/**
 * Quicksort is much faster than selection sort
 */

function quickSort(array) {

    //0 or 1 elements
    if (array.length < 2) {
        return array;
    } else {
        let pivot = array[0];
        let greater = array.filter((el) => el > pivot);
        let less = array.filter((el) => el < pivot);

        return quickSort(less) + pivot + quickSort(greater);
    }
}

console.log(quickSort([10,5,2,3]));
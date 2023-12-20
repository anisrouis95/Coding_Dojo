const myArr = [3, 2, 9, 5, 1, 4, 8];
const arrTest = [4, 5, 1, 3, 6, 7, 10, 2, 8, 9];

function selectionSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;

        // Find the index of the minimum element in the unsorted part of the array
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

console.log("Original Array:", myArr);
console.log("Sorted Array:", selectionSort(myArr.slice()));

console.log("\nOriginal Array:", arrTest);
console.log("Sorted Array:", selectionSort(arrTest.slice()));

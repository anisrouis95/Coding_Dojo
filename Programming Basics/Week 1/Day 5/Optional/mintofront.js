function minToFront(arr) {
    var minIndex = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }

    var newArr = [];
    newArr.push(arr[minIndex]);
    for (var i = 0; i < arr.length; i++) {
        if (i !== minIndex) {
            newArr.push(arr[i]);
        }
    }
    arr.length = 0;
    for (var i = 0; i < newArr.length; i++) {
        arr.push(newArr[i]);
    }
    return arr;
}
var originalArray = [5, 93, 22, 4];
minToFront(originalArray);
console.log(originalArray);

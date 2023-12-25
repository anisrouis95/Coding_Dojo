function mergeDedupe(arr1, arr2) {
    const arr=[];
    for (let i=0;i<arr1.length;i++){
        if(!arr.includes(arr1[i])){
            arr.push(arr1[i])
        }
    }
    for (let i=0;i<arr2.length;i++){
        if(!arr.includes(arr2[i])){
            arr.push(arr2[i])
        }
    }
    return arr;
}

// Test cases
console.log(mergeDedupe([1, 3, 3, 5, 8], [1, 3, 3, 5, 9, 10, 10, 10]));
console.log(mergeDedupe([1, 3, 4, 5], [1, 3, 3, 5, 8, 10]));
console.log(mergeDedupe([], [1, 2, 2]));

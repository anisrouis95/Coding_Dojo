function factorial(num) {
    if (num === undefined){
        num = 10;
    }
    if (num > 0) {
        // base case
        if (num <= 1) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }
    } else {
        console.log("The number is negative try enterig a non negative number");
        return num;
    }

}

console.log(factorial(-10));
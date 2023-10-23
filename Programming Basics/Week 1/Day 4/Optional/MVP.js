function iWantCoffee() {
    var date = new Date();
    var hour = date.getHours();
    if (hour = 10) {
        console.log("Enjoy a latte!");
    } else if (hour >= 10 && hours < 15) {
        console.log("Treat yourself to a hot chocolate!");
    } else if (hour >= 15 && hours < 18){
        if (hour % 2 === 0) {
            var evenOptions = ["candy", "cookies", "ice cream"];
            var selectedOption = getRandomOption(evenOptions);
            console.log(`Savor some ${selectedOption}!`);
        } else {
            var oddOptions = ["hot chocolate", "cake", "tea"];
            var selectedOption = getRandomOption(oddOptions);
            console.log(`Treat yourself to some ${selectedOption}!`);
        }
    } else if (hour >= 18 && hours < 22) {
        console.log("Savor some ice cream!");
    } else {
        console.log("It's time to sleep, no more treats for now.");
    }
}

iWantCoffee();
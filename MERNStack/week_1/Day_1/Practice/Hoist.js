// Snipper 1 
var hello;
console.log(hello);
hello = 'world';
// Output:after the rewrite the output will be world

// Snippet 2  
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
// Output: magnet

// Snippet 3
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//the output will be the first value of brendan which is super cool

// Snippet 4
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// Output: chicken half-chicken

// Snippet 5
mean();
console.log(food); // food is not defined
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}

console.log(food); //food is not defined

// Snippet 6
console.log(genre); // Output: undefined
var genre = "disco";

rewind();

function rewind() {
    genre = "rock";
    console.log(genre); // Output: rock
    var genre = "r&b";
    console.log(genre); // Output: r&b
}

console.log(genre); // Output: disco


// Snippet 7
dojo = "san jose";
console.log(dojo); // Output: san jose

learn();

function learn() {
    dojo = "seattle";
    console.log(dojo); // Output: seattle
    var dojo = "burbank";
    console.log(dojo); // Output: burbank
}

console.log(dojo); // Output: seattle

// Snippet 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;

    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        dojo = "closed for now";
    }

    return dojo;
}












function log(){
    return console.log("Start");
}

setTimeout(log, 3000);

console.log("End");

const animals = ["lion", "giraffe", "monkey","dog"];
// animals.map((oneAnimal)=>{
//     console.log(oneAnimal);
// });

const newArray = animals.map((oneAnimal)=>{
    return (`${oneAnimal} is dangerous`);
});
console.log(newArray);
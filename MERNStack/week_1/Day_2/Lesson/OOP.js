class Book{
    //defaults
    constructor (title,pages,author,publisher = "Packetpub"){
        this.title = title,
        this.pages = pages,
        this.publisher = publisher,
        this.author = author
    }
}

const myBook = new Book ("Test Book",300,"unknown","somePublisher");
console.log(myBook);

const anotherBook  = new Book ("MERN",999,"Dojo");
console.log(anotherBook);

/*******************************/
// Parent
class Human{
    constructor(name, power){
        this.name = name;
        this.health = 100;
        this.power = power;
    }

    eat(){
        console.log(`${this.name} is eating and their health is now +10`);
        this.health +=10;
        return this;
    }
 }

 const louis = new Human ("Louis", 100, 50);
 louis.eat()
 console.log(louis.health);


//  Inheritance
class superHuman extends Human {
    constructor(name, power, superPower){
        super(name, power);
        this.superPower = superPower;
    }

    fly(){
        console.log(this.name + " flies away");
        this.health = 25;
        return this;
    }

    displayStats(){
        console.log(`${this.name} has ${this.health} hp and ${this.power} power level`);


    }
    fight(villain){
        console.log(`${this.name} is attacking ${villain.name}`);
        villain.health -= 13;
        console.log(`${villain.name}'s health is now ${villain.health}`);
    }
}
const superMan = new superHuman ("Clark", 9001, "Flying");
const Batman = new superHuman ("Bruce", 5000, "Rich")
// console.log(superMan);
// superMan.fly();
// superMan.displayStats();
superMan.fight(Batman);
Batman.displayStats();
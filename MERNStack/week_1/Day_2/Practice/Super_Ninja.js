class Ninja{
    constructor(name){
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(`Name: ${this.name} 
Strength: ${this.strength} 
Speed: ${this.speed} 
Health: ${this.health}`);
    }

    drinkSake(){
        this.health +=10;
        console.log(`${this.name} is drinking and their health is now ${this.health}`);
        return this;
    }
}

const ninja1 = new Ninja ("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja{
    constructor(name){
        super(name, 90, 3, 3);
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const supersensei = new Sensei ("Master Splinter");
supersensei.speakWisdom();
supersensei.showStats();
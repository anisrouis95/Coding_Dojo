class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }

    saycardName(){
        console.log(this.name);
    }
}
const card1 = new Card ("Red Belt Ninja", 3);
const card2 = new Card ("Black Belt Ninja", 4);

card1.saycardName();
card2.saycardName();


class Unit extends Card {
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
}
const unit1 = new Unit ("Red Belt Ninja", 3, 3, 4);
const unit2 = new Unit ("Black Belt Ninja", 4, 5, 4);

class Effect extends Card {
    constructor(name, cost, text, power, resilience, stat, magnitude){
        super(name, cost, power, resilience);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
}
const effect1 = new Unit ("Red Belt Ninja", 3, 3, 4);
const effect2 = new Unit ("Black Belt Ninja", 4, 5, 4);
const effect3 = new Unit ("Black Belt Ninja", 4, 5, 4);
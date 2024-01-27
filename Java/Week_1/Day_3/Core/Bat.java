public class Bat extends Mammal{
    public Bat(){
        this.energy = 300;
    }
    public int fly(){
        this.energy -= 50;
        System.out.println("The bat is airborn");
        return displayEnergy();
    }
    public int eatHuman(){
        this.energy += 25;
        System.out.println("Ugh, The bat ate a human and is well fed");
        return displayEnergy();
    }
    public int attackTown(){
        this.energy -= 100;
        System.out.println("This bat is vicious it's attacking humans");
        return displayEnergy();
    }
}

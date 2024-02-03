public class Gorilla extends Mammal{
    public int throwSomething(){
        this.energy -= 5;
        System.out.println("Gorilla Threw Something");
        return displayEnergy();
    }
    public int eatBananas() {
        this.energy +=10;
        System.out.println("Gorilla is well fed! Mmmmm");
        return displayEnergy();
    }
    public int climb(){
        this.energy -=10;
        System.out.println("Gorilla has climbed a tree");
        return displayEnergy();
    }
}

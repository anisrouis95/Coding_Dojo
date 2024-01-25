import java.util.ArrayList;

public class Item {
    private String name;
    private double price;

    public Item(String name, double price) {
        this.name = name;
        this.price = price;
    }

    // GETTERS & SETTERS
    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    // You can add setters if needed
}
import java.util.ArrayList;

public class Order {
    private String name;
    private boolean ready;
    private ArrayList<Item> items;

    // CONSTRUCTOR
    public Order() {
        this.name = "Guest";
        this.ready = false;
        this.items = new ArrayList<>();
    }

    // OVERLOADED CONSTRUCTOR
    public Order(String name) {
        this.name = name;
        this.ready = false;
        this.items = new ArrayList<>();
    }

    // ORDER METHODS

    // addItem method
    public void addItem(Item item) {
        items.add(item);
    }

    // getStatusMessage method
    public String getStatusMessage() {
        return ready ? "Your order is ready." : "Thank you for waiting. Your order will be ready soon.";
    }

    // getOrderTotal method
    public double getOrderTotal() {
        double total = 0;
        for (Item item : items) {
            total += item.getPrice();
        }
        return total;
    }

    // display method
    public void display() {
        System.out.println("Customer Name: " + name);
        for (Item item : items) {
            System.out.println(item.getName() + " : $" + item.getPrice());
        }
        System.out.println("Total: $" + getOrderTotal());
    }

    // GETTERS & SETTERS
    public String getName() {
        return name;
    }

    public boolean isReady() {
        return ready;
    }

    public void setReady(boolean ready) {
        this.ready = ready;
    }

    // You can add setters for other properties if needed
}
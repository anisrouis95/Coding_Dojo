import java.util.ArrayList;

public class Order {
    String name;
    double total;
    boolean ready;
    ArrayList<Item> items;

    public Order(String name, double total, ArrayList<Item> items) {
        this.name = name;
        this.total = total;
        this.ready = false;
        this.items = items;
    }

    public void addItem(Item item) {
        items.add(item);
        this.total += item.price;
//        System.out.println(items.toString());
        // this.total+=items.price();
    }
}
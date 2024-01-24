import java.util.ArrayList;

public class TestOrders {
    public static void main(String[] args) {

        // Menu items
        Item item1 = new Item("mocha", 3.99);
        Item item2 = new Item("latte", 2.99);
        Item item3 = new Item("drip coffee", 1.99);
        Item item4 = new Item("cappuccino", 4.49);
        ArrayList<Item> itemlist1 = new ArrayList<Item>();
        itemlist1.add(item1);
        // Order variables
        Order order1 = new Order("Cindhuri",0,itemlist1);
        Order order2 = new Order("Jimmy",0,itemlist1);
        Order order3 = new Order("Noah",0,itemlist1);
        Order order4 = new Order("Sam",0,itemlist1);

        // Print order1
        System.out.println(order1.toString());
        order1.addItem(item1);
        order1.addItem(item1);
        // Predict what will happen if you print 'order1.total'
        System.out.printf("Order1 Total: %.2f\n", order1.total);

        // Add item1 to order2's item list and increment the order's total
        order2.items.add(item1);
        order2.total += item1.price;

        // Noah ordered a cappuccino. Add the cappuccino to their order list and to their tab.
        order3.items.add(item4);
        order3.total += item4.price;

        // Sam added a latte. Update the order accordingly.
        order4.items.add(item2);
        order4.total += item2.price;

        // Cindhuri’s order is now ready. Update her status.
        order1.ready = true;

        // Sam ordered more drinks - 2 lattes. Update their order as well.
        order4.items.add(item2);
        order4.total += 2 * item2.price;

        // Jimmy’s order is now ready. Update his status.
        order2.ready = true;

        // Application Simulations
        // Use this example code to test various orders' updates
        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %.2f\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);
    }
}

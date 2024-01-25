public class TestOrders {
    public static void main(String[] args) {
        // Create 2 orders for unspecified guests
        Order order1 = new Order();
        Order order2 = new Order();

        // Create 3 orders with names
        Order order3 = new Order("Cindhuri");
        Order order4 = new Order("Jimmy");
        Order order5 = new Order("Noah");

        // Add items to orders
        order1.addItem(new Item("mocha", 3.99));
        order1.addItem(new Item("latte", 2.99));

        order2.addItem(new Item("drip coffee", 1.99));
        order2.addItem(new Item("cappuccino", 4.49));

        order3.addItem(new Item("latte", 2.99));
        order3.addItem(new Item("cappuccino", 4.49));

        order4.addItem(new Item("drip coffee", 1.99));
        order4.addItem(new Item("mocha", 3.99));

        order5.addItem(new Item("latte", 2.99));
        order5.addItem(new Item("cappuccino", 4.49));

        // Test getStatusMessage method
        order1.setReady(true);
        System.out.println(order1.getStatusMessage());
        System.out.println(order2.getStatusMessage());

        // Test getOrderTotal method
        System.out.println("Order1 Total: $" + order1.getOrderTotal());

        // Test display method
        order1.display();
        order2.display();
        order3.display();
        order4.display();
        order5.display();
    }
}

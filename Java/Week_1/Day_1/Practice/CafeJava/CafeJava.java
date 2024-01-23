public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String notreadyMessage = "your order is not ready yet";
        String displayTotalMessage = "Your total is $";
        String errorMessage = "Your new total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffe = 7;
        double latte = 5;
        double cappuccino = 5.5;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1 + "\n" + pendingMessage + "\n" + customer1 + readyMessage  + "\n" + displayTotalMessage + dripCoffe); // Displays "Welcome to Cafe Java, Cindhuri"
        System.out.println(generalGreeting + customer2 + "\n" + pendingMessage + "\n" + customer2 + readyMessage  + "\n" + displayTotalMessage + dripCoffe);

        if (isReadyOrder4) {//Noah
            System.out.println(generalGreeting + customer4 + readyMessage  + "\n" + displayTotalMessage + cappuccino);
        } else {
            System.out.println(generalGreeting + customer4 + pendingMessage);
        };

        if (isReadyOrder2) {//Sam
            System.out.println(generalGreeting + cutomer2 + displayTotalMessage+(latte*2) + "\n" + pendingMessage + "\n" + readyMessage);
        } else {
            System.out.println(generalGreeting + cutomer2 + displayTotalMessage+(latte*2) + "\n" + pendingMessage + "\n" + notreadyMessage);
        }

        // Jimmy
        System.out.println(generalGreeting + customer3 + "\n" + errorMessage + (dripCoffe-latte) + "\n" + pendingMessage + "\n" + readyMessage);
        System.out.println(generalGreeting + customer3 + "\n" + errorMessage + (dripCoffe-latte) + "\n" + pendingMessage + "\n" + readyMessage);
        
    }
}

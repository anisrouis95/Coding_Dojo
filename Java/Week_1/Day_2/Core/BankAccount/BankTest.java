// BankTest.java
public class BankTest {
    public static void main(String[] args) {
        // Create 3 bank accounts
        BankAccount account1 = new BankAccount();
        BankAccount account2 = new BankAccount();
        BankAccount account3 = new BankAccount();

        // Deposit Test
        account1.deposit(1000, "checking");
        account2.deposit(1500, "savings");
        account3.deposit(500, "checking");

        System.out.println("After Deposits:");
        account1.getBalance();
        account2.getBalance();
        account3.getBalance();
        System.out.println("Total Accounts: " + BankAccount.getAccounts());
        System.out.println("Total Money: $" + BankAccount.getTotalMoney());

        // Withdrawal Test
        account1.withdraw(200, "checking");
        account2.withdraw(300, "savings");
        account3.withdraw(100, "checking");

        System.out.println("\nAfter Withdrawals:");
        account1.getBalance();
        account2.getBalance();
        account3.getBalance();
        System.out.println("Total Money: $" + BankAccount.getTotalMoney());

        // Static Test
        System.out.println("\nStatic Test:");
        System.out.println("Total Accounts: " + BankAccount.getAccounts());
        System.out.println("Total Money: $" + BankAccount.getTotalMoney());
    }
}

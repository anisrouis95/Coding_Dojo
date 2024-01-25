// BankAccount.java
public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;

    private static int accounts = 0;
    private static double totalMoney = 0;

    // CONSTRUCTOR
    public BankAccount() {
        accounts++;
    }

    // GETTERS AND SETTERS
    public double getCheckingBalance() {
        return checkingBalance;
    }

    public void setCheckingBalance(double checkingBalance) {
        this.checkingBalance = checkingBalance;
    }

    public double getSavingsBalance() {
        return savingsBalance;
    }

    public void setSavingsBalance(double savingsBalance) {
        this.savingsBalance = savingsBalance;
    }

    public static int getAccounts() {
        return accounts;
    }

    public static double getTotalMoney() {
        return totalMoney;
    }

    // METHODS
    public void deposit(double amount, String accountType) {
        if ("checking".equalsIgnoreCase(accountType)) {
            setCheckingBalance(getCheckingBalance() + amount);
        } else if ("savings".equalsIgnoreCase(accountType)) {
            setSavingsBalance(getSavingsBalance() + amount);
        }
        totalMoney += amount;
    }

    public void withdraw(double amount, String accountType) {
        if ("checking".equalsIgnoreCase(accountType) && getCheckingBalance() >= amount) {
            setCheckingBalance(getCheckingBalance() - amount);
            totalMoney -= amount;
        } else if ("savings".equalsIgnoreCase(accountType) && getSavingsBalance() >= amount) {
            setSavingsBalance(getSavingsBalance() - amount);
            totalMoney -= amount;
        } else {
            System.out.println("Insufficient funds for withdrawal");
        }
    }

    public void getBalance() {
        System.out.println("Checking Balance: $" + getCheckingBalance());
        System.out.println("Savings Balance: $" + getSavingsBalance());
        System.out.println("Total Balance: $" + (getCheckingBalance() + getSavingsBalance()));
    }
}

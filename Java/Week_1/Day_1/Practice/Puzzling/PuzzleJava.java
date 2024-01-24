import java.util.ArrayList;
import java.util.Random;

public class PuzzleJava {
    
    // Method to generate and return an array with 10 random numbers between 1 and 20 inclusive.
    public ArrayList<Integer> getTenRolls() {
        ArrayList<Integer> randomRolls = new ArrayList<>();
        Random randMachine = new Random();
        for (int i = 0; i < 10; i++) {
            randomRolls.add(randMachine.nextInt(20) + 1);
        }
        return randomRolls;
    }

    // Method to generate a random letter from the alphabet.
    public char getRandomLetter() {
        char[] alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();
        Random randMachine = new Random();
        int randomIndex = randMachine.nextInt(26);
        return alphabet[randomIndex];
    }

    // Method to create a random string of eight characters.
    public String generatePassword() {
        StringBuilder password = new StringBuilder();
        for (int i = 0; i < 8; i++) {
            password.append(getRandomLetter());
        }
        return password.toString();
    }

    // Method to create an array of random eight-character words.
    public ArrayList<String> getNewPasswordSet(int length) {
        ArrayList<String> passwordSet = new ArrayList<>();
        for (int i = 0; i < length; i++) {
            passwordSet.add(generatePassword());
        }
        return passwordSet;
    }

    // Bonus: Method to shuffle an array.
    public void shuffleArray(Object[] array) {
        Random randMachine = new Random();
        for (int i = array.length - 1; i > 0; i--) {
            int randomIndex = randMachine.nextInt(i + 1);
            // Swap array[i] with array[randomIndex]
            Object temp = array[i];
            array[i] = array[randomIndex];
            array[randomIndex] = temp;
        }
    }
}

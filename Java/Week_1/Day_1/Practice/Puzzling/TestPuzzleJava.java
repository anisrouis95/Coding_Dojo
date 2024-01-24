import java.util.ArrayList;

public class TestPuzzleJava {
    
    public static void main(String[] args) {
        PuzzleJava generator = new PuzzleJava();

        // Test getTenRolls
        ArrayList<Integer> randomRolls = generator.getTenRolls();
        System.out.println("getTenRolls: " + randomRolls);

        // Test getRandomLetter
        char randomLetter = generator.getRandomLetter();
        System.out.println("getRandomLetter: " + randomLetter);

        // Test generatePassword
        String password = generator.generatePassword();
        System.out.println("generatePassword: " + password);

        // Test getNewPasswordSet
        ArrayList<String> passwordSet = generator.getNewPasswordSet(5);
        System.out.println("getNewPasswordSet: " + passwordSet);

        // Bonus: Test shuffleArray
        Integer[] arrayToShuffle = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        generator.shuffleArray(arrayToShuffle);
        System.out.println("Shuffled Array: " + java.util.Arrays.toString(arrayToShuffle));
    }
}

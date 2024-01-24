public class SongOrganizerTest {
    public static void main(String[] args) {
        // Create an instance of SongOrganizer
        SongOrganizer songOrganizer = new SongOrganizer();

        // Add songs to the track list
        songOrganizer.addSong("Starry Night", "Underneath the starry night, we dance in the moonlight...");
        songOrganizer.addSong("Ocean Breeze", "Feel the ocean breeze, as we sail on the open seas...");
        songOrganizer.addSong("City Lights", "In the city lights, we find our way through the neon nights...");
        songOrganizer.addSong("Eternal Love", "A love that lasts forever, like a timeless melody...");

        // Pull out one song by its track title
        String selectedSong = songOrganizer.getSongByTitle("Ocean Breeze");
        System.out.println("Selected Song: " + selectedSong);

        // Print all track names and lyrics
        songOrganizer.printAllTracksAndLyrics();
    }
}

import java.util.HashMap;
import java.util.Map;

public class SongOrganizer {
    private Map<String, String> trackList;

    public SongOrganizer() {
        trackList = new HashMap<>();
    }

    public void addSong(String title, String lyrics) {
        trackList.put(title, lyrics);
    }

    public String getSongByTitle(String title) {
        return trackList.get(title);
    }

    public void printAllTracksAndLyrics() {
        System.out.println("\nAll Tracks and Lyrics:");
        for (Map.Entry<String, String> entry : trackList.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;
import java.net.URL;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.Clip;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;
import javax.swing.JOptionPane;

public class DizerMDBot {

    public static void main(String[] args) {
        try {
            // Display hello world message
            System.out.println("HI I AM ALIVE!");

            // Check bot status and send an alive message
            checkBotStatus();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("An error occurred: " + e.getMessage());
        }
    }

    public static void checkBotStatus() {
        try {
            // Play a sound to indicate that the bot is alive
            playSound("media/media_alive.mp3");

            // Display bot status
            String statusMessage = "⫷⦁[ *'DIZER MD* ]⦁⫸ \n\n*Hey there!* \n\n> 🟢 *DIZER MD WhatsApp Bot* is up and running!\n";
            statusMessage += "      Runtime : " + getRuntime() + "\n";

            // Show the status message
            JOptionPane.showMessageDialog(null, statusMessage, "Bot Status", JOptionPane.INFORMATION_MESSAGE);

            // Display an image
            displayImage("path_to_dizer_image.jpg");

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("An error occurred while checking bot status: " + e.getMessage());
        }
    }

    public static void playSound(String filePath) throws IOException, UnsupportedAudioFileException, LineUnavailableException {
        File soundFile = new File(filePath);
        Clip clip = AudioSystem.getClip();
        clip.open(AudioSystem.getAudioInputStream(soundFile));
        clip.start();
        // Wait for the sound to finish playing
        try {
            TimeUnit.SECONDS.sleep(clip.getMicrosecondLength() / 1000000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public static void displayImage(String filePath) throws IOException {
        BufferedImage image = ImageIO.read(new File(filePath));
        JOptionPane.showMessageDialog(null, new ImageIcon(image), "DIZER MD Image", JOptionPane.INFORMATION_MESSAGE);
    }

    public static String getRuntime() {
        long runtime = System.currentTimeMillis() - ProcessHandle.current().info().startInstant().orElseThrow().toEpochMilli();
        long seconds = TimeUnit.MILLISECONDS.toSeconds(runtime);
        long minutes = TimeUnit.SECONDS.toMinutes(seconds);
        long hours = TimeUnit.MINUTES.toHours(minutes);
        return String.format("%d hours, %d minutes, %d seconds", hours, minutes % 60, seconds % 60);
    }
}

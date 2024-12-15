package Backend_simpleResults.CampusShare_demo.share.domain;

import Backend_simpleResults.CampusShare_demo.user.domain.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class Share {
    private Long id; // Unique ID for the share
    private String uploadId; // ID for the uploaded file
    private String title; // Title of the share
    private String content; // Content/description of the share
    private String file; // File path or reference
    private int numberOfDownloads; // Number of times the file was downloaded
    private LocalDateTime uploadTime; // Time when the share was uploaded
    private User user; // User who uploaded the share

    // Constructor
    public Share(String uploadId, String title, String content, String file, User user) {
        this.uploadId = uploadId;
        this.title = title;
        this.content = content;
        this.file = file;
        this.user = user;
        this.numberOfDownloads = 0; // Default to 0
        this.uploadTime = LocalDateTime.now(); // Set upload time to current time
    }
}

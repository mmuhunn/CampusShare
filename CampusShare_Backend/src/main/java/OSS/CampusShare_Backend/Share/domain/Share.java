package OSS.CampusShare_Backend.Share.domain;

import OSS.CampusShare_Backend.User.domain.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "shares")
public class Share {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String uploadId;
    @Column
    private String title;
    @Column
    private String content;
    @Column
    private String file;
    @Column
    private int numberOfDownloads;
    @Column
    private LocalDateTime uploadTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public Share(String uploadId, String title, String content, String file, User user) {
        this.uploadId = uploadId;
        this.title = title;
        this.content = content;
        this.file = file;
        this.user = user;
        this.numberOfDownloads = 0;
        this.uploadTime = LocalDateTime.now();
    }
}
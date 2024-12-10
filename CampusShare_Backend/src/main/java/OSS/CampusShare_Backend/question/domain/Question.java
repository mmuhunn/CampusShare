package OSS.CampusShare_Backend.question.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Question {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long questionId; // Unique ID for the question

  private String authorName; // Name of the author
  private String authorId;   // ID of the author (e.g., student number)
  private String content;    // Content of the question

  private LocalDateTime createdAt; // Timestamp when the question was created

  public Question(String authorName, String authorId, String content) {
    this.authorName = authorName;
    this.authorId = authorId;
    this.content = content;
    this.createdAt = LocalDateTime.now();
  }
}
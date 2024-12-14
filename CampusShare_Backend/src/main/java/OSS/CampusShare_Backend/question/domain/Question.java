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
@Table(name = "questions")
public class Question {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long questionId; // Unique ID for the question

  @Column
  private String studentID;
  @Column
  private String content;    // Content of the question

  @Column
  private LocalDateTime createdAt; // Timestamp when the question was created

  public Question(String studentID, String content) {
    this.studentID = studentID;
    this.content = content;
    this.createdAt = LocalDateTime.now();
  }
}
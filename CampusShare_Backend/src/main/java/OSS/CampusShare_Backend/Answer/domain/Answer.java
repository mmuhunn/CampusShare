package OSS.CampusShare_Backend.Answer.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Answer {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long answerId; // Unique ID for the answer

  private String studentID;
  private String authorId;   // ID of the author (e.g., student number)
  private String content;    // Content of the answer

  public Answer(String studentID, String authorId, String content) {
    this.studentID = studentID;
    this.authorId = authorId;
    this.content = content;
  }


  public Answer(Long questionId, String studentID, String content) {
  }
}

package Backend_simpleResults.CampusShare_demo.answer.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Answer {
    private Long answerId;      // Unique ID for the answer
    private Long questionId;    // ID of the related question
    private String studentID;   // ID of the student
    private String content;     // Content of the answer

    // Constructor to initialize fields
    public Answer(Long questionId, String studentID, String content) {
        this.questionId = questionId;
        this.studentID = studentID;
        this.content = content;
    }
}

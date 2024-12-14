package Backend_simpleResults.CampusShare_demo.question.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class Question {
    private Long questionId; // Unique ID for the question
    private String studentID; // Student ID of the person asking the question
    private String content; // Content of the question
    private LocalDateTime createdAt; // Timestamp when the question was created

    // Constructor
    public Question(String studentID, String content) {
        this.studentID = studentID;
        this.content = content;
        this.createdAt = LocalDateTime.now(); // Set creation time to current time
    }
}


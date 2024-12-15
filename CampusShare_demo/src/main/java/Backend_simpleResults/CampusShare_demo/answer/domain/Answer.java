package Backend_simpleResults.CampusShare_demo.answer.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Answer {
    private Long answerId; // Unique ID for the answer
    private String studentID; // ID of the student related to the answer
    private String authorId; // ID of the author (e.g., student number)
    private String content; // Content of the answer

    // Constructor for initializing fields
    public Answer(String studentID, String authorId, String content) {
        this.studentID = studentID;
        this.authorId = authorId;
        this.content = content;
    }
}


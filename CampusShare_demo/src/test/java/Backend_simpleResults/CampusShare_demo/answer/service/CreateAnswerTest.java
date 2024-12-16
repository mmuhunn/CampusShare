package Backend_simpleResults.CampusShare_demo.answer.service;

import Backend_simpleResults.CampusShare_demo.answer.domain.Answer;
import Backend_simpleResults.CampusShare_demo.answer.repository.MemoryAnswerRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class CreateAnswerTest {

    private AnswerService answerService;
    private MemoryAnswerRepository answerRepository;

    @BeforeEach
    public void setUp() {
        answerRepository = new MemoryAnswerRepository();
        answerService = new AnswerService(answerRepository);
    }

    @Test
    public void testCreateAnswer() {
        // Given
        Long questionId = 1L;
        String studentID = "12345";
        String content = "This is a test answer";

        // When
        Answer answer = answerService.createAnswer(questionId, studentID, content);

        // Then
        assertThat(answer).isNotNull();
        assertThat(answer.getQuestionId()).isEqualTo(questionId);
        assertThat(answer.getStudentID()).isEqualTo(studentID);
        assertThat(answer.getContent()).isEqualTo(content);
    }
}

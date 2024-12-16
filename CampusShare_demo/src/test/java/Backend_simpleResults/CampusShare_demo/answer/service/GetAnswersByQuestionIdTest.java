package Backend_simpleResults.CampusShare_demo.answer.service;

import Backend_simpleResults.CampusShare_demo.answer.domain.Answer;
import Backend_simpleResults.CampusShare_demo.answer.repository.MemoryAnswerRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class GetAnswersByQuestionIdTest {

    private AnswerService answerService;
    private MemoryAnswerRepository answerRepository;

    @BeforeEach
    public void setUp() {
        answerRepository = new MemoryAnswerRepository();
        answerService = new AnswerService(answerRepository);

        // Prepopulate some answers
        answerService.createAnswer(1L, "12345", "First answer for question 1");
        answerService.createAnswer(1L, "67890", "Second answer for question 1");
        answerService.createAnswer(2L, "54321", "Answer for question 2");
    }

    @Test
    public void testGetAnswersByQuestionId() {
        // Given
        Long questionId = 1L;

        // When
        List<Answer> answers = answerService.getAnswersByQuestionId(questionId);

        // Then
        assertThat(answers).hasSize(2);
        assertThat(answers).allMatch(answer -> answer.getQuestionId().equals(questionId));
    }
}


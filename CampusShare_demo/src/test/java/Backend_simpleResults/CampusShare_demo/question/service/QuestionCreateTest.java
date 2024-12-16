package Backend_simpleResults.CampusShare_demo.question.service;

import Backend_simpleResults.CampusShare_demo.question.domain.Question;
import Backend_simpleResults.CampusShare_demo.question.repository.MemoryQuestionRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class QuestionCreateTest {

    private QuestionService questionService;
    private MemoryQuestionRepository questionRepository;

    @BeforeEach
    public void setup() {
        questionRepository = new MemoryQuestionRepository();
        questionService = new QuestionService(questionRepository);
    }

    @Test
    public void testCreateQuestion() {
        Question question = questionService.createQuestion("12345", "Test question content");
        assertThat(question).isNotNull();
        assertThat(question.getContent()).isEqualTo("Test question content");
    }
}


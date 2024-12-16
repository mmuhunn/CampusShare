package Backend_simpleResults.CampusShare_demo.question.service;

import Backend_simpleResults.CampusShare_demo.question.domain.Question;
import Backend_simpleResults.CampusShare_demo.question.repository.MemoryQuestionRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class GetAllQuestionsTest {

    private QuestionService questionService;
    private MemoryQuestionRepository questionRepository;

    @BeforeEach
    public void setup() {
        questionRepository = new MemoryQuestionRepository();
        questionService = new QuestionService(questionRepository);
    }

    @Test
    public void getAllQuestions() {
        // Given: Add questions
        questionService.createQuestion("12345", "First question");
        questionService.createQuestion("67890", "Second question");

        // When: Retrieve all questions
        List<Question> questions = questionService.getAllQuestions();

        // Then: Verify the questions list
        assertThat(questions).hasSize(2);
        assertThat(questions.get(0).getContent()).isEqualTo("First question");
        assertThat(questions.get(1).getContent()).isEqualTo("Second question");
    }
}


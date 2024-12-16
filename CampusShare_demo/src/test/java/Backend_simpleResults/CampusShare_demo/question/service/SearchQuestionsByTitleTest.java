package Backend_simpleResults.CampusShare_demo.question.service;

import Backend_simpleResults.CampusShare_demo.question.domain.Question;
import Backend_simpleResults.CampusShare_demo.question.repository.MemoryQuestionRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class SearchQuestionsByTitleTest {

    private QuestionService questionService;
    private MemoryQuestionRepository questionRepository;

    @BeforeEach
    public void setup() {
        questionRepository = new MemoryQuestionRepository();
        questionService = new QuestionService(questionRepository);
    }

    @Test
    public void searchQuestionsByTitle() {
        // Given: Add questions with different content
        questionService.createQuestion("12345", "How to use Java?");
        questionService.createQuestion("67890", "Java Spring tutorial");
        questionService.createQuestion("11111", "Learn Python basics");

        // When: Search questions containing "Java"
        List<Question> result = questionService.searchQuestionsByTitle("Java");

        // Then: Verify that only relevant questions are returned
        assertThat(result).hasSize(2);
        assertThat(result.get(0).getContent()).contains("Java");
        assertThat(result.get(1).getContent()).contains("Java");
    }
}


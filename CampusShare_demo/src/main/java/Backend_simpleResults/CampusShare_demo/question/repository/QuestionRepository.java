package Backend_simpleResults.CampusShare_demo.question.repository;

import Backend_simpleResults.CampusShare_demo.question.domain.Question;

import java.util.List;
import java.util.Optional;

public interface QuestionRepository {
    // Save a question
    Question save(Question question);

    // Find a question by its unique ID
    Optional<Question> findById(Long id);

    // Retrieve all questions
    List<Question> findAll();

    // Delete a question by its unique ID
    void deleteById(Long id);
}

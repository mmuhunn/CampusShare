package Backend_simpleResults.CampusShare_demo.answer.repository;

import Backend_simpleResults.CampusShare_demo.answer.domain.Answer;

import java.util.List;
import java.util.Optional;

public interface AnswerRepository {
    // Save an answer
    Answer save(Answer answer);

    // Find an answer by its unique ID
    Optional<Answer> findById(Long id);

    // Retrieve all answers
    List<Answer> findAll();

    // Delete an answer by its unique ID
    void deleteById(Long id);
}

package Backend_simpleResults.CampusShare_demo.answer.repository;

import Backend_simpleResults.CampusShare_demo.answer.domain.Answer;

import java.util.List;

public interface AnswerRepository {
    // Save a new answer
    Answer save(Answer answer);

    // Retrieve answers for a specific question
    List<Answer> findByQuestionId(Long questionId);
}


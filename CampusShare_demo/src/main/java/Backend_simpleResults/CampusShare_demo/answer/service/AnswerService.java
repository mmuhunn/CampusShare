package Backend_simpleResults.CampusShare_demo.answer.service;

import Backend_simpleResults.CampusShare_demo.answer.domain.Answer;
import Backend_simpleResults.CampusShare_demo.answer.repository.AnswerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    // Constructor for dependency injection
    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    // Method to create a new answer
    public Answer createAnswer(String studentID, String authorId, String content) {
        Answer answer = new Answer(studentID, authorId, content);
        return answerRepository.save(answer);
    }

    // Method to fetch all answers
    public List<Answer> getAllAnswers() {
        return answerRepository.findAll();
    }

    // Method to fetch a specific answer by ID
    public Optional<Answer> getAnswerById(Long answerId) {
        return answerRepository.findById(answerId);
    }

    // Method to delete an answer by ID
    public void deleteAnswer(Long answerId) {
        answerRepository.deleteById(answerId);
    }
}

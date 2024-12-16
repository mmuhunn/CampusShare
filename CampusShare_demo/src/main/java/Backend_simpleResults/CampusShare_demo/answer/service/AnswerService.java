package Backend_simpleResults.CampusShare_demo.answer.service;

import Backend_simpleResults.CampusShare_demo.answer.domain.Answer;
import Backend_simpleResults.CampusShare_demo.answer.repository.MemoryAnswerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerService {
    private final MemoryAnswerRepository answerRepository;

    // Constructor for dependency injection
    public AnswerService(MemoryAnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    // Create a new answer for a specific question
    public Answer createAnswer(Long questionId, String studentID, String content) {
        Answer answer = new Answer(questionId, studentID, content);
        return answerRepository.save(answer);
    }

    // Get all answers for a specific question
    public List<Answer> getAnswersByQuestionId(Long questionId) {
        return answerRepository.findByQuestionId(questionId);
    }
}


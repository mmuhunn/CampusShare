package Backend_simpleResults.CampusShare_demo.answer.service;

import Backend_simpleResults.CampusShare_demo.answer.domain.Answer;
import Backend_simpleResults.CampusShare_demo.answer.repository.AnswerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    // Create a new answer for a question
    public Answer createAnswer(Long questionId, String studentID, String content) {
        Answer answer = new Answer(studentID, studentID, content); // "studentID" used as authorId
        return answerRepository.save(answer);
    }

    // Get answers for a specific question
    public List<Answer> getAnswersByQuestionId(Long questionId) {
        return answerRepository.findAll(); // 여기에 questionId 필터링 필요
    }
}


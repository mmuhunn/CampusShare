package OSS.CampusShare_Backend.Answer.service;

import OSS.CampusShare_Backend.Answer.domain.Answer;
import OSS.CampusShare_Backend.Answer.repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
  private final AnswerRepository answerRepository;

  @Autowired
  public AnswerService(AnswerRepository answerRepository) {
    this.answerRepository = answerRepository;
  }

  // Method to create a new answer
  public Answer createAnswer(Long questionId, String studentID, String content) {
    Answer answer = new Answer(questionId, studentID, content);
    return answerRepository.save(answer);
  }

  // Method to fetch all answers for a specific question
  public List<Answer> getAnswersByQuestionId(Long questionId) {
    return answerRepository.findAll(); // Modify with a custom query if needed
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
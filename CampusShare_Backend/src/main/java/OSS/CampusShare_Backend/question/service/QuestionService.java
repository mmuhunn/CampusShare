package OSS.CampusShare_Backend.question.service;

import OSS.CampusShare_Backend.question.domain.Question;
import OSS.CampusShare_Backend.question.repository.QuestionRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@Transactional
public class QuestionService {
  private final QuestionRepository questionRepository;

//  @Autowired
//  public QuestionService(QuestionRepository questionRepository) {
//    this.questionRepository = questionRepository;
//  }

  // Method to create a new question
  public Question createQuestion(String studentID, String content) {
    Question question = new Question(studentID, content);
    return questionRepository.save(question);
  }

  // Method to fetch all questions
  public List<Question> getAllQuestions() {
    return questionRepository.findAll();
  }

  // Method to fetch a specific question by ID
  public Optional<Question> getQuestionById(Long questionId) {
    return questionRepository.findById(questionId);
  }

  // Method to delete a question by ID
  public void deleteQuestion(Long questionId) {
    questionRepository.deleteById(questionId);
  }
}
package Backend_simpleResults.CampusShare_demo.question.service;

import Backend_simpleResults.CampusShare_demo.question.domain.Question;
import Backend_simpleResults.CampusShare_demo.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    // Constructor for dependency injection
    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    // Create a new question
    public Question createQuestion(String studentID, String content) {
        Question question = new Question(studentID, content);
        return questionRepository.save(question);
    }

    // Retrieve all questions
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    // Retrieve a specific question by ID
    public Optional<Question> getQuestionById(Long questionId) {
        return questionRepository.findById(questionId);
    }
    public List<Question> searchQuestionsByTitle(String title) {
        return questionRepository.findByContentContaining(title);
    }

}

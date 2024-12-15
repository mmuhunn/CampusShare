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


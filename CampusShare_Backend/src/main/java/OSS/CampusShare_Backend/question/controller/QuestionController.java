package OSS.CampusShare_Backend.question.controller;

import OSS.CampusShare_Backend.question.domain.Question;
import OSS.CampusShare_Backend.question.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/question")
public class QuestionController {
  private final QuestionService questionService;

  @Autowired
  public QuestionController(QuestionService questionService) {
    this.questionService = questionService;
  }

  // Endpoint to create a new question
  @PostMapping("/create")
  public ResponseEntity<Question> createQuestion(@RequestParam String studentID,
                                                 @RequestParam String content) {
    Question question = questionService.createQuestion(studentID, content);
    return ResponseEntity.ok(question);
  }

  // Endpoint to fetch all questions
  @GetMapping("/all")
  public ResponseEntity<List<Question>> getAllQuestions() {
    return ResponseEntity.ok(questionService.getAllQuestions());
  }

  // Endpoint to fetch a specific question by ID
  @GetMapping("/{id}")
  public ResponseEntity<Question> getQuestionById(@PathVariable Long id) {
    return questionService.getQuestionById(id)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  // Endpoint to delete a question by ID
  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteQuestion(@PathVariable Long id) {
    questionService.deleteQuestion(id);
    return ResponseEntity.ok("The question has been deleted.");
  }
}

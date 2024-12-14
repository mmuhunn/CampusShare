package OSS.CampusShare_Backend.Answer.controller;

import OSS.CampusShare_Backend.Answer.domain.Answer;
import OSS.CampusShare_Backend.Answer.service.AnswerService;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/answer")
@RequiredArgsConstructor(access = AccessLevel.PROTECTED)
public class AnswerController {
  private final AnswerService answerService;


//  @Autowired
//  public AnswerController(AnswerService answerService) {
//    this.answerService = answerService;
//  }

  // Endpoint to create a new answer
  @PostMapping("/create")
  public ResponseEntity<Answer> createAnswer(@RequestParam Long questionId,
                                             @RequestParam String studentID,
                                             @RequestParam String content) {
    Answer answer = answerService.createAnswer(questionId, studentID, content);
    return ResponseEntity.ok(answer);
  }

  // Endpoint to fetch all answers for a specific question
  @GetMapping("/question/{questionId}")
  public ResponseEntity<List<Answer>> getAnswersByQuestionId(@PathVariable Long questionId) {
    return ResponseEntity.ok(answerService.getAnswersByQuestionId(questionId));
  }

  // Endpoint to fetch a specific answer by ID
  @GetMapping("/{id}")
  public ResponseEntity<Answer> getAnswerById(@PathVariable Long id) {
    return answerService.getAnswerById(id)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  // Endpoint to delete an answer by ID
  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteAnswer(@PathVariable Long id) {
    answerService.deleteAnswer(id);
    return ResponseEntity.ok("The answer has been deleted.");
  }
}

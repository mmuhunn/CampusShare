package Backend_simpleResults.CampusShare_demo.answer.controller;

import Backend_simpleResults.CampusShare_demo.answer.domain.Answer;
import Backend_simpleResults.CampusShare_demo.answer.service.AnswerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/answer")
@RequiredArgsConstructor
public class AnswerController {
    private final AnswerService answerService;

    // Endpoint to create a new answer
    @PostMapping("/create")
    public ResponseEntity<Answer> createAnswer(@RequestParam String studentID,
                                               @RequestParam String authorId,
                                               @RequestParam String content) {
        Answer answer = answerService.createAnswer(studentID, authorId, content);
        return ResponseEntity.ok(answer);
    }

    // Endpoint to fetch all answers
    @GetMapping("/all")
    public ResponseEntity<List<Answer>> getAllAnswers() {
        return ResponseEntity.ok(answerService.getAllAnswers());
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

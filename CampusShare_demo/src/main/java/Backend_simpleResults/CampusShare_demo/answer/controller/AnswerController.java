package Backend_simpleResults.CampusShare_demo.answer.controller;

import Backend_simpleResults.CampusShare_demo.answer.domain.Answer;
import Backend_simpleResults.CampusShare_demo.answer.service.AnswerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/answers")
public class AnswerController {

    private final AnswerService answerService;

    // 1. 답변 등록
    @PostMapping("/create")
    public ResponseEntity<Answer> createAnswer(@RequestParam Long questionId,
                                               @RequestParam String studentID,
                                               @RequestParam String content) {
        Answer answer = answerService.createAnswer(questionId, studentID, content);
        return ResponseEntity.ok(answer);
    }

    // 2. 특정 질문에 대한 답변 조회
    @GetMapping("/question/{questionId}")
    public ResponseEntity<List<Answer>> getAnswersByQuestionId(@PathVariable Long questionId) {
        List<Answer> answers = answerService.getAnswersByQuestionId(questionId);
        return ResponseEntity.ok(answers);
    }
}

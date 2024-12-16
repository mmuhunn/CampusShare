package Backend_simpleResults.CampusShare_demo.answer.controller;

import Backend_simpleResults.CampusShare_demo.answer.domain.Answer;
import Backend_simpleResults.CampusShare_demo.answer.service.AnswerService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/answers")
@RequiredArgsConstructor
public class AnswerController {

    private final AnswerService answerService;

    // 특정 질문에 대한 답변 조회
    @GetMapping("/question/{questionId}")
    public ResponseEntity<List<Answer>> getAnswersByQuestionId(@PathVariable Long questionId) {
        List<Answer> answers = answerService.getAnswersByQuestionId(questionId);
        return ResponseEntity.ok(answers);
    }

    // 새로운 답변 등록
    @PostMapping("/question/{questionId}")
    public ResponseEntity<Answer> createAnswer(@PathVariable Long questionId,
                                               @RequestParam String content) {
        Answer answer = answerService.createAnswer(questionId, "anonymous", content);
        return ResponseEntity.ok(answer);
    }
}

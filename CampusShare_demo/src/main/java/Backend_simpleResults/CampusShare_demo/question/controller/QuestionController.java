package Backend_simpleResults.CampusShare_demo.question.controller;

import Backend_simpleResults.CampusShare_demo.question.domain.Question;
import Backend_simpleResults.CampusShare_demo.question.service.QuestionService;
import Backend_simpleResults.CampusShare_demo.answer.service.AnswerService;
import Backend_simpleResults.CampusShare_demo.answer.domain.Answer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/qna")
public class QuestionController {
    private final QuestionService questionService;
    private final AnswerService answerService;

    // QnA 게시판 화면
    @GetMapping
    public String getQnABoard(Model model) {
        List<Question> questions = questionService.getAllQuestions();
        model.addAttribute("questions", questions);
        return "qna"; // qna.html 페이지 반환
    }

    // 질문 상세 페이지
    @GetMapping("/{id}")
    public String getQuestionDetails(@PathVariable Long id, Model model) {
        Question question = questionService.getQuestionById(id)
                .orElseThrow(() -> new IllegalArgumentException("Question not found."));
        List<Answer> answers = answerService.getAnswersByQuestionId(id);

        model.addAttribute("question", question);
        model.addAttribute("answers", answers);
        return "qna_detail"; // qna_detail.html 반환
    }

    // 새 질문 작성 페이지
    @GetMapping("/new")
    public String newQuestionPage() {
        return "new_question"; // new_question.html 반환
    }

    // 새 질문 등록 처리
    @PostMapping("/new")
    public String createQuestion(@RequestParam String content) {
        questionService.createQuestion("anonymous", content);
        return "redirect:/qna";
    }
    @GetMapping("/search")
    public String searchQuestions(@RequestParam String title, Model model) {
        List<Question> questions = questionService.searchQuestionsByTitle(title);
        model.addAttribute("questions", questions);
        return "qna"; // 검색 결과를 qna.html에 표시
    }

    @PostMapping("/{id}/answer")
    public String postAnswer(@PathVariable Long id, @RequestParam String content) {
        answerService.createAnswer(id, "anonymous", content); // 답변 저장
        return "redirect:/qna/" + id; // 현재 질문 페이지로 리다이렉트
    }
}

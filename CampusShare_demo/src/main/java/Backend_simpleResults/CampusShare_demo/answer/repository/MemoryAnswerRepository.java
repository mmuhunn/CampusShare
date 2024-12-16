package Backend_simpleResults.CampusShare_demo.answer.repository;

import Backend_simpleResults.CampusShare_demo.answer.domain.Answer;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class MemoryAnswerRepository implements AnswerRepository {

    private final List<Answer> store = new ArrayList<>(); // 메모리 기반 저장소
    private Long sequence = 0L; // 답변 ID 자동 증가

    @Override
    public Answer save(Answer answer) {
        answer.setAnswerId(++sequence); // ID 자동 할당
        store.add(answer); // 저장소에 추가
        return answer;
    }

    @Override
    public List<Answer> findByQuestionId(Long questionId) {
        return store.stream()
                .filter(answer -> answer.getQuestionId().equals(questionId)) // 특정 질문 ID와 일치하는 답변 필터링
                .collect(Collectors.toList());
    }
}


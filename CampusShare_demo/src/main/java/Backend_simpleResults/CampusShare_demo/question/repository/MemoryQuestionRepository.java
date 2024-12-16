package Backend_simpleResults.CampusShare_demo.question.repository;

import Backend_simpleResults.CampusShare_demo.question.domain.Question;

import java.util.*;
import java.util.stream.Collectors;

public class MemoryQuestionRepository implements QuestionRepository {
    private final HashMap<Long, Question> store = new HashMap<>(); // Memory-based storage
    private Long sequence = 0L; // ID generator

    @Override
    public Question save(Question question) {
        if (question.getQuestionId() == null) {
            question.setQuestionId(++sequence); // Auto-generate ID if not set
        }
        store.put(question.getQuestionId(), question);
        return question;
    }

    @Override
    public Optional<Question> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public List<Question> findAll() {
        return new ArrayList<>(store.values());
    }

    @Override
    public void deleteById(Long id) {
        store.remove(id);
    }

    // 제목에 특정 문자열이 포함된 질문 검색
    public List<Question> findByContentContaining(String title) {
        return store.values().stream()
                .filter(question -> question.getContent().toLowerCase().contains(title.toLowerCase()))
                .collect(Collectors.toList());
    }
}


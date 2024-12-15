package Backend_simpleResults.CampusShare_demo.answer.repository;

import Backend_simpleResults.CampusShare_demo.answer.domain.Answer;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

public class MemoryAnswerRepository implements AnswerRepository {
    private final HashMap<Long, Answer> store = new HashMap<>(); // Memory-based storage
    private Long sequence = 0L; // ID generator

    @Override
    public Answer save(Answer answer) {
        if (answer.getAnswerId() == null) {
            answer.setAnswerId(++sequence); // Auto-generate ID if not set
        }
        store.put(answer.getAnswerId(), answer);
        return answer;
    }

    @Override
    public Optional<Answer> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public List<Answer> findAll() {
        return new ArrayList<>(store.values());
    }

    @Override
    public void deleteById(Long id) {
        store.remove(id);
    }
}


package Backend_simpleResults.CampusShare_demo.user.repository;

import Backend_simpleResults.CampusShare_demo.user.domain.User;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

public class MemoryUserRepository implements UserRepository {
    private final HashMap<Long, User> store = new HashMap<>(); // Memory-based storage
    private Long sequence = 0L; // ID generator

    @Override
    public User save(User user) {
        if (user.getId() == null) {
            user.setId(++sequence); // Auto-generate ID if not set
        }
        store.put(user.getId(), user);
        return user;
    }

    @Override
    public Optional<User> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public Optional<User> findByStudentNumber(String studentNumber) {
        return store.values().stream()
                .filter(user -> user.getStudentNumber().equals(studentNumber))
                .findFirst();
    }

    @Override
    public List<User> findAll() {
        return new ArrayList<>(store.values());
    }

    @Override
    public void deleteById(Long id) {
        store.remove(id);
    }
}

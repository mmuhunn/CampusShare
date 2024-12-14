package Backend_simpleResults.CampusShare_demo.user.service;

import Backend_simpleResults.CampusShare_demo.user.domain.User;
import Backend_simpleResults.CampusShare_demo.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    // Constructor for dependency injection
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Register a new user
    public User registerUser(String name, String studentNumber, String password) {
        if (userRepository.findByStudentNumber(studentNumber).isPresent()) {
            throw new IllegalArgumentException("A user with this student number already exists.");
        }
        User user = new User(name, studentNumber, password);
        return userRepository.save(user);
    }

    // Login a user
    public void loginUser(String studentNumber, String password) {
        Optional<User> user = userRepository.findByStudentNumber(studentNumber);
        if (user.isEmpty() || !user.get().getPassword().equals(password)) {
            throw new IllegalArgumentException("Incorrect student number or password.");
        }
    }

    // Find a user by student number
    public User findByStudentNumber(String studentNumber) {
        return userRepository.findByStudentNumber(studentNumber)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
    }
}

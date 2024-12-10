package OSS.CampusShare_Backend.User.service;

import OSS.CampusShare_Backend.User.domain.User;
import OSS.CampusShare_Backend.User.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User registerUser(String name, String studentNumber, String password) {
        if (userRepository.findByStudentNumber(studentNumber).isPresent()) {
            throw new IllegalArgumentException("Its Already exists a student number.");
        }
        User user = new User(name, studentNumber, password);
        return userRepository.save(user);
    }

    public User loginUser(String studentNumber, String password) {
        Optional<User> user = userRepository.findByStudentNumber(studentNumber);
        if (user.isEmpty() || !user.get().getPassword().equals(password)) {
            throw new IllegalArgumentException("Wrong studentID or password.");
        }
        return user.get();
    }

    public User findByStudentNumber(String studentNumber) {
        Optional<User> user = userRepository.findByStudentNumber(studentNumber);
        return user.orElseThrow(() -> new IllegalArgumentException("User not found"));
    }
}

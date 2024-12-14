package OSS.CampusShare_Backend.User.service;

import OSS.CampusShare_Backend.User.domain.User;
import OSS.CampusShare_Backend.User.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
@Transactional
public class UserService {
    private final UserRepository userRepository;

//    @Autowired
//    public UserService(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }

    public User registerUser(String name, String studentNumber, String password) {
        if (userRepository.findByStudentNumber(studentNumber).isPresent()) {
            throw new IllegalArgumentException("Its Already exists a student number.");
        }
        User user = new User(name, studentNumber, password);
        return userRepository.save(user);
    }

    public void loginUser(String studentNumber, String password) {
        Optional<User> user = userRepository.findByStudentNumber(studentNumber);
        if (user.isEmpty() || !user.get().getPassword().equals(password)) {
            throw new IllegalArgumentException("Wrong studentID or password.");
        }
    }

    public User findByStudentNumber(String studentNumber) {
      return userRepository.findByStudentNumber(studentNumber)
            .orElseThrow(() -> new IllegalArgumentException("User not found"));
    }
}

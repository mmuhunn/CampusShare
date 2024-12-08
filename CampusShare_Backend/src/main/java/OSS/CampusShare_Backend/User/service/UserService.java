package OSS.CampusShare_Backend.User.service;

import OSS.CampusShare_Backend.User.domain.User;
import OSS.CampusShare_Backend.User.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;


    public UserService(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User registerUser(String name, String studentId, String password) {
        if (userRepository.findByStudentId(studentId).isPresent()) {
            throw new IllegalArgumentException("Student ID already exists.");
        }
        User user = new User();
        user.setName(name);
        user.setStudentId(studentId);
        user.setPassword(passwordEncoder.encode(password));
        return userRepository.save(user);
    }

    public Optional<User> loginUser(String studentId, String password) {
        Optional<User> userOptional = userRepository.findByStudentId(studentId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (passwordEncoder.matches(password, user.getPassword())) {
                return Optional.of(user);
            }
        }
        return Optional.empty();
    }
}

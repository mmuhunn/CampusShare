package Backend_simpleResults.CampusShare_demo.user.repository;

import Backend_simpleResults.CampusShare_demo.user.domain.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository {
    // Save a user to the repository
    User save(User user);

    // Find a user by their unique ID
    Optional<User> findById(Long id);

    // Find a user by their student number
    Optional<User> findByStudentNumber(String studentNumber);

    // Retrieve all users
    List<User> findAll();

    // Delete a user by their ID
    void deleteById(Long id);
}

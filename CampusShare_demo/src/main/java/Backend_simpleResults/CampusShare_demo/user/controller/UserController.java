package Backend_simpleResults.CampusShare_demo.user.controller;

import Backend_simpleResults.CampusShare_demo.user.domain.User;
import Backend_simpleResults.CampusShare_demo.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    // Register a new user
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        // Call the service to register the user
        User registeredUser = userService.registerUser(user.getName(), user.getStudentNumber(), user.getPassword());
        return ResponseEntity.ok(registeredUser);
    }

    // Login a user
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestParam String studentNumber, @RequestParam String password) {
        // Call the service to validate login
        userService.loginUser(studentNumber, password);
        return ResponseEntity.ok("Login Success!");
    }
}


package OSS.CampusShare_Backend.User.controller;

import OSS.CampusShare_Backend.User.domain.User;
import OSS.CampusShare_Backend.User.service.UserService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor(access = AccessLevel.PROTECTED)

public class UserController {
    private final UserService userService;

//    @Autowired
//    public UserController(UserService userService) {
//        this.userService = userService;
//    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.registerUser(user.getName(), user.getStudentNumber(), user.getPassword()));
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestParam String studentNumber, @RequestParam String password) {
        userService.loginUser(studentNumber, password);
        return ResponseEntity.ok("Login Success!");
    }
}

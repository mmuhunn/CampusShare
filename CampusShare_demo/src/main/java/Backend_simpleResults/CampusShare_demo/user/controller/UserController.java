package Backend_simpleResults.CampusShare_demo.user.controller;

import Backend_simpleResults.CampusShare_demo.user.domain.User;
import Backend_simpleResults.CampusShare_demo.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    // Render the registration page
    @GetMapping("/register")
    public String registerPage() {
        return "register"; // Corresponds to src/main/resources/templates/register.html
    }

    // Handle registration form submission
    @PostMapping("/register")
    @ResponseBody
    public ResponseEntity<String> registerUser(@RequestParam String name,
                                               @RequestParam String studentNumber,
                                               @RequestParam String password) {
        try {
            // Call the service to register the user
            userService.registerUser(name, studentNumber, password);
            return ResponseEntity.ok("Registration successful");
        } catch (IllegalArgumentException e) {
            // Return error message if the student number already exists
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Other existing endpoints (e.g., login) can remain unchanged
    @GetMapping("/login")
    public String loginPage() {
        return "login"; // Corresponds to login.html (to be created later)
    }
}

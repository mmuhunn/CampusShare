package Backend_simpleResults.CampusShare_demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "home"; // Corresponds to src/main/resources/templates/home.html
    }
}

package OSS.CampusShare_Backend.dashboard.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DashboardController {

    // 대시보드 페이지
    @GetMapping("/dashboard")
    public String dashboardPage() {
        return "dashboard"; // dashboard.html 반환
    }
}


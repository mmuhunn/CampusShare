package OSS.CampusShare_Backend.frontend;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FrontendController {
  @GetMapping({"/{path:^(?!api).*}", "/{path:^(?!api).*}/**"})
  public String forward() {
    return "forward:/index.html";
  }
}



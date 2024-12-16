package Backend_simpleResults.CampusShare_demo.share.controller;

import Backend_simpleResults.CampusShare_demo.share.domain.Share;
import Backend_simpleResults.CampusShare_demo.share.service.ShareService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class ShareController {
    private final ShareService shareService;

    // Display the Share Board
    @GetMapping("/share")
    public String shareBoard(@RequestParam(required = false) String title, Model model) {
        List<Share> shares;

        // If a title is provided, perform a search
        if (title != null && !title.isEmpty()) {
            shares = shareService.searchContentByTitle(title);
        } else {
            // Otherwise, fetch all shared content
            shares = shareService.getAllSharedContent();
        }

        // Add the list of shares to the model
        model.addAttribute("shares", shares);
        return "share"; // Corresponds to src/main/resources/templates/share.html
    }

    // Display the details of a specific post
    @GetMapping("/share/{id}")
    public String viewPost(@PathVariable Long id, Model model) {
        Share share = shareService.getShareById(id)
                .orElseThrow(() -> new IllegalArgumentException("Post not found."));
        model.addAttribute("share", share);
        return "share_detail"; // Corresponds to src/main/resources/templates/share_detail.html
    }

    // Navigate to the New Post Page
    @GetMapping("/share/new")
    public String newPostPage() {
        return "new_post"; // Placeholder for the new post page template
    }
}


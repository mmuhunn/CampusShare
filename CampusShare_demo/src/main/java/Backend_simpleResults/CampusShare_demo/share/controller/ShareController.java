package Backend_simpleResults.CampusShare_demo.share.controller;

import Backend_simpleResults.CampusShare_demo.share.domain.Share;
import Backend_simpleResults.CampusShare_demo.share.service.ShareService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/shares")
@RequiredArgsConstructor
public class ShareController {

    private final ShareService shareService;

    // Upload content
    @PostMapping("/upload")
    public ResponseEntity<Share> uploadContent(@RequestParam String studentNumber,
                                               @RequestParam String title,
                                               @RequestParam String content,
                                               @RequestParam String file) {
        Share newShare = shareService.uploadContent(studentNumber, title, content, file);
        return ResponseEntity.ok(newShare);
    }

    // Download content
    @PostMapping("/download/{uploadId}")
    public ResponseEntity<String> downloadContent(@PathVariable String uploadId) {
        boolean success = shareService.downloadContent(uploadId);
        if (success) {
            return ResponseEntity.ok("Download successful!");
        } else {
            return ResponseEntity.status(404).body("Content not found.");
        }
    }

    // Retrieve all shared content
    @GetMapping("/")
    public ResponseEntity<List<Share>> getAllSharedContent() {
        List<Share> shares = shareService.getAllSharedContent();
        return ResponseEntity.ok(shares);
    }

    // Search content by title
    @GetMapping("/search")
    public ResponseEntity<List<Share>> searchContent(@RequestParam String title) {
        List<Share> shares = shareService.searchContentByTitle(title);
        return ResponseEntity.ok(shares);
    }
}


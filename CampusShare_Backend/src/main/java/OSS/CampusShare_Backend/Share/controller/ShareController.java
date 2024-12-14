package OSS.CampusShare_Backend.Share.controller;

import OSS.CampusShare_Backend.Share.domain.Share;
import OSS.CampusShare_Backend.Share.service.ShareService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/shares")
@RequiredArgsConstructor(access = AccessLevel.PROTECTED)

public class ShareController {

    private final ShareService shareService;

//    @Autowired
//    public ShareController(ShareService shareService) {
//        this.shareService = shareService;
//    }

    // Upload
    @PostMapping("/upload")
    public ResponseEntity<Share> uploadContent(@RequestParam String studentNumber,
                                               @RequestParam String title,
                                               @RequestParam String content,
                                               @RequestParam String file) {
        Share newShare = shareService.uploadContent(studentNumber, title, content, file);
        return ResponseEntity.ok(newShare);
    }

    // Download
    @PostMapping("/download/{uploadId}")
    public ResponseEntity<String> downloadContent(@PathVariable String uploadId) {
        boolean success = shareService.downloadContent(uploadId);
        if (success) {
            return ResponseEntity.ok("Download successful!");
        } else {
            return ResponseEntity.status(404).body("Content not found.");
        }
    }

    // Search all contents
    @GetMapping("/")
    public List<Share> getAllSharedContent() {
        return shareService.getAllSharedContent();
    }

    // Searching by title
    @GetMapping("/search")
    public List<Share> searchContent(@RequestParam String title) {
        return shareService.searchContentByTitle(title);
    }
}

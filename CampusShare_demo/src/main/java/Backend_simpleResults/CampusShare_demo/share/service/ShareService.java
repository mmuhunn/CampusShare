package Backend_simpleResults.CampusShare_demo.share.service;

import Backend_simpleResults.CampusShare_demo.share.domain.Share;
import Backend_simpleResults.CampusShare_demo.share.repository.ShareRepository;
import Backend_simpleResults.CampusShare_demo.user.domain.User;
import Backend_simpleResults.CampusShare_demo.user.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShareService {

    private final ShareRepository shareRepository;
    private final UserService userService;

    // Constructor for dependency injection
    public ShareService(ShareRepository shareRepository, UserService userService) {
        this.shareRepository = shareRepository;
        this.userService = userService;
    }

    // Upload content
    public Share uploadContent(String studentNumber, String title, String content, String file) {
        Share share = new Share(studentNumber, title, content, file, null);
        return shareRepository.save(share);
    }


    // Download content (increments download count)
    public boolean downloadContent(String uploadId) {
        Optional<Share> shareOpt = shareRepository.findByUploadId(uploadId);
        if (shareOpt.isPresent()) {
            Share share = shareOpt.get();
            share.setNumberOfDownloads(share.getNumberOfDownloads() + 1);
            shareRepository.save(share);
            return true;
        }
        return false;
    }

    // Retrieve all shared content
    public List<Share> getAllSharedContent() {
        return shareRepository.findAll();
    }

    // Search content by title
    public List<Share> searchContentByTitle(String title) {
        return shareRepository.findByTitleContaining(title);
    }

    // Add this method to ShareService
    public Optional<Share> getShareById(Long id) {
        return shareRepository.findById(id);
    }

}

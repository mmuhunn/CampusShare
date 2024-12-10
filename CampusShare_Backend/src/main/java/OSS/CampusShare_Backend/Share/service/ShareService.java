package OSS.CampusShare_Backend.Share.service;

import OSS.CampusShare_Backend.Share.domain.Share;
import OSS.CampusShare_Backend.Share.repository.ShareRepository;
import OSS.CampusShare_Backend.User.domain.User;
import OSS.CampusShare_Backend.User.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShareService {

    private final ShareRepository shareRepository;
    private final UserService userService;

    @Autowired
    public ShareService(ShareRepository shareRepository, UserService userService) {
        this.shareRepository = shareRepository;
        this.userService = userService;
    }

    // upload
    public Share uploadContent(String studentNumber, String title, String content, String file) {
        User user = userService.findByStudentNumber(studentNumber);
        Share share = new Share(studentNumber, title, content, file, user);
        return shareRepository.save(share);
    }

    // Download
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

    // Search all contents
    public List<Share> getAllSharedContent() {
        return shareRepository.findAll();
    }

    // Searching by title
    public List<Share> searchContentByTitle(String title) {
        return shareRepository.findByTitleContaining(title);
    }
}
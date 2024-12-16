package Backend_simpleResults.CampusShare_demo.share.service;

import Backend_simpleResults.CampusShare_demo.share.domain.Share;
import Backend_simpleResults.CampusShare_demo.share.repository.MemoryShareRepository;
import Backend_simpleResults.CampusShare_demo.user.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class DownloadContentTest {

    private ShareService shareService;
    private MemoryShareRepository shareRepository;

    @BeforeEach
    void setup() {
        shareRepository = new MemoryShareRepository();
        UserService userService = null;
        shareService = new ShareService(shareRepository, userService);
    }

    @Test
    void downloadContent() {
        Share share = shareService.uploadContent("12345", "Download Test", "Test Content", "file.txt");
        boolean result = shareService.downloadContent(share.getUploadId());

        assertThat(result).isTrue();
        assertThat(share.getNumberOfDownloads()).isEqualTo(1);
    }
}


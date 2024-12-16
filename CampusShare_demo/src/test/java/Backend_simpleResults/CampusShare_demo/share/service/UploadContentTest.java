package Backend_simpleResults.CampusShare_demo.share.service;

import Backend_simpleResults.CampusShare_demo.share.domain.Share;
import Backend_simpleResults.CampusShare_demo.share.repository.MemoryShareRepository;
import Backend_simpleResults.CampusShare_demo.user.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class UploadContentTest {

    private ShareService shareService;
    private MemoryShareRepository shareRepository;

    @BeforeEach
    void setup() {
        shareRepository = new MemoryShareRepository();
        UserService userService = null; // 현재 사용하지 않음
        shareService = new ShareService(shareRepository, userService);
    }

    @Test
    void uploadContent() {
        Share share = shareService.uploadContent("12345", "Test Title", "Test Content", "file.txt");

        assertThat(share).isNotNull();
        assertThat(share.getTitle()).isEqualTo("Test Title");
        assertThat(share.getNumberOfDownloads()).isZero();
    }
}


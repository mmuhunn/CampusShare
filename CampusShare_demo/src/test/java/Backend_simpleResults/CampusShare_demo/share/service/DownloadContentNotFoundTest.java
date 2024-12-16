package Backend_simpleResults.CampusShare_demo.share.service;

import Backend_simpleResults.CampusShare_demo.share.repository.MemoryShareRepository;
import Backend_simpleResults.CampusShare_demo.user.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class DownloadContentNotFoundTest {

    private ShareService shareService;
    private MemoryShareRepository shareRepository;

    @BeforeEach
    void setup() {
        shareRepository = new MemoryShareRepository();
        UserService userService = null;
        shareService = new ShareService(shareRepository, userService);
    }

    @Test
    void downloadContentNotFound() {
        boolean result = shareService.downloadContent("InvalidID");

        assertThat(result).isFalse();
    }
}


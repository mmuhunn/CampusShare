package Backend_simpleResults.CampusShare_demo.share.service;

import Backend_simpleResults.CampusShare_demo.share.domain.Share;
import Backend_simpleResults.CampusShare_demo.share.repository.MemoryShareRepository;
import Backend_simpleResults.CampusShare_demo.user.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

public class GetShareByIdTest {

    private ShareService shareService;
    private MemoryShareRepository shareRepository;

    @BeforeEach
    void setup() {
        shareRepository = new MemoryShareRepository();
        UserService userService = null;
        shareService = new ShareService(shareRepository, userService);
    }

    @Test
    void getShareById() {
        Share share = shareService.uploadContent("12345", "Find By ID", "Content", "file.txt");

        Optional<Share> result = shareService.getShareById(share.getId());

        assertThat(result).isPresent();
        assertThat(result.get().getTitle()).isEqualTo("Find By ID");
    }
}


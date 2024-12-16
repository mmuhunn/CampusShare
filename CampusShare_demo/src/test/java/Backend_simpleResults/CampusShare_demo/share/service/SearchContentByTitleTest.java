package Backend_simpleResults.CampusShare_demo.share.service;

import Backend_simpleResults.CampusShare_demo.share.domain.Share;
import Backend_simpleResults.CampusShare_demo.share.repository.MemoryShareRepository;
import Backend_simpleResults.CampusShare_demo.user.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class SearchContentByTitleTest {

    private ShareService shareService;
    private MemoryShareRepository shareRepository;

    @BeforeEach
    void setup() {
        shareRepository = new MemoryShareRepository();
        UserService userService = null;
        shareService = new ShareService(shareRepository, userService);
    }

    @Test
    void searchContentByTitle() {
        shareService.uploadContent("12345", "Matching Title", "Content 1", "file1.txt");
        shareService.uploadContent("67890", "Non Matching Title", "Content 2", "file2.txt");

        List<Share> results = shareService.searchContentByTitle("Matching");

        assertThat(results).hasSize(2);
        assertThat(results.get(0).getTitle()).isEqualTo("Matching Title");
    }
}


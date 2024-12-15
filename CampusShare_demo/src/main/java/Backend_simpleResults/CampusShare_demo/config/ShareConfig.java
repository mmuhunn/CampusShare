package Backend_simpleResults.CampusShare_demo.config;

import Backend_simpleResults.CampusShare_demo.share.repository.MemoryShareRepository;
import Backend_simpleResults.CampusShare_demo.share.repository.ShareRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ShareConfig {

    @Bean
    public ShareRepository shareRepository() {
        return new MemoryShareRepository();
    }
}

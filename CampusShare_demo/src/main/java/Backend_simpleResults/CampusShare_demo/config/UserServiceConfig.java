package Backend_simpleResults.CampusShare_demo.config;

import Backend_simpleResults.CampusShare_demo.user.repository.MemoryUserRepository;
import Backend_simpleResults.CampusShare_demo.user.repository.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserServiceConfig {

    @Bean
    public UserRepository userRepository() {
        return new MemoryUserRepository();
    }
}

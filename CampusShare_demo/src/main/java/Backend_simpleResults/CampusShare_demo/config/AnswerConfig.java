package Backend_simpleResults.CampusShare_demo.config;

import Backend_simpleResults.CampusShare_demo.answer.repository.AnswerRepository;
import Backend_simpleResults.CampusShare_demo.answer.repository.MemoryAnswerRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AnswerConfig {

    @Bean
    public AnswerRepository answerRepository() {
        return new MemoryAnswerRepository();
    }
}


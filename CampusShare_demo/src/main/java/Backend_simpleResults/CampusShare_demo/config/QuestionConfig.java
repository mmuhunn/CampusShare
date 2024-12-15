package Backend_simpleResults.CampusShare_demo.config;

import Backend_simpleResults.CampusShare_demo.question.repository.MemoryQuestionRepository;
import Backend_simpleResults.CampusShare_demo.question.repository.QuestionRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class QuestionConfig {

    @Bean
    public QuestionRepository questionRepository() {
        return new MemoryQuestionRepository();
    }
}

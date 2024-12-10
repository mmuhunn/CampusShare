package OSS.CampusShare_Backend.Answer.repository;

import OSS.CampusShare_Backend.Answer.domain.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
  // Additional query methods can be added here if needed
}
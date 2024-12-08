package OSS.CampusShare_Backend.question.repository;

import OSS.CampusShare_Backend.question.domain.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
  // Default CRUD methods provided by JpaRepository
}
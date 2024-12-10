package OSS.CampusShare_Backend.Share.repository;

import OSS.CampusShare_Backend.Share.domain.Share;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ShareRepository extends JpaRepository<Share, Long> {
    Optional<Share> findByUploadId(String uploadId);
    List<Share> findByTitleContaining(String title);
}
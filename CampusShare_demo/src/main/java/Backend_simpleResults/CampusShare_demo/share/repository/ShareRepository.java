package Backend_simpleResults.CampusShare_demo.share.repository;

import Backend_simpleResults.CampusShare_demo.share.domain.Share;

import java.util.List;
import java.util.Optional;

public interface ShareRepository {
    // Save a share
    Share save(Share share);

    // Find a share by its unique ID
    Optional<Share> findById(Long id);

    // Find a share by its upload ID
    Optional<Share> findByUploadId(String uploadId);

    // Find shares by title containing a specific string
    List<Share> findByTitleContaining(String title);

    // Retrieve all shares
    List<Share> findAll();

    // Delete a share by its unique ID
    void deleteById(Long id);
}

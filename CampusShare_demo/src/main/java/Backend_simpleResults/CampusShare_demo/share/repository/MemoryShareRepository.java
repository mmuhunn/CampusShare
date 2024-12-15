package Backend_simpleResults.CampusShare_demo.share.repository;

import Backend_simpleResults.CampusShare_demo.share.domain.Share;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

public class MemoryShareRepository implements ShareRepository {
    private final HashMap<Long, Share> store = new HashMap<>(); // Memory-based storage
    private Long sequence = 0L; // ID generator

    @Override
    public Share save(Share share) {
        if (share.getId() == null) {
            share.setId(++sequence); // Auto-generate ID if not set
        }
        store.put(share.getId(), share);
        return share;
    }

    @Override
    public Optional<Share> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public Optional<Share> findByUploadId(String uploadId) {
        return store.values().stream()
                .filter(share -> share.getUploadId().equals(uploadId))
                .findFirst();
    }

    @Override
    public List<Share> findByTitleContaining(String title) {
        List<Share> result = new ArrayList<>();
        for (Share share : store.values()) {
            if (share.getTitle() != null && share.getTitle().contains(title)) {
                result.add(share);
            }
        }
        return result;
    }

    @Override
    public List<Share> findAll() {
        return new ArrayList<>(store.values());
    }

    @Override
    public void deleteById(Long id) {
        store.remove(id);
    }
}


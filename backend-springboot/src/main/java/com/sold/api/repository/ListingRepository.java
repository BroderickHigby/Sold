package com.sold.api.repository;

import com.sold.api.entity.Listing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ListingRepository extends JpaRepository<Listing, UUID> {
    List<Listing> findByItemId(UUID itemId);
    List<Listing> findByPlatformAndStatus(String platform, String status);
}

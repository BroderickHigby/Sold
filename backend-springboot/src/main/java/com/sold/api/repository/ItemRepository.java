package com.sold.api.repository;

import com.sold.api.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ItemRepository extends JpaRepository<Item, UUID> {
    List<Item> findByUserId(UUID userId);
    List<Item> findByUserIdAndStatus(UUID userId, String status);
}

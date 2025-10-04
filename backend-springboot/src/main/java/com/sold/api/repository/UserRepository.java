package com.sold.api.repository;

import com.sold.api.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByEmail(String email);
    Optional<User> findByOauthProviderAndOauthId(String oauthProvider, String oauthId);
    boolean existsByEmail(String email);
}

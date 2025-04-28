package com.prikhozhaya.realestateagency.repository;

import com.prikhozhaya.realestateagency.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    Optional<Review> findById(Long id);
    void deleteById(Long id);
}
package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.LeadClient;
import com.prikhozhaya.realestateagency.model.Review;
import com.prikhozhaya.realestateagency.model.User;
import com.prikhozhaya.realestateagency.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReviewService implements IReviewService {
    private final ReviewRepository reviewRepository;

    @Override
    public List<Review> getReviews() {
        return reviewRepository.findAll();
    }

    @Override
    public Optional<Review> getReviewById(Long reviewId) {
        return Optional.of(reviewRepository.findById(reviewId).get());
    }

    @Override
    public Review addReview(String name, String review, Integer rating, User user) throws IOException, SQLException {
        Review reviewR = new Review();
        reviewR.setName(name);
        reviewR.setReview(review);
        reviewR.setRating(rating);
        reviewR.setUser(user);
        return reviewRepository.save(reviewR);
    }
}
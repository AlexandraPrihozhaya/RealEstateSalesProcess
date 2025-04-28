package com.prikhozhaya.realestateagency.controller;

import com.prikhozhaya.realestateagency.exception.ResourceNotFoundException;
import com.prikhozhaya.realestateagency.model.LeadClient;
import com.prikhozhaya.realestateagency.model.Review;
import com.prikhozhaya.realestateagency.response.ReviewResponse;
import com.prikhozhaya.realestateagency.service.ILeadClientService;
import com.prikhozhaya.realestateagency.service.IReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reviews")
@RequiredArgsConstructor
public class ReviewController {
    private final IReviewService reviewService;
    private final ILeadClientService leadClientService;

    @GetMapping("/all")
    public ResponseEntity<List<Review>> getReviews(){

        return new ResponseEntity<>(reviewService.getReviews(), HttpStatus.FOUND);
    }

    @PostMapping("/addReview/{userId}")
    @PreAuthorize("hasRole('ROLE_USER') and #email == principal.username")
    public ResponseEntity<?> addReview(@PathVariable("userId") String email, @RequestBody Review review)
            throws SQLException, IOException {
        String name = review.getName();
        String reviewText = review.getReview();
        Integer rating = review.getRating();

        // Получаем LeadClient по email
        Optional<LeadClient> leadClientOptional = leadClientService.getLeadClientByEmail(email);

        // Проверяем, есть ли LeadClient
        LeadClient leadClient = leadClientOptional.orElseThrow(() ->
                new RuntimeException("LeadClient not found for email: " + email)
        );
        Review review1 = reviewService.addReview(name, reviewText, rating, leadClient);

        ReviewResponse reviewResponse = new ReviewResponse(review1.getId(), review1.getName(),
                review1.getReview(), review1.getRating());

        return ResponseEntity.ok(reviewResponse);
    }

    @GetMapping("/review-id-{reviewId}")
    public ResponseEntity<Optional<ReviewResponse>> getReviewById(@PathVariable("reviewId") Long reviewId) {
        Optional<Review> theReview = reviewService.getReviewById(reviewId);
        return theReview.map(review -> {
            ReviewResponse reviewResponse = getReviewResponse(review);
            return ResponseEntity.ok(Optional.of(reviewResponse));
        }).orElseThrow(() -> new ResourceNotFoundException("Review not found"));
    }

    private ReviewResponse getReviewResponse(Review review) {

        return new ReviewResponse(review.getId(),
                review.getName(), review.getReview(),
                review.getRating());
    }
}

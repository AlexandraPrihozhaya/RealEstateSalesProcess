package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.LeadClient;
import com.prikhozhaya.realestateagency.model.Review;
import com.prikhozhaya.realestateagency.model.User;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

public interface IReviewService {

    List<Review> getReviews();

    Optional<Review> getReviewById(Long reviewId);

    Review addReview(String name, String review, Integer rating, User user) throws IOException, SQLException;
}
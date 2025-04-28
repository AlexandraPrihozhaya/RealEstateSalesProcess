package com.prikhozhaya.realestateagency.response;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ReviewResponse {
    private Long id;
    private String name;
    private String review;
    private Integer rating;

    public ReviewResponse(Long id, String name, String review, Integer rating) {
        this.id = id;
        this.name = name;
        this.review = review;
        this.rating = rating;
    }
}
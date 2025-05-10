package com.prikhozhaya.realestateagency.response;

import com.prikhozhaya.realestateagency.model.Favorites;
import com.prikhozhaya.realestateagency.model.Notification;
import com.prikhozhaya.realestateagency.model.Review;
import com.prikhozhaya.realestateagency.model.Role;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;
import java.util.List;

@Data
@NoArgsConstructor
public class UserResponse {
    private Long id;
    private String email;
    private Collection<Role> roles;
    private List<Favorites> favorites;
    private List<Review> reviews;
    private List<Notification> notifications;

    public UserResponse(Long id, String email, Collection<Role> roles, List<Favorites> favorites, List<Review> reviews, List<Notification> notifications) {
        this.id = id;
        this.email = email;
        this.roles = roles;
        this.favorites = favorites;
        this.reviews = reviews;
        this.notifications = notifications;
    }
}
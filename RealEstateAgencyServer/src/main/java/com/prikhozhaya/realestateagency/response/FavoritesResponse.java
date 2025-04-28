package com.prikhozhaya.realestateagency.response;

import com.prikhozhaya.realestateagency.model.RealEstateObject;
import com.prikhozhaya.realestateagency.model.User;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class FavoritesResponse {
    private Long id;
    private RealEstateObject realEstateObject;
    private User user;

    public FavoritesResponse(Long id, RealEstateObject realEstateObject, User user) {
        this.id = id;
        this.realEstateObject = realEstateObject;
        this.user = user;
    }
}
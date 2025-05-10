package com.prikhozhaya.realestateagency.controller;

import com.prikhozhaya.realestateagency.model.Favorites;
import com.prikhozhaya.realestateagency.model.RealEstateObject;
import com.prikhozhaya.realestateagency.model.User;
import com.prikhozhaya.realestateagency.response.FavoritesResponse;
import com.prikhozhaya.realestateagency.service.IFavoritesService;
import com.prikhozhaya.realestateagency.service.IRealEstateObjectService;
import com.prikhozhaya.realestateagency.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.SQLException;

@RestController
@RequestMapping("/favorites")
@RequiredArgsConstructor
public class FavoritesController {

    private final IFavoritesService favoritesService;
    private final IUserService userService;
    private final IRealEstateObjectService realEstateObjectService;

    @PostMapping("/addFavorites/{userId}")
    public ResponseEntity<?> addFavorites(@PathVariable("userId") String email, @RequestParam Long realEstateObjectId)
            throws SQLException, IOException {
        User theUser  = userService.getUser (email);
        if (theUser  == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        RealEstateObject theRealEstateObject = realEstateObjectService.getRealEstateObjectById(realEstateObjectId).get();

        Favorites favorites = favoritesService.addFavorites(theRealEstateObject, theUser );
        if (favorites == null) {
            return ResponseEntity.ok("Object removed from favorites");
        } else {
            FavoritesResponse favoritesResponse = new FavoritesResponse(favorites.getId(), favorites.getRealEstateObject(),
                    favorites.getUser());
            return ResponseEntity.ok(favoritesResponse);
        }
    }

    @PostMapping("/isInFavorites/{userId}")
    public Boolean isInFavorites(@PathVariable("userId") String email, @RequestParam Long realEstateObjectId)
            throws SQLException, IOException {
        Long userId  = userService.getUser(email).getId();
        return favoritesService.isInFavorites(realEstateObjectId, userId);
    }
}

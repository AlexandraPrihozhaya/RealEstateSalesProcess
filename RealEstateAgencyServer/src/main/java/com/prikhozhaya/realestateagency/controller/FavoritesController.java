package com.prikhozhaya.realestateagency.controller;

import com.prikhozhaya.realestateagency.model.Favorites;
import com.prikhozhaya.realestateagency.model.RealEstateObject;
import com.prikhozhaya.realestateagency.model.User;
import com.prikhozhaya.realestateagency.response.FavoritesResponse;
import com.prikhozhaya.realestateagency.service.IFavoritesService;
import com.prikhozhaya.realestateagency.service.IUserService;
import lombok.RequiredArgsConstructor;
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
    @PostMapping("/addFavorites/{userId}")
    public ResponseEntity<?> addFavorites(@PathVariable("userId") String email, @RequestBody RealEstateObject realEstateObject)
            throws SQLException, IOException {
        User theUser = userService.getUser(email);

        Favorites favorites1 = favoritesService.addFavorites(realEstateObject, theUser);
        FavoritesResponse favoritesResponse = new FavoritesResponse(favorites1.getId(), favorites1.getRealEstateObject(),
                favorites1.getUser());
        System.out.println(ResponseEntity.ok(favoritesResponse));
        return ResponseEntity.ok("Operation is successful");
    }
}

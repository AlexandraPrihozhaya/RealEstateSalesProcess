package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.Favorites;
import com.prikhozhaya.realestateagency.model.RealEstateObject;
import com.prikhozhaya.realestateagency.model.User;
import com.prikhozhaya.realestateagency.repository.FavoritesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.sql.SQLException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FavoritesService implements IFavoritesService {

    private final FavoritesRepository favoritesRepository;
    @Override
    public Favorites addFavorites(RealEstateObject realEstateObject, User user) throws IOException, SQLException {

        Long realEstateObjectId = realEstateObject.getId();
        Long userId = user.getId();
        Optional<Favorites> existingFavorite = favoritesRepository.findByRealEstateObjectAndUser(realEstateObjectId, userId);

        if (existingFavorite.isPresent()) {
            favoritesRepository.delete(existingFavorite.get());
            return null;
        } else {
            Favorites favorites = new Favorites();
            favorites.setRealEstateObject(realEstateObject);
            favorites.setUser (user);
            return favoritesRepository.save(favorites);
        }
    }

    @Override
    public Boolean isInFavorites(Long realEstateObjectId, Long userId) throws IOException, SQLException {

        Optional<Favorites> existingFavorite = favoritesRepository.findByRealEstateObjectAndUser(realEstateObjectId, userId);
        return existingFavorite.isPresent();
    }
}

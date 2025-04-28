package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.Favorites;
import com.prikhozhaya.realestateagency.model.RealEstateObject;
import com.prikhozhaya.realestateagency.model.User;

import java.io.IOException;
import java.sql.SQLException;

public interface IFavoritesService {

    Favorites addFavorites(RealEstateObject realEstateObject, User user) throws IOException, SQLException;
}

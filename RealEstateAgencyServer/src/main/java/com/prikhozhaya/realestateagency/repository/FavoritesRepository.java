package com.prikhozhaya.realestateagency.repository;

import com.prikhozhaya.realestateagency.model.Favorites;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface FavoritesRepository extends JpaRepository<Favorites, Long> {

    @Query("SELECT f FROM Favorites f WHERE f.realEstateObject.id = :realEstateObjectId AND f.user.id = :userId")
    Optional<Favorites> findByRealEstateObjectAndUser (Long realEstateObjectId, Long userId);
}

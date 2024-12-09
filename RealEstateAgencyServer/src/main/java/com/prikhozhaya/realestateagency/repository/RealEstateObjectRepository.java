package com.prikhozhaya.realestateagency.repository;

import com.prikhozhaya.realestateagency.model.RealEstateObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface RealEstateObjectRepository extends JpaRepository<RealEstateObject, Long> {
    Optional<RealEstateObject> findById(Long id);
    void deleteById(Long id);
}

package com.prikhozhaya.realestateagency.repository;

import com.prikhozhaya.realestateagency.model.District;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DistrictRepository extends JpaRepository<District, Long> {
    Optional<District> findById(Long id);
}


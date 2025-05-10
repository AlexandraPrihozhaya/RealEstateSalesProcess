package com.prikhozhaya.realestateagency.repository;

import com.prikhozhaya.realestateagency.model.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface RequestRepository extends JpaRepository<Request, Long> {

    @Query("SELECT r FROM Request r WHERE r.realEstateObject.id = :realEstateObjectId AND r.leadClient.id = :leadClientId")
    Optional<Request> findByRealEstateObjectAndLeadClient(Long realEstateObjectId, Long leadClientId);

    void deleteById(Long id);
}

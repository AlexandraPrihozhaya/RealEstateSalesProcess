package com.prikhozhaya.realestateagency.repository;

import com.prikhozhaya.realestateagency.model.Request;
import com.prikhozhaya.realestateagency.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;


public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    @Query("SELECT t FROM Transaction t WHERE t.realEstateObject.id = :realEstateObjectId AND t.leadClient.id = :leadClientId AND t.realtor.id = :realtorId")
    Optional<Transaction> findByRealEstateObjectAndClientAndRealtor(Long realEstateObjectId, Long leadClientId, Long realtorId);
}

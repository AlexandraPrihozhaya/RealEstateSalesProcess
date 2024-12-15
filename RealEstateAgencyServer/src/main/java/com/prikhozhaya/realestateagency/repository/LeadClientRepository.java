package com.prikhozhaya.realestateagency.repository;

import com.prikhozhaya.realestateagency.model.LeadClient;
import com.prikhozhaya.realestateagency.model.Realtor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface LeadClientRepository extends JpaRepository<LeadClient, Long> {
    @Query("SELECT l FROM LeadClient l JOIN l.user u WHERE u.email = :email")
    Optional<LeadClient> findByEmail(String email);
}
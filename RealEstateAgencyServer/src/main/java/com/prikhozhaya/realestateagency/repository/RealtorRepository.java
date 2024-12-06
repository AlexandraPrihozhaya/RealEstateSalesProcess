package com.prikhozhaya.realestateagency.repository;

import com.prikhozhaya.realestateagency.model.Realtor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface RealtorRepository extends JpaRepository<Realtor, Long> {
    Optional<Realtor> findById(Long id);

    void deleteById(Long id);

    @Query("SELECT r FROM Realtor r JOIN r.user u WHERE u.email = :email")
    Optional<Realtor> findByEmail(String email);
}
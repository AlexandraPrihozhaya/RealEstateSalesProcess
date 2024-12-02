package com.prikhozhaya.realestateagency.repository;

import com.prikhozhaya.realestateagency.model.Realtor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RealtorRepository extends JpaRepository<Realtor, Long> {
    Optional<Realtor> findById(Long id);

    void deleteById(Long id);
}
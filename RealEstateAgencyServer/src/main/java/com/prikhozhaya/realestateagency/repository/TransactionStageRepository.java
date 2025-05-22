package com.prikhozhaya.realestateagency.repository;

import com.prikhozhaya.realestateagency.model.TransactionStage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TransactionStageRepository extends JpaRepository<TransactionStage, Long> {
    Optional<TransactionStage> findById(Long id);
}
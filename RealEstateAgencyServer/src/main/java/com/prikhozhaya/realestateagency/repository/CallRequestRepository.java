package com.prikhozhaya.realestateagency.repository;

import com.prikhozhaya.realestateagency.model.CallRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CallRequestRepository extends JpaRepository<CallRequest, Long> {
    Optional<CallRequest> findById(Long id);
    void deleteById(Long id);
}

package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.Realtor;

import java.util.List;
import java.util.Optional;

public interface IRealtorService {
    List<Realtor> getRealtors();
    Optional<Realtor> getRealtorById(Long realtorId);
    void deleteRealtor(Long id);
}
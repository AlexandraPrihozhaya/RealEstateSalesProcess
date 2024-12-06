package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.Realtor;

import java.util.List;
import java.util.Optional;

public interface IRealtorService {
    List<Realtor> getRealtors();
    Optional<Realtor> getRealtorById(Long realtorId);
    void deleteRealtor(Long id);

    Realtor updateRealtor(Long realtorId, String secondName, String firstName,
                          String patronymic, String phoneNumber);

    Optional<Realtor> getRealtorByEmail(String userId);

    Realtor updateRealtorByEmail(String email, String secondName, String firstName,
                          String patronymic, String phoneNumber);
}
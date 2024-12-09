package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.District;
import com.prikhozhaya.realestateagency.repository.DistrictRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DistrictService implements IDistrictService {

    private final DistrictRepository districtRepository;

    @Override
    public List<District> getDistricts() {
        return districtRepository.findAll();
    }

    @Override
    public Optional<District> getDistrictById(Long districtId) {
        return Optional.of(districtRepository.findById(districtId).get());
    }
}

package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.MicroDistrict;
import com.prikhozhaya.realestateagency.repository.MicroDistrictRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MicroDistrictService implements IMicroDistrictService{

    private final MicroDistrictRepository microDistrictRepository;

    @Override
    public List<MicroDistrict> getMicroDistricts() {
        return microDistrictRepository.findAll();
    }

    @Override
    public List<MicroDistrict> getMicroDistrictsByDistrictId(Long districtId) {
        return microDistrictRepository.findByDistrictId(districtId);
    }

}

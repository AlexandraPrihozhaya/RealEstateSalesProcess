package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.District;


import java.util.List;
import java.util.Optional;

public interface IDistrictService {

    List<District> getDistricts();

    Optional<District> getDistrictById(Long districtId);
}

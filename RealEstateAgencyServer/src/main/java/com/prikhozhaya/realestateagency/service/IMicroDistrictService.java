package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.MicroDistrict;

import java.util.List;

public interface IMicroDistrictService {

    List<MicroDistrict> getMicroDistricts();

    List<MicroDistrict> getMicroDistrictsByDistrictId(Long districtId);

}

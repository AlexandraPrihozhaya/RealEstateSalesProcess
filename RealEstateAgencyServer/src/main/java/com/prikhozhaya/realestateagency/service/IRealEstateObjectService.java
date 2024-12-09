package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.RealEstateObject;

import java.util.List;
import java.util.Optional;

public interface IRealEstateObjectService {

    List<RealEstateObject> getRealEstateObjects();

    Optional<RealEstateObject> getRealEstateObjectById(Long realEstateObjectId);
}

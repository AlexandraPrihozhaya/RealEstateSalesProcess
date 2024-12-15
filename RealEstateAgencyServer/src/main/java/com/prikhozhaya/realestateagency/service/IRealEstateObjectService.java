package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.*;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

public interface IRealEstateObjectService {

    List<RealEstateObject> getRealEstateObjects();

    Optional<RealEstateObject> getRealEstateObjectById(Long realEstateObjectId);

    RealEstateObject addRealEstateObject(String name, String type, BigDecimal price, String address, BigDecimal square,
                                         Integer numberOfRooms, Integer floor, Integer yearOfConstruction, String description,
                                         MicroDistrict microDistrict, List<Picture> pictures, LeadClient leadClient) throws IOException, SQLException;
}
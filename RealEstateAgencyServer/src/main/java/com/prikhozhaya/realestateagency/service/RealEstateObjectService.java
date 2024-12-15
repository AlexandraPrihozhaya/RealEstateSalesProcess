package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.LeadClient;
import com.prikhozhaya.realestateagency.model.MicroDistrict;
import com.prikhozhaya.realestateagency.model.Picture;
import com.prikhozhaya.realestateagency.model.RealEstateObject;
import com.prikhozhaya.realestateagency.repository.RealEstateObjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RealEstateObjectService implements IRealEstateObjectService {
    private final RealEstateObjectRepository realEstateObjectRepository;

    @Override
    public List<RealEstateObject> getRealEstateObjects() {
        return realEstateObjectRepository.findAll();
    }

    @Override
    public Optional<RealEstateObject> getRealEstateObjectById(Long realEstateObjectId) {
        return Optional.of(realEstateObjectRepository.findById(realEstateObjectId).get());
    }

    @Override
    public RealEstateObject addRealEstateObject(String name, String type, BigDecimal price, String address,
                                                BigDecimal square, Integer numberOfRooms, Integer floor,
                                                Integer yearOfConstruction, String description, MicroDistrict microDistrict,
                                                List<Picture> pictures, LeadClient leadClient) throws IOException, SQLException {
        RealEstateObject realEstateObject = new RealEstateObject();
        realEstateObject.setName(name);
        realEstateObject.setType(type);
        realEstateObject.setPrice(price);
        realEstateObject.setAddress(address);
        realEstateObject.setSquare(square);
        realEstateObject.setNumberOfRooms(numberOfRooms);
        realEstateObject.setFloor(floor);
        realEstateObject.setYearOfConstruction(yearOfConstruction);
        realEstateObject.setDescription(description);
        realEstateObject.setMicroDistrict(microDistrict);
        realEstateObject.setPictures(pictures);
        realEstateObject.setLeadClient(leadClient);
        return realEstateObjectRepository.save(realEstateObject);
    }
}
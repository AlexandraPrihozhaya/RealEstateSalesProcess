package com.prikhozhaya.realestateagency.controller;

import com.prikhozhaya.realestateagency.model.MicroDistrict;
import com.prikhozhaya.realestateagency.model.RealEstateObject;
import com.prikhozhaya.realestateagency.response.MicroDistrictResponse;
import com.prikhozhaya.realestateagency.response.RealEstateObjectResponse;
import com.prikhozhaya.realestateagency.service.IMicroDistrictService;
import com.prikhozhaya.realestateagency.service.IRealEstateObjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/objects")
@RequiredArgsConstructor
public class RealEstateObjectController {
    private final IRealEstateObjectService realEstateObjectService;

    @GetMapping("/all")
    public ResponseEntity<List<RealEstateObject>> getRealEstateObjects(){

        return new ResponseEntity<>(realEstateObjectService.getRealEstateObjects(), HttpStatus.FOUND);
    }


    private RealEstateObjectResponse getRealEstateObjectResponse(RealEstateObject realEstateObject) {

        return new RealEstateObjectResponse(realEstateObject.getId(),
                realEstateObject.getName(), realEstateObject.getType(),
                realEstateObject.getPrice(), realEstateObject.getAddress(),
                realEstateObject.getSquare(), realEstateObject.getNumberOfRooms(),
                realEstateObject.getFloor(), realEstateObject.getYearOfConstruction(),
                realEstateObject.getDescription(),
                realEstateObject.getMicroDistrict());
    }
}


package com.prikhozhaya.realestateagency.controller;

import com.prikhozhaya.realestateagency.exception.ResourceNotFoundException;
import com.prikhozhaya.realestateagency.model.MicroDistrict;
import com.prikhozhaya.realestateagency.model.Picture;
import com.prikhozhaya.realestateagency.model.RealEstateObject;
import com.prikhozhaya.realestateagency.model.Realtor;
import com.prikhozhaya.realestateagency.response.MicroDistrictResponse;
import com.prikhozhaya.realestateagency.response.RealEstateObjectResponse;
import com.prikhozhaya.realestateagency.response.RealtorResponse;
import com.prikhozhaya.realestateagency.service.IMicroDistrictService;
import com.prikhozhaya.realestateagency.service.IRealEstateObjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/objects")
@RequiredArgsConstructor
public class RealEstateObjectController {
    private final IRealEstateObjectService realEstateObjectService;

    @GetMapping("/all")
    public ResponseEntity<List<RealEstateObject>> getRealEstateObjects(){

        return new ResponseEntity<>(realEstateObjectService.getRealEstateObjects(), HttpStatus.FOUND);
    }


    @GetMapping("/object-id-{objectId}")
    public ResponseEntity<Optional<RealEstateObjectResponse>> getRealEstateObjectById(@PathVariable("objectId") Long objectId) {
        Optional<RealEstateObject> theRealEstateObject = realEstateObjectService.getRealEstateObjectById(objectId);
        return theRealEstateObject.map(realEstateObject -> {
            RealEstateObjectResponse realEstateObjectResponse = getRealEstateObjectResponse(realEstateObject);
            return ResponseEntity.ok(Optional.of(realEstateObjectResponse));
        }).orElseThrow(() -> new ResourceNotFoundException("RealEstateObject not found"));
    }


    private RealEstateObjectResponse getRealEstateObjectResponse(RealEstateObject realEstateObject) {

        List<String> pictures = realEstateObject.getPictures().stream()
                .map(Picture::getPhotoBase64)
                .collect(Collectors.toList());

        return new RealEstateObjectResponse(realEstateObject.getId(),
                realEstateObject.getName(), realEstateObject.getType(),
                realEstateObject.getPrice(), realEstateObject.getAddress(),
                realEstateObject.getSquare(), realEstateObject.getNumberOfRooms(),
                realEstateObject.getFloor(), realEstateObject.getYearOfConstruction(),
                realEstateObject.getDescription(),
                realEstateObject.getMicroDistrict(),
                pictures);
    }
}


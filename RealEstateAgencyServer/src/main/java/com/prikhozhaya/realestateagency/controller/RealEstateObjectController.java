package com.prikhozhaya.realestateagency.controller;

import com.prikhozhaya.realestateagency.exception.ResourceNotFoundException;
import com.prikhozhaya.realestateagency.model.*;
import com.prikhozhaya.realestateagency.response.LeadClientResponse;
import com.prikhozhaya.realestateagency.response.MicroDistrictResponse;
import com.prikhozhaya.realestateagency.response.RealEstateObjectResponse;
import com.prikhozhaya.realestateagency.response.RealtorResponse;
import com.prikhozhaya.realestateagency.service.ILeadClientService;
import com.prikhozhaya.realestateagency.service.IMicroDistrictService;
import com.prikhozhaya.realestateagency.service.IRealEstateObjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/objects")
@RequiredArgsConstructor
public class RealEstateObjectController {
    private final IRealEstateObjectService realEstateObjectService;
    private final ILeadClientService leadClientService;

    @GetMapping("/all")
    public ResponseEntity<List<RealEstateObject>> getRealEstateObjects(){

        return new ResponseEntity<>(realEstateObjectService.getRealEstateObjects(), HttpStatus.FOUND);
    }

    @PostMapping("/addRealEstateObject/{userId}")
    @PreAuthorize("hasRole('ROLE_USER') and #email == principal.username")
    public ResponseEntity<?> addRealEstateObject(@PathVariable("userId") String email, @RequestBody RealEstateObject realEstateObject)
            throws SQLException, IOException {
        String name = realEstateObject.getName();
        String type = realEstateObject.getType();
        BigDecimal price = realEstateObject.getPrice();
        String address = realEstateObject.getAddress();
        BigDecimal square = realEstateObject.getSquare();
        Integer numberOfRooms = realEstateObject.getNumberOfRooms();
        Integer floor = realEstateObject.getFloor();
        Integer yearOfConstruction = realEstateObject.getYearOfConstruction();
        String description = realEstateObject.getDescription();
        MicroDistrict theMicroDistrict = realEstateObject.getMicroDistrict();
        List<Picture> pictures = realEstateObject.getPictures();

        // Инициализация списка, если он равен null
        if (pictures == null) {
            pictures = new ArrayList<>();
        }

        // Получаем LeadClient по email
        Optional<LeadClient> leadClientOptional = leadClientService.getLeadClientByEmail(email);

        // Проверяем, есть ли LeadClient
        LeadClient leadClient = leadClientOptional.orElseThrow(() ->
                new RuntimeException("LeadClient not found for email: " + email)
        );
        RealEstateObject realEstateObject1 = realEstateObjectService.addRealEstateObject(name, type, price, address, square, numberOfRooms,
                floor, yearOfConstruction, description, theMicroDistrict, pictures, leadClient);

        List<String> pictureBase64List = (realEstateObject1.getPictures() != null)
                ? realEstateObject1.getPictures().stream().map(Picture::getPhotoBase64).collect(Collectors.toList())
                : Collections.emptyList();

        RealEstateObjectResponse realEstateObjectResponse = new RealEstateObjectResponse(realEstateObject1.getId(), realEstateObject1.getName(),
                realEstateObject1.getType(), realEstateObject1.getPrice(), realEstateObject1.getAddress(), realEstateObject1.getSquare(),
                realEstateObject1.getNumberOfRooms(), realEstateObject1.getFloor(), realEstateObject1.getYearOfConstruction(),
                realEstateObject1.getDescription(), realEstateObject1.getMicroDistrict(), pictureBase64List);

        return ResponseEntity.ok(realEstateObjectResponse);
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
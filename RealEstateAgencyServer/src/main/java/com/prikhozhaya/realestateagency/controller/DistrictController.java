package com.prikhozhaya.realestateagency.controller;

import com.prikhozhaya.realestateagency.exception.ResourceNotFoundException;
import com.prikhozhaya.realestateagency.model.District;
import com.prikhozhaya.realestateagency.response.DistrictResponse;
import com.prikhozhaya.realestateagency.service.IDistrictService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/districts")
@RequiredArgsConstructor
public class DistrictController {
    private final IDistrictService districtService;

    @GetMapping("/all")
    public ResponseEntity<List<District>> getDistricts(){

        return new ResponseEntity<>(districtService.getDistricts(), HttpStatus.FOUND);
    }

    @GetMapping("/district-id-{districtId}")
    public ResponseEntity<Optional<DistrictResponse>> getDistrictById(@PathVariable("districtId") Long districtId) {
        Optional<District> theDistrict = districtService.getDistrictById(districtId);
        return theDistrict.map(district -> {
            DistrictResponse districtResponse = getDistrictResponse(district);
            return ResponseEntity.ok(Optional.of(districtResponse));
        }).orElseThrow(() -> new ResourceNotFoundException("District not found"));
    }

    private DistrictResponse getDistrictResponse(District district) {

        return new DistrictResponse(district.getId(),
                district.getName());
    }
}

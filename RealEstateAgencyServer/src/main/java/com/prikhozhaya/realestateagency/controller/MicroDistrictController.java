package com.prikhozhaya.realestateagency.controller;

import com.prikhozhaya.realestateagency.model.MicroDistrict;
import com.prikhozhaya.realestateagency.response.MicroDistrictResponse;
import com.prikhozhaya.realestateagency.service.IMicroDistrictService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/micro_districts")
@RequiredArgsConstructor
public class MicroDistrictController {
    private final IMicroDistrictService microDistrictService;

    @GetMapping("/all")
    public ResponseEntity<List<MicroDistrict>> getMicroDistricts(){

        return new ResponseEntity<>(microDistrictService.getMicroDistricts(), HttpStatus.FOUND);
    }

    private MicroDistrictResponse getMicroDistrictResponse(MicroDistrict microDistrict) {

        return new MicroDistrictResponse(microDistrict.getId(),
                microDistrict.getName(), microDistrict.getDistrict());
    }

}

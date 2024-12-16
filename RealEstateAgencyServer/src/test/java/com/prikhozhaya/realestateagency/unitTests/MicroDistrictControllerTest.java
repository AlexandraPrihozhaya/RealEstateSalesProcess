package com.prikhozhaya.realestateagency.unitTests;

import com.prikhozhaya.realestateagency.controller.DistrictController;
import com.prikhozhaya.realestateagency.controller.MicroDistrictController;
import com.prikhozhaya.realestateagency.model.District;
import com.prikhozhaya.realestateagency.model.MicroDistrict;
import com.prikhozhaya.realestateagency.service.IDistrictService;
import com.prikhozhaya.realestateagency.service.IMicroDistrictService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
public class MicroDistrictControllerTest {
    @InjectMocks
    private MicroDistrictController microDistrictController;

    @Mock
    private IMicroDistrictService microDistrictService;

    @Test
    void testGetMicroDistricts() {
        List<MicroDistrict> microDistricts = new ArrayList<>();

        District district = new District();
        district.setId(1L);
        district.setName("districtTest");

        MicroDistrict microDistrict = new MicroDistrict();
        microDistrict.setId(2L);
        microDistrict.setName("microDistrictTest");
        microDistrict.setDistrict(district);

        microDistricts.add(microDistrict);

        when(microDistrictService.getMicroDistricts()).thenReturn(microDistricts);

        ResponseEntity<List<MicroDistrict>> response = microDistrictController.getMicroDistricts();

        assertEquals(HttpStatus.FOUND, response.getStatusCode());
        assertEquals(microDistricts, response.getBody());
    }
}
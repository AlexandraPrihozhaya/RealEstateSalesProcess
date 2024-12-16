package com.prikhozhaya.realestateagency.unitTests;

import com.prikhozhaya.realestateagency.controller.DistrictController;
import com.prikhozhaya.realestateagency.exception.ResourceNotFoundException;
import com.prikhozhaya.realestateagency.model.District;
import com.prikhozhaya.realestateagency.response.DistrictResponse;
import com.prikhozhaya.realestateagency.service.IDistrictService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class DistrictControllerTest {

    @InjectMocks
    private DistrictController districtController;

    @Mock
    private IDistrictService districtService;

    @Test
    void testGetDistricts() {
        List<District> districts = new ArrayList<>();
        District district1 = new District();
        district1.setId(1L);
        district1.setName("test1");

        District district2 = new District();
        district2.setId(2L);
        district2.setName("test2");

        districts.add(district1);
        districts.add(district2);

        Mockito.when(districtService.getDistricts()).thenReturn(districts);

        ResponseEntity<List<District>> response = districtController.getDistricts();

        assertEquals(HttpStatus.FOUND, response.getStatusCode());
        assertEquals(districts, response.getBody());
    }

    @Test
    void testGetDistrictById() {
        Long districtId = 1L;
        District district = new District();
        district.setId(districtId);
        district.setName("district1");
        Mockito.when(districtService.getDistrictById(districtId)).thenReturn(Optional.of(district));

        ResponseEntity<Optional<DistrictResponse>> response = districtController.getDistrictById(districtId);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().isPresent());
        assertEquals("district1", response.getBody().get().getName());
    }

    @Test
    void testGetDistrictById_NotFound() {
        Long districtId = 99L;
        Mockito.when(districtService.getDistrictById(districtId)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () -> {
            districtController.getDistrictById(districtId);
        });
    }
}
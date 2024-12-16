package com.prikhozhaya.realestateagency.unitTests;

import com.prikhozhaya.realestateagency.controller.RealEstateObjectController;
import com.prikhozhaya.realestateagency.exception.ResourceNotFoundException;
import com.prikhozhaya.realestateagency.model.District;
import com.prikhozhaya.realestateagency.model.LeadClient;
import com.prikhozhaya.realestateagency.model.RealEstateObject;
import com.prikhozhaya.realestateagency.model.User;
import com.prikhozhaya.realestateagency.response.RealEstateObjectResponse;
import com.prikhozhaya.realestateagency.service.ILeadClientService;
import com.prikhozhaya.realestateagency.service.IRealEstateObjectService;
import com.prikhozhaya.realestateagency.service.IUserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest
public class RealEstateObjectControllerTest {

    @InjectMocks
    private RealEstateObjectController realEstateObjectController;

    @Mock
    private IRealEstateObjectService realEstateObjectService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetRealEstateObjects() {
        List<RealEstateObject> realEstateObjects = new ArrayList<>();
        RealEstateObject object1 = new RealEstateObject();
        RealEstateObject object2 = new RealEstateObject();

        object1.setId(1L);
        object1.setName("name1");

        object2.setId(2L);
        object2.setName("name2");

        when(realEstateObjectService.getRealEstateObjects()).thenReturn(realEstateObjects);

        ResponseEntity<List<RealEstateObject>> response = realEstateObjectController.getRealEstateObjects();

        assertEquals(HttpStatus.FOUND, response.getStatusCode());
        assertEquals(realEstateObjects, response.getBody());
    }

    @Test
    public void testGetRealEstateObjectById_NotFound() {
        Long objectId = 1L;

        when(realEstateObjectService.getRealEstateObjectById(objectId)).thenReturn(Optional.empty());

        Exception exception = assertThrows(ResourceNotFoundException.class, () -> {
            realEstateObjectController.getRealEstateObjectById(objectId);
        });

        assertEquals("RealEstateObject not found", exception.getMessage());
    }
}
package com.prikhozhaya.realestateagency.response;

import com.prikhozhaya.realestateagency.model.RealEstateObject;
import com.prikhozhaya.realestateagency.model.User;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class LeadClientResponse {

    private Long id;
    private String secondName;
    private String firstName;
    private String patronymic;

    private String phoneNumber;
    private User user;

    private List<RealEstateObject> realEstateObjects;

    public LeadClientResponse(Long id, String secondName, String firstName, String patronymic, String phoneNumber,
                              User user, List<RealEstateObject> realEstateObjects) {
        this.id = id;
        this.secondName = secondName;
        this.firstName = firstName;
        this.patronymic = patronymic;
        this.phoneNumber = phoneNumber;
        this.user = user;
        this.realEstateObjects = realEstateObjects;
    }
}
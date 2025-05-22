package com.prikhozhaya.realestateagency.response;

import com.prikhozhaya.realestateagency.model.*;
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
    private List<Request> requests;

    private List<Transaction> transactions;

    public LeadClientResponse(Long id, String secondName, String firstName, String patronymic, String phoneNumber,
                              User user, List<RealEstateObject> realEstateObjects, List<Request> requests, List<Transaction> transactions) {
        this.id = id;
        this.secondName = secondName;
        this.firstName = firstName;
        this.patronymic = patronymic;
        this.phoneNumber = phoneNumber;
        this.user = user;
        this.realEstateObjects = realEstateObjects;
        this.requests = requests;
        this.transactions = transactions;
    }
}
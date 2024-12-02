package com.prikhozhaya.realestateagency.response;

import com.prikhozhaya.realestateagency.model.User;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RealtorResponse {
    private Long id;
    private String secondName;
    private String firstName;
    private String patronymic;

    private String phoneNumber;
    private User user;

    public RealtorResponse(Long id, String secondName, String firstName, String patronymic, String phoneNumber, User user) {
        this.id = id;
        this.secondName = secondName;
        this.firstName = firstName;
        this.patronymic = patronymic;
        this.phoneNumber = phoneNumber;
        this.user = user;
    }
}
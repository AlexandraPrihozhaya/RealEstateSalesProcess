package com.prikhozhaya.realestateagency.response;

import com.prikhozhaya.realestateagency.model.LeadClient;
import com.prikhozhaya.realestateagency.model.RealEstateObject;
import com.prikhozhaya.realestateagency.model.User;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class NotificationResponse {
    private Long id;
    private String name;
    private String notification;

    public NotificationResponse(Long id, String name, String notification) {
        this.id = id;
        this.name = name;
        this.notification = notification;
    }
}

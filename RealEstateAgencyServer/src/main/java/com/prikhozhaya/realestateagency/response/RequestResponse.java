package com.prikhozhaya.realestateagency.response;

import com.prikhozhaya.realestateagency.model.LeadClient;
import com.prikhozhaya.realestateagency.model.RealEstateObject;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RequestResponse {
    private Long id;
    private RealEstateObject realEstateObject;
    private LeadClient leadClient;

    public RequestResponse(Long id, RealEstateObject realEstateObject, LeadClient leadClient) {
        this.id = id;
        this.realEstateObject = realEstateObject;
        this.leadClient = leadClient;
    }
}
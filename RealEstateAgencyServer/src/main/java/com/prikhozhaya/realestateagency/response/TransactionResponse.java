package com.prikhozhaya.realestateagency.response;

import com.prikhozhaya.realestateagency.model.LeadClient;
import com.prikhozhaya.realestateagency.model.RealEstateObject;
import com.prikhozhaya.realestateagency.model.Realtor;
import com.prikhozhaya.realestateagency.model.TransactionStage;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class TransactionResponse {
    private Long id;
    private RealEstateObject realEstateObject;
    private LeadClient leadClient;
    private Realtor realtor;
    private TransactionStage transactionStage;

    public TransactionResponse(Long id, RealEstateObject realEstateObject, LeadClient leadClient, Realtor realtor, TransactionStage transactionStage) {
        this.id = id;
        this.realEstateObject = realEstateObject;
        this.leadClient = leadClient;
        this.realtor = realtor;
        this.transactionStage = transactionStage;
    }
}
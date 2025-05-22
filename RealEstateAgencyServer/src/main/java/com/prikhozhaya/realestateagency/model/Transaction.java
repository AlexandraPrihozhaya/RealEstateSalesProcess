package com.prikhozhaya.realestateagency.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate stageDate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "real_estate_object_id")
    private RealEstateObject realEstateObject;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "lead_client_id")
    private LeadClient leadClient;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "realtor_id")
    private Realtor realtor;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "transaction_stage_id")
    private TransactionStage transactionStage;
}
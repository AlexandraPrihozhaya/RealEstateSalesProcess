package com.prikhozhaya.realestateagency.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
//@NoArgsConstructor
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime requestDate;

    private Boolean status;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "real_estate_object_id")
    private RealEstateObject realEstateObject;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "lead_client_id")
    private LeadClient leadClient;

    public Request() {
        this.requestDate = LocalDateTime.now();
    }
}
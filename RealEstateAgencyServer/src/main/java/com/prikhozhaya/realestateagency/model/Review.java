package com.prikhozhaya.realestateagency.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @Lob
    private String review;
    private Integer rating;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "lead_client_id")
    private LeadClient leadClient;
}

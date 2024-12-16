package com.prikhozhaya.realestateagency.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class RealEstateObject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String type;
    private BigDecimal price;
    private String address;
    private BigDecimal square;
    private Integer numberOfRooms;
    private Integer floor;
    private Integer yearOfConstruction;
    private String description;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "micro_district_id")
    private MicroDistrict microDistrict;

    @JsonManagedReference
    @OneToMany(mappedBy="realEstateObject", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Picture> pictures;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "lead_client_id")
    private LeadClient leadClient;
}
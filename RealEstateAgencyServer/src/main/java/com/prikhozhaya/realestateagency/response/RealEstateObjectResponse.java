package com.prikhozhaya.realestateagency.response;

import com.prikhozhaya.realestateagency.model.District;
import com.prikhozhaya.realestateagency.model.MicroDistrict;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
public class RealEstateObjectResponse {
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

    private MicroDistrict microDistrict;

    public RealEstateObjectResponse(Long id, String name, String type, BigDecimal price, String address, BigDecimal square,
                                    Integer numberOfRooms, Integer floor, Integer yearOfConstruction, String description,
                                    MicroDistrict microDistrict) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.address = address;
        this.square = square;
        this.numberOfRooms = numberOfRooms;
        this.floor = floor;
        this.yearOfConstruction = yearOfConstruction;
        this.description = description;
        this.microDistrict = microDistrict;
    }
}

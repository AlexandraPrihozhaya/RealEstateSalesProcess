package com.prikhozhaya.realestateagency.response;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class DistrictResponse {
    private Long id;

    private String name;

    public DistrictResponse(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}

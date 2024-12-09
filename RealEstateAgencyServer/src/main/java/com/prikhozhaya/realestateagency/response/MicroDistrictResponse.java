package com.prikhozhaya.realestateagency.response;

import com.prikhozhaya.realestateagency.model.District;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MicroDistrictResponse {
    private Long id;

    private String name;

    private District district;

    public MicroDistrictResponse(Long id, String name, District district) {
        this.id = id;
        this.name = name;
        this.district = district;
    }
}

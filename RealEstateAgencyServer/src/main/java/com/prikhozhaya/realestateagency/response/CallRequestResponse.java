package com.prikhozhaya.realestateagency.response;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class CallRequestResponse {
    private Long id;

    private String name;

    private String phoneNumber;
    private LocalDateTime dateTime;
    private String status;

    public CallRequestResponse(Long id, String name, String phoneNumber, LocalDateTime dateTime, String status) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.dateTime = dateTime;
        this.status = status;
    }
}

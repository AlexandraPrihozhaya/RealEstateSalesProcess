package com.prikhozhaya.realestateagency.response;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class TransactionStageResponse {
    private Long id;
    private String stageName;

    public TransactionStageResponse(Long id, String stageName) {
        this.id = id;
        this.stageName = stageName;
    }
}
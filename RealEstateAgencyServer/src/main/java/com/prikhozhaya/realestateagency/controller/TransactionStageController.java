package com.prikhozhaya.realestateagency.controller;

import com.prikhozhaya.realestateagency.model.TransactionStage;
import com.prikhozhaya.realestateagency.service.ITransactionStageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/transactionStages")
@RequiredArgsConstructor
public class TransactionStageController {
    private final ITransactionStageService transactionStageService;

    @GetMapping("/all")
    public ResponseEntity<List<TransactionStage>> getTransactionStages(){
        return new ResponseEntity<>(transactionStageService.getTransactionStages(), HttpStatus.FOUND);
    }
}
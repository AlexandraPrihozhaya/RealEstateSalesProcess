package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.TransactionStage;

import java.util.List;
import java.util.Optional;

public interface ITransactionStageService {

    List<TransactionStage> getTransactionStages();
    Optional<TransactionStage> getTransactionStageById(Long transactionStageId);
}
package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.TransactionStage;
import com.prikhozhaya.realestateagency.repository.TransactionStageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TransactionStageService implements ITransactionStageService {

    private final TransactionStageRepository transactionStageRepository;

    @Override
    public List<TransactionStage> getTransactionStages() {
        return transactionStageRepository.findAll();
    }

    public Optional<TransactionStage> getTransactionStageById(Long transactionStageId) {
        return transactionStageRepository.findById(transactionStageId);
    }
}
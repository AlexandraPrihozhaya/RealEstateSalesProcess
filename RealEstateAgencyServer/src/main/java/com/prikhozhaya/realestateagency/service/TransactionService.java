package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.*;
import com.prikhozhaya.realestateagency.repository.TransactionRepository;
import com.prikhozhaya.realestateagency.repository.TransactionStageRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TransactionService implements ITransactionService {
    private final TransactionRepository transactionRepository;
    private final TransactionStageRepository transactionStageRepository;
    @Override
    public Transaction addTransaction(RealEstateObject realEstateObject, LeadClient leadClient, Realtor realtor) throws IOException, SQLException {
        Long realEstateObjectId = realEstateObject.getId();
        Long leadClientId = leadClient.getId();
        Long realtorId = realtor.getId();
        Optional<Transaction> existingTransaction = transactionRepository.findByRealEstateObjectAndClientAndRealtor(realEstateObjectId, leadClientId, realtorId);

        if (existingTransaction.isPresent()) {
            return null;
        } else {
            Transaction transaction = new Transaction();
            transaction.setRealEstateObject(realEstateObject);
            transaction.setLeadClient(leadClient);
            transaction.setRealtor(realtor);
            transaction.setStageDate(LocalDate.now());
            transaction.setTransactionStage(transactionStageRepository.findById(1L).get());
            return transactionRepository.save(transaction);
        }
    }

    @Override
    public List<Transaction> getTransactions() {
        return transactionRepository.findAll();
    }

    @Override
    public Transaction updateTransactionStage(Long transactionId, Long transactionStageId) {
        Transaction transaction = transactionRepository.findById(transactionId).orElseThrow(() -> new EntityNotFoundException("Transaction not found"));
        TransactionStage transactionStage = transactionStageRepository.findById(transactionStageId + 1L).orElseThrow(() -> new EntityNotFoundException("Transaction stage not found"));

        transaction.setTransactionStage(transactionStage);
        transaction.setStageDate(LocalDate.now());
        return transactionRepository.save(transaction);
    }
}
package com.prikhozhaya.realestateagency.controller;

import com.prikhozhaya.realestateagency.model.*;
import com.prikhozhaya.realestateagency.response.RequestResponse;
import com.prikhozhaya.realestateagency.response.TransactionResponse;
import com.prikhozhaya.realestateagency.service.*;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/transactions")
@RequiredArgsConstructor
public class TransactionController {

    private final ILeadClientService leadClientService;
    private final IRealEstateObjectService realEstateObjectService;
    private final IRealtorService realtorService;

    private final ITransactionService transactionService;
    private final ITransactionStageService transactionStageService;

    @PostMapping("/addTransaction/{userId}")
    public ResponseEntity<?> addTransaction(@PathVariable("userId") String email,
                                            @RequestParam Long realEstateObjectId, @RequestParam Long leadClientId)
            throws SQLException, IOException {
        Realtor theRealtor  = realtorService.getRealtorByEmail(email).get();
        if (theRealtor  == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Realtor not found");
        }

        RealEstateObject theRealEstateObject = realEstateObjectService.getRealEstateObjectById(realEstateObjectId).get();

        LeadClient theClient = leadClientService.getLeadClientById(leadClientId).get();

        Transaction transaction = transactionService.addTransaction(theRealEstateObject, theClient, theRealtor);
        if (transaction == null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Такая сделка уже есть");
        } else {
            TransactionResponse transactionResponse = new TransactionResponse(transaction.getId(), transaction.getRealEstateObject(),
                    transaction.getLeadClient(), transaction.getRealtor(), transaction.getTransactionStage());
            return ResponseEntity.ok(transactionResponse);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Transaction>> getTransactions(){
        return new ResponseEntity<>(transactionService.getTransactions(), HttpStatus.FOUND);
    }

    @PutMapping("/update/{transactionId}")
    public ResponseEntity<String> updateTransaction(@PathVariable("transactionId") Long transactionId, @RequestParam Long transactionStageId) {
        try {
            Optional<TransactionStage> optionalTransactionStage1 = transactionStageService.getTransactionStageById(transactionStageId + 1L);

            if (optionalTransactionStage1.isPresent())
                transactionService.updateTransactionStage(transactionId, transactionStageId);
            else return ResponseEntity.ok("Transaction finished");

            Optional<TransactionStage> optionalTransactionStage2 = transactionStageService.getTransactionStageById(transactionStageId + 2L);

            if (optionalTransactionStage2.isPresent()) {
                return ResponseEntity.ok("Transaction updated successfully");
            } else {
                return ResponseEntity.ok("Transaction finished");
            }
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating transaction: " + e.getMessage());
        }
    }
}

package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.*;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

public interface ITransactionService {

    Transaction addTransaction(RealEstateObject realEstateObject, LeadClient leadClient, Realtor realtor) throws IOException, SQLException;

    List<Transaction> getTransactions();

    Transaction updateTransactionStage(Long transactionId, Long transactionStageId);
}

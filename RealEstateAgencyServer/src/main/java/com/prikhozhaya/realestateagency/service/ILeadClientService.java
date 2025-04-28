package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.LeadClient;
import com.prikhozhaya.realestateagency.model.User;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

public interface ILeadClientService {

    List<LeadClient> getLeadClients();

    Optional<LeadClient> getLeadClientById(Long leadId);

    LeadClient addLeadClient(String secondName, String firstName, String patronymic,
                             String phoneNumber, User user) throws IOException, SQLException;

    Optional<LeadClient> getLeadClientByEmail(String userId);

    LeadClient updateLeadClientByEmail(String email, String secondName, String firstName,
                                       String patronymic, String phoneNumber);
}
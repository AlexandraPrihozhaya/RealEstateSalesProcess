package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.LeadClient;
import com.prikhozhaya.realestateagency.model.Realtor;
import com.prikhozhaya.realestateagency.model.User;
import com.prikhozhaya.realestateagency.repository.LeadClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LeadClientService implements ILeadClientService {
    private final LeadClientRepository leadClientRepository;

    @Override
    public List<LeadClient> getLeadClients() {
        return leadClientRepository.findAll();
    }

    @Override
    public Optional<LeadClient> getLeadClientById(Long leadId) {
        return Optional.of(leadClientRepository.findById(leadId).get());
    }

    @Override
    public LeadClient addLeadClient(String secondName, String firstName, String patronymic,
                                    String phoneNumber, User user) throws IOException, SQLException {

        LeadClient leadClient = new LeadClient();
        leadClient.setSecondName(secondName);
        leadClient.setFirstName(firstName);
        leadClient.setPatronymic(patronymic);
        leadClient.setPhoneNumber(phoneNumber);
        leadClient.setUser(user);
        return leadClientRepository.save(leadClient);
    }
    @Override
    public Optional<LeadClient> getLeadClientByEmail(String userId) {
        return leadClientRepository.findByEmail(userId);
    }

}
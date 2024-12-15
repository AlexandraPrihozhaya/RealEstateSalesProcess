package com.prikhozhaya.realestateagency.controller;

import com.prikhozhaya.realestateagency.exception.ResourceNotFoundException;
import com.prikhozhaya.realestateagency.model.LeadClient;
import com.prikhozhaya.realestateagency.model.Realtor;
import com.prikhozhaya.realestateagency.model.User;
import com.prikhozhaya.realestateagency.response.LeadClientResponse;
import com.prikhozhaya.realestateagency.response.RealtorResponse;
import com.prikhozhaya.realestateagency.service.ILeadClientService;
import com.prikhozhaya.realestateagency.service.IRealtorService;
import com.prikhozhaya.realestateagency.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/leadClients")
@RequiredArgsConstructor
public class LeadClientController {

    private final ILeadClientService leadClientService;
    private final IUserService userService;

    @GetMapping("/all")
    @PreAuthorize("hasRole('ROLE_REALTOR')")
    public ResponseEntity<List<LeadClient>> getLeadClients(){

        return new ResponseEntity<>(leadClientService.getLeadClients(), HttpStatus.FOUND);
    }

    @PostMapping("/addLeadClient/{userId}")
    @PreAuthorize("hasRole('ROLE_USER') and #email == principal.username")
    public ResponseEntity<?> addLeadClient(@PathVariable("userId") String email, @RequestBody LeadClient leadClient)
            throws SQLException, IOException {
        System.out.println(email);
        String secondName = leadClient.getSecondName();
        String firstName = leadClient.getFirstName();
        String patronymic = leadClient.getPatronymic();
        String phoneNumber = leadClient.getPhoneNumber();
        User theUser = userService.getUser(email);

        LeadClient leadClient1 = leadClientService.addLeadClient(secondName, firstName, patronymic, phoneNumber, theUser);
        LeadClientResponse leadClientResponse = new LeadClientResponse(leadClient1.getId(), leadClient1.getSecondName(),
                leadClient1.getFirstName(), leadClient1.getPatronymic(), leadClient1.getPhoneNumber(), leadClient1.getUser(),
                leadClient1.getRealEstateObjects());
        System.out.println(ResponseEntity.ok(leadClientResponse));
        return ResponseEntity.ok(
                "Operation is successful");
    }

    @GetMapping("/lead-email-{userId}")
    public ResponseEntity<Optional<LeadClientResponse>> getLeadClientByEmail(@PathVariable("userId") String userId) {
        Optional<LeadClient> theLeadClient = leadClientService.getLeadClientByEmail(userId);
        return theLeadClient.map(leadClient -> {
            LeadClientResponse leadClientResponse = getLeadClientResponse(leadClient);
            return ResponseEntity.ok(Optional.of(leadClientResponse));
        }).orElseThrow(() -> new ResourceNotFoundException("Lead not found"));
    }

    @GetMapping("/lead-id-{leadId}")
    public ResponseEntity<Optional<LeadClientResponse>> getLeadClientById(@PathVariable("leadId") Long leadId) {
        Optional<LeadClient> theLeadClient = leadClientService.getLeadClientById(leadId);
        return theLeadClient.map(leadClient -> {
            LeadClientResponse leadClientResponse = getLeadClientResponse(leadClient);
            return ResponseEntity.ok(Optional.of(leadClientResponse));
        }).orElseThrow(() -> new ResourceNotFoundException("LeadClient not found"));
    }

    private LeadClientResponse getLeadClientResponse(LeadClient leadClient) {
        return new LeadClientResponse(leadClient.getId(),
                leadClient.getSecondName(), leadClient.getFirstName(), leadClient.getPatronymic(),
                leadClient.getPhoneNumber(), leadClient.getUser(), leadClient.getRealEstateObjects());
    }
}

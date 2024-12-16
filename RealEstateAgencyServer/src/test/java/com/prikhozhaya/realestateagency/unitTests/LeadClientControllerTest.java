package com.prikhozhaya.realestateagency.unitTests;

import com.prikhozhaya.realestateagency.controller.LeadClientController;
import com.prikhozhaya.realestateagency.model.LeadClient;
import com.prikhozhaya.realestateagency.model.User;
import com.prikhozhaya.realestateagency.response.LeadClientResponse;
import com.prikhozhaya.realestateagency.service.ILeadClientService;
import com.prikhozhaya.realestateagency.service.IUserService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.test.context.support.WithMockUser;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@SpringBootTest
public class LeadClientControllerTest {
    @Mock
    private ILeadClientService leadClientService;

    @Mock
    private IUserService userService;

    @InjectMocks
    private LeadClientController leadClientController;

    @Test
    @WithMockUser(roles = "REALTOR")
    void testGetLeadClients() {
        List<LeadClient> expectedClients = new ArrayList<>();
        when(leadClientService.getLeadClients()).thenReturn(expectedClients);

        ResponseEntity<List<LeadClient>> response = leadClientController.getLeadClients();

        assertEquals(HttpStatus.FOUND, response.getStatusCode());
        assertEquals(expectedClients, response.getBody());
    }

    @Test
    void testGetLeadClientByEmail() {
        String userId = "testUser";
        LeadClient leadClient = new LeadClient();
        when(leadClientService.getLeadClientByEmail(userId)).thenReturn(Optional.of(leadClient));

        ResponseEntity<Optional<LeadClientResponse>> response = leadClientController.getLeadClientByEmail(userId);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().isPresent());
    }

    @Test
    void testGetLeadClientById() {
        Long leadClientId = 1L;
        LeadClient leadClient = new LeadClient();
        leadClient.setId(leadClientId);
        leadClient.setSecondName("leadClient");
        when(leadClientService.getLeadClientById(leadClientId)).thenReturn(Optional.of(leadClient));

        ResponseEntity<Optional<LeadClientResponse>> response = leadClientController.getLeadClientById(leadClientId);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().isPresent());
        assertEquals("leadClient", response.getBody().get().getSecondName());
    }

    @Test
    public void testAddLeadClient() throws Exception {
        String email = "user@example.com";
        LeadClient leadClient = new LeadClient();
        leadClient.setSecondName("Doe");
        leadClient.setFirstName("John");
        leadClient.setPatronymic("Michael");
        leadClient.setPhoneNumber("1234567890");
        User user = new User();
        user.setEmail(email);

        when(userService.getUser(email)).thenReturn(user);
        when(leadClientService.addLeadClient(any(), any(), any(), any(), any())).thenReturn(leadClient);

        ResponseEntity<?> response = leadClientController.addLeadClient(email, leadClient);

        assertEquals("Operation is successful", response.getBody());
        verify(userService).getUser(email);
        verify(leadClientService).addLeadClient(leadClient.getSecondName(), leadClient.getFirstName(),
                leadClient.getPatronymic(), leadClient.getPhoneNumber(), user);
    }
}
package com.prikhozhaya.realestateagency.controller;

import com.prikhozhaya.realestateagency.model.*;
import com.prikhozhaya.realestateagency.response.FavoritesResponse;
import com.prikhozhaya.realestateagency.response.RequestResponse;
import com.prikhozhaya.realestateagency.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/requests")
@RequiredArgsConstructor
public class RequestController {

    private final ILeadClientService leadClientService;
    private final IRealEstateObjectService realEstateObjectService;
    private final IRequestService requestService;

    @PostMapping("/addRequest/{userId}")
    public ResponseEntity<?> addRequests(@PathVariable("userId") String email, @RequestParam Long realEstateObjectId)
            throws SQLException, IOException {
        LeadClient theLeadClient  = leadClientService.getLeadClientByEmail(email).get();
        if (theLeadClient  == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Lead not found");
        }

        RealEstateObject theRealEstateObject = realEstateObjectService.getRealEstateObjectById(realEstateObjectId).get();

        Request request = requestService.addRequest(theRealEstateObject, theLeadClient);
        if (request == null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Такая заявка уже есть");
        } else {
            RequestResponse requestResponse = new RequestResponse(request.getId(), request.getRealEstateObject(),
                    request.getLeadClient());
            return ResponseEntity.ok(requestResponse);
        }
    }

    @DeleteMapping("/delete/{requestId}")
    public ResponseEntity<String> deleteRequest(@PathVariable("requestId") Long id){
        try{
            requestService.deleteRequest(id);
            return ResponseEntity.ok("Request deleted successfully");
        }catch (UsernameNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting request: " + e.getMessage());
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Request>> getCallRequests(){
        return new ResponseEntity<>(requestService.getRequests(), HttpStatus.FOUND);
    }

    @PutMapping("/update")
    @PreAuthorize("hasRole('ROLE_REALTOR')")
    public ResponseEntity<String> updateRequest(
            @RequestBody Request request)
    {
        try {
            requestService.updateRequestStatus(request.getId(), request.getStatus());
            return ResponseEntity.ok("Request updated successfully");
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating request: " + e.getMessage());
        }
    }
}

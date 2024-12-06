package com.prikhozhaya.realestateagency.controller;

import com.prikhozhaya.realestateagency.exception.ResourceNotFoundException;
import com.prikhozhaya.realestateagency.model.Realtor;
import com.prikhozhaya.realestateagency.model.User;
import com.prikhozhaya.realestateagency.response.RealtorResponse;
import com.prikhozhaya.realestateagency.service.IRealtorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/realtors")
@RequiredArgsConstructor
public class RealtorController {
    private final IRealtorService realtorService;

    @GetMapping("/all")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<Realtor>> getRealtors(){

        return new ResponseEntity<>(realtorService.getRealtors(), HttpStatus.FOUND);
    }

    @GetMapping("/realtor-id-{realtorId}")
    public ResponseEntity<Optional<RealtorResponse>> getRealtorById(@PathVariable("realtorId") Long realtorId) {
        Optional<Realtor> theRealtor = realtorService.getRealtorById(realtorId);
        return theRealtor.map(realtor -> {
            RealtorResponse realtorResponse = getRealtorResponse(realtor);
            return ResponseEntity.ok(Optional.of(realtorResponse));
        }).orElseThrow(() -> new ResourceNotFoundException("Realtor not found"));
    }

    @DeleteMapping("/delete/{realtorId}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<String> deleteRealtor(@PathVariable("realtorId") Long id){
        try{
            realtorService.deleteRealtor(id);
            return ResponseEntity.ok("Realtor deleted successfully");
        }catch (
                UsernameNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting realtor: " + e.getMessage());
        }
    }

    private RealtorResponse getRealtorResponse(Realtor realtor) {

        return new RealtorResponse(realtor.getId(),
                realtor.getSecondName(), realtor.getFirstName(),
                realtor.getPatronymic(), realtor.getPhoneNumber(), realtor.getUser());
    }

    @PutMapping("/update/{realtorId}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<RealtorResponse> updateRealtor(@PathVariable Long realtorId, @RequestBody Realtor realtor) {
        String secondName = realtor.getSecondName();
        String firstName = realtor.getFirstName();
        String patronymic = realtor.getPatronymic();
        String phoneNumber = realtor.getPhoneNumber();
        realtorService.updateRealtor(realtorId, secondName, firstName, patronymic, phoneNumber);
        RealtorResponse realtorResponse = getRealtorResponse(realtor);
        return ResponseEntity.ok(realtorResponse);
    }

    @GetMapping("/realtor-email-{userId}")
    public ResponseEntity<Optional<RealtorResponse>> getRealtorByEmail(@PathVariable("userId") String userId) {
        Optional<Realtor> theRealtor = realtorService.getRealtorByEmail(userId);
        return theRealtor.map(realtor -> {
            RealtorResponse realtorResponse = getRealtorResponse(realtor);
            return ResponseEntity.ok(Optional.of(realtorResponse));
        }).orElseThrow(() -> new ResourceNotFoundException("Realtor not found"));
    }

    @PutMapping("/updateRealtor/{userId}")
    @PreAuthorize("hasRole('ROLE_REALTOR') and #email == principal.username")
    public ResponseEntity<RealtorResponse> updateRealtorByEmail(@PathVariable("userId") String email, @RequestBody Realtor realtor) {
        String secondName = realtor.getSecondName();
        String firstName = realtor.getFirstName();
        String patronymic = realtor.getPatronymic();
        String phoneNumber = realtor.getPhoneNumber();
        realtorService.updateRealtorByEmail(email, secondName, firstName, patronymic, phoneNumber);
        RealtorResponse realtorResponse = getRealtorResponse(realtor);
        return ResponseEntity.ok(realtorResponse);
    }

}
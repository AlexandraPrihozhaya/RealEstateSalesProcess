package com.prikhozhaya.realestateagency.controller;

import com.prikhozhaya.realestateagency.exception.ResourceNotFoundException;
import com.prikhozhaya.realestateagency.model.*;
import com.prikhozhaya.realestateagency.response.CallRequestResponse;
import com.prikhozhaya.realestateagency.service.ICallRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/call_requests")
@RequiredArgsConstructor
public class CallRequestController {
    private final ICallRequestService callRequestService;

    @GetMapping("/all")
    public ResponseEntity<List<CallRequest>> getCallRequests(){

        return new ResponseEntity<>(callRequestService.getCallRequests(), HttpStatus.FOUND);
    }

    @GetMapping("/callRequest-id-{callRequestId}")
    public ResponseEntity<Optional<CallRequestResponse>> getCallRequestById(@PathVariable("callRequestId") Long id) {
        Optional<CallRequest> theCallRequest = callRequestService.getCallRequestById(id);
        return theCallRequest.map(callRequest -> {
            CallRequestResponse callRequestResponse = getCallRequestResponse(callRequest);
            return ResponseEntity.ok(Optional.of(callRequestResponse));
        }).orElseThrow(() -> new ResourceNotFoundException("Call request not found"));
    }

    @DeleteMapping("/delete/{callRequestId}")
    @PreAuthorize("hasRole('ROLE_REALTOR')")
    public ResponseEntity<String> deleteCallRequest(@PathVariable("callRequestId") Long id){
        try{
            callRequestService.deleteCallRequest(id);
            return ResponseEntity.ok("Call request deleted successfully");
        }catch (UsernameNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting call request: " + e.getMessage());
        }
    }

    @PostMapping("/addCallRequest")
    public ResponseEntity<?> addCallRequest(@RequestBody CallRequest callRequest)
            throws SQLException, IOException {
        String name = callRequest.getName();
        String phoneNumber = callRequest.getPhoneNumber();
        LocalDateTime dateTime = LocalDateTime.now();
        String status = "Ожидает выполнения";
        System.out.println("заходит");

        CallRequest callRequest1 = callRequestService.addCallRequest(name, phoneNumber, dateTime, status);
        CallRequestResponse callRequestResponse = new CallRequestResponse(callRequest1.getId(), callRequest1.getName(),
                callRequest1.getPhoneNumber(), callRequest1.getDateTime(), callRequest1.getStatus());

        return ResponseEntity.ok(callRequestResponse);
    }

    private CallRequestResponse getCallRequestResponse(CallRequest callRequest) {

        return new CallRequestResponse(callRequest.getId(), callRequest.getName(), callRequest.getPhoneNumber(),
                callRequest.getDateTime(), callRequest.getStatus());
    }

    @PutMapping("/update")
    @PreAuthorize("hasRole('ROLE_REALTOR')")
    public ResponseEntity<String> updateCallRequest(
            @RequestBody CallRequest callRequest)
    {
        try {
            callRequestService.updateCallRequestStatus(callRequest.getId(), callRequest.getStatus());
            return ResponseEntity.ok("Call Request updated successfully");
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating call request: " + e.getMessage());
        }
    }
}

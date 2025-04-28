package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.CallRequest;
import com.prikhozhaya.realestateagency.repository.CallRequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CallRequestService implements ICallRequestService {

    private final CallRequestRepository callRequestRepository;

    @Override
    public List<CallRequest> getCallRequests() {
        return callRequestRepository.findAll();
    }

    @Override
    public Optional<CallRequest> getCallRequestById(Long callRequestId) {
        return Optional.of(callRequestRepository.findById(callRequestId).get());
    }

    @Override
    public CallRequest addCallRequest(String name, String phoneNumber, LocalDateTime dateTime, String status) throws IOException, SQLException {
        CallRequest callRequest = new CallRequest();
        callRequest.setName(name);
        callRequest.setPhoneNumber(phoneNumber);
        callRequest.setDateTime(dateTime);
        callRequest.setStatus(status);
        return callRequestRepository.save(callRequest);
    }

    @Override
    public void deleteCallRequest(Long id) {
        Optional<CallRequest> theCallRequest = callRequestRepository.findById(id);
        if(theCallRequest.isPresent()){
            callRequestRepository.deleteById(id);
        }
    }

    @Override
    public CallRequest updateCallRequestStatus(Long callRequestId, String status) {
        CallRequest callRequest = callRequestRepository.findById(callRequestId).orElseThrow(() -> new UsernameNotFoundException("Call Request not found"));

        callRequest.setStatus(status);
        return callRequestRepository.save(callRequest);

    }
}

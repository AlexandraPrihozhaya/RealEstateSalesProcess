package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.*;
import com.prikhozhaya.realestateagency.repository.RequestRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RequestService implements IRequestService {

    private final RequestRepository requestRepository;
    @Override
    public Request addRequest(RealEstateObject realEstateObject, LeadClient leadClient) throws IOException, SQLException {
        Long realEstateObjectId = realEstateObject.getId();
        Long leadClientId = leadClient.getId();
        Optional<Request> existingRequest = requestRepository.findByRealEstateObjectAndLeadClient(realEstateObjectId, leadClientId);

        if (existingRequest.isPresent()) {
            return null;
        } else {
            Request request = new Request();
            request.setRealEstateObject(realEstateObject);
            request.setLeadClient(leadClient);
            return requestRepository.save(request);
        }
    }

    @Transactional
    @Override
    public void deleteRequest(Long id) {
        Optional<Request> theRequest = requestRepository.findById(id);
        if (theRequest.isPresent()){
            requestRepository.deleteById(id);
        }
    }

    @Override
    public List<Request> getRequests() {
        return requestRepository.findAll();
    }


    @Override
    public Request updateRequestStatus(Long requestId, Boolean status) {
        Request request = requestRepository.findById(requestId).orElseThrow(() -> new UsernameNotFoundException("Request not found"));

        request.setStatus(status);
        return requestRepository.save(request);

    }
}

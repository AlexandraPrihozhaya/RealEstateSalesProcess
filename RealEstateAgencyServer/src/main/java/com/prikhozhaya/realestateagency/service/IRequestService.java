package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.*;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

public interface IRequestService {

    Request addRequest(RealEstateObject realEstateObject, LeadClient leadClient) throws IOException, SQLException;

    void deleteRequest(Long id);

    List<Request> getRequests();

    Request updateRequestStatus(Long requestId, Boolean status);
}

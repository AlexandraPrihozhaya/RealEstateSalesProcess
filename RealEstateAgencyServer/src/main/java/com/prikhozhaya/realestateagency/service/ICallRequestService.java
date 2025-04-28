package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.*;

import java.io.IOException;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface ICallRequestService {
    List<CallRequest> getCallRequests();

    Optional<CallRequest> getCallRequestById(Long callRequestId);

    CallRequest addCallRequest(String name, String phoneNumber, LocalDateTime dateTime, String status) throws IOException, SQLException;

    void deleteCallRequest(Long id);

    CallRequest updateCallRequestStatus(Long callRequestId, String status);
}

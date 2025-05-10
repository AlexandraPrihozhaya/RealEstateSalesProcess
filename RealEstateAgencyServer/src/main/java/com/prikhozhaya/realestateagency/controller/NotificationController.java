package com.prikhozhaya.realestateagency.controller;

import com.prikhozhaya.realestateagency.model.*;
import com.prikhozhaya.realestateagency.response.FavoritesResponse;
import com.prikhozhaya.realestateagency.response.NotificationResponse;
import com.prikhozhaya.realestateagency.response.ReviewResponse;
import com.prikhozhaya.realestateagency.service.IFavoritesService;
import com.prikhozhaya.realestateagency.service.ILeadClientService;
import com.prikhozhaya.realestateagency.service.INotificationService;
import com.prikhozhaya.realestateagency.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.SQLException;
import java.util.Optional;

@RestController
@RequestMapping("/notifications")
@RequiredArgsConstructor
public class NotificationController {
    private final INotificationService notificationService;
    private final IUserService userService;
    private final ILeadClientService leadClientService;

    @PostMapping("/addNotification/{userId}")
    public ResponseEntity<?> addNotification(@PathVariable("userId") String email, @RequestBody Notification notification)
            throws SQLException, IOException {
        User theUser  = userService.getUser(email);
        if (theUser  == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        String name = notification.getName();
        String notificationText = notification.getNotification();

        Notification notification1 = notificationService.addNotification(name, notificationText, theUser);

        NotificationResponse notificationResponse = new NotificationResponse(notification1.getId(), notification1.getName(),
                notification1.getNotification());

        return ResponseEntity.ok(notificationResponse);
    }

    @PostMapping("/addNotificationByLeadClientId/{leadClientId}")
    public ResponseEntity<?> addNotification(@PathVariable("leadClientId") Long leadClientId, @RequestBody Notification notification)
            throws SQLException, IOException {
        User theUser  = userService.getUser(leadClientService.getLeadClientById(leadClientId).get().getUser().getEmail());
        if (theUser  == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        String name = notification.getName();
        String notificationText = notification.getNotification();

        Notification notification1 = notificationService.addNotification(name, notificationText, theUser);

        NotificationResponse notificationResponse = new NotificationResponse(notification1.getId(), notification1.getName(),
                notification1.getNotification());

        return ResponseEntity.ok(notificationResponse);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateRequest(@RequestBody Request request)
    {
        try {
            notificationService.updateNotificationStatus(request.getId(), request.getStatus());
            return ResponseEntity.ok("Notification updated successfully");
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating notification: " + e.getMessage());
        }
    }
}

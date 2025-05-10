package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.LeadClient;
import com.prikhozhaya.realestateagency.model.Notification;
import com.prikhozhaya.realestateagency.model.Review;
import com.prikhozhaya.realestateagency.model.User;
import com.prikhozhaya.realestateagency.repository.NotificationRepository;
import com.prikhozhaya.realestateagency.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class NotificationService implements INotificationService {

    private final NotificationRepository notificationRepository;

    @Override
    public Notification addNotification(String name, String notification, User user) throws IOException, SQLException {
        Notification notification1 = new Notification();
        notification1.setName(name);
        notification1.setNotification(notification);
        notification1.setUser(user);
        return notificationRepository.save(notification1);
    }

    @Override
    public Notification updateNotificationStatus(Long notificationId, Boolean status) {
        Notification notification = notificationRepository.findById(notificationId).orElseThrow(() -> new UsernameNotFoundException("Notification not found"));

        notification.setStatus(status);
        return notificationRepository.save(notification);
    }
}
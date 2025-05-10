package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.Notification;
import com.prikhozhaya.realestateagency.model.User;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

public interface INotificationService {

    Notification addNotification(String name, String notification, User user) throws IOException, SQLException;

    Notification updateNotificationStatus(Long notificationId, Boolean status);
}
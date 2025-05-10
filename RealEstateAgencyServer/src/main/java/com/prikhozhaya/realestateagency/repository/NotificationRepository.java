package com.prikhozhaya.realestateagency.repository;

import com.prikhozhaya.realestateagency.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository extends JpaRepository<Notification, Long> {

}

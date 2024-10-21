package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    User registerUser(User user);
    List<User> getUsers();
    void deleteUser(String email);
    User getUser(String email);
    User updateUser(User user);
    Optional<User> getUserById(Long userId);
    void delete(Long userId);
}
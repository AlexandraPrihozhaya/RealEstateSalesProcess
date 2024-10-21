package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.User;
import com.prikhozhaya.realestateagency.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService {

    private final UserRepository userRepository;

    @Override
    public User registerUser(User user) {
        return null;
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public void deleteUser(String email) {

    }

    @Override
    public User getUser(String email) {
        return null;
    }

    @Override
    public User updateUser(User user) {
        return null;
    }

    @Override
    public Optional<User> getUserById(Long userId) {
        return Optional.empty();
    }

    @Override
    public void delete(Long userId) {

    }
}
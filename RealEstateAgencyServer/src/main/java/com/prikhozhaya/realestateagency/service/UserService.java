package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.exception.UserAlreadyExistsException;
import com.prikhozhaya.realestateagency.model.Role;
import com.prikhozhaya.realestateagency.model.User;
import com.prikhozhaya.realestateagency.repository.RoleRepository;
import com.prikhozhaya.realestateagency.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;

    @Override
    public User registerUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())){
            throw new UserAlreadyExistsException(user.getEmail() + " уже существует");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Role userRole = roleRepository.findByName("ROLE_USER").get();
        user.setRoles(Collections.singletonList(userRole));
        return userRepository.save(user);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Transactional
    @Override
    public void deleteUser(String email) {
        User theUser = getUser(email);
        if (theUser != null){
            userRepository.deleteByEmail(email);
        }

    }

    @Override
    public User getUser(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    @Override
    public User updateUser(User user) {
        //User user = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        Role userRole = roleRepository.findByName("ROLE_USER").get();
        Role adminRole = roleRepository.findByName("ROLE_ADMIN").get();
        if (!user.getRoles().contains(adminRole)) {
            user.setRoles(Collections.singletonList(adminRole));
            user.getRoles().remove(userRole);
        } else {
            user.setRoles(Collections.singletonList(userRole));
            user.getRoles().remove(adminRole);
        }
        return userRepository.save(user);
    }

    @Override
    public Optional<User> getUserById(Long userId) {
        return Optional.of(userRepository.findById(userId).get());
    }

    @Override
    public void delete(Long userId) {
        Optional<User> theUser = userRepository.findById(userId);
        if(theUser.isPresent()){
            userRepository.deleteById(userId);
        }
    }

    @Override
    public User updateUserEmail(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        Role userRole = roleRepository.findByName("ROLE_USER").get();
        Role realtorRole = roleRepository.findByName("ROLE_REALTOR").get();
        if (!user.getRoles().contains(userRole)) {
            userRole.assignRoleToUser(user);
            realtorRole.removeUserFromRole(user);
        } else {
            realtorRole.assignRoleToUser(user);
            userRole.removeUserFromRole(user);
        }
        return userRepository.save(user);
    }
}
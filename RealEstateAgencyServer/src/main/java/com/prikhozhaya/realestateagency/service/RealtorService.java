package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.Realtor;
import com.prikhozhaya.realestateagency.model.Role;
import com.prikhozhaya.realestateagency.model.User;
import com.prikhozhaya.realestateagency.repository.RealtorRepository;
import com.prikhozhaya.realestateagency.repository.RoleRepository;
import com.prikhozhaya.realestateagency.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RealtorService implements IRealtorService {
    private final RealtorRepository realtorRepository;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Override
    public List<Realtor> getRealtors() {
        return realtorRepository.findAll();
    }

    @Override
    public Optional<Realtor> getRealtorById(Long realtorId) {
        return Optional.of(realtorRepository.findById(realtorId).get());
    }

    @Transactional
    @Override
    public void deleteRealtor(Long id) {
        Optional<Realtor> theRealtor = getRealtorById(id);
        if (theRealtor.isPresent()){

            Role userRole = roleRepository.findByName("ROLE_USER").get();
            Role realtorRole = roleRepository.findByName("ROLE_REALTOR").get();
            User user = userRepository.findByEmail(theRealtor.get().getUser().getEmail()).get();
            if (!user.getRoles().contains(userRole)) {
                userRole.assignRoleToUser(user);
                realtorRole.removeUserFromRole(user);
            }

            realtorRepository.deleteById(id);
        }
    }

    @Override
    public Realtor updateRealtor(Long realtorId, String secondName, String firstName,
                                 String patronymic, String phoneNumber) {
        Realtor realtor = realtorRepository.findById(realtorId).get();
        if (secondName != null) realtor.setSecondName(secondName);
        if (firstName != null) realtor.setFirstName(firstName);
        if (patronymic != null) realtor.setPatronymic(patronymic);
        if (phoneNumber != null) realtor.setPhoneNumber(phoneNumber);
        return realtorRepository.save(realtor);
    }

    @Override
    public Optional<Realtor> getRealtorByEmail(String userId) {
        return Optional.of(realtorRepository.findByEmail(userId).get());
    }

    @Override
    public Realtor updateRealtorByEmail(String email, String secondName, String firstName,
                                        String patronymic, String phoneNumber) {
        Realtor realtor = realtorRepository.findByEmail(email).get();
        if (secondName != null) realtor.setSecondName(secondName);
        if (firstName != null) realtor.setFirstName(firstName);
        if (patronymic != null) realtor.setPatronymic(patronymic);
        if (phoneNumber != null) realtor.setPhoneNumber(phoneNumber);
        return realtorRepository.save(realtor);
    }
}
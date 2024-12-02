package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.Realtor;
import com.prikhozhaya.realestateagency.repository.RealtorRepository;
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
            realtorRepository.deleteById(id);
        }
    }
}

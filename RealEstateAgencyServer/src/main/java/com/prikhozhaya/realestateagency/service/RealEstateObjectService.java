package com.prikhozhaya.realestateagency.service;

import com.prikhozhaya.realestateagency.model.RealEstateObject;
import com.prikhozhaya.realestateagency.repository.RealEstateObjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RealEstateObjectService implements IRealEstateObjectService {
    private final RealEstateObjectRepository realEstateObjectRepository;

    @Override
    public List<RealEstateObject> getRealEstateObjects() {
        return realEstateObjectRepository.findAll();
    }

    @Override
    public Optional<RealEstateObject> getRealEstateObjectById(Long realEstateObjectId) {
        return Optional.of(realEstateObjectRepository.findById(realEstateObjectId).get());
    }
}

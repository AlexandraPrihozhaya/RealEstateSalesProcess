package com.prikhozhaya.realestateagency.repository;

import com.prikhozhaya.realestateagency.model.MicroDistrict;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MicroDistrictRepository extends JpaRepository<MicroDistrict, Long> {
    @Query("SELECT md FROM MicroDistrict md JOIN md.district d WHERE d.id = :id")
    List<MicroDistrict> findByDistrictId(Long id);

}

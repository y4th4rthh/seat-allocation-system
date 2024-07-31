package com.project.SeatManagement.repository;

import com.project.SeatManagement.entity.Center;
import com.project.SeatManagement.entity.District;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CenterRepository extends JpaRepository<Center,Long> {
    Center findByCenterNameAndDistrict(String centerName, District district);

    List<Center> findAllByDistrict(District district);
}

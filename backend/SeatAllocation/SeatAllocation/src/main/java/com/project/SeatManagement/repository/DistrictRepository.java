package com.project.SeatManagement.repository;

import com.project.SeatManagement.entity.District;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DistrictRepository extends JpaRepository<District,Long> {
    District findByDistrictName(String cityChoice1);
}

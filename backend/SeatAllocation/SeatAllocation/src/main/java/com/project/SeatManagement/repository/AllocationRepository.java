package com.project.SeatManagement.repository;

import com.project.SeatManagement.entity.Allocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AllocationRepository extends JpaRepository<Allocation, Long> {
    int countByAllocatedCenter(String centerName);
    // Add custom query methods if needed
}

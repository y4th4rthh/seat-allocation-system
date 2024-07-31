package com.project.SeatManagement.service;

import com.project.SeatManagement.entity.RegistrationForm;
import jakarta.transaction.Transactional;

public interface AllocationService {
    void assignDistrictAndCenterForAll();
    void assignDistrictAndCenter(Long applicationId);
    boolean isAllocationDone(Long applicationId);
}

package com.project.SeatManagement.service;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StartupService {

    @Autowired
    private AllocationService allocationService;

    @PostConstruct
    public void initialize() {
//        allocationService.assignDistrictAndCenterForAll();
    }
}

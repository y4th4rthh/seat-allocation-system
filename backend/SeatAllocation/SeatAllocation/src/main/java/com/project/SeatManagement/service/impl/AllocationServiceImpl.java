package com.project.SeatManagement.service.impl;

import com.project.SeatManagement.entity.Allocation;
import com.project.SeatManagement.entity.Center;
import com.project.SeatManagement.entity.District;
import com.project.SeatManagement.entity.RegistrationForm;
import com.project.SeatManagement.repository.AllocationRepository;
import com.project.SeatManagement.repository.CenterRepository;
import com.project.SeatManagement.repository.DistrictRepository;
import com.project.SeatManagement.repository.RegistrationFormRepository;
import com.project.SeatManagement.service.AllocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AllocationServiceImpl implements AllocationService {

    @Autowired
    private RegistrationFormRepository registrationFormRepository;

    @Autowired
    private DistrictRepository districtRepository;

    @Autowired
    private CenterRepository centerRepository;

    @Autowired
    private AllocationRepository allocationRepository;

    @Override
    public void assignDistrictAndCenterForAll() {
        // Fetch all applicationIds from the form-details table
        List<Long> applicationIds = registrationFormRepository.findAllApplicationIds();

        // Iterate over each applicationId and call assignDistrictAndCenter method
        for (Long applicationId : applicationIds) {
            assignDistrictAndCenter(applicationId);
        }
    }

    @Override
    public void assignDistrictAndCenter(Long applicationId) {
        RegistrationForm registrationForm = registrationFormRepository.findById(applicationId).orElse(null);
        if (registrationForm != null) {
            String cityChoice1 = registrationForm.getCityChoice1();
            String cityChoice2 = registrationForm.getCityChoice2();

            // First, check cityChoice1
            District district1 = districtRepository.findByDistrictName(cityChoice1);
            Center assignedCenter = assignCenterToRegistrationForm(registrationForm, district1);
            if (assignedCenter == null && !cityChoice1.equals(cityChoice2)) {
                // Both centers in cityChoice1 are full, check cityChoice2
                District district2 = districtRepository.findByDistrictName(cityChoice2);
                assignedCenter = assignCenterToRegistrationForm(registrationForm, district2);
            }

            if (assignedCenter == null) {
                // Both centers are full for cityChoice1 and cityChoice2. Cannot assign.
                System.out.println("Both centers are full for cityChoice1 and cityChoice2. Cannot assign.");
            }
        }
    }

    private Center assignCenterToRegistrationForm(RegistrationForm registrationForm, District district) {
        List<Center> centers = centerRepository.findAllByDistrict(district);
        //Print the centers
        for(Center center : centers) {
            System.out.println(center.getCenterName());
        }

        for (Center center : centers) {
            if (checkCenterAvailability(center)) {
                assignCenter(registrationForm, center);
                return center;
            }
        }
        return null;
    }

    private boolean checkCenterAvailability(Center center) {
        if (center == null) {
            return false; // Center doesn't exist, so it's not available
        }
        int allocationCount = allocationRepository.countByAllocatedCenter(center.getCenterName());
        return allocationCount < 5; // Assuming 5 is the maximum capacity
    }

    private void assignCenter(RegistrationForm registrationForm, Center center) {
        Allocation allocation = new Allocation();
        allocation.setApplicationId(registrationForm.getApplicationId());
        allocation.setAllocatedCenter(center.getCenterName());
        allocation.setAllocatedCity(center.getDistrict().getDistrictName());
        allocationRepository.save(allocation);
    }

    public boolean isAllocationDone(Long applicationId){
        return allocationRepository.existsById(applicationId);
    }
}

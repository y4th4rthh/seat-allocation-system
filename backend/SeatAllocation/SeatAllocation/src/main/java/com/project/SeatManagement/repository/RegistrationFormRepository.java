package com.project.SeatManagement.repository;

import com.project.SeatManagement.entity.RegistrationForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface RegistrationFormRepository extends JpaRepository<RegistrationForm, Long> {

    Optional<RegistrationForm> findRegistrationFormByApplicationId(Long applicationId);

    @Query("SELECT rf.applicationId FROM RegistrationForm rf")
    List<Long> findAllApplicationIds();
}

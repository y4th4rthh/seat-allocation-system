package com.project.SeatManagement.repository;

import com.project.SeatManagement.entity.ExamAdministration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.Optional;

public interface ExamAdministrationRepository extends JpaRepository<ExamAdministration, Long> {
    ExamAdministration findExamAdministrationById(Long applicationId);

    @Query("SELECT e.formDueDate FROM ExamAdministration e ORDER BY e.id ASC")
    LocalDate findFormDueDate();
}

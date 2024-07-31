package com.project.SeatManagement.service.impl;

import com.project.SeatManagement.repository.ExamAdministrationRepository;
import com.project.SeatManagement.service.ExamScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class ExamScheduleImpl implements ExamScheduleService {

    @Autowired
    private ExamAdministrationRepository examAdministrationRepository;
    @Override
    public boolean isDueDateOver() {
        LocalDate today = LocalDate.now();
        LocalDate formDueDate = examAdministrationRepository.findFormDueDate();
        return formDueDate != null && (formDueDate.isBefore(today) || formDueDate.isEqual(today));
    }
}

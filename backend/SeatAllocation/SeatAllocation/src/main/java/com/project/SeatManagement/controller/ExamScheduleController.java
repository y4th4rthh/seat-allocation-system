package com.project.SeatManagement.controller;

import com.project.SeatManagement.dto.RegistrationFormDto;
import com.project.SeatManagement.service.AllocationService;
import com.project.SeatManagement.service.ExamScheduleService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@AllArgsConstructor
@RestController
@RequestMapping("/api/user/form/")
public class ExamScheduleController {
    @Autowired
    private ExamScheduleService examScheduleService;

    @Autowired
    private AllocationService allocationService;

    @GetMapping("/{id}/check-due-date")
    public ResponseEntity<?> checkDueDate(@PathVariable("id") Long applicationId) {
        boolean isDueDateOver = examScheduleService.isDueDateOver();
        Map<String, Boolean> response = new HashMap<>();
        response.put("isDueDateOver", isDueDateOver);
        if (isDueDateOver) {
            boolean isAllocationDone = allocationService.isAllocationDone(applicationId);
            response.put("isAllocationDone", isAllocationDone);
            System.out.println("isAllocationDone: " + isAllocationDone);
            if (isAllocationDone) {
                return ResponseEntity.status(HttpStatus.OK).body(response);
            } else {
                return ResponseEntity.status(HttpStatus.OK).body(response);
            }
        } else {
            response.put("isAllocationDone", false);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        }
    }
}

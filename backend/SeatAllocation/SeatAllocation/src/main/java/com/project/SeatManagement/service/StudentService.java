package com.project.SeatManagement.service;

import com.project.SeatManagement.dto.StudentDto;

public interface StudentService {
    StudentDto createStudent(StudentDto studentDto);
    boolean verifyEmailAndPassword(String email, String password);
    Long getApplicationIdByEmail(String email);
    void forgotPassword(String email);
    String getEmailByOTP(String otp);

    boolean verifyOTP(String email, String otp);
}

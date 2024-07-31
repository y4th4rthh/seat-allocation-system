package com.project.SeatManagement.service.impl;

import com.project.SeatManagement.dto.StudentDto;
import com.project.SeatManagement.entity.PasswordReset;
import com.project.SeatManagement.entity.Student;
import com.project.SeatManagement.exception.NotFoundException;
import com.project.SeatManagement.mapper.StudentMapper;
import com.project.SeatManagement.repository.PasswordResetRepository;
import com.project.SeatManagement.repository.StudentRepository;
import com.project.SeatManagement.service.EmailService;
import com.project.SeatManagement.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Optional;
import java.util.Random;

@Service
@AllArgsConstructor
public class StudentServiceImpl implements StudentService {

    private StudentRepository studentRepository;
    private PasswordResetRepository passwordResetRepository;
    private EmailService emailService;
    @Override
    public StudentDto createStudent(StudentDto studentDto) {
        Student student = StudentMapper.mapToStudent(studentDto);
        Student savedStudent =  studentRepository.save(student);
        // Get the generated application ID
        Long applicationId = savedStudent.getId(); // Assuming ID is auto-generated

        // Update the saved student with the application ID
        savedStudent.setApplicationId(applicationId);
        studentRepository.save(savedStudent); // Update the student with the application ID

        // Send email with the application ID
        String email = studentDto.getEmail(); // Get student's email
        sendApplicationIdByEmail(email, applicationId);
        return StudentMapper.mapToStudentDto(savedStudent);
    }

    @Override
    public boolean verifyEmailAndPassword(String email, String password) {
        Optional<Student> studentOptional = studentRepository.findByEmail(email);
        return studentOptional.map(student -> student.getPassword().equals(password)).orElse(false);
    }

    @Override
    public Long getApplicationIdByEmail(String email) {
        Optional<Student> studentOptional = studentRepository.findByEmail(email);
        return studentOptional.map(Student::getApplicationId).orElse(null);
    }

    private void sendApplicationIdByEmail(String email, Long applicationId) {
        // Construct email message
        String subject = "Your Application ID";
        String message = "Dear Student, Your application ID is: " + applicationId + ". Thank you for registering!";

        // Send email using your email service
        emailService.sendEmail(email, subject, message);
    }


    public void forgotPassword(String email) {
        Optional<Student> studentOptional = studentRepository.findByEmail(email);
        if (studentOptional.isPresent()) {
            // Generate OTP
            String otp = generateOTP();
            System.out.println(otp);
            // Store OTP in the OTP table
            PasswordReset passwordReset = new PasswordReset();
            passwordReset.setEmail(email);
            passwordReset.setOtp(otp);
            passwordResetRepository.save(passwordReset);
            // Send OTP via email
            sendOTPByEmail(email, otp);
        } else {
            throw new NotFoundException("Email address not found");
        }
    }

    @Override
    public String getEmailByOTP(String otp) {
        Optional<PasswordReset> passwordResetOptional = passwordResetRepository.findByOtp(otp);
        return passwordResetOptional.map(PasswordReset::getEmail).orElse(null);
    }

    @Override
    public boolean verifyOTP(String email, String otp) {
        Optional<PasswordReset> passwordResetOptional = passwordResetRepository.findByEmailAndOtp(email, otp);
        return passwordResetOptional.isPresent();
    }

    private String generateOTP() {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        return String.valueOf(otp);
    }

    private void sendOTPByEmail(String email, String otp) {
        // Construct email message
        String subject = "Forgot Password OTP";
        String message = "Your OTP for resetting the password is: " + otp;

        // Send email using your email service
        emailService.sendEmail(email, subject, message);
    }
}

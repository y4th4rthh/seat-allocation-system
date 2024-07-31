package com.project.SeatManagement.controller;

import com.project.SeatManagement.dto.StudentDto;
import com.project.SeatManagement.exception.NotFoundException;
import com.project.SeatManagement.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@AllArgsConstructor
@RestController
@RequestMapping("/api/students")
public class StudentController {
    @Autowired
    private StudentService studentService;

    //ADD STUDENT
    @PostMapping("/register")
    public ResponseEntity<?> createStudent(@RequestBody StudentDto studentDto) {
        try {
                StudentDto savedStudent = studentService.createStudent(studentDto);
                return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while processing your request.");
        }

    }

    //VERIFY STUDENT LOGIN
    @PostMapping("/login")
    public ResponseEntity<?> loginStudent(@RequestBody StudentDto studentDto) {
        try {
            boolean isValid = studentService.verifyEmailAndPassword(studentDto.getEmail(), studentDto.getPassword());
            if (isValid) {
                Long applicationId = studentService.getApplicationIdByEmail(studentDto.getEmail());
                System.out.println(applicationId);
                Map<String, Long> response = Map.of("applicationId", applicationId);
                return ResponseEntity.status(HttpStatus.OK).body(response);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while processing your request.");
        }
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody StudentDto studentDto) {
        String email = studentDto.getEmail();
        System.out.println(email);
        try {
            System.out.println("enter");
            studentService.forgotPassword(email);
            return ResponseEntity.ok("OTP sent to your email address!");
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email address not found");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while processing your request.");
        }
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOTP(@RequestBody Map<String, String> request) {
        String otp = request.get("otp");
        System.out.println(otp);
        try {
            // Assuming you have a method in your service to get email by OTP
            String email = studentService.getEmailByOTP(otp);

            if (email != null) {
                boolean isVerified = studentService.verifyOTP(email, otp);
                if (isVerified) {
                    return ResponseEntity.ok("OTP is verified successfully!");
                } else {
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid OTP.");
                }
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email not found for the provided OTP.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while processing your request.");
        }
    }


}

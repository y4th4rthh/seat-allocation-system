package com.project.SeatManagement.mapper;

import com.project.SeatManagement.dto.StudentDto;
import com.project.SeatManagement.entity.Student;

public class StudentMapper {
    public static StudentDto mapToStudentDto(Student student){
        return new StudentDto(
                student.getId(),
                student.getEmail(),
                student.getPassword(),
                student.getApplicationId()
        );
    }

    public static Student mapToStudent(StudentDto studentDto){
        return new Student(
                studentDto.getId(),
                studentDto.getEmail(),
                studentDto.getPassword(),
                studentDto.getApplicationId()
        );
    }
}

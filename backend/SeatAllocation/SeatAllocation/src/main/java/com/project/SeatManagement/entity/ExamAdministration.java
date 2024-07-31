package com.project.SeatManagement.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Time;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "exam-administration")
public class ExamAdministration {

    @Id
    private Long id;

    @Column(nullable = false)
    private String examName;

    @Column(nullable = false)
    private LocalDate formDueDate;

    @Column(nullable = false)
    private LocalDate examDate;

    @Column(nullable = false)
    private Time examTime;
}

package com.project.SeatManagement.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "allocation")
public class Allocation {

    @Id
    @Column(name = "applicationId")
    private Long applicationId;

    @Column(name="allocated_city")
    private String allocatedCity;

    @Column(name="allocated_center")
    private String allocatedCenter;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "applicationId", referencedColumnName = "applicationId")
    private RegistrationForm registrationForm;
}

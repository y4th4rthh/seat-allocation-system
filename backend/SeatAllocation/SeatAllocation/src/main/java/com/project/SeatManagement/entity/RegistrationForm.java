package com.project.SeatManagement.entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "form-details")
public class RegistrationForm {
    @Id
    @Column(name = "applicationId")
    private Long applicationId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "gender", columnDefinition = "VARCHAR(60) CHECK (gender IN ('MALE', 'FEMALE'))")
    private String gender;

    @Column(name = "dob")
    private Date dob;

    @Column(name = "city_choice1")
    private String cityChoice1;

    @Column(name = "city_choice2")
    private String cityChoice2;

    @Lob
    @Column(name = "photo", columnDefinition = "MEDIUMBLOB")
    private byte[] photo;

    @Lob
    @Column(name = "sign", columnDefinition = "MEDIUMBLOB")
    private byte[] sign;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "application_id", referencedColumnName = "applicationId")
    private Student student;

    public RegistrationForm(Long applicationId,
                            String firstName,
                            String lastName,
                            String gender,
                            Date dob,
                            String cityChoice1,
                            String cityChoice2, byte[] photo, byte[] sign) {
        this.applicationId = applicationId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.dob = dob;
        this.cityChoice1 = cityChoice1;
        this.cityChoice2 = cityChoice2;
        this.photo = photo;
        this.sign = sign;
    }
}

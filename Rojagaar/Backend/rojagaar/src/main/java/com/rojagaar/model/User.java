package com.rojagaar.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    private String id;

    private String userName;

    private String email;
    private String name;
    private String gender;
    private int age;
    private long phoneNo;
    private String skill;
    private String password;
    private Address address;
    private String image;
}

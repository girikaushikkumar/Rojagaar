package com.rojagaar.payload;

import com.rojagaar.model.Address;
import com.rojagaar.model.Photo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private String userName;
    private String email;
    private String name;
    private String gender;
    private int age;
    private long phoneNo;
    private String skill;
    private String password;
    private Address address;
    private Photo photo;
    private List<Skills> skills;
}

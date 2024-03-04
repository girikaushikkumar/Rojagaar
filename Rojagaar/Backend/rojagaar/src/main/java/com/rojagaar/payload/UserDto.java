package com.rojagaar.payload;

import com.rojagaar.model.Address;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
//    @Size(min = 6,message = "user Name should be minimum 6 character")
    private String userName;
//    @Email(message = "give a valid email id")
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

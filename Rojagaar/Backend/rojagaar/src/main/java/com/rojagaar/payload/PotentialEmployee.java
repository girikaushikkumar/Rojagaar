package com.rojagaar.payload;

import com.rojagaar.model.Address;
import com.rojagaar.model.Photo;
import com.rojagaar.model.Rating;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PotentialEmployee {
    private String username;
    private String email;
    private String name;
    private long phoneNo;
    private Address address;
    private Photo photo;
    List<Skills> skills;
    private Rating rating;
}

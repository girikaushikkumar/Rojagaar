package com.rojagaar.model;

import jdk.jfr.Name;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Address {
    private String village;
    private String district;
    private String tourism;
    private String road;
    private String state;
    private long pincode;
    private String country;

}

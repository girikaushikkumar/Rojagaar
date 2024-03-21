package com.rojagaar.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JobDto {
    private String id;
    private String title;
    private String description;
    private String category;
    private String subCategory;
    private String location;
    private String Wage;
    private String workingTime;
    private Date jobPostedDate;
    private Date workingDate;
    private int noOfPeople;
    private boolean team;
    private String imageId;
    private String jobPosterId;
}

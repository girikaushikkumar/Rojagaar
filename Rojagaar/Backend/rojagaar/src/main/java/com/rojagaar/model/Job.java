package com.rojagaar.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Job {
    @Id
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

package com.rojagaar.model;

import com.rojagaar.payload.PotentialEmployee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobInvite {
    @Id
    private String id;
    private String recruiter;
    private String recruiterName;
    private Photo recruiterPhoto;
    private long contactNo;
    private Address address;
    private String description;
    private Date jobInviteDate;
    private String status;
    private PotentialEmployee potentialEmployee;
}

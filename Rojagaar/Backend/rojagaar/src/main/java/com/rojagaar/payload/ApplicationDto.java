package com.rojagaar.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApplicationDto {
    private String id;
    private String userId;
    private String jobId;
    private Date applicationDate;
    private String status;
}

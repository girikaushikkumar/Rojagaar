package com.rojagaar.services;

import com.rojagaar.model.Application;
import com.rojagaar.payload.*;

import java.util.List;

public interface ApplicationService {

    public ApiResponse applyForJob(ApplicationDto applicationDto);
    public List<ApplicationStatus> getApplicationStatus(String userId);
    public List<JobStatus> getUserDetails(String jobId);
    public void updateApplicationStatus(String id,String status);
}

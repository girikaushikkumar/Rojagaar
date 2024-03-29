package com.rojagaar.services;

import com.rojagaar.model.Application;
import com.rojagaar.payload.ApiResponse;
import com.rojagaar.payload.ApplicationDto;
import com.rojagaar.payload.ApplicationStatus;

import java.util.List;

public interface ApplicationService {

    public ApiResponse applyForJob(ApplicationDto applicationDto);
    public List<ApplicationStatus> getApplicationStatus(String userId);
}

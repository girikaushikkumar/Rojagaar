package com.rojagaar.services;

import com.rojagaar.model.Application;
import com.rojagaar.payload.ApiResponse;
import com.rojagaar.payload.ApplicationDto;

public interface ApplicationService {

    public ApiResponse applyForJob(ApplicationDto applicationDto);
}

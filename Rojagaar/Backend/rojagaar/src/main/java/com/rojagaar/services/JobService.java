package com.rojagaar.services;

import com.rojagaar.payload.JobDetailsResponse;
import com.rojagaar.payload.JobDto;

import java.util.List;

public interface JobService {
    public void createJob(JobDto jobDto);

    public List<JobDetailsResponse> getAllJob();
    public List<JobDto> findJobByJobPosterId(String jobPosterId);
}

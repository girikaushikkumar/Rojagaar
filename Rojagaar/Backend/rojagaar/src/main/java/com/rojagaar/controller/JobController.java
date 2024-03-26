package com.rojagaar.controller;

import com.rojagaar.payload.ApiResponse;
import com.rojagaar.payload.JobDetailsResponse;
import com.rojagaar.payload.JobDto;
import com.rojagaar.services.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/job/")
public class JobController {

    @Autowired
    private JobService jobService;

    @PostMapping("createJob")
    public ResponseEntity<ApiResponse> createJob(@RequestBody JobDto jobDto) {
        this.jobService.createJob(jobDto);
        return new ResponseEntity<>(new ApiResponse("Job Posted Successfully"), HttpStatus.OK);
    }

    @GetMapping("getAllJob")
    public ResponseEntity<List<JobDetailsResponse>> getAllJob() {
        List<JobDetailsResponse> jobDetailsResponses = this.jobService.getAllJob();
        return new ResponseEntity<>(jobDetailsResponses,HttpStatus.OK);
    }

    @GetMapping("getJobByUserId/{jobPosterId}")
    public ResponseEntity<List<JobDto>> getJobByJobPosterId(@PathVariable String jobPosterId) {
        List<JobDto> jobDtos = this.jobService.findJobByJobPosterId(jobPosterId);
        return new ResponseEntity<>(jobDtos,HttpStatus.OK);
    }
}

package com.rojagaar.controller;

import com.rojagaar.payload.*;
import com.rojagaar.services.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/application/")
public class ApplicationController {
    @Autowired
    private ApplicationService applicationService;

    @PostMapping("applyForJob")
    public ResponseEntity<ApiResponse> applyForJob(@RequestBody ApplicationDto applicationDto) {
        ApiResponse apiResponse = this.applicationService.applyForJob(applicationDto);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @GetMapping("getApplicationStatus/{userId}")
    public ResponseEntity<List<ApplicationStatus>> getApplicationStatus(@PathVariable String userId) {
        List<ApplicationStatus> applicationStatus = this.applicationService.getApplicationStatus(userId);
        return new ResponseEntity<>(applicationStatus,HttpStatus.OK);
    }

    @GetMapping("getJobSeekerDetails/{jobId}")
    public ResponseEntity<List<JobStatus>> getJobSeekerDetails(@PathVariable String jobId) {
        List<JobStatus> jobStatuses = this.applicationService.getUserDetails(jobId);
        return new ResponseEntity<>(jobStatuses,HttpStatus.OK);
    }
}

package com.rojagaar.controller;

import com.rojagaar.payload.ApiResponse;
import com.rojagaar.payload.ApplicationDto;
import com.rojagaar.services.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}

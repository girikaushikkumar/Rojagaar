package com.rojagaar.controller;

import com.rojagaar.model.JobCart;
import com.rojagaar.payload.ApiResponse;
import com.rojagaar.payload.JobCartDto;
import com.rojagaar.payload.JobDetailsResponse;
import com.rojagaar.payload.JobDto;
import com.rojagaar.services.serviceImpl.JobCartServiceImpl;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/jobCart/")
public class JobCartController {

    @Autowired
    private JobCartServiceImpl jobCartService;

    @PostMapping("addJob")
    public ResponseEntity<ApiResponse> addJobToCart(@RequestBody JobCartDto jobCart) {
        ApiResponse apiResponse = this.jobCartService.addJobToCart(jobCart);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @GetMapping("getCardDetails")
    public ResponseEntity<List<JobDetailsResponse>> getJobCardDetails(@RequestParam String jobSeekerId) {
        List<JobDetailsResponse> jobCart = this.jobCartService.getCardDetials(jobSeekerId);
        return new ResponseEntity<>(jobCart,HttpStatus.OK);
    }
}

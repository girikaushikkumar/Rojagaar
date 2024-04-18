package com.rojagaar.controller;

import com.rojagaar.model.JobInvite;
import com.rojagaar.payload.ApiResponse;
import com.rojagaar.services.JobInviteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/jobInvite/")
public class JobInviteController {
    @Autowired
    private JobInviteService jobInviteService;

    @PostMapping("sendInvite")
    public ResponseEntity<ApiResponse> sendInvite(@RequestBody JobInvite jobInvite) {
        this.jobInviteService.hireEmployee(jobInvite);
        return new ResponseEntity<>(new ApiResponse("send successfully"), HttpStatus.OK);
    }

    @GetMapping("findAllInvitationByUserName/{username}")
    public ResponseEntity<List<JobInvite>> findAllInvitationByUserName(@PathVariable String username) {
        List<JobInvite> jobInvites = this.jobInviteService.findAllInvitationByUserName(username);
        return new ResponseEntity<>(jobInvites,HttpStatus.OK);
    }

    @PutMapping("updateJobInvitationStatus/{id}/{status}")
    public ResponseEntity<ApiResponse> updateJobInvitationStatus(@PathVariable String id,@PathVariable String status) {
        this.jobInviteService.updateJobInvitation(id,status);
        return new ResponseEntity<>(new ApiResponse("status updated successfully"),HttpStatus.OK);
    }
}

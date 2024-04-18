package com.rojagaar.services.serviceImpl;

import com.rojagaar.exception.ResourceNotFoundException;
import com.rojagaar.model.JobInvite;
import com.rojagaar.repository.JobInviteRepo;
import com.rojagaar.services.JobInviteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobInviteServiceImpl implements JobInviteService {
    @Autowired
    private JobInviteRepo jobInviteRepo;
    @Override
    public void hireEmployee(JobInvite jobInvite) {
        this.jobInviteRepo.save(jobInvite);
    }

    @Override
    public List<JobInvite> findAllInvitationByUserName(String username) {
        List<JobInvite> jobInvites = this.jobInviteRepo.findByUsername(username);
        return jobInvites;
    }

    @Override
    public void updateJobInvitation(String id, String status) {
        JobInvite jobInvite = this.jobInviteRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("jobInvitation","id",id));
        jobInvite.setStatus(status);
        this.jobInviteRepo.save(jobInvite);
    }
}

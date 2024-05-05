package com.rojagaar.services;


import com.rojagaar.model.JobInvite;

import java.util.List;

public interface JobInviteService {
    public void hireEmployee(JobInvite jobInvite);
    public List<JobInvite> findAllInvitationByUserName(String username);

    public void updateJobInvitation(String id,String status);
    public List<JobInvite> HireStatus(String recruiter);
}

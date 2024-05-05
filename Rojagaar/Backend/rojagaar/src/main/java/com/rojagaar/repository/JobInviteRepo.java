package com.rojagaar.repository;

import com.rojagaar.model.JobInvite;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface JobInviteRepo extends MongoRepository<JobInvite,String> {
    @Query("{'potentialEmployee.username': ?0}")
    List<JobInvite> findByUsername(String username);
    @Query("{'recruiter': ?0}")
    List<JobInvite> findByRecruiter(String recruiterId);
}

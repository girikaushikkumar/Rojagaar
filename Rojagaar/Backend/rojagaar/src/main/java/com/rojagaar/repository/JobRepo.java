package com.rojagaar.repository;

import com.rojagaar.model.Job;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface JobRepo extends MongoRepository<Job,String> {

    List<Job> findByJobPosterId(String jobPosterId);
}

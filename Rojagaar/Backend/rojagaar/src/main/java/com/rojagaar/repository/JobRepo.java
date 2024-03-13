package com.rojagaar.repository;

import com.rojagaar.model.Job;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface JobRepo extends MongoRepository<Job,String> {
}

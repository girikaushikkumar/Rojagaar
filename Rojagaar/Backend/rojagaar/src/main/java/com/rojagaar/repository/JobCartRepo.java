package com.rojagaar.repository;

import com.rojagaar.model.JobCart;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface JobCartRepo extends MongoRepository<JobCart,String> {

    Optional<JobCart> findByJobSeekerId(String JobSeekerId);
}

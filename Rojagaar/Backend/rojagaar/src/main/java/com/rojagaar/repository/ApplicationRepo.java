package com.rojagaar.repository;

import com.rojagaar.model.Application;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface ApplicationRepo extends MongoRepository<Application,String> {
    @Query("{'userId':?0,'jobId' : ?1}")
    Optional<Application> findByUserIdAndJobId(String userId,String jobId);
}

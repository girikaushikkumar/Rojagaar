package com.rojagaar.repository;

import com.rojagaar.model.Rating;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RatingRepo extends MongoRepository<Rating,String> {
    Optional<Rating> findByUserId(String userId);

}

package com.rojagaar.repository;

import com.rojagaar.model.Photo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PhotoRepo extends MongoRepository<Photo,String> {
}

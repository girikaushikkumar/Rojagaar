package com.rojagaar.repository;

import com.rojagaar.model.Team;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TeamRepo extends MongoRepository<Team,String > {
}

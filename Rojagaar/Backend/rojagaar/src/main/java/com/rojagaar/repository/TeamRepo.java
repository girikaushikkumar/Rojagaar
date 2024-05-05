package com.rojagaar.repository;

import com.rojagaar.model.Team;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface TeamRepo extends MongoRepository<Team,String > {
    Optional<List<Team>> findByLeaderId(String leaderId);
}

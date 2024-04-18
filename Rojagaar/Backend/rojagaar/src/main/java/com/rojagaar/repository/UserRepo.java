package com.rojagaar.repository;

import com.rojagaar.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepo extends MongoRepository<User,String> {
    Optional<User> findByUserName(String userName);
    Optional<User> findByEmail(String email);
    Optional<User> findByPhoneNo(long phoneNo);
    Optional<User> findByUserNameAndPassword(String userName, String password);
    @Query("{$or:[{'skills.skill': ?0}, {'skills.subSkills': ?0}]}")
    List<User> findBySkillOrSubSkill(String skillOrSubSkill);
}

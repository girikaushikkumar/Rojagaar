package com.rojagaar.repository;

import com.rojagaar.model.Category;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface CategoryRepo extends MongoRepository<Category,String> {
    Optional<Category> findByCategoryName(String CategoryName);
}

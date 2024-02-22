package com.rojagaar.repository;

import com.rojagaar.model.SubCategory;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface SubCategoryRepo extends MongoRepository<SubCategory,String> {

    Optional<SubCategory> findBySubCategoryName(String subCategoryName);
}

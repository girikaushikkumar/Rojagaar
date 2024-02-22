package com.rojagaar.services;

import com.rojagaar.model.SubCategory;
import com.rojagaar.payload.SubCategoryDto;

import java.util.List;

public interface SubCategoryService {
    public void createSubCategory(SubCategoryDto subCategory, String CategoryName);
    public void updateSubCategory(SubCategoryDto subCategory,String subCategoryName);
    public void delteSubCategory(String subCategoryName);
    public List<SubCategory> getAllSubCategory();
    public List<SubCategory> getAllSubCategoryAccordingToCategory(String categoryName);
}

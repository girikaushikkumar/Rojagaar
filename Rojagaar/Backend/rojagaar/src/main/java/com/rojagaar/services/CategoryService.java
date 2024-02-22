package com.rojagaar.services;

import com.rojagaar.payload.ApiResponse;
import com.rojagaar.payload.CategoryDto;

import java.util.List;

public interface CategoryService {
    ApiResponse createCategory(CategoryDto categoryDto);
    List<CategoryDto> getAllCategory();
    CategoryDto getCategoryById(String id);
    void updateCategory(CategoryDto categoryDto,String categoryName);
    void deleteCategory(String id);
}

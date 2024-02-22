package com.rojagaar.services.serviceImpl;

import com.rojagaar.exception.ResourceNotFoundException;
import com.rojagaar.model.Category;
import com.rojagaar.model.SubCategory;
import com.rojagaar.payload.ApiResponse;
import com.rojagaar.payload.CategoryDto;
import com.rojagaar.repository.CategoryRepo;
import com.rojagaar.repository.SubCategoryRepo;
import com.rojagaar.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.StringTokenizer;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepo categoryRepo;
    @Autowired
    private SubCategoryRepo subCategoryRepo;


    @Override
    public ApiResponse createCategory(CategoryDto categoryDto) {
        String categoryName = categoryDto.getCategoryName();
        Optional<Category> category = this.categoryRepo.findByCategoryName(categoryName);
        if(category.isPresent()) {
            return new ApiResponse("Category already exist");
        } else {
            Category category1 = new Category();
            category1.setCategoryName(categoryDto.getCategoryName());
            this.categoryRepo.save(category1);
            return new ApiResponse("Category created Successfully");
        }

    }

    @Override
    public List<CategoryDto> getAllCategory() {
        List<Category> categories= this.categoryRepo.findAll();
        List<CategoryDto> categoryDtos = new ArrayList<>();
        for(Category category:categories) {
            CategoryDto categoryDto = new CategoryDto();
            categoryDto.setCategoryName(category.getCategoryName());
            categoryDtos.add(categoryDto);
        }
        return categoryDtos;
    }

    @Override
    public CategoryDto getCategoryById(String id) {
        Category category = this.categoryRepo.findByCategoryName(id).orElseThrow(()->new ResourceNotFoundException("Category","Name",id));
        CategoryDto categoryDto = new CategoryDto();
        categoryDto.setCategoryName(category.getCategoryName());
        return categoryDto;
    }

    @Override
    public void updateCategory(CategoryDto categoryDto, String CategoryName) {
        Category category = this.categoryRepo.findByCategoryName(CategoryName).orElseThrow(()->new ResourceNotFoundException("Category","Name",categoryDto.getCategoryName()));
        category.setCategoryName(categoryDto.getCategoryName());
        this.categoryRepo.save(category);
    }

    @Override
    public void deleteCategory(String id) {
        Category category = this.categoryRepo.findByCategoryName(id).orElseThrow(()-> new ResourceNotFoundException("Category","Name",id));
//        System.out.println(category.getId());
        List<SubCategory> subCategories = this.subCategoryRepo.findAll().stream().
                filter(subCategory -> id.equals(subCategory.getCategory().getCategoryName())).collect(Collectors.toList());
        this.subCategoryRepo.deleteAll(subCategories);
        this.categoryRepo.delete(category);
    }
}

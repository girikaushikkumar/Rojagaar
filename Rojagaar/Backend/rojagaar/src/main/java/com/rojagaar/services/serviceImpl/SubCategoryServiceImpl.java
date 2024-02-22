package com.rojagaar.services.serviceImpl;

import com.rojagaar.exception.ResourceNotFoundException;
import com.rojagaar.model.Category;
import com.rojagaar.model.SubCategory;
import com.rojagaar.payload.SubCategoryDto;
import com.rojagaar.repository.CategoryRepo;
import com.rojagaar.repository.SubCategoryRepo;
import com.rojagaar.services.SubCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SubCategoryServiceImpl implements SubCategoryService {
    @Autowired
    private SubCategoryRepo subCategoryRepo;
    @Autowired
    private CategoryRepo categoryRepo;
    @Override
    public void createSubCategory(SubCategoryDto subCategoryDto, String CategoryName) {
        Category category = this.categoryRepo.findByCategoryName(CategoryName).orElseThrow(()->new ResourceNotFoundException("Category","Name",CategoryName));
        SubCategory subCategory = new SubCategory();
        subCategory.setSubCategoryName(subCategoryDto.getSubCategoryName());
        subCategory.setCategory(category);
        this.subCategoryRepo.save(subCategory);
    }

    @Override
    public void updateSubCategory(SubCategoryDto subCategoryDto, String subCategoryName) {
        SubCategory subCategory = this.subCategoryRepo.findBySubCategoryName(subCategoryName).orElseThrow(()->new ResourceNotFoundException("SubCategory","Name",subCategoryName));
        subCategory.setSubCategoryName(subCategoryDto.getSubCategoryName());
        this.subCategoryRepo.save(subCategory);
    }

    @Override
    public void delteSubCategory(String subCategoryName) {
        SubCategory subCategory = this.subCategoryRepo.findBySubCategoryName(subCategoryName).orElseThrow(()->new ResourceNotFoundException("SubCategory","Name",subCategoryName));
        this.subCategoryRepo.delete(subCategory);
    }

    @Override
    public List<SubCategory> getAllSubCategory() {
        return this.subCategoryRepo.findAll();
    }

    @Override
    public List<SubCategory> getAllSubCategoryAccordingToCategory(String categoryName) {
//        System.out.println(categoryName);
//        List<SubCategory> subCategories = this.subCategoryRepo.findAll();
//        List<SubCategory> subCategories1 = new ArrayList<>();
//        for(SubCategory subCategory:subCategories) {
//            String catName = subCategory.getCategory().getCategoryName();
//            System.out.println(catName);
//            System.out.println(subCategory.getSubCategoryName());
//            if(catName != null && categoryName.equals(catName)) {
//                subCategories1.add(subCategory);
//            }
//        }

        List<SubCategory> subCategories = this.subCategoryRepo.findAll().
                stream().filter(subCategory -> categoryName.equals(subCategory.getCategory().getCategoryName())).collect(Collectors.toList());
        return subCategories;
    }
}

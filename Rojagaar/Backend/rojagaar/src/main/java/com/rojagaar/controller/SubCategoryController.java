package com.rojagaar.controller;

import com.rojagaar.model.SubCategory;
import com.rojagaar.payload.ApiResponse;
import com.rojagaar.payload.SubCategoryDto;
import com.rojagaar.services.SubCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/subCategory/")
public class SubCategoryController {
    @Autowired
    private SubCategoryService subCategoryService;

    @PostMapping("create")
    public ResponseEntity<ApiResponse> createSubCategory(@RequestBody SubCategoryDto subCategoryDto, @RequestParam String categoryName) {
        this.subCategoryService.createSubCategory(subCategoryDto,categoryName);
        return new ResponseEntity<>(new ApiResponse("SubCategory created Successfully"), HttpStatus.CREATED);
    }

    @PutMapping("update")
    public ResponseEntity<ApiResponse> updateCategory(@RequestBody SubCategoryDto subCategoryDto,String subCategoryName) {
        this.subCategoryService.updateSubCategory(subCategoryDto,subCategoryName);
        return new ResponseEntity<>(new ApiResponse("update successfully"),HttpStatus.OK);
    }

    @GetMapping("getAllSubCategory")
    public ResponseEntity<List<SubCategory>> getAllSubCategory() {
        List<SubCategory> subCategories = this.subCategoryService.getAllSubCategory();
        return new ResponseEntity<>(subCategories,HttpStatus.FOUND);
    }

    @DeleteMapping("delete")
    public ResponseEntity<ApiResponse> deleteSubCategory(@RequestParam String subCategoryName) {
        this.subCategoryService.delteSubCategory(subCategoryName);
        return new ResponseEntity<>(new ApiResponse("Delete Successfully"),HttpStatus.OK);
    }

    @GetMapping("getSubCategoryAccordingCategory")
    public ResponseEntity<List<SubCategory>> getSubCategoryAccorCategory(@RequestParam String categoryName) {
        List<SubCategory> subCategories = this.subCategoryService.getAllSubCategoryAccordingToCategory(categoryName);
        return new ResponseEntity<>(subCategories,HttpStatus.FOUND);
    }
}

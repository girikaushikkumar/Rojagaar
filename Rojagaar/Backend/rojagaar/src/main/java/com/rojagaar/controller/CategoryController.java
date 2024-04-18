package com.rojagaar.controller;

import com.rojagaar.payload.ApiResponse;
import com.rojagaar.payload.CategoryDto;
import com.rojagaar.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse> createCategory(@RequestBody CategoryDto categoryDto) {
        ApiResponse apiResponse = this.categoryService.createCategory(categoryDto);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<ApiResponse> updateCategory(@RequestBody CategoryDto categoryDto,@RequestParam String categoryName) {
        this.categoryService.updateCategory(categoryDto,categoryName);
        return new ResponseEntity<>(new ApiResponse("Update Successfully"),HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<ApiResponse> deleteCategory(@RequestParam String categoryName) {
        this.categoryService.deleteCategory(categoryName);
        return new ResponseEntity<>(new ApiResponse("Deleted successfully"),HttpStatus.OK);
    }

    @GetMapping("/getAllCategory")
    public ResponseEntity<List<CategoryDto>> getAllCategory() {
        List<CategoryDto> categoryDtos = this.categoryService.getAllCategory();
        return new ResponseEntity<>(categoryDtos,HttpStatus.OK);
    }
}

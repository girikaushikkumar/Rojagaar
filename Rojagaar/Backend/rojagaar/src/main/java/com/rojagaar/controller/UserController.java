package com.rojagaar.controller;

import com.rojagaar.payload.ApiResponse;
import com.rojagaar.payload.UserDto;
import com.rojagaar.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/user/")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("createUser")
    public ResponseEntity<ApiResponse> createUser(@RequestBody UserDto userDto) {
        ApiResponse apiResponse = this.userService.createUser(userDto);
        return new ResponseEntity<>(apiResponse, HttpStatus.CREATED);
    }

    @PutMapping("updateUser")
    public ResponseEntity<ApiResponse> updateUser(@RequestBody UserDto userDto,@RequestParam String userName) {
        this.userService.updateUser(userDto,userName);
        return new ResponseEntity<>(new ApiResponse("Updated successfully"),HttpStatus.OK);
    }

    @DeleteMapping("deleteUser")
    public ResponseEntity<ApiResponse> deleteUser(@RequestParam String userName) {
        this.userService.deleteUser(userName);
        return new ResponseEntity<>(new ApiResponse("Deleted Successfully"),HttpStatus.OK);
    }

    @GetMapping("getUserDetailsByUserName")
    public ResponseEntity<UserDto> getUserDetailsByUserName(@RequestParam String userName) {
        UserDto userDto = this.userService.getUserDetails(userName);
        return new ResponseEntity<>(userDto,HttpStatus.FOUND);
    }

    @GetMapping("getAllUser")
    public ResponseEntity<List<UserDto>> getAllUser() {
        List<UserDto> userDtos = this.userService.getAllUser();
        return new ResponseEntity<>(userDtos,HttpStatus.FOUND);
    }
}

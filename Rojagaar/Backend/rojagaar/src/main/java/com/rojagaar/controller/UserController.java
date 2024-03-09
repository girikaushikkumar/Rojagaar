package com.rojagaar.controller;

import com.rojagaar.model.User;
import com.rojagaar.payload.ApiResponse;
import com.rojagaar.payload.UserDto;
import com.rojagaar.payload.auth.JwtAuthRequest;
import com.rojagaar.payload.auth.JwtAuthResponse;
import com.rojagaar.security.JwtHelper;
import com.rojagaar.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/user/")
@Validated
public class UserController {


    @Autowired
    private JwtHelper jwtHelper;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("createUser")
    public ResponseEntity<?> createUser(@Valid @RequestBody UserDto userDto , BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            // If there are validation errors, return them in the response
            Map<String, String> errors = new HashMap<>();

            for (FieldError error : bindingResult.getFieldErrors()) {
                errors.put(error.getField(), error.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errors);

        }
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

    @PostMapping("register")
    public ResponseEntity<ApiResponse> registerUser(@RequestParam String userName,@RequestParam String password) {
        UserDto userDto = new UserDto();
        userDto.setUserName(userName);
        userDto.setPassword(password);
        boolean checkUser = this.userService.checkUserName(userDto);
        if(checkUser) {
            return new ResponseEntity<>(new ApiResponse("Username already exists. Please choose a different username."), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(new ApiResponse("Registration successful"),HttpStatus.CREATED);
        }
    }

//    @PostMapping("login")
//    public ResponseEntity<UserDto> loginUser(@RequestParam String userName,@RequestParam String password) {
//        System.out.println("dfdf");
//        UserDto userDto = this.userService.LoginUser(userName,password);
//        return new ResponseEntity<>(userDto,HttpStatus.OK);
//    }

    @PostMapping("/login")
    public ResponseEntity<JwtAuthResponse> createToken(@RequestBody JwtAuthRequest request){

        this.doAuthenticate(request.getUserName(), request.getPassword());


        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUserName());
        System.out.println(userDetails.getUsername()+" "+userDetails.getPassword());
        String token = this.jwtHelper.generateToken(userDetails);

        JwtAuthResponse response = new JwtAuthResponse();
        response.setToken(token);
        System.out.println(token);
        response.setMessage("User successfully logged in");
        UserDto user = this.userService.getUserDetails(request.getUserName());

        response.setUser(user);
        return new ResponseEntity<>(response, HttpStatus.OK);

    }

    private void doAuthenticate(String email, String password) {

        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, password);
        try {
            authenticationManager.authenticate(authentication);


        } catch (BadCredentialsException e) {
            throw new BadCredentialsException(" Invalid Username or Password  !!");
        }

    }




}

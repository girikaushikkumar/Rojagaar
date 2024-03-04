package com.rojagaar.payload.auth;

import com.rojagaar.model.User;
import com.rojagaar.payload.UserDto;
import lombok.Data;

@Data
public class JwtAuthResponse {
    private  String token;
    private String message;
    private UserDto user;
}

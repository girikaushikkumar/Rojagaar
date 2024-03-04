package com.rojagaar.services;

import com.rojagaar.payload.ApiResponse;
import com.rojagaar.payload.UserDto;

import java.util.List;

public interface UserService {
    public ApiResponse createUser(UserDto userDto);
    public void updateUser(UserDto userDto,String userName);
    public void deleteUser(String userName);
    public UserDto getUserDetails(String userName);

    public List<UserDto> getAllUser();

    public UserDto LoginUser(String userName, String password);
    public boolean checkUserName(UserDto userDto);
}

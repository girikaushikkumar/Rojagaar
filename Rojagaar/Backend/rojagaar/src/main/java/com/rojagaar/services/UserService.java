package com.rojagaar.services;

import com.rojagaar.model.Address;
import com.rojagaar.model.User;
import com.rojagaar.payload.ApiResponse;
import com.rojagaar.payload.Skills;
import com.rojagaar.payload.UserDto;

import java.util.List;

public interface UserService {
    public ApiResponse createUser(UserDto userDto);
    public UserDto updateUser(UserDto userDto,String userName);
    public void deleteUser(String userName);
    public UserDto getUserDetails(String userName);

    public List<UserDto> getAllUser();

    public User LoginUser(String userName, String password);
    public boolean checkUserName(UserDto userDto);

    public UserDto setSkills(List<Skills> skills, String userName);

    public UserDto updateLocation(Address address,String userName);

}

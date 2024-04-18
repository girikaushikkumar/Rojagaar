package com.rojagaar.services.serviceImpl;

import com.rojagaar.exception.ResourceNotFoundException;
import com.rojagaar.model.Address;
import com.rojagaar.model.User;
import com.rojagaar.payload.ApiResponse;
import com.rojagaar.payload.Skills;
import com.rojagaar.payload.UserDto;
import com.rojagaar.repository.UserRepo;
import com.rojagaar.services.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public ApiResponse createUser(UserDto userDto) {
        Optional<User> checkUserName = this.userRepo.findByUserName(userDto.getUserName());
        Optional<User> checkUserEmail = this.userRepo.findByEmail(userDto.getEmail());
        Optional<User> checkUserPhone = this.userRepo.findByPhoneNo(userDto.getPhoneNo());
        if(checkUserName.isPresent() )
            return new ApiResponse("User Already exist");
        else if (checkUserPhone.isPresent())
            return new ApiResponse("User Already exist");
        else if (checkUserEmail.isPresent())
            return new ApiResponse("User Already exist");
        else {
            User user = this.dtoToUser(userDto);
            user.setPassword(passwordEncoder.encode(userDto.getPassword()));
            this.userRepo.save(user);
            return new ApiResponse("User Created Successfully");
        }
    }

    @Override
    public UserDto updateUser(UserDto userDto, String userName) {
        User user = this.userRepo.findByUserName(userName).orElseThrow(()->new ResourceNotFoundException("User","UserName",userName));
        user.setAge(userDto.getAge());
        user.setEmail(userDto.getEmail());
        user.setName(userDto.getName());
        user.setGender(userDto.getGender());
        user.setPhoneNo(userDto.getPhoneNo());
        User updatedUser = this.userRepo.save(user);
        UserDto userDto1 = this.userToDto(updatedUser);
        userDto1.setUserName(updatedUser.getUsername());

        return userDto1;
    }

    @Override
    public void deleteUser(String userName) {
        User user = this.userRepo.findByUserName(userName).orElseThrow(()->new ResourceNotFoundException("User","UserName",userName));
        this.userRepo.delete(user);
    }

    @Override
    public UserDto getUserDetails(String userName) {
        User user = this.userRepo.findByUserName(userName).orElseThrow(()->new ResourceNotFoundException("User","UserName",userName));
        UserDto userDto = this.userToDto(user);
        userDto.setUserName(user.getUsername());
        return userDto;
    }

    @Override
    public List<UserDto> getAllUser() {
        List<User> users = this.userRepo.findAll();
        List<UserDto> userDtos = users.stream().map(user->this.userToDto(user)).collect(Collectors.toList());
        return userDtos;
    }

    @Override
    public User LoginUser(String userName, String password) {
        User user = this.userRepo.findByUserNameAndPassword(userName, password)
                .orElseThrow(() -> new ResourceNotFoundException("check userName and password"));


        return user;
    }

    @Override
    public boolean checkUserName(UserDto userDto) {
        Optional<User> user = this.userRepo.findByUserName(userDto.getUserName());
        if(user.isPresent())
            return true;
        else{
            User user1 = this.dtoToUser(userDto);
            user1.setPassword(this.passwordEncoder.encode(user1.getPassword()));
            this.userRepo.save(user1);
            return false;
        }

    }

    @Override
    public UserDto setSkills(List<Skills> skills, String userName) {
        User user = this.userRepo.findByUserName(userName).orElseThrow(()->new ResourceNotFoundException("User","UserName",userName));

        user.setSkills(skills);
        User updatedUser = this.userRepo.save(user);
        UserDto userDto = this.userToDto(updatedUser);
        userDto.setUserName(updatedUser.getUsername());
        return userDto;
    }

    @Override
    public UserDto updateLocation(Address address, String userName) {
        User user = this.userRepo.findByUserName(userName).orElseThrow(()->new ResourceNotFoundException("User","UserName",userName));
        user.setAddress(address);
        User updatedUser = this.userRepo.save(user);
        UserDto userDto = this.userToDto(updatedUser);
        userDto.setUserName(updatedUser.getUsername());
        return userDto;
    }


    public User dtoToUser(UserDto userDto) {
        User user = this.modelMapper.map(userDto,User.class);
        return user;
    }

    public UserDto userToDto(User user) {
        UserDto userDto = this.modelMapper.map(user,UserDto.class);
        return userDto;
    }

}

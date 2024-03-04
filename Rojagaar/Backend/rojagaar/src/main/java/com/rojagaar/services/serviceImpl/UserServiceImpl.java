package com.rojagaar.services.serviceImpl;

import com.rojagaar.exception.ResourceNotFoundException;
import com.rojagaar.model.User;
import com.rojagaar.payload.ApiResponse;
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
            this.userRepo.save(user);
            return new ApiResponse("User Created Successfully");
        }
    }

    @Override
    public void updateUser(UserDto userDto, String userName) {
        User user = this.userRepo.findByUserName(userName).orElseThrow(()->new ResourceNotFoundException("User","UserName",userName));
        user.setAge(userDto.getAge());
        user.setSkill(userDto.getSkill());
        user.setEmail(userDto.getEmail());
        user.setName(userDto.getName());
        user.setAddress(userDto.getAddress());
        this.userRepo.save(user);
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
    public UserDto LoginUser(String userName, String password) {
        System.out.println("hii");
        User user = this.userRepo.findByUserNameAndPassword(userName, password)
                .orElseThrow(() -> new ResourceNotFoundException("check userName and password"));

        UserDto userDto = this.userToDto(user);
        return userDto;
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

    public User dtoToUser(UserDto userDto) {
        User user = this.modelMapper.map(userDto,User.class);
        return user;
    }

    public UserDto userToDto(User user) {
        UserDto userDto = this.modelMapper.map(user,UserDto.class);
        return userDto;
    }

}

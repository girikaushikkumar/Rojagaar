package com.rojagaar.services.serviceImpl;

import com.rojagaar.model.User;
import com.rojagaar.payload.PotentialEmployee;
import com.rojagaar.repository.UserRepo;
import com.rojagaar.services.PotentialEmployeeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PotentialEmployeeServiceImpl implements PotentialEmployeeService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public List<PotentialEmployee> getEmployeeByRole(String role) {
        List<User> users = this.userRepo.findBySkillOrSubSkill(role);
        List<PotentialEmployee> potentialEmployees = users.stream().
                map((user)-> this.modelMapper.map(
                user,PotentialEmployee.class
        )).collect(Collectors.toList());

        return potentialEmployees;
    }

    @Override
    public List<PotentialEmployee> getAllEmployee() {
        List<User> users = this.userRepo.findAll();
        List<PotentialEmployee> potentialEmployees = users.stream().
                map((user)-> this.modelMapper.map(
                        user,PotentialEmployee.class
                )).collect(Collectors.toList());
        return potentialEmployees;
    }
}
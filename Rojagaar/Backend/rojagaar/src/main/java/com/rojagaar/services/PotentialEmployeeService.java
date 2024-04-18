package com.rojagaar.services;

import com.rojagaar.payload.PotentialEmployee;

import java.util.List;

public interface PotentialEmployeeService {
    List<PotentialEmployee> getEmployeeByRole(String Role);
    List<PotentialEmployee> getAllEmployee();

}

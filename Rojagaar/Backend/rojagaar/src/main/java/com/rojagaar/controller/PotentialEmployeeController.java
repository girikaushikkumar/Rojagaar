package com.rojagaar.controller;

import com.rojagaar.payload.PotentialEmployee;
import com.rojagaar.services.PotentialEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/potentialEmployee/")
public class PotentialEmployeeController {
    @Autowired
    private PotentialEmployeeService potentialEmployeeService;


    @GetMapping("getAllEmployee")
    public ResponseEntity<List<PotentialEmployee>> getAllEmployee() {
        List<PotentialEmployee> potentialEmployees = this.potentialEmployeeService.getAllEmployee();
        return new ResponseEntity<>(potentialEmployees,HttpStatus.OK);
    }

    @GetMapping("getEmployeeByRole/{role}")
    public ResponseEntity<List<PotentialEmployee>> getEmployeeByRole(@PathVariable String role) {
        List<PotentialEmployee> potentialEmployees = this.potentialEmployeeService.getEmployeeByRole(role);
        return new ResponseEntity<>(potentialEmployees, HttpStatus.OK);
    }
}

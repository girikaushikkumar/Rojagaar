package com.rojagaar.payload;

import com.rojagaar.model.Application;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobStatus {
    private UserDto userDto;
    private Application application;
}

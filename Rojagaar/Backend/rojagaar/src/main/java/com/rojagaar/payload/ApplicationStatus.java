package com.rojagaar.payload;

import com.rojagaar.model.Application;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApplicationStatus {
    private Application application;
    private JobDetailsResponse jobDetailsResponse;
}

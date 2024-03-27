package com.rojagaar.services.serviceImpl;

import com.rojagaar.model.Application;
import com.rojagaar.payload.ApiResponse;
import com.rojagaar.payload.ApplicationDto;
import com.rojagaar.repository.ApplicationRepo;
import com.rojagaar.services.ApplicationService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApplicationServiceImpl implements ApplicationService {

    @Autowired
    private ApplicationRepo applicationRepo;
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public ApiResponse applyForJob(ApplicationDto applicationDto) {
        if(this.applicationRepo.findByUserIdAndJobId(applicationDto.getUserId(),applicationDto.getJobId()).isPresent()) {
            return new ApiResponse("already applied");
        }
        this.applicationRepo.save(this.dtoToApplication(applicationDto));
        return new ApiResponse("Applied Successfully");
    }

    public Application dtoToApplication(ApplicationDto applicationDto) {
        return this.modelMapper.map(applicationDto,Application.class);
    }

    public ApplicationDto applicationToDto(Application application) {
        return this.modelMapper.map(application,ApplicationDto.class);
    }
}

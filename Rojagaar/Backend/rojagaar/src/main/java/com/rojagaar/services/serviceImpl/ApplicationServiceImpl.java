package com.rojagaar.services.serviceImpl;

import com.rojagaar.exception.ResourceNotFoundException;
import com.rojagaar.model.Application;
import com.rojagaar.model.Job;
import com.rojagaar.model.User;
import com.rojagaar.payload.*;
import com.rojagaar.repository.ApplicationRepo;
import com.rojagaar.repository.JobCartRepo;
import com.rojagaar.repository.JobRepo;
import com.rojagaar.repository.UserRepo;
import com.rojagaar.services.ApplicationService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ApplicationServiceImpl implements ApplicationService {

    @Autowired
    private ApplicationRepo applicationRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private JobRepo jobRepo;

    @Autowired
    private UserRepo userRepo;
    @Override
    public ApiResponse applyForJob(ApplicationDto applicationDto) {
        if(this.applicationRepo.findByUserIdAndJobId(applicationDto.getUserId(),applicationDto.getJobId()).isPresent()) {
            return new ApiResponse("already applied");
        }
        this.applicationRepo.save(this.dtoToApplication(applicationDto));
        return new ApiResponse("Applied Successfully");
    }

    @Override
    public List<ApplicationStatus> getApplicationStatus(String userId) {
        Optional<List<Application>> OptionalApplication = this.applicationRepo.findByUserId(userId);
        if(OptionalApplication.isPresent()) {
            List<ApplicationStatus> applicationStatuses = new ArrayList<>();
            List<Application> application = OptionalApplication.get();
            for(Application app : application) {
                Optional<Job> OptionalJob = this.jobRepo.findById(app.getJobId());
                if (OptionalJob.isPresent()) {
                    Job job = OptionalJob.get();
                    ApplicationStatus applicationStatus = new ApplicationStatus();
                    applicationStatus.setApplication(app); //set application
                    //now set the JobDetailsRespose
                    JobDetailsResponse jobDetailsResponse = new JobDetailsResponse();
                    jobDetailsResponse.setJobDto(modelMapper.map(job, JobDto.class));
                    User user = this.userRepo.findByUserName(job.getJobPosterId()).get();
                    jobDetailsResponse.setJobPosterName(user.getName());
                    jobDetailsResponse.setJobPosterPhoto(user.getPhoto());
                    applicationStatus.setJobDetailsResponse(jobDetailsResponse);
                    applicationStatuses.add(applicationStatus);
                }
            }
            return applicationStatuses;
        }
        return null;
    }

    @Override
    public List<JobStatus> getUserDetails(String jobId) {
//        System.out.println(jobId);
        Optional<List<Application>> OptionalApplications = this.applicationRepo.findByJobId(jobId);
        if (OptionalApplications.isPresent()) {
            List<JobStatus> jobStatuses = new ArrayList<>();
            List<Application> applications = OptionalApplications.get();

            for(Application application : applications) {
//                System.out.println(userId+"   hiii");
                Optional<User> OptionalUser = this.userRepo.findByUserName(application.getUserId());
                if (OptionalUser.isPresent()) {
                    JobStatus jobStatus = new JobStatus();
                    jobStatus.setApplication(application);
                    User user = OptionalUser.get();
                    jobStatus.setUserDto(this.modelMapper.map(user, UserDto.class));
                    jobStatuses.add(jobStatus);
                }
            }

            return jobStatuses;
        } else
             return null;
    }

    @Override
    public void updateApplicationStatus(String id,String status) {
        Application application = this.applicationRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Application","id",id));
        application.setStatus(status);
        this.applicationRepo.save(application);
    }


    public Application dtoToApplication(ApplicationDto applicationDto) {
        return this.modelMapper.map(applicationDto,Application.class);
    }

    public ApplicationDto applicationToDto(Application application) {
        return this.modelMapper.map(application,ApplicationDto.class);
    }
}

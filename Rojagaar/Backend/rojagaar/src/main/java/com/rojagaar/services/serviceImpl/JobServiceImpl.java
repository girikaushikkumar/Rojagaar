package com.rojagaar.services.serviceImpl;

import com.rojagaar.model.Job;
import com.rojagaar.model.User;
import com.rojagaar.payload.JobDetailsResponse;
import com.rojagaar.payload.JobDto;
import com.rojagaar.repository.JobRepo;
import com.rojagaar.repository.UserRepo;
import com.rojagaar.services.JobService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class JobServiceImpl implements JobService {
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private JobRepo jobRepo;

    @Autowired
    private UserRepo userRepo;
    @Override
    public void createJob(JobDto jobDto) {
        Job job = this.dtoToJob(jobDto);
        this.jobRepo.save(job);
    }

    @Override
    public List<JobDetailsResponse> getAllJob() {
        List<Job> jobs = this.jobRepo.findAll();
        List<JobDto> jobDtos = jobs.stream().map(job -> this.jobToDto(job)).collect(Collectors.toList());
        List<JobDetailsResponse> jobDetailsResponses = jobDtos.stream().map(
                jobDto -> {
                    JobDetailsResponse jobDetailsResponse = new JobDetailsResponse();
                    jobDetailsResponse.setJobDto(jobDto);
                    User user = this.userRepo.findByUserName(jobDto.getJobPosterId()).get();
                    jobDetailsResponse.setJobPosterName(user.getName());
                    jobDetailsResponse.setJobPosterPhoto(user.getPhoto());
                    return jobDetailsResponse;
                }
        ).collect(Collectors.toList());
        return jobDetailsResponses;
    }

    public Job dtoToJob(JobDto jobDto) {
        Job job = this.modelMapper.map(jobDto,Job.class);
        return job;
    }

    public JobDto jobToDto(Job job) {
        JobDto jobDto = this.modelMapper.map(job,JobDto.class);
        return jobDto;
    }
}

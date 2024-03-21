package com.rojagaar.services.serviceImpl;

import com.rojagaar.model.Job;
import com.rojagaar.model.JobCart;
import com.rojagaar.model.User;
import com.rojagaar.payload.ApiResponse;
import com.rojagaar.payload.JobCartDto;
import com.rojagaar.payload.JobDetailsResponse;
import com.rojagaar.payload.JobDto;
import com.rojagaar.repository.JobCartRepo;
import com.rojagaar.repository.JobRepo;
import com.rojagaar.repository.UserRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class JobCartServiceImpl {

    @Autowired
    private JobCartRepo jobCartRepo;
    @Autowired
    private JobRepo jobRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private UserRepo userRepo;

    public ApiResponse addJobToCart(JobCartDto jobCart) {
        Optional<JobCart> existingJobCart = jobCartRepo.findByJobSeekerId(jobCart.getJobSeekerId());

        if (existingJobCart.isPresent()) {
            JobCart savedJobCart = existingJobCart.get();
            List<String> jobIds = savedJobCart.getJobId();
            if (!jobIds.contains(jobCart.getJobId())) {
                jobIds.add(jobCart.getJobId());
                savedJobCart.setJobId(jobIds);
                jobCartRepo.save(savedJobCart);
            } else {

                return new ApiResponse("Job already exists in the cart");
            }
        } else {
            JobCart newJobCart = new JobCart();
            newJobCart.setJobSeekerId(jobCart.getJobSeekerId());
            List<String> jobIds = new ArrayList<>();
            jobIds.add(jobCart.getJobId());
            newJobCart.setJobId(jobIds);
            jobCartRepo.save(newJobCart);
        }

        return new ApiResponse("Job added Successfully");
    }

    public List<JobDetailsResponse> getCardDetials(String userName) {
        Optional<JobCart> jobCart = this.jobCartRepo.findByJobSeekerId(userName);
        List<Job> jobs = new ArrayList<>();
        if(jobCart.isPresent()) {
            List<String> jobId = jobCart.get().getJobId();
            for(String id:jobId) {
                Optional<Job> job = jobRepo.findById(id);
                if(job.isPresent()) {
                    jobs.add(job.get());
                }
            }
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
        return null;
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

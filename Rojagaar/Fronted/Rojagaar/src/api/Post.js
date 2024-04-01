import axios from 'axios';

const API_BASE_URL = 'http://192.168.42.244:8080/api';

export const getAllJob = async () => {
  const response = await axios.get(`${API_BASE_URL}/job/getAllJob`);
  return response;
};


export const postJob = async (
  title,
  description,
  category,
  subCategory,
  location,
  Wage,
  workingTime,
  jobPostedDate,
  workingDate,
  noOfPeople,
  team,
  jobPosterId,
) => {
  const response = await axios.post(`${API_BASE_URL}/job/createJob`, {
    title,
    description,
    category,
    subCategory,
    location,
    Wage,
    workingTime,
    jobPostedDate,
    workingDate,
    noOfPeople,
    team,
    jobPosterId,
  });
  return response;
};

export const getJobByUserId = async(jobPosterId) => {
  const response = await axios.get(`${API_BASE_URL}/job/getJobByUserId/${jobPosterId}`);
  return response;
}

export const applyJob = async( userId,jobId,applicationDate,status) => {
  const response = await axios.post(`${API_BASE_URL}/application/applyForJob`,{
    userId,
    jobId,
    applicationDate,
    status
  });
  return response;
};

export const jobStatus = async(userId) => {
  const response = await axios.get(`${API_BASE_URL}/application/getApplicationStatus/${userId}`);
  return response;
}

export const getJobSeekerDetails = async(jobId) => {
  const response = await axios.get(`${API_BASE_URL}/application/getJobSeekerDetails/${jobId}`);
  return response;
}
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


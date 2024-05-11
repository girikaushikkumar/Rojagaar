import axios from 'axios';

// const API_BASE_URL = 'http://192.168.42.244:8080/api';
const API_BASE_URL = 'https://rojagaar-backend.onrender.com/api';


export const getAllJob = async () => {
  const response = await axios.get('/job/getAllJob');
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
  const response = await axios.post('/job/createJob', {
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
  const response = await axios.get(`/job/getJobByUserId/${jobPosterId}`);
  return response;
}


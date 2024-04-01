import axios from "axios";
const API_BASE_URL = 'http://192.168.42.244:8080/api';


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
  };
  
  export const getJobSeekerDetails = async(jobId) => {
    const response = await axios.get(`${API_BASE_URL}/application/getJobSeekerDetails/${jobId}`);
    return response;
  };

  export const updateJobStatus = async(id,status) => {
    const response = await axios.put(`${API_BASE_URL}/application/updateApplicationStatus/${id}/${status}`);
    return response;
  }
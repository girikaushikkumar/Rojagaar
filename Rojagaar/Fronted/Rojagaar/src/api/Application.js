import axios from "axios";

// const API_BASE_URL = 'http://192.168.42.244:8080/api';
// const API_BASE_URL = 'https://rojagaar-backend.onrender.com/api';


export const applyJob = async( userId,jobId,applicationDate,status) => {
    const response = await axios.post('/application/applyForJob',{
      userId,
      jobId,
      applicationDate,
      status
    }
    
  );
    return response;
  };
  
  export const getJobStatus = async(userId) => {
    const response = await axios.get(`/application/getApplicationStatus/${userId}`);
    return response;
  };
  
  export const getJobSeekerDetails = async(jobId) => {
    const response = await axios.get(`/application/getJobSeekerDetails/${jobId}`);
    return response;
  };

  export const updateJobStatus = async(id,status) => {
    const response = await axios.put(`/application/updateApplicationStatus/${id}/${status}`);
    return response;
  }
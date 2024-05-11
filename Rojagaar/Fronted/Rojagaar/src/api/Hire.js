import axios from 'axios';

// const API_BASE_URL = 'https://rojagaar-backend.onrender.com/api';


export const getAllEmployee = async (district,skill) => {
  const response = await axios.get(
    '/potentialEmployee/getEmployeeByAddressAndSkill',
  );
  return response;
};
export const getEmployeeByAddressAndSkill = async (district,skill) => {
  const response = await axios.get(
    `/potentialEmployee/getEmployeeByAddressAndSkill/${district}/${skill}`,
  );
  return response;
};

export const sendJobInvitation = async (
  recruiter,
  recruiterName,
  recruiterPhoto,
  contactNo,
  address,
  description,
  jobInviteDate,
  status,
  potentialEmployee,
) => {
  const response = await axios.post('/jobInvite/sendInvite', {
    recruiter,
    recruiterName,
    recruiterPhoto,
    contactNo,
    address,
    description,
    jobInviteDate,
    status,
    potentialEmployee,
  });
  return response;
};

export const findAllInvitationByUserName = async username => {
  const response = await axios.get(
    `/jobInvite/findAllInvitationByUserName/${username}`,
  );
  return response;
};

export const updateJobInvitationStatus = async(id,status) => {
  const response = await axios.put(
    `/jobInvite/updateJobInvitationStatus/${id}/${status}`);
  return response;
}

export const hireStatus = async(recruiterId,token) => {
  const response = await axios.get(`/jobInvite/HireStatus/${recruiterId}`);
  return response;
}

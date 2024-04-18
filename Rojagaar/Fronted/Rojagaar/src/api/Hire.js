import axios from 'axios';
const API_BASE_URL = 'http://192.168.42.244:8080/api';

export const getAllEmployee = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/potentialEmployee/getAllEmployee`,
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
  const response = await axios.post(`${API_BASE_URL}/jobInvite/sendInvite`, {
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
    `${API_BASE_URL}/jobInvite/findAllInvitationByUserName/${username}`,
  );
  return response;
};

export const updateJobInvitationStatus = async(id,status) => {
  const response = await axios.put(
    `${API_BASE_URL}/jobInvite/updateJobInvitationStatus/${id}/${status}`);
  return response;
}

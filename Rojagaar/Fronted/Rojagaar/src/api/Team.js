import axios from 'axios';

// const API_BASE_URL = 'http://192.168.42.244:8080/api';
// const API_BASE_URL = 'https://rojagaar-backend.onrender.com/api';


export const createTeam = async (teamName, roles, leaderId) => {
  const response = await axios.post('/team/createTeam', {
    teamName,
    roles,
    leaderId,
  });
  return response;
};

export const getTeamInfo = async () => {
  const response = await axios.get('/team/getTeamInfo');
  return response;
};

export const joinRequest = async (teamId, userName) => {
  const response = await axios.post(
    `/team/joinRequest/${teamId}/${userName}`,
  );
  return response;
};

export const getTeamInfoByLeaderId = async leaderId => {
  const response = await axios.get(
    `/team/getTeamsByLeaderId/${leaderId}`,
  );
  return response;
};

export const addMember = async (teamId, memberId) => {
  const response = await axios.post(
    `/team/addMember/${teamId}/${memberId}`,
  );

  return response;
};

export const rejectRequest = async (teamId, memberId) => {
    const response = await axios.post(
      `/team/rejectRequest/${teamId}/${memberId}`,
    );
  
    return response;
  };

import axios from "axios";

const API_BASE_URL = 'http://192.168.42.244:8080/api';

export const createTeam = async(teamName,roles,leaderId) => {
    const response = await axios.post(`${API_BASE_URL}/team/createTeam`,{teamName,roles,leaderId});
    return response;
};

export const getTeamInfo = async() => {
    const response = await axios.get(`${API_BASE_URL}/team/getTeamInfo`);
    return response;
};

export const joinRequest = async(teamId,userName) => {
    const response = await axios.post(`${API_BASE_URL}/team/joinRequest/${teamId}/${userName}`);
    return response;
}
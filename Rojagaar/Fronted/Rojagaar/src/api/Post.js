import axios from "axios";

const API_BASE_URL = 'http://192.168.42.244:8080/api';

export const getAllJob = async () => {
    const response =  await axios.get(`${API_BASE_URL}/job/getAllJob`);
    return response;
}
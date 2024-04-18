import axios from "axios";
const API_BASE_URL = 'http://192.168.42.244:8080/api';


export const getAllEmployee = async() => {
    const response = await axios.get(`${API_BASE_URL}/potentialEmployee/getAllEmployee`);
    return response;
}
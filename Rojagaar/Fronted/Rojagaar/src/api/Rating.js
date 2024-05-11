import axios from "axios";
// const API_BASE_URL = 'http://192.168.42.244:8080/api';
// const API_BASE_URL = 'https://rojagaar-backend.onrender.com/api';


export const getRatingByUserId = async(userId) => {
    const response = await axios.get(`/rating/getRatingByUserId/${userId}`);
    return response;
}

export const addRating = async(userId,ratingValue) => {
    const response = await axios.post(`/rating/addRating/${userId}/${ratingValue}`);
    return response;
}
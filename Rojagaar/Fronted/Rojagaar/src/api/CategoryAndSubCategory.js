import axios from "axios";
// const API_BASE_URL = 'http://192.168.42.244:8080/api';
// const API_BASE_URL = 'https://rojagaar-backend.onrender.com/api';


export const getCategory= async() => {
    const response = await axios.get('/category/getAllCategory');
    console.log(response.data);
    return response;
}

export const getSubCategoryAccordingCategory = async(categoryId) => {
    const response = await axios.get(`/subCategory/getSubCategoryAccordingCategory/${categoryId}`);
    return response;
}
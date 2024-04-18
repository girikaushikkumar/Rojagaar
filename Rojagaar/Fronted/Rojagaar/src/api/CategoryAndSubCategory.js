import axios from "axios";
const API_BASE_URL = 'http://192.168.42.244:8080/api';

export const getCategory= async() => {
    const response = await axios.get(`${API_BASE_URL}/category/getAllCategory`);
    console.log(response.data);
    return response;
}

export const getSubCategoryAccordingCategory = async(categoryId) => {
    const response = await axios.get(`${API_BASE_URL}/subCategory/getSubCategoryAccordingCategory/${categoryId}`);
    return response;
}
import axios from "axios";


const API_BASE_URL = 'http://192.168.42.244:8080/api';
 const registerUser = async(userName, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/user/register`, null, {
          params: {
            userName: userName,
            password: password
          }
        });
        return response;
       
      } catch (error) {
        throw error;
        console.log("Error:", error);
        alert("Registration failed: " + error.message);
        
      }
};

 const loginUser = async(userName, password) => {
    try {
        const response =  await axios.post(`${API_BASE_URL}/user/login`,{userName,password});
        console.log('response::: ', response);
        return response;

    } catch (error) {
      throw error;
    }
};

const getImage = async (imageId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/image/retrieve`, {
      params: { imageId }
    });
    return response.data.uri; // Assuming the response.data contains the image URI
  } catch (error) {
    throw error;
  }
};




export {registerUser,loginUser,getImage};
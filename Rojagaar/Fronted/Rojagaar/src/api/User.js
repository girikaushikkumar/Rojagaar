import axios from "axios";


// const API_BASE_URL = 'http://192.168.42.244:8080/api';
// const API_BASE_URL = 'https://rojagaar-backend.onrender.com/api';

 const registerUser = async(userName, password) => {
    try {
        const response = await axios.post('/user/register', null, {
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
        const response =  await axios.post('/user/login',{userName,password});
        console.log('response::: ', response);
        return response;

    } catch (error) {
      throw error;
    }
};

const getImage = async (imageId) => {
  try {
    const response = await axios.get('/image/retrieve', {
      params: { imageId }
    });
    return response.data.uri; // Assuming the response.data contains the image URI
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (name,userName,phoneNo,email,age,gender) => {
  const response = await axios.put(`/user/updateUser/${userName}`,{name,phoneNo,email,age,gender});
  return response;
}

export const updateSkills = async (skills,userName) => {
  const response = await axios.put(`/user/updateUserSkill/${userName}`,skills);
  
  console.log(response.data);
  return response;
};

export const updateLocation = async (userName,village,district,tourism,road,state,pincode,country) => {
  const response = await axios.put(`/user/updateLocation/${userName}`,{village,district,tourism,road,state,pincode,country});
  return response;
}




export {registerUser,loginUser,getImage};
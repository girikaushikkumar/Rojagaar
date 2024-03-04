import axios from "axios";

const API_BASE_URL = 'http://192.168.42.235:8080/api';
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
        const {data} =  await axios.post(`${API_BASE_URL}/user/login`,null, {
            params: {
                userName:userName,
                password: password
            }
        });

        return {
          status: true,
          data
      };

    } catch (error) {
      console.log('Error in admin login: ', error.response.data.message);
      return {
          status: false,
          error
      };

    }
};

export {registerUser,loginUser};
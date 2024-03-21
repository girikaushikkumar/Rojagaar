import axios from 'axios';
import {Alert} from 'react-native';

const API_BASE_URL = 'http://192.168.42.244:8080/api';

const addJobToCart = async (JobId, JobSeekerId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/jobCart/addJob`, {
      JobId,
      JobSeekerId,
    });
    console.log(response.status);
    if (response.status == 200) Alert.alert(response.data.message);
    else Alert.alert('Internal problem');
    return response;
  } catch (error) {
    throw error;
  }
};

const getJobCartDetails = async (jobSeekerId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/jobCart/getCardDetails`, {
        params: {
          jobSeekerId: jobSeekerId,
        }
      });
    //   console.log(response.data);
      return response.data; // Assuming you want to return the response data
    } catch (error) {
      console.error('Error fetching job cart details:', error);
      throw error; // Re-throwing the error for handling at a higher level
    }
  };
  

export {addJobToCart,getJobCartDetails};

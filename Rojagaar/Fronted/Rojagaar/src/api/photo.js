import axios from 'axios';
const API_BASE_URL = 'http://192.168.42.244:8080/api';

export const uploadImage = async (image, id) => {
    try {
        const formData = new FormData();
        formData.append('image', image); // Assuming 'image' is the name expected by the server

        const response = await axios.post(
            `${API_BASE_URL}/photo/add`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                params: {
                    image:image,
                    id: id
                }
            }
        );
        return response.data; // Return response data
    } catch (error) {
        // Handle errors here
        console.error('Error uploading image:', error);
        throw error; // Rethrow the error for handling in the calling code
    }
}
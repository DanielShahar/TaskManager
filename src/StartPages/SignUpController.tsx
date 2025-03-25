import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Replace with your Flask API URL

export const signUpUser = async (username: string, email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message || 'Signup failed.');
    } else {
        throw new Error('An unexpected error occurred.');
    }

  }
};
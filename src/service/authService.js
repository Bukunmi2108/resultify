import axios from 'axios';


const API_BASE_URL = "http://localhost:8000/api/v1"; // backend's URL

const authService = {
  login: async (email, password) => {
    localStorage.removeItem('token');
    try {
      const response = await axios.post(`${API_BASE_URL}/user/login`, { email, password });
      localStorage.setItem('token', response.data.access_token); // Store token in local storage

      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  },

  adminLogin: async (email, password) => {
    localStorage.removeItem('token');
    try {
      const response = await axios.post(`${API_BASE_URL}/admin/login`, { email, password });
      localStorage.setItem('token', response.data.access_token); // Store token in local storage

      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  },

  register: async (userData) => {
    localStorage.removeItem('token');
    try {
      const response = await axios.post(`${API_BASE_URL}/user/signup`, userData);
      return response.data;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getToken: async() => {
    await new Promise(resolve => setTimeout(resolve, 2000)); 

    return localStorage.getItem('token');
  },

  getAuthHeader: async() => {
    const token = await authService.getToken();
    return {Authorization: `Bearer ${token}`}
  },

  // Helper function to set Authorization header in requests
  setAuthToken: async(config) => {
    const token = await authService.getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },

  getRole: async () => {
    const headers = await authService.getAuthHeader();

    try{
      const response = await axios.get(`${API_BASE_URL}/user/role`,
      {headers: headers}
      )
      return response.data
    } catch (error) {
      return error
    }
  },

  getUser: async() => {
    const headers = await authService.getAuthHeader();

    try{
      const response = await axios.get(`${API_BASE_URL}/user/profile`,
      {headers: headers}
      )
      return response.data
    } catch (error) {
      return error
    }
  },

  updateUser: async(userInfo) => {
    const headers = await authService.getAuthHeader();

    try {
        const response = await axios.put(`${API_BASE_URL}/user/update`, userInfo, {headers: headers});

        if (response.status !== 200) {
          alert('An Error occurred');
        } else {
          alert('Profile updated successfully!');
        }
        return response.data;
    } catch (error) {
        console.error("Update Error:", error)
        return error;
    }
  }
};

export default authService;
import axios from 'axios';
import authService from './authService';


const API_BASE_URL = "http://localhost:8000/api/v1"; // backend's URL

const userService = {
  getAllUser: async() => {
    const headers = await authService.getAuthHeader();

    try{
      const response = await axios.get(`${API_BASE_URL}/admin/get_all_users`,
      {headers: headers}
      )
      return response.data
    } catch (error) {
      return error
    }
  },

};

export default userService;
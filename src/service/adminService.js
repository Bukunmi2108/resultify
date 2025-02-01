import axios from 'axios';
import authService from './authService';


const API_BASE_URL = "http://localhost:8000/api/v1"; // backend's URL
const headers = await authService.getAuthHeader();
const exam_id_query = await authService.getUser();

const adminService = {
  allAdmin: async() => {
    const headers = await authService.getAuthHeader();

    try{
      const response = await axios.get(`${API_BASE_URL}/admin/all`,
      {headers: headers}
      )
      return response.data
    } catch (error) {
      return error
    }
  },

  createAdmin: async(AdminData) => {
    const headers = await authService.getAuthHeader();

    try{
      const response = await axios.post(`${API_BASE_URL}/admin/create/admin`, AdminData,
      {headers: headers}
      )
      return response.data
    } catch (error) {
      return error
    }
  },
};

export default adminService;
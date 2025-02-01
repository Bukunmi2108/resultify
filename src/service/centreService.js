import axios from 'axios';
import authService from './authService';


const API_BASE_URL = "http://localhost:8000/api/v1"; // backend's URL

const centreService = {
  getAllCentres: async() => {
    const headers = await authService.getAuthHeader();

    try{
      const response = await axios.get(`${API_BASE_URL}/admin/get_all_centres`,
      {headers: headers}
      )
      return response.data
    } catch (error) {
      return error
    }
  },

  allCentre: async() => {
    const headers = await authService.getAuthHeader();

    try{
      const response = await axios.get(`${API_BASE_URL}/centre/all`,
      {headers: headers}
      )
      return response.data
    } catch (error) {
      return error
    }
  },

  createCentre: async(centreInfo) => {
    const headers = await authService.getAuthHeader();

    try{
      const response = await axios.post(`${API_BASE_URL}/centre/create`, centreInfo,
      {headers: headers}
      )
      return response.data
    } catch (error) {
      return error
    }
  },

};

export default centreService;
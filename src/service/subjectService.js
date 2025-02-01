import axios from 'axios';
import authService from './authService';


const API_BASE_URL = "http://localhost:8000/api/v1"; // backend's URL

const subjectService = {
  getAllSubjects: async() => {
    const headers = await authService.getAuthHeader();

    try{
      const response = await axios.get(`${API_BASE_URL}/subject/all`,
      {headers: headers}
      )
      return response.data
    } catch (error) {
      return error
    }
  },

  createSubject: async(subject) => {
    const headers = await authService.getAuthHeader();

    try{
      const response = await axios.post(`${API_BASE_URL}/subject/create`, subject,
      {headers: headers}
      )
      return response.data
    } catch (error) {
      return error
    }
  },

};

export default subjectService;
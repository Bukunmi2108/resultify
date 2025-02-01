import axios from 'axios';
import authService from './authService';


const API_BASE_URL = "http://localhost:8000/api/v1"; // backend's URL
const headers = await authService.getAuthHeader();
const exam_id_query = await authService.getUser();

const studentService = {
  getStudent: async() => {
    const exam_id = exam_id_query.exam_id;

    if (!exam_id) {return 'No exam ID found'};
    try{
      const response = await axios.get(`${API_BASE_URL}/student/exam_id/${exam_id}`,
      {headers: headers}
      )
      
      return response.data
    } catch (error) {
      return error
    }
  },

  requestVerfication: async() => {
    const exam_id = exam_id_query.exam_id;

    if (!exam_id) {return 'No exam ID found'};
    try{
      const response = await axios.post(`${API_BASE_URL}/user/request_student_approval`, {},
      {headers: headers}
      )
      console.log(response.data);
      
      return response.data
    } catch (error) {
      return error
    }
  },
  
  confirmPayment: async() => {
    try{
      const response = await axios.patch(`${API_BASE_URL}/user/confirm_payments`, {},
      {headers: headers}
      )
      console.log(response.data);
      
      return response.data
    } catch (error) {
      return error
    }
  },

  getStudentResult: async() => {
    const exam_id = exam_id_query.exam_id;

    if (!exam_id) {return 'No exam ID found'};
    try{
      const response = await axios.get(`${API_BASE_URL}/user/get_student_result`,
      {headers: headers}
      )      
      return response.data
    } catch (error) {
      return error
    }
  },

  getAllStudents: async() => {
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

  allStudents: async() => {
    const headers = await authService.getAuthHeader();

    try{
      const response = await axios.get(`${API_BASE_URL}/student/all`,
      {headers: headers}
      )
      return response.data
    } catch (error) {
      return error
    }
  },

  createStudent: async(studentData) => {
    const headers = await authService.getAuthHeader();

    try{
      const response = await axios.post(`${API_BASE_URL}/student/create`, studentData,
      {headers: headers}
      )
      return response.data
    } catch (error) {
      return error
    }
  },
};

export default studentService;
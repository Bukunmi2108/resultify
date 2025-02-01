import { AddAdmin, AddCentre, AddStudent, AddSubject, AdminFeed, AdminLogin, AllAdmin, AllCentre, AllStudent, AllSubject, Feed, HomePage, Login, Profile, Result, Settings, Signup, UploadResult, ViewStudentResult } from "./pages"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> 

        {/* AUTHENTICATION */}
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/adminlogin" element={<AdminLogin />} /> 
        
        {/* USER */}
        <Route path="/feed" element={<Feed />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/settings" element={<Settings />} /> 
        <Route path="/result" element={<Result />} /> 
        
        {/* ADMIN */}
        <Route path="/adminfeed" element={<AdminFeed />} /> 
        <Route path="/addsubject" element={<AddSubject />} /> 
        <Route path="/allsubject" element={<AllSubject />} /> 
        <Route path="/addcentre" element={<AddCentre />} /> 
        <Route path="/allcentre" element={<AllCentre />} /> 
        <Route path="/addstudent" element={<AddStudent />} /> 
        <Route path="/allstudent" element={<AllStudent />} /> 
        <Route path="/addadmin" element={<AddAdmin />} /> 
        <Route path="/alladmin" element={<AllAdmin />} /> 
        <Route path="/uploadresult" element={<UploadResult />} /> 
        <Route path="/viewstudentresult" element={<ViewStudentResult />} /> 
      </Routes>
    </Router>
  )
}

export default App

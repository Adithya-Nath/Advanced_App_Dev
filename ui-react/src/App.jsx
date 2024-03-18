import React, { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ViewCourse from './pages/Admin/EditCourse';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Navbar from './components/Public/Navbar';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AddInstitute from './pages/Admin/AddInstitute';
import AddCourse from './pages/Admin/AddCourse';
import EditInstitute from './pages/Admin/EditInstitute';
import EditCourse from './pages/Admin/EditCourse';
import ViewStudents from './pages/Admin/ViewStudents';
import ViewInstitute from './pages/User/VewInstitute';
import EditAdmissionList from './pages/Admin/EditAdmissionList';
import ViewPayment from './pages/Admin/ViewPayment';




const App = () => {
    return (
        <>
       <BrowserRouter>
       <Routes>
             <Route path="/" element={<Login/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/register" element={<Register/>}/>
             <Route path="/navbar" element={<Navbar/>}/>
             <Route path="/home" element={<Home />} />
             <Route path="/institute" element={<ViewInstitute/>}/>
             <Route path="/course" element={<ViewCourse/>}/>

             <Route path="/adminDashboard" element={<AdminDashboard/>}/>
             <Route path="/addInstitute" element={<AddInstitute/>}/>
             <Route path="/addCourse" element={<AddCourse/>}/>
             <Route path="/editInstitute" element={<EditInstitute/>}/>
             <Route path="/editCourse" element={<EditCourse/>}/>
             <Route path="/studentList" element={<ViewStudents/>}/>
             <Route path="/editAdmissionList" element={<EditAdmissionList/>}/>
             <Route path="/viewPayment" element={<ViewPayment/>}/>
             

            </Routes>
       </BrowserRouter>
        </>
    )
}
export default App;
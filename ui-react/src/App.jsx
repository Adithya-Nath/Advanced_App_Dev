import React, { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ViewCourse from './pages/Admin/EditCourse';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

import Navbar from './components/Public/Navbar';
import UserNavbar from './components/Public/UserNavbar';
import Footer from './components/Public/Footer';
import Contact from './pages/Contact';
import AboutUsPage from './pages/Aboutus';
import NotFound from './pages/Error404';

import AdminDashboard from './pages/Admin/AdminDashboard';
import AddInstitute from './pages/Admin/AddInstitute';
import AddCourse from './pages/Admin/AddCourse';
import EditInstitute from './pages/Admin/EditInstitute';
import EditCourse from './pages/Admin/EditCourse';
import ViewStudents from './pages/Admin/ViewStudents';
import EditAdmissionList from './pages/Admin/EditAdmissionList';
import ViewPayment from './pages/Admin/ViewPayment';

import UserDashboard from './pages/User/UserDashboard';
import Enrollment from './pages/User/Enrollment';
import Payment from './pages/User/Payment';
import PaymentHistory from './pages/User/PaymentHistory';
import UserProfile from './pages/User/UserProfile';
import ViewInstitute from './pages/User/ViewInstitute';
import ViewCourses from './pages/User/ViewCourses';
import ViewAdmissionStatus from './pages/User/ViewAdmissionStatus';


const App = () => {
    return (
        <div>
        <>
       <BrowserRouter>
       <Routes>
             <Route path="/" element={<Login/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/register" element={<Register/>}/>
             <Route path="/navbar" element={<Navbar/>}/>
             <Route path="/userNavbar" element={<UserNavbar/>}/>
             <Route path="/footer" element={<Footer/>}/>
             <Route path="/aboutUs" element={<AboutUsPage/>}/>
             <Route path="/home" element={<Home />} />
             <Route path="/institute" element={<ViewInstitute/>}/>
             <Route path="/course" element={<ViewCourse/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/error" element={<NotFound/>}/>

             <Route path="/adminDashboard" element={<AdminDashboard/>}/>
             <Route path="/addInstitute" element={<AddInstitute/>}/>
             <Route path="/addCourse" element={<AddCourse/>}/>
             <Route path="/editInstitute" element={<EditInstitute/>}/>
             <Route path="/editCourse" element={<EditCourse/>}/>
             <Route path="/studentList" element={<ViewStudents/>}/>
             <Route path="/editAdmissionList" element={<EditAdmissionList/>}/>
             <Route path="/viewPayment" element={<ViewPayment/>}/>

             <Route path="/userDashboard" element={<UserDashboard/>}/>
             <Route path="/viewInstitute" element={<ViewInstitute/>}/>
             <Route path="/viewCourses" element={<ViewCourses/>}/>
             <Route path="/userProfile" element={<UserProfile/>}/>
             <Route path="/enrollment" element={<Enrollment/>}/>
             <Route path="/viewAdmissionStatus" element={<ViewAdmissionStatus/>}/>
             <Route path="/payment" element={<Payment/>}/>
             <Route path="/paymentHistory" element={<PaymentHistory/>}/>
             

            </Routes>
       </BrowserRouter>
        </>
       </div>
    )
}
export default App;
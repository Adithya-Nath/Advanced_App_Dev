import React, { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ViewCourse from './pages/Admin/ViewCourse';
const Home = lazy(() => import('./pages/Home'))
const Contact = lazy(() => import('./pages/Contact'))
const Login = lazy(() => import('./pages/Auth/Login'))
const Register = lazy(() => import('./pages/Auth/Register'))
const Navbar = lazy(() => import('./components/Public/Navbar'))
const ViewInstitute= lazy(() => import('./pages/Admin/ViewInstitute'))



const App = () => {
    return (
        <>
       <BrowserRouter>
       <Routes>
             <Route path="/" element={<Login/>}/>
             <Route path="/register" element={<Register/>}/>
             <Route path="/navbar" element={<Navbar/>}/>
             <Route path="/home" element={<Home />} />
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/institute" element={<ViewInstitute/>}/>
             <Route path="/course" element={<ViewCourse/>}/>
            </Routes>
       </BrowserRouter>
        </>
    )
}
export default App;
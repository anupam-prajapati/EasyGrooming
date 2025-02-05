import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import BarberLoginPage from '../pages/barber/barberLoginPage/BarberLoginPage';
import BarberRegisterPage from '../pages/barber/barberRegisterPage/BarberRegisterPage';
import BarberDashboard from '../pages/barber/barberDashboard/BarberDashboardPage';
import BarberShopProfile from '../pages/barber/barberShopProfile/BarberShopProfile';
import BarberDashboardPage from '../pages/barber/barberDashboard/BarberDashboardPage';
import BarberProfileEditPage from '../pages/barber/barberShopProfile/barberShopProfileEdit';



const BarberRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/barber/register" element={<BarberRegisterPage />} />
            <Route path="/barber/login" element={<BarberLoginPage />} />
            <Route path="/barber/dashboard" element={<BarberDashboardPage />} />
            <Route path="/barber/profile" element={<BarberShopProfile />} />
            <Route path="/barber/profile/edit" element={<BarberProfileEditPage />} />
        </Routes>
    </BrowserRouter>
)
export default BarberRoutes

// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import Services from "./pages/Services";
// import Appointments from "./pages/Appointments";
// import Earnings from "./pages/Earnings";
// import Profile from "./pages/Profile";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) setIsAuthenticated(true);
//   }, []);

//   return (
//     <Router>
//       {isAuthenticated && <Navbar />}
//       <div className="container mx-auto p-4">
//         <Routes>
//           <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//           {isAuthenticated ? (
//             <>
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/services" element={<Services />} />
//               <Route path="/appointments" element={<Appointments />} />
//               <Route path="/earnings" element={<Earnings />} />
//               <Route path="/profile" element={<Profile />} />
//               <Route path="*" element={<Navigate to="/dashboard" />} />
//             </>
//           ) : (
//             <Route path="*" element={<Navigate to="/login" />} />
//           )}
//         </Routes>
//       </div>
//       {isAuthenticated && <Footer />}
//     </Router>
//   );
// }

// export default App;

// // Pages Implementation

// // Dashboard Page
// export function Dashboard() {
//   return <div className="p-6 bg-white shadow rounded-lg">Welcome to the Barber Dashboard</div>;
// }

// // Services Page
// export function Services() {
//   return <div className="p-6 bg-white shadow rounded-lg">Manage your services here</div>;
// }

// // Appointments Page
// export function Appointments() {
//   return <div className="p-6 bg-white shadow rounded-lg">View and manage appointments</div>;
// }

// // Earnings Page
// export function Earnings() {
//   return <div className="p-6 bg-white shadow rounded-lg">Track your earnings</div>;
// }

// // Profile Page
// export function Profile() {
//   return <div className="p-6 bg-white shadow rounded-lg">Edit your profile details</div>;
// }

// // Login Page
// export function Login({ setIsAuthenticated }) {
//   const handleLogin = () => {
//     localStorage.setItem("token", "dummy_token");
//     setIsAuthenticated(true);
//   };
//   return (
//     <div className="p-6 bg-white shadow rounded-lg">
//       <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleLogin}>
//         Login as Barber
//       </button>
//     </div>
//   );
// }

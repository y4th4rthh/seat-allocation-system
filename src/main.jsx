import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About us/About.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import MainContent from "./components/Dashboard/MainContent.jsx";
import Resetpassword from "./components/ResetPassword/Resetpassword.jsx";
import { ForgotPassword } from "./components/ForgotPassword/ForgotPassword.jsx";
import { VerifyOTP } from "./components/VerifyOTP/VerifyOTP.jsx";
import RegistrationSection from "./components/Dashboard/RegistrationSection.jsx";
import ViewSection from "./components/Dashboard/ViewSection.jsx";
import { Toaster } from "react-hot-toast";
// import App from "./App.jsx";

// Define a function to check if the user is authenticated
// const isAuthenticated = () => {
//   // Add your authentication logic here, such as checking if the user is logged in or has a valid token
//   // For demonstration purposes, I'm assuming a variable named isAuthenticated which is true if the user is authenticated, false otherwise
//   let isAuthenticated = false;
//   const storedId = sessionStorage.getItem("applicationId");
//   if (storedId) {
//     isAuthenticated = true;
//   }
//   // Change this to your actual authentication logic
//   return isAuthenticated;
// };

// // PrivateRoute component to render the route only if the user is authenticated
// const PrivateRoute = ({ element, ...rest }) => {
//   return isAuthenticated() ? (
//     <Route {...rest} element={element} />
//   ) : (
//     <Navigate to="/login" />
//   );
// };

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={<MainContent />}>
        <Route path="registration-form" element={<RegistrationSection />} />
        <Route path="view-form" element={<ViewSection />} />
      </Route>
      <Route path="form" element={<RegistrationSection />} />
      <Route path="reset-password" element={<Resetpassword />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="verify-OTP" element={<VerifyOTP />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

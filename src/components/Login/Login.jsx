import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";
import { FaRegEye, FaRegEyeSlash, FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { MdKey } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {

  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/user/login", {
        email: formData.email,
        password: formData.password,
      });
      console.log(response);
      const { data } = response;
      const { applicationId } = data;
      sessionStorage.setItem("applicationId", applicationId);
      console.log("Login successful, applicationId: " + sessionStorage.getItem("applicationId"));
      navigate("/dashboard");
      toast.success('Login Successful.', {
        duration: 5000
      })
    } catch (error) {
      console.error("Login failed:", error.response.data);
      toast.error("Login failed. Please check your Details.", {
        duration: 5000
      });
    }
  };
  return (
    <>
      <div
        className="overflow-auto flex flex-col items-center justify-center"
        style={{
          background: "#edf2f7",
          margin: "0rem",
        }}
      >
        <div className="flex flex-wrap items-center justify-center w-full gap-x-12 gap-y-0 ">
          <div
            className={`regsiterPage bg-white  shadow-md rounded-lg flex-row `}
          >
            <h1 className="flex gap-2 align-middle text-lg rounded-md text-indigo-600 font-bold mb-6 p-2 border-2 border-indigo-600">
              <FaUser className="text-xl" />
              <span>Steps to Apply Online</span>
            </h1>
            <div className="mb-10 flex ml-2 mr-2" style={{ height: "250px" }}>
              <img
                src="https://img.freepik.com/free-photo/young-man-using-laptop-class_1391-558.jpg?w=1380&t=st=1710397894~exp=1710398494~hmac=9e5933e750351672d919d5a3df89702772f668aefceed1db591c838481843ae7"
                alt="Your Image"
                className="w-full object-cover overflow-hidden"
              />
            </div>
            <div className="mb-10 text-left ">
              <div className="text-blue-500 bg-blue-200 my-3 p-2 rounded-md font-semibold">
                Step-1:- Apply for New Registration
              </div>
              <div className="text-blue-500 bg-blue-200 my-3 p-2 rounded-md font-semibold">
                Step-2:- Login to the page
              </div>
              <div className="text-blue-500 bg-blue-200 my-3 p-2 rounded-md font-semibold">
                Step-3:- Apply for Consecutive Exam
              </div>
            </div>
            <div className="flex justify-center align-middle">
              <NavLink
                to="/register"
                className="bg-indigo-600 hover:bg-indigo-700 text-center rounded-md py-2 px-4 w-full text-white flex justify-center align-middle gap-1"
              >
                <FaUserPlus className="text-xl" />
                <span> New Candidate Register Here</span>
              </NavLink>
            </div>
          </div>

          <div
            className={`login bg-white shadow-md rounded-lg  flex-row`}
            style={{ paddingBottom: "1rem" }}
          >
            <h1 className="text-lg flex gap-1 align-middle text-indigo-600 font-bold mb-6 p-2 border-2 rounded-md border-indigo-600">
              <FaUser className="text-xl" />
              <span> Only Registered Candidate Login Here</span>
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-12" style={{ marginBottom: "40px" }}>
                <label
                  htmlFor="email"
                  className="block text-base font-bold text-indigo-500  mb-3"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="your@email.com"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-12" style={{ marginBottom: "40px" }}>
                <label
                  htmlFor="password"
                  className="block text-base font-bold text-indigo-500 mb-3"
                >
                  Password <span className="text-red-600">*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={passwordType}
                    id="password"
                    name="password"
                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-5"
                    placeholder="Enter your password"
                    required
                    onChange={handleChange}
                  />
                  <div
                    onClick={togglePassword}
                    style={{ position: 'absolute', right: '10px', top: '35%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                  >
                    {passwordType === "password" ? (
                      <span><FaRegEyeSlash /></span>
                    ) : (
                      <span><FaRegEye /></span>
                    )}
                  </div>
                </div>
                <NavLink
                  to="/forgot-password"
                  className="text-sm  text-red-500 hover:text-indigo-500  mb-4 flex justify-start align-middle gap-1"
                >
                  <MdKey />
                  Forgot Password?
                </NavLink>
              </div>
              <div
                className="flex items-center justify-between "
              >
                {/* <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                    defaultChecked
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-gray-700 "
                  >
                    Remember me
                  </label>
                </div> */}
              </div>
              <div className="flex justify-center">
                <button type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 rounded-md py-2 px-4 w-full text-white"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
//Login.jsx

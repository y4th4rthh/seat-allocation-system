import { useState } from "react";
import { FaUserLock } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        try {
            const response = await axios.post("http://localhost:8080/api/user/forgot-password", {
                email: email, // Pass email state to the backend
            });
            console.log("Response from server:", response.data);
            // Check the response status to determine if the email was sent successfully
            if (response.status === 200) {
                console.log("OTP sent successfully on your email.");
                toast.success("OTP sent successfully on your email.", {
                    icon: 'ℹ️',
                    duration: 5000
                });
                navigate('/verify-OTP');
            } else {
                console.error("Failed to send password reset email.");
                toast.error("Failed to send password reset email. Please try again later.", {
                    duration: 5000,
                });
            }
        } catch (error) {
            console.error("Error:", error.response.data);
            // Check the error response from the server and provide specific feedback to the user
            if (error.response && error.response.status === 404) {
                alert("Email address not found. Please check your email address.");
            } else {
                alert("Failed to send password reset email. Please try again later.");
            }
        }
    };


    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <>
            <div className="min-h-screen  flex justify-center items-center" style={{ background: '#edf2f7' }}>

                <div className="bg-white w-4/5 md:w-3/5 xl:w-2/5 shadow-md rounded-md ">
                    <h1 className="flex gap-2 align-middle text-lg rounded-lg text-indigo-600 font-bold p-2 border-2 border-indigo-600  mx-4 mt-4">
                        <FaUserLock className="text-xl" />
                        <span>Forgot Password</span>
                    </h1>

                    <form className="flex bg-white-400 flex-col align-middle justify-center p-5 sm:p-5 m-0 md:py-20" onSubmit={handleSubmit}>
                        <p className="text-red-500 mb-3 font-medium">Enter The Registerd Email Address</p>
                        <label
                            htmlFor="email"
                            className="block text-base font-bold text-indigo-500  mb-4"
                        >
                            Email <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-12"
                            placeholder="your@email.com"
                            required
                        />
                        <div className="flex justify-center">
                            <button type="submit"
                                className="bg-indigo-600 hover:bg-indigo-700 rounded-md py-2 px-4 w-full text-white flex justify-center align-middle gap-1"
                            >
                                Send OTP
                            </button>
                        </div>
                    </form>
                </div >
            </div >
        </>
    );
};

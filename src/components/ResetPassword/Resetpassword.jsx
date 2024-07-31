import { useState, useEffect } from "react";
import "./resetpassword.css";
import { FaRegEye, FaRegEyeSlash, FaUserLock } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Resetpassword = () => {
    const [formValues, setFormValues] = useState({
        otp: "",
        password: "",
        confirmpassword: "",
    });
    const [formErrors, setFormErrors] = useState({});
    const [passwordType, setPasswordType] = useState("password");
    const location = useLocation();
    const navigate = useNavigate();

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    };

    const validate = (values) => {
        const errors = {};
        const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8}$/;

        if (!values.password) {
            errors.password = "Password is required!";
        } else if (!regexPass.test(values.password)) {
            errors.password =
                "Password must be 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number!";
        } else if (values.password !== values.confirmpassword) {
            errors.confirmpassword = "Passwords doesn't not match!";
        }

        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);

        try {
            const response = await axios.post("http://localhost:8080/api/user/reset-password", {
                otp: formValues.otp,
                password: formValues.password,
            });
            console.log("Response:", response.data);
            toast.success("Password changed successfully!", {
                duration: 5000
            });
            navigate('/login');
        } catch (error) {
            console.error("Error", error);
            toast.error("Unable to change password. Please try again.", {
                duration: 5000
            });
        }
    };


    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const otpParam = searchParams.get('otp');
        console.log(otpParam);
        if (otpParam) {
            setFormValues(prevState => ({
                ...prevState,
                otp: otpParam
            }));
        }
    }, [location.search]);

    return (
        <div>
            {/* <Nav /> */}
            <div
                className={`resetPage  overflow-auto flex flex-col items-center justify-center`}
                style={{ background: "#edf2f7", marginTop: "0" }}
            >
                <div className="min-h-screen flex  flex-wrap items-center justify-center w-full  gap-12">
                    <div className="resetPassword bg-white  shadow-md rounded-lg flex-row">
                        <h1 className="flex gap-2 align-middle text-lg rounded-md text-indigo-600 font-bold mb-8 p-2 border-2 border-indigo-600">
                            <FaUserLock className="text-xl" />
                            <span>Reset Password</span>
                        </h1>

                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col md:flex-row md:items-center gap-10 mb-8">
                                <div className="mb-8 md:mb-0 md:w-1/2">
                                    <label
                                        htmlFor="password"
                                        className="block text-base font-bold text-indigo-500  mb-4"
                                    >
                                        New Password <span className="text-red-600">*</span>
                                    </label>

                                    <div style={{ position: "relative" }}>
                                        <input
                                            type={passwordType}
                                            id="password"
                                            name="password"
                                            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-2"
                                            placeholder="Enter your password"
                                            autoComplete="new-password"
                                            value={formValues.password}
                                            onChange={handleChange}
                                        />
                                        <div
                                            onClick={togglePassword}
                                            style={{
                                                position: "absolute",
                                                right: "10px",
                                                top: "40%",
                                                transform: "translateY(-50%)",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {passwordType === "password" ? (
                                                <span>
                                                    <FaRegEyeSlash />
                                                </span>
                                            ) : (
                                                <span>
                                                    <FaRegEye />
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-8 md:mb-0 md:w-1/2">
                                    <label
                                        htmlFor="confirmpassword"
                                        className="block text-base font-bold text-indigo-500 mb-4"
                                    >
                                        Confirm Password <span className="text-red-600">*</span>
                                    </label>

                                    <input
                                        type="password"
                                        id="confirmpassword"
                                        name="confirmpassword"
                                        className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-2"
                                        placeholder="Enter your password"
                                        autoComplete="new-password"
                                        value={formValues.confirmpassword}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                {formErrors.password && (
                                    <p className="text-red-500 text-sm text-center">
                                        {formErrors.password}
                                    </p>
                                )}
                                {formErrors.confirmpassword && (
                                    <p className="text-red-500 text-sm text-center">
                                        {formErrors.confirmpassword}
                                    </p>
                                )}
                            </div>
                            {/* <div className="flex-row items-center justify-between w-full md:w-auto pl-8 pr-8" style={{ marginTop: '3rem', padding: '2rem' }}>
                                <div className="flex justify-center">
                                    <button
                                        className="bg-indigo-600 hover:bg-indigo-700 rounded-md py-2 px-4 w-full text-white flex justify-center align-middle gap-1"
                                    >
                                        Click Here to Confirm
                                    </button>
                                </div>
                            </div> */}
                            <div className="flex justify-center mt-14">
                                <button className="bg-indigo-600 hover:bg-indigo-700 rounded-md py-2 px-4 w-full text-white flex justify-center align-middle gap-1">
                                    Click Here to Confirm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resetpassword;

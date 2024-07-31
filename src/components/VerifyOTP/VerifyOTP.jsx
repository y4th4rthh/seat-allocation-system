import { useState } from "react";
import axios from 'axios';
import { TbPasswordUser } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const VerifyOTP = () => {

    const [otp, setOtp] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("OTP:", otp);
        try {
            const response = await axios.post("http://localhost:8080/api/user/verify-otp", {
                otp: otp, // Pass email state to the backend
            });
            console.log("OTP match:", response.data);
            toast.success("OTP Match.", {
                duration: 5000
            });
            navigate(`/reset-password?otp=${otp}`);
        } catch (error) {
            console.error("OTP doesn't match.", error.response.data);
            toast.error("OTP doesn't match.", {
                duration: 5000
            });
        }
    };

    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    return (
        <>
            <div className="min-h-screen  flex justify-center items-center" style={{ background: '#edf2f7' }}>

                <div className="bg-white w-4/5 md:w-3/5 xl:w-2/5 shadow-md rounded-md ">
                    <h1 className="flex gap-2 align-middle text-lg rounded-lg text-indigo-600 font-bold p-2 border-2 border-indigo-600  mx-4 mt-4">
                        <TbPasswordUser className="text-3xl" />
                        <span>Verify OTP</span>
                    </h1>

                    <form className="flex bg-white-400 flex-col align-middle justify-center p-5 sm:p-5 m-0 md:py-20" onSubmit={handleSubmit}>
                        <label
                            htmlFor="otp"
                            className="block text-base font-bold text-indigo-500  mb-4"
                        >
                            OTP <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            id="otp"
                            name="otp"
                            onChange={handleChange}
                            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-12"
                            placeholder="Enter your OTP"
                            required
                        />
                        <div className="flex justify-center">
                            <button type="submit"
                                className="bg-indigo-600 hover:bg-indigo-700 rounded-md py-2 px-4 w-full text-white flex justify-center align-middle gap-1"
                            >
                                Verify
                            </button>
                        </div>
                    </form>
                </div >
            </div >
        </>
    );
};

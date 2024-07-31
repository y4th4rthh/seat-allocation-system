// import Nav from "./Header";
import { FaRegEye, FaRegEyeSlash, FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import "./register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";

const Register = () => {
  // const [showMessage, setShowMessage] = useState(false);

  // const handleClick = () => {
  //   setShowMessage(true);
  // };
  const [formValues, setFormValues] = useState({
    email: "",
    seatno: "",
    password: "",
    confirmpassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [passwordType, setPasswordType] = useState("password");
  const navigator = useNavigate();

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-z0-9]+@gmail\.com$/;
    const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8}$/;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.seatno) {
      errors.seatno = "Seat No. is required!";
    } else if (values.seatno.length !== 6) {
      errors.seatno = "Enter valid Seat No.!";
    }

    if (!regexPass.test(values.password)) {
      errors.password =
        "Password must be 8 characters long and contain at least one uppercase letter, one lowercase letter, and one Digit!";
    }

    if (values.password !== values.confirmpassword) {
      errors.confirmpassword = "Passwords do not match!";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const errors = validate(formValues);
    console.log("Form values:", formValues);
    if (Object.keys(errors).length === 0) {

      console.log("Form values:", formValues);
      try {
        const { confirmpassword, seatno, ...formData } = formValues;

        await axios.post("http://localhost:8080/api/user/register", formData)
        toast.success('Registration Successful!', {
          duration: 5000,
        });
        toast.success('Application ID is sent to your registered Email-ID.', {
          icon: 'ℹ️',
          duration: 5000,
        })
        navigator("/login");
      }
      catch (error) {
        console.log(error);
        toast.error('Registation Failed!', {
          duration: 5000,
        });
      }

    }

    else {
      setFormErrors(errors);
    }
  }



  return (
    <>
      {/* <Nav /> */}
      <div
        className="overflow-auto flex flex-col items-center justify-center "
        style={{ background: "#edf2f7", margin: "0rem" }}
      >
        <div className="flex  flex-wrap items-center justify-center w-full">
          <div
            className={`registerPages bg-white shadow-md rounded-lg flex-row`}
          >
            <h1 className="text-lg flex gap-1 align-middle text-indigo-600 font-bold mb-6 p-2 border-2 rounded-md border-indigo-600">
              <FaUser className="text-xl" />
              <span> Registration Form</span>
            </h1>
            <form onSubmit={handleSubmit} >
              {/* <div className="flex flex-col md:flex-row md:items-center gap-10 mb-8"> */}
              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="block text-base font-bold text-gray-700  mb-2"
                >
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-2"
                  placeholder="your@email.com"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
              </div>

              <div className="mb-8">
                <label
                  htmlFor="seatno"
                  className="block text-base font-bold text-gray-700  mb-2"
                >
                  10th Grade Seat Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  id="seatno"
                  name="seatno"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 col-span-6 md:col-span-3 mb-2"
                  placeholder="645234"
                  min="100000"
                  max="999999"
                  value={formValues.seatno}
                  onChange={handleChange}
                />

                {formErrors.seatno && (
                  <p className="text-red-500 text-sm">{formErrors.seatno}</p>
                )}
              </div>
              {/* </div> */}
              {/* <div className="flex flex-col md:flex-row md:items-center gap-10 mb-8"> */}
              <div className="mb-8">
                <label
                  htmlFor="password"
                  className="block text-base font-bold text-gray-700  mb-2"
                >
                  Password <span className="text-red-600">*</span>
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type={passwordType}
                    name="password"
                    id="password"
                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-2 "
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
                      top: "45%",
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
                {formErrors.password && (
                  <p className="text-red-500 text-sm">{formErrors.password}</p>
                )}
              </div>
              <div className="mb-8 ">
                <label
                  htmlFor="cPassword"
                  className="block text-base font-bold text-gray-700  mb-2"
                >
                  Confirm Password <span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-2"
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  value={formValues.confirmpassword}
                  onChange={handleChange}
                />

                {formErrors.confirmpassword && (
                  <p className="text-red-500 text-sm">
                    {formErrors.confirmpassword}
                  </p>
                )}
              </div>
              {/* </div> */}
              {/* <div
                className="flex-row gap-10 items-center justify-between w-full md:w-auto "
                style={{ marginTop: "0rem" }}
              > */}
              <div className="flex justify-center mt-8">
                <button
                  // onClick={handleClick}
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 rounded-md py-2 px-4 w-full text-white flex justify-center align-middle gap-1"
                >
                  <FaUserPlus className="text-xl" />
                  Click Here to Register
                </button>
              </div>
              {/* {showMessage && (
                  <div className=" bg-gray-100  shadow-lg  rounded-lg p-4 m-4 flex justify-center items-center gap-4">
                    <p className="text-sm">
                      Application ID is sent to your Email ID
                    </p>
                    <button
                      onClick={() => setShowMessage(false)}
                      className="bg-indigo-600 hover:bg-indigo-700 rounded-md py-1 px-4  text-white"
                    >
                      close
                    </button>
                  </div>
                )} */}
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
//register.jsx

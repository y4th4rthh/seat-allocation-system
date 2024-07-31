import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import logo from "../../../public/Logo/logo.png"
import "./header.css";
import Swal from "sweetalert2";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [applicationId, setApplicationId] = useState("");
  const [showNavbar, setShowNavbar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLogout = () => {
    // Show confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout'
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed, proceed with logout
        setIsLoggedIn(false);
        setApplicationId("");
        sessionStorage.removeItem("applicationId"); // Remove applicationId from session storage
        navigate("/"); // Redirect to home page after logout
      }
    });
  };

  const checkLoggedIn = () => {
    // Check if user is logged in based on presence of applicationId in sessionStorage
    const storedId = sessionStorage.getItem("applicationId");
    if (storedId) {
      setIsLoggedIn(true);
      setApplicationId(storedId);
    }
  };

  // Check if user is logged in on component mount
  useEffect(() => {
    checkLoggedIn();
  }, [checkLoggedIn]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <div className="flex items-center">
              <img src={logo} alt="logo" height="120" width="120" />
              <div className="text-xl">Gujarat Entrance Exam</div>
            </div>

          </NavLink>
        </div>

        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            {/* <li>
              <NavLink to="/contact">Contact</NavLink>
            </li> */}
          </ul>
        </div>
        <div>
          <div className="relative inline-block text-left">
            <button
              className="bg-indigo-500 hover:bg-indigo-600 rounded-md py-2 px-4"
              onClick={toggleDropdown}
            >
              {isLoggedIn ? (
                <div className="flex items-center gap-2">
                  <span className="text-xl">
                    <FaRegUserCircle />
                  </span>
                  <span>{`User ID: ${applicationId}`}</span>
                </div>
              ) : (
                <NavLink to="/login">
                  {" "}
                  <div className="flex gap-2">
                    <FiLogIn className="text-xl top-0.5 relative" />
                    Login / Sign Up
                  </div>
                </NavLink>
              )}
            </button>

            {showDropdown && (
              <div className="absolute my-3 right-0 rounded-md shadow-lg bg-red-500 hover:bg-red-600 ring-1 ring-black ring-opacity-5">
                <div
                  className=""
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {isLoggedIn && (
                    <button
                      className="bg-red-500 hover:bg-red-600 font-md rounded-md py-1 px-5 m-1"
                      onClick={handleLogout}
                    >
                      <div className="flex gap-2">
                        <FiLogOut className="text-xl top-0.5 relative" />
                        Logout
                      </div>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* {isLoggedIn ? (
            <>
              <span><FaRegUserCircle />{`User ID:   ${applicationId}`}</span>
              <button
                className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-4 ml-2"
                onClick={handleLogout}
              >
                <div className="flex gap-1"><MdOutlineLogout className="text-xl top-0.5 relative" />Logout</div>
              </button>
            </>
          ) : (
            <NavLink to="/login">
              <button
                className="bg-indigo-500 hover:bg-indigo-600 rounded-md py-2 px-4"
                onClick={onLoginClick}
              >
                Login / Sign Up
              </button>
            </NavLink>
          )} */}
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Header;

// // import "./footer.css";

// const Footer = () => {
//   return (
//     <>
//       <footer className={` flex w-full justify-center p-4 text-white bottom-0 fixed bg-gray-900 align-middle text-lg`}>
//         <div></div>
//         <div>{new Date().getFullYear()} &copy; Copyright All Rights Reserved</div>
//       </footer>
//     </>
//   );
// };

// export default Footer;
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left"
      style={{ backgroundColor: "black" }}
    >
      <div className="m-10 mt-0 sm:p-10 p-7 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-3 lg:grid-cols-3">

          {/* About Us section */}
          <div className="cursor-pointer">
            <h6 className="mb-5 flex items-center justify-center sm:text-xl font-semibold uppercase md:justify-start">
              About Us
            </h6>
            <p className="text-gray-500 sm:text-lg sm:text-balance text-balance">
              We have vast experience in the creative industry, producing
              exciting experiences for brands that are as smart, as they are
              effective.
            </p>
          </div>

          {/* Useful links section */}
          {/* <div className="cursor-pointer">
            {" "}
            <h6 className="mb-5 flex justify-center font-semibold sm:text-xl uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <span className="list-item text-gray-500 sm:text-lg">
                <NavLink to="/" className="text-gray-500 hover:text-gray-200 transition-all duration-100">
                  Gujarat Entrance
                </NavLink>
              </span>
            </p>
            <p className="mb-4">
              <span className="list-item text-gray-500 sm:text-lg">
                <NavLink to="/" className="text-gray-500 hover:text-gray-200 transition-all duration-100">
                  JEE (Advanced)
                </NavLink>
              </span>
            </p>
          </div> */}

          {/* Known Us section */}
          {/* <div className="cursor-pointer">
            <h6 className="mb-5 flex justify-center sm:text-xl font-semibold uppercase md:justify-start">
              Known Us
            </h6>
            <p className="mb-4 sm:text-lg">
              <span className="list-item">
                <NavLink to='/abou' className="text-gray-400 hover:text-gray-200 transition-all duration-100">About Us</NavLink>
              </span>
            </p>
            <p className="sm:text-lg">
              <span className="list-item">
                <NavLink to='' className="text-gray-400 hover:text-gray-200 transition-all duration-100">Hiring</NavLink>
              </span>
            </p>
          </div> */}

          {/* Contact section */}
          <div className="cursor-pointer">
            <h6 className="mb-4 flex justify-center sm:text-xl font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-5 flex items-center sm:text-lg justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5 text-gray-400"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              <span className="text-gray-400">Vadodara, Gujarat 390001</span>
            </p>
            <p className="mb-4 flex items-center sm:text-lg justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5 text-gray-400"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span className="text-gray-400">geesupport@gmail.com</span>
            </p>
            <p className="mb-4 flex items-center sm:text-lg justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-400"> + 01 234 567 88</span>
            </p>
          </div>

          {/*MAP*/}
          <div className="cursor-pointer bg-gray-300 rounded-lg overflow-hidden relative flex ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.71772249676!2d73.09068439469182!3d22.322081830866285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1711037970359!5m2!1sen!2sin"
              width="600"
              height="200"
              loading="lazy"
            ></iframe>

          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div
        className="bg-gray-800 p-6 text-center dark:bg-neutral-700"
        style={{ backgroundColor: "#" }}
      >
        <span>©  2024 Copyright : GEE</span>
      </div>
    </footer>
  );
}

export default Footer;
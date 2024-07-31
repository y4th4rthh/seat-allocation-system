import { useState } from "react";
// import styles from "./FormStepOne.module.css";

const RegistrationForm = ({ basicDetails, setbasicDetails }) => {
  // const [basicDetails, setbasicDetails] = useState({
  //   firstName: '',
  //   lastName: '',
  //   dateOfBirth: '',
  //   gender: '',
  // });

  const handleInputChange = (event) => {
    setbasicDetails({
      ...basicDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    //Design the registration form which includes input fields such as First Name, Last Name, Date of Birth
    //apply tailwind css classes to the form
    <>
      {/* <div className="p-1 m-1 flex justify-center">
      <form className="flex flex-col space-y-4 ">
        <div className={`${styles.changeDirection} flex justify-between`}>
          <div className="flex flex-col w-1/2 m-4">
            <label className="text-lg mx-2 self-center ">First Name</label>
            <div>
              <input
                className="border border-gray-300 rounded-md px-3 py-2 w-64"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2 m-4">
            <label className="text-lg mx-2 self-center">Last Name</label>
            <div>
              <input
                className="border border-gray-300 rounded-md px-3 py-2 w-64"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.changeDirection} flex justify-between`}>
          <div
            className={`${styles.changeAlign} flex flex-col w-1/2 m-4 justify-center`}
          >
            <label className="text-lg self-center">Gender</label>
            <div className="flex self-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="m-1"
              />
              <label htmlFor="male" className="m-1">
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="m-1"
              />
              <label htmlFor="female" className="m-1">
                Female
              </label>
            </div>
          </div>
          <div className="flex flex-col w-1/2 m-4">
            <label className="text-lg self-center">Date of Birth</label>
            <div>
              <input
                className="border border-gray-300 rounded-md  px-3 py-2 w-64 self-center"
                type="date"
              />
            </div>
          </div>
        </div>
      </form>
    </div> */}
      <div className="flex flex-col px-5 min-h-96">
        <form className="mt-20">
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-12">
            <div className="mb-12">
              <label
                htmlFor="fName"
                className="block text-lg font-bold text-indigo-500 mb-3"
              >
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="fname"
                name="firstName"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-indigo-300 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600"
                placeholder="Enter Your First Name"
                value={basicDetails.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-12">
              <label
                htmlFor="lName"
                className="block text-lg font-bold text-indigo-500 mb-3"
              >
                Last Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="lName"
                name="lastName"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-indigo-300 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600"
                placeholder="Enter Your Last Name"
                value={basicDetails.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-12">
            <div className="mb-12 px-3">
              <label
                htmlFor="gender"
                className="block text-lg font-bold text-indigo-500 mb-3"
              >
                Gender <span className="text-red-600">*</span>
              </label>
              <div className="grid grid-cols-2 gap-0">
                <div className="mb-4">
                  <input
                    id="male"
                    type="radio"
                    value="Male"
                    name="gender"
                    className="w-4 h-4"
                    checked={basicDetails.gender === 'Male'}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="male"
                    className="ms-2 text-md font-medium text-indigo-500"
                  >
                    Male
                  </label>
                </div>
                <div className="mb-4">
                  <input
                    id="female"
                    type="radio"
                    value="Female"
                    name="gender"
                    className="w-4 h-4"
                    checked={basicDetails.gender === 'Female'}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="female"
                    className="ms-2 text-md font-medium text-indigo-500"
                  >
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-12">
              <label
                htmlFor="bDate"
                className="block text-lg font-bold text-indigo-500 mb-3"
              >
                Date of Birth<span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                id="bDate"
                name="dateOfBirth"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-indigo-300 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600"
                placeholder="Enter your birth date"
                value={basicDetails.dateOfBirth}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;

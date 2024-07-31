import React, { useState } from 'react'
import statedata from './districts.json'
import stepOneStyles from "./FormStepOne.module.css"
import stepTwoStyles from "./FormStepTwo.module.css"
import stepThreeStyles from "./FormStepThree.module.css"

const ViewForm = ({ basicDetails, cityChoices, fileUploads }) => {
    const districts = statedata.districts.map((district) => district);

    return (
        <>
            <div id='basicDetailsDiv'>
                <div className="flex flex-col px-5 min-h-96">
                    <form className="mt-20 p-12 border-2 rounded-md">
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
                                    // onChange={handleInputChange}
                                    readOnly
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
                                    // onChange={handleInputChange}
                                    readOnly
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
                                            // onChange={handleInputChange}
                                            readOnly
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
                                            // onChange={handleInputChange}
                                            readOnly
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
                                    // onChange={handleInputChange}
                                    readOnly
                                    required
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div id='cityChoicesDiv'>
                <div className='min-h-96'>
                    <form className="mt-20 p-12 border-2 rounded-md">
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div className='flex flex-col text-indigo-500 m-8'>
                                <label className="text-lg font-bold mb-5">City Choice 1<span className="text-red-600"> *</span></label>
                                <select
                                    className='shadow-sm rounded-md w-full px-3 py-2 border border-indigo-300 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600'
                                    name='firstCity'
                                    value={cityChoices.firstCity}
                                    // onChange={handleCityChange}
                                    disabled
                                >
                                    {
                                        statedata.districts.map((district, index) => (
                                            <option value={district} key={index}>{district}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className='flex flex-col text-indigo-500 m-8'>
                                <label className="text-lg font-bold mb-5">City Choice 2<span className="text-red-600"> *</span></label>
                                <select
                                    className='shadow-sm rounded-md w-full px-3 py-2 border border-indigo-300 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600'
                                    name='secondCity'
                                    value={cityChoices.secondCity}
                                    // onChange={handleCityChange}
                                    disabled
                                >
                                    {
                                        statedata.districts.map((district, index) => (
                                            <option value={district} key={index}>{district}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </form>
                </div >
            </div>
            <div id='fileUploadsDiv'>
                <div className={`flex flex-col  justify-center my-1 min-h-96`}>
                    <div className="flex flex-col space-y-4 border-2 rounded-md">
                        <div className='flex flex-col m-4'>
                            <div className="flex flex-col justify-center lg:flex-row md:mt-4 py-4 ">
                                <div className="w-full lg:w-1/4 px-3 mb-6 md:mb-0">
                                    <div className="bg-indigo-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Photo
                                    </div>
                                    <div className="bg-white px-6 py-4 whitespace-nowrap flex justify-center">
                                        {fileUploads.selectedPhoto ? (
                                            <img src={URL.createObjectURL(fileUploads.selectedPhoto)} alt="" className={stepThreeStyles.imageStyle} />
                                        ) : (
                                            <span className={`mx-4`}>Image can be viewed after choosing</span>
                                        )}
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/4 px-3 mb-6 md:mb-0">
                                    <div className="bg-indigo-50  px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Sign
                                    </div>
                                    <div className="bg-white px-6 py-4 whitespace-nowrap flex justify-center">
                                        {fileUploads.selectedSign ? (
                                            <img src={URL.createObjectURL(fileUploads.selectedSign)} alt="" className={stepThreeStyles.imageStyle} />
                                        ) : (
                                            <span className={`mx-4`}>Image can be viewed after choosing</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewForm
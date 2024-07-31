import { useState } from "react";
import axios from 'axios';
import StepsGraphics from "./StepsGraphics";
import RegistrationForm from "./FormStepOne";
import CityChoice from "./FormStepTwo";
import DocumentUpload from "./FormStepThree";
import ViewForm from "./ViewForm";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const RegistrationSection = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [basicDetails, setbasicDetails] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
  });
  const [cityChoices, setCityChoices] = useState({
    firstCity: 'Ahmedabad',
    secondCity: 'Ahmedabad',
  });
  const [fileUploads, setFileUploads] = useState({ selectedPhoto: null, selectedSign: null });

  const goToNextStep = () => {
    if (currentStep === 1) {
      if (
        basicDetails.firstName.trim() === '' ||
        basicDetails.lastName.trim() === '' ||
        basicDetails.dateOfBirth.trim() === '' ||
        basicDetails.gender.trim() === ''
      ) {
        toast.error('Please fill all required fields.', {
          duration: 5000,
        });
        return;
      }
    } else if (currentStep === 2) {
      if (
        cityChoices.firstCity.trim() === '' ||
        cityChoices.secondCity.trim() === '' ||
        cityChoices.firstCity.trim() === cityChoices.secondCity.trim()
      ) {
        toast.error('Please select two different cities.', {
          duration: 5000,
        });
        return;
      }
    } else if (currentStep === 3) {
      if (!fileUploads.selectedPhoto || !fileUploads.selectedSign) {
        toast.error('Please upload both photo and signature.', {
          duration: 5000,
        });
        return;
      }
    }

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const finalSubmit = () => {
    const formData = {
      "applicationId": sessionStorage.getItem("applicationId"),
      "firstName": basicDetails.firstName,
      "lastName": basicDetails.lastName,
      "gender": basicDetails.gender,
      "dob": basicDetails.dateOfBirth,
      "cityChoice1": cityChoices.firstCity,
      "cityChoice2": cityChoices.secondCity,
      "photo": fileUploads.selectedPhoto,
      "sign": fileUploads.selectedSign,
    };

    axios.post('http://localhost:8080/api/user/form/submit', formData,
      { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(response => {
        console.log(response);
        navigate("/dashboard/view-form");
        toast.success("Form submitted successfully!", {
          duration: 5000
        });
      })
      .catch(error => {
        console.error("There was an error!", error);
        toast.error("There was an error!", {
          duration: 5000
        });
      });
  };


  return (
    <>
      <div className="flex flex-col self-center p-6 h-full">
        <div className="flex flex-col shrink self-center border-2 p-4 m-4">
          {currentStep < 4 && <StepsGraphics />}
          {currentStep === 1 && <RegistrationForm basicDetails={basicDetails} setbasicDetails={setbasicDetails} />}
          {currentStep === 2 && <CityChoice cityChoices={cityChoices} setCityChoices={setCityChoices} />}
          {currentStep === 3 && <DocumentUpload fileUploads={fileUploads} setFileUploads={setFileUploads} />}
          {currentStep === 4 && <ViewForm basicDetails={basicDetails} cityChoices={cityChoices} fileUploads={fileUploads} />}
          <div className="flex justify-between">
            {currentStep > 1 ? (
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
                onClick={goToPreviousStep}
              >
                Previous
              </button>
            ) : (
              <div className="py-2 px-4"> {/* This is a placeholder div */} </div>
            )}
            {currentStep === 4 ? (
              <div>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
                  onClick={() => finalSubmit()}
                >
                  Final Submit
                </button>
              </div>
            ) : (
              currentStep < 4 && (
                <div>
                  <button
                    className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
                    onClick={goToNextStep}
                  >
                    Next
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationSection;

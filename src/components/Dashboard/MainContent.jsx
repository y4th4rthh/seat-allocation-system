import { useEffect, useState } from "react";
import RegistrationSection from "./RegistrationSection";
import ViewSection from "./ViewSection";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdmitCard from "./AdmitCard";

const MainContent = () => {

  const [formExists, setFormExists] = useState(false);
  const [isDueDateOver, setIsDueDateOver] = useState(false);
  const [isAllocationDone, setIsAllocationDone] = useState(false);
  const navigate = useNavigate();
  const [basicDetails, setBasicDetails] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
  });
  const [cityChoices, setCityChoices] = useState({
    firstCity: '',
    secondCity: '',
  });

  const [fileUploads, setFileUploads] = useState({
    selectedPhoto: null,
    selectedSign: null,
  });

  const [admitCardPdf, setAdmitCardPdf] = useState(null);

  const fetchImages = async (applicationId) => {
    try {
      const [photoResponse, signResponse] = await Promise.all([
        axios.get(`http://localhost:8080/api/user/form/${applicationId}/image/photo`, { responseType: 'blob' }),
        axios.get(`http://localhost:8080/api/user/form/${applicationId}/image/sign`, { responseType: 'blob' })
      ]);
      setFileUploads(prevState => ({
        ...prevState,
        selectedPhoto: photoResponse.data,
        selectedSign: signResponse.data
      }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let applicationId = sessionStorage.getItem("applicationId");

    axios.get(`http://localhost:8080/api/user/form/${applicationId}/check-due-date`)
      .then(response => {
        if (response.data.isDueDateOver) {
          setIsDueDateOver(true);
          if (response.data.isAllocationDone) {
            axios.get(`http://localhost:8080/api/user/admit-card/${applicationId}/download`, { responseType: 'blob' })
              .then(response => {
                setAdmitCardPdf(URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' })));
                setIsAllocationDone(true);
              })
              .catch(error => {
                console.error("Error fetching admit card PDF:", error);
              });
          } else {
            console.log("Form date is over, but allocation is not done yet.");
          }
        } else {
          axios.get(`http://localhost:8080/api/user/form/${applicationId}/form-exists`)
            .then(response => {
              if (response.status === 200) {
                const { firstName, lastName, gender, dob, cityChoice1, cityChoice2, photo, sign } = response.data;
                basicDetails.firstName = firstName;
                basicDetails.lastName = lastName;
                basicDetails.gender = gender;
                basicDetails.dateOfBirth = dob;
                cityChoices.firstCity = cityChoice1;
                cityChoices.secondCity = cityChoice2;
                fetchImages(applicationId);
                console.log("Form already submitted!");
                setFormExists(true);
                navigate("/dashboard/view-form");
              } else if (response.status === 404) {
                console.log("Form is not submitted yet!");
                navigate("/dashboard/registration-form");
                setFormExists(false);
              }
            })
            .catch(error => {
              console.error("Error checking form submission status:", error);
            });
        }
      })
      .catch(error => {
        console.error("Error checking due date:", error);
      });
  }, []);

  return (
    <>
      <div /*className="flex flex-col self-center p-6 h-full"*/>
        {isDueDateOver ? (
          isAllocationDone ? (
            <AdmitCard pdf={admitCardPdf} />
          ) : (
            <div className="flex self-center p-2">Form date is over, but allocation is not done yet.</div>
          )
        ) : (
          formExists ? (<>
            <ViewSection basicDetails={basicDetails} cityChoices={cityChoices} fileUploads={fileUploads} />
          </>
          ) : (
            <RegistrationSection />
          )
        )}
      </div>
    </>
  );
};

export default MainContent;

import i4 from "../Images/i4.jpg";
import { GrAnnounce } from "react-icons/gr";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center my-5 py-5 xl:px-80 lg:px-60 md:px-24 sm:px-10 px-10 gap-6">
        <img
          className="xl:w-96 w-80 hidden md:block border-4 border-blue-600 border-double p-1 my-10"
          src={i4}
          alt="image description"
        />
        <div className=" text-indigo-500">
          <p className="font-bold text-3xl mb-4 text-left">GUJARAT ENTRANCE EXAM</p>
          <p className="font-md text-left text-xl ">
            To improve equity and quality in education by administering research
            based valid, reliable, efficient, transparent, fair and
            international level assessments.
          </p>
        </div>
      </div>

      <div className="   my-5 py-5 xl:px-52 lg:px-40 md:px-24 px-10 text-justify">
        <div className="rounded-3xl p-4">
          <p className="text-3xl mb-5 flex font-bold text-indigo-500 border-b-4 pb-2 border-indigo-500 gap-2">
            <GrAnnounce className="text-3xl relative top-1" /> Instruction &
            Notices
          </p>

          <ul className="font-semibold text-xl list-inside text-blue-700">
            <li className="mb-3">
              <ul className="list-disc list-inside">
                Know before applying (General Instructions)
                <li className="text-lg text-blue-500 font-normal">
                  Applicant has to upload Photo & signature while applying.
                  Scanned documents of both is required and it should only be in
                  .jpg / .jpeg / .png format.
                </li>
                <li className="text-lg text-blue-500 font-normal">
                  Size of attachments is allowed between 5KB and 200KB. Please
                  note that attachments should be clearly visible.
                </li>
                <li className="text-lg text-blue-500 font-normal">
                  Photograph must be taken in a White or a very light
                  background.
                </li>
                <li className="text-lg text-blue-500 font-normal">
                  Face should occupy about 50% of the area in the photograph,
                  and with a full face view looking into the camera directly.
                  The main features of the face must not be covered by hair of
                  the head, any cloth or any shadow. Forehead, both eyes, nose,
                  cheeks, lip, and chin should be clearly visible.
                </li>
                <li className="text-lg text-blue-500 font-normal">
                  Please do not upload Mobile phone photographs of Candidate.
                </li>
                <li className="text-lg text-blue-500 font-normal">
                  Please put Candidate’s signature with a black or dark blue ink
                  on a white paper.
                </li>
                <li className="text-lg text-blue-500 font-normal">
                  Photo, Signature or any other required attachment(s) must be
                  adequately visible else can be rejected.
                </li>
              </ul>
            </li>

            <li className="mb-3">
              <ul className="list-disc list-inside">
                For applying ,
                <li className="text-lg text-blue-500 font-normal">
                  First register yourSelf.
                </li>
                <li className="text-lg text-blue-500 font-normal">
                  Login using registred email id.
                </li>
                <li className="text-lg text-blue-500 font-normal">
                  Fill the form stepwise.
                </li>
                <li className="text-lg text-blue-500 font-normal">
                  Then check your information and click on submit button.
                </li>
              </ul>
            </li>

            <p className="text-red-500">
              Last date for examination form filling is 21/3/2024.
            </p>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;

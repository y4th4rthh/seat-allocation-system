import i1 from "../Images/i1.jpg";
import i2 from "../Images/i2.jpg";
import i3 from "../Images/i3.jpg";

const About = () => {
  return (
    <>
      <div className="m-5 p-10 border-2">
        <div className="flex justify-center items-center lg:gap-12 md:gap-8 gap-5 xl:px-20 lg:px-14 md:pb-10">
          <img
            className="xl:w-96 lg:w-80 md:w-72 hidden md:block"
            src={i1}
            alt="image description"
          />
          <div>
            <p className="text-3xl font-bold border-b-4 border-indigo-500 py-2 text-indigo-500">
              ABOUT Entrance exam
            </p>
            <p className="py-2 xl:text-xl lg:text-lg md:text-sm text-md text-justify ">
              <ul className="list-disc text-indigo-500">
                <li>
                  Gujarat Entrance Exam (GEE) has been established as a
                  premier, specialist, autonomous and self-sustained testing
                  organization to conduct entrance examinations for
                  admission/fellowship in higher educational institutions.
                </li>
                <li>
                  To assess competence of candidates for admissions and
                  recruitment has always been a challenge in terms of matching
                  with research based international standards, efficiency,
                  transparency and error free delivery. The Gujarat Entrance Exam is entrusted to address all such issues using best in
                  every field, from test preparation, to test delivery and to
                  test marking.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center lg:gap-12 md:gap-8 gap-5 xl:px-20 lg:px-14 md:pb-10">
          <div>
            <p className="text-3xl font-bold border-b-4 border-indigo-500 py-2 text-indigo-500">
              OBJECTIVES
            </p>
            <p className="py-2 xl:text-xl lg:text-lg md:text-sm text-md text-justify ">
              <ul className="list-disc text-indigo-500">
                <li className="">
                  To conduct efficient, transparent and international standards tests in order to assess the competency of candidates for admission, and recruitment purposes.
                </li>
                <li>
                  To undertake research on educational, professional and testing systems to identify gaps in the knowledge systems and take steps for bridging them.
                </li>
                <li>To identify experts and institutions in setting examination questions.</li>
                <li>To produce and disseminate information and research on education and professional development standards.</li>
              </ul>
            </p>
          </div>
          <img
            className="xl:w-96 lg:w-80 md:w-72 hidden md:block"
            src={i2}
            alt="image description"
          />
        </div>

        <div className="flex justify-center items-center lg:gap-12 md:gap-8 gap-5 xl:px-20 lg:px-14 md:p-10">
          <img
            className="xl:w-96 lg:w-80 md:w-72 hidden md:block"
            src={i3}
            alt="image description"
          />
          <div>
            <p className="text-3xl font-bold border-b-4  border-indigo-500 py-2 text-indigo-500">
              VISION GEE
            </p>
            <p className="py-2 xl:text-xl lg:text-lg md:text-sm text-md text-justify text-indigo-500">
              <p>
                The right candidates joining best institutions will give India
                her demographic dividend.
              </p>
              <p className="font-bold pt-2 border-b-2 border-indigo-500">MISSION</p>
              <p>
                To improve equity and quality in education by administering
                research based valid, reliable, efficient, transparent, fair and
                international level assessments. The best subject matter
                experts, psychometricians and IT delivery and security
                professionals will ensure that the current gaps in existing
                assessment systems are properly identified and bridged.
              </p>
              <p className="font-bold pt-2 border-b-2 border-indigo-500">CORE VALUES</p>
              <p>
                GEE will create a system which will promote teaching (by
                teachers), learning (by students) and assessment (by parents and
                institutions) GEE strongly believes in quality, efficiency,
                effectiveness, equity and security of assessments. To practice
                these values, GEE will constantly engage with its stakeholders,
                viz. students, parents, teachers, experts and partner
                institutions.
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

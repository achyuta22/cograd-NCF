import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CCT from "./opening/CCT";
import Culture from "./opening/Culture";
import Hero from "./opening/Hero";
import QuizPage from "./opening/Years";
import Approach from "./opening/Approach";
import UserPage from "./opening/User";
import HistoryPage from "./opening/History";
import CardsPage from "./opening/sectione";
import Sectione1 from "./opening/sectione1";
import Historytable from "./opening/Historytable";
import Slide1 from "./Approach1/Slide1";
import Slide2 from "./Approach1/Slide2";
import Slide3 from "./Approach1/Slide3";
import Slide4 from "./Approach1/Slide4";
import Slide5 from "./Approach1/Slide5";
import Slide6 from "./Approach1/Slide6";
import Stage1 from "./Approach2/Stage1";
import Stage2 from "./Approach2/Stage2";
import Stage3 from "./Approach2/Stage3";
import Stage4 from "./Approach2/Stage4";
import Stages5 from "./Approach2/Stages5";
import Learning1 from "./Approach3/Learning1";
import Learning2 from "./Approach3/Learning2";
import Assess1 from "./Approach4/Assess1";
import Assess2 from "./Approach4/Assess2";
import Foundation from "./Approach4/Foundation";
import Prepratory from "./Approach4/Prepratory";
import Middle from "./Approach4/Middle";
import Secondary from "./Approach4/Secondary";
import Assess0 from "./Approach4/Assess0";
import Time1 from "./Approach4/time1";
import Time2 from "./Approach4/time2";
import Foundationtime from "./Approach4/Foundationtime";
import Prepratorytime from "./Approach4/Prepratorytime";
import Middletime from "./Approach4/Middletime";
import Secondarytime from "./Approach4/Secondarytime";
import Sectione1mplementationPage from "./opening/sectione1Implementation";
import CapacityBuildingPage from "./opening/sectione2Capacity";
import CapacityBuildingSubjectsPage from "./opening/sectione2Subject";
import InfrastructurePage from "./opening/sectione3-Infrastructurepage";
import SafetyAndInclusionPage from "./sectione3-Safety";
import TeacherEmpowermentPage from "./sectione4-teacherEmpowerment";
import EnablingEnvironmentPage from "./sectione4-enablingenvironment";
import TeacherAutonomyAndAccountabilityPage from "./sectione4-teacherautonomy";
import PupilTeacherRatioPage from "./sectione4-pupilTeacherRatio";
import CareerAndProfessionalDevelopmentPage from "./sectione4-carrer";
import InServiceEducationPage from "./sectione4-inservice";
import PreServiceEducationPage from "./sectione4-preservice";
import HeadTeachersAndPrincipalsPage from "./sectione4-headTeachers";
import AcademicAndAdministrativeFunctionariesPage from "./sectione4-Academic";

// new
import SchoolSubjects from "./sectionc/schoolSubjects";

import SchoolSubjectQuiz from "./sectionc/SchoolSubjectsQuiz";
import MainAspects from "./sectionc/mainAspects";
import KeyAspects from "./sectionc/keyAspects";

//sectione
import PageWithCards from "./sectione/card";
import Cultureschool from "./opening/Cultureschool";
import Cultureprocess from "./opening/Cultureprocess";
import Sectione1Cards from "./opening/sectione1";
import ImplementationOverview from "./sectione/sectione1-implementationOverview";
import StakeholderQuiz from "./sectione/sectione1-stakeholderquiz";
import CurriculumFramework from "./sectione/sectione1-curriculumFrameWork";
import CapacityBuildingCards from "./sectione/sectione1-overallCapacityBuilding";
import SpecificSubjects from "./sectione/sectione1-specificSubjects";
import CapacityBuildingQuiz from "./sectione1-capacityBuildingQuiz";
import EnvironmentLearning from "./sectione/sectione2-environmntLearning";
import OutdoorInfrastructure from "./sectione/sectione2-outdoor";
import OutdoorInfrastructureReminderQuiz from "./sectione/sectione2-outdoorInfraQuiz";
import IndoorInfrastructureQuiz from "./sectione/sectione2-insideInfraQuiz";
import IndoorInfrastructurePage1 from "./sectione/sectione2-indoor1";
import IndoorInfrastructurePart2 from "./sectione/sectione2-indoor2";
import InfrastructureSafety from "./sectione/sectione2-safetyInfra";
import EnablingEmpoweringTeachers from "./sectione/sectione3-opening";
import EnablingEnvironmentForTeachers from "./sectione/sectione3-enablingEnvironment";
import TeacherAutonomyAndAccountability from "./sectione/sectione3-teacherAutonomy";
import PupilTeacherRatio from "./sectione/Ssectione3-ptr";
// import CareerAndProfessionalDevelopmentPage from "./sectione4-carrer";

import CareerDevelopment from "./sectione/sectione3-career";
import InServiceTeacherEducation from "./sectione/sectione4-inservice";
import PreServiceTeacherEducation from "./sectione/sectione3-preservice";
import HeadTeachersQuiz from "./sectione/sectione3-headQuiz";
import AcademicAndAdministrativeFunctionaries from "./sectione/sectione4-academicAdministrative";
import CardsPageE from "./sectione/sectione4-cards";
import Curricular from "./components/Curricular";
import Quiz1 from "./Quizes/Quiz1";
import Quiz2 from "./Quizes/Quiz2";
import Quiz3 from "./Quizes/Quiz3";
import Quiz4 from "./Quizes/Quiz4";
import Quiz5 from "./Quizes/Quiz5";
import BackButton from "./components/Backbutton";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/cct" element={<CCT />} />
        <Route path="/back" element={<BackButton />} />
        <Route path="/table" element={<Historytable />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/school-culture" element={<Cultureschool />} />
        <Route path="/school-process" element={<Cultureprocess />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/years" element={<QuizPage />} />
        <Route path="/curricular" element={<Curricular />} />

        {/* Approach Chapter1 */}
        <Route path="/approach-aim" element={<Slide1 />} />
        <Route path="/quiz1" element={<Slide2 />} />
        <Route path="/slide3" element={<Slide3 />} />
        <Route path="/quiz2" element={<Slide4 />} />
        <Route path="/slide5" element={<Slide5 />} />
        <Route path="/slide6" element={<Slide6 />} />

        {/* Approach Chapter2*/}
        <Route path="/approach-stage" element={<Stage1 />} />
        <Route path="/stage2" element={<Stage2 />} />
        <Route path="/stage3" element={<Stage3 />} />
        <Route path="/stage4" element={<Stage4 />} />
        <Route path="/stage5" element={<Stages5 />} />
        {/* Approach Chapter3*/}
        <Route path="/approach-learning" element={<Learning1 />} />
        <Route path="/learning2" element={<Learning2 />} />
        {/* Approach Chapter4*/}
        <Route path="/approach-assessment" element={<Assess0 />} />
        <Route path="/assess1" element={<Assess1 />} />
        <Route path="/assess2" element={<Assess2 />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/prepatory" element={<Prepratory />} />
        <Route path="/middle" element={<Middle />} />
        <Route path="/secondary" element={<Secondary />} />
        <Route path="/time1" element={<Time1 />} />
        <Route path="/time2" element={<Time2 />} />
        <Route path="/foundation-time" element={<Foundationtime />} />
        <Route path="/prepatory-time" element={<Prepratorytime />} />
        <Route path="/middle-time" element={<Middletime />} />
        <Route path="/secondary-time" element={<Secondarytime />} />

        {/* Quizes */}
        <Route path="/test1" element={<Quiz1 />} />
        <Route path="/test2" element={<Quiz2 />} />
        <Route path="/test3" element={<Quiz3 />} />
        <Route path="/test4" element={<Quiz4 />} />
        <Route path="/test5" element={<Quiz5 />} />

        <Route path="/sectione" element={<CardsPage />} />
        {/* <Route path="/sectione1" element={<Sectione1 />} /> */}
        <Route
          path="/sectione1-implementation"
          element={<Sectione1mplementationPage />}
        />
        <Route path="/sectione2-approach" element={<CapacityBuildingPage />} />
        <Route
          path="/sectione2-subjects"
          element={<CapacityBuildingSubjectsPage />}
        />
        <Route
          path="/sectione3-infrastructure"
          element={<InfrastructurePage />}
        />
        <Route path="/sectione3-safety" element={<SafetyAndInclusionPage />} />
        <Route path="/sectione4-teacher" element={<TeacherEmpowermentPage />} />
        <Route
          path="/sectione4-environment"
          element={<EnablingEnvironmentPage />}
        />
        <Route
          path="/sectione4-teacherautonomy"
          element={<TeacherAutonomyAndAccountabilityPage />}
        />
        <Route
          path="/sectione4-pupilTeacher"
          element={<PupilTeacherRatioPage />}
        />
        <Route
          path="/sectione4-career"
          element={<CareerAndProfessionalDevelopmentPage />}
        />
        <Route
          path="/sectione4-inservice"
          element={<InServiceEducationPage />}
        />
        <Route
          path="/sectione4-preservice"
          element={<PreServiceEducationPage />}
        />
        <Route
          path="/sectione4-headTeachers"
          element={<HeadTeachersAndPrincipalsPage />}
        />
        <Route
          path="/sectione4-academic"
          element={<AcademicAndAdministrativeFunctionariesPage />}
        />

        {/* chapter c */}
        <Route path="/school-subjects" element={<SchoolSubjects />} />

        <Route path="/schoolSubjectQuiz" element={<SchoolSubjectQuiz />} />
        <Route path="/mainAspects" element={<MainAspects />} />
        <Route path="/keyAspects" element={<KeyAspects />} />

        {/* sectione */}
        <Route path="/pageswithcards" element={<PageWithCards />} />
        {/* <Route path="/sectione1" element={<Sectione1Cards/>}/> */}
        <Route
          path="/implementationOverview"
          element={<ImplementationOverview />}
        />
        <Route path="/stakeholderQuiz" element={<StakeholderQuiz />} />
        <Route path="/curriculumFramework" element={<CurriculumFramework />} />
        <Route
          path="/capacityBuildingCards"
          element={<CapacityBuildingCards />}
        />
        <Route path="/specificSubjects" element={<SpecificSubjects />} />
        <Route
          path="/capacityBuildingQuiz"
          element={<CapacityBuildingQuiz />}
        />
        <Route path="/environmentLearning" element={<EnvironmentLearning />} />
        <Route
          path="/outdoorInfraQuiz"
          element={<OutdoorInfrastructureReminderQuiz />}
        />
        <Route
          path="/outdoorInfrastructure"
          element={<OutdoorInfrastructure />}
        />
        <Route path="/indoorInfraQuiz" element={<IndoorInfrastructureQuiz />} />
        <Route
          path="/indoorInfrastructure1"
          element={<IndoorInfrastructurePage1 />}
        />
        <Route
          path="/indoorInfrastructure2"
          element={<IndoorInfrastructurePart2 />}
        />
        <Route path="/safetyInfra" element={<InfrastructureSafety />} />
        <Route
          path="/enablingEmpoweringTeachers"
          element={<EnablingEmpoweringTeachers />}
        />
        <Route
          path="/enablingEmpoweringforTeachers"
          element={<EnablingEnvironmentForTeachers />}
        />
        <Route
          path="/teacherAutonomy"
          element={<TeacherAutonomyAndAccountability />}
        />
        <Route path="/ptr" element={<PupilTeacherRatio />} />
        <Route path="/career" element={<CareerDevelopment />} />
        <Route path="/inservice" element={<InServiceTeacherEducation />} />
        <Route path="/preservice" element={<PreServiceTeacherEducation />} />
        <Route path="/headQuiz" element={<HeadTeachersQuiz />} />
        <Route
          path="/academic"
          element={<AcademicAndAdministrativeFunctionaries />}
        />
        <Route path="/cards" element={<CardsPageE />} />
        <Route path="/pageswithcards" element={<PageWithCards />} />
      </Routes>
    </Router>
  );
}

export default App;

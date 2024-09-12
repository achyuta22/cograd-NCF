import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CCT from "./opening/CCT";
import Culture from "./opening/Culture";
import Hero from "./opening/Hero";
import SchoolSubjects from "./opening/schoolSubjects";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/cct" element={<CCT />} />
        <Route path="/table" element={<Historytable />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/" element={<Hero />} />
        <Route path="/school-subjects" element={<SchoolSubjects />} />
        <Route path="/years" element={<QuizPage />} />

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

        {/* <Route path="/approach" element={<Approach />} /> */}
        <Route path="/sectione" element={<CardsPage />} />
        <Route path="/sectione1" element={<Sectione1 />} />
      </Routes>
    </Router>
  );
}

export default App;

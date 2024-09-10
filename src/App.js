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
import Approach2 from "./components/Approach2";
import Approach3 from "./components/Approach3";
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
        <Route path="/approach-learning" element={<Approach2 />} />
        <Route path="/approach-assessment" element={<Approach3 />} />

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

        {/* <Route path="/approach" element={<Approach />} /> */}
        <Route path="/sectione" element={<CardsPage />} />
        <Route path="/sectione1" element={<Sectione1 />} />
      </Routes>
    </Router>
  );
}

export default App;

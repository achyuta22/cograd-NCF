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
import Approach1 from "./components/Approach1";
import Stages from "./components/Stages";
import Approach2 from "./components/Approach2";
import Approach3 from "./components/Approach3";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/cct" element={<CCT />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/" element={<Hero />} />
        <Route path="/school-subjects" element={<SchoolSubjects />} />
        <Route path="/years" element={<QuizPage />} />
        <Route path="/approach-aim" element={<Approach1 />} />
        <Route path="/approach-stage" element={<Stages />} />
        <Route path="/approach-learning" element={<Approach2 />} />
        <Route path="/approach-assessment" element={<Approach3 />} />
        {/* <Route path="/approach" element={<Approach />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

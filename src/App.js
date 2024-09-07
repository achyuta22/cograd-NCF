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
        {/* <Route path="/approach" element={<Approach />} /> */}
        <Route path="/sectione" element={<CardsPage />} />
        <Route path="/sectione1" element={<Sectione1/>} />
      </Routes>
    </Router>
  );
}

export default App;

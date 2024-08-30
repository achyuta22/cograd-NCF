import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CCT from "./opening/CCT";
import Culture from "./opening/Culture";
import HistoryPage from "./opening/History";
import Hero from "./opening/Hero";
import Approach from "./opening/Approach";
import Curricular from "./opening/Curricular";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cct" element={<CCT />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/" element={<Hero />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/curricular" element={<Curricular/>} />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CCT from "./opening/CCT";
import Culture from "./opening/Culture";
import HistoryPage from "./opening/History";
import Hero from "./opening/Hero";
import Navbar from "./opening/Navbar";
import Approach from "./opening/Approach";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/cct" element={<CCT />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/" element={<Hero />} />
        <Route path="/approach" element={<Approach />} />

      </Routes>
    </Router>
  );
}

export default App;

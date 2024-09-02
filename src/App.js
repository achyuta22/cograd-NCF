import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CCT from "./opening/CCT";
import Culture from "./opening/Culture";
import Hero from "./opening/Hero";
import Approach from "./opening/Approach";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cct" element={<CCT />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/" element={<Hero />} />
        <Route path="/approach" element={<Approach />} />
      </Routes>
    </Router>
  );
}

export default App;

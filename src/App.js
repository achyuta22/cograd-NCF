import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ncfe from "./opening/Ncfe";
import CCT from "./opening/CCT";
import Culture from "./opening/Culture";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ncfe />} />
        <Route path="/cct" element={<CCT />} />
        <Route path="/culture" element={<Culture />} />
      </Routes>
    </Router>
  );
}

export default App;

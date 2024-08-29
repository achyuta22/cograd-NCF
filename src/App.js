import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ncfe from "./opening/Ncfe";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ncfe />} />
      </Routes>
    </Router>
  );
}

export default App;

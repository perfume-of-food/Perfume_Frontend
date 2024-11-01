import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Cover } from "@/pages/Cover/Cover";
import { Intro } from "@/pages/Intro/Intro";
import { MoodSelection } from "@/pages/MoodSelection/MoodSelection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/mood-selection" element={<MoodSelection />} />
      </Routes>
    </Router>
  );
}

export default App;

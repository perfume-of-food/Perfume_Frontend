import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Cover } from "@/pages/Cover/Cover";
import { Intro } from "@/pages/Intro/Intro";
import { MoodDashboard } from "@/pages/MoodDashboard/MoodDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/mood-dashboard" element={<MoodDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

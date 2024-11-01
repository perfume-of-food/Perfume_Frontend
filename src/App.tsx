import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Cover } from "@/pages/Cover/Cover";
import { Menu } from "@/pages/Menu/Menu";
import { MoodDashboard } from "@/pages/MoodDashboard/MoodDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/mood-dashboard" element={<MoodDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

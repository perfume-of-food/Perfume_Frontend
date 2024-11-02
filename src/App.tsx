import "./App.css";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Cover } from "@/pages/Cover/Cover";
import { Intro } from "@/pages/Intro/Intro";
import { MoodSelection } from "@/pages/MoodSelection/MoodSelection";
import { MenuFood } from './pages/MenuFood/MenuFood';
import { LoadingPage } from "@/components/LoadingPage/LaodingPage"
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/mood-selection" element={<MoodSelection />} />
        <Route path="/menufood" element={<MenuFood />} />
        <Route path="/desert" element={<MenuFood />} />
        <Route path="/drink" element={<MenuFood />} />
        <Route path="/snacks" element={<MenuFood />} />
        <Route path="/others" element={<MenuFood />} />
      </Routes>
    </Router>
  );
}

export default App;

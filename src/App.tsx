import "./App.css";
import {
  HashRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Cover } from "@/pages/Cover/Cover";
import { Intro } from "@/pages/Intro/Intro";
import { MoodRecommendation } from "@/pages/MoodRecommendation/MoodRecommendation";
import { MoodPickup } from "@/pages/MoodPickup/MoodPickup";
import { useGameManagerStore } from "@/stores/useGameManagerStore";
import { Step } from "@/types/Step";
import { useEffect } from "react";
import { Survey } from "@/pages/Survey/Survey";
import { MoodMenu } from "@/pages/MoodMenu/MoodMenu";
import { MoodMenuIntro } from "@/pages/MoodMenuIntro/MoodMenuIntro";
import { PerfumePrinting } from "@/pages/PerfumePrinting/PerfumePrinting";
import { Ending } from "@/pages/Ending/Ending";
function AppRoutes() {
  const { step } = useGameManagerStore();
  const navigate = useNavigate();

  useEffect(() => {
    switch (step) {
      case Step.MOOD_INTRO_START:
        navigate("/mood-recommendation");
        break;
      case Step.MOOD_PICKUP_PANEL:
        navigate("/mood-pickup");
        break;
      case Step.MOOD_MENU_INTRO:
        navigate("/mood-menu-intro");
        break;
      case Step.MOOD_MENU:
        navigate("/mood-menu");
        break;
      case Step.PERFUME_PRINTING:
        navigate("/perfume-printing");
        break;
      case Step.ENDING:
        navigate("/ending");
        break;
      case Step.SURVEY:
        navigate("/survey");
        break;
    }
  }, [step, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Cover />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/mood-recommendation" element={<MoodRecommendation />} />
      <Route path="/mood-pickup" element={<MoodPickup />} />
      <Route path="/mood-menu-intro" element={<MoodMenuIntro />} />
      <Route path="/mood-menu" element={<MoodMenu />} />
      <Route path="/perfume-printing" element={<PerfumePrinting />} />
      <Route path="/ending" element={<Ending />} />
      <Route path="/survey" element={<Survey />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

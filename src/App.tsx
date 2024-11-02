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
import { MoodPickup } from "./pages/MoodPickup/MoodPickup";
import { useIntroStore } from "./stores/useIntroStore";
import { Step } from "./types/steps";
import { useEffect } from "react";
import { SurveyPage } from "./components/SurveyPage/SurveyPage";
import { MoodMenu } from "./pages/MoodMenu/MoodMenu";

function AppRoutes() {
  const { step } = useIntroStore();
  const navigate = useNavigate();

  useEffect(() => {
    switch (step) {
      case Step.MOOD_INTRO:
        navigate("/mood-recommendation");
        break;
      case Step.MOOD_PICKUP_PANEL:
        navigate("/mood-pickup");
        break;
      case Step.MOOD_MENU:
        navigate("/mood-menu");
        break;
    }
  }, [step, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Cover />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/mood-recommendation" element={<MoodRecommendation />} />
      <Route path="/mood-pickup" element={<MoodPickup />} />
      <Route path="/mood-menu" element={<MoodMenu />} />
      <Route path="/desert" element={<MoodMenu />} />
      <Route path="/drink" element={<MoodMenu />} />
      <Route path="/snacks" element={<MoodMenu />} />
      <Route path="/others" element={<MoodMenu />} />
      <Route path="/survey" element={<SurveyPage />} />
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

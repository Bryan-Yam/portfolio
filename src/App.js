import About from "./components/pages/About";
import FridgePage from "./components/pages/FridgePage";
import GamesPage from "./components/pages/GamesPage";
import LandingPage from "./components/pages/LandingPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import { Route, Routes } from "react-router-dom";
import RebrandPage from "./components/pages/RebrandPage";
import ApexPage from "./components/pages/ApexPage";
import QuestPage from "./components/pages/QuestPage";
import TFTSetPage from "./components/pages/TFTSetPage";
import TFTDamagePage from "./components/pages/TFTDamagePage";
import SpotifyPage from "./components/pages/SpotifyPage";
import DRDCPage from "./components/pages/DRDCPage";
import CRMPage from "./components/pages/CRMPage";
import CapstonePage from "./components/pages/CapstonePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<LandingPage />} />
        <Route path="/product" element={<ProjectsPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/fridge" element={<FridgePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/rebrand" element={<RebrandPage />} />
        <Route path="/apex" element={<ApexPage />} />
        <Route path="/setdesign" element={<TFTSetPage />} />
        <Route path="/quest" element={<QuestPage />} />
        <Route path="/damagenumbers" element={<TFTDamagePage />} />
        <Route path="/spotify" element={<SpotifyPage />} />
        <Route path="/drdc" element={<DRDCPage />} />
        <Route path="/crm" element={<CRMPage />} />
        <Route path="/capstone" element={<CapstonePage />} />
      </Routes>
    </>
  );
}

export default App;

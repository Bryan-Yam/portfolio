import About from "./components/pages/About";
import FridgePage from "./components/pages/FridgePage";
import GamesPage from "./components/pages/GamesPage";
import LandingPage from "./components/pages/LandingPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProjectsPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/fridge" element={<FridgePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

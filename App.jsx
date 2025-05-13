// Portfolio Website Starter Plan
// This will be a React + Tailwind project with modular components and routing.

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Academic from "./pages/Academic.jsx";
import Projects from "./pages/Projects.jsx";
import ToDo from "./pages/ToDo.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </Router>
  );
}

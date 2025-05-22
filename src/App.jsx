import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import AllPublications from "./components/AllPublications";
import SelectedPublications from "./components/SelectedPublications";
import UnderReviewPublications from "./components/UnderReviewPublications";

import TeachingService from "./components/TeachingService";
import Projects from "./components/Projects";
import AcademicHonors from "./components/AcademicHonors";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publications/all" element={<AllPublications />} />
            <Route path="/publications/selected" element={<SelectedPublications />} />
            <Route path="/publications/under-review" element={<UnderReviewPublications />} />
            <Route path="/teaching-service" element={<TeachingService />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/academichonors" element={<AcademicHonors />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

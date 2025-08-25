import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import HomePage from "./pages/HomePage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ProjectsPage from "./pages/ProjectsPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
      </Routes>
    </div>
  )
}

export default App

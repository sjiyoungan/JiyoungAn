import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { PasswordGate } from "@/components/PasswordGate"
import { SiteLayout } from "@/components/SiteLayout"
import { AboutPage } from "@/pages/AboutPage"
import { ProjectPage } from "@/pages/ProjectPage"
import { ProjectsPage } from "@/pages/ProjectsPage"
import { ResumePage } from "@/pages/ResumePage"

function App() {
  return (
    <PasswordGate>
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Navigate to="/projects" replace />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PasswordGate>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"

import { PasswordGate } from "@/components/PasswordGate"
import { SiteLayout } from "@/components/SiteLayout"
import { AboutPage } from "@/pages/AboutPage"
import { HomePage } from "@/pages/HomePage"
import { ProjectPage } from "@/pages/ProjectPage"
import { ResumePage } from "@/pages/ResumePage"

function App() {
  return (
    <PasswordGate>
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PasswordGate>
  )
}

export default App

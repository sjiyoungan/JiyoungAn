import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom"

import { PasswordGate } from "@/components/PasswordGate"
import { SiteLayout } from "@/components/SiteLayout"
import { AboutPage } from "@/pages/AboutPage"
import { ProjectPage } from "@/pages/ProjectPage"
import { ProjectsPage } from "@/pages/ProjectsPage"
import { ResumePage } from "@/pages/ResumePage"

function LegacyProjectRedirect() {
  const { slug } = useParams<{ slug: string }>()
  return <Navigate to={slug ? `/${slug}` : "/"} replace />
}

function App() {
  return (
    <PasswordGate>
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/projects" element={<Navigate to="/" replace />} />
            <Route path="/projects/:slug" element={<LegacyProjectRedirect />} />
            <Route path="/:slug" element={<ProjectPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PasswordGate>
  )
}

export default App

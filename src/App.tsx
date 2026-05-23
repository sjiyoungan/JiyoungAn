import { BrowserRouter, Route, Routes } from "react-router-dom"

import { PasswordGate } from "@/components/PasswordGate"
import { HomePage } from "@/pages/HomePage"
import { ProjectPage } from "@/pages/ProjectPage"

function App() {
  return (
    <PasswordGate>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </PasswordGate>
  )
}

export default App

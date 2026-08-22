import { App } from './app.jsx'
import { createRoot } from "preact/compat/client";

import './index.css'
import { BrowserRouter,Routes,Route } from "react-router";
import ProjectsPage from './Pages/ProjectsPage.jsx';
createRoot(document.getElementById("app")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  </BrowserRouter>,
);

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './fonts.css'
import './App.css'
import { HomePage } from './components/pages/HomePage';
import { CoursePage } from './components/pages/CoursePage';
import { ModulePage } from './components/pages/ModulePage';
import { CourseListPage } from './components/pages/CourseListPage';
import { GlossaryPage } from './components/pages/GlossaryPage';
import { TermPage } from './components/pages/TermPage';
import { AboutPage } from './components/pages/AboutPage';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/glossary/:termID" element={<TermPage />} />
        <Route path="/courses" element={<CourseListPage />} />
        <Route path="/courses/:courseID" element={<CoursePage />} />
        <Route path="/courses/:courseID/modules/:moduleID" element={<ModulePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App

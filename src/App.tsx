import { useAtom } from 'jotai'
import './App.css'
import { queryAtom } from './atoms'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './components/pages/HomePage'
import { CoursesPage } from './components/pages/CoursesPage'
import { LessonsPage } from './components/pages/LessonsPage'
import { LecturePage } from './components/pages/LecturePage'

function App() {
  const [query] = useAtom(queryAtom) 
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/courses' element={<CoursesPage />} />
        <Route path='/courses/:courseID' element={<LessonsPage />} />
        <Route path='/courses/lectures/:lectureID' element={<LecturePage />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

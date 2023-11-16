import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './components/home/HomePage'
import { Sidebar } from './components/sidebar'
import { HomeCourses } from './components/home/HomeCourses'
import { HomeProperty } from './components/home/HomeProperty'

function App() {

  return (
    <BrowserRouter>
    <div className='App'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection/:letter' element={<HomeCourses />} />
        <Route path='/property/:propertyName' element={<HomeProperty />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes> 
    </div>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { HomePage } from './components/Home/HomePage'
import { Sidebar } from './components/Sidebar'
import { PropertyPage } from './components/Property/PropertyPage'

const App = () => {

  return (
    <BrowserRouter>
    <div className='App bg-backgrounds-500 min-h-screen'>
      <Sidebar />
      <div className="container mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/property/:id" element={<PropertyPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App

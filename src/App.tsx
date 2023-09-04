import './App.css'
import { Header } from './components/Header'
import { HomePage } from './components/Home/HomePage'
import { Sidebar } from './components/Sidebar'

const App = () => {

  return (
    <div className='App bg-backgrounds-500 min-h-screen'>
      <Sidebar />
      <div className="container mx-auto">
        <Header />
        <HomePage />
      </div>
    </div> 
  )
}

export default App

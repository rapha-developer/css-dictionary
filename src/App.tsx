import './App.css'
import { Feed } from './components/Feed'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

const App = () => {

  return (
    <div className='App bg-backgrounds-500 min-h-screen'>
      <Sidebar />
      <div className="container mx-auto">
        <Header />
        <Feed />
      </div>
    </div> 
  )
}

export default App

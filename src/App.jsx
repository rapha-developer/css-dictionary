import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UiSidebar from './components/sidebar/UiSidebar';
import UiHeadBar from './components/headbar/UiHeadBar';
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [isShowSidebar, setIsShowSidebar] = useState(false)
  function changeIsShowSidebar() {
    setIsShowSidebar(prevState => !prevState)
  }
  return (
    <div className="App">
      <UiSidebar 
        changeIsShowSidebar={() => changeIsShowSidebar()}
        isShowSidebar={isShowSidebar}
      />
      <div className="App__main">
        <UiHeadBar 
          changeIsShowSidebar={() => changeIsShowSidebar()}
          isShowSidebar={isShowSidebar}
        />
        <Outlet />
      </div>
    </div>
  )
}

export default App

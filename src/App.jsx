import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UiSidebar from './components/sidebar/UiSidebar';
import UiHeadBar from './components/headbar/UiHeadBar';
import './App.css'
import UiCategoriesDetailsPage from './pages/categories/details/UiCategoriesDetailsPage';
import { categoryDetailsExample } from './data/categoryDetails'
import UiEncyclopediaPage from './pages/encyclopedia/UiEncyclopediaPage';
import { createStartWithEncyclopediaPage } from './data/encyclopedia/createEncyclopediaPage'
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
      <section className="home">
        <UiHeadBar 
          changeIsShowSidebar={() => changeIsShowSidebar()}
          isShowSidebar={isShowSidebar}
        />
        <UiEncyclopediaPage 
          title={createStartWithEncyclopediaPage.title}
          collection={createStartWithEncyclopediaPage.items}
        />
        {/* <UiCategoriesDetailsPage 
          title={categoryDetailsExample.title}
          description={categoryDetailsExample.description}
          sample={categoryDetailsExample.sample}
        /> */}
      </section>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UiSidebar from './components/sidebar/UiSidebar';
import UiHeadBar from './components/headbar/UiHeadBar';
import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import UiFooter from './components/footer/UiFooter';

function App() {
  const { headline } = useLoaderData() 
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
          headline={headline}
        />
        <Outlet />
        <UiFooter />
      </div>
    </div>
  )
}
export async function loader({ params }) {
  const allSlugNames = Object.keys(params)
  function generateFormattedResponse(headline__text) {
    return {
      headline: headline__text
    }
  }

  const paramsAreEmpty = (allSlugNames.length === 0) ? true : false
  if(paramsAreEmpty) {
    return generateFormattedResponse("Home")
  }
  const lastSlugName = allSlugNames[allSlugNames.length - 1]
  if (lastSlugName === "categorySlug") {
    return generateFormattedResponse("Category list")
  }
  if (lastSlugName === "propertyName") {
    return generateFormattedResponse("Sample list")
  }
  if (lastSlugName === "propertyID") {
    return generateFormattedResponse("Property details")
  }
  return generateFormattedResponse("Css dictionary")
}
export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import UiEncyclopediaPage, {loader as encyclopediaLoader} from './pages/encyclopedia/UiEncyclopediaPage'
import UiCategoriesDetailsPage from './pages/categories/details/UiCategoriesDetailsPage'
import App,{loader as appLoader} from './App'
import UiCategoriesSamples, {loader as sampleLoader} from './pages/categories/samples/UiCategoriesSamples'
import UiErrorDetailsPage from './pages/error/details/UiErrorDetailsPage'
import UiErrorMainPage from './pages/error/main/UiErrorMainPage'
import UiHomePage from './pages/home/UiHomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <UiErrorMainPage />,
    loader: appLoader,
    children: [
      {
        path: "/",
        element: <UiHomePage />,
        errorElement: <UiErrorMainPage />,
      }, 
      {
        path: "ref/:categorySlug",
        element: <UiEncyclopediaPage />,
        errorElement: <UiErrorDetailsPage />,
        loader: encyclopediaLoader
      }, 
      {
        path: "ref/:category/:propertyName",
        element: <UiCategoriesSamples />,
        errorElement: <UiErrorDetailsPage />,
        loader: sampleLoader,
      },
      {
        path: "ref/:category/:propertyName/:propertyID",
        element: <UiCategoriesDetailsPage />,
        errorElement: <UiErrorDetailsPage />,
        loader: sampleLoader
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

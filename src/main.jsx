import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import UiEncyclopediaPage, {loader as encyclopediaLoader} from './pages/encyclopedia/UiEncyclopediaPage'
import UiCategoriesDetailsPage from './pages/categories/details/UiCategoriesDetailsPage'
import App from './App'
import UiCategoriesSamples, {loader as sampleLoader} from './pages/categories/samples/UiCategoriesSamples'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "ref/:categorySlug",
        element: <UiEncyclopediaPage />,
        loader: encyclopediaLoader
      }, 
      {
        path: "ref/:category/:propertyName",
        element: <UiCategoriesSamples />,
        loader: sampleLoader,
      },
      {
        path: "ref/:category/:propertyName/:propertyID",
        element: <UiCategoriesDetailsPage />,
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


import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Layout/Layout'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import About from './Pages/About'
import Products from './Pages/Products'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'products',
        element: <Products/>
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// React Router dom Packages
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Pages/About.tsx'
import Contact from './Pages/Contact.tsx'
import Projects from './Pages/Projects.tsx'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <App />},
      {path: '/about', element: <About />},
      {path: '/contact', element: <Contact />},
      {path: '/projects', element: <Projects />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// React Router dom Packages
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Pages/About.tsx'
import Contact from './Pages/Contact.tsx'
import Projects from './Pages/Projects.tsx'
import ContactSuccess from './Pages/ContactSuccess.tsx'
import Interests from './Components/About/Interests.tsx'
import Educational from './Components/About/Educational.tsx'
import Hello from './Pages/Hello.tsx'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <Hello />},
      {path: '/about', element: <About />},
      {path: '/about/interests', element: <Interests />},
      {path: '/about/educational', element: <Educational />},
      {path: '/contact', element: <Contact />},
      {path: '/contact/success', element: <ContactSuccess />}, 
      {path: '/projects', element: <Projects />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)

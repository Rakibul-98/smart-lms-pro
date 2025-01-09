import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Courses from './components/Courses/Courses.jsx'
import Layout from './components/Layout/Layout.jsx'
import CourseDetails from './components/CourseDetails/CourseDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/courses',
        element: <Courses />,
        loader: async () => await fetch ("http://localhost:5000/api/v1/courses/category")
      },
      {
        path: 'course/:id',
        loader: async ({params})=> await fetch(`http://localhost:5000/api/v1/courses/${params.id}`),
        element: <CourseDetails />,
      },
      {
        path: '*',
        element: <h1>Page not found</h1>,
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

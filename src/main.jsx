import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Home from './Pages/Home.jsx';
import SuccessStory from './Pages/SuccessStory.jsx';
import ProjectShowcase from './Pages/ProjectShowcase.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "successStory",
        element: <SuccessStory></SuccessStory>
      },
      {
        path: "projectShowcase",
        element:<ProjectShowcase></ProjectShowcase>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

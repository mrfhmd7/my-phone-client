import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main.jsx';
import Phones from './components/Phones.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/phones',
        element: <Phones />,
        loader: () => fetch('http://localhost:4000/phones')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

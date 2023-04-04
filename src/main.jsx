import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';

import "./assets/styles/reset.css";
import "./assets/styles/variables.css";
import "./assets/styles/global.css";

import { router } from "./router";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)

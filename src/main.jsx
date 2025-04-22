import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import './index.css'
import {
  RouterProvider,
} from "react-router";
import { router } from './Routs/Routs';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <RouterProvider router={router} />
  </StrictMode>,
)

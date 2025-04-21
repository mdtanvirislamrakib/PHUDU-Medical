import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home
      },
      {
        path: "/my-booking",
        element: <p>my booking</p>
      },
      {
        path: '/blogs',
        element: <p>Blogs section</p>
      }
    ]
  },
  {
    path: '/about',
    element: <p>This is about</p>
  }
]);
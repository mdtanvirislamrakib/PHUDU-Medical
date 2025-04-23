import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import { Component } from "react";
import DoctorDetails from "../pages/DoctorDetails/DoctorDetails";
import MyBookings from "../pages/My-Bookings/MyBookings";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blogs from "../pages/Blogs/Blogs";
import NoData from "../pages/NoData/NoData";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
        hydrateFallbackElement: <span className="loading loading-infinity loading-7xl text-indigo-600 min-h-screen flex items-center justify-center mx-auto my-auto"></span>,
        loader: () => fetch('../doctorData.json')
      },
      {
        path: "/my-booking",
        hydrateFallbackElement: <span className="loading loading-infinity loading-7xl text-indigo-600 min-h-screen flex items-center justify-center mx-auto my-auto"></span>,
        Component: MyBookings,
      },
      {
        path: '/blogs',
        hydrateFallbackElement: <span className="loading loading-infinity loading-7xl text-indigo-600 min-h-screen flex items-center justify-center mx-auto my-auto"></span>,
        loader: () => fetch('../blogsData.json'),
        Component: Blogs
      },
      {
        path: '/doctor-details/:id',
        hydrateFallbackElement: <span className="loading loading-infinity loading-7xl text-indigo-600 min-h-screen flex items-center justify-center mx-auto my-auto"></span>,
        loader: () => fetch('../doctorData.json'),
        Component: DoctorDetails,
        errorElement: <NoData></NoData>,
      },

    ]
  },
  {
    path: "/contact",
    Component: ErrorPage,
  }
]);
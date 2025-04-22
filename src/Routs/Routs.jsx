import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import { Component } from "react";
import DoctorDetails from "../pages/DoctorDetails/DoctorDetails";
import MyBookings from "../pages/My-Bookings/MyBookings";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
        hydrateFallbackElement: <p>loading...</p>,
        loader: () => fetch('../doctorData.json')
      },
      {
        path: "/my-booking",
        Component: MyBookings,
      },
      {
        path: '/blogs',
        element: <p>Blogs section</p>
      },
      {
        path: '/doctor-details/:id',
        hydrateFallbackElement: <span className="loading loading-spinner loading-lg text-indigo-600 text-center"></span>,
        loader: () => fetch('../doctorData.json'),
        Component: DoctorDetails
      }
    ]
  },
]);
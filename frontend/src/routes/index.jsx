import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DoctorDashboard from "../pages/DoctorDashboard.jsx";
import CommonElement from "../App.jsx";
import DoctorRegistration from "../Admin/pages/DoctorRegistration.jsx";
import AdminDashborad from "../Admin/pages/AdminDashborad.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonElement />,
    children: [
      {
        path: "/",
        element: false ? <DoctorDashboard /> : <AdminDashborad />,
      },
      {
        path: "/manage/doctors/new",
        element: <DoctorRegistration />,
      },
    ],
  },
]);

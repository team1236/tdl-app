import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DoctorDashboard from "../pages/DoctorDashboard.jsx";
import CommonElement from "../App.jsx";
import DoctorRegistration from "../Admin/pages/DoctorRegistration.jsx";
import AdminDashborad from "../Admin/pages/AdminDashborad.jsx";
import DoctorsList from "../Admin/pages/DoctorsList.jsx";
import DoctorAppraisal from "../pages/DoctorAppraisal.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonElement />,
    children: [
      {
        path: "/",
        element: true ? <DoctorDashboard /> : <AdminDashborad />,
      },
      {
        path: "/manage/doctors/new",
        element: <DoctorRegistration />,
      },
      {
        path: "/manage/doctors/all",
        element: <DoctorsList />,
        path: "/doctor/appraisal",
        element: <DoctorAppraisal />,
      },
    ],
  },
]);

// src/patient/PatientLayout.tsx
// Plain pass-through shell. Each patient page (DashboardPage, AppointmentsPage, etc.)
// already wraps itself in DashboardLayout, which owns the sidebar/header.
// This file only exists so AppRouter can nest the 5 patient routes under /patient/*.

import { Outlet } from "react-router-dom";

export default function PatientLayout() {
  return <Outlet />;
}
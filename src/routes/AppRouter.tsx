// src/routes/AppRouter.tsx
// Standalone PATIENT app — this repo only ever serves the patient role.

import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

// ─── Auth pages ───────────────────────────────────────────────────────────────
import LoginProduct from "../auth/pages/LoginProduct";
import LoginPassword from "../auth/pages/LoginPassword";
import OTPVerify from "../auth/pages/OTPVerify";
import Signup from "../auth/pages/Signup";

// ─── Patient ──────────────────────────────────────────────────────────────────
import PatientLayout from "../patient/PatientLayout";
import DashboardPage from "../patient/dashboard/pages/DashboardPage";
import AppointmentsPage from "../patient/appointments/pages/AppointmentsPage";
import BillingPage from "../patient/billing/pages/BillingPage";
import ConsultationPage from "../patient/consultation/pages/ConsultationPage";
import PrescriptionPage from "../patient/prescription/pages/PrescriptionsPage";
import SettingsPage from "../patient/settings/pages/SettingsPage";

interface AppRouterProps {
  onLogoutClick: () => void;
}

export default function AppRouter({ onLogoutClick }: AppRouterProps) {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>

      {/* Bare "/" → dashboard if logged in, login page if not.
          (No ProtectedRoute yet — direct typing of /dashboard etc. is not
          guarded. That's intentional for now, to be added later.) */}
      <Route
        path="/"
        element={<Navigate to={isAuthenticated ? "/dashboard" : "/auth/login"} replace />}
      />

      {/* ── Auth ─────────────────────────────────────────────────────────── */}
      <Route path="/auth/login"    element={<LoginProduct />} />
      <Route path="/auth/password" element={<LoginPassword />} />
      <Route path="/auth/otp"      element={<OTPVerify />} />
      <Route path="/auth/signup"   element={<Signup />} />

      {/* ── Patient (root-level — this repo IS the patient app) ─────────── */}
      <Route path="/" element={<PatientLayout />}>
        <Route path="dashboard"    element={<DashboardPage onLogoutClick={onLogoutClick} />} />
        <Route path="appointments" element={<AppointmentsPage onLogoutClick={onLogoutClick} />} />
        <Route path="consultation" element={<ConsultationPage onLogoutClick={onLogoutClick} />} />
        <Route path="prescription" element={<PrescriptionPage onLogoutClick={onLogoutClick} />} />
        <Route path="billing"      element={<BillingPage onLogoutClick={onLogoutClick} />} />
        <Route path="settings"     element={<SettingsPage onLogoutClick={onLogoutClick} />} />
      </Route>

      {/* 404 → back to login */}
      <Route path="*" element={<Navigate to="/auth/login" replace />} />

    </Routes>
  );
}
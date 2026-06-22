// PatientPrescriptionsPage.tsx (PrescriptionsPage exported from this file uses similar pattern)
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { Patient, Prescription } from "../types/prescription.types";
import Sidebar from "../../dashboard/components/layout/Sidebar";
import Header from "../../dashboard/components/layout/Header";
import PrescriptionSearch from "../components/PrescriptionSearch";
import PatientInfo from "../components/PatientInfo";
import ExistingPrescriptions from "../components/ExistingPrescriptions";
import AddPrescriptionForm from "../components/AddPrescriptionForm";
import ViewPrescription from "../components/ViewPrescription";

const MOCK_PRESCRIPTIONS: Prescription[] = [
  { id: "1", date: "03 Dec 2025", doctor: "Dr. Prakash", treatment: "Head Pain" },
  { id: "2", date: "16 Oct 2025", doctor: "Dr. Prakash", treatment: "General Checkup" },
];

type View = "patient" | "addPrescription" | "viewPrescription";

interface Props {
  onLogoutClick: () => void;
}

export default function PatientPrescriptionsPage({ onLogoutClick }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  const [view, setView] = useState<View>("patient");
  const [selectedPrescription, setSelectedPrescription] = useState<Prescription | null>(null);

  const patient: Patient = location.state?.patient ?? {
    id: "1",
    name: "John Mathew",
    phone: "+91 98765 43210",
    uhid: "C0987654321",
    email: "jmathew@gmail.com",
    lastVisit: "03 Dec 2025",
  };

  const handleNewSearch = (p: Patient | null) => {
    if (p) navigate("/prescriptions/patient", { state: { patient: p } });
  };

  const handleView = (prescription: Prescription) => {
    setSelectedPrescription(prescription);
    setView("viewPrescription");
  };

  const handleConfirm = () => {
    setView("patient");
  };

  const getBackHandler = () => {
    if (view === "addPrescription" || view === "viewPrescription") {
      return () => setView("patient");
    }
    return undefined;
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar onLogoutClick={onLogoutClick} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          title="Prescriptions"
          showSearch={false}
          onBack={getBackHandler()}
        />

        <main className="flex flex-1 flex-col overflow-y-auto p-4 gap-3">

          {view === "patient" && (
            <div className="rounded-xl bg-white px-5 py-4 shadow-sm">
              <PrescriptionSearch onPatientFound={handleNewSearch} />
            </div>
          )}

          {view === "patient" && (
            <div className="flex flex-1 flex-col gap-3">
              <PatientInfo patient={patient} />
              <ExistingPrescriptions
                prescriptions={MOCK_PRESCRIPTIONS}
                onAdd={() => setView("addPrescription")}
                onView={handleView}
              />
            </div>
          )}

          {view === "addPrescription" && (
            <div className="flex flex-1 flex-col">
              <AddPrescriptionForm
                onBack={() => setView("patient")}
                onConfirm={handleConfirm}
              />
            </div>
          )}

          {view === "viewPrescription" && selectedPrescription && (
            <div className="flex flex-1 gap-3 overflow-hidden">
              <ViewPrescription
                prescription={selectedPrescription}
                onBack={() => setView("patient")}
              />
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
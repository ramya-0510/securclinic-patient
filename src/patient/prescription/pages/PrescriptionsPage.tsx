import { useState } from "react";
import type { Patient, Prescription } from "../types/prescription.types";
import PrescriptionSearch from "../components/PrescriptionSearch";
import PatientInfo from "../components/PatientInfo";
import ExistingPrescriptions from "../components/ExistingPrescriptions";
import ViewPrescription from "../components/ViewPrescription";
import AddPrescriptionForm from "../components/AddPrescriptionForm";
import Sidebar from "../../dashboard/components/layout/Sidebar";
import Header from "../../dashboard/components/layout/Header";
import search from "../../../assets/search.png";

const MOCK_PRESCRIPTIONS: Prescription[] = [
  { id: "1", date: "03 Dec 2025", doctor: "Dr. Prakash", treatment: "Head Pain" },
  { id: "2", date: "16 Oct 2025", doctor: "Dr. Prakash", treatment: "General Checkup" },
];

type View = "search" | "patient" | "viewPrescription" | "addPrescription";

interface Props {
  onLogoutClick: () => void;
}

export default function PrescriptionsPage({ onLogoutClick }: Props) {
  const [patient, setPatient]                       = useState<Patient | null>(null);
  const [view, setView]                             = useState<View>("search");
  const [selectedPrescription, setSelectedPrescription] = useState<Prescription | null>(null);

  const handlePatientFound = (p: Patient | null) => {
    if (p) { setPatient(p); setView("patient"); }
    else   { setPatient(null); setView("search"); }
  };

  const handleView = (prescription: Prescription) => {
    setSelectedPrescription(prescription);
    setView("viewPrescription");
  };

  const getOnBack = () => {
    if (view === "viewPrescription")  return () => setView("patient");
    if (view === "addPrescription")   return () => setView("patient");
    return undefined;
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar onLogoutClick={onLogoutClick} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          title="Prescriptions"
          showSearch={false}
          onBack={getOnBack()}
        />

        <main className="flex flex-1 flex-col overflow-hidden p-4 gap-3">

          {/* Search — only on search and patient views */}
          {(view === "search" || view === "patient") && (
            <div className="rounded-xl bg-white px-5 py-4 shadow-sm">
              <PrescriptionSearch onPatientFound={handlePatientFound} />
            </div>
          )}

          {/* Empty state */}
          {view === "search" && (
            <div className="flex flex-1 flex-col items-center justify-center rounded-xl bg-white shadow-sm text-center">
              <img
                src={search}
                alt="No patient selected"
                style={{ width: "280px", height: "187px", flexShrink: 0 }}
                className="mb-3 object-contain"
              />
              <h3 className="text-base font-semibold text-gray-700 mb-1">
                No patient selected 🔍
              </h3>
              <p className="text-gray-400 text-sm">
                Search a patient to view prescription history or create a new one.
              </p>
            </div>
          )}

          {/* Patient + prescriptions */}
          {view === "patient" && patient && (
            <div className="flex flex-col gap-3 overflow-y-auto flex-1">
              <PatientInfo patient={patient} />
              <ExistingPrescriptions
                prescriptions={MOCK_PRESCRIPTIONS}
                onAdd={() => setView("addPrescription")}
                onView={handleView}
              />
            </div>
          )}

          {/* View prescription */}
          {view === "viewPrescription" && selectedPrescription && (
            <div className="flex flex-1 min-h-0">
              <ViewPrescription
                prescription={selectedPrescription}
                onBack={() => setView("patient")}
              />
            </div>
          )}

          {/* Add new prescription */}
          {view === "addPrescription" && (
            <div className="flex flex-1 min-h-0">
              <AddPrescriptionForm
                onBack={() => setView("patient")}
                onConfirm={() => setView("patient")}
              />
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
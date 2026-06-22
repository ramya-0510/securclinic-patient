import { useState } from "react";
import type { BillingPatient, Bill } from "../types/billing.types";
import BillingSearch from "../components/BillingSearch";
import BillingPatientInfo from "../components/BillingPatientInfo";
import ExistingBills from "../components/ExistingBills";
import ViewBill from "../components/ViewBill";
import CreateNewBill from "../components/CreateNewBill";
import Sidebar from "../../dashboard/components/layout/Sidebar";
import Header from "../../dashboard/components/layout/Header";
import search from "../../../assets/search.png";

const MOCK_BILLS: Bill[] = [
  { id: "1", invoiceId: "INV-20251215-001", date: "16 Oct 2025", doctor: "Dr. Prakash", treatment: "Head Pain",       totalAmount: 850, status: "Paid" },
  { id: "2", invoiceId: "INV-20251215-834", date: "21 Sep 2025", doctor: "Dr. Prakash", treatment: "General Checkup", totalAmount: 600, status: "Paid" },
];

type View = "search" | "patient" | "viewBill" | "createBill";

interface Props {
  onLogoutClick: () => void;
}

export default function BillingPage({ onLogoutClick }: Props) {
  const [patient, setPatient]           = useState<BillingPatient | null>(null);
  const [view, setView]                 = useState<View>("search");
  const [selectedBill, setSelectedBill] = useState<Bill | null>(null);

  const handlePatientFound = (p: BillingPatient | null) => {
    if (p) { setPatient(p); setView("patient"); }
    else   { setPatient(null); setView("search"); }
  };

  const handleView = (bill: Bill) => {
    setSelectedBill(bill);
    setView("viewBill");
  };

  const getTitle = () => {
    if (view === "viewBill")    return "Billing & Invoices";
    if (view === "createBill")  return "Billing & Invoices";
    return "Billing & Invoices";
  };

  const getOnBack = () => {
    if (view === "viewBill")   return () => setView("patient");
    if (view === "createBill") return () => setView("patient");
    return undefined;
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar onLogoutClick={onLogoutClick} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          title={getTitle()}
          showSearch={false}
          onBack={getOnBack()}
        />

        <main className="flex flex-1 flex-col overflow-hidden p-4 gap-3">

          {/* Search — only on search and patient views */}
          {(view === "search" || view === "patient") && (
            <div className="rounded-xl bg-white px-5 py-4 shadow-sm">
              <BillingSearch onPatientFound={handlePatientFound} />
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
                Search a patient to view billing history or create a new bill.
              </p>
            </div>
          )}

          {/* Patient + bills */}
          {view === "patient" && patient && (
            <div className="flex flex-col gap-3 overflow-y-auto flex-1">
              <BillingPatientInfo patient={patient} />
              <ExistingBills
                bills={MOCK_BILLS}
                onCreateNew={() => setView("createBill")}
                onView={handleView}
              />
            </div>
          )}

          {/* View bill */}
          {view === "viewBill" && selectedBill && (
            <div className="flex flex-1 min-h-0">
              <ViewBill
                bill={selectedBill}
                onBack={() => setView("patient")}
              />
            </div>
          )}

          {/* Create new bill */}
          {view === "createBill" && (
            <div className="flex flex-1 min-h-0">
              <CreateNewBill
                onBack={() => setView("patient")}
                onGenerate={() => setView("patient")}
              />
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
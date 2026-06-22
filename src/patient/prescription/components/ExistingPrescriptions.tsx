import { Eye, Printer, Share2, CalendarDays, Stethoscope, ClipboardList, Plus } from "lucide-react";
import type { Prescription } from "../types/prescription.types";
import { useState } from "react";
import SharePrescriptionModal from "./SharePrescriptionModal";

interface Props {
  prescriptions: Prescription[];
  onAdd: () => void;
  onView: (prescription: Prescription) => void;
}

export default function ExistingPrescriptions({ prescriptions, onAdd, onView }: Props) {
  const [showShare, setShowShare] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState<Prescription | null>(null);

  const handleShare = (prescription: Prescription) => {
    setSelectedPrescription(prescription);
    setShowShare(true);
  };

  return (
    <div className="rounded-xl bg-white px-5 py-4 shadow-sm flex flex-col flex-1 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-slate-800">Existing Prescriptions</h2>
        <button
          onClick={onAdd}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-2 rounded-lg transition"
        >
          <Plus size={15} />
          Add Prescription
        </button>
      </div>

      <div className="rounded-lg border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-[250px_0.8fr_0.8fr_250px] border-b border-slate-200 bg-slate-50">
          <div className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-600">
            <CalendarDays size={13} /> Date
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-600 border-l border-slate-200">
            <Stethoscope size={13} /> Doctor
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-600 border-l border-slate-200">
            <ClipboardList size={13} /> Treatment
          </div>
          <div className="px-4 py-2.5 border-l border-slate-200" />
        </div>

        {/* Rows */}
        {prescriptions.map((rx, idx) => (
          <div
            key={rx.id}
            className={`grid grid-cols-[250px_0.8fr_0.8fr_250px] items-center ${
              idx !== prescriptions.length - 1 ? "border-b border-slate-100" : ""
            }`}
          >
            <div className="px-4 py-2.5 text-center">
              <span className="text-xs text-blue-500 bg-blue-50 px-2 py-0.5 rounded">
                {rx.date}
              </span>
            </div>
            <div className="px-4 py-2.5 text-center text-sm text-slate-700 border-l border-slate-100">
              {rx.doctor}
            </div>
            <div className="px-4 py-2.5 text-center text-sm text-slate-700 border-l border-slate-100">
              {rx.treatment}
            </div>
            <div className="flex items-center gap-6 px-7 py-2.5 border-l border-slate-100">
              <button
                onClick={() => onView(rx)}
                className="flex items-center gap-1 text-xs text-slate-500 hover:text-blue-600 transition"
              >
                <Eye size={13} /> View
              </button>
              <button className="flex items-center gap-1 text-xs text-slate-500 hover:text-blue-600 transition">
                <Printer size={13} /> Print
              </button>
              <button
                onClick={() => handleShare(rx)}
                className="flex items-center gap-1 text-xs text-slate-500 hover:text-blue-600 transition"
              >
                <Share2 size={13} /> Share
              </button>
            </div>
          </div>
        ))}
      </div>

      <SharePrescriptionModal
        isOpen={showShare}
        onClose={() => {
          setShowShare(false);
          setSelectedPrescription(null);
        }}
        prescriptionId={selectedPrescription?.id}
      />
    </div>
  );
}
import { Phone, Mail, Calendar, CreditCard, ClipboardList, Download, Printer, Share2, Stethoscope } from "lucide-react";
import type { Prescription } from "../types/prescription.types";
import { useState } from "react";
import SharePrescriptionModal from "./SharePrescriptionModal";

interface Props {
  prescription: Prescription;
  onBack: () => void;
}

const MOCK_MEDICINES = [
  { name: "Paracetamol 650mg", type: "Tablet", qty: "01", morning: "01", afternoon: "-", evening: "-", night: "01", notes: "Duration: 5 days, After food", price: 55 },
  { name: "Amoxicillin 500mg", type: "Capsule", qty: "01", morning: "-", afternoon: "-", evening: "-", night: "01", notes: "Duration: 5 days, Before food", price: 65 },
];

export default function ViewPrescription({ prescription, onBack }: Props) {
  const total = MOCK_MEDICINES.reduce((sum, m) => sum + m.price, 0);
  const [showShare, setShowShare] = useState(false);

  return (
    <div className="flex gap-4 w-full">

      {/* Left — Prescription document */}
      <div className="flex-1 rounded-xl bg-white shadow-sm flex flex-col">
        <div className="px-6 py-5 flex flex-col gap-5 flex-1">

          {/* ✅ REMOVED: internal "< Prescriptions" back button block */}

          {/* Clinic header */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-blue-600 font-bold text-xl tracking-wide">SECURCLINIC</h1>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1"><Phone size={11} /> 1-800-123-4567</span>
                <span className="flex items-center gap-1"><Mail size={11} /> support@securoak.com</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">Prescription ID: RX-20251212-001</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <img
                src="src/assets/logo.png"
                alt="SecurClinic logo"
                className="h-10 w-10 rounded-lg object-contain"
              />
              <span className="flex items-center gap-1 text-xs text-slate-500">
                <Calendar size={11} /> {prescription.date}
              </span>
            </div>
          </div>

          {/* Patient & Doctor info */}
          <div className="rounded-lg border border-slate-200 p-4 grid grid-cols-2 gap-20">
            <div>
              <div className="flex items-center gap-1.5 text-blue-600 text-xs font-semibold mb-2">
                <CreditCard size={12} /> Patient Information
              </div>
              <p className="text-sm font-semibold text-slate-800 mb-1.5">John Mathew</p>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                <span className="flex items-center gap-1"><CreditCard size={11} /> PID: C0987654321</span>
                <span>·</span>
                <span className="flex items-center gap-1"><ClipboardList size={11} /> Treatment: {prescription.treatment}</span>
              </div>
              <span className="flex items-center gap-1 text-xs text-slate-500"><Phone size={11} /> +91 98765 43210</span>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-blue-600 text-xs font-semibold mb-2">
                <Stethoscope size={12} /> Doctor Information
              </div>
              <p className="text-sm font-semibold text-slate-800 mb-1.5">{prescription.doctor}</p>
              <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
                <CreditCard size={11} /> Reg no: LKG3456709
              </div>
              <span className="flex items-center gap-1 text-xs text-slate-500"><Phone size={11} /> +91 98765 43210</span>
            </div>
          </div>

          {/* Medicines table */}
          <div className="rounded-lg border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-2.5 text-xs font-medium text-slate-600 w-[40%]">Medicine Name</th>
                  <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-600">Qty</th>
                  <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-600">Morning</th>
                  <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-600">Afternoon</th>
                  <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-600">Evening</th>
                  <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-600">Night</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_MEDICINES.map((m, idx) => (
                  <tr key={idx} className={idx !== MOCK_MEDICINES.length - 1 ? "border-b border-slate-100" : ""}>
                    <td className="px-4 py-3">
                      <p className="text-sm font-medium text-slate-800">{m.name} - {m.type}</p>
                      <p className="text-xs text-slate-400 mt-0.5">( Notes: {m.notes} )</p>
                    </td>
                    <td className="text-center px-3 py-3 text-sm text-slate-700">{m.qty}</td>
                    <td className="text-center px-3 py-3 text-sm text-slate-700">{m.morning}</td>
                    <td className="text-center px-3 py-3 text-sm text-slate-700">{m.afternoon}</td>
                    <td className="text-center px-3 py-3 text-sm text-slate-700">{m.evening}</td>
                    <td className="text-center px-3 py-3 text-sm text-slate-700">{m.night}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex-1" />

          {/* Signature */}
          <div className="flex justify-end">
            <div className="text-center">
              <div className="border-b mb-2 border-slate-400 w-40" />
              <p className="text-xs text-slate-400 mb-1">Signature</p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
            <p className="text-center text-xs text-slate-400 pb-2">
              Digitally generated prescription via SecurClinic
            </p>
          </div>

        </div>
      </div>

      {/* Right — Bill Summary */}
      <div className="w-100 shrink-0 rounded-xl bg-white shadow-sm flex flex-col">
        <div className="px-5 py-5 flex-1 flex flex-col">
          <h2 className="text-base font-semibold text-slate-800 mb-4">Bill Summary</h2>

          <div className="space-y-3 mb-4">
            {MOCK_MEDICINES.map((m, idx) => (
              <div key={idx} className="flex items-center justify-between gap-2">
                <span className="text-xs text-slate-600">{m.name} - {m.type}</span>
                <span className="text-xs text-slate-700 font-medium shrink-0">₹{m.price}.00</span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-3 flex items-center justify-between mb-6">
            <span className="text-sm font-semibold text-slate-800">Total:</span>
            <span className="text-base font-bold text-slate-900">₹{total}.00</span>
          </div>

          <div className="flex-1" />

          {/* QR Code */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-42 h-42 rounded-lg overflow-hidden">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=RX-20251212-001"
                alt="QR Code"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xs text-slate-400 text-center leading-relaxed">
              Scan the QR code to view this prescription digitally
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="px-5 pb-5 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400 shrink-0">or</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>
          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg transition">
            <Download size={14} /> Download PDF
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button className="flex items-center justify-center gap-1.5 border border-slate-200 text-sm text-slate-600 hover:bg-slate-50 py-2 rounded-lg transition">
              <Printer size={13} /> Print
            </button>
            <button
              onClick={() => setShowShare(true)}
              className="flex items-center justify-center gap-1.5 border border-slate-200 text-sm text-slate-600 hover:bg-slate-50 py-2 rounded-lg transition">
              <Share2 size={13} /> Share
            </button>
          </div>
        </div>
      </div>

      <SharePrescriptionModal
        isOpen={showShare}
        onClose={() => setShowShare(false)}
      />

    </div>
  );
}
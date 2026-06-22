import { Pencil, Phone, CreditCard, Mail, Calendar } from "lucide-react";
import type { Patient } from "../types/prescription.types";

interface Props {
  patient: Patient;
}

export default function PatientInfo({ patient }: Props) {
  return (
    <div className="rounded-xl bg-white px-5 py-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-slate-800">Patient Information</h2>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Calendar size={13} />
          <span>Last Visit: {patient.lastVisit ?? "—"}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        <div>
          <label className="text-xs text-slate-500 mb-1 block">Full Name</label>
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
            <Pencil size={13} className="text-slate-400 shrink-0" />
            <span>{patient.name}</span>
          </div>
        </div>

        <div>
          <label className="text-xs text-slate-500 mb-1 block">Patient ID (UHID)</label>
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
            <CreditCard size={13} className="text-slate-400 shrink-0" />
            <span>{patient.uhid ?? "—"}</span>
          </div>
        </div>

        <div>
          <label className="text-xs text-slate-500 mb-1 block">Mobile Number</label>
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
            <Phone size={13} className="text-slate-400 shrink-0" />
            <span>{patient.phone}</span>
          </div>
        </div>

        <div>
          <label className="text-xs text-slate-500 mb-1 block">Email Address</label>
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
            <Mail size={13} className="text-slate-400 shrink-0" />
            <span>{patient.email ?? "—"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
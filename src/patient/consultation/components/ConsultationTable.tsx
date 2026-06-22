import type { Consultation, ConsultationStatus } from "../types/consultation.types";
import { CreditCard, PenLine, Clock, Phone, Stethoscope, ClipboardList, Activity } from "lucide-react";

const MOCK_CONSULTATIONS: Consultation[] = [
  { id: "1", patientId: "C0987654321", patientName: "Albert Einstien", time: "11:00 AM", mobile: "+91 98765 43210", doctor: "Dr. Prakash", treatment: "General Checkup", status: "completed" },
  { id: "2", patientId: "C0987654321", patientName: "Albert Einstien", time: "11:00 AM", mobile: "+91 98765 43210", doctor: "Dr. Prakash", treatment: "General Checkup", status: "pending" },
  { id: "3", patientId: "C0987654321", patientName: "Albert Einstien", time: "11:00 AM", mobile: "+91 98765 43210", doctor: "Dr. Prakash", treatment: "General Checkup", status: "cancelled" },
  { id: "4", patientId: "C0987654321", patientName: "Albert Einstien", time: "11:00 AM", mobile: "+91 98765 43210", doctor: "Dr. Prakash", treatment: "General Checkup", status: "booked" },
];

const statusConfig: Record<ConsultationStatus, { label: string; dot: string; bg: string; text: string }> = {
  completed: { label: "Completed", dot: "bg-[#16C472]", bg: "bg-green-50",  text: "text-[#16C472]" },
  pending:   { label: "Pending",   dot: "bg-[#DFAF00]", bg: "bg-yellow-50", text: "text-[#DFAF00]" },
  cancelled: { label: "Cancelled", dot: "bg-red-400",   bg: "bg-red-50",    text: "text-red-500"   },
  booked:    { label: "Booked",    dot: "bg-[#DFAF00]", bg: "bg-yellow-50", text: "text-[#DFAF00]" },
};

interface Props {
  onJoin: (c: Consultation) => void;
}

export default function ConsultationTable({ onJoin }: Props) {
  return (
    <div className="rounded-xl border border-slate-100 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-100">
            <th className="text-center px-4 py-3 text-xs font-semibold text-slate-600">
              <span className="flex items-center justify-center gap-1.5"><CreditCard size={13} /> Patient ID</span>
            </th>
            <th className="text-center px-4 py-3 text-xs font-semibold text-slate-600">
              <span className="flex items-center justify-center gap-1.5"><PenLine size={13} /> Patient Name</span>
            </th>
            <th className="text-center px-4 py-3 text-xs font-semibold text-slate-600">
              <span className="flex items-center justify-center gap-1.5"><Clock size={13} /> Time</span>
            </th>
            <th className="text-center px-4 py-3 text-xs font-semibold text-slate-600">
              <span className="flex items-center justify-center gap-1.5"><Phone size={13} /> Mobile</span>
            </th>
            <th className="text-center px-4 py-3 text-xs font-semibold text-slate-600">
              <span className="flex items-center justify-center gap-1.5"><Stethoscope size={13} /> Doctor</span>
            </th>
            <th className="text-center px-4 py-3 text-xs font-semibold text-slate-600">
              <span className="flex items-center justify-center gap-1.5"><ClipboardList size={13} /> Treatment</span>
            </th>
            <th className="text-center px-4 py-3 text-xs font-semibold text-slate-600">
              <span className="flex items-center justify-center gap-1.5"><Activity size={13} /> Status</span>
            </th>
            <th className="text-center px-4 py-3 text-xs font-semibold text-slate-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {MOCK_CONSULTATIONS.map((c) => {
            const s = statusConfig[c.status];
            const canJoin = c.status === "pending" || c.status === "booked";
            return (
              <tr key={c.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition">
                <td className="text-center px-4 py-3.5 text-slate-700">{c.patientId}</td>
                <td className="text-center px-4 py-3.5 text-slate-800 font-medium">{c.patientName}</td>
                <td className="text-center px-4 py-3.5">
                  <span className="text-blue-500 font-medium">{c.time}</span>
                </td>
                <td className="text-center px-4 py-3.5 text-slate-700">{c.mobile}</td>
                <td className="text-center px-4 py-3.5 text-slate-700">{c.doctor}</td>
                <td className="text-center px-4 py-3.5 text-slate-700">{c.treatment}</td>
                <td className="text-center px-4 py-3.5">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${s.bg} ${s.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    {s.label}
                  </span>
                </td>
                <td className="text-center px-4 py-3.5">
                  {canJoin ? (
                    <button
                      onClick={() => onJoin(c)}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-1.5 rounded-lg transition"
                    >
                      Join
                    </button>
                  ) : (
                    <button className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">
                      View
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
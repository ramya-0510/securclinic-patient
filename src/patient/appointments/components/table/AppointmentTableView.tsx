import { useState } from "react";
import AppointmentTableHeader from "./AppointmentTableHeader";
import AppointmentTableRow from "./AppointmentTableRow";
import type { Appointment } from "../../types/appointment.types";

const mockData: Appointment[] = Array.from({ length: 8 }, (_, i) => ({
  id: String(i + 1),
  patientName: "Albert Einstien",
  pid: "D0987654321",
  time: "11:00 AM",
  slot: "2 / 4",
  doctor: "Dr. Prakash",
  treatment: "General Checkup",
  mobile: "+91 98765 43210",
  mode: i % 2 === 0 ? "Online" : "Clinic",
  status: (["completed", "pending", "cancelled", "booked"] as const)[i % 4],
}));

function AppointmentTableView() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const _allChecked = checked.size === mockData.length;

  const _toggleAll = (v: boolean) =>
    setChecked(v ? new Set(mockData.map((a) => a.id)) : new Set());

  const toggleOne = (id: string, v: boolean) =>
    setChecked((prev) => {
      const next = new Set(prev);
      v ? next.add(id) : next.delete(id);
      return next;
    });

  return (
    <div className="rounded-lg bg-white shadow-sm overflow-hidden">

    

      <div className="overflow-x-auto">
        <table className="w-full">
          <AppointmentTableHeader />
          <tbody>
            {mockData.map((appt) => (
              <AppointmentTableRow
                key={appt.id}
                appointment={appt}
                checked={checked.has(appt.id)}
                onCheck={toggleOne}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end gap-1 border-t border-slate-100 px-4 py-3">
        <button className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-400 hover:bg-slate-50">
          ‹
        </button>
        {[1, 2, 3, "...", 99].map((p, i) => (
          <button
            key={i}
            className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium transition-colors ${
              p === 1
                ? "bg-blue-600 text-white"
                : "border border-slate-200 text-slate-500 hover:bg-slate-50"
            }`}
          >
            {p}
          </button>
        ))}
        <button className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-400 hover:bg-slate-50">
          ›
        </button>
      </div>
    </div>
  );
}

export default AppointmentTableView;
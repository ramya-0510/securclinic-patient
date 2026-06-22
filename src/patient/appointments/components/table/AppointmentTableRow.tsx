import { Eye, Headphones } from "lucide-react";
import type { Appointment } from "../../types/appointment.types";

const STATUS_STYLES: Record<string, string> = {
  completed: "bg-green-50  text-green-600  border-green-200",
  pending:   "bg-orange-50 text-orange-500 border-orange-200",
  cancelled: "bg-red-50    text-red-500    border-red-200",
  booked:    "bg-yellow-50 text-yellow-600 border-yellow-200",
};

const STATUS_DOT: Record<string, string> = {
  completed: "bg-green-500",
  pending:   "bg-orange-400",
  cancelled: "bg-red-500",
  booked:    "bg-yellow-500",
};

const MODE_STYLES: Record<string, string> = {
  Online: "text-blue-500",
  Clinic: "text-slate-500",
};

interface Props {
  appointment: Appointment;
  checked: boolean;
  onCheck: (id: string, v: boolean) => void;
}

function AppointmentTableRow({ appointment, checked, onCheck }: Props) {
  const { id, patientName, time, mobile, doctor, treatment, mode, status } = appointment;

  return (
    <tr className={`border-b border-slate-100 transition-colors ${checked ? "bg-blue-50/40" : "hover:bg-slate-50"}`}>
      {/* Checkbox */}
      <td className="px-4 py-4">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onCheck(id, e.target.checked)}
          className="h-4 w-4 rounded border-slate-300 accent-blue-600"
        />
      </td>

      {/* Name */}
      <td className="px-4 py-4 text-sm font-medium text-slate-700">{patientName}</td>

      {/* Time */}
      <td className="px-4 py-4">
        <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-500">
          {time}
        </span>
      </td>

      {/* Mobile */}
      <td className="px-4 py-4 text-sm text-slate-500">{mobile ?? "+91 98765 43210"}</td>

      {/* Doctor */}
      <td className="px-4 py-4 text-sm text-slate-600">{doctor}</td>

      {/* Treatment */}
      <td className="px-4 py-4 text-sm text-slate-600">{treatment}</td>

      {/* Mode */}
      <td className="px-4 py-4">
        <span className={`flex items-center gap-1.5 text-sm font-medium ${MODE_STYLES[mode]}`}>
          <Headphones size={14} />
          {mode}
        </span>
      </td>

      {/* Status */}
      <td className="px-4 py-4">
        <span className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-semibold capitalize ${STATUS_STYLES[status]}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[status]}`} />
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </td>

      {/* Action */}
      <td className="px-4 py-4">
        <button className="text-slate-400 hover:text-slate-600">
          <Eye size={16} />
        </button>
      </td>
    </tr>
  );
}

export default AppointmentTableRow;
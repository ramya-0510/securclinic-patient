import { Stethoscope, Clock, Users } from "lucide-react";
import type { Appointment } from "../../types/appointment.types";

interface Props {
  appointment: Appointment;
  highlighted?: boolean;
}

const STATUS_STYLES: Record<Appointment["status"], string> = {
  pending:   "bg-sky-50 border-l-blue-400 border-sky-200",
  completed: "bg-sky-50 border-l-blue-400 border-sky-200",
  cancelled: "bg-sky-50 border-l-blue-400 border-sky-200",
  booked:    "bg-sky-50 border-l-blue-400 border-sky-200",
};

const STATUS_TEXT: Record<Appointment["status"], string> = {
  pending:   "text-blue-800",
  completed: "text-blue-800",
  cancelled: "text-blue-800",
  booked:    "text-blue-800",
};

export function CalendarAppointmentCard({
  appointment,
  highlighted = false,
}: Props) {
  const cardStyle = highlighted
    ? "bg-blue-50 border-l-blue-600 border-blue-300"
    : STATUS_STYLES[appointment.status];

  const textStyle = highlighted
    ? "text-blue-900"
    : STATUS_TEXT[appointment.status];

  return (
    <div
      className={`
        mt-0.5 rounded px-1.5 py-1 cursor-pointer
        border border-l-[3px] transition-opacity hover:opacity-80
        max-w-[80%]
        ${cardStyle}
      `}
    >
      <div className="flex items-center justify-between gap-1.5">
        <div className="flex items-center gap-1 min-w-0">
          <Stethoscope size={12} className="shrink-0 text-slate-600" />
          <span
            className={`text-[11px] font-semibold truncate leading-tight ${textStyle}`}
          >
            {appointment.patientName}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-0.5 text-[10px]">
        <span className="flex items-center gap-0.5 text-slate-500 whitespace-nowrap">
          <Clock size={10} />
          {appointment.time}
        </span>
        <span className="flex items-center gap-0.5 text-slate-500 whitespace-nowrap">
          <Users size={10} />
          {appointment.slot}
        </span>
      </div>
    </div>
  );
}

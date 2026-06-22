import { Clock, Layers, Stethoscope, ClipboardPlus, Headphones, Monitor } from "lucide-react";
import type { Appointment } from "../types/appointment.types";
import Button from "../../dashboard/components/ui/Button";

interface AppointmentRowProps {
  appointment: Appointment;
}

function AppointmentRow({ appointment }: AppointmentRowProps) {
  const isOnline = appointment.mode === "Online";

  return (
    <div className="flex items-center justify-between border-b border-slate-100 py-4">
      <div className="flex gap-3">
        <div className="w-1 rounded-full bg-blue-500 self-stretch" />
        <div>
          <p className="text-sm font-semibold text-slate-800">{appointment.patientName}</p>
          <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Monitor size={12} /> PID: {appointment.pid}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {appointment.time}
            </span>
            <span className="flex items-center gap-1">
              <Layers size={12} /> {appointment.slot}
            </span>
            <span className="flex items-center gap-1">
              <Stethoscope size={12} /> {appointment.doctor}
            </span>
            <span className="flex items-center gap-1">
              <ClipboardPlus size={12} /> {appointment.treatment}
            </span>
            <span className={`flex items-center gap-1 font-medium ${isOnline ? "text-blue-500" : "text-blue-500"}`}>
              <Headphones size={12} />
              {appointment.mode}
            </span>
          </div>
        </div>
      </div>

      <Button
        variant="primary"
        className="h-9 px-5 text-sm font-semibold"
      >
        {isOnline ? "Join" : "View"}
      </Button>
    </div>
  );
}

export default AppointmentRow;
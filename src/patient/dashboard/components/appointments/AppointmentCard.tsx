import {
  BriefcaseMedical,
  Clock3,
  Headphones,
  Stethoscope,
  Ticket,
} from "lucide-react";
import Button from "../ui/Button";

interface AppointmentCardProps {
  type: "Online" | "Clinic";
  action: "Join" | "View";
}

function AppointmentCard({ type, action }: AppointmentCardProps) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-3 border-l-4 border-blue-600 pl-2.5">
      <div className="min-w-0">
        <h3 className="truncate text-[11px] font-bold text-slate-800">
          John Mathew
        </h3>

        <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-semibold text-slate-500">
          <span className="flex items-center gap-1">
            <Clock3 size={11} />
            11.30 AM
          </span>
          <span className="flex items-center gap-1">
            <Ticket size={11} />
            Slot - 2 / 4
          </span>
          <span className="flex items-center gap-1">
            <Stethoscope size={11} />
            Dr. Prakash
          </span>
          <span className="flex items-center gap-1">
            <BriefcaseMedical size={11} />
            General Checkup
          </span>
          <span className="flex items-center gap-1 text-blue-600">
            <Headphones size={11} />
            {type}
          </span>
        </div>
      </div>

      <Button variant="primary" className="h-7 px-4 text-[11px]">
        {action}
      </Button>
    </div>
  );
}

export default AppointmentCard;

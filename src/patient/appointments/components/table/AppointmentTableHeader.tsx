import { Pencil, Clock, Phone, Stethoscope, Pill, Monitor, Activity } from "lucide-react";

const columns = [
  { label: "Name",      icon: Pencil },
  { label: "Time",      icon: Clock },
  { label: "Mobile",    icon: Phone },
  { label: "Doctor",    icon: Stethoscope },
  { label: "Treatment", icon: Pill },
  { label: "Mode",      icon: Monitor },
  { label: "Status",    icon: Activity },
];

function AppointmentTableHeader() {
  return (
    <thead>
      <tr className="border-b border-slate-100">
        <th className="w-10 px-4 py-3" />
        {columns.map(({ label, icon: Icon }) => (
          <th
            key={label}
            className="px-4 py-3 text-left text-sm font-medium text-slate-500"
          >
            <div className="flex items-center gap-1.5">
              <Icon size={14} className="text-slate-400" />
              {label}
            </div>
          </th>
        ))}
        <th className="w-10 px-4 py-3" />
      </tr>
    </thead>
  );
}

export default AppointmentTableHeader;
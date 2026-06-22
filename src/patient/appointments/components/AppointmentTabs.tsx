import { List, CalendarDays, Table } from "lucide-react";
import { useState } from "react";
import Select from "../../dashboard/components/ui/Select";

const tabs = [
  { label: "List",     icon: List },
  { label: "Calendar", icon: CalendarDays },
  { label: "Table",    icon: Table },
];

interface AppointmentTabsProps {
  active: string;
  onChange: (tab: string) => void;
}

function AppointmentTabs({ active, onChange }: AppointmentTabsProps) {
  const [selectedDoctor, setSelectedDoctor] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const showFilters = active === "Calendar" || active === "Table";

  return (
    <div className="flex items-center gap-3">
      {/* Tabs */}
      <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-1">
        {tabs.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => onChange(label)}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors
              ${active === label
                ? "bg-blue-600 text-white"
                : "text-slate-500 hover:bg-slate-50"
              }`}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>

      {/* Display + Status — shown for Calendar and Table */}
      {showFilters && (
        <>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-600">Display:</span>
            <Select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              options={[
                { label: "All Doctors", value: "all" },
                { label: "Dr. Prakash", value: "prakash" },
              ]}
              className="h-9 min-w-32 text-sm text-slate-700"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-600">Status:</span>
            <Select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              options={[
                { label: "All Status",  value: "all" },
                { label: "Completed",   value: "completed" },
                { label: "Pending",     value: "pending" },
                { label: "Cancelled",   value: "cancelled" },
                { label: "Booked",      value: "booked" },
              ]}
              className="h-9 min-w-32 text-sm text-slate-700"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default AppointmentTabs;
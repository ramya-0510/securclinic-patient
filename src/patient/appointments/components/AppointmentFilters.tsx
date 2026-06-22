import Select from "../../dashboard/components/ui/Select";

function AppointmentFilters() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 text-sm text-slate-600">
        <span className="font-medium">Display:</span>
        <Select
          options={[{ label: "All Doctors", value: "all" }]}
          className="h-9 min-w-32 text-sm text-slate-700"
        />
      </div>

      <div className="flex items-center gap-2 text-sm text-slate-600">
        <span className="font-medium">Status:</span>
        <Select
          options={[{ label: "All Status", value: "all" }]}
          className="h-9 min-w-32 text-sm text-slate-700"
        />
      </div>
    </div>
  );
}

export default AppointmentFilters;
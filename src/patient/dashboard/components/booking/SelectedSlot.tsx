import { CalendarDays } from "lucide-react";

function SelectedSlot() {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
      <div>
        <h2 className="text-xl font-bold text-slate-800">Selected Slots</h2>
        <div className="mt-1 flex items-center gap-2 text-xs font-semibold text-slate-700">
          <CalendarDays size={14} className="text-blue-600" />
          <span>Tuesday, 09 Dec 2025 &middot; 11:30 AM</span>
        </div>
      </div>

      <div className="flex h-11 min-w-28 items-center justify-center rounded-md bg-emerald-300 px-5 text-lg font-bold text-white">
        3 SLOTS
      </div>
    </div>
  );
}

export default SelectedSlot;

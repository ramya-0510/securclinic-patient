import { Calendar, Clock, LayoutGrid } from "lucide-react";
import { ChevronDown } from "lucide-react";

function ScheduleDateTime() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-base font-semibold text-slate-700">Schedule Date & Time</h3>

      <div className="grid grid-cols-3 gap-4">
        {/* Select Date */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-slate-500">Select Date</label>
          <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5">
            <Calendar size={14} className="text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              className="w-full text-sm text-slate-300 placeholder:text-slate-300 outline-none"
            />
            <Calendar size={14} className="text-slate-400 shrink-0" />
          </div>
        </div>

        {/* Available Time */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-slate-500">Available Time</label>
          <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5">
            <Clock size={14} className="text-slate-400 shrink-0" />
            <select className="w-full text-sm text-slate-300 outline-none appearance-none bg-transparent cursor-pointer">
              <option value="" disabled selected>--:-- --</option>
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
            </select>
            <ChevronDown size={14} className="text-slate-400 shrink-0" />
          </div>
        </div>

        {/* Available Slots */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-slate-500">Available Slots</label>
          <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5">
            <LayoutGrid size={14} className="text-slate-400 shrink-0" />
            <select className="w-full text-sm text-slate-300 outline-none appearance-none bg-transparent cursor-pointer">
              <option value="" disabled selected>Select Slot</option>
              <option value="1">Slot 1</option>
              <option value="2">Slot 2</option>
              <option value="3">Slot 3</option>
            </select>
            <ChevronDown size={14} className="text-slate-400 shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleDateTime;
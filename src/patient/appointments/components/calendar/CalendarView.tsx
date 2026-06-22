import { useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import CalendarGrid from "./CalendarGrid";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function CalendarView() {
  const [date, setDate] = useState({ month: 11, year: 2025 });

  const prev = () => {
    setDate((d) =>
      d.month === 0
        ? { month: 11, year: d.year - 1 }
        : { ...d, month: d.month - 1 }
    );
  };

  const next = () => {
    setDate((d) =>
      d.month === 11
        ? { month: 0, year: d.year + 1 }
        : { ...d, month: d.month + 1 }
    );
  };

  return (
    <div className="flex flex-col rounded-lg bg-white p-2 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-blue-600">
          <CalendarDays size={18} />
          <h2 className="text-base font-bold text-slate-800">
            Yearly Calendar
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50"
          >
            <ChevronLeft size={14} />
          </button>
          <span className="text-sm font-semibold text-slate-700">
            {MONTHS[date.month]} {date.year}
          </span>
          <button
            onClick={next}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <CalendarGrid month={date.month} year={date.year} />
    </div>
  );
}

export default CalendarView;
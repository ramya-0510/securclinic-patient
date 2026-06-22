import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../ui/Button";

function CalendarHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
        <CalendarDays size={15} className="text-blue-600" />
        <span>Dec 2025</span>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          className="h-5 w-5 rounded-full bg-blue-50 p-0 text-blue-500 hover:bg-blue-100"
        >
          <ChevronLeft size={14} className="text-blue-600" />
        </Button>
        <Button
          variant="secondary"
          className="h-5 w-5 rounded-full bg-blue-50 p-0 text-blue-500 hover:bg-blue-100"
        >
          <ChevronRight size={14} className="text-blue-600" />
        </Button>
      </div>
    </div>
  );
}

export default CalendarHeader;

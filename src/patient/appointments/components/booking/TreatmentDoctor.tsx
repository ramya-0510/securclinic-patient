import { ClipboardList, Stethoscope } from "lucide-react";
import { ChevronDown } from "lucide-react";

function TreatmentDoctor() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-base font-semibold text-slate-700">Treatment & Doctor</h3>

      <div className="grid grid-cols-2 gap-4">
        {/* Treatment */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-slate-500">Treatment</label>
          <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5">
            <ClipboardList size={14} className="text-slate-400 shrink-0" />
            <select className="w-full text-sm text-slate-300 outline-none appearance-none bg-transparent cursor-pointer">
              <option value="" disabled selected>Select Treatment</option>
              <option value="general">General Checkup</option>
              <option value="dental">Dental</option>
              <option value="cardiology">Cardiology</option>
            </select>
            <ChevronDown size={14} className="text-slate-400 shrink-0" />
          </div>
        </div>

        {/* Doctor */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-slate-500">Doctor</label>
          <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5">
            <Stethoscope size={14} className="text-slate-400 shrink-0" />
            <select className="w-full text-sm text-slate-300 outline-none appearance-none bg-transparent cursor-pointer">
              <option value="" disabled selected>Select Doctor</option>
              <option value="prakash">Dr. Prakash</option>
              <option value="kumar">Dr. Kumar</option>
            </select>
            <ChevronDown size={14} className="text-slate-400 shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TreatmentDoctor;
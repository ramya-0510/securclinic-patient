import { Pencil, Phone, CreditCard } from "lucide-react";
import { useState } from "react";

function PatientInformation() {
  const [isNewHere, setIsNewHere] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-base font-semibold text-slate-700">Patient Information</h3>

      <div className="grid grid-cols-3 gap-4">
        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-slate-500">Full Name</label>
          <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5">
            <Pencil size={14} className="text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full text-sm text-slate-600 placeholder:text-slate-300 outline-none"
            />
          </div>
        </div>

        {/* Mobile Number */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-slate-500">Mobile Number</label>
          <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5">
            <Phone size={14} className="text-slate-400 shrink-0" />
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="w-full text-sm text-slate-600 placeholder:text-slate-300 outline-none"
            />
          </div>
        </div>

        {/* Patient ID */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-slate-500">Patient ID (UHID)</label>
          <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5">
            <CreditCard size={14} className="text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Enter Patient ID"
              className="w-full text-sm text-slate-600 placeholder:text-slate-300 outline-none"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Didn't have an id?</span>
            <label className="flex items-center gap-1.5 text-xs text-slate-500 cursor-pointer">
              <input
                type="checkbox"
                checked={isNewHere}
                onChange={(e) => setIsNewHere(e.target.checked)}
                className="h-3.5 w-3.5 rounded accent-blue-600"
              />
              New Here
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientInformation;
import { Badge, Pencil, Phone } from "lucide-react";
import Input from "../ui/Input";

function PatientInfoForm() {
  return (
    <div className="border-b border-slate-200 pb-4">
      <h2 className="text-xl font-bold text-slate-800">Patient Information</h2>

      <div className="mt-2 grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium text-slate-700">Full Name</span>
          <div className="mt-1">
            <Input
              type="text"
              placeholder="Enter Full Name"
              leftIcon={<Pencil size={15} />}
            />
          </div>
        </label>

        <label className="block">
          <span className="text-xs font-medium text-slate-700">
            Mobile Number
          </span>
          <div className="mt-1">
            <Input
              type="text"
              placeholder="Enter Mobile Number"
              leftIcon={<Phone size={15} />}
            />
          </div>
        </label>
      </div>

      <label className="mt-2 block">
        <span className="text-xs font-medium text-slate-700">
          Patient ID (UHID)
        </span>
        <div className="mt-1">
          <Input
            type="text"
            placeholder="Enter Patient ID"
            leftIcon={<Badge size={15} />}
          />
        </div>
      </label>

      <div className="mt-1.5 flex items-center justify-between gap-4">
        <p className="text-xs font-medium text-slate-700">Didn't have an id?</p>
        <label className="flex items-center gap-2 text-xs font-medium text-slate-600">
          <input
            type="checkbox"
            defaultChecked
            className="h-3.5 w-3.5 accent-blue-600"
          />
          New Here
        </label>
      </div>
    </div>
  );
}

export default PatientInfoForm;

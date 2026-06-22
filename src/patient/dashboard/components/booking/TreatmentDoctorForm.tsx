import { ClipboardPlus, Stethoscope } from "lucide-react";
import Select from "../ui/Select";

function TreatmentDoctorForm() {
  return (
    <div>
      <h2 className="mt-0 text-xl font-bold text-slate-800">Treatment & Doctor</h2>

      <div className="mt-0 grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium text-slate-700">Treatment</span>
          <div className="mt-1">
            <Select
              defaultValue=""
              leftIcon={<ClipboardPlus size={15} />}
              className="h-10"
              options={[
                { label: "Select Treatment", value: "", disabled: true },
                { label: "General Checkup", value: "general-checkup" },
                { label: "Tooth Pain", value: "tooth-pain" },
                { label: "Consultation", value: "consultation" },
              ]}
            />
          </div>
        </label>

        <label className="block">
          <span className="text-xs font-medium text-slate-700">Doctor</span>
          <div className="mt-1">
            <Select
              defaultValue=""
              leftIcon={<Stethoscope size={15} />}
              className="h-10"
              options={[
                { label: "Select Doctor", value: "", disabled: true },
                { label: "Dr. Prakash", value: "dr-prakash" },
                { label: "Dr. Kavitha", value: "dr-kavitha" },
                { label: "Dr. Anand", value: "dr-anand" },
              ]}
            />
          </div>
        </label>
      </div>
    </div>
  );
}

export default TreatmentDoctorForm;

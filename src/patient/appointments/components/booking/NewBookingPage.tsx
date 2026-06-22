import { ArrowLeft, RefreshCw } from "lucide-react";
import PatientInformation from "./PatientInformation";
import TreatmentDoctor from "./TreatmentDoctor";
import ScheduleDateTime from "./ScheduleDateTime";
import Button from "../../../dashboard/components/ui/Button";

interface Props {
  onBack: () => void;
}

function NewBookingPage({ onBack }: Props) {
  const handleReset = () => {
    // reset logic later
  };

  return (
    <div className="flex flex-col gap-6 rounded-lg bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="text-lg font-semibold">New Appointments</span>
        </button>

        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
        >
          <RefreshCw size={14} />
          Reset
        </button>
      </div>

      {/* Sections */}
      <PatientInformation />
      <TreatmentDoctor />
      <ScheduleDateTime />

      {/* Confirm */}
      <div className="flex justify-end">
        <Button
          variant="primary"
          className="h-10 px-8 text-sm font-semibold"
        >
          Confirm Booking
        </Button>
      </div>
    </div>
  );
}

export default NewBookingPage;
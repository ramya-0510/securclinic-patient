import { UserRoundPlus } from "lucide-react";
import PatientInfoForm from "./PatientInfoForm";
import SelectedSlot from "./SelectedSlot";
import TreatmentDoctorForm from "./TreatmentDoctorForm";
import Button from "../ui/Button";
import Card from "../ui/Card";

interface PatientBookingProps {
  onConfirmBooking: () => void;
}

function PatientBooking({ onConfirmBooking }: PatientBookingProps) {
  return (
    <Card>
      <SelectedSlot />

      <div className="mt-1 space-y-4">
        <PatientInfoForm />
        <TreatmentDoctorForm />

        <div className="grid gap-4  md:grid-cols-2">
          <Button
            variant="secondary"
            leftIcon={<UserRoundPlus size={18} />}
            className=" h-10  text-sm font-bold"
          >
            Add Patient
          </Button>

          <Button
            variant="primary"
            onClick={onConfirmBooking}
            className="h-10 text-sm font-bold"
          >
            Confirm Booking
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default PatientBooking;

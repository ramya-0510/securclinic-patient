import { UserRoundPlus } from "lucide-react";
import CalendarHeader from "./CalendarHeader";
import DateSelector from "./DateSelector";
import SlotGrid from "./SlotGrid";
import SlotLegend from "./SlotLegend";
import Button from "../ui/Button";
import Card from "../ui/Card";

function ScheduleAppointment() {
  return (
    <Card className="flex h-full flex-col">
      <div>
        <h2 className="mt-0 text-lg font-bold text-slate-800">
          Schedule Appointment
        </h2>
        <p className="mt-0.5 text-xs font-medium text-slate-500">
          Choose date & slot. Max 4 bookings per slot.
        </p>
      </div>

      <div className="mt-2 flex flex-1 flex-col justify-between gap-2">
        <div className="space-y-2">
          <CalendarHeader />
          <DateSelector />
          <SlotGrid />
        </div>

        <SlotLegend />

        <Button
          variant="secondary"
          fullWidth
          leftIcon={<UserRoundPlus size={18} />}
          className="mb-2 mt-0 h-10 text-sm font-bold"
          style= {{ backgroundColor: "#F6F6F6"}}
        >
          Add Patient
        </Button>
      </div>
    </Card>
  );
}

export default ScheduleAppointment;
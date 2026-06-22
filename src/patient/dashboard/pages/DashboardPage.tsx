import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import StatsSection from "../components/stats/StatsSection";
import ScheduleAppointment from "../components/schedule/ScheduleAppointment";
import TodayAppointments from "../components/appointments/TodayAppointments";
import PatientSearch from "../components/patientSearch/PatientSearch";
import PatientBooking from "../components/booking/PatientBooking";
import AIChatbot from "../components/chatbot/AIChatbot";

interface Props {
  onLogoutClick: () => void;
}

function DashboardPage({ onLogoutClick }: Props) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <DashboardLayout onLogoutClick={onLogoutClick}>
        <div className="flex flex-col gap-3 h-full">
          <StatsSection />

          <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
            <div className="h-full overflow-hidden">
              {isBookingOpen ? (
                <PatientBooking onConfirmBooking={() => setIsBookingOpen(false)} />
              ) : (
                <ScheduleAppointment />
              )}
            </div>

            <div className="grid grid-rows-2 gap-2 h-full min-h-0">
              <div className="min-h-0 overflow-hidden">
                <TodayAppointments />
              </div>
              <div className="min-h-0 overflow-hidden">
                <PatientSearch onSearchPatient={() => setIsBookingOpen(true)} />
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>

      <AIChatbot />
    </>
  );
}

export default DashboardPage;
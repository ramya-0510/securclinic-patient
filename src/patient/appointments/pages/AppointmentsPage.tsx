// AppointmentsPage.tsx
import { useState } from "react";
import { CalendarDays, RefreshCw, Plus } from "lucide-react";
import DashboardLayout from "../../dashboard/components/layout/DashboardLayout";
import AppointmentTabs from "../components/AppointmentTabs";
import AppointmentFilters from "../components/AppointmentFilters";
import TodayAppointment from "../components/TodayAppointments";
import CalendarView from "../components/calendar/CalendarView";
import Button from "../../dashboard/components/ui/Button";
import AppointmentTableView from "../components/table/AppointmentTableView";
import NewBookingPage from "../components/booking/NewBookingPage.tsx";

interface Props {
  onLogoutClick: () => void;
}

function AppointmentsPage({ onLogoutClick }: Props) {
  const [activeTab, setActiveTab] = useState("List");
  const [showBooking, setShowBooking] = useState(false);

  return (
    <DashboardLayout headerTitle="Appointments" showSearch={false} onLogoutClick={onLogoutClick}>
      <div className="flex flex-col gap-4 h-full">

        {showBooking ? (
          <NewBookingPage onBack={() => setShowBooking(false)} />
        ) : (
          <>
            {/* Top bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AppointmentTabs active={activeTab} onChange={setActiveTab} />
                {activeTab === "List" && <AppointmentFilters />}
              </div>

              <div className="flex items-center gap-6">
                {activeTab === "Table" && (
                  <div className="flex items-center gap-1 text-sm font-medium text-blue-500">
                    <CalendarDays size={15} />
                    <span>09 Dec, Tue</span>
                  </div>
                )}

                <Button
                  variant="primary"
                  leftIcon={<Plus size={16} />}
                  className="h-10 px-5 text-sm font-semibold"
                  onClick={() => setShowBooking(true)}
                >
                  New Booking
                </Button>
              </div>
            </div>

            {/* Content */}
            {activeTab === "List" && (
              <div className="flex-1 rounded-lg bg-white p-5 shadow-sm overflow-y-auto">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-slate-800">Today's Appointments</h2>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <CalendarDays size={13} className="text-blue-600" />
                      09 Dec, Tue
                    </span>
                    <Button variant="ghost" leftIcon={<RefreshCw size={15} />} className="text-sm font-semibold">
                      Refresh
                    </Button>
                  </div>
                </div>
                <div className="mt-4 border-t border-slate-100">
                  <TodayAppointment />
                </div>
              </div>
            )}

            {activeTab === "Calendar" && (
              <div className="flex-1 min-h-0">
                <CalendarView />
              </div>
            )}

            {activeTab === "Table" && <AppointmentTableView />}
          </>
        )}

      </div>
    </DashboardLayout>
  );
}

export default AppointmentsPage;
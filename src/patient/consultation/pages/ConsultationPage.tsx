// ConsultationPage.tsx
import { useState } from "react";
import Sidebar from "../../dashboard/components/layout/Sidebar";
import Header from "../../dashboard/components/layout/Header";
import AvailableDoctors from "../components/AvailableDoctors";
import UpcomingConsultations from "../components/UpcomingConsultations";
import VideoArea from "../components/VideoArea";
import SessionSidebar from "../components/SessionSidebar";
import { CreditCard, Phone, Stethoscope } from "lucide-react";
import type { Consultation } from "../types/consultation.types";
import profile from "../../../assets/profile.jpg";

interface Props {
  onLogoutClick: () => void;
}

export default function ConsultationPage({ onLogoutClick }: Props) {
  const [activeSession, setActiveSession] = useState<Consultation | null>(null);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar onLogoutClick={onLogoutClick} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          title="Consultation Session"
          showSearch={false}
          onBack={activeSession ? () => setActiveSession(null) : undefined}
        />

        <main className="flex flex-1 flex-col overflow-hidden p-4 gap-4">

          {activeSession ? (

            <div className="flex-1 bg-white rounded-xl shadow-sm p-5 flex flex-col gap-4 overflow-hidden">

              <div className="flex items-center gap-4 shrink-0">
                <div className="w-0.5 h-10 bg-blue-600 rounded-full" />
                <img
                  src={profile}
                  alt={activeSession.patientName}
                  className="w-11 h-11 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="text-base font-semibold text-slate-800">{activeSession.patientName}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-0.5">
                    <span className="flex items-center gap-1"><CreditCard size={11} /> PID: {activeSession.patientId}</span>
                    <span className="text-slate-300">·</span>
                    <span className="flex items-center gap-1"><Phone size={11} /> {activeSession.mobile}</span>
                    <span className="text-slate-300">·</span>
                    <span className="flex items-center gap-1"><Stethoscope size={11} /> {activeSession.doctor}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 gap-4 overflow-hidden">
                <VideoArea onEndCall={() => setActiveSession(null)} />
                <SessionSidebar doctor={activeSession.doctor} />
              </div>

            </div>

          ) : (
            <>
              <AvailableDoctors />
              <UpcomingConsultations onJoin={(c) => setActiveSession(c)} />
            </>
          )}

        </main>
      </div>
    </div>
  );
}
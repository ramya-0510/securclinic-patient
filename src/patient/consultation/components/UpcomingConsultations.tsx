import { Calendar, RefreshCw } from "lucide-react";
import ConsultationTable from "./ConsultationTable";
import type { Consultation } from "../types/consultation.types";

interface Props {
  onJoin: (c: Consultation) => void;
}

export default function UpcomingConsultations({ onJoin }: Props) {
  const dateLabel = new Date().toLocaleDateString("en-GB", {
    day: "2-digit", month: "short", weekday: "short",
  });

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-800">Upcoming Consultations</h2>
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-blue-500" />
            <span className="text-blue-500 font-medium">{dateLabel}</span>
          </span>
          <span className="text-slate-300">|</span>
          <button className="flex items-center gap-1.5 hover:text-blue-600 transition">
            <RefreshCw size={13} /> Refresh
          </button>
        </div>
      </div>
      <ConsultationTable onJoin={onJoin} />
    </div>
  );
}
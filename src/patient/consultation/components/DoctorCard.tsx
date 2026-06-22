import { SlidersHorizontal } from "lucide-react";
import type { Doctor, DoctorStatus } from "../types/consultation.types";

interface Props {
  doctor: Doctor;
}

const statusConfig: Record<DoctorStatus, { label: string; bg: string; text: string }> = {
  available: { label: "Available", bg: "bg-[#16C472]", text: "text-white" },
  busy:      { label: "Busy",      bg: "bg-[#DFAF00]", text: "text-white" },
  offline:   { label: "Offline",   bg: "bg-[#6C7484]",   text: "text-white" },
};

export default function DoctorCard({ doctor }: Props) {
  const { label, bg, text } = statusConfig[doctor.status];

  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden w-52 shrink-0">
      {/* Top: avatar + name */}
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 shrink-0">
          {doctor.avatar ? (
            <img src={doctor.avatar} alt={doctor.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs font-bold">
              {doctor.name[0]}
            </div>
          )}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">{doctor.name}</p>
          <p className="text-xs text-slate-400">{doctor.specialty}</p>
        </div>
      </div>

      {/* Status bar */}
      <div className={`flex items-center justify-between px-4 py-2 ${bg}`}>
        <span className={`text-sm font-medium ${text}`}>{label}</span>
        <SlidersHorizontal size={15} className={text} />
      </div>
    </div>
  );
}
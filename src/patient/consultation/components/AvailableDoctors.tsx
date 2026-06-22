import { useState } from "react";
import { ChevronDown } from "lucide-react";
import DoctorCard from "./DoctorCard";
import type { Doctor, DoctorStatus } from "../types/consultation.types";
import profile from "../../../assets/profile.jpg";

const MOCK_DOCTORS: Doctor[] = [
  { id: "1", name: "Dr.Prakash", specialty: "Cardiologist", status: "available", avatar: profile },
  { id: "2", name: "Dr.Prakash", specialty: "Cardiologist", status: "available", avatar: profile },
  { id: "3", name: "Dr.Prakash", specialty: "Cardiologist", status: "busy",      avatar: profile },
  { id: "4", name: "Dr.Prakash", specialty: "Cardiologist", status: "busy",      avatar: profile },
  { id: "5", name: "Dr.Prakash", specialty: "Cardiologist", status: "offline",   avatar: profile },
  { id: "6", name: "Dr.Prakash", specialty: "Cardiologist", status: "offline",   avatar: profile },
];

export default function AvailableDoctors() {
  const [displayFilter, setDisplayFilter] = useState("All Doctors");
  const [statusFilter, setStatusFilter] = useState<"All Status" | DoctorStatus>("All Status");

  const filtered = MOCK_DOCTORS.filter((d) =>
    statusFilter === "All Status" ? true : d.status === statusFilter
  );

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-800">Available Doctors</h2>
        <div className="flex items-center gap-2">
          {/* Display filter */}
          {/* Display filter */}
<div className="flex items-center gap-0 border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 transition">
  <span className="text-sm text-slate-500 px-3 py-1.5 bg-white shrink-0">Display:</span>
  <div className="relative">
    <select
      value={displayFilter}
      onChange={(e) => setDisplayFilter(e.target.value)}
      className="appearance-none text-sm font-medium text-slate-700 bg-white pl-1 pr-7 py-1.5 outline-none cursor-pointer"
    >
      <option>All Doctors</option>
      <option>My Doctors</option>
    </select>
    <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">
      <ChevronDown size={14} />
    </span>
  </div>
</div>

{/* Status filter */}
<div className="flex items-center gap-0 border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 transition">
  <span className="text-sm text-slate-500 px-3 py-1.5 bg-white shrink-0">Status:</span>
  <div className="relative">
    <select
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
      className="appearance-none text-sm font-medium text-slate-700 bg-white pl-1 pr-7 py-1.5 outline-none cursor-pointer"
    >
      <option>All Status</option>
      <option value="available">Available</option>
      <option value="busy">Busy</option>
      <option value="offline">Offline</option>
    </select>
    <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">
      <ChevronDown size={14} />
    </span>
  </div>
</div>

          {/* Status filter */}
          
        </div>
      </div>

      {/* Doctor cards row */}
      <div className="flex gap-3 overflow-x-auto pb-1">
        {filtered.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
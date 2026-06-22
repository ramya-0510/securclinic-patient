import { Code2, AlignLeft, Phone, Mail } from "lucide-react";
import type { DomainContactSettings } from "../../types/settings.types";

const DOMAINS = [
  "General Medicine",
  "Dentistry",
  "Cardiology",
  "Dermatology",
  "Orthopaedics",
  "Paediatrics",
  "Gynaecology",
  "Ophthalmology",
];

interface Props {
  data: DomainContactSettings;
  onChange: (updated: Partial<DomainContactSettings>) => void;
}

export function DomainContactSection({ data, onChange }: Props) {
  return (
    <div className="flex flex-col gap-6 p-6">

      {/* Row 1 — Primarily Domain + Clinic Description */}
      <div className="flex gap-6">
        {/* Primarily Domain */}
        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-[13px] font-medium text-slate-700">
            Primarily Domain
          </label>
          <div className="relative">
            <Code2
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <select
              value={data.primaryDomain}
              onChange={e => onChange({ primaryDomain: e.target.value })}
              className="w-full appearance-none pl-9 pr-9 py-2.5 rounded-lg border border-slate-200
                text-[13px] text-slate-500 bg-white
                focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition"
            >
              <option value="">Select Domain</option>
              {DOMAINS.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        {/* Clinic Description */}
        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-[13px] font-medium text-slate-700">
            Clinic Description
          </label>
          <div className="relative">
            <AlignLeft
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="text"
              value={data.clinicDescription}
              onChange={e => onChange({ clinicDescription: e.target.value })}
              placeholder="Short Description for footer"
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200
                text-[13px] text-slate-700 placeholder:text-slate-400 bg-white
                focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition"
            />
          </div>
        </div>
      </div>

      {/* Row 2 — Support Phone + Support Email */}
      <div className="flex gap-6">
        {/* Support Phone */}
        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-[13px] font-medium text-slate-700">
            Support Phone
          </label>
          <div className="relative">
            <Phone
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="tel"
              value={data.supportPhone}
              onChange={e => onChange({ supportPhone: e.target.value })}
              placeholder="Enter Phone Number"
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200
                text-[13px] text-slate-700 placeholder:text-slate-400 bg-white
                focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition"
            />
          </div>
        </div>

        {/* Support Email */}
        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-[13px] font-medium text-slate-700">
            Support Email
          </label>
          <div className="relative">
            <Mail
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="email"
              value={data.supportEmail}
              onChange={e => onChange({ supportEmail: e.target.value })}
              placeholder="Enter Email"
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200
                text-[13px] text-slate-700 placeholder:text-slate-400 bg-white
                focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
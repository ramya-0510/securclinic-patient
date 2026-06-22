import { Users } from "lucide-react";
import type { StaffMember } from "../../types/settings.types";

interface Props {
  staffList: StaffMember[];
}

export function ViewStaffSection({ staffList }: Props) {
  if (staffList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3 text-center">
        <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center">
          <Users size={24} className="text-slate-400" />
        </div>
        <p className="text-[14px] font-semibold text-slate-600">No staff added yet</p>
        <p className="text-[13px] text-slate-400">
          Switch to the Add Staff tab to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 p-6">
      {staffList.map(member => (
        <div
          key={member.id}
          className="flex items-center gap-4 px-4 py-3.5 rounded-lg border border-slate-200 bg-white"
        >
          {/* Avatar */}
          <div className="w-11 h-11 rounded-full border border-slate-200 bg-slate-100
            flex items-center justify-center overflow-hidden shrink-0"
          >
            {member.profilePicture ? (
              <img
                src={member.profilePicture}
                alt={member.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="#9CA3AF" strokeWidth="1.5"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-0.5 min-w-0">
            <p className="text-[13px] font-semibold text-slate-800 truncate">
              {member.fullName}
            </p>
            <p className="text-[12px] text-slate-500 truncate">
              {[member.designation, member.specialization].filter(Boolean).join(" · ")}
            </p>
            <p className="text-[12px] text-slate-400 truncate">
              {[member.email, member.phone].filter(Boolean).join(" · ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
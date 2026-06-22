import { useRef, useState } from "react";
import {
  Pencil,
  Star,
  Users,
  CalendarDays,
  Mail,
  Phone,
  MapPin,
  Upload,
} from "lucide-react";
import type { StaffFormData } from "../../types/settings.types";

const DESIGNATIONS = [
  "Doctor",
  "Nurse",
  "Receptionist",
  "Pharmacist",
  "Lab Technician",
  "Admin",
];

interface Props {
  onSubmit: (data: StaffFormData) => void;
}

export function AddStaffForm({ onSubmit }: Props) {
  const [form, setForm] = useState<StaffFormData>({
    fullName: "",
    specialization: "",
    designation: "",
    experience: "",
    email: "",
    phone: "",
    address: "",
    profilePicture: null,
  });

  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const set = (field: Partial<StaffFormData>) =>
    setForm(prev => ({ ...prev, ...field }));

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!["image/jpeg", "image/png"].includes(file.type)) {
      alert("Only JPG and PNG files are allowed.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be under 5 MB.");
      return;
    }
    setPreview(URL.createObjectURL(file));
    set({ profilePicture: file });
  };

  const inputCls = `w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200
    text-[13px] text-slate-700 placeholder:text-slate-400 bg-white
    focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition`;

  const iconCls =
    "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none";

  return (
    <div className="flex flex-col gap-6 p-6">

      {/* Row 1 — Full Name + Specialization */}
      <div className="flex gap-6">
        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-[13px] font-medium text-slate-700">Full Name</label>
          <div className="relative">
            <Pencil size={14} className={iconCls} />
            <input
              type="text"
              value={form.fullName}
              onChange={e => set({ fullName: e.target.value })}
              placeholder="Enter Full Name"
              className={inputCls}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-[13px] font-medium text-slate-700">Enter Specialization</label>
          <div className="relative">
            <Star size={14} className={iconCls} />
            <input
              type="text"
              value={form.specialization}
              onChange={e => set({ specialization: e.target.value })}
              placeholder="Eg: Cardiologist, Dentist"
              className={inputCls}
            />
          </div>
        </div>
      </div>

      {/* Row 2 — Designation + Experience */}
      <div className="flex gap-6">
        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-[13px] font-medium text-slate-700">Designation</label>
          <div className="relative">
            <Users size={14} className={iconCls} />
            <select
              value={form.designation}
              onChange={e => set({ designation: e.target.value })}
              className={`${inputCls} appearance-none pr-9`}
            >
              <option value="">Enter your Designation</option>
              {DESIGNATIONS.map(d => (
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

        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-[13px] font-medium text-slate-700">Experience</label>
          <div className="relative">
            <CalendarDays size={14} className={iconCls} />
            <input
              type="text"
              value={form.experience}
              onChange={e => set({ experience: e.target.value })}
              placeholder="Eg: 5 Years of Experience"
              className={inputCls}
            />
          </div>
        </div>
      </div>

      {/* Row 3 — Email + Phone */}
      <div className="flex gap-6">
        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-[13px] font-medium text-slate-700">Email Adresss</label>
          <div className="relative">
            <Mail size={14} className={iconCls} />
            <input
              type="email"
              value={form.email}
              onChange={e => set({ email: e.target.value })}
              placeholder="Enter your Email Address"
              className={inputCls}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-[13px] font-medium text-slate-700">Phone Number</label>
          <div className="relative">
            <Phone size={14} className={iconCls} />
            <input
              type="tel"
              value={form.phone}
              onChange={e => set({ phone: e.target.value })}
              placeholder="Enter your Phone Number"
              className={inputCls}
            />
          </div>
        </div>
      </div>

      {/* Row 4 — Address + Profile Picture */}
      <div className="flex gap-6">
        {/* Address */}
        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-[13px] font-medium text-slate-700">Address</label>
          <div className="relative">
            <MapPin
              size={14}
              className="absolute left-3 top-3 text-slate-400 pointer-events-none"
            />
            <textarea
              rows={4}
              value={form.address}
              onChange={e => set({ address: e.target.value })}
              placeholder="Enter Full Address"
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200
                text-[13px] text-slate-700 placeholder:text-slate-400 bg-white resize-none
                focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition"
            />
          </div>
        </div>

        {/* Profile Picture */}
        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-[13px] font-medium text-slate-700">Profile Picture</label>
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="flex items-center gap-4 w-full h-full min-h-[108px] px-5 rounded-lg
              border border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/40
              transition cursor-pointer text-left"
          >
            {/* Avatar */}
            <div className="w-14 h-14 rounded-full border-2 border-slate-200 bg-slate-50
              flex items-center justify-center overflow-hidden shrink-0"
            >
              {preview ? (
                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                  stroke="#9CA3AF" strokeWidth="1.5"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              )}
            </div>
            {/* Text */}
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-1.5 text-[14px] font-semibold text-blue-600">
                <Upload size={14} />
                Upload Photo
              </span>
              <span className="text-[12px] text-slate-400">
                Allowed: JPG, PNG, Max 5MB.
              </span>
            </div>
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png"
            className="hidden"
            onChange={handlePhoto}
          />
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onSubmit(form)}
          className="px-8 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700
            text-white text-[14px] font-semibold transition"
        >
          Add Staff
        </button>
      </div>

    </div>
  );
}
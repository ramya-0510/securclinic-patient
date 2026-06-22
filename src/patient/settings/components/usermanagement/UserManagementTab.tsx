import { useState } from "react";
import { UserPlus, Users } from "lucide-react";
import { AddStaffForm } from "./AddStaffForm";
import { ViewStaffSection } from "./ViewStaffSection";
import type { StaffFormData, StaffMember } from "../../types/settings.types";

type Tab = "add" | "view";

export function UserManagementTab() {
  const [activeTab, setActiveTab] = useState<Tab>("add");
  const [staffList, setStaffList] = useState<StaffMember[]>([]);

  const handleAddStaff = (data: StaffFormData) => {
    const newMember: StaffMember = {
      id: `staff_${Date.now()}`,
      fullName: data.fullName,
      specialization: data.specialization,
      designation: data.designation,
      experience: data.experience,
      email: data.email,
      phone: data.phone,
      address: data.address,
      profilePicture: data.profilePicture
        ? URL.createObjectURL(data.profilePicture)
        : undefined,
    };
    setStaffList(prev => [...prev, newMember]);
    setActiveTab("view");
  };

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: "add",  label: "Add Staff",  icon: <UserPlus size={14} /> },
    { key: "view", label: "View Staff", icon: <Users size={14} /> },
  ];

  return (
    <div className="flex flex-col">

      {/* Tab bar + Add New Staff button */}
      <div className="flex items-center justify-between border-b border-slate-200">
        <div className="flex">
          {tabs.map(tab => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-5 py-3 text-[13px] font-medium
                border-b-2 transition -mb-px
                ${activeTab === tab.key
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setActiveTab("add")}
          className="flex items-center gap-1.5 mr-6 px-4 py-2 rounded-lg border border-slate-200
            text-[13px] font-medium text-slate-600 hover:border-blue-400 hover:text-blue-600
            hover:bg-blue-50/40 transition"
        >
          <UserPlus size={14} />
          Add New Staff
        </button>
      </div>

      {/* Tab content */}
      {activeTab === "add" && (
        <AddStaffForm onSubmit={handleAddStaff} />
      )}
      {activeTab === "view" && (
        <ViewStaffSection staffList={staffList} />
      )}

    </div>
  );
}
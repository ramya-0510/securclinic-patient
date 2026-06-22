// SettingsPage.tsx
import { useState } from "react";
import Sidebar from "../../dashboard/components/layout/Sidebar";
import Header  from "../../dashboard/components/layout/Header";
import { SettingsTabs }      from "../components/SettingsTabs";
import { AppearanceTab }     from "../components/appearance/AppearanceTab";
import { GlobalSettingsTab } from "../components/global/GlobalSettingsTab";
import { UserManagementTab } from "../components/usermanagement/UserManagementTab";
import type { SettingsTab }  from "../types/settings.types";

interface Props {
  onLogoutClick: () => void;
}

export default function SettingsPage({ onLogoutClick }: Props) {
  const [activeTab, setActiveTab] = useState<SettingsTab>("Appearance");

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar onLogoutClick={onLogoutClick} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header title="Settings" showSearch={false} />

        <main className="flex-1 overflow-y-auto p-4">
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">

            <div className={`flex items-center justify-between px-6 py-4 ${activeTab === "Appearance" ? "border-b border-slate-200" : ""}`}>
              <h2 className="text-[18px] font-bold text-slate-800">
                Application Settings
              </h2>
              <SettingsTabs active={activeTab} onChange={setActiveTab} />
            </div>

            {activeTab === "Appearance"      && <AppearanceTab />}
            {activeTab === "Global Settings" && <GlobalSettingsTab />}
            {activeTab === "User Management" && <UserManagementTab />}
          </div>
        </main>
      </div>
    </div>
  );
}
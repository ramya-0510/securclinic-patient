import { Paintbrush, Globe, Users } from "lucide-react";
import type { SettingsTab } from "../types/settings.types";

interface Props {
  active: SettingsTab;
  onChange: (tab: SettingsTab) => void;
}

const TABS: { label: SettingsTab; icon: typeof Paintbrush }[] = [
  { label: "Appearance",       icon: Paintbrush },
  { label: "Global Settings",  icon: Globe      },
  { label: "User Management",  icon: Users      },
];

export function SettingsTabs({ active, onChange }: Props) {
  return (
    <div className="flex items-center gap-1">
      {TABS.map(({ label, icon: Icon }) => (
        <button
          key={label}
          onClick={() => onChange(label)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
            ${active === label
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-500 hover:bg-slate-100"
            }`}
        >
          <Icon size={15} />
          {label}
        </button>
      ))}
    </div>
  );
}
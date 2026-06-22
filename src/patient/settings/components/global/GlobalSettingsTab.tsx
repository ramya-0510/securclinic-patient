import { useState } from "react";
import { Code2, Settings2 } from "lucide-react";
import { DomainContactSection } from "./DomainContactSection";
import { ServiceTreatmentSection } from "./ServiceTreatmentSection";
import type {
  DomainContactSettings,
  TreatmentItem,
} from "../../types/settings.types";

type Tab = "domain" | "service";

export function GlobalSettingsTab() {
  const [activeTab, setActiveTab] = useState<Tab>("domain");

  const [domainContact, setDomainContact] = useState<DomainContactSettings>({
    primaryDomain: "",
    clinicDescription: "",
    supportPhone: "",
    supportEmail: "",
  });

  const [treatments, setTreatments] = useState<TreatmentItem[]>([
    { id: "item_1", name: "", price: 0 },
  ]);

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    {
      key: "domain",
      label: "Domain & Contact",
      icon: <Code2 size={14} />,
    },
    {
      key: "service",
      label: "Service & Treatment",
      icon: <Settings2 size={14} />,
    },
  ];

  return (
    <div className="flex flex-col">

      {/* Tab bar */}
      <div className="flex border-b border-slate-200">
        {tabs.map(tab => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-5 py-3 text-[13px] font-medium border-b-2
              transition -mb-px
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

      {/* Tab content */}
      {activeTab === "domain" && (
        <DomainContactSection
          data={domainContact}
          onChange={updated =>
            setDomainContact(prev => ({ ...prev, ...updated }))
          }
        />
      )}
      {activeTab === "service" && (
        <ServiceTreatmentSection
          items={treatments}
          onChange={setTreatments}
        />
      )}

    </div>
  );
}